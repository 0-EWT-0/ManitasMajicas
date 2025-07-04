import { createRouter, createWebHistory } from 'vue-router';
import LandingPage from '@/pages/Landing.vue';
import Dashboard from '@/pages/Dashboard.vue';
import Home from '@/pages/Home.vue';
import Login from '@/pages/Login.vue';

const routes = [
  {
    path: '/dashboard',
    name: 'dashboard',
    component: Dashboard
  },
  {
    path: '/',
    name: 'landing',
    component: LandingPage
  },
  {
    path: '/home',
    name: 'home',
    component: Home
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes
});

export default router;