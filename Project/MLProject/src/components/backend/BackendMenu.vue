<script setup>
import { ref, computed, } from "vue";
import {useRouter,useRoute} from 'vue-router';

defineProps({});

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
    title: "Materials Explorer",
    isSubMenuShow: false,
    subMenu: [
      {
        title: "Setting",
        path: "/backend/materials-explorer/setting",
      },
    ],
  },
  {
    title: "ML Platform",
    isSubMenuShow: false,
    subMenu: [
      {
        title: "Setting",
        path: "/backend/ml-platform/setting",
      },
    ],
  },
  {
    title: "Web Setting",
    isSubMenuShow: false,
    subMenu: [
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

const menuShow = ref(false);
const menuIndex = ref(-1);
const nowPage = ref("/backend/material/introduction");

nowPage.value = nowPageUrl.value;
menuData.value.map((item)=>{
  if(item.subMenu.some((item)=>item.path == nowPage.value)){
    menuIndex.value = menuData.value.indexOf(item);
    item.isSubMenuShow = true;
  }
})

if(menuIndex.value==-1){
  menuData.value.map((item)=>{
    router.push('/backend/material/introduction')
  })
}

</script>
<template>
  <div class="backend-menu-div">
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
.backend-menu-div{
  position: relative;
  width: 300px;
  height: calc(100vh - 50px);
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
@media (max-width: 960px) {
  
}
</style>
