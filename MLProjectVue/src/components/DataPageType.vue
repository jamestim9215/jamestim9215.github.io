<script setup>
import { ref, computed, watch } from "vue";
import {useRouter,useRoute} from 'vue-router';

// const pageIndex = ref(1);
const route = useRoute();
const router = useRouter();

const mainPage = computed(() => {
  return route.fullPath.split("/")[1]
});
const pageType = computed(() => {
  return route.fullPath.split("/")[2]
});
// console.log();


    
</script>
<template>
  <div class="data-page-div">
    <button :class="pageType=='data_explorer'?'active':''"  @click="router.push('/'+mainPage+'/data_explorer')">Data explorer</button>
    <button :class="pageType=='data_visualizer'?'active':''"  @click="router.push('/'+mainPage+'/data_visualizer')">Data visualizer</button>
    <button :class="pageType=='data_warehouse'?'active':''"  @click="router.push('/'+mainPage+'/data_warehouse')">Data warehouse</button>
    <button :class="pageType=='model_warehouse'?'active':''"  @click="router.push('/'+mainPage+'/model_warehouse')">Model warehouse</button>
  </div>
</template>
<style lang="scss" scoped>

.data-page-div{
  position: relative;
  display: block;
  text-align: center;
  padding: 10px 20px 20px 20px;
  background: var(--theme-color-1-03);
  button{
    position: relative;
    display: inline-block;
    width: auto;
    min-width: 200px;
    padding: 10px 12px;
    background: #fff;
    color: #666666;
    border: 1px solid #ccc;
    border-radius: 5px;
    font-size: 16px;
    margin: 10px 10px 0 10px;
    cursor: pointer;
    transition: 0.3s all;
    &:hover{
      background: #ccc;
      color:  var(--theme-color-2);
      border: 1px solid var(--theme-color-2);
    }
    &.active{
      cursor: default;
      background: var(--theme-color-2);
      color: #fff;
      border: 1px solid var(--theme-color-2);
    }
  }
}

</style>