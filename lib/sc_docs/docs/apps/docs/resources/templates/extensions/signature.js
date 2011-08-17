Handlebars.registerHelper('signature', function(object) {

  var method = this.get(object);

  var name = method.get('name');
  var params = method.get('params');
  var param, prefix, suffix;

  var out = '<div class="method-signature">';
  out += name + '(';

  for(var i=0, l=params.length; i<l; i++) {
    param = params[i];

    if ( i < (l-1)) {
      suffix = ", ";
    }
    else {
      suffix = "";
    }

    if(param.optional) {
      out += '<span class="method-param-optional">(optional) </span>';
    }

    if(param.type) {
      out += '<span class="data-type" name="%@">%@</span>'.fmt(param.type,param.type);
    }

    if(param.name) {
      out += '<span class="method-param-name"> %@%@</span>'.fmt(param.name,suffix);
    }
  }

  out += ')';
  out += "</div>";

  return new Handlebars.SafeString(out);
});
