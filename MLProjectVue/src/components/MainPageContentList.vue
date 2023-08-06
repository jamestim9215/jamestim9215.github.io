<script setup>
import { ref } from "vue";
import {useRouter,useRoute} from 'vue-router';

const router = useRouter();
const route = useRoute();

defineProps({});

</script>

<template>
  <div class="content-template-1">
    <div class="container">
      <div>
        <div class="title">Title</div>
        <div class="content">
          content content content content content content content content
          content content content content content content content content
          content content .....
        </div>
        <button @click="router.push('/'+route.params.item+'/123')">MORE</button>
      </div>
      <div>
        <img src="" alt="" />
      </div>
    </div>
  </div>
  <div class="content-template-2">
    <div class="container">
      <div>
        <div class="title">Title</div>
        <div class="content">
          content content content content content content content content
          content content content content content content content content
          content content .....
        </div>
        <button @click="router.push('/'+route.params.item+'/123')">MORE</button>
      </div>
      <div>
        <img src="" alt="" />
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
      color: #333333;
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
        position: relative;
        // left: 0px;
        // bottom: 20px;
        margin-top: 10px;
        min-width: 120px;
        height: 40px;
        border: 0;
        border-radius: 10px;
        font-size: 16px;
        background: var(--theme-color-2-03);
        cursor: pointer;
      }
    }
    > div:nth-child(1) {
      padding: 35px 55px 55px 55px;
      // background: var(--theme-color-2);
    }
    > div:nth-child(2) {
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
      }
      > div:nth-child(1) {
        padding: 30px;
        // background: var(--theme-color-2);
      }
      > div:nth-child(2) {
        width: 100%;
      }
    }
  }

  .content-template-2 {
    background: #ffffff;
    }
}
</style>
