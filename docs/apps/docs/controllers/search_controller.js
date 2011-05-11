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
      this.set('content',matches);
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
    'searchBeginsWithInsensitive',
    'searchMethodBeginsWithInsensitive',
    
    //,
    //'searchContainsInsensitive'
    // CONTAINS INSENSITIVE IS TOO SLOW, not because the search is slow, but because 
    // the search matches way too many items, and the materializing of the records is,
    // apparently, quite slow...
    //
    // I am not sure how to fix this.

    'searchContains' // this is a bit better, but not much
  ],

  /**
    @private
    Finds all matching symbols for a given query string. This is the heart of the search logic.

    The goal is to match a variety of different circumstances, but at different priorities.
    For instance, matches in the middle of a string should be less preferred than matches
    at the beginning.

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
    var idx, len;

    for (idx = 0, len = algorithms.length; idx < len; idx++) {
      // the algorithms array contains a list of string method names 
      // to call on ourselves
      var algorithm = this[algorithms[idx]];
      buckets.push(this._performAlgorithm(algorithm, query, indexArray));
    }

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
        var match = bucket[matchIdx];

        // add relevance to the search metadata
        match.searchRelevance = relevance;

        // only add to the final collection of matches IF it is not already included
        if (!included[match.name]) {
          included[match.name] = YES;
          matches.push(match);
        }
      }
    }

    var classMatches = [];

    // Finally, materialize all records as necessary
    for (idx = 0, len = matches.length; idx < len; idx++) {
      // TODO: figure out what the heck to do with the metadata... I guess put
      // it on the materialized records???
      var name = matches[idx].name, symbols = indexHash[name];

      for (var symbolIdx = 0, symbolLen = symbols.length; symbolIdx < symbolLen; symbolIdx++) {
        var symbol = symbols[symbolIdx];
        var storeObject = Docs.store.materializeRecord(symbol.value);

        // add search metadata to the record; seems weird to put it here but I'm
        // not sure where else to put it unless we create proxy objects...
        storeObject.set('searchNameMarkup', matches[idx].searchNameMarkup);


        storeObject.set('symbolBelongsTo', symbol.parent);
        classMatches.push(storeObject);
      }
    }

    return classMatches;
  },

  // _performAlgorithm loops over the items and calls the algorithm on each one.
  _performAlgorithm: function(algorithm, query, names) {
    var result = [];
    var idx, len;
    for (idx = 0, len = names.length; idx < len; idx++) {
      var name = names[idx], matched;
      matched = algorithm.call(this, query, name);

      if (matched) {
        result.push(matched);
      }
    }

    return result;
  },


  // 
  // SEARCH ALGORITHMS
  //

  searchBeginsWith: function(query, name) {
    if (name.indexOf(query) === 0) {
      // create the HTML-annotated version
      var nameMarkup = "<span class='search-begin-match'>";
      nameMarkup += name.substr(0, query.length);
      nameMarkup += "</span>";
      nameMarkup += name.substr(query.length);

      var metadata = {
        name: name,
        searchNameMarkup: nameMarkup
      };

      return metadata;
    } else {
      return false;
    }
  },

  searchBeginsWithInsensitive: function(query, name) {
    if (name.toLowerCase().indexOf(query.toLowerCase()) === 0) {
      // create the HTML-annotated version
      var nameMarkup = "<span class='search-begin-match'>";
      nameMarkup += name.substr(0, query.length);
      nameMarkup += "</span>";
      nameMarkup += name.substr(query.length);

      var metadata = {
        name: name,
        searchNameMarkup: nameMarkup
      };

      return metadata;
    } else {
      return false;
    }
  },

  searchMethodBeginsWithInsensitive: function(query, name) {
    var pIdx = name.indexOf("#");

    if (pIdx < 0) { return; }

    var stub = name.substr(0, pIdx + 1);
    var searchName = name.substr(pIdx + 1);

    if (searchName.toLowerCase().indexOf(query.toLowerCase()) === 0) {
      // create the HTML-annotated version
      var nameMarkup = stub + "<span class='search-begin-match'>";
      nameMarkup += searchName.substr(0, query.length);
      nameMarkup += "</span>";
      nameMarkup += searchName.substr(query.length);

      var metadata = {
        name: name,
        searchNameMarkup: nameMarkup
      };

      return metadata;
    } else {
      return false;
    }
  },


  searchContains: function(query, name) {
    var matchAt = name.indexOf(query);

    if (matchAt !== -1) {

      // create the HTML-annotated version
      var nameMarkup = name.substr(0, matchAt);
      nameMarkup += "<span class='search-match'>";
      nameMarkup += name.substr(matchAt, query.length);
      nameMarkup += "</span>";
      nameMarkup += name.substr(matchAt + query.length);

      var metadata = {
        name: name,
        searchNameMarkup: nameMarkup
      };

      return metadata;
    } else {
      return false;
    }
  },

  searchContainsInsensitive: function(query, name) {
    var matchAt = name.toLowerCase().indexOf(query.toLowerCase());

    if (matchAt !== -1) {

      // create the HTML-annotated version
      var nameMarkup = name.substr(0, matchAt);
      nameMarkup += "<span class='search-match'>";
      nameMarkup += name.substr(matchAt, query.length);
      nameMarkup += "</span>";
      nameMarkup += name.substr(matchAt + query.length);

      var metadata = {
        name: name,
        searchNameMarkup: nameMarkup
      };

      return metadata;
    } else {
      return false;
    }
  }
});
