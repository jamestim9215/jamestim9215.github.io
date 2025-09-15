<script setup>
import { onMounted } from 'vue'
import { onBeforeRouteLeave } from 'vue-router'
import { loadingStart, loadingOver } from "@/module/common"
import Menu from "@/components/common/menu.vue"
import Card from "@/components/common/card.vue"

onMounted(() => {
  loadingOver()
})

onBeforeRouteLeave((to, from, next) => {
  loadingStart()
  setTimeout(() => {
    next()
  }, 1000)
})
</script>

<template>
  <div class="side-project">
    <Menu/>
    <div class="page-content">
      <Card/>
    </div>
  </div>
</template>



<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.side-project {
  position: relative;
  width: 100%;
}

@media (max-width: 768px) {
}
</style>