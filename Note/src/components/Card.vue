<script setup>
import { ref } from 'vue'

defineProps({
  cardKey: String,
  cardInfo: Object,
})

const setPos = (pos) => {
  return `left: ${pos.X}px;top: ${pos.Y}px;transform: rotate(${pos.Deg}deg);`
}

</script>

<template>
  <div class="card" :style="setPos(cardInfo.Pos)"
    :class="{
      'color01':cardInfo.Color == 1,
      'color02':cardInfo.Color == 2,
      'color03':cardInfo.Color == 3,
      'color04':cardInfo.Color == 4,
      'color05':cardInfo.Color == 5,
    }"
  >
    <slot></slot>
    <div class="name"><b>{{cardInfo.Name}}</b> 說</div>
    <div class="content">{{cardInfo.Content}}</div>
    <div class="ImageBase64"><img :src="cardInfo.ImageBase64" alt=""></div>
    <div class="date">{{cardInfo.Date}}</div>
  </div>
</template>

<style lang="scss" scoped>

.card{
  position: absolute;
  width: auto;
  min-width: 200px;
  min-height: 100px;
  height: auto;
  color: #000;
  padding: 10px 10px 30px 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 10px #666;
  transition: 0.3s ease-in-out;
  &.color01{
    background: var(--theme-red);
  }
  &.color02{
    background: var(--theme-yellow);
  }
  &.color03{
    background: var(--theme-green);
  }
  &.color04{
    background: var(--theme-blue);
  }
  &.color05{
    background: var(--theme-purple);
  }
  .name{
    position: relative;
    font-size: 16px;
    color: #333;
  }

  .content{
    position: relative;
    font-size: 24px;
    line-height: 32px;
  }

  .ImageBase64{
    position: relative;
    text-align: center;
    img{
      max-width: 400px;
      border-radius: 10px;
    }
  }

  .date{
    position: absolute;
    bottom: 5px;
    right: 10px;
    font-size: 12px;
    color: #666;
  }

}

</style>
