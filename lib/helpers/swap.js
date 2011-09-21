
Handlebars.registerHelper('swap', function(path, options) {
  sc_assert('The swap helper only takes a single argument', arguments.length <= 2);

  // if no path is provided, treat the path param as options
  if (path && path.data && path.data.isRenderData) {
    options = path;
    path = "Docs.SwapView";
  }

  return SC.Handlebars.ViewHelper.helper(this, path, options);
});
