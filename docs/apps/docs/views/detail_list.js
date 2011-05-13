// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

Docs.DetailListView = SC.ListView.extend({

  masterClassListPropertyPath: 'mainPage.mainPane.sidebar.classList.contentView',
  masterSearchListPropertyPath: 'mainPage.mainPane.sidebar.searchResultsList.contentView',

  keyDown: function(evt){

    if(evt.keyCode === 37) {
      var isSearching = Docs.getPath('searchController.isSearching');
      var propPath = isSearching ? 
        this.get('masterSearchListPropertyPath') : 
        this.get('masterClassListPropertyPath');

      var masterView = Docs.getPath(propPath);

      masterView.becomeFirstResponder();

      //return YES;
    }

    return sc_super();
  }
});
