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
            <div>Material</div>
            <div>
              <div @click="router.push('/introduction-hem')">
                Introduction(HEM)
              </div>
              <div @click="router.push('/material_informatics')">
                Material informatics
              </div>
            </div>
          </div>
          <div>
            <div>Collabration</div>
            <div>
              <div @click="router.push('/demo_cases')">Demo cases</div>
            </div>
          </div>
          <div>
            <div>Materials Explorer</div>
            <div>
              <div @click="router.push('/data_base')">Data base</div>
            </div>
          </div>
          <div>
            <div>ML platform</div>
            <div>
              <div @click="router.push('/data_cleaning')">data cleaning</div>
              <div @click="router.push('/feature_select')">feature select</div>
              <div @click="router.push('/cross_validation')">
                Cross validation
              </div>
              <div @click="router.push('/prediction')">Prediction</div>
              <div @click="router.push('/optimization')">Optimization</div>
            </div>
          </div>
          <div>
            <div @click="router.push('/about_us')">About us</div>
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
        > div > div {
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
          > div > div {
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
