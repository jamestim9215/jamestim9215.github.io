
<script setup>
import { onMounted, ref,computed,watch } from 'vue';
import { useRouter, useRoute } from "vue-router";

const router = useRouter();
const route = useRoute();
const fullPath = computed(() => route.fullPath);

</script>

<template>
  <router-view v-slot="{ Component }">
    <keep-alive>
      <component :is="Component" :key="$route.path" v-if="$route.meta.keepAlive"/>
    </keep-alive>
    <component :is="Component" :key="$route.path" v-if="!$route.meta.keepAlive"/>
  </router-view>
</template>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  background: #222;
  color: #ccc;
  font-family: 'Microsoft JhengHei','Arial',sans-serif;
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #d9e600;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #d9ff00;
}
::-webkit-scrollbar-thumb:active {
  background: #d9e600;
}
::-webkit-scrollbar-track {
  background: #666666;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: #666666;
}
::-webkit-scrollbar-track:active {
  background: #333333;
}
::-webkit-scrollbar-corner {
  background: transparent;
}

.page-content{
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: calc(100% - 300px);
  height: 100vh;
  background: #131313;
  overflow: hidden;
  overflow-y: auto;
}

.container{
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
}
.row{
  position: relative;
  // display: block;
  display: flex;
}

.box-3-1{
  position: relative;
  display: inline-block;
  width: calc(33.33% - 30px);
  height: auto;
  vertical-align: top;
  padding: 0 10px;
}

.box-3-2{
  position: relative;
  display: inline-block;
  width: calc(66.66% - 30px);
  height: auto;
  vertical-align: top;
  padding: 0 10px;
}

@media (max-width: 768px) {
  .page-content{
    width: calc(100% - 30px);
    padding: 60px 15px 0 15px;
  }
}
</style>
