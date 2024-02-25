<script setup>
import { ref, watch } from 'vue'
import {useRouter,useRoute } from 'vue-router';
import { googleLogout } from "vue3-google-login"


const props = defineProps({
  isMinMenu: {
    type: Boolean,
    default: false
  },
  isShowMobileMenu: {
    type: Boolean,
    default: false
  }
})

const route = useRoute();
const router = useRouter();

// console.log(route.path);

const isMin = ref(props.isMinMenu)
const isShowMobile = ref(props.isShowMobileMenu);
const isHover = ref(false)
const isOpenAccountBox = ref(false)

const menuList = ref([
  // {
  //   type: 'link',
  //   name: 'Dashboard',
  //   icon: 'dashboard',
  //   path: '/dashboard',
  //   isActive: false
  // },
  {
    type: 'line'
  },
  {
    type: 'category',
    name: '物件管理'
  },
  {
    type: 'link',
    name: '物件列表',
    icon: 'home',
    path: '/suite-list',
    isActive: false
  },
  {
    type: 'link',
    name: '地址列表',
    icon: 'place',
    path: '/address-list',
    isActive: false
  },
  {
    type: 'line'
  },
  {
    type: 'category',
    name: '房客管理'
  },
  {
    type: 'link',
    name: '房客列表',
    icon: 'recent_actors',
    path: '/tenant-list',
    isActive: false
  },
  {
    type: 'link',
    name: '訊息管理',
    icon: 'chat',
    path: '/message-list',
    isActive: false
  },
  {
    type: 'line'
  },
  {
    type: 'category',
    name: '帳務管理'
  },
  {
    type: 'link',
    name: '帳務列表',
    icon: 'attach_money',
    path: '/billing-list',
    isActive: false
  },
  {
    type: 'link',
    name: '電表小幫手',
    icon: 'bolt',
    path: '/electricity-bill-list',
    isActive: false
  },
  {
    type: 'link',
    name: '水表小幫手',
    icon: 'water_drop',
    path: '/water-bill-list',
    isActive: false
  },
  {
    type: 'line'
  },
  {
    type: 'category',
    name: '合約管理'
  },
  {
    type: 'link',
    name: '合約列表',
    icon: 'history_edu',
    path: '/contract-list',
    isActive: false
  },
  // {
  //   type: 'link',
  //   name: '新增合約範本',
  //   icon: 'history_edu',
  //   path: '/contract-template',
  //   isActive: false
  // },
  {
    type: 'line'
  },
  {
    type: 'category',
    name: '員工管理'
  },
  {
    type: 'link',
    name: '工作人員列表',
    icon: 'manage_accounts',
    path: '/managers-list',
    isActive: false
  },
  // {
  //   type: 'link',
  //   name: '新增工作人員',
  //   icon: 'manage_accounts',
  //   path: '/add-managers-list',
  //   isActive: false
  // },
])

const emit = defineEmits(['update:isMinMenu', 'update:isShowMobileMenu'])


const isFullMenu = () => {
  if (isMin.value) {
    if(!isHover.value){
      return true
    }else{
      return false
    }
  }else{
    return false
  }
}

const isShowMobileMenuHandler = () => {
  let windowWidth = window.innerWidth
  if (props.isShowMobileMenu && windowWidth < 768) {
    return true
  }else{
    return false
  }
}

const logoutHandler = () => {
  localStorage.removeItem('user');
  googleLogout();
  router.push('/login');
}

watch(() =>  props.isShowMobileMenu, (val) => {
  val ? isShowMobile.value = true : isShowMobile.value = false
})
watch(() =>  isMin.value, (val) => {
  emit('update:isMinMenu', isMin.value)
})

watch(() =>  isShowMobile.value, (val) => {
  
  emit('update:isShowMobileMenu', isShowMobile.value)
})

</script>

<template>
  <div class="menu" 
    :class="[
      {
        'min' : isFullMenu()
      },
      {
        'hover' : isHover && isMin
      },
      {
        'show-mobile-menu' : isShowMobileMenuHandler()
      }
    ]" @mouseover="isHover=true" @mouseleave="isHover=false">
    <div class="top">
      <div class="logo" v-if="!isFullMenu()">Logo</div>
      <div class="menu-btn" @click="isMin=true;" v-if="isMin==false">
        <span class="material-icons-outlined">
        first_page
        </span>
      </div>
      <div class="menu-btn" @click="isMin=false;" v-else>
        <span class="material-icons-outlined">
        last_page
        </span>
      </div>
    </div>
    <div class="menu-list-div" :style="isOpenAccountBox?'padding: 0 0 130px 0;':'padding: 0 0 60px 0;'">
      <template v-for="(menuItem, menuIndex) in menuList">
        <div v-if="menuItem.type=='link'" class="menu-item" :class="(menuItem.isActive || route.path==menuItem.path)?'active':''">
          <div @click="isShowMobile=false;router.push(menuItem.path);">
            <div>
              <span class="material-icons-outlined">
              {{menuItem.icon}}
              </span>
            </div>
            <div v-if="!isFullMenu()">
              {{menuItem.name}}
            </div>
          </div>
        </div>
        <div v-if="menuItem.type=='line'" class="line my-1" :key="menuIndex+'line'"></div>
        <div v-if="menuItem.type=='category'" class="menu-category-title" :key="menuIndex+'category'">
          {{menuItem.name}}
        </div>
      </template>
    </div>
    <div class="account-div" :class="isOpenAccountBox?'active':''">
      <div class="user-info" @click="isOpenAccountBox?isOpenAccountBox=false:isOpenAccountBox=true">
        <div>
          <img src="@/assets/images/user.webp" alt="">
        </div>
        <div v-if="!isFullMenu()">
          <div class="user-name">xxxx</div>
          <div class="user-surname">xxxx</div>
        </div>
      </div>
      <!-- <div class="menu-item">
        <div>
          <div>
            <span class="material-icons-outlined">
            account_box
            </span>
          </div>
          <div v-if="!isFullMenu()">
            Profile
          </div>
        </div>
      </div> -->
      <div class="line my-1"></div>
      <div class="menu-item">
        <div @click="logoutHandler()">
          <div>
            <span class="material-icons-outlined">
            logout
            </span>
          </div>
          <div v-if="!isFullMenu()">
            Logout
          </div>
        </div>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
.menu{
  position: relative;
  width: 195px;
  height: 100dvh;
  background: var(--bs-black);
  color: var(--bs-light);
  display: flex;
  flex-direction: column;
  &.min{
    width: 60px;
  }
  &.hover{
    -webkit-backdrop-filter: blur(.3rem);
    backdrop-filter: blur(.3rem);
    background-color: #05050b99;
    will-change: backdrop-filter;
  }
  .top{
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 10px;
    height: 60px;
    .logo{
      font-size: 20px;
      font-weight: 700;
      color: var(--bs-light);
    }
    .menu-btn{
      cursor: pointer;
      color: var(--bs-light);
      width: 36px;
      height: 36px;
      text-align: center;
      line-height: 36px;
      border-radius: 50%;
      >span{
        margin-top: 5px;
        display: inline-block;
        font-size: 26px;
        font-weight: 300;
      }
      &:hover{
        background: var(--bs-dark);
      }
      &:active{
        border: 1px solid var(--bs-light);
      }
    }
  }
  
  &.hover{
    .top{
      .menu-btn{
          border: 1px solid var(--bs-light);
        &:hover{
          background: transparent;
        }
      }
    }
  }
  .menu-list-div{
    flex: 1;
    overflow-y: auto;
    
  }
  .account-div{
    position: absolute;
    bottom: -70px;
    width: 100%;
    transition: 0.3s ease-in-out;
    &.active{
      bottom: 0;
    }
    .user-info{
      display: flex;
      justify-content: space-arounds;
      align-items: center;
      background: var(--bs-dark);
      padding: 10px 15px;
      >div{
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: start;
        margin-right: 10px;
        img{
          width: 32.5px;
          height: 32.5px;
          border-radius: 50%;
          background: #e9e7f8;
        }
        .user-name{
          font-size: 11px;
          font-weight: 700;
          color: var(--bs-light);
        }
        .user-surname{
          font-size: 9px;
          font-weight: 500;
          color: var(--bs-gray);
        }
      }
    }


  }
}
.menu-item{
  padding: 5px 13px;
  &.active{
    >div{
      background: var(--bs-dark);
    }
  }
  >div{
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 10px;
    // height: 60px;
    cursor: pointer;
    color: var(--bs-light);
    &:hover{
      background: var(--bs-dark);
    }
    >div{
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 11px;
      font-weight: 700;
      &:first-child{
        margin-right: 10px;
        span{
          font-size: 20px;
        }
      }
    }
  }
}
.menu-category-title{
  position: relative;
  padding: 0 20px;
  font-size: 10px;
  font-weight: 700;
  color: #e7eef8;
}
.line{
  height: 2px;
  background: #fff;
  opacity: .15;
}

.menu{
  &.min{
    
    .menu-category-title{
      // padding: 0 20px;
      // font-size: 10px;
      // font-weight: 700;
      color: transparent;
      &::after{
        content: '';
        position: absolute;
        top: calc(50% - 1px);
        left: 15%;
        width: 70%;
        height: 2px;
        background: #e7eef899;
      }
    }
  }
}



@media (max-width: 768px) {
  .menu{
    position: fixed;
    top: 0;
    left: -195px;
    transition: 0.3s ease-in-out;
    .menu-btn{
      display: none;
    } 
    &.show-mobile-menu{
      left: 0;
    }
  }
}

</style>
