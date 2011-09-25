// ==========================================================================
// Project:   SproutCore Docs
// Copyright: ©2011 Strobe Inc. All rights reserved.
//            ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

/**
  @class
  @extends SC.Object
*/
Docs.classController = SC.Object.create(
/** @scope Docs.classController.prototype */ {

  content: null,

  selectedEntityBinding: 'Docs.entityController.content',

  selectedEntityDidChange: function() {
    // when the class is first rendered, it could potentially have
    // no methods and properties. When the class is loaded, those could change
    // but the observers are separate (ie methods one might fire first,
    // rendering the methods. Then the properties will render). This causes
    // problems with the offset calculation. So we wait until both will have
    // rendered so we know the offset will be true
    var self = this;
    SC.run.next(function() {
      self._scrollToEntity(self.get('selectedEntity'));
    });
  }.observes('selectedEntity'),

  entityWasRendered: function(entity) {
    if (entity === this.get('selectedEntity')) {
      this._scrollToEntity(entity);
    }
  },

  _scrollToEntity: function(entity) {
    var container = $('#class'),
        entityElem = entity ? container.find('div[name="' + entity + '"]')[0] : null,
        top = entityElem ? this._positionInContainer(entityElem, container[0]).top : 0;

    container.stop();
    container.animate({scrollTop: top}, 400);
  },

  _positionInContainer: function(obj,container) {
    var curtop = 0, curleft = 0;

    if (obj.offsetParent) {
      do {
        if (obj === container) { break; }

        curleft += obj.offsetLeft;
        curtop += obj.offsetTop;
      } while (obj = obj.offsetParent);
    }

    return {left: curleft, top: curtop};
  },

});
