export class ListStyleSelector {
    constructor(elementSelector, templateSelector, listStyles) {
        this.data = {
            li: listStyles
        };
        this.$listStyleSelector = $(elementSelector);
        this.$listStyleSelectorUl = this.$listStyleSelector.children('ul');
        this.$listStyleSelectorTemplate =
            this.$listStyleSelector.children(templateSelector);

        this.render();

        // Adiciona função '_update_button_group' ao evento 'click' por meio do jQuery.
        this.$listStyleSelector.on(
            'click',
            'button',
            (event) => this.updateButtonGroup(event)
        );
    }

    /**
     * Renderiza o componente utilizando a biblioteca Mustache.
     */
    render() {
        this.$listStyleSelectorUl
            .html(Mustache.render(this.$listStyleSelectorTemplate.html(), this.data));
    }

    /**
     * Evento de click nos botões do componente.
     * Publica no evento 'change_list_style' e altera o estado dos botões clicados.
     */
    updateButtonGroup(event) {
        let $this = $(event.currentTarget),
            style_type = $this.data('style-type');

        this.updateButtonsState(style_type);
        PubSub.publish('change_list_style', style_type);
    }

    /**
     * Atualiza o estado dos botões.
     * @param string current_button_id Identificador do botão clicado atualmente.
     */
    updateButtonsState(current_button_id) {
        // Desabilita apenas o botão clicado atualmente.
        $.each(this.data.li, (key, li) => {
            li.disabled = li.style === current_button_id
        });
        console.log(current_button_id);
        this.render();
    }
}
