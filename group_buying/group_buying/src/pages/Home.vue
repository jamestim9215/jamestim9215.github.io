<script setup>
import { ref , nextTick } from 'vue'

import Header from '@/components/Header.vue'
import Banner from '@/components/Banner.vue'
import Filter from '@/components/Filter.vue'
import Boxing from '@/components/boxing.vue'
import ProductList from '@/components/ProductList.vue'
import { showLoading, hideLoading } from '@/common/common' 

const filterStatus = ref(false);
const filterHandler = (value) => {
  filterStatus.value = value;
  document.getElementById('mobile-filter-cover').style.visibility = value?'visible':'hidden';
}

</script>

<template>
  <Header></Header>
  <router-link to="/shopping-cart">
    <div class="cart-btn">
      <font-awesome-icon icon="fa-solid fa-cart-shopping" />
      <span>5</span>
    </div>
  </router-link>
  <div class="container">
    <Banner></Banner>
    <div class="content-div">
      <div id="mobile-filter-cover" @click="filterHandler(false)"></div>
      <div class="filter-div" :class="filterStatus?'active':''">
        <Filter></Filter>
      </div>
      <div class="list-div">
        <button id="filterBtn" @click="filterHandler(true)"><font-awesome-icon icon="fa-solid fa-filter" /> 篩選</button>
        <ProductList></ProductList>
      </div>
    </div>
  </div>
  <Boxing/>
</template>

<style scoped>
  
.content-div{
  position: relative;
  display: flex;
  /* justify-content: space-between; */
}

.filter-div{
  width: 275px;
  min-height: 200px;
  padding: 60px 15px 0 10px;
}
.list-div{
  width: 100%;
  min-height: 200px;
}

#filterBtn{
  position: absolute;
  right: 10px;
  top: 20px;
  background: var(--theme-yellow);
  border: 1px solid var(--theme-yellow);
  color: var(--theme-black);
  padding: 4px 8px;
  cursor: pointer;
  display: none;
  transition: 0.3s all;
}
#filterBtn:hover{
  background: var(--theme-white);
  border: 1px solid var(--theme-yellow);
}

#mobile-filter-cover{
  position: fixed;
  width: 100%;
  height: 100vh;
  background: rgba(0,0,0,0.5);
  z-index: 990;
  top: 0;
  left: 0;
  visibility: hidden;
    transition: 0.3s ease-in-out;
}

@media (max-width: 767px) {
  .filter-div{
    position: fixed;
    z-index: 999;
    top: 0;
    left: -100%;
    width: calc(70% - 20px );
    height: 100vh;
    padding: 60px 10px;
    background: var(--theme-gray);
    transition: 0.3s ease-in-out;
  }
  .filter-div.active{
    left: 0%;
  }
  .list-div{
    width: 100%;
    min-height: 200px;
  }

  #filterBtn{
    display: inline;
  }

}

@media (max-width: 390px) {
  .product-list-div>div{
    min-height: 10px;
    width: calc(100% / 1 - 20px); 
    padding: 0 10px;
    margin-bottom: 20px;
  }
}
</style>
