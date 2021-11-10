import { IActionDropdown } from './types';
export const DEFAULT_SORT_OPTION_LIST: Array<IActionDropdown> = [
    { key: 1, name: 'SKU' },
    { key: 2, name: 'Price' },
    { key: 3, name: 'Name' },
];

export const DEFAULT_SHOW_OPTION_LIST: Array<IActionDropdown> = [
    { key: 1, name: '1 per page', value: 1 },
    { key: 2, name: '2 per page', value: 2 },
    { key: 4, name: '4 per page', value: 4 },
];
