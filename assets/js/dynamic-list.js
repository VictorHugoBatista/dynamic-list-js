export class DynamicList {
    constructor(elementSelector, templateSelector, initialItens, initialStyle = 'block') {
        this.data = {
            list_style: initialStyle,
            li: initialItens
        };
        this.$dynamicList = $(elementSelector);
        this.$dynamicListUl = this.$dynamicList.children('ul');
        this.$dynamicListTemplate = this.$dynamicList.children(templateSelector);

        this.render();

        // Adiciona função 'updateListStyle' ao evento 'change_style_type'.
        PubSub.subscribe(
            'change_list_style',
            (eventName, listStyle) => this.updateListStyle(listStyle)
        );
    }

    /**
     * Renderiza componente na tela por meio do mustache.
     */
    render() {
        this.$dynamicListUl
            .html(Mustache.render(this.$dynamicListTemplate.html(), this.data));
    }

    /**
     * Atualiza o tipo da lista e renderiza o componente na tela.
     * @param string listStyle Tipo de lista à renderizar ('block' | 'inline')
     */
    updateListStyle(listStyle) {
        this.data.list_style = listStyle;
        this.render();
    };
}
