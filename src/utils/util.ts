import { NumberFormatOptions } from '@intlify/core-base';

export function isJson(str: string): boolean {
    try {
        JSON.parse(str);
    } catch (e) {
        return false;
    }
    return true;
}

export function isStringify<T>(obj: T | Record<string, unknown>): boolean {
    try {
        JSON.stringify(obj);
    } catch (e) {
        return false;
    }
    return true;
}

export function formatMoney(n: number): string {
    const f1 = Number(n).toLocaleString('en', 'currency' as NumberFormatOptions);
    const decimal = f1.split('.')[1] ?? '' + '00';
    return '$' + f1.split('.')[0] + '.' + decimal.substring(0, 2);
}
