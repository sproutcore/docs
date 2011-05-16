Handlebars.registerHelper('smartdown', function(property) {

  if (this.getPath) {
    var text = this.getPath(property);
    text = Docs.trimCommonLeadingWhitespace(text);

    var converter = new Showdown.converter();
    return converter.makeHtml(text);
  }
  else {
    return "";
  }
});
