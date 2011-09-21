// ==========================================================================
// Project:   SproutCore Docs
// Copyright: ©2011 Strobe Inc. All rights reserved.
//            ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

require('./core');

Docs.statechart = SC.Statechart.create({

  autoInitStatechart: true,
  initialState: 'loading',

  loading: SC.State.extend({
    initialSubstate: 'application',

    application: SC.State.extend({
      startApplication: function() {
        this.gotoState('data');
      }
    }),

    data: SC.State.extend({
      enterState: function() {
        var statechart = this.get('statechart'),
            project = Docs.Project.create({file: "assets/info/overview.json"});

        project.addObserver('isLoaded', this, function observer() {
          if (project.get('isLoaded')) {
            statechart.sendAction('dataLoaded');
          }
        });

        project.load();
        Docs.projectController.set('content', project);
      },

      dataLoaded: function() {
        this.gotoState('started');
      }
    })
  }),

  started: SC.State.extend({
    displayController: Docs.displayController,

    enterState: function() {
      this.get('displayController').showMain();
    }
  })

});
