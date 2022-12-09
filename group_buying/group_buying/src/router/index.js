import { createRouter, createWebHistory,createWebHashHistory } from 'vue-router'
import Home from '@/pages/Home.vue'
import Product from '@/pages/Product.vue'
import ShoppingCart from '@/pages/ShoppingCart.vue'
import Checkout from '@/pages/Checkout.vue'
import Order from '@/pages/Order.vue'
import MyOrders from '@/pages/MyOrders.vue'

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
]

export default createRouter({ history, routes })