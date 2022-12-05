import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Product from '@/pages/Product.vue'
import ShoppingCart from '@/pages/ShoppingCart.vue'

// let history = createWebHistory()
let history = createWebHashHistory()
let routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
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
  }
]

export default createRouter({ history, routes })