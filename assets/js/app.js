import {DynamicList} from './dynamic-list';
import {ListStyleSelector} from './list-style-selector';

let initialListItens = [
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
],
list = new DynamicList(
    '#dynamic-list',
    '#dynamic-list__template',
    initialListItens
),

listStyles = [
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
],
listStyleSelector = new ListStyleSelector(
    '#list-style-selector',
    '#list-style-selector__template',
    listStyles
);
