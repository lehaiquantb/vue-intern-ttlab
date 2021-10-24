import { RouteRecordRaw } from 'vue-router';
import Bai1 from './pages/Bai1.vue';
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
        ],
    },
] as RouteRecordRaw[];
