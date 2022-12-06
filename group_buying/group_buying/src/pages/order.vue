<script setup>
import { ref } from 'vue'
import { useRoute } from 'vue-router'

import Header from '@/components/Header.vue'
import Cart from '@/components/Cart.vue'

import  { useState } from '@/store/store'

const { getCardData } = useState()
const route = useRoute()
const CartList = getCardData(Number(route.params.cartId))
console.log(getCardData(Number(route.params.cartId)));
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
          <span>購物車</span>
          <font-awesome-icon icon="fa-solid fa-angle-left" />
          <router-link to="/"><span>Home</span></router-link>
        </div>
      </div>

      <Cart :dataList="CartList" :type="route.params.orderStatus"/>


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
