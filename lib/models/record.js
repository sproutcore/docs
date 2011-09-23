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
Docs.Record = SC.Object.extend(
/** @scope Docs.Record.prototype */ {

  /**
    @type String
    @default null
  */
  id: null,

  /**
    The raw data received from the server.

    @type Hash
    @default null
  */
  data: null,

  /**
    Returns true if the data property is defined.

    @field
    @type Boolean
    @default false
  */
  isLoaded: function() {
    return !SC.none(this.get('data'));
  }.property('data').cacheable(),

  refresh: function() {
    var id = this.get(this.constructor.primaryKey),
        url = this.constructor.urlFormat.fmt(id),
        self = this;

    return $.ajax(url, {
      dataType: 'json',
      success: function(data, textStatus, jqXHR) {
        data = data['class'];
        data = self.receivedData(data);
        self.setProperties(data);
      },
      error: function() {
        
      }
    });
  },

  /**
    Invoked when this model has received data from the server. Use this to
    set any properties you need to, etc. This is passed the data that is
    received from the server, and you're expected to return that data object,
    which is then set to the data of the model.

    @param {Object} data The data from the server
    @returns {Object} The data that will be set on the model
  */
  receivedData: function(data) {
    return data;
  }

});

Docs.Record.reopenClass(
/** @scope Docs.Record */ {

  /**
    @type String
    @default 'id'
  */
  primaryKey: 'id',

  /**
    @type String
    @default '%@1'
  */
  urlFormat: 'assets/info/%@.json',

  /** @private */
  _instances: null,

  create: function() {
    var ret = this._super.apply(this, arguments);
    this._instances[ret.get(this.primaryKey)] = ret;
    return ret;
  },

  extend: function() {
    var ret = this._super.apply(this, arguments);
    ret._instances = {};
    return ret;
  },

  find: function(id) {
    var instance = this._instances && this._instances[id];

    if (!instance) {
      instance = this.create({id: id});
      instance.refresh();
    }

    return instance;
  }

});
