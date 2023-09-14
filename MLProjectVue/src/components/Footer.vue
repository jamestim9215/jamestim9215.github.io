<script setup>
import { ref } from "vue";

import { useRouter, useRoute } from "vue-router";

defineProps({});
const router = useRouter();
const route = useRoute();
</script>

<template>
  <div class="footer-div">
    <div class="container">
      <div class="menu-div">
        <div>Logo 半導體設計服務平台</div>
        <div>
          <div>
            <div>Collabration</div>
            <div>
              <router-link to="/demo_cases">Demo cases</router-link>
            </div>
          </div>
          <div>
            <div>Data driven</div>
            <div>
              <router-link to="/materials_informatics">Material informatics</router-link>
              <router-link to="/semiconductor_informatics">Semiconductor informatics</router-link>
            </div>
          </div>
          <div>
            <router-link to="/about_us')">About us</router-link>
          </div>
        </div>
      </div>
      <div class="copyright">2023 © COPYRIGHT XXXXXX INFORMATICS | PRIVACY</div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.footer-div {
  position: relative;
  width: 100%;
  height: auto;
  min-height: 340px;
  background: #333333;
  color: #fff;
  padding: 30px 0 0 0;
  .menu-div {
    display: flex;
    justify-content: space-between;
    > div {
      display: flex;
      font-size: 20px;
      > div {
        > div > a {
          display: block;
          width: 100%;
          font-size: 18px;
          margin-top: 20px;
        }

        padding: 0 20px;
      }
    }
  }
  .copyright {
    font-size: 16px;
    padding: 30px 0 0 0;
  }
}

@media (max-width: 960px) {
  .footer-div {
    padding: 20px;
    width: calc(100% - 40px);
    .menu-div {
      display: block;
      justify-content: space-between;
      > div:nth-child(1) {
        margin-bottom: 40px;
        padding: 0 0 20px 0;
        border-bottom: 1px solid #666;
      }
      > div {
        margin-top: 0;
        display: block;
        font-size: 18px;
        > div {
          margin-bottom: 30px;
          > div > a {
            font-size: 14px;
            margin-top: 10px;
            padding: 0 15px;
          }

          padding: 0;
        }
      }
    }
    .copyright {
      font-size: 16px;
      padding: 30px 0 0 0;
    }
  }
}
</style>
