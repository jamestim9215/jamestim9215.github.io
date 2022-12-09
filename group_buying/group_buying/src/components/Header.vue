<script setup>
import { ref } from 'vue'
import { useRouter,useRoute } from 'vue-router'
  const router = useRouter()
const isLogin = ref(false)
// sessionStorage.setItem('isLogin',"aaa")
sessionStorage.getItem('isLogin')?isLogin.value=true:isLogin.value=false;

const logoutHandler = () => {
  sessionStorage.removeItem('isLogin');
  isLogin.value=false;
  router.push('/')
}
</script>

<template>
  <div class="header">
    <div class="container ">
      <div class="logo-div">
        <router-link to="/">GROUP BUYING</router-link>
      </div>
      <div class="header-btn-group">
        <div id="cartBtn"><router-link to="/shopping-cart"><font-awesome-icon icon="fa-solid fa-cart-shopping" /> 購物車</router-link></div>
        <div id="userDiv">
          <font-awesome-icon icon="fa-solid fa-user" />會員
          <div id="member-div">
            <!-- <div>
              <input type="text">
            </div>
            <div>
              <input type="password">
            </div> -->
            <!-- <div style="text-align:right;display:flex;margin-top: 8px;">
              <button class="btn btn-login">登入</button>
              <button class="btn btn-sign">註冊</button>
            </div> -->
            <router-link to="/login/"  v-if="isLogin===false">
              <div>會員登入</div>
            </router-link>
            <router-link to="/my-orders/"  v-if="isLogin===true">
              <div>我的訂單</div>
            </router-link>
            <router-link to="/my-info/"  v-if="isLogin===true">
              <div  v-if="isLogin===true">我的資料</div>
            </router-link>
            <div  v-if="isLogin===true" @click="logoutHandler()">登出</div>
          </div>
        </div>

      </div>

    </div>
  </div>
</template>

<style scoped>
  .header{
    position: relative;
    height: 50px;
    z-index: 100;
    line-height: 50px;
    width: 100%;
    background: var(--theme-yellow);
    color: var(--theme-black);
    font-size: 18px;
  }
  .header>div{
    display: flex;
    justify-content: space-between;
  }
  .logo-div,
  .header-btn-group{
    position: relative;
    display: flex;
  }
  .logo-div{
    padding: 0 10px;
    font-weight: 500;
  }
  #cartBtn,
  #userDiv{
    position: relative;
    display: inline-block;
    line-height: auto;
    vertical-align: middle;
    padding: 0 10px;
  }

  #member-div{
    position: absolute;
    z-index: -1;
    /* width: 160px; */
    /* min-height: 100px; */
    background: var(--theme-yellow-50);
    /* background: var(--theme-red); */
    left: 50%;
    transform: translateX(-50%) translateY(-130%);
    top: 100%;
    transition: 0.2s ease-in-out;
    opacity: 0;
  }
  #userDiv:hover>#member-div{
    transform: translateX(-50%) translateY(0%);
    opacity: 1;
  }
  #member-div>div,
  #member-div>a>div{
    position: relative;
    display: block;
    padding: 0 10px;
    font-weight: 400;
    line-height: 40px;
    white-space:nowrap;
    text-align: center;
    cursor: pointer;
  }
  #member-div>a>div:hover,
  #member-div>div:hover{
    background: var(--theme-yellow);
  }

  @media (max-width: 1200px) {
    #member-div{
      left: auto;
      right: 10px;
      transform: translateX(0%) translateY(-130%);
    }
    #userDiv:hover>#member-div{
      transform: translateX(0%) translateY(0%);
    }
  
    
  }
</style>
