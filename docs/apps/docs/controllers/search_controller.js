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

  // the action we take when the selection changes takes awhile. So, we'll
  // delay it until 250ms after the last change in selection.
  _selectionDidChange: function() {
    if (this._willPropagateSelectionChange) {
      this._willPropagateSelectionChange.invalidate();
    }

    this._willPropagateSelectionChange = this.invokeLater('_propagateSelectionChange', 250);
  }.observes('selection'),
  
  _propagateSelectionChange: function(){
    this._willPropagateSelectionChange.invalidate();
    this._willPropagateSelectionChange = NO;

    var item = this.getPath('selection.firstObject');

    if(item) {
      // the search contains just plain SC Objects; we must get the
      // actual record corresponding to the selected object.
      var content = Docs.store.materializeRecord(item.get('storeKey'));
      content.set('symbolBelongsTo', item.get('parentStoreKey'));

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

  },

  _clearSearch: function(){
    this.set('isSearching',NO);
  },

  _runSearch: function(query){
    this.set('isSearching',YES);

    var matches = this._findMatchesForQuery(query);

    if (matches) {
      this.set('content', matches);
    }
  },

  /**
    String names of methods that perform searching. Each method should be on this controller
    and return either NO (if no match) or a hash containing the name of the match and any search metadata
    (particularly searchNameMarkup, which may contain an HTML-annotated version of the search).

    Each algorithm should take two arguments:

    - query: the search string entered by the user
    - name: a name to match it against

    The algorithms should be in order of priority. The search results will be sorted in this order.
  */
  searchAlgorithms: [
    'nameBeginsWithCaseSensitive',
    'classBeginsWithCaseSensitive',
    'classContainsCaseSensitive',
    'nameBeginsWith',
    'classBeginsWith',
    'nameContains',
    'classContains'//,
//    'fuzzy'
    //'searchBeginsWithInsensitive',
    //'searchMethodBeginsWithInsensitive',
    
    //'searchContainsInsensitive'

  ],

  /**
    @private
    Finds all matching symbols for a given query string. This is the heart of the search logic.

    The goal is to match a variety of different circumstances, but at different priorities.
    For instance, matches in the middle of a string should be less preferred than matches
    at the beginning.
)
    The algorithm is:

    - Call each search algorithm to create a bucket with all matching items.

      The searching algorithms take the array of names, but return an array of hashes
      containing search metadata in addition to the name.

    - Combine the buckets into one array, in order, but don't include duplicates.
      To keep track of duplicates, a hash of included items is kept.

    - Find the records matching the names from the store. Annotate with the
      search metadata.

    - Return the records.

  */
  _findMatchesForQuery: function(query) {
    var matches = [];
    var indexArray = Docs.get('indexArray'), indexHash = Docs.get('indexHash');
    var algorithms = this.get('searchAlgorithms'), buckets = [];
    var idx, len, algorithmIdx, algorithmLen, algorithm, match;

    // create buckets
    for (idx = 0, len = algorithms.length; idx < len; idx++) {
      var algorithmName = algorithms[idx];
      buckets.push([]);
    }


    for (idx = 0, len = indexArray.length; idx < len; idx++) {
      // for each item we search through, call each search algorithm:
      //
      // the algorithms array contains a list of string method names 
      // to call on ourselves
      algorithmLen = algorithms.length;

      for (algorithmIdx = 0; algorithmIdx < algorithmLen; algorithmIdx++) {
        algorithm = this[algorithms[algorithmIdx]];

        // the algorithms return search metadata. Capture it; if it exists,
        // there was a match and we should add the search metadata to the
        // search results.
        match = algorithm.call(this, query, indexArray[idx]);

        if (match) {
          buckets[algorithmIdx].push(match);
        }
      }
    }

    // combine the contents of the buckets, in order, so we get
    // results sorted by relevancy first, then by name (indexArray
    // begins sorted by name)
    var included = {};
    for (idx = 0, len = buckets.length; idx < len; idx++) {
      var bucket = buckets[idx], matchLen, matchIdx;

      // we can calculate relavance by first giving the match a number of "points"
      // and then dividing that by the possible total number of points.
      //
      // because the best result is the one in the earliest buckets, the points
      // is bucket count - bucket index.
      var relevance = (len - idx) / len;

      for (matchIdx = 0, matchLen = bucket.length; matchIdx < matchLen; matchIdx++) {
        match = bucket[matchIdx];

        // add relevance to the search metadata
        match.searchRelevance = relevance;

        // only add to the final collection of matches IF it is not already included
        if (!included[match.fullName]) {
          included[match.fullName] = YES;
          matches.push(match);
        }
      }
    }

    var classMatches = [];

    // Finally, find all of the symbol/class combinations and create the final
    // list of search results.
    for (idx = 0, len = matches.length; idx < len; idx++) {
      match = matches[idx];
      var name = match.fullName, symbols = indexHash[name],
          symbolLen = symbols.length;

      for (var symbolIdx = 0; symbolIdx < symbolLen; symbolIdx++) {
        var symbol = symbols[symbolIdx];

        // the search results consist of these custom items we create.
        var res = SC.Object.create({
          name: match.name,
          searchNameMarkup: match.searchNameMarkup,
          didMatchName: match.didMatchName,

          className: match.className,
          searchClassNameMarkup: match.searchClassNameMarkup,
          didMatchClassName: match.didMatchClassName,

          storeKey: symbol.value,
          parentStoreKey: symbol.parent
        });

        classMatches.push(res);
      }
    }

    return classMatches;
  },

  // 
  // SEARCH ALGORITHMS
  //

  classBeginsWith: function(query, item, sensitive) {
    var name = item.className, match;

    if (!sensitive) {
      match = (name.toLowerCase().indexOf(query.toLowerCase()) === 0);
    } else {
      match = (name.indexOf(query) === 0);
    }

    if (match) {
      // create the HTML-annotated version
      var nameMarkup = "<span class='search-begin-match'>";
      nameMarkup += name.substr(0, query.length);
      nameMarkup += "</span>";
      nameMarkup += name.substr(query.length);

      var metadata = {
        fullName: item.fullName,
        name: item.name,
        searchClassNameMarkup: nameMarkup,
        searchNameMarkup: item.name,
        didMatchClassName: YES
      };

      return metadata;
    } else {
      return false;
    }
  },

  classBeginsWithCaseSensitive: function(query, item) {
    return this.classBeginsWith(query, item, YES);
  },


  nameBeginsWith: function(query, item, sensitive) {
    var name = item.name;

    if (!sensitive) {
      match = (name.toLowerCase().indexOf(query.toLowerCase()) === 0);
    } else {
      match = (name.indexOf(query) === 0);
    }

    if (match) {
      // create the HTML-annotated version
      var nameMarkup = "<span class='search-begin-match'>";
      nameMarkup += name.substr(0, query.length);
      nameMarkup += "</span>";
      nameMarkup += name.substr(query.length);

      var metadata = {
        fullName: item.fullName,
        name: item.name,
        searchClassNameMarkup: item.className,
        searchNameMarkup: nameMarkup,
        didMatchName: YES
      };

      return metadata;
    } else {
      return false;
    }
  },

  nameBeginsWithCaseSensitive: function(query, item) {
    return this.nameBeginsWith(query, item, YES);
  },

  classContains: function(query, item, sensitive) {
    var name = item.className;
    var matchAt = -1;

    if (!sensitive) {
      matchAt = name.toLowerCase().indexOf(query.toLowerCase());
    } else {
      matchAt = name.indexOf(query);
    }

    if (matchAt !== -1) {

      // create the HTML-annotated version
      var nameMarkup = name.substr(0, matchAt);
      nameMarkup += "<span class='search-match'>";
      nameMarkup += name.substr(matchAt, query.length);
      nameMarkup += "</span>";
      nameMarkup += name.substr(matchAt + query.length);

      var metadata = {
        fullName: item.fullName,
        name: item.name,
        searchClassNameMarkup: nameMarkup,
        searchNameMarkup: item.name,
        didMatchClassName: YES
      };


      return metadata;
    } else {
      return false;
    }
  },

  classContainsCaseSensitive: function(query, item) {
    return this.classContains(query, item, YES);
  },

  nameContains: function(query, item) {
    var name = item.name;
    var matchAt = name.toLowerCase().indexOf(query.toLowerCase());

    if (matchAt !== -1) {

      // create the HTML-annotated version
      var nameMarkup = name.substr(0, matchAt);
      nameMarkup += "<span class='search-match'>";
      nameMarkup += name.substr(matchAt, query.length);
      nameMarkup += "</span>";
      nameMarkup += name.substr(matchAt + query.length);

      var metadata = {
        fullName: item.fullName,
        name: item.name,
        searchNameMarkup: nameMarkup,
        searchClassNameMarkup: item.className,
        didMatchName: YES
      };


      return metadata;
    } else {
      return false;
    }
  },

  // this focuses on the search field so the user may begin typing.
  beginSearch: function() {
    var view = Docs.getPath('mainPage.mainPane.sidebar.search.searchTextField');
    view.becomeFirstResponder();
  },

  // when the user presses 'enter', they want to switch focus to the search results
  // and select the first item.
  selectSearchFirstItem: function() {
    Docs.mainPage.getPath('mainPane.sidebar.searchResultsList.contentView').becomeFirstResponder();

    if (this.get('firstObject')) {
      this.selectObject(this.get('firstObject'));

      // propagate selection change immediately:
      this._propagateSelectionChange();
    }
  }
});
