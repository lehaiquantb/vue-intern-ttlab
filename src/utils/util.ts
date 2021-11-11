import { NumberFormatOptions } from '@intlify/core-base';
import { ElNotification } from 'element-plus';
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

export function notifySuccess(message = '', title = 'Success') {
    ElNotification({
        title,
        message,
        type: 'success',
    });
}

export function notifyError(message = '', title = 'Error') {
    ElNotification({
        title,
        message,
        type: 'error',
    });
}

export function notifyWarning(message = '', title = 'Warning') {
    ElNotification({
        title,
        message,
        type: 'warning',
    });
}

export function notifyInfo(message = '', title = 'Info') {
    ElNotification({
        title,
        message,
        type: 'info',
    });
}
