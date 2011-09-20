// ==========================================================================
// Project:   SproutCore Docs
// Copyright: ©2011 Strobe Inc. All rights reserved.
//            ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

require('./core');

Docs.statechart = SC.Statechart.create({

  autoInitStatechart: true,
  initialState: 'appLoading',

  appLoading: SC.State.extend({
    startApplication: function() {
      this.gotoState('started');
    }
  }),

  started: SC.State.extend({
    enterState: function() {
      
    }
  })

});
