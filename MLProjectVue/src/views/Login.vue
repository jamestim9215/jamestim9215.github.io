<script setup>
import { ref, computed, watch } from "vue";
import Header from "@/components/Header.vue";
import SubBanner from "@/components/SubBanner.vue";
import Footer from "@/components/Footer.vue";
import { login } from '@/assets/js/common.js';

import {useRouter,useRoute} from 'vue-router';

defineProps({});

const theme = ref(1);
const MainPageType = ref(2);


const nowPage = ref('');
const route = useRoute();
const router = useRouter();

const item = computed(() => {

  return route.params.item
});

nowPage.value = item.value;

watch(route, (to) => {
  console.log("watch");

    }, {flush: 'pre', immediate: true, deep: true})

const GoogleLoginHandler = () => {
  login('google');
  // router.push('/');
}

const FBLoginHandler = () => {
  login('facebook');
  // router.push('/');
}


</script>

<template>
  <Header />
  <div style="background: #FFEFCF;min-height: 300px; padding: 50px 0">
    <div class="container">
      <div class="login-box">
        <div class="login-div">
          <div class="title">Login</div>
          <button @click="GoogleLoginHandler()">
            <img src="@/assets/images/GOOGLE.png" alt="">
            Sign in with Google
          </button>
          <button @click="FBLoginHandler()">
            <img src="@/assets/images/FB.png" alt="">
            Facebook
          </button>
        </div>
        <div class="sign-div">
          <div class="title">Sign</div>
          <div class="sign-info">
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
        </div>
      </div>
    </div>
  </div>
  <Footer />
</template>

<style lang="scss" scoped>

.login-box{
  position: relative;
  width: 100%;
  display: flex;
  .login-div{
    background: var(--theme-color-1);
  }
  .sign-div{
    background: rgba(97, 122, 186, .5);
  }
  >div{
    padding: 40px 50px;
    width: calc(100% - 100px);
    >.title{
      color: #fff;
      font-size:50px;
      font-weight: bold;
      margin-bottom: 20px;
    }
    >button{
      position: relative;
      display:block;
      width: 100%;
      height: 75px;
      line-height: 75px;
      border: 0;
      border-radius: 10px;
      margin-bottom: 15px;
      font-size: 30px;
      color: #333333;
      background: #fff;
      cursor: pointer;
      vertical-align: middle;
      >img{
        position: absolute;
        left: 20px;
        top: 10px;
        width: 50px;
        height: 50px;
      }
    }
    >.sign-info{
      .title{
        vertical-align: middle;
        font-size: 24px;
        .material-icons-outlined{
          font-size: 40px;
          vertical-align: middle;
          margin-right: 20px;
        }
        font-weight: 700;
        margin-bottom: 20px;
      }
      >.content{
        font-size: 20px;
        margin-bottom: 20px;
      }
      >a{
        font-size: 24px;
        color: #009EF6;
      }
    }
  }
}

@media (max-width: 768px) {
  
  .login-box{
    position: relative;
    width: 100%;
    display: block;
    >div{
      padding: 40px 50px;
      width: calc(100% - 100px);
      >.title{
        color: #fff;
        font-size:50px;
        font-weight: bold;
        margin-bottom: 20px;
      }
      >button{
        position: relative;
        display:block;
        width: 100%;
        height: 50px;
        line-height:50px;
        border: 0;
        border-radius: 10px;
        margin-bottom: 15px;
        font-size: 20px;
        color: #333333;
        background: #fff;
        cursor: pointer;
        vertical-align: middle;
        >img{
          position: absolute;
          left: 10px;
          top: 5px;
          width: 40px;
          height: 40px;
        }
      }
      >.sign-info{
        .title{
          vertical-align: middle;
          font-size: 24px;
          .material-icons-outlined{
            font-size: 40px;
            vertical-align: middle;
            margin-right: 20px;
          }
          font-weight: 700;
          margin-bottom: 20px;
        }
        >.content{
          font-size: 20px;
          margin-bottom: 20px;
        }
        >a{
          font-size: 24px;
          color: #009EF6;
        }
      }
    }
  }
}
</style>
