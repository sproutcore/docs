Handlebars.registerHelper('extends', function(object) {

  var extendsFrom = this.getPath(object);
  if (!extendsFrom) return "";
  
	var out = "";
  var len = extendsFrom.length;

  for(var i=0; i<len; i++) {
    var extendFrom = extendsFrom[i];
    out += '<span class="data-type" name="'+extendFrom+'">'+extendFrom+'</span>';
  }
  

  return new Handlebars.SafeString(out);
});
