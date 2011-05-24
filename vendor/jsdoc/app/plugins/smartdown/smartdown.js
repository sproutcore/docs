/*global IO,Markdown,Koala,Smartdown*/
IO.include("plugins/smartdown/markdown.js");
IO.include("plugins/smartdown/koala.js");

var Smartdown = {
  render: function(text) {
    // first, attempt to determine indent level of content.
    /**
    this would be 0 spaces
      two
        4, and so on.
    */
    
    var initial = text.match(/\n([ \t]+)/);
    if (initial) {
      text = text.replace(new RegExp("^" + initial[1], 'mg'), "");
    }
    
    if (text.match(/\n/)) text = new Showdown.converter().makeHtml(text);

    text = text.replace(/<code>(#([^:\s]+)?)?:?\s*([^\0]+?)<\/code>/g, function(match, whitespace, lang, code) {
      lang = lang || "js";
      code = code.replace(/&amp;/g, "&").replace(/&gt;/g, ">").replace(/&lt;/g, "<");
      return "<code class='syntax " + lang + "'>" + Koala.render(lang, code) + "</code>";
    });
    return text;
  }
};
