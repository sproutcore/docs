// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*globals SC*/

/** @class

  Manages the search feature

  @author Majd Taby
  @extends SC.Object
  @since SproutCore 1.5
*/
Docs.searchController = SC.ArrayController.create({
  searchQuery: '',
  isSearching: NO,

  runQuery: function(sender){
    this._runSearch(sender.get('value'));
  },

  queryDidChange: function(){
    var query = this.get('searchQuery');
    if (!query.length) {
      this._clearSearch();
    }

    var that = this;
    this.invokeLater(function() {
      that._runSearch(query);
    });

  }.observes('searchQuery'),

  _selectionDidChange: function(){

    var content = this.getPath('selection.firstObject');

    if(content) {
      var belongsTo = content.get('symbolBelongsTo');
      if (belongsTo) {

        var sel = SC.SelectionSet.create();
        sel.addObjects([content]).freeze();
        Docs.selectedClassController.set('symbolSelection',sel);
        
        content = Docs.store.materializeRecord(belongsTo);
      }
      Docs.selectedClassController.set('content',content);
      SC.routes.set('location',content.get('displayName'));
    }

  }.observes('selection'),

  _clearSearch: function(){
    this.set('isSearching',NO);
  },

  _runSearch: function(query){
    this.set('isSearching',YES);

    var matches = this._findMatchesForQuery(query);

    if (matches) {
      console.log('matches = ',matches);
      this.set('content',matches);
    }
  },

  _findMatchesForQuery: function(query) {
    var indexHash = Docs.get('indexHash');
    var classMatches = [];
    var symbolMatches = null;

    // Go through every symbol, try to match the name of the class first
    for(var name in indexHash){

      if (indexHash.hasOwnProperty(name) && name.indexOf(query) !== -1) {
        var arr = indexHash[name];

        for(var i = 0, len = arr.length; i < len; i++) {
          var obj = arr[i];
          var storeObject = Docs.store.materializeRecord(obj.value);

          storeObject.set('symbolBelongsTo',obj.parent);
          classMatches.push(storeObject);
        }
      }
    };

    return classMatches;
  }
});
