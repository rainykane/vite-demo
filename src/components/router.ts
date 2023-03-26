import { createRouter, createWebHashHistory } from 'vue-router';
import helloworld from './HelloWorld.vue';

const routes = [
  { path: '/', redirect: '/home' },
  {
    path: '/home',
    component: helloworld
  }
];

export const router = createRouter({
  history: createWebHashHistory(),
  routes,
})