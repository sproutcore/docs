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
    initialSubstate: 'router',

    displayController: Docs.displayController,

    enterState: function() {
      SC.routes.add('packages/:package/:class/:entity', Docs, 'route');
      SC.routes.add('packages/:package/:class', Docs, 'route');
      SC.routes.add('*', Docs, 'route');

      this.get('displayController').showMain();
    },

    router: SC.State.extend({
      enterState: function() {
        this._checkRoute();
      },

      _checkRoute: function() {
        var location = SC.routes.get('location');

        if (!SC.empty(location)) {
          SC.routes.trigger();
        } else {
          this.get('statechart').sendAction('showIndex');
        }
      }
    }),

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

        SC.routes.set('currentLocation', classId);

        classController.set('content', klass);
        displayController.showClass();

        klass.refresh();
      }
    }),

    showIndex: function() {
      this.gotoState('index');
      return true;
    },

    gotoClass: function(context) {
      this.gotoState('class', context);
      return true;
    },

    showClass: function(klass) {
      this.gotoClass({classId: klass.get('id')});
      return true;
    },

    route: function(context) {
      var statechart = this.get('statechart'),
          action = 'showIndex';

      context = context || {};
      context.route = true;

      if (context['package'] && context['class']) {
        action = 'gotoClass';
        context.classId = 'packages/' + context['package'] + '/' + context['class'];
        delete context['package'];
        delete context['class'];
      }

      statechart.sendAction(action, context);
    }
  })

});
