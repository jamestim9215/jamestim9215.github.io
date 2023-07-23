<script setup>
import { ref } from "vue";
import Header from "@/components/Header.vue";
import Banner from "@/components/Banner.vue";
import HomeContentList from "@/components/HomeContentList.vue";
import Footer from "@/components/Footer.vue";

defineProps({});
</script>

<template>
  <Header />
  <Banner />
  <div>
    <div class="container">
      <div class="account-info-div">
        <div>
          <div class="title">
            <span class="material-icons-outlined"> account_circle </span
            >使用者帳號申請
          </div>
          <div class="content">
            申請資格 ....... xxx xxxxxxxxxx xxxxxxxxxxxxxx xxxxxxx xxxxxx
            xxxxxxxx xxxxxxx.....
          </div>
          <a>我要申請</a>
        </div>
        <div>
          <span></span>
        </div>
        <div>
          <div class="title">標題</div>
          <div class="content">
            xxx xxxxxxxxxx xxxxxxxxxxxxxx xxxxxxx xxxxxx xxxxxxxx xxxxxxx.....
          </div>
        </div>
      </div>
    </div>
  </div>
  <HomeContentList/>
  <Footer />
</template>

<style lang="scss" scoped>
.account-info-div {
  position: relative;
  display: flex;
  background: #fff;
  margin: 32px 0;
  padding: 40px;
  > div {
    &:nth-child(1) {
      width: 470px;
    }
    .title {
      font-size: 24px;
      font-weight: 700;
      margin-bottom: 20px;
      .material-icons-outlined{
        font-size: 40px;
        margin-right: 15px;
      }
    }
    .content {
      font-size: 20px;
      margin-bottom: 20px;
    }
    a {
      color: var(--theme-color-2);
    }
    > span {
      position: relative;
      display: inline-block;
      height: 100%;
      width: 1px;
      background: #d9d9d9;
      margin: 0 40px;
    }
  }
}

@media (max-width: 768px) {
  .account-info-div {
    position: relative;
    display: block;
    background: #fff;
    margin: 32px 0;
    padding: 40px;
    > div {
      width: 100%;
      &:nth-child(1) {
        width: calc(100% - 40px);
        max-width: 470px;
      }
      .title {
        font-size: 24px;
        font-weight: 700;
        margin-bottom: 20px;
        .material-icons-outlined{
          font-size: 40px;
          margin-right: 15px;
        }
      }
      .content {
        font-size: 20px;
        margin-bottom: 20px;
      }
      a {
        color: var(--theme-color-2);
      }
      > span {
        position: relative;
        display: inline-block;
        height: 1px;
        width: 100%;
        background: #d9d9d9;
        margin: 20px 0;
      }
    }
  }
}
</style>
