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
    name: string;
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
    quantityInStock: number;
}

export interface IFilterIndentity {
    id: number | string;
    status: 'not-active' | 'active' | 'pre-active';
}

export interface IFilterColor extends IFilterIndentity {
    hex: string;
}

export interface IFilterCategory extends IFilterIndentity {
    name: string;
    quantity: number;
}

export interface IFilterPrice extends IFilterIndentity {
    from: number;
    to: number;
    quantity: number;
}

export interface IFilter {
    color: Array<IFilterColor>;
    price: Array<IFilterPrice>;
    category: Array<IFilterCategory>;
    [index: string]: Array<IFilterColor | IFilterCategory | IFilterPrice>;
}

export interface IPagination {
    pageSize: number;
    defaultPageSize: number;
    total: number;
    currentPage: number;
}

export interface IActionDropdown {
    name: string;
    key: number;
    value?: string | number;
}

export interface ICartItem {
    productId: number | string;
    quantity: number;
}

export interface ICartSummary {
    country: string;
    province: string;
    shippingMethod: { id: 'COD'; cost: 21 } | { cost: 0; id: 'PICK_UP_AT_STORE' };
    gst: number;
    discountCode: string;
    postalCode: string;
}
export interface ICart {
    cartItemList: Array<ICartItem>;
    summary: ICartSummary;
}
