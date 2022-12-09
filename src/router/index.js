import { createRouter, createWebHashHistory } from 'vue-router'

import SignupView from '../views/SignupView.vue';
import LoginView from '../views/LoginView.vue';
import DashboardView from '../views/DashboardView.vue';

const routes = [
  
  {
    path : '/signup',
    name : 'signup',
    component : SignupView,
  },
  {
    path : '/login',
    name : 'login',
    component : LoginView,
  },
  {
    path : '/dashboard',
    name : 'dashboard',
    component : DashboardView,
  }
]

const router = createRouter({
  history: createWebHashHistory(),
  routes
})

export default router
