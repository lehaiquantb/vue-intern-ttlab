export interface IIdentification {
    id: number | string;
    name?: string;
}

export type ICategory = IIdentification;

export interface IImage extends IIdentification {
    url: string;
    type?: string;
}

export interface IColor extends IIdentification {
    hex: string;
}

export interface IProduct extends IIdentification {
    thumbnail: string;
    code: string;
    description: string;
    detail: {
        cpu?: string | null;
        featured?: string | null;
        ioPort?: string | null;
    };
    imageList?: Array<IImage>;
    category: ICategory;
    price: number;
    rate: number;
    colorList: Array<IColor>;
}

export interface IFilterIndentity {
    id: number | string;
    active: boolean;
}

export interface IFilter {
    color: Array<{
        hex: string;
        id: number | string;
        active: boolean;
    }>;
    price: Array<{
        id: number | string;
        from: number;
        to: number;
        quantity: number;
        active: boolean;
    }>;
    category: Array<{
        name: string;
        id: number | string;
        active: boolean;
        quantity: number;
    }>;
}
