<script setup>
import { ref, watch } from 'vue'
import {useRouter,useRoute } from 'vue-router';

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

const isMin = ref(props.isMinMenu)
const isHover = ref(false)

const emit = defineEmits(['update:isMinMenu'])
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
  router.push('/login');
}

watch(() =>  isMin.value, (val) => {
  console.log("????");
  emit('update:isMinMenu', isMin.value)
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
    <div class="menu-list-div">
      <div class="menu-item active">
        <div>
          <div>
            <span class="material-icons-outlined">
            dashboard
            </span>
          </div>
          <div v-if="!isFullMenu()">
            Dashboard
          </div>
        </div>
      </div>
      <div class="menu-item">
        <div>
          <div>
            <span class="material-icons-outlined">
            dashboard
            </span>
          </div>
          <div v-if="!isFullMenu()">
            Dashboard
          </div>
        </div>
      </div>
      <div class="line my-1"></div>
      <div class="menu-category-title">
        Page
      </div>
      <div class="menu-item">
        <div>
          <div>
            <span class="material-icons-outlined">
            dashboard
            </span>
          </div>
          <div v-if="!isFullMenu()">
            Dashboard
          </div>
        </div>
      </div>
    </div>
    <div class="account-div">
      <div class="user-info">
        <div>
          <img src="@/assets/images/user.webp" alt="">
        </div>
        <div v-if="!isFullMenu()">
          <div class="user-name">xxxx</div>
          <div class="user-surname">xxxx</div>
        </div>
      </div>
      <div class="menu-item">
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
      </div>
      <div class="line my-1"></div>
      <div class="menu-item">
        <div>
          <div>
            <span class="material-icons-outlined">
            logout
            </span>
          </div>
          <div v-if="!isFullMenu()" @click="logoutHandler()">
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
