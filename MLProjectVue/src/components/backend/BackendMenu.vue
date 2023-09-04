<script setup>
import { ref, computed, defineEmits, watch  } from "vue";
import {useRouter,useRoute} from 'vue-router';

const props = defineProps({
  modelValue: Boolean
});

const emit = defineEmits([
  'update:modelValue'
]);

const menuShow = ref(props.modelValue);

// 监听 modelValue 的变化
watch(() => props.modelValue, (newVal) => {
  menuShow.value = newVal;
});

const router = useRouter();
const route = useRoute();

const nowPageUrl = computed(() => {
  return route.fullPath
});
const menu = computed(() => {
  return oute.params.menu
});
const item = computed(() => {
  return oute.params.item
});

const detail = computed(() => {
  return oute.params.detail
});


const menuData = ref([
  {
    title: "Material",
    isSubMenuShow: false,
    subMenu: [
      {
        title: "Introduction(HEM)",
        path: "/backend/material/introduction",
      },
      {
        title: "Material informatics",
        path: "/backend/material/material-informatics",
      },
    ],
  },
  {
    title: "Collabration",
    isSubMenuShow: false,
    subMenu: [
      {
        title: "Demo cases",
        path: "/backend/collabration/demo-cases",
      },
    ],
  },
  {
    title: "Data driven",
    isSubMenuShow: false,
    subMenu: [
      {
        title: "Materials Informatics",
        path: "/backend/data-driven/materials-informatics",
      },
      {
        title: "Semiconductor Informatics",
        path: "/backend/data-driven/semiconductor-informatics",
      },
    ],
  },
  // {
  //   title: "ML Platform",
  //   isSubMenuShow: false,
  //   subMenu: [
  //     {
  //       title: "Setting",
  //       path: "/backend/ml-platform/setting",
  //     },
  //   ],
  // },
  {
    title: "Web Setting",
    isSubMenuShow: false,
    subMenu: [
      {
        title: "Common setting",
        path: "/backend/web-setting/common-setting",
      },
      {
        title: "Home",
        path: "/backend/web-setting/home",
      },
      {
        title: "About us",
        path: "/backend/web-setting/about-us",
      },
    ],
  },
  {
    title: "Account Setting",
    isSubMenuShow: false,
    subMenu: [
      {
        title: "Account",
        path: "/backend/account-setting/account",
      },
    ],
  },
]);

const menuIndex = ref(-1);
const nowPage = ref("/backend/material/introduction");

nowPage.value = nowPageUrl.value;
menuData.value.map((item)=>{
  if(item.subMenu.some((item)=>nowPage.value.match(item.path))){
    menuIndex.value = menuData.value.indexOf(item);
    item.isSubMenuShow = true;
  }
})

// if(menuIndex.value==-1){
//   menuData.value.map((item)=>{
//     router.push('/backend/material/introduction')
//   })
// }

const closeMenu = () => {
  emit('update:modelValue',false)
}


</script>
<template>
  <div class="backend-menu-div" :class="menuShow?'show':''">
    <div class="closeBtnDiv mbBtn" >
      <span class="closeBtn" @click="closeMenu()">
        <span class="material-icons">
        clear
        </span>
      </span>
    </div>
    <div class="menu-title" v-for="(key,index) in menuData" :key="key.title">
      <span :class="menuIndex==index?'active':''" @click="key.isSubMenuShow==true?key.isSubMenuShow=false:key.isSubMenuShow=true;">{{key.title}}</span>
      <div class="sub-menu-div" :class="key.isSubMenuShow?'active':''">
        <div class="sub-menu-title" v-for="(keys,indexs) in key.subMenu" :key="keys.title">
          <router-link :to="keys.path"><span :class="nowPage == keys.path?'active':''">{{keys.title}}</span></router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.mbBtn{
  display: none;
}
.backend-menu-div{
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: 300px;
  height: calc(100vh - 40px);
  background: #D9D9D9;
  .menu-title{
    position: relative;
    display: block;
    height: auto;
    >span{
      position: relative;
      display: block;
      line-height: 50px;
      color: var(--theme-color-2);
      padding: 0 15px;
      cursor: pointer;
      &.active{
        border-right: 10px solid var(--theme-color-2);
      }
      &:hover{
        border-right: 10px solid var(--theme-color-2-05);
      }
    }
    .sub-menu-div{
      position: relative;
      height: auto;
      display: none;
      width: 100%;
      &.active{
        display: block;
      }

      .sub-menu-title{
        position: relative;
        display: block;
        height: auto;
        color: var(--theme-color-2);
        background: rgba(96, 121, 186,0.25);
        
        >a>span{
          position: relative;
          display: block;
          line-height: 50px;
          color: var(--theme-color-2);
          padding: 0 30px;
          cursor: pointer;
          &:hover::after,
          &.active::after{
            position: absolute;
            content: "";
            left: 0;
            top: 0;
            z-index: 1;
            border-left: 16px solid var(--theme-color-2);
            border-top: 25px solid transparent;
            border-right: 16px solid transparent;
            border-bottom: 25px solid transparent;
          }
          &:hover::after{
            border-left: 16px solid var(--theme-color-2-05);
          }
        }
      }
    }
  }
}
@media (max-width: 768px) {
  .mbBtn{
    display: inline-block;
  }
  .backend-menu-div{
    position: fixed;
    display: block;
    z-index: 100;
    left: -100%;
    top: 0px;
    height: 100vh;
    width: 100%;
    background: #D9D9D9;
    transition: 0.3s ease-in-out;
    &.show{
      left: 0;
    }
    .closeBtnDiv{
      display: block;
      width: 100%;
      height: 50px;
      text-align: right;
      background: rgba(96, 121, 186, 0.25);
      .closeBtn{
        position: relative;
        display: inline-block;
        width: 50px;
        height: 50px;
        line-height: 40px;
        text-align: center;
        cursor: pointer;
      }
    }
  }
}
</style>
