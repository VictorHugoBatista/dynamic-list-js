export class DynamicList {
    constructor(elementSelector, initialItens, initialStyle = 'block') {
        this.data = {
            list_style: initialStyle,
            li: initialItens
        };
        this.$dynamic_list = $(elementSelector);
        this.$dynamic_list_ul = this.$dynamic_list.children('ul');
        this.$dynamic_list_template = this.$dynamic_list.children('#dynamic-list__template');

        render();

        // Adiciona função 'update_list_style' ao evento 'change_style_type'.
        PubSub.subscribe('change_list_style', this.update_list_style);
    }

    /**
     * Renderiza componente na tela por meio do mustache.
     */
    render() {
        this.$dynamic_list_ul
            .html(Mustache.render(this.$dynamic_list_template.html(), this.data));
    }

    /**
     * Atualiza o tipo da lista e renderiza o componente na tela.
     * @param string list_style Tipo de lista à renderizar ('block' | 'inline')
     */
    update_list_style(event_name, list_style) {
        this.data.list_style = list_style;
        _render();
    };
}
