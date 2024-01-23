<script setup>
import { ref } from 'vue';
import {useRouter,useRoute } from 'vue-router';
const route = useRoute();
const router = useRouter();

const type = ref(0);

const loginHandler = () => {
  router.push('/dashboard');
}

</script>

<template>

  <div class="login-page" :style="type==1?'background:#e7eef8':''">
    <div class="login-div">
      <div class="card-body">
        <div class="logo">
          Logo
        </div>
        <div class="tab-div">
          <div :class="type==0?'active':''" @click="type=0">Login</div>
          <div :class="type==1?'active':''" @click="type=1">Sign Up</div>
        </div>
        <template v-if="type==0">
          <div class="title">Welcome,</div>
          <div class="subTitle">Sign in to continue!</div>
          <div class="input-div">
            <input id="accountEmail" type="text"  required pattern="\S+"/>
            <label for="accountEmail">Your email or username</label>
          </div>
          <div class="input-div">
            <input id="accountPassword" type="password" required pattern="\S+"/>
            <label for="accountPassword">Password</label>
          </div>
          <button class="btn btn-warning btn-block py-1" @click="loginHandler()">Login</button>
        </template>
        <template v-if="type==1">
          <div class="title">Create Account,</div>
          <div class="subTitle">Sign up to get started!</div>
          <div class="input-div">
            <input id="accountEmail" type="text"  required pattern="\S+"/>
            <label for="accountEmail">Your email</label>
          </div>
          <div class="input-div">
            <input id="accountEmail" type="text"  required pattern="\S+"/>
            <label for="accountEmail">Your name</label>
          </div>
          <div class="input-div">
            <input id="accountEmail" type="text"  required pattern="\S+"/>
            <label for="accountEmail">Your surname</label>
          </div>
          <div class="input-div">
            <input id="accountPassword" type="password" required pattern="\S+"/>
            <label for="accountPassword">Password</label>
          </div>
          <button class="btn btn-warning btn-block py-1">Sign Up</button>
        </template>
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>
  .login-page{
    display: flex;
    justify-content: center;
    align-items: center;
    height: 100dvh;
    background-color: var(--bs-dark);
    transition: 0.3s all;
    overflow: hidden;
    overflow-y: auto;
    .login-div{
      position: relative;
      width: calc(100% - 20px);
      height: auto;
      max-width: 425px;
      max-height: 100dvh;
      .card-body{
        position: relative;
        background-color: var(--bs-white);
        border-radius: 5px;
        z-index: 2;
        padding: 20px;
      }
      &::before {
        border-radius: inherit;
        box-shadow: none;
        content: "";
        height: 100%;
        position: absolute;
        transition: all .2s ease-in-out;
        -webkit-backdrop-filter: blur(.5rem);
        backdrop-filter: blur(.5rem);
        left: 15px;
        right:15px;
        top: 10px;
        will-change: backdrop-filter;
        z-index: 1;
        background: #ced4da;
        filter: opacity(.7) brightness(1) contrast(1.1);
        border-radius: 5px;
      }
      &::after {
        border-radius: inherit;
        box-shadow: none;
        content: "";
        height: 100%;
        position: absolute;
        transition: all .2s ease-in-out;
        -webkit-backdrop-filter: blur(.5rem);
        backdrop-filter: blur(.5rem);
        left: 30px;
        right: 30px;
        top: 20px;
        will-change: backdrop-filter;
        z-index: 1;
        background: #ced4da;
        filter: opacity(.7) brightness(1) contrast(1.1);
        border-radius: 5px;
      }

      .logo{
        font-size: 30px;
        font-weight: 600;
        text-align: center;
        margin: 40px 0;
      }
      .tab-div{
        display: flex;
        justify-content: space-between;
        margin-bottom: 20px;
        background: var(--bs-tab-bg);
        border-radius: 5px;
        padding: 10px 5px;
        div{
          padding: 10px 20px;
          width: 100%;
          text-align: center;
          border-radius: 3px;
          margin: 0 5px;
          font-weight: 700;
          color: var(--bs-gray-dark);
          transition: 0.3s all;
          cursor: pointer;
          &.active,
          &:hover{
            color: var(--bs-white);
            background-color: var(--bs-dark);
          }
        }
      }
      .title{
        // h1
        text-align: center;
        font-size: 28px;
        font-weight: 700;
        margin-top: 30px;
      }
      .subTitle{
        //h4
        text-align: center;
        font-size: 16px;
        font-weight: 500;
        margin-bottom: 30px;
        color: var(--bs-gray);
      }
      .input-div{
        position: relative;
        margin-bottom: 20px;
        input{
          padding: 20px 14px 5px 14px;
          font-size: 14px;
          color: var(--bs-gray);
        }
        input+label{ 
          position: absolute;
          font-size: 14px;
          left: 14px;
          top: 15px;
          color: var(--bs-gray);
          transition: 0.1s all;
        }
        input:valid,
        input:focus{
          +label{ 
            font-size: 11px;
            left: 14px;
            top: 5px;
          }
        }
    
      }
      
    }
  }

</style>