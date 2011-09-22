// ==========================================================================
// Project:   SproutCore Docs
// Copyright: ©2011 Strobe Inc. All rights reserved.
//            ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

require('docs/mixins/action_support');

var get = SC.get, set = SC.set;

SC.Button = SC.Button.extend(SC.ActionSupport);

SC.Button.reopen({

  mouseUp: function(event) {
    if (get(this, 'isActive')) {
      this.fireAction();
      set(this, 'isActive', false);
    }
  }

});
