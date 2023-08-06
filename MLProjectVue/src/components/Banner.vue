<script setup>
import { ref } from "vue";
import {useRouter,useRoute} from 'vue-router';

defineProps({});

const router = useRouter();
const route = useRoute();
</script>

<template>
  <div class="container-fluid">
    <div class="banner-div">
      <div class="banner-bg">
        <img src="@/assets/images/banner.png" alt="">
      </div>
      <div class="container">
        <div class="banner-content">
          <div class="title">
            Title 
          </div>
          <div class="content">
            content content content content content content content content content content content content content content content content content content .....
            <button @click="router.push('/tes/123')" >LEARN MORE</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.banner-div {
  position: relative;
  width: 100%;
  height: 600px;
  .banner-bg{
    position: absolute;
    width: 100%;
    height: 600px;
    z-index: 0;
    img{
      width: 100%;
      height: 600px;
      object-fit: cover;
      object-position: center center;
    }
  }
  .banner-content{
    position: absolute;
    z-index: 0;
    top: 100px;
    width: calc(100% - 110px);
    max-width: 800px;
    height: calc(400px - 110px);
    background: var(--theme-color-1-05);
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
      right: 55px;
      bottom: 55px;
      width: 240px;
      height: 58px;
      background: #fff;
      border: 0;
      border-radius: 10px;
      font-size: 20px;
      cursor: pointer;
    }
  }
}


@media (max-width: 768px) {
  
.banner-div {
  height: 500px;
  
  .banner-bg{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;
    img{
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: center center;
    }
  }
  .banner-content{
    top: 50px;
    width: calc(100% - 30px);
    height: calc(400px - 30px);
    padding: 15px;
    .title{
      font-size: 30px;
      margin-bottom: 10px;
    }
    .content{
      font-size: 18px;
    }
    button{
      right: 15px;
      bottom: 15px;
      width: 140px;
      height: 40px;
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
