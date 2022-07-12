<template>
  <div class="page-404">
    <div class="message">
      404 Page not find !!
      
      <router-link class="backToHome" to="/">
        回首頁
      </router-link>
    </div>
  </div>
  <BoxAnimation/>
  
</template>

<script>
import {
  loadingStart,
  loadingOver
} from "@/module/common";

import BoxAnimation from "@/components/common/boxArea.vue"

export default {
  components: {
    BoxAnimation
  },
  mounted() {
    loadingOver();
  },
  beforeRouteLeave (to, from, next) {
    loadingStart();
    setTimeout(()=>{
      next();
    },1000)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.page-404 {
  position: relative;
  z-index: 1;
  width: 100%;

  .message{
    position: relative;
    margin: 0 auto;
    width: auto;
    height: 60px;
    font-size: 60px;
    text-align: center;
    color: rgba(217, 255, 0, 1);
    font-weight: 700;
    transform: translateY(calc(50vh - 60px));
    .backToHome{
      position: relative;
      display: block;
      margin-top: 30px;
      color: #fff;
      text-decoration: none;
      font-size: 24px;
    }
  }
}




@media (max-width: 768px) {
  
}
</style>