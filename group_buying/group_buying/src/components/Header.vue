<script setup>
import { ref } from 'vue'

</script>

<template>
  <div class="header">
    <div class="container ">
      <div class="logo-div">
        <router-link to="/">GROUP BUYING</router-link>
      </div>
      <div class="header-btn-group">
        <div id="cartBtn"><router-link to="/shopping-cart"><font-awesome-icon icon="fa-solid fa-cart-shopping" /> 購物車</router-link></div>
        <div id="userDiv"><font-awesome-icon icon="fa-solid fa-user" /> 會員</div>

      </div>

    </div>
  </div>
</template>

<style scoped>
  .header{
    position: relative;
    height: 50px;
    line-height: 50px;
    width: 100%;
    background: var(--theme-yellow);
    color: var(--theme-black);
    font-size: 18px;
  }
  .header>div{
    display: flex;
    justify-content: space-between;
  }
  .logo-div,
  .header-btn-group{
    position: relative;
    display: flex;
  }
  .logo-div{
    padding: 0 10px;
    font-weight: 500;
  }
  #cartBtn,
  #userDiv{
    position: relative;
    display: inline-block;
    line-height: auto;
    vertical-align: middle;
    padding: 0 10px;
  }
</style>
