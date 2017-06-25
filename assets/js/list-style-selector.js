export var list_style_selector = function(){
  'use strict';
  var data = {
    li: [
      {
        title: 'BLOCK',
        style: 'block',
        disabled: true
      },
      {
        title: 'LIST',
        style: 'inline',
        disabled: false
      }
    ]
  },
  $list_style_selector = $('#list-style-selector'),
  $list_style_selector_ul = $list_style_selector.children('ul'),
  $list_style_selector_template = $list_style_selector.children('#list-style-selector__template');

  _render();

  // Adiciona função '_update_button_group' ao evento 'click' por meio do jQuery.
  $list_style_selector.on('click', 'button', _update_button_group);

  /**
   * Renderiza componente na tela por meio do mustache.
   */
  function _render() {
    $list_style_selector_ul.html(Mustache.render($list_style_selector_template.html(), data));
  }

  /**
   * Evento de click nos botões do componente.
   * Publica no evento 'change_list_style' e altera o estado dos botões clicados.
   */
  function _update_button_group() {
    var $this = $(this),
    style_type = $this.data('style-type');

    _update_buttons_state(style_type);
    PubSub.publish('change_list_style', style_type);
  }

  /**
   * Atualiza o estado dos botões.
   * @param string current_button_id Identificador do botão clicado atualmente.
   */
  function _update_buttons_state(current_button_id) {
    $.each(data.li, function(key, li){
      // Desabilita apenas o botão clicado atualmente.
      li.disabled = li.style === current_button_id;
    });
    _render();
  }

  return {};
};
