<template>
  <div class="about">
    <Menu/>
    <div class="page-content">
      
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {
  loadingStart,
  loadingOver
} from "@/module/common";
import Menu from "@/components/common/menu.vue";

export default {
  components: {
    Menu,
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
.about {
  position: relative;
  width: 100%;
}

@media (max-width: 768px) {
}
</style>