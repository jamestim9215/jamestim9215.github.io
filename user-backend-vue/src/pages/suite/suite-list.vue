<script setup>
import { ref, watch, computed } from 'vue'
import {useRouter,useRoute } from 'vue-router';

import "@/assets/css/content.scss";

const router = useRouter();
const route = useRoute();

const suiteList = ref([
  {
    id: 1,
    name: "Suite Name 1",
    options: ["view"],
    imgUrl: "https://images.pexels.com/photos/7031731/pexels-photo-7031731.jpeg?auto=compress&cs=tinysrgb&w=600",
    address: "address1",
  },
  {
    id: 2,
    name: "Suite Name 2",
    options: ["view"],
    imgUrl: "https://images.pexels.com/photos/7031731/pexels-photo-7031731.jpeg?auto=compress&cs=tinysrgb&w=600",
    address: "address2",
  },
  {
    id: 1,
    name: "Suite Name 1",
    options: ["view"],
    imgUrl: "https://images.pexels.com/photos/7031731/pexels-photo-7031731.jpeg?auto=compress&cs=tinysrgb&w=600",
    address: "address1",
  },
  {
    id: 2,
    name: "Suite Name 2",
    options: ["view"],
    imgUrl: "https://images.pexels.com/photos/7031731/pexels-photo-7031731.jpeg?auto=compress&cs=tinysrgb&w=600",
    address: "address2",
  },
  {
    id: 1,
    name: "Suite Name 1",
    options: ["view"],
    imgUrl: "https://images.pexels.com/photos/7031731/pexels-photo-7031731.jpeg?auto=compress&cs=tinysrgb&w=600",
    address: "address1",
  },
  {
    id: 2,
    name: "Suite Name 2",
    options: ["view"],
    imgUrl: "https://images.pexels.com/photos/7031731/pexels-photo-7031731.jpeg?auto=compress&cs=tinysrgb&w=600",
    address: "address2",
  },

])

const imgUserUrl = (url) => {
  if(url.match('http')){
    return url;
  }else{
    return new URL(`/src/assets/images/user/${url}`, import.meta.url).href
  }
}

</script>

<template>
  <div class="content-page">
    <div class="content-title">
        套房列表
    </div>
    <div class="content-body">
        <div class="card-list">
          <div class="card" v-for="(suiteItem, suiteIndex) in suiteList" :key="suiteIndex">
            <div>
              <img :src="suiteItem.imgUrl" alt="">
              <div class="name">
                {{ suiteItem.name }}
              </div>
              <div class="address">
                {{ suiteItem.address }}
              </div>
              <button class="btn btn-dark btn-block">
                檢視
              </button>
            </div>
          </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>




</style>