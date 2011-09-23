Handlebars.registerHelper('returns', function(object) {

  var method = this.get(object);
  var returns = method.get('returns');
  if (!returns) return "";
  returns = returns[0];
  if (!returns) return "";
  var out = "";

  out = '<div class="returns">';
    out += '<span class="name">Returns: </span>'; 
    out += '<span class="data-type" name="'+returns.type+'">'+returns.type+'</span>';
    out += '<span class="return-text">'+returns.desc+'</span>';
  out += "</div>";

  return new Handlebars.SafeString(out);
});
