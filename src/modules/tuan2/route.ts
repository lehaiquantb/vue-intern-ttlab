import { RouteRecordRaw } from 'vue-router';
import ProductLayout from '@/layouts/ProductLayout.vue';
import ProductList from './pages/ProductList.vue';
import ProductDetail from './pages/ProductDetail.vue';
import About from './components/ProductDetail/About.vue';
import Detail from './components/ProductDetail/Detail.vue';
import Specs from './components/ProductDetail/Specs.vue';
import ShoppingCart from './pages/ShoppingCart.vue';
export default [
    {
        path: '/tuan2',
        component: ProductLayout,
        name: 'ProductLayout',
        meta: {
            public: true,
        },
        children: [
            {
                path: 'product-list',
                name: 'ProductList',
                component: ProductList,
                meta: {
                    onlyWhenLoggedOut: true,
                    public: true,
                },
            },
            {
                path: 'product-detail/:id',
                name: 'ProductDetail',
                component: ProductDetail,
                meta: {
                    onlyWhenLoggedOut: true,
                    public: true,
                },
                redirect: { name: 'About' },
                children: [
                    {
                        path: 'about-product',
                        name: 'About',
                        component: About,
                        meta: {
                            onlyWhenLoggedOut: true,
                            public: true,
                        },
                    },
                    {
                        path: 'detail',
                        name: 'Detail',
                        component: Detail,
                        meta: {
                            onlyWhenLoggedOut: true,
                            public: true,
                        },
                    },
                    {
                        path: 'specs',
                        name: 'Specs',
                        component: Specs,
                        meta: {
                            onlyWhenLoggedOut: true,
                            public: true,
                        },
                    },
                ],
            },
            {
                path: 'shopping-cart',
                name: 'ShoppingCart',
                component: ShoppingCart,
                meta: {
                    onlyWhenLoggedOut: true,
                    public: true,
                },
            },
        ],
    },
] as RouteRecordRaw[];
