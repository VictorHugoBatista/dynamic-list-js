var dynamic_list = (function($){
  'use strict';
  var data = {
    li: [
      {
        title: 'teste1'
      },
      {
        title: 'teste2'
      },
      {
        title: 'teste3'
      },
      {
        title: 'teste4'
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
