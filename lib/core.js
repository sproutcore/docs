// ==========================================================================
// Project:   SproutCore Docs
// Copyright: ©2011 Strobe Inc. All rights reserved.
//            ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

require('sproutcore');
require('sproutcore-statechart');

var INFO = require('docs/~package');

window.Docs = SC.Application.create({
  NAME: INFO.name,
  VERSION: INFO.version,

  trimCommonLeadingWhitespace: function(string) {

    var splitString = string.split('\n');
    var len = splitString.length;
    var min = Infinity;

    for (var i = 0; i<len; i++) {
      var line = splitString[i];
      var matches = line.match(/^\s+/);

      if(matches && matches[0].length < min) {
        min = matches[0].length;
      }
    } 

    if (min === Infinity || min === 0) return string;

    // The first line is always free of any leading whitespace
    for (i = 1; i<len; i++) {
      splitString[i] = splitString[i].substr(min);
    }

    return splitString.join('\n');
  }

});
