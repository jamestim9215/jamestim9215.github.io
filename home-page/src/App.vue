<template>
  <!-- <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/about">About</router-link>
  </div> -->
  <router-view />
</template>


<script>
// @ is an alias to /src
// import {
//   loadingStart,
//   loadingOver
// } from "@/module/common";

export default {
  // mounted() {
  //   loadingOver();
  // },
  // beforeRouteLeave (to, from, next) {
  //   console.log('App beforeRouterLeave.');
  //   loadingStart();
  //   setTimeout(()=>{
  //     next();
  //   },1000)
  // }
};
</script>

<style lang="scss">
html,
body {
  padding: 0;
  margin: 0;
  background: #222;
  color: #ccc;
  font-family: 'Microsoft JhengHei','Arial',sans-serif;
}

::-webkit-scrollbar {
  width: 4px;
  height: 4px;
}
::-webkit-scrollbar-button {
  width: 0px;
  height: 0px;
}
::-webkit-scrollbar-thumb {
  background: #d9e600;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-thumb:hover {
  background: #d9ff00;
}
::-webkit-scrollbar-thumb:active {
  background: #d9e600;
}
::-webkit-scrollbar-track {
  background: #666666;
  border: 0px none #ffffff;
  border-radius: 50px;
}
::-webkit-scrollbar-track:hover {
  background: #666666;
}
::-webkit-scrollbar-track:active {
  background: #333333;
}
::-webkit-scrollbar-corner {
  background: transparent;
}

.page-content{
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: calc(100% - 300px);
  height: 100vh;
  background: #131313;
  overflow: hidden;
  overflow-y: auto;
}

.container{
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 1000px;
}
.row{
  position: relative;
  // display: block;
  display: flex;
}

.box-3-1{
  position: relative;
  display: inline-block;
  width: calc(33.33% - 30px);
  height: auto;
  vertical-align: top;
  padding: 0 10px;
}

.box-3-2{
  position: relative;
  display: inline-block;
  width: calc(66.66% - 30px);
  height: auto;
  vertical-align: top;
  padding: 0 10px;
}

@media (max-width: 768px) {
  .page-content{
    width: 100%;
  }
}
</style>
