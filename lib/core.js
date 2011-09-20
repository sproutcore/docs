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
  VERSION: INFO.version
});
