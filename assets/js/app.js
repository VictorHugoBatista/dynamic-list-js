import {DynamicList} from './dynamic-list';
import {ListStyleSelector} from './list-style-selector';

let list = new DynamicList();

let listStyles = [
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
];
let listStyleSelector =
    new ListStyleSelector('#list-style-selector', listStyles);
