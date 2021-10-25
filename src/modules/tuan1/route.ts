import { RouteRecordRaw } from 'vue-router';
import Bai1 from './pages/Bai1.vue';
import Bai2 from './pages/Bai2.vue';
import AssignmentLayout from '@/layouts/AssignmentLayout.vue';

export default [
    {
        path: '/',
        component: AssignmentLayout,
        meta: {
            public: true,
        },
        children: [
            {
                path: '/bai1_1',
                name: 'bai1_1',
                component: Bai1,
                meta: {
                    onlyWhenLoggedOut: true,
                    public: true,
                },
            },
            {
                path: '/bai1_2',
                name: 'bai1_2',
                component: Bai2,
                meta: {
                    onlyWhenLoggedOut: true,
                    public: true,
                },
            },
        ],
    },
] as RouteRecordRaw[];
