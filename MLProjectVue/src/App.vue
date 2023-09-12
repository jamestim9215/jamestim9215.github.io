<script setup>
import { onMounted } from "vue";
import {useRouter,useRoute } from 'vue-router';
import { PageLoadingOn } from '@/assets/js/common.js';

const route = useRoute();

onMounted(() => {
  PageLoadingOn();
})


</script>

<template>
  <div class="loading-div">
    <div>
      <div></div>
      <div></div>
      <div></div>
      <!-- <span> Please wait ...</span> -->
    </div>
  </div>
  <router-view :key="route.fullPath"></router-view>
  
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" /> -->
</template>

<style lang="scss" scoped>
  
.loading-div {
  position: fixed;
  z-index: 999;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  display: none;
  opacity: 0;
  transition: 0.5s all;
  font-family: "Noto Sans TC", sans-serif;
  color: var(--theme-color-1);
  &.page-loading {
    background: #fff;
  }
  &.data-loading{
    background: rgba(0,0,0,0.3);
  }
  &.show {
    opacity: 1;
    transition: 0.5s all;
  }

  &.active {
    display: inline;
  }
}

.loading-div > div {
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  > div {
    position: relative;
    display: inline-block;
    width: 20px;
    height: 20px;
    margin: 0 10px;
    background: var(--theme-color-1);
    animation-name: loading;
    animation-duration: 1.5s;
    animation-iteration-count: infinite;

    &:nth-child(1) {
      animation-delay: 0s;
    }
    &:nth-child(2) {
      animation-delay: 0.2s;
    }
    &:nth-child(3) {
      animation-delay: 0.4s;
    }
  }
  > span {
    position: absolute;
    width: 100%;
    text-align: center;
    bottom: -30px;
    left: 50%;
    transform: translateX(-50%);
  }
}

@keyframes loading {
  0% {
    transform: scale(1) skewX(0deg);
  }
  15% {
    transform: scale(1.3) skewX(0deg);
    background: var(--theme-color);
  }
  30% {
    transform: scale(1) skewX(0deg);
  }
  100% {
    transform: scale(1) skewX(0deg);
  }
}
</style>
