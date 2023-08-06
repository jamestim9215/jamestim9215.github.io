<script setup>
import { ref } from "vue";
import {useRouter,useRoute} from 'vue-router';

defineProps({});

const menuShow = ref(false);

const router = useRouter();
const route = useRoute();

</script>
<template>
  <div class="backend-header-div">
    <div>
      <img src="" alt="">
      XXX Backend
    </div>
    <div>
      <span>User Name Admin</span>
      <button @click="router.push('/')">
        <span class="material-icons">logout</span>
        Logout
      </button>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.backend-header-div{
  position: relative;
  display: flex;
  justify-content: space-between;
  background: #333;
  height: 40px;
  line-height: 40px;
  color: #fff;
  font-size: 20px;
    overflow: hidden;
  >div{
    padding: 0 10px;
    width: 100%;
    overflow: hidden;
    &:nth-child(2){
      padding: 0;
      text-align: right;
    }
    img{
      position: relative;
      display: inline-block;
      height: 25px;
      width: auto;
      min-width: 65px;
      background: #D9D9D9;
      vertical-align: top;
      margin-top: 7px;
      margin-right: 5px;
    }
    span{
      margin-right: 10px;
    }
    button{
      position: relative;
      margin: 0;
      display: inline-block;
      vertical-align: top;
      width: 120px;
      height: 40px;
      cursor: pointer;
      border: 0;
      color: #fff;
      font-size: 18px;
      line-height: 40px;
      background: var(--theme-color-1);
    }
  }
}
@media (max-width: 960px) {
  
}
</style>
