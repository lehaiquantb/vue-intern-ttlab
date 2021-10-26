import { concat, forEach } from 'lodash';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import { getRouteFromModules } from './util';

const routesModules = getRouteFromModules();

let routes: Array<RouteRecordRaw> = [];

forEach(routesModules, (module) => {
    routes = concat(routes, (module as { default: Array<RouteRecordRaw> }).default);
});
console.log(routes);

const router = createRouter({
    history: createWebHistory(process.env.BASE_URL),
    routes,
});

// router.beforeEach(
//     VueRouteMiddleware({
//         [GLOBAL_MIDDLEWARE_NAME]: AuthMiddleware,
//     }) as NavigationGuardWithThis<unknown>,
// );

export default router;
