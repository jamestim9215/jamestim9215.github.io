<script setup>
import { ref } from 'vue'

import Header from '@/components/Header.vue'
import Cart from '@/components/Cart.vue'

import  { useState } from '@/store/store'

const { CartList } = useState()

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
        "
      >
        <router-link to="/">
          <button class="btn back-btn">
            <font-awesome-icon icon="fa-solid fa-angle-left" /> 繼續購買
          </button>
        </router-link>
        <div class="bread-crumbs-div">
          <span>購物車</span>
          <font-awesome-icon icon="fa-solid fa-angle-left" />
          <router-link to="/"><span>首頁</span></router-link>
        </div>
      </div>
      <div class="title-div">
        <h1>購物車</h1>
      </div>
      
      <Cart :dataList="CartList" :type="'cart'"/>


    </div>
  </div>
</template>

<style scoped>
.cart-div {
  padding: 10px;
}
.title-div{
  background: var(--theme-white);
  padding: 10px;
  margin: 10px 0;
}
h1{
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}

@media (max-width: 899px) {
}
</style>
