// ==========================================================================
// Project:   SproutCore Docs
// Copyright: ©2011 Strobe Inc. All rights reserved.
//            ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

/**
  @class
*/
Docs.ClassEntityList = SC.CollectionView.extend(
/** @scope Docs.ClassEntityList.prototype */ {

  classNames: ['entity-list'],

  itemViewClass: SC.View.extend({
    classNames: ['entity'],
    didInsertElement: function() {
      Docs.classController.entityWasRendered(this.getPath('content.name'));
    }
  })

});
