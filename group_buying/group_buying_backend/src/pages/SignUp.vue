<script setup>
import { ref } from 'vue'
import { useRouter,useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import Boxing from '@/components/boxing.vue'
import { showLoading, hideLoading } from '@/common/common' 

const router = useRouter()

const my_account = ref('')
const my_password = ref('')
const my_password_check = ref()


const signupHandler = () => {

}
const signUpHandler = () => {
  router.push('/sign-up')
}

</script>

<template>
  <Header></Header>
  <div class="signup-div">
    <div class="content">
      註冊
    </div>
    <div class="input">
      <label for="">Email 帳號</label>
      <input type="email" v-model="my_account">
    </div>
    <div class="input">
      <label for="">密碼</label>
      <input type="password" v-model="my_password">
    </div>
    <div class="input">
      <label for="">再次輸入密碼</label>
      <input type="password" v-model="my_password_check">
    </div>
    <div class="input">
      <label for="">暱稱</label>
      <input type="text" v-model="nickName">
    </div>
    <div class="input">
      <label for="">姓名</label>
      <input type="text" v-model="name">
    </div>
    <div class="input">
      <label for="">手機號碼</label>
      <input type="text" v-model="phoneNumber">
    </div>
    <div class="input">
      <label for="">地址</label>
      <input type="text" v-model="address">
    </div>
    <div class="content">
      <button class="btn btn-sign" @click="signUpHandler()">註冊</button>
    </div>
      <hr>
    <div class="back-div">
      或回上頁<router-link to="/login" >登入</router-link>
    </div>
  </div>
  <Boxing />
</template>

<style scoped>
  
.signup-div{
  position: relative;
  display: block;
  width: calc(100% - 30px - 20px);
  height: auto;
  max-width: 500px;
  min-height: 100px;
  background: var(--theme-yellow-50);
  margin: 60px auto 0 auto;
  /* margin-top: calc(50vh - 60px);
  transform: translateY(-50%); */
  padding: 15px;
}

.signup-div>div{
  padding: 5px 0;
}

.signup-div .content{
  text-align: center;
  font-size: 24px;
  font-weight: 500;
  color:  var(--theme-black);
}


.signup-div .forget-pwd{
  text-align: right;
  font-size: 14px;
}
.signup-div .forget-pwd>a{
  color:  var(--theme-red);
}

.signup-div .button-div{
  display: flex;
  justify-content: space-between;
}

.signup-div input{
  position: relative;
  display: inline-block;
  vertical-align: middle;
  min-width: 160px;
  font-size: 14px;
}

.btn-sign{
  width: 100%;
  background: var(--theme-yellow);
  color: var(--theme-black);
  border:1px solid var(--theme-yellow);
  font-weight: 700;
  font-size: 16px;
}
.btn-sign:hover{
  background: var(--theme-yellow-hover);
}
.back-div{
  text-align: center;
  color: var(--theme-black);
  font-size: 14px;
}
.back-div>a{
  color: var(--theme-red);
}

@media (max-width: 767px) {
  

}

@media (max-width: 390px) {
  
}
</style>
