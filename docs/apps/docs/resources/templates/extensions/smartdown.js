Handlebars.registerHelper('smartdown', function(property) {
  if (this.getPath) {
    var text = this.getPath(property);
    text = Docs.trimCommonLeadingWhitespace(text);
    return Smartdown.render(text);
  } else {
    return "";
  }
});
