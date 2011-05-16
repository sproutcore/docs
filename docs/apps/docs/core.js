// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

/*globals Docs */

/** @namespace

  Docs is a documentation viewer for SproutCore-based Apps and for the
  SproutCore framework itself. It runs alongside the sc-docs script (Which
  ships with the same sc-docs.git repository this app is contained within),
  and uses a nodejs-based jsdoc-toolkit engine to parse and generate the 
  fixtures data this app will render.

  If you encounter any other issues, please let me know (majd@sproutcore.com)

  @extends SC.Object
*/
Docs = SC.Application.create(
  /** @scope Docs.prototype */ {

  NAMESPACE: 'Docs',
  VERSION: '0.1.0',

  trimCommonLeadingWhitespace: function(string) {

    var splitString = string.split('\n');
    var len = splitString.length;
    var min = Infinity;

    for (var i = 0; i<len; i++) {
      var line = splitString[i];
      var matches = line.match(/^\s+/);

      if(matches && matches[0].length < min) {
        min = matches[0].length;
      }
    } 

    if (min === Infinity || min === 0) return string;

    // The first line is always free of any leading whitespace
    for (i = 1; i<len; i++) {
      splitString[i] = splitString[i].substr(min);
    }

    return splitString.join('\n');
  },

  /**
    A hash used to match symbol names to the classes they belong to.

    A single name can map to more than one class. For instance, if SC.View
    has a 'childViews' property but so does MyRandomThingy, the childViews
    property will be mapped to both.

    This is built as part of the buildIndex method.

  */
  indexHash: null,

  /**
    An array of symbol names used to quickly iterate and search over the
    symbols. This array contains the keys of the indexHash. We separate it
    for performance: iterating over an array is much faster than iterating
    over the keys in a hash.
  */
  indexArray: null,

  buildIndex: function(/** SC.RecordArray */classes) {
    // first, build the hash.
    var hash = {};
    var that = this;

    classes.forEach(function(object, index){
      var name = object.get('displayName');

      hash[name] = [{
        value: object.get('storeKey'),
        parent: null,
        displayName: name
      }];

      var properties = object.get('properties');
      that._indexSymbols(hash,properties,object);

      var methods = object.get('methods');
      that._indexSymbols(hash,methods,object);
    });

    this.set('indexHash',hash);

    // one time only, we'll iterate over the keys in the hash
    // we just created, to generate the ultra-fast array index:
    var indexArray = [];
    for (var symbolName in hash) { 
      if (hash.hasOwnProperty(symbolName)) { 
        var pIdx = symbolName.indexOf("#"),
            name = '', className = '';

        if (pIdx < 0) pIdx = symbolName.length;
        className = symbolName.substr(0, pIdx);
        name = symbolName.substr(pIdx + 1);

        indexArray.push({
          fullName: symbolName,
          className: className,
          name: name
        }); 
      } 
    }

    this.set('indexArray', indexArray.sort());
  },

  _indexSymbols: function(hash,symbols,parent) {
    symbols.forEach(function(symbol, index) {
      var name = symbol.get('displayName');
      var existing = hash[name];

      var methodHash = {
        value: symbol.get('storeKey'),
        parent: parent.get('storeKey'),
        displayName: symbol.get('displayName')
      };

      if (existing && SC.typeOf(existing) === SC.T_ARRAY) {
        existing.push(methodHash);
      } 
      else {
        existing = [methodHash]; 
      }

      hash[name] = existing;
    });
  },

  /** record array representing all the classes */
  allClassesRecordArray: null,

  wasRouted: NO,

  // This is your application store.  You will use this store to access all
  // of your model data.  You can also set a data source on this store to
  // connect to a backend server.  The default setup below connects the store
  // to any fixtures you define.
  store: SC.Store.create().from(SC.Record.fixtures),

  routeToClass: function(params){ 
    Docs.set('wasRouted',YES);

    var className = params['class'];
    if(!className) {return;}

    query = SC.Query.local(Docs.Class,{
      conditions: 'displayName = "%@"'.fmt(className)
    });
    var items = Docs.store.find(query);
    var firstObject = items.get('firstObject');

    if(Docs.classesController.getPath('selection.firstObject') === firstObject) {
      return;
    }

    var collection = Docs.mainPage.getPath('mainPane.sidebar.classList.contentView');
    var itemView = collection.itemViewForContentObject(firstObject);
    Docs.classesController.selectObject(firstObject);
    collection.scrollToItemView(itemView);

    return items.get('firstObject');
  },

  routeToSymbol: function(params){

    // If no className is provided, assume that the currently selected
    // class contains the symbol
    var className = params['class'];
    var symbolName = params['symbol'];

    var selectedClass = this.routeToClass(params);

    if(!selectedClass || !symbolName) {
      return;
    }
  
    var that = this;
    // We have to wait for the class selection to propagate
    this.invokeLater(function(){

      var symbols = Docs.selectedClassController.get('symbols');
      var matches = symbols.filterProperty('name',symbolName);

      var firstObject = matches.get('firstObject');

      if (!firstObject) {
        return NO;
      }

      if(Docs.selectedClassController.getPath('symbolSelection.firstObject') === firstObject) {
        return NO;
      }

      var sel = SC.SelectionSet.create();
      sel.addObjects([firstObject]).freeze();

      Docs.selectedClassController.set('symbolSelection',sel);
    });

    return YES;
  }

}) ;

Handlebars.registerHelper('debug', function(object) {

  console.log(this.get(object));

  return '';
});
