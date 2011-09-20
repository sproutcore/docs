// ==========================================================================
// Project:   SproutCore Docs
// Copyright: ©2011 Strobe Inc. All rights reserved.
//            ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

/**
  @class
*/
Docs.displayController = SC.Object.create(
/** @scope Docs.displayController.prototype */ {

  /** @private */
  _mainView: null,

  /**
    Shows the main app interface.
  */
  showMain: function() {
    var mainView = this._mainView;

    if (!mainView) {
      mainView = this._mainView = Docs.MainView.create();
    }

    mainView.append();
    this.set('isShowingMain', false);
  },

  /**
    True if the main application interface is showing, false otherwise.

    @type Boolean
    @default false
  */
  isShowingMain: false

});
