require('docs/system/smartdown/koala/formatter');

// Koala - Formatters - HTML - Copyright TJ Holowaychuk <tj@vision-media.ca> (MIT Licensed)
(function() {

/**
 * Escapes html entities.
 *
 * @param  {string} str
 * @return {string}
 * @api private
 */

function escape(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/"/g, '&quot;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;');
}

// --- Formatter

Koala.formatters.HTML = new Koala.Formatter(function(key, val){
  return key === null 
    ? escape(val)
    : '<span class="' + key + '">' + escape(val) + '</span>';
});

})();
