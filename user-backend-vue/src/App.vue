<script setup>
import { ref, onMounted } from 'vue'
import {useRouter,useRoute } from 'vue-router';
import { showLoading, hideLoading } from '@/assets/js/common.js';

import Menu from '@/components/menu.vue';
import Header from '@/components/header.vue';
import Copyright from '@/components/copyright.vue';

// import scss 
import '@/assets/css/loading.scss';

const route = useRoute();
const router = useRouter();
const isMinMenu = ref(false);
const isShowMobileMenu = ref(false);



showLoading();

onMounted(() => {
  hideLoading();
});



</script>

<template>

  <router-view v-slot="{ Component }">
    <div class="fullPage" v-if="$route.path!='/login'">
      <Menu v-model:is-min-menu="isMinMenu" v-model:is-show-mobile-menu="isShowMobileMenu" style="z-index:99" />
      <div class="content-div" 
          :class="[
            {
              'full' : isMinMenu
            },
            {
              'is-mobile' : isShowMobileMenu
            }
          ]"
      > 
        <div class="menu-cover" @click="isShowMobileMenu=false" v-show="isShowMobileMenu" ></div>
        <Header v-model:is-show-mobile-menu="isShowMobileMenu" :is-min-menu="isMinMenu"/>
        <keep-alive>
          <component :is="Component" :key="$route.path" v-if="$route.meta.keepAlive"/>
        </keep-alive>
        <component :is="Component" :key="$route.path" v-if="!$route.meta.keepAlive"/>
        <Copyright />
      </div>
    </div>
    <component :is="Component" :key="$route.path" v-else/>
  </router-view> 
</template>

<style lang="scss" scoped>
.fullPage{
  display: flex;
  flex-direction: row;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  .content-div{
    position: relative;
    width: calc(100% - 195px);
    height: 100dvh;
    overflow: auto;
    padding: 60px 0 0 0;
    &.full{
        position: fixed;
        width: 100% !important;
        padding: 60px 0 0 60px;
        z-index: 0;
    
    }
  }
}

@media (max-width: 768px) {
  .fullPage{
    display: block;
    
    .content-div{
      position: fixed;
      top: 0;
      left: 0;
      width: 100%;
      padding: 60px 0 0 0;
          transition: 0.3s ease-in-out;
      &.is-mobile{
        left: 195px;
        overflow: hidden;
        .menu-cover{
          position: absolute;
          display: block;
          z-index: 100;
          top: 0;
          width: 100%;
          height: 100%;
          transition: 0.3s ease-in-out;
          -webkit-backdrop-filter: blur(.3rem);
          backdrop-filter: blur(.3rem);
          background-color: #05050b99;
          will-change: backdrop-filter;
        }
      }
    }
  }
}

</style>
