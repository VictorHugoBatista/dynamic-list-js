var dynamic_list = (function($){
  'use strict';
  var data = {
    list_style: 'inline',
    li: [
      {
        title: 'teste1',
        details: [
          'detail1',
          'detail2',
          'detail3',
        ]
      },
      {
        title: 'teste2',
        details: [
          'detail4',
          'detail5',
        ]
      },
      {
        title: 'teste3',
        details: [
          'detail6'
        ]
      },
      {
        title: 'teste4',
        details: [
          'detail7'
        ]
      }
    ]
  },
  $dynamic_list = $('#dynamic-list'),
  $dynamic_list_ul = $dynamic_list.children('ul'),
  $dynamic_list_template = $dynamic_list.children('#dynamic-list__template');

  _render();

  function _render() {
    $dynamic_list_ul.html(Mustache.render($dynamic_list_template.html(), data));
  }

  return {};
})(jQuery);
