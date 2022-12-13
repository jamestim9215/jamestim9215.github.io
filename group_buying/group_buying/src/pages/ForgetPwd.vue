<script setup>
import { ref } from 'vue'
import { useRouter,useRoute } from 'vue-router'
import Header from '@/components/Header.vue'
import Boxing from '@/components/boxing.vue'
import { showLoading, hideLoading } from '@/common/common' 

const router = useRouter()

const my_account = ref('')

const resendHandler = () => {

}

</script>

<template>
  <Header></Header>
  <div class="login-div">
    <div class="content">
      忘記密碼
    </div>
    <div class="back-div" style="margin: 15px 0">
      請輸入你的Email以收到重設密碼相關資訊。
    </div>
    <div class="input">
      <input type="text" v-model="my_account">
    </div>
    <div class="button-div">
      <button class="btn btn-resend" @click="resendHandler()">重設密碼</button>
    </div>
      <hr>
    <div class="back-div">
      或回上頁<router-link to="/login" >登入</router-link>
    </div>
  </div>
  <Boxing />
</template>

<style scoped>
  
.login-div{
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

.btn-resend{
  width: 100%;
  background: var(--theme-yellow);
  color: var(--theme-black);
  border:1px solid var(--theme-yellow);
  font-weight: 700;
  font-size: 16px;
}
.btn-resend:hover{
  background: var(--theme-yellow-hover);
  /* color: var(--theme-white); */
}

.back-div{
  text-align: center;
  color: var(--theme-black);
  font-size: 16px;
}
.back-div>a{
  color: var(--theme-red);
}

@media (max-width: 767px) {
  

}

@media (max-width: 390px) {
  
}
</style>
