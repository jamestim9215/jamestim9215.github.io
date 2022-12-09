<script setup>
import { ref } from 'vue'
import { useRouter,useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import Boxing from '@/components/boxing.vue'
import { showLoading, hideLoading } from '@/common/common' 

const router = useRouter()
sessionStorage.removeItem('isLogin');

const my_account = ref('')
const my_password = ref('')


const loginHandler = () => {

  if(my_account.value === '' || my_password.value === ''){
    alert('帳號或密碼錯誤!');
  }else{
    sessionStorage.setItem('isLogin',"aaa");
    // alert('登入成功!');
    router.push('/')
  }
  
}
const signUpHandler = () => {
  router.push('/sign-up')
}

</script>

<template>
  <Header></Header>
  <div class="login-div">
    <div class="content">
      登入
    </div>
    <div class="input">
      <label for="">帳號</label>
      <input type="text" v-model="my_account"  @keyup.enter="loginHandler()">
    </div>
    <div class="input">
      <label for="">密碼</label>
      <input type="password" v-model="my_password"  @keyup.enter="loginHandler()">
    </div>
    <div class="forget-pwd">
      <router-link to="/forget-pwd">
        忘記密碼?
      </router-link>
    </div>
    <div class="button-div">
      <button class="btn btn-login" @click="loginHandler()">登入</button>
    </div>
    <hr>
    <div class="content">
      還不是會員?
    </div>
    <div class="button-div">
      <button class="btn btn-sign" @click="signUpHandler()">點我註冊</button>
    </div>
  </div>
  <Boxing />
</template>

<style scoped>
  
.login-div{
  position: relative;
  display: block;
  width: calc(100% - 20px);
  height: auto;
  max-width: 500px;
  min-height: 100px;
  background: var(--theme-yellow-50);
  margin: 60px auto 0 auto;
  /* margin-top: calc(50vh - 60px);
  transform: translateY(-50%); */
  padding: 15px;
}

.login-div>div{
  padding: 5px 0;
}

.login-div .content{
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  color:  var(--theme-black);
}


.login-div .forget-pwd{
  text-align: right;
  font-size: 14px;
}
.login-div .forget-pwd>a{
  color:  var(--theme-red);
}

.login-div .button-div{
  display: flex;
  justify-content: space-between;
}

.login-div input{
  position: relative;
  display: inline-block;
  vertical-align: middle;
  min-width: 160px;
  font-size: 14px;
}

.btn-login{
  width: 100%;
  background: var(--theme-yellow);
  color: var(--theme-black);
  border:1px solid var(--theme-yellow);
  font-weight: 700;
  font-size: 16px;
}
.btn-login:hover{
  background: var(--theme-yellow-hover);
  /* color: var(--theme-white); */
}
.btn-sign{
  width: 100%;
  background: var(--theme-white);
  color: var(--theme-red);
  border:1px solid var(--theme-red);
  font-weight: 700;
  font-size: 16px;
}
.btn-sign:hover{
  background: var(--theme-red);
  color: var(--theme-white);
  border:1px solid var(--theme-red);
}

@media (max-width: 767px) {
  

}

@media (max-width: 390px) {
  
}
</style>
