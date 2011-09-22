// ==========================================================================
// Project:   SproutCore Docs
// Copyright: ©2011 Strobe Inc. All rights reserved.
//            ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

/**
  @class
*/
Docs.ClassList = SC.CollectionView.extend(
/** @scope Docs.ClassList.prototype */ {

  classNames: ['classes'],

  itemViewClass: SC.Button.extend({
    action: 'showClass',
    actionContextBinding: '.content',
    classNames: ['class'],
    template: SC.Handlebars.compile('{{content.displayName}}')
  })

});
