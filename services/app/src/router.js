import { createRouter, createWebHistory } from 'vue-router';
import Home from './pages/Home.vue';

const routes = [
  // Root: redirect handled inside Home based on current mode / localStorage
  { path: '/', component: Home },

  // Cloud document: /docs/cloud/<uuid>
  { path: '/docs/cloud/:uuid', component: Home },

  // Offline (local) document: /docs/local/<uuid>
  { path: '/docs/local/:uuid', component: Home },
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});

export default router;
