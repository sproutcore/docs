IO.include("plugins/smartdown/smartdown.js");

JSDOC.PluginManager.registerPlugin(
	"JSDOC.smartdown",
	{
		onDocTag: function(docTag) {
		  var exclude = "type param see inherits lends extends scope link base augments memberOf".split(' ');
		  if (exclude.indexOf(docTag.title) < 0) {
        var desc = docTag.desc.trim();
        desc = Smartdown.render(desc);
        docTag.desc = desc;
      }
      
		}
	}
);
