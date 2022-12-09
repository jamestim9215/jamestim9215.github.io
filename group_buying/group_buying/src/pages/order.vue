<script setup>
import { ref,onMounted } from 'vue'
import { useRoute } from 'vue-router'

import Header from '@/components/Header.vue'
import Cart from '@/components/Cart.vue'

import  { useState } from '@/store/store'
import { showLoading, hideLoading } from '@/common/common'

const { getCardData } = useState()
const route = useRoute()
const CartList = getCardData(Number(route.params.cartId))
const CartOrderStatus =  route.params.orderStatus;

onMounted(() => {
  hideLoading()
})
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
          <span v-if="CartOrderStatus==='checkout'">確認訂單</span>
          <span v-if="CartOrderStatus==='establish'">訂單成立</span>
          <span v-if="CartOrderStatus==='payment'">付款</span>
          <span v-if="CartOrderStatus==='status'">狀態</span>
          <span v-if="CartOrderStatus==='complete'">訂單完成</span>
          <font-awesome-icon icon="fa-solid fa-angle-left" />
          <router-link to="/"><span>首頁</span></router-link>
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
