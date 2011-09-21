// ==========================================================================
// Project:   SproutCore Docs
// Copyright: ©2011 Strobe Inc. All rights reserved.
//            ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

/**
  @class
*/
Docs.PackagesList = SC.CollectionView.extend(
/** @scope Docs.PackagesList.prototype */ {

  classNames: ['packages'],

  itemViewClass: SC.View.extend({
    classNames: ['package']
  })

});
