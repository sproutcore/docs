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
Docs.Property = SC.Object.extend(
/** @scope Docs.Property.prototype */ {

  /**
    @type String
    @default null
  */
  name: null,

  /**
    @type String
    @default null
  */
  displayName: null,

  /**
    @type String
    @default 'property'
  */
  objectType: 'property',

  /**
    @type String
    @default null
  */
  propertyType: null,

  /**
    @type String
    @default null
  */
  author: null,

  /**
    @type String
    @default null
  */
  see: null,

  /**
    @type String
    @default null
  */
  since: null,

  /**
    @type String
    @default null
  */
  version: null,

  /**
    @type Boolean
    @default null
  */
  deprecated: null,

  /**
    @type String
    @default null
  */
  memberOf: null,

  /**
    @type String
    @default null
  */
  overview: null,

  /**
    @type String
    @default null
  */
  defaultValue: null,

  /**
    @type String
    @default null
  */
  isConstant: null,

  /**
    @type String
    @default null
  */
  isPrivate: null

});
