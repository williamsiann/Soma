import { createRouter, createWebHistory } from 'vue-router';

const routes = [
  {
    path: '/',
    name: 'home',
    component: () => import('../views/Home.vue')
  },
  {
    path: '/diarioParaMiVos',
    name: 'diarioParaMiVos',
    component: () => import('../views/DiarioParaMiVos.vue')
  },
  {
    path: '/interpretacionDelArte',
    name: 'interpretacionDelArte',
    component: () => import('../views/InterpretacionDelArte.vue')
  },
];

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes
});

export default router;
