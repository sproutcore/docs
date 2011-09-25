// ==========================================================================
// Project:   SproutCore Docs
// Copyright: ©2011 Strobe Inc. All rights reserved.
//            ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

/**
  @class
*/
Docs.EntityList = SC.CollectionView.extend(
/** @scope Docs.EntityList.prototype */ {

  classNames: ['entity-list'],

  itemViewClass: SC.Button.extend({
    action: 'showEntity',
    actionContextBinding: '.content',
    classNames: ['entity'],
    template: SC.Handlebars.compile('{{content.name}}')
  })

});
