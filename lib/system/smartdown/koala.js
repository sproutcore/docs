
// Koala - Core - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)
/*global IO*/

window.Koala = {

  /**
   * Version.
   */  
  version: '0.0.1',
  
  lexers: {},
  formatters: {},
  
  
  

  /**
   * Render _str_ as _type_, with optional _formatter_ 
   * defaulting to HTML. _str_ should be a filename or
   * extension such as '.js'.
   *
   * @param  {string} type
   * @param  {string} str
   * @param  {Formatter} formatter
   * @return {string}
   * @api public
   */

  render: function(type, str, formatter) {
    var grammar = this.lexers[type];
    formatter = formatter || this.formatters.HTML;
    
    if (!grammar) throw new Error("syntax highlighting for `" + type + "' is not supported");
    return formatter.render(grammar, str);
  }
  
};


