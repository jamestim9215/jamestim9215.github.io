// import { Vue } from 'vue'
import { createRouter, createWebHashHistory } from 'vue-router'

import Home from '@/views/Home.vue'
import Login from '@/views/Login.vue'
import MainPage from '@/views/MainPage.vue'
import DetailPage from '@/views/DetailPage.vue'

import BackendHome from '@/views/backend/BackendHome.vue'
import BackendDetailPage from '@/views/backend/BackendDetailPage.vue'



const routes = [
  {
    path: '/backend',
    name: 'Backend',
    component: BackendHome,
  },
  {
    path: '/backend/:menu/:item/',
    name: 'BackendHome',
    component: BackendHome,
    meta: {
      watchParam: 'menu' ,
      watchParam: 'item' //
    }
  },
  // {
  //   path: '/backend/:menu/:item/:id',
  //   name: 'DetailPage',
  //   component: BackendDetailPage,
  //   meta: {
  //     watchParam: 'menu' ,
  //     watchParam: 'item' ,
  //     watchParam: 'id' //
  //   }
  // },



  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/login',
    name: 'Loging',
    component: Login,
  },
  {
    path: '/:item/',
    name: 'MainPage',
    component: MainPage,
    meta: {
      watchParam: 'item' //
    }
  },
  {
    path: '/:item/:id',
    name: 'DetailPage',
    component: DetailPage,
    meta: {
      watchParam: 'item' ,
      watchParam: 'id' //
    }
  },

]
const router = createRouter({
  history: createWebHashHistory(),
  base: process.env.BASE_URL,
  routes
})
export default router
