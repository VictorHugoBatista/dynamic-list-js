var list_style_selector = (function($){
  'use strict';
  var data = {
    li: [
      {
        title: 'BLOCK',
        style: 'block',
        active: true
      },
      {
        title: 'LIST',
        style: 'inline',
        active: false
      }
    ]
  },
  $list_style_selector = $('#list-style-selector'),
  $list_style_selector_ul = $list_style_selector.children('ul'),
  $list_style_selector_template = $list_style_selector.children('#list-style-selector__template');

  _render();

  $list_style_selector.on('click', 'button', do_click_action);

  function _render() {
    $list_style_selector_ul.html(Mustache.render($list_style_selector_template.html(), data));
  }

  function do_click_action() {
    var $this = $(this);
    PubSub.publish('change_list_style', $this.data('style-type'));
  }

  return {};
})(jQuery);
