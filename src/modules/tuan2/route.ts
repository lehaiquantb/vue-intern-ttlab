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
        meta: {
            public: true,
        },
        children: [
            {
                path: 'product-list',
                name: 'product-list',
                component: ProductList,
                meta: {
                    onlyWhenLoggedOut: true,
                    public: true,
                },
            },
            {
                path: 'product-detail/:id',
                name: 'product-detail/:id',
                component: ProductDetail,
                meta: {
                    onlyWhenLoggedOut: true,
                    public: true,
                },
                children: [
                    {
                        path: 'about-product',
                        name: 'about-product-detail',
                        component: About,
                        meta: {
                            onlyWhenLoggedOut: true,
                            public: true,
                        },
                    },
                    {
                        path: 'detail',
                        name: 'detail-product-detail',
                        component: Detail,
                        meta: {
                            onlyWhenLoggedOut: true,
                            public: true,
                        },
                    },
                    {
                        path: 'specs',
                        name: 'specs-product-detail',
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
                name: 'shopping-cart',
                component: ShoppingCart,
                meta: {
                    onlyWhenLoggedOut: true,
                    public: true,
                },
            },
        ],
    },
] as RouteRecordRaw[];
