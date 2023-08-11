<script setup>
import GameImageList from './components/GameImageList.vue'
</script>

<template>
  <div class="dressing-game-div">
    <GameImageList />
  </div>
</template>

<style lang="scss" scoped>
  .dressing-game-div{
    position: relative;
    margin: 0 auto;
    width: 100%;
    max-width: 320px;
    height: auto;
    min-height: 600px;
    background: #333;
    padding: 0 0;
  }

</style>
