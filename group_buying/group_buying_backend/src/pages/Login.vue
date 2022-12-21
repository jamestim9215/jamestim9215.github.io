<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
import Boxing from "@/components/boxing.vue";
import { showLoading, hideLoading } from "@/common/common";

const router = useRouter();
sessionStorage.removeItem("isLogin");

const my_account = ref("");
const my_password = ref("");

const loginHandler = () => {
  if (my_account.value === "" || my_password.value === "") {
    alert("帳號或密碼錯誤!");
  } else {
    sessionStorage.setItem("isLogin", "aaa");
    // alert('登入成功!');
    router.push("/order-list");
  }
};
const signUpHandler = () => {
  router.push("/sign-up");
};
</script>

<template>
  <div class="login-div">
    <div class="title">OOXX團購網 後臺管理系統</div>
    <div class="content">嗨! 歡迎使用 OOXX團購網 後臺管理系統 <br>請先登入</div>
    <div class="input">
      <label for="">帳號</label>
      <input type="text" v-model="my_account" @keyup.enter="loginHandler()" />
    </div>
    <div class="input">
      <label for="">密碼</label>
      <input
        type="password"
        v-model="my_password"
        @keyup.enter="loginHandler()"
      />
    </div>
    <!-- <div class="forget-pwd">
      <router-link to="/forget-pwd">
        忘記密碼?
      </router-link>
    </div> -->
    <div class="button-div">
      <button class="btn btn-login" @click="loginHandler()">登入</button>
    </div>
  </div>
  <Boxing />
</template>

<style scoped>
.login-div {
  position: relative;
  display: block;
  width: calc(100% - 20px);
  height: auto;
  max-width: 500px;
  min-height: 100px;
  background: var(--theme-white);
  margin: 60px auto 0 auto;
  text-align: center;
  /* margin-top: calc(50vh - 60px);
  transform: translateY(-50%); */
}

.login-div > div {
  padding: 5px 15px;
}

.login-div .title {
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  color: var(--theme-white);
  background: var(--theme-yellow);
}
.login-div .content {
  text-align: center;
  padding: 20px 0;
}

.login-div .forget-pwd {
  text-align: right;
  font-size: 14px;
}
.login-div .forget-pwd > a {
  color: var(--theme-red);
}

.login-div .button-div {
  padding: 25px;
  text-align: center;
}
.login-div .input {
  text-align: left;
  display: inline-block;
  max-width: 380px;
  width: calc(100% - 30px);
  padding: 0px 15px;
}

.login-div input {
  position: relative;
  display: inline-block;
  vertical-align: middle;
  min-width: 160px;
  font-size: 14px;
  background: var(--theme-light);
}

.btn-login {
  position: relative;
  display: inline-block;
  width: 100%;
  max-width: 200px;
  background: var(--theme-yellow);
  color: var(--theme-black);
  border: 1px solid var(--theme-yellow);
  font-weight: 700;
  font-size: 16px;
}
.btn-login:hover {
  background: var(--theme-yellow-hover);
  /* color: var(--theme-white); */
}
.btn-sign {
  width: 100%;
  background: var(--theme-white);
  color: var(--theme-red);
  border: 1px solid var(--theme-red);
  font-weight: 700;
  font-size: 16px;
}
.btn-sign:hover {
  background: var(--theme-red);
  color: var(--theme-white);
  border: 1px solid var(--theme-red);
}

@media (max-width: 767px) {
}

@media (max-width: 390px) {
}
</style>
