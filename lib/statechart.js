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
    initialSubstate: 'index',

    displayController: Docs.displayController,

    enterState: function() {
      this.get('displayController').showMain();
    },

    index: SC.State.extend({
      enterState: function() {
        var displayController = this.getPath('parentState.displayController');
        displayController.showIndex();
      }
    }),

    "class": SC.State.extend({
      classController: Docs.classController,

      enterState: function(context) {
        var displayController = this.getPath('parentState.displayController'),
            classController = this.get('classController'),
            classId = context && context.classId,
            klass = Docs.Class.find(classId);

        sc_assert('A classId parameter must be passed into the Class state', !!classId);

        classController.set('content', klass);
        displayController.showClass();

        klass.refresh();
      }
    }),

    showClass: function(klass) {
      this.gotoState('class', {classId: klass.get('id')});
      return true;
    }
  })

});
