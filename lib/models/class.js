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
Docs.Class = SC.Object.extend(
/** @scope Docs.Class.prototype */ {

  /**
    @type String
    @default null
  */
  id: null,

  /**
    Because we're not using the DataStore, we need to know when we need to pull
    in the extra class data that is not included in the Overview

    @type Boolean
    @default false
  */
  loaded: false,

  /**
    @type String
    @default null
  */
  name: null,

  /**
    The class's full alias.

    @type String
    @default null
  */
  displayName: null,

  /**
    @type String
    @default 'symbol'
  */
  objectType: 'symbol',

  /**
    @type String
    @default 'Class'
  */
  classType: 'Class',

  /**
    @type String
    @default null
  */
  filePath: null,

  /**
    @type Boolean
    @default false
  */
  isNamespace: false,

  /**
    @type Boolean
    @default false
  */
  isPrivate: false,

  /**
    @type Boolean
    @default false
  */
  isStatic: false,

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
    @default false
  */
  deprecated: false,

  /**
    @type String
    @default null
  */
  augments: null,

  /**
    @type String
    @default null
  */
  overview: null,

  /**
    @type String
    @default null
  */
  summary: null,

  /**
    @type Array
    @default null
  */
  methods: [],

  /**
    @type Array
    @default null
  */
  properties: [],

  /**
    @field
    @type Array
    @default null
  */
  instanceProperties: function() {
    var properties = this.get('properties');

    return properties.filter(function(property) {
      return property.get('displayName').match(/#/);
    });
  }.property('properties.@each.displayName').cacheable(),

  /**
    @field
    @type Array
    @default null
  */
  classProperties: function() {
    var properties = this.get('properties');

    return properties.filter(function(property) {
      return !property.get('displayName').match(/#/);
    });
  }.property('properties.@each.displayName').cacheable(),

  /**
    @field
    @type Array
    @default null
  */
  instanceMethods: function() {
    var methods = this.get('methods');

    return methods.filter(function(method) {
      return method.get('displayName').match(/#/);
    });
  }.property('methods.@each.displayName').cacheable(),

  /**
    @field
    @type Array
    @default null
  */
  classMethods: function() {
    var methods = this.get('methods');

    return methods.filter(function(method) {
      return !method.get('displayName').match(/#/);
    });
  }.property('methods.@each.displayName').cacheable()

});
