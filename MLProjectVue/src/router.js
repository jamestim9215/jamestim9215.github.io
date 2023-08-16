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
    path: '/backend/:menu/:item/:edit',
    name: 'BackendDetailPage',
    component: BackendDetailPage,
  },
  {
    path: '/backend/:menu/:item/',
    name: 'BackendHome',
    component: BackendHome,
  },
  {
    path: '/backend',
    name: 'Backend',
    component: BackendHome,
  },

  {
    path: '/',
    name: 'Home',
    component: Home,
  },
  {
    path: '/about_us',
    name: 'AboutUs',
    component: DetailPage,
  },
  {
    path: '/login',
    name: 'Loging',
    component: Login,
  },
  {
    path: '/:item/:id',
    name: 'DetailPage',
    component: DetailPage,
  },
  {
    path: '/:item/',
    name: 'MainPage',
    component: MainPage,
  }

]

const router = createRouter({
  history: createWebHashHistory(),
  base: process.env.BASE_URL,
  routes
})
export default router
