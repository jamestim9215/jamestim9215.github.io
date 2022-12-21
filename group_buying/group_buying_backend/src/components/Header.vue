<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const router = useRouter();
const isLogin = ref(false);
// sessionStorage.setItem('isLogin',"aaa")
sessionStorage.getItem("isLogin")
  ? (isLogin.value = true)
  : (isLogin.value = false);

if(isLogin.value==false) router.push("/");

const logoutHandler = () => {
  sessionStorage.removeItem("isLogin");
  isLogin.value = false;
  router.push("/");
};
</script>

<template>
  <div class="header">
    <div class="container-fluid">
      <div class="logo-div">
        OOXX團購網 後臺管理系統
      </div>
      <div class="header-btn-group">
        <span>二良烤饅頭 (新莊)</span>
        <div id="userDiv" v-if="isLogin === true" @click="logoutHandler()">
            
          
          <font-awesome-icon icon="fa-solid fa-user" /> 登出
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.header {
  position: relative;
  height: 50px;
  z-index: 100;
  line-height: 50px;
  width: 100%;
  background: var(--theme-yellow);
  color: var(--theme-black);
  font-size: 18px;
}
.header > div {
  display: flex;
  justify-content: space-between;
}
.logo-div,
.header-btn-group {
  position: relative;
  display: flex;
}
.logo-div {
  padding: 0 10px;
  font-weight: 500;
}
#cartBtn,
#userDiv {
  position: relative;
  display: inline-block;
  line-height: auto;
  vertical-align: middle;
  padding: 0 10px;
  cursor: pointer;
}

#member-div {
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
#userDiv:hover > #member-div {
  transform: translateX(-50%) translateY(0%);
  opacity: 1;
}
#member-div > div,
#member-div > a > div {
  position: relative;
  display: block;
  padding: 0 10px;
  font-weight: 400;
  line-height: 40px;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
}
#member-div > a > div:hover,
#member-div > div:hover {
  background: var(--theme-yellow);
}

@media (max-width: 1199px) {
  #member-div {
    left: auto;
    right: 10px;
    transform: translateX(0%) translateY(-130%);
  }
  #userDiv:hover > #member-div {
    transform: translateX(0%) translateY(0%);
  }
  .logo-div{
    position: absolute;
    top: -10px;
    left: 0;
    font-size: 18px;
  }
  .header > div {
    display: flex;
    justify-content: flex-end;
  }
  .header-btn-group {
    position: relative;
    display: flex;
    width: 100%;
    justify-content: flex-end;
  }
  .header-btn-group>span{
    position: absolute;
    bottom: -10px;
    left: 10px;
    font-size: 14px;
  }
  
}
</style>
