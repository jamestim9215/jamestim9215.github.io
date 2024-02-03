// import { Vue } from 'vue'
import { createRouter, createWebHashHistory,createWebHistory } from 'vue-router'

import Login from '@/pages/login/login.vue'

import Page404 from '@/pages/error/page404.vue'

import SuiteList from '@/pages/suite/suite-list.vue'
import SuiteInfo from '@/pages/suite/suite-info.vue'

import AddressList from '@/pages/address/address-list.vue'
import AddressInfo from '@/pages/address/address-info.vue'

import TenantList from '@/pages/tenant/tenant-list.vue'

import MessageList from '@/pages/message/message-list.vue'

import ContractList from '@/pages/contract/contract-list.vue'

import ManagersList from '@/pages/managers/managers-list.vue'

const routes = [
  
  {
    path: '/',
    name: 'Home',
    // component: ProjectList,
    redirect: '/suite-list'
  },
  {
    path: '/login',
    name: 'login',
    component: Login,
    meta: {
      title: '登入'
    }
  },
  {
    path: '/suite-list',
    name: 'suite-list',
    component: SuiteList,
    meta: { 
      keepAlive: true, 
      title: '物件列表'
    } 
  },
  {
    path: '/suite-list/:suiteId',
    name: 'suite-info',
    component: SuiteInfo,
    meta: { 
      keepAlive: false, 
      title: '物件詳細資料'
    } 
  },
  {
    path: '/address-list',
    name: 'address-list',
    component: AddressList,
    meta: { 
      keepAlive: true, 
      title: '地址列表'
    } 
  },
  {
    path: '/address-list/:addressId',
    name: 'address-info',
    component: AddressInfo,
    meta: { 
      keepAlive: false, 
      title: '地址詳細資料'
    } 
  },
  // {
  //   path: '/suite-info/:suiteId',
  //   name: 'suite-info',
  //   component: SuiteInfo,
  //   meta: { 
  //     keepAlive: false, 
  //     title: '套房詳細資料'
  //   } 
  // },


  {
    path: '/tenant-list',
    name: 'tenant-list',
    component: TenantList,
    meta: { 
      keepAlive: true, 
      title: '房客列表'
    } 
  },
  // {
  //   path: '/tenant-list/:userId',
  //   name: 'tenant-info',
  //   component: TenantInfo,
  //   meta: { 
  //     keepAlive: false, 
  //     title: '房客詳細資料'
  //   } 
  // },

  {
    path: '/message-list',
    name: 'message-list',
    component: MessageList,
    meta: { 
      keepAlive: true, 
      title: '訊息列表'
    } 
  },

  {
    path: '/contract-list',
    name: 'contract-list',
    component: ContractList,
    meta: { 
      keepAlive: true, 
      title: '合約列表'
    } 
  },
  // {
  //   path: '/contract-info/:contractId',
  //   name: 'contract-info',
  //   component: ContractInfo,
  //   meta: {
  //     keepAlive: false,
  //     title: '合約詳細資料'
  //   }
  // },
  {
    path: '/managers-list',
    name: 'managers-list',
    component: ManagersList,
    meta: { 
      keepAlive: true, 
      title: '管理人員列表'
    } 
  },



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
