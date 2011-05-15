Handlebars.registerHelper('smartdown', function(property) {
  if (this.getPath) {
    return Smartdown.render(this.getPath(property));
  } else {
    return "";
  }
});
