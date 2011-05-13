// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

// Docs has its own MainPane so it can detect the "escape" key and move to
// the search field.
Docs.MainPane = SC.MainPane.extend({
  keyDown: function(evt) {
    if (evt.keyCode === SC.Event.KEY_ESC) {
      Docs.searchController.beginSearch();
      return YES;
    }
    return NO;
  }
});
