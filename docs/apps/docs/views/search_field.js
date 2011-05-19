// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

Docs.SearchFieldView = SC.TextFieldView.extend({

  render: function(orig, context, firstTime) {
    if (firstTime) {
      context.push("<div class='left'></div><div class='middle'></div><div class='right'></div>");
    }
    orig(context, firstTime);
  }.enhance(),

  keyDown: function(evt) {

    if (evt.keyCode === SC.Event.KEY_RETURN || evt.keyCode === SC.Event.KEY_DOWN) {
      Docs.searchController.selectSearchFirstItem();
      return YES;
    }
    else if (evt.keyCode === SC.Event.KEY_ESC) {
      this.set('value','');
      return YES;
    }
    else {
      return sc_super();
    }
  }
});

