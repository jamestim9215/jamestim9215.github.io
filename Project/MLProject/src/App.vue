<script setup>
import {useRouter,useRoute} from 'vue-router';
const route = useRoute();

</script>

<template>
  <router-view :key="route.fullPath"></router-view>
  
    <!-- <keep-alive>
      <router-view v-if="$route.meta.keepAlive" />
    </keep-alive>
    <router-view v-if="!$route.meta.keepAlive" /> -->
</template>

<style scoped>

</style>
