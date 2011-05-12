// ==========================================================================
// Project:   SproutCore - JavaScript Application Framework
// Copyright: ©2008-2011 Apple Inc. All rights reserved.
// License:   Licensed under MIT license (see license.js)
// ==========================================================================

Docs.SearchResultItemView = SC.View.design(SC.ContentDisplay, {
  classNames: ['search-result'],
  layerIsCacheable: YES,
  isPoolable: YES,

  isSelected: NO,

  contentDisplayProperties: 'searchClassNameMarkup searchNameMarkup didMatchName didMatchClassName'.w(),
  displayProperties: ['isSelected'],

  render: function(context, firstTime) {
    context.setClass('sel', this.get('isSelected'));

    var searchClassName = this.getPath('content.searchClassNameMarkup'),
        searchName = this.getPath('content.searchNameMarkup'), html;

    // it is nice to show whatever was matched, first.
    if (this.getPath('content.didMatchName')) {
      html = ["<span class='symbol-name primary'>", searchName, "</span><span class='class-name secondary'>(", searchClassName, ")</span>"].join("");
    } else {
      html = ["<span class='class-name primary'>", searchClassName, "</span><span class='symbol-name secondary'>", searchName, "</span>"].join("");
    }

    if (firstTime) {
      context.push(html);
    } else {
      this.$().html(html);
    }
  }
});
