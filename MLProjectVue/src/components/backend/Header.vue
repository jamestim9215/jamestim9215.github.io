<script setup>
import { ref,defineEmits, watch } from "vue";
import {useRouter,useRoute} from 'vue-router';


const props = defineProps({
  modelValue: Boolean
});

const emit = defineEmits([
  'update:modelValue'
]);

const menuShow = ref(props.modelValue);

const router = useRouter();
const route = useRoute();

const openMenu = () => {
  emit('update:modelValue',true)
}

watch(() => props.modelValue, (newVal) => {
  menuShow.value = newVal;
});
</script>
<template>
  <div class="backend-header-div">
    <div>
      <span class="material-icons mbBtn" @click="openMenu()">
        menu
      </span>
      <img src="" alt="" class="pcShow">
      半導體設計服務平台 Backend
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
.pcShow{
  display: inline-block;
}
.mbBtn{
  display: none;
}
@media (max-width: 768px) {
  .backend-header-div{
    font-size: 14px;
    >div{
      &:nth-child(1){
        width: 300px;
      }
      img{
        display: none;
      }
        
      button{
        position: relative;
        margin: 0;
        display: inline-block;
        vertical-align: top;
        width: auto;
        height: 40px;
        cursor: pointer;
        border: 0;
        color: #fff;
        font-size: 12px;
        line-height: 40px;
        background: var(--theme-color-1);
        .material-icons{
          display: none;
        }
      }
    }
  }
  .mbBtn{
    display: inline-block;
  }
  .pcShow{
    display: none;
  }
}
</style>
