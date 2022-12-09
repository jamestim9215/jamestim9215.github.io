<script setup>
import { ref } from 'vue'
import Header from '@/components/Header.vue'
import Boxing from '@/components/boxing.vue'
import { showLoading, hideLoading } from '@/common/common'

</script>

<template>
  <Header></Header>
  <div class="container">
    <div class="my-info-div">
      <div
        style="
          vertical-align: middle;
          display: flex;
          justify-content: space-between;
        "
      >
        <router-link to="/">
          <button class="btn back-btn">
            <font-awesome-icon icon="fa-solid fa-angle-left" /> 繼續購買
          </button>
        </router-link>
        <div class="bread-crumbs-div">
          <span>我的資訊</span>
          <font-awesome-icon icon="fa-solid fa-angle-left" />
          <router-link to="/"><span>首頁</span></router-link>
        </div>
      </div>
      <div class="title-div">
        <h1>我的資訊</h1>
      </div>
      <div class="content-div">
        <div>
          <label for="">帳號:</label>
          <div>xxxxxxxxx@xxxxx.xxxx</div>
        </div>
        <div>
          <label for="">密碼:</label>
          <div>
            <button class="btn btn-reset-pwd">重設密碼</button>
          </div>
        </div>
        <div>
          <label for="">暱稱:</label>
          <div> <input type="text" value="小明"> </div>
        </div>
        <div>
          <label for="">姓名:</label>
          <div><input type="text" value="王小明"></div>
        </div>
        <div>
          <label for="">手機:</label>
          <div><input type="text" value="0000000000"></div>
        </div>
        <div>
          <label for="">地址:</label>
          <div><input type="text" value="新北市....."></div>
        </div>
        <div style="text-align: center;width: 100%">
          <div><button class="btn btn-save-info">儲存資料</button></div>
        </div>
      </div>
    </div>
  </div>
  <Boxing />
</template>

<style scoped>
  
.my-info-div{
  position: relative;
  display: block;
  padding: 10px;
}
.title-div{
  background: var(--theme-white);
  padding: 10px;
  margin: 10px 0;
}
h1{
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}
.content-div{
  background: var(--theme-white);
  padding: 20px;
  margin: 10px 0;
}

.content-div>div{
  display: flex;
  margin: 10px 0;
}
.content-div>div>label{
  width: 70px;
  font-size: 16px;
  font-weight: 400;
  text-align: right;
  padding: 0 15px;
  align-self: center;
}
.content-div>div>div{
  width: 100%;
}
.content-div>div>div>input{
  border: 1px solid var(--theme-light);
  align-self: center;
}
.btn-save-info{
  background: var(--theme-yellow);
  color: var(--theme-black);
  border:1px solid var(--theme-yellow);
  font-weight: 700;
  font-size: 16px;
}
.btn-save-info:hover{
  background: var(--theme-yellow-hover);
}

@media (max-width: 767px) {
  

}

@media (max-width: 390px) {
  
}
</style>
