export class DynamicList {
    constructor() {
        this.data = {
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
        };
        this.$dynamic_list = $('#dynamic-list');
        this.$dynamic_list_ul = $dynamic_list.children('ul');
        this.$dynamic_list_template = $dynamic_list.children('#dynamic-list__template');

        render();

        // Adiciona função 'update_list_style' ao evento 'change_style_type'.
        PubSub.subscribe('change_list_style', update_list_style);
    }

    /**
     * Renderiza componente na tela por meio do mustache.
     */
    render() {
        $dynamic_list_ul
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
