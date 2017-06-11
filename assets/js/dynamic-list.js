var dynamic_list = (function($){
  'use strict';
  var data = {
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
        details: []
      },
      {
        title: 'teste4',
        details: [
          'detail6'
        ]
      }
    ]
  },
  $dynamic_list = $('#dynamic-list');

  _render();

  function _render() {
    $dynamic_list.html(Mustache.render($dynamic_list.html(), data));
  }

  return {};
})(jQuery);
