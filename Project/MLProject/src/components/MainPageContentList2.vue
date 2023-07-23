<script setup>
import { ref } from "vue";
import {useRouter,useRoute} from 'vue-router';

defineProps({
  theme : {
    type: Number,
    default: 1
  },
});

const router = useRouter();
const route = useRoute();
</script>

<template>
  <div class="content-template-1">
    <div class="container">
      <div>
        <img src="" alt="" />
      </div>
      <div  :style="theme==1?'background: #6079BA;':'background: #F3C976;'">
        <div class="title">Title</div>
        <div class="content">
          content content content content content content content content
          content content content content content content content content
          content content .....
        </div>
        <button @click="router.push('/'+route.params.item+'/123')" :class="theme==1?'theme1':'theme2'">More</button>
      </div>
    </div>
  </div>
  <div class="content-template-2">
    <div class="container">
      <div>
        <img src="" alt="" />
      </div>
      <div  :style="theme==1?'background: #6079BA;':'background: #F3C976;'">
        <div class="title">Title</div>
        <div class="content">
          content content content content content content content content
          content content content content content content content content
          content content .....
        </div>
        <button @click="router.push('/'+route.params.item+'/123')" :class="theme==1?'theme1':'theme2'">More</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-template-1,
.content-template-2 {
  position: relative;
  background: none;
  width: 100%;
  padding: 50px 0;
  > div {
    position: relative;
    display: flex;
    > div {
      position: relative;
      width: 100%;
      height: auto;
      color: #fff;
      .title {
        font-size: 36px;
        margin-bottom: 10px;
        font-weight: 700;
      }
      .content {
        font-size: 24px;
        font-weight: 300;
      }
      img {
        position: relative;
        width: 100%;
        min-width: 100%;
        height: auto;
        min-height: 100%;
        background: #ccc;
        object-fit: cover;
        object-position: center center;
      }
      
      button{
        position: absolute;
        right: 20px;
        bottom: 20px;
        min-width: 120px;
        height: 40px;
        border: 0;
        border-radius: 10px;
        font-size: 20px;
        background: #fff;
        cursor: pointer;
        &.theme1{
          color: var(--theme-color-2);
        }
        &.theme2{
          color: var(--theme-color-1);
        }
      }
    }
    > div:nth-child(2) {
      padding: 35px 55px 55px 55px;
      // background: var(--theme-color-2);
    }
    > div:nth-child(1) {
      max-width: 500px;
    }
  }
}
.content-template-2 {
  background: #ffffff;
}
@media (max-width: 768px) {
  .content-template-1,
  .content-template-2 {
    padding: 20px;
    width: calc(100% - 40px);
    > div {
      display: block;
      > div {
        width: calc(100% - 60px);
        .title {
          width: 100%;
          font-size: 30px;
          margin-bottom: 10px;
          font-weight: 700;
        }
        .content {
          width: 100%;
          font-size: 20px;
          font-weight: 300;
        }
        img {
          min-height: 200px;
        }

        
        button{
          position: relative;
          right: auto;
          bottom: auto;
          margin-top: 20px;
          min-width: 120px;
          height: 40px;
          border: 0;
          border-radius: 10px;
          font-size: 20px;
          background: #fff;
          cursor: pointer;
          &.theme1{
            color: var(--theme-color-2);
          }
          &.theme2{
            color: var(--theme-color-1);
          }
        }
      }
      > div:nth-child(1) {
        width: 100%;
        padding: 0px;
        // background: var(--theme-color-2);
      }
      > div:nth-child(2) {
        width: calc(100% - 30px);
        padding: 15px;
      }
    }
  }

  .content-template-2 {
    background: #ffffff;
  }
}
</style>
