import { ICategory, IProduct, IFilter, IColor } from './types';
import { getModule, VuexModule, Mutation, Module } from 'vuex-module-decorators';
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
                active: false,
            },
            {
                id: 2,
                from: 1000,
                to: 2000,
                quantity: 21,
                active: false,
            },
        ],
        color: [
            {
                id: 1,
                hex: 'blue',
                active: false,
            },
            {
                id: 2,
                hex: 'red',
                active: false,
            },
        ],
        category: [
            {
                id: 1,
                name: 'CUSTOM PCS',
                quantity: 10,
                active: false,
            },
            {
                id: 2,
                name: 'MSI ALL-IN-ONE PCS',
                quantity: 10,
                active: false,
            },
            {
                id: 3,
                name: 'HP/COMPAQ PCS',
                quantity: 10,
                active: false,
            },
        ],
    };

    productListShow: Array<IProduct> = this.productList;

    @Mutation
    updateFilterCategory(changeObject: ICategory) {
        const index = this.filter.category.findIndex(
            (item) => item.id === changeObject?.id,
        );
        this.filter.category[index] = { ...this.filter.category[index], ...changeObject };
    }

    @Mutation
    updateFilterColor(changeObject: IColor) {
        const index = this.filter.color.findIndex((item) => item.id === changeObject?.id);
        this.filter.color[index] = { ...this.filter.color[index], ...changeObject };
    }

    @Mutation
    updateFilterPrice(changeObject: { id: number }) {
        const index = this.filter.price.findIndex((item) => item.id === changeObject?.id);
        this.filter.price[index] = { ...this.filter.price[index], ...changeObject };
    }

    @Mutation
    updateProductListShow() {
        let productListShowTemp = this.productList;
        // filter
        productListShowTemp = productListShowTemp.filter((item) =>
            this.filter.category.find((c) => c.active && c.id === item.category.id),
        );

        // for (const categoryFilter of this.filter.category) {
        //     if (categoryFilter.active) {
        //         productListShowTemp = productListShowTemp.filter(
        //             (item) => item.category.id === categoryFilter.id,
        //         );
        //     }
        // }

        for (const priceFilter of this.filter.price) {
            if (priceFilter.active) {
                productListShowTemp = productListShowTemp.filter(
                    (item) =>
                        priceFilter.from <= item.price && item.price <= priceFilter.to,
                );
            }
        }

        for (const colorFilter of this.filter.color) {
            if (colorFilter.active) {
                productListShowTemp = productListShowTemp.filter(
                    (item) =>
                        item.colorList.find((color) => color.hex === colorFilter.hex) !==
                        undefined,
                );
            }
        }
        // search
        // paging
        this.productListShow = productListShowTemp;
    }

    // @Action
    // incrementAfterTime(payload: number) {}

    // @Action
    // getUser() {}
}

export const productModule = getModule(ProductModule);
