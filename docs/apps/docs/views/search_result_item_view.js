// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

Docs.SearchResultItemView = SC.View.design(SC.ContentDisplay, {
  layerIsCacheable: YES,
  isPoolable: YES,

  contentDisplayProperties: 'searchNameMarkup'.w(),

  render: function(context, firstTime) {
    context.push(this.get('content').get('searchNameMarkup'));
  }
});
