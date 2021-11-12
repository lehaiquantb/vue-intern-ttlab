import { DEFAULT_SORT_OPTION_LIST, DEFAULT_SHOW_OPTION_LIST } from './contants';
import {
    ICategory,
    IProduct,
    IFilter,
    IPagination,
    IActionDropdown,
    ICart,
    ICartItem,
    ICartSummary,
} from './types';
import { getModule, VuexModule, Mutation, Module, Action } from 'vuex-module-decorators';
import store from '@/store';
import { notifyError, notifySuccess } from '@/utils/util';

@Module({ dynamic: true, namespaced: true, store, name: 'Product' })
class ProductModule extends VuexModule {
    count = 0;
    searchKeyword = '';
    categoryList: Array<ICategory> = [];
    productList: Array<IProduct> = [
        {
            id: 1,
            name: 'MSI MPG Trident 1',
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
            quantityInStock: 1,
        },

        {
            id: 2,
            name: 'MSI MPG Trident 2',
            thumbnail: 'p2.png',
            code: 'SKU D5515AI',
            description:
                'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            detail: {
                cpu: null,
                featured: null,
                ioPort: null,
            },
            price: 399,
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
            quantityInStock: 2,
        },

        {
            id: 3,
            name: 'MSI MPG Trident 4',
            thumbnail: 'p3.png',
            code: 'SKU D5515AI',
            description:
                'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            detail: {
                cpu: null,
                featured: null,
                ioPort: null,
            },
            price: 599,
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
            quantityInStock: 3,
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
            price: 99,
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
            quantityInStock: 4,
        },
        {
            id: 5,
            name: 'MSI MPG Trident 5',
            thumbnail: 'p4.png',
            code: 'SKU D5515AI',
            description:
                'MSI CREATOR 17 A10SFS-240AU 17 UHD 4K HDR Thin Bezel Intel 10th Gen i7 10875H - RTX 2070 SUPER MAX Q - 16GB RAM - 1TB SSD NVME - Windows 10 PRO Laptop',
            detail: {
                cpu: null,
                featured: null,
                ioPort: null,
            },
            price: 999,
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
            quantityInStock: 5,
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

    selectedAction: {
        sort: IActionDropdown;
        show: IActionDropdown;
        [index: string]: IActionDropdown;
    } = {
        sort: DEFAULT_SORT_OPTION_LIST[0],
        show: DEFAULT_SHOW_OPTION_LIST[2],
    };

    productListShow: Array<IProduct> = this.productList;

    cart: ICart = {
        cartItemList: [
            {
                productId: 2,
                quantity: 1,
            },
        ],
        summary: {
            country: '',
            province: '',
            postalCode: '',
            shippingMethod: {
                id: 'COD',
                cost: 21,
            },
            gst: 10,
            discountCode: '',
        },
    };

    @Mutation
    UPDATE_SELECTED_ACTION(obj: { changeObject: IActionDropdown; key: string }) {
        this.selectedAction[obj.key] = { ...obj.changeObject };
    }

    @Action
    updateSelectedAction(obj: { changeObject: IActionDropdown; key: string }) {
        this.UPDATE_SELECTED_ACTION({ changeObject: obj.changeObject, key: obj.key });
        this.updateProductListShow();
    }

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

        // sort
        switch (this.selectedAction.sort.key) {
            case 1:
                productListShowTemp = productListShowTemp.sort((product1, product2) =>
                    product1.code.toLowerCase() >= product2.code.toLowerCase() ? 1 : -1,
                );
                break;
            case 2:
                productListShowTemp = productListShowTemp.sort(
                    (product1, product2) => product1.price - product2.price,
                );
                break;
            case 3:
                productListShowTemp = productListShowTemp.sort((product1, product2) =>
                    product1.name.toLowerCase() >= product2.name.toLowerCase() ? 1 : -1,
                );
                break;
            default:
                break;
        }
        // search
        productListShowTemp = productListShowTemp.filter(
            (item) => item.name.search(new RegExp(this.searchKeyword, 'i')) !== -1,
        );

        // paging
        this.UPDATE_PAGINATION({ total: productListShowTemp.length });
        this.UPDATE_PAGINATION({ pageSize: this.selectedAction.show.value });
        const offset = (this.pagination.currentPage - 1) * this.pagination.pageSize;
        productListShowTemp = productListShowTemp.slice(
            offset,
            offset + this.pagination.pageSize,
        );
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

    @Mutation
    UPDATE_SEARCH_KEYWORD(keyword: string) {
        this.searchKeyword = keyword;
    }

    @Action
    updateSearchKeyword(keyword: string) {
        this.UPDATE_SEARCH_KEYWORD(keyword);
    }

    @Mutation
    UPDATE_CART(cart: ICart) {
        this.cart = cart;
    }

    @Action
    clearCartItem() {
        this.UPDATE_CART({ ...this.cart, cartItemList: [] });
        notifySuccess('Đã xóa toàn bộ sản phẩm trong giỏ hàng');
    }

    @Action
    addCartItem(cartItem: { productId: number | string; quantity?: number }) {
        const tempCart = this.cart;
        // const tempCart:ICart = JSON.parse(JSON.stringify(this.cart));
        const checkCartItem = tempCart.cartItemList.find(
            (item) => item.productId === cartItem.productId,
        );

        const q = cartItem?.quantity ?? 1;

        const product = this.productList.find((item) => item.id === cartItem.productId);
        if (
            checkCartItem &&
            product &&
            checkCartItem.quantity + q <= product.quantityInStock
        ) {
            this.updateCartItem({
                productId: cartItem.productId,
                quantity: checkCartItem.quantity + q,
            });
            notifySuccess('Thêm sản phẩm thành công');
            return;
        } else if (
            checkCartItem === undefined &&
            product &&
            q <= product?.quantityInStock
        ) {
            this.updateCartItem({
                productId: cartItem.productId,
                quantity: q,
            });
            notifySuccess('Thêm sản phẩm thành công');
            return;
        }

        notifyError('Không thể thêm sản phẩm vào giỏ hàng');
    }

    @Action
    updateCartItem(cartItem: ICartItem) {
        const tempCart = this.cart;
        // const tempCart:ICart = JSON.parse(JSON.stringify(this.cart));
        const indexCartItem = tempCart.cartItemList.findIndex(
            (item) => item.productId === cartItem.productId,
        );

        if (indexCartItem !== -1) {
            if (cartItem.quantity === 0) {
                tempCart.cartItemList.splice(indexCartItem, 1);
            } else tempCart.cartItemList[indexCartItem] = cartItem;
        } else {
            tempCart.cartItemList.push({
                quantity: cartItem.quantity,
                productId: cartItem.productId,
            });
        }

        this.UPDATE_CART(tempCart);
    }

    @Action
    updateCartSummary(cartSummary: ICartSummary) {
        const tempCart = this.cart;
        tempCart.summary = cartSummary;
        this.UPDATE_CART(tempCart);
    }

    get projectDetailById() {
        return (id: string | number) => this.productList.find((item) => item.id === id);
    }
}

export const productModule = getModule(ProductModule);
