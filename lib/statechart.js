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
      initialSubstate: 'root',

      enterState: function(context) {
        var displayController = this.getPath('parentState.displayController'),
            classController = this.get('classController'),
            classId = context && context.classId,
            klass = Docs.Class.find(classId),
            self = this;

        sc_assert('A classId parameter must be passed into the Class state', !!classId);

        classController.set('content', klass);
        displayController.showClass();

        return this.performAsync(function() {
          klass.addObserver('isLoaded', this, function observer() {
            if (klass.get('isLoaded')) {
              klass.removeObserver('isLoaded', this, observer);
              classController.set('content', klass);
              displayController.showClass();
              self.resumeGotoState();
            }
          });

          klass.refresh();

          // the class might have already been loaded
          // we still want the observer to fire in those cases
          klass.notifyPropertyChange('isLoaded');
        });
      },

      root: SC.State.extend({
        enterState: function(context) {
          var classId = context && context.classId;
          SC.routes.set('currentLocation', classId);
        }
      }),

      entity: SC.State.extend({
        entityController: Docs.entityController,

        enterState: function(context) {
          var entityController = this.get('entityController'),
              classController = this.getPath('parentState.classController'),
              classId = classController.getPath('content.id'),
              entity = context && context.entityId;

          entityController.set('content', entity);
          SC.routes.set('currentLocation', classId + '/' + entity);
        }
      }),

      showRoot: function() {
        this.gotoState('root');
        return true;
      },

      gotoEntity: function(context) {
        this.gotoState('entity', context);
        return true;
      },

      showEntity: function(entity) {
        this.gotoEntity({entityId: entity.get('name')});
        return true;
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

    gotoEntity: function(context) {
      this.gotoState('started.class.entity', context);
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

        if (context.entity) {
          action = 'gotoEntity';
          context.entityId = context.entity;
          delete context.entity;
        }
      }

      statechart.sendAction(action, context);
    }
  })

});
