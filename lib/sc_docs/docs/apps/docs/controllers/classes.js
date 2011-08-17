// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================
/*globals Docs */

/** @class

  (Document Your Controller Here)

  @extends SC.TreeController
*/
Docs.classesController = SC.ArrayController.create(
/** @scope Docs.classesController.prototype */ {

  _selectionDidChange: function(){

    var content = this.getPath('selection.firstObject');

    if(content) {
      Docs.selectedClassController.set('content',content);
      SC.routes.set('location',content.get('displayName'));
    }

  }.observes('selection')

}) ;
