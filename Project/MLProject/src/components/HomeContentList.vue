<script setup>
import { ref } from "vue";
import {useRouter,useRoute} from 'vue-router';

const router = useRouter();

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
      </div>
      <div>
        <img src="" alt="" />
        <button @click="router.push('/test/123')">MORE</button>
      </div>
    </div>
  </div>
  <div class="content-template-2">
    <div class="container">
      <div>
        <img src="" alt="" />
        <button @click="router.push('/test/123')">MORE</button>
      </div>
      <div>
        <div class="title">Title</div>
        <div class="content">
          content content content content content content content content
          content content content content content content content content
          content content .....
        </div>
      </div>
    </div>
  </div>
  <div class="content-template-1">
    <div class="container">
      <div>
        <div class="title">Title</div>
        <div class="content">
          content content content content content content content content
          content content content content content content content content
          content content .....
        </div>
      </div>
      <div>
        <img src="" alt="" />
        <button @click="router.push('/test/123')">MORE</button>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.content-template-1,
.content-template-2 {
  position: relative;
  background: #ffefcf;
  width: 100%;
  padding: 50px 0;
  > div {
    position: relative;
    display: flex;
    > div {
      position: relative;
      width: 100%;
      height: auto;
      color: #ffffff;
      .title {
        font-size: 50px;
        margin-bottom: 20px;
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
      button {
        position: absolute;
        z-index: 1;
        right: 30px;
        bottom: 30px;
        width: 140px;
        height: 58px;
        background: var(--theme-color-2);
        color: #fff;
        font-size: 24px;
        border: 0;
        border-radius: 10px;
      }
    }
    > div:nth-child(1) {
      padding: 35px 55px 55px 55px;
      background: var(--theme-color-2);
    }
  }
}
.content-template-2 {
  background: #ffffff;
  > div {
    > div {
      button {
        right: auto;
        left: 30px;
      }
    }
    > div:nth-child(1) {
      padding: 0;
      background: none;
    }
    > div:nth-child(2) {
      padding: 35px 55px 55px 55px;
      background: var(--theme-color-2);
    }
  }
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
        button {
          right: 15px;
          bottom: 15px;
          width: 120px;
          height: 40px;
          font-size: 18px;
        }
      }
      > div:nth-child(1) {
        padding: 30px;
        background: var(--theme-color-2);
      }
      > div:nth-child(2) {
        width: 100%;
      }
    }
  }

  .content-template-2 {
    background: #ffffff;
    > div {
      > div {
        button {
          left: auto;
          right: 15px;
          bottom: 15px;
          width: 120px;
          height: 40px;
          font-size: 18px;
        }
      }
      > div:nth-child(1) {
        width: 100%;
        padding: 0;
        background: none;
      }
      > div:nth-child(2) {
        width: calc(100% - 60px);
        padding: 30px;
      }
    }
  }
}
</style>
