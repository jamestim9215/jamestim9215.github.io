<script setup>
import { ref, onMounted, computed } from 'vue';

import { storeToRefs } from "pinia";
import { useStore } from "@/store/index.js";

const store = useStore();
const { getMenuList } = storeToRefs(store);

const menuList = computed(() => { return getMenuList.value });
const path = ref('');
onMounted(() => {
  path.value = location.pathname;
  
});
</script>

<template>
  <div class="tag-div">
    <router-link
      v-for="key in menuList"
      :key="key.id"
      :to="key.link"
      :style="key.id == 'menu_00' && path == '/' ? 'display:none;' : ''"
    >
      <button
        :class="[
          {  'fullbtn' : path!='/' },
          {  'active' : path == key.link }
        ]"
        :title="key.zhTW_name"
      >
        {{ key.en_name }}
      </button>
    </router-link>
  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tag-div {
  position: relative;
  width: calc(100% - 30px);
  padding: 0 15px;
  max-width: 1000px;
  text-align: center;
  margin: 0 auto;
  margin-top: 30px;

  display: flex;
  gap: 10px;
  flex-wrap: wrap;
  justify-content: center;
  button {
    position: relative;
    border: 1px solid #d9ff00;
    background: #222;
    padding: 8px 12px;
    font-size: 16px;
    border-radius: 5px;
    color: #d9ff00;
    cursor: pointer;
    transition: 0.5s all;
    overflow: hidden;
    width: 150px;
    z-index: 0;
    &::before {
      content: "";
      position: absolute;
      z-index: 0;
      width: 50%;
      height: 100%;
      left: -100%;
      top: 0;
      background: #d9ff00;
      transition: 0.5s all;
    }
    &::after {
      content: "";
      position: absolute;
      z-index: 0;
      width: 50%;
      height: 100%;
      right: -100%;
      top: 0;
      background: #d9ff00;
      transition: 0.5s all;
    }
    &:hover {
      color: #333;
      &::before {
        z-index: -1;
        left: 0%;
      }
      &::after {
        z-index: -1;
        right: 0%;
      }
    }
  }
  button.active {
    color: #333;
    background: #d9ff00;
  }
  .fullbtn {
    width: 100%;
    max-width: 150px;
    padding: 6px 12px;
    margin: 0 0 10px 0;
  }
  a:nth-last-child(1) button {
    margin: 0 0 10px 0;
  }
}

@media (max-width: 768px) {
  // .tag-div {
  //   button {
  //     width: 100%;
  //   }
  // }
}
</style>
