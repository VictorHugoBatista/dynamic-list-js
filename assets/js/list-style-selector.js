export class ListStyleSelector {
  constructor(element_selector) {
      this.data = {
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
      };
      this.$list_style_selector = $(element_selector);
      this.$list_style_selector_ul = this.$list_style_selector.children('ul');
      this.$list_style_selector_template = this.$list_style_selector.children('#list-style-selector__template');

      this.render();

      // Adiciona função '_update_button_group' ao evento 'click' por meio do jQuery.
      this.$list_style_selector.on('click', 'button', this.update_button_group);
  }

  /**
   * Renderiza o componente utilizando a biblioteca Mustache.
   */
  render()
  {
      this.$list_style_selector_ul
          .html(Mustache.render(this.$list_style_selector_template.html(), data));
  }

  /**
   * Evento de click nos botões do componente.
   * Publica no evento 'change_list_style' e altera o estado dos botões clicados.
   */
  update_button_group()
  {
    let $this = $(this),
        style_type = $this.data('style-type');

    this.update_buttons_state(style_type);
    PubSub.publish('change_list_style', style_type);
  }

  /**
   * Atualiza o estado dos botões.
   * @param string current_button_id Identificador do botão clicado atualmente.
   */
  update_buttons_state(current_button_id)
  {
    // Desabilita apenas o botão clicado atualmente.
    $.each(data.li, (key, li) => li.disabled = li.style === current_button_id);
    this.render();
  }
}
