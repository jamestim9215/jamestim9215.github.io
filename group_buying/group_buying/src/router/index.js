import { createRouter, createWebHistory,createWebHashHistory,useRoute } from 'vue-router'
import { watch } from 'vue'

import Home from '@/pages/Home.vue'
import Login from '@/pages/Login.vue'
import ForgetPwd from '@/pages/ForgetPwd.vue'
import SignUp from '@/pages/SignUp.vue'
import Product from '@/pages/Product.vue'
import ShoppingCart from '@/pages/ShoppingCart.vue'
import Checkout from '@/pages/Checkout.vue'
import Order from '@/pages/Order.vue'
import MyOrders from '@/pages/MyOrders.vue'
import Page404 from '@/pages/Page404.vue'

// let history = createWebHistory()
let history = createWebHashHistory()
let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/login',
    name: 'Login',
    component: Login
  },
  {
    path: '/sign-up',
    name: 'SignUp',
    component: SignUp
  },
  {
    path: '/forget-pwd',
    name: 'ForgetPwd',
    component: ForgetPwd
  },
  {
    path: '/product/:id',
    name: 'Product',
    component: Product
  },
  {
    path: '/shopping-cart',
    name: 'ShoppingCart',
    component: ShoppingCart
  },
  {
    path: '/checkout/:cartId',
    name: 'Checkout',
    component: Checkout
  },
  {
    path: '/order/:orderStatus/:cartId',
    name: 'Order',
    component: Order
  },
  {
    path: '/my-orders',
    name: 'MyOrders',
    component: MyOrders
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