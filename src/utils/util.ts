import { NumberFormatOptions } from '@intlify/core-base';
import { ElNotification, ElMessageBox } from 'element-plus';

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

export function notifySuccess(message = '', title = 'Success'): void {
    ElNotification({
        title,
        message,
        type: 'success',
    });
}

export function notifyError(message = '', title = 'Error'): void {
    ElNotification({
        title,
        message,
        type: 'error',
    });
}

export function notifyWarning(message = '', title = 'Warning'): void {
    ElNotification({
        title,
        message,
        type: 'warning',
    });
}

export function notifyInfo(message = '', title = 'Info'): void {
    ElNotification({
        title,
        message,
        type: 'info',
    });
}

export function confirm({
    handleOk,
    handleCancel,
    message,
}: {
    handleOk: () => void;
    handleCancel?: () => void;
    message: string;
}) {
    ElMessageBox.confirm(message, 'Warning', {
        confirmButtonText: 'OK',
        cancelButtonText: 'Cancel',
        type: 'warning',
    })
        .then(() => {
            handleOk();
        })
        .catch(() => {
            handleCancel && handleCancel();
        });
}
