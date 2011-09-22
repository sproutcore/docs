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
Docs.Project = SC.Object.extend(
/** @scope Docs.Project.prototype */ {

  data: null,

  packages: null,

  file: null,

  isLoaded: function() {
    return this.get('data') != null;
  }.property('data').cacheable(),

  load: function() {
    var file = this.get('file'),
        project = this;

    sc_assert('A file must be defined on a project when you call load()', !!file);

    return $.ajax(file, {
      dataType: 'json',
      success: function(data, textStatus, jqXHR) {
        var packages = data.packages;

        if (packages && packages.length > 0) {
          packages = packages.map(function(data) {
            if (!data.classes || data.classes.length === 0) { return null; }
            data.classes = data.classes && data.classes.map(function(data) {
              return Docs.Class.create(data);
            });
            return Docs.Package.create(data);
          }).compact();
          project.set('packages', packages);
        }

        project.set('data', data);
      },
      error: function() {
        console.log("Errored");
      }
    });

  }

});
