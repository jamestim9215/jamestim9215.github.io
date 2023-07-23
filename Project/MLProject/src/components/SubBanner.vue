<script setup>
import { ref } from "vue";
import {useRouter,useRoute} from 'vue-router';

defineProps({
  theme : {
    type: Number,
    default: 1
  },
  title: {
    type: String,
    default: ''
  },
});

const router = useRouter();
const route = useRoute();


</script>

<template>
  <div class="container-fluid">
    <div class="banner-div" :style="theme==1?'background: #323D61;':'background: #F3C976;'">
      <div class="container">
        <div class="banner-content">
          <div class="title">
            {{title}} 
          </div>
          <div class="content">
            content content content content content content content content content content content content content content content content content content .....
          </div>
          <button @click="router.push('/'+route.params.item+'/123')" :class="theme==1?'theme1':'theme2'">MORE</button>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner-div {
  position: relative;
  width: 100%;
  // height: 500px;
  
  .banner-content{
    position: relative;
    z-index: 0;
    width: calc(100% - 110px);
    height: calc(400px - 110px);
    color: #fff;
    padding: 55px;
    .title{
      font-size: 50px;
      margin-bottom: 20px;
      font-weight: 700;
    }
    .content{
      font-size: 24px;
      font-weight: 700;
    }
    button{
      position: absolute;
      left: 55px;
      bottom: 55px;
      min-width: 120px;
      height: 58px;
      color: #fff;
      border: 0;
      border-radius: 10px;
      font-size: 20px;
      cursor: pointer;
      &.theme1{
        background: var(--theme-color-2);
      }
      &.theme2{
        background: var(--theme-color-1);
      }
    }
  }
}


@media (max-width: 768px) {
  
.banner-div {
  height: auto;
  min-height: 200px;
  
  .banner-content{
      position: relative;
    top: 50px;
    width: calc(100% - 30px);
    height: auto;
    min-height: 200px;
    padding: 15px 15px 100px 15px;
    .title{
      position: relative;
      font-size: 30px;
      margin-bottom: 10px;
    }
    .content{
      position: relative;
      font-size: 18px;
    }
    button{
      position: relative;
      right: auto;
      bottom: auto;
      width: 140px;
      height: 40px;
      left: auto;
      margin-top: 20px;
      background: #fff;
      border: 0;
      border-radius: 10px;
      font-size: 16px;
      cursor: pointer;
    }
  }
}
}

</style>
