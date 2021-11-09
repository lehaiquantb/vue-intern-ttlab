import { ICategory, IProduct, IFilter, IPagination } from './types';
import { getModule, VuexModule, Mutation, Module, Action } from 'vuex-module-decorators';
import store from '@/store';

@Module({ dynamic: true, namespaced: true, store, name: 'Product' })
class ProductModule extends VuexModule {
    count = 0;
    categoryList: Array<ICategory> = [];
    productList: Array<IProduct> = [
        {
            id: 1,
            name: 'MSI MPG Trident 3',
            thumbnail: 'p1.png',
            code: 'SKU D5515AI',
            description:
                'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            detail: {
                cpu: null,
                featured: null,
                ioPort: null,
            },
            price: 499,
            imageList: [
                {
                    id: 1,
                    url: 'p1.png',
                    type: 'png',
                },
                {
                    id: 1,
                    url: 'p2.png',
                    type: 'png',
                },
                {
                    id: 1,
                    url: 'p3.png',
                    type: 'png',
                },
                {
                    id: 1,
                    url: 'p4.png',
                    type: 'png',
                },
            ],
            rate: 4,
            category: {
                id: 1,
                name: 'CUSTOM PCS',
            },
            colorList: [
                {
                    id: 1,
                    hex: '#4B4D4F',
                },
                {
                    id: 2,
                    hex: 'blue',
                },
            ],
        },

        {
            id: 2,
            name: 'MSI MPG Trident 3',
            thumbnail: 'p2.png',
            code: 'SKU D5515AI',
            description:
                'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            detail: {
                cpu: null,
                featured: null,
                ioPort: null,
            },
            price: 499,
            imageList: [
                {
                    id: 1,
                    url: 'p1.png',
                    type: 'png',
                },
                {
                    id: 1,
                    url: 'p2.png',
                    type: 'png',
                },
                {
                    id: 1,
                    url: 'p3.png',
                    type: 'png',
                },
                {
                    id: 1,
                    url: 'p4.png',
                    type: 'png',
                },
            ],
            rate: 4,
            category: {
                id: 1,
                name: 'CUSTOM PCS',
            },
            colorList: [
                {
                    id: 1,
                    hex: '#4B4D4F',
                },
                {
                    id: 2,
                    hex: 'blue',
                },
            ],
        },

        {
            id: 3,
            name: 'MSI MPG Trident 3',
            thumbnail: 'p3.png',
            code: 'SKU D5515AI',
            description:
                'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            detail: {
                cpu: null,
                featured: null,
                ioPort: null,
            },
            price: 499,
            imageList: [
                {
                    id: 1,
                    url: 'p1.png',
                    type: 'png',
                },
                {
                    id: 1,
                    url: 'p2.png',
                    type: 'png',
                },
                {
                    id: 1,
                    url: 'p3.png',
                    type: 'png',
                },
                {
                    id: 1,
                    url: 'p4.png',
                    type: 'png',
                },
            ],
            rate: 4,
            category: {
                id: 1,
                name: 'CUSTOM PCS',
            },
            colorList: [
                {
                    id: 1,
                    hex: '#4B4D4F',
                },
                {
                    id: 2,
                    hex: 'blue',
                },
            ],
        },
        {
            id: 4,
            name: 'MSI MPG Trident 3',
            thumbnail: 'p4.png',
            code: 'SKU D5515AI',
            description:
                'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            detail: {
                cpu: null,
                featured: null,
                ioPort: null,
            },
            price: 499,
            imageList: [
                {
                    id: 1,
                    url: 'p1.png',
                    type: 'png',
                },
                {
                    id: 1,
                    url: 'p2.png',
                    type: 'png',
                },
                {
                    id: 1,
                    url: 'p3.png',
                    type: 'png',
                },
                {
                    id: 1,
                    url: 'p4.png',
                    type: 'png',
                },
            ],
            rate: 4,
            category: {
                id: 1,
                name: 'CUSTOM PCS',
            },
            colorList: [
                {
                    id: 1,
                    hex: '#4B4D4F',
                },
                {
                    id: 2,
                    hex: 'blue',
                },
            ],
        },
        {
            id: 5,
            name: 'MSI MPG Trident 3',
            thumbnail: 'p4.png',
            code: 'SKU D5515AI',
            description:
                'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            detail: {
                cpu: null,
                featured: null,
                ioPort: null,
            },
            price: 499,
            imageList: [
                {
                    id: 1,
                    url: 'p1.png',
                    type: 'png',
                },
                {
                    id: 1,
                    url: 'p2.png',
                    type: 'png',
                },
                {
                    id: 1,
                    url: 'p3.png',
                    type: 'png',
                },
                {
                    id: 1,
                    url: 'p4.png',
                    type: 'png',
                },
            ],
            category: {
                id: 2,
                name: 'MSI ALL-IN-ONE PCS',
            },
            rate: 4,
            colorList: [
                {
                    id: 1,
                    hex: '#4B4D4F',
                },
                {
                    id: 2,
                    hex: 'blue',
                },
            ],
        },
    ];

    filter: IFilter = {
        price: [
            {
                id: 1,
                from: 0,
                to: 1000,
                quantity: 19,
                status: 'not-active',
            },
            {
                id: 2,
                from: 1000,
                to: 2000,
                quantity: 21,
                status: 'not-active',
            },
            {
                id: 3,
                from: 2000,
                to: 3000,
                quantity: 19,
                status: 'not-active',
            },
            {
                id: 4,
                from: 3000,
                to: 4000,
                quantity: 19,
                status: 'not-active',
            },
            {
                id: 5,
                from: 4000,
                to: 5000,
                quantity: 19,
                status: 'not-active',
            },
            {
                id: 6,
                from: 5000,
                to: 6000,
                quantity: 19,
                status: 'not-active',
            },
            {
                id: 7,
                from: 6000,
                to: 7000,
                quantity: 19,
                status: 'not-active',
            },
            {
                id: 8,
                from: 7000,
                to: Infinity,
                quantity: 19,
                status: 'not-active',
            },
        ],
        color: [
            {
                id: 1,
                hex: 'blue',
                status: 'not-active',
            },
            {
                id: 2,
                hex: 'red',
                status: 'not-active',
            },
        ],
        category: [
            {
                id: 1,
                name: 'CUSTOM PCS',
                quantity: 10,
                status: 'not-active',
            },
            {
                id: 2,
                name: 'MSI ALL-IN-ONE PCS',
                quantity: 10,
                status: 'not-active',
            },
            {
                id: 3,
                name: 'HP/COMPAQ PCS',
                quantity: 10,
                status: 'not-active',
            },
        ],
    };

    pagination: IPagination = {
        pageSize: 2,
        defaultPageSize: 10,
        total: this.productList.length,
        currentPage: 1,
    };

    productListShow: Array<IProduct> = this.productList;

    @Mutation
    updateFilterCategory(changeObject: any) {
        const index = this.filter.category.findIndex(
            (item) => item.id === changeObject?.id,
        );
        this.filter.category[index] = { ...this.filter.category[index], ...changeObject };
    }

    @Mutation
    updateFilterColor(changeObject: any) {
        const index = this.filter.color.findIndex((item) => item.id === changeObject?.id);
        this.filter.color[index] = { ...this.filter.color[index], ...changeObject };
    }

    @Mutation
    UPDATE_FILTER_PRICE(changeObject: any) {
        const index = this.filter.price.findIndex((item) => item.id === changeObject?.id);
        this.filter.price[index] = { ...this.filter.price[index], ...changeObject };
    }

    @Action
    updateFilterPrice(changeObject: any) {
        this.UPDATE_FILTER_PRICE(changeObject);
    }

    @Mutation
    clearAllFilter() {
        for (const key in this.filter) {
            this.filter[key].forEach((item) => {
                item.status = 'not-active';
            });
        }
    }

    @Mutation
    clearApplyFilter() {
        for (const key in this.filter) {
            this.filter[key].forEach((item) => {
                if (item.status === 'pre-active') {
                    item.status = 'not-active';
                }
            });
        }
    }

    @Mutation
    UPDATE_PRODUCT_LIST_SHOW(productListShowTemp: Array<IProduct>) {
        this.productListShow = productListShowTemp;
    }

    @Action
    updateProductListShow() {
        let productListShowTemp = this.productList;
        this.filter.category.forEach((item, index) => {
            if (item.status === 'pre-active') {
                item.status = 'active';
            }
        });
        this.filter.color.forEach((item, index) => {
            if (item.status === 'pre-active') {
                item.status = 'active';
            }
        });
        this.filter.price.forEach((item, index) => {
            if (item.status === 'pre-active') {
                item.status = 'active';
            }
        });
        // filter
        productListShowTemp = productListShowTemp.filter((item) => {
            for (const categoryFilter of this.filter.category) {
                if (categoryFilter.status === 'active') {
                    return categoryFilter.id === item.category.id;
                }
            }
            return true;
        });

        productListShowTemp = productListShowTemp.filter((item) => {
            for (const priceFilter of this.filter.price) {
                if (priceFilter.status === 'active') {
                    return priceFilter.from <= item.price && item.price <= priceFilter.to;
                }
            }
            return true;
        });

        productListShowTemp = productListShowTemp.filter((item) => {
            for (const colorFilter of this.filter.color) {
                if (colorFilter.status === 'active') {
                    return (
                        item.colorList.find((color) => color.hex === colorFilter.hex) !==
                        undefined
                    );
                }
            }
            return true;
        });

        // paging
        this.UPDATE_PAGINATION({ total: productListShowTemp.length });
        const offset = (this.pagination.currentPage - 1) * this.pagination.pageSize;
        productListShowTemp = productListShowTemp.slice(
            offset,
            offset + this.pagination.pageSize,
        );
        // search
        this.UPDATE_PRODUCT_LIST_SHOW(productListShowTemp);
    }

    @Mutation
    UPDATE_PAGINATION(changeObject: any) {
        this.pagination = { ...this.pagination, ...changeObject };
        // this.updateProductListShow();
    }

    @Action
    updatePagination(changeObject: any) {
        this.UPDATE_PAGINATION(changeObject);
        this.updateProductListShow();
    }
    // @Action
    // incrementAfterTime(payload: number) {}

    // @Action
    // getUser() {}
}

export const productModule = getModule(ProductModule);
