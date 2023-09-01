<script setup>
import { ref, computed, watch } from "vue";
import Header from "@/components/Header.vue";

import Footer from "@/components/Footer.vue";
import PTable from "@/components/PTable.vue";

import {useRouter,useRoute} from 'vue-router';

defineProps({});

const theme = ref(1);
const MainPageType = ref(2);
const title = ref('');

const nowPage = ref('');
const route = useRoute();
const router = useRouter();

const item = computed(() => {

  return route.params.item
});

const isShowPTable = ref(true);

nowPage.value = item.value;

const searchInput = ref('');

const setTextFun = (data) => {
  searchInput.value = data;
}

</script>

<template>
  <Header />
  <div class="search-div">
    <div class="container">
      <div class="title">Materials Explorer</div>
      <div class="search-text">Search for materials information by chemistry, composition, or property.</div>
      <div class="search-group">
        <input type="text" value="Materials" disabled readonly>
        <input type="text" v-model="searchInput">
        <button class="btn-ptable" @click="isShowPTable?isShowPTable=false:isShowPTable=true">
          <img src="@/assets/images/PTable.png" alt="" srcset="" v-if="isShowPTable">
          <img src="@/assets/images/PTable1.png" alt="" srcset="" v-else>
        </button>
        <button class="btn-search">Search</button>
        <span class="clearBtn" v-if="searchInput" @click="searchInput=''">
          <span class="material-icons">
          clear
          </span>
        </span>
      </div>
      <PTable v-show="isShowPTable" :text="searchInput" @setText="setTextFun"/>
    </div>
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
.search-div{
  position: relative;
  width: 100%;
  background: #323D61;
  min-height: 300px;
  padding: 55px 0;
  .title{
      font-size: 50px;
      margin-bottom: 20px;
      font-weight: 700;
      color:#fff;
  }
  .search-text{
    font-size: 18px;
    color: #fff;
    text-align: center;
  }
  .search-group{
    position: relative;
    margin: 30px 0;
    display: flex;
    input{
      position: relative;
      display: block;
      border: 1px solid #ccc;
      background: #fff;
      height: 50px;
      width: 100%;
      line-height: 50px;
      border-radius: 0;
      font-size: 20px;
      color: #000;
      padding: 0;
      width: 135px;
      &:nth-child(1){
        position: relative;
        display: block;
        border-radius: 10px 0 0 10px;
        text-align: center;
        font-size: 20px;
        background: #D9D9D9;
        color: #666666;
      }
      &:nth-child(2){
        padding: 0 15px;
        width: calc(100% - 135px - 135px - 135px - 6px);
      }
    }
    button{
      position: relative;
      display: inline-block;
      width: 135px;
      background: #fff;
      color: #666666;
      border-radius: 0;
      font-size: 20px;
      text-align: center;
      border: 1px solid #ccc;
      &.btn-ptable{
        position: relative;
        display: inline-block;
        width: 135px;
        cursor: pointer;
        img{
          height: 40px;
        }
      }
      &.btn-search{
        position: relative;
        display: inline-block;
        width: 135px;
        background: var(--theme-color-1);
        border: 1px solid var(--theme-color-1);
        border-radius: 0 10px 10px 0;
        color: #fff;
        cursor: pointer;
      }
    }
    .clearBtn{
      position: absolute;
      right: calc(135px + 135px + 8px);
      top: 10px;

    }
  }

}
@media (max-width: 960px) {
  .search-div{
    padding: 10px;
    width: calc(100% - 20px);
    .title{
        font-size: 36px;
    }
    .search-text{
      font-size: 16px;
      text-align: left;
    }
  }
  .search-div .search-group>input{
      &:nth-child(1){
        width: 80px;
        font-size: 16px;
      }
      &:nth-child(2){
        width: calc(100% - 80px - 135px - 6px);
      }
  }
  .search-div .search-group>button.btn-ptable{
      display: none;
  }
    
}

@media (max-width: 768px) {

}
</style>
