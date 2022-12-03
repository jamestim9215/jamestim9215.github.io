import { createRouter, createWebHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Product from '@/pages/Product.vue'

let history = createWebHistory()
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
  }

]

export default createRouter({ history, routes })