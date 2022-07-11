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
.page-content{
  position: relative;
  display: inline-block;
  vertical-align: top;
  width: calc(100% - 300px);
  min-height: 100vh;
  background: #131313;
}

@media (max-width: 768px) {
  .page-content{
    width: 100%;
  }
}
</style>
