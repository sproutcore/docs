IO.include("plugins/smartdown/smartdown.js");

JSDOC.useSmartdown = false;

JSDOC.PluginManager.registerPlugin(
  "JSDOC.smartdown",
  {
    onInit: function(opts){
      if (opts.smartdown) { JSDOC.useSmartdown = true; }
    },
    onDocTag: function(docTag) {
      if (!JSDOC.useSmartdown) { return; }

      var exclude = "type param see inherits lends extends scope link base augments memberOf".split(' ');
      if (exclude.indexOf(docTag.title) < 0) {
        var desc = docTag.desc.trim();
        desc = Smartdown.render(desc);
        docTag.desc = desc;
      }
    }
  }
);

