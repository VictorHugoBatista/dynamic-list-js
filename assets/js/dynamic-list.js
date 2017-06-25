export var dynamic_list = function(){
  'use strict';
  var data = {
    list_style: 'block',
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

  // Adiciona função 'update_list_style' ao evento 'change_style_type'.
  PubSub.subscribe('change_list_style', update_list_style);

  /**
   * Renderiza componente na tela por meio do mustache.
   */
  function _render() {
    $dynamic_list_ul.html(Mustache.render($dynamic_list_template.html(), data));
  }

  /**
   * Atualiza o tipo da lista e renderiza o componente na tela.
   * @param string list_style Tipo de lista à renderizar ('block' | 'inline')
   */
  function update_list_style (event_name, list_style) {
    data.list_style = list_style;
    _render();
  };

  // Atributos e funções expostas do componente.
  return {
    update_list_style: update_list_style
  };
};
