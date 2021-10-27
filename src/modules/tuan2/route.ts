import { RouteRecordRaw } from 'vue-router';
import ProductLayout from '@/layouts/ProductLayout.vue';
import ProductList from './pages/ProductList.vue';
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
        ],
    },
] as RouteRecordRaw[];
