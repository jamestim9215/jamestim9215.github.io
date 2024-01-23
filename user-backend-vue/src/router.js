// import { Vue } from 'vue'
import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router'

import Login from '@/pages/login/login.vue'

import Page404 from '@/pages/error/page404.vue'

const routes = [
  
  {
    path: '/',
    name: 'Home',
    // component: ProjectList,
    redirect: '/login'
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
  },
  // {
  //   path: '/list',
  //   name: 'login',
  //   component: Login,
  //   meta: { 
  //     keepAlive: true, 
  //     title: 'User Login'
  //   } 
  // },



  // other pages 404
  {
    path: '/:pathMatch(.*)*',
    name: '404',
    component: Page404,
    meta: {
      title: 'Page404.page404'
    }
  },



]

const router = createRouter({
  mode: 'history',
  history: createWebHashHistory(),
  // history: createWebHistory(),
  base: process.env.BASE_URL,
  routes,
  scrollBehavior() {
    document.getElementById('app').scrollIntoView({ behavior: 'smooth' });
  }
})
export default router
