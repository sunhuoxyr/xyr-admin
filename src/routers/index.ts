import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';

const modules = import.meta.globEager('./modules/**.ts');
const routeModules: RouteRecordRaw[] = [];
Object.keys(modules).forEach((key) => {
  const mod = modules[key].defaule || [];
  routeModules.push(...mod);
});

const routes: RouteRecordRaw[] = [
  {
    path: '/login',
    name: 'login',
    component: () => import('@/views/login/login.vue'),
  },
  {
    path: '/',
    name: 'home',
    component: () => import('@/views/login/login.vue'),
  },
  ...routeModules,
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
