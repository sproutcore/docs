// ==========================================================================
// Project:   SproutCore Docs
// Copyright: ©2011 Strobe Inc. All rights reserved.
//            ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

require('docs/core');

/**
  @class
  @extends SC.Object
*/
Docs.Package = SC.Object.extend(
/** @scope Docs.Package.prototype */ {

  /**
    @type String
    @default null
  */
  id: null,

  /**
    @type String
    @default null
  */
  name: null,

  /**
    @type Array
    @default null
  */
  classes: null

});
