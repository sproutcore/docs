// ==========================================================================
// Project:   SproutCore Docs
// Copyright: ©2011 Strobe Inc. All rights reserved.
//            ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

require('docs/models/record');

/**
  @class
  @extends Docs.Record
*/
Docs.Class = Docs.Record.extend(
/** @scope Docs.Class.prototype */ {

  receivedData: function(data) {
    var methods = data.methods,
        properties = data.properties;

    methods = methods && methods.length && methods.map(function(data) {
      return data ? Docs.Method.create(data) : null;
    }).compact();

    properties = properties && properties.length && properties.map(function(data) {
      return data ? Docs.Property.create(data) : null;
    }).compact();

    data.methods = methods;
    data.properties = properties;

    return data;
  },

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
    @field
    @type Array
    @defualt null
  */
  extendsFrom: function(){
    var augments = this.get('augments');

    return augments ? augments.getEach('desc') : null;
  }.property('augments').cacheable(),

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

  hasMethods: function() {
    return this.getPath('methods.length') > 0;
  }.property().cacheable(),

  methodsLengthDidChange: function() {
    this.notifyPropertyChange('hasMethods');
  }.observes('*methods.length'),

  /**
    @type Array
    @default null
  */
  properties: null,

  hasProperties: function() {
    return this.getPath('properties.length') > 0;
  }.property().cacheable(),

  propertiesLengthDidChange: function() {
    this.notifyPropertyChange('hasProperties');
  }.observes('*properties.length'),

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
