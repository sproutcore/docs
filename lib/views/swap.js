// ==========================================================================
// Project:   SproutCore Docs
// Copyright: ©2011 Strobe Inc. All rights reserved.
//            ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

/**
  @class
  @extends SC.View
*/
Docs.SwapView = SC.View.extend(
/** @scope Docs.SwapView.prototype */ {

  /**
    @type String
    @default null
  */
  nowShowing: null,

  /**
    @private

    A hash of the view classes or instances by their name. This is used to look
    up the view to have appended. It should be set to a hash when the view is
    created.

    @type Hash
    @default null
  */
  _views: null,

  /**
    @private

    Sets up the _views hash.
  */
  init: function() {
    this._super();
    this._views = {};
  },

  /**
    @private

    Overrides the default implementation so we can store the instances as they
    are created.
  */
  createChildView: function(view, attrs) {
    view = this._super(view, attrs);
    this._views[view.get('name')] = view;
    return view;
  },

  /**
    @private

    Listens for changes to the nowShowing. In all cases, any existing rendered
    views will get removed. In cases where nowShowing has been set to a
    recognized name, then the view instance will be added.
  */
  nowShowingDidChange: function() {
    var nowShowing = this.get('nowShowing'),
        view = typeof nowShowing === 'string' ? this._views[nowShowing] : null;

    this.invokeForState('replaceChild', view);
  }.observes('nowShowing'),

  /**
    Schedules a child view to be inserted into the DOM after bindings have
    finished syncing for this run loop.

    @param {SC.View} view the child view to insert
    @private
  */
  _scheduleInsertion: function(view) {
    var parent = this;

    view._insertElementLater(function() {
      parent.$().prepend(view.$());
    });
  }

});

Docs.SwapView.states = {
  parent: SC.View.states,

  "default": {},

  inBuffer: {
    appendChild: function(view, childView, options) {
      var buffer = SC.meta(view)['SC.View'].buffer,
          nowShowing = view.get('nowShowing'),
          name;

      childView = this.createChildView(childView, options);
      name = childView.get('name');

      sc_assert("When using a SwapView, you must define a name on the views added", !!name);

      // if the child we're trying to append needs to be active, store it
      if (name === nowShowing) {
        view.childViews.pushObject(childView);
        childView.renderToBuffer(buffer);
      }

      return childView;
    }
  },

  inDOM: {
    replaceChild: function(view, childView) {
      var existingView = view.get('childViews')[0];
      existingView.destroyElement();

      view._scheduleInsertion(childView);
      view.set('childViews', [childView]);
    }
  }

};

Docs.SwapView.reopen({
  states: Docs.SwapView.states
})
