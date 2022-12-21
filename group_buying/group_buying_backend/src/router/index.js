import { createRouter, createWebHistory,createWebHashHistory,useRoute } from 'vue-router'
import { watch } from 'vue'

import Login from '@/pages/Login.vue'
import OrderList from '@/pages/OrderList.vue'

import Page404 from '@/pages/Page404.vue'

// let history = createWebHistory()
let history = createWebHashHistory()
let routes = [
  {
    path: '/order-list',
    name: 'OrderList',
    component: OrderList
  },
  {
    path: '/',
    name: 'Login',
    component: Login
  },
  {
    path: '/404',
    name: '404',
    component: Page404
  },
  {
    path: '/:pathMatch(.*)',
    redirect: '/404'
  },
]





export default createRouter({ history, routes })