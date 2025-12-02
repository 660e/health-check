import type { RouteRecordRaw } from 'vue-router';

export default {
  path: '/',
  children: [
    {
      path: '',
      component: () => import('@/login/index.vue'),
    },
  ],
} as RouteRecordRaw;
