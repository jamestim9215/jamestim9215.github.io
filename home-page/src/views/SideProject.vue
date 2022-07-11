<template>
  <div class="side-project">
    <Menu/>
    <div class="page-content">
      <Card/>
    </div>
  </div>
</template>

<script>
import {
  loadingStart,
  loadingOver
} from "@/module/common";
import Menu from "@/components/common/menu.vue";
import Card from "@/components/common/card.vue";

export default {
  components: {
    Menu,
    Card
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
.side-project {
  position: relative;
  width: 100%;
}

@media (max-width: 768px) {
}
</style>