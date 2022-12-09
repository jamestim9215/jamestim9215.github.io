<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import Header from '@/components/Header.vue'
import OrdersCart from '@/components/OrdersCart.vue'

import  { useState } from '@/store/store'

const { getOrdersCardListData } = useState()
const route = useRoute()
const OrderCartList = getOrdersCardListData(Number(route.params.cartId))
</script>

<template>
  <Header></Header>
  <div class="container">
    <div class="cart-div">
      <div
        style="
          vertical-align: middle;
          display: flex;
          justify-content: space-between;
          margin-bottom: 10px
        "
      >
        <router-link to="/">
          <button class="btn back-btn">
            <font-awesome-icon icon="fa-solid fa-angle-left" /> 繼續購物
          </button>
        </router-link>
        <div class="bread-crumbs-div">
          我的訂單
          <font-awesome-icon icon="fa-solid fa-angle-left" />
          <router-link to="/"><span>首頁</span></router-link>
        </div>
      </div>

      <OrdersCart :dataList="OrderCartList" :type="'myorders'"/>


    </div>
  </div>
</template>

<style scoped>
.cart-div {
  padding: 10px;
}

@media (max-width: 899px) {
}
</style>
