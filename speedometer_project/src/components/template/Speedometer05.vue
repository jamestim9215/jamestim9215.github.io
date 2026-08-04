<script setup>
import { useOrientation } from '../../composables/useOrientation'
import { useThemeColor } from '../../composables/useThemeColor'

const props = defineProps({
  speed: {
    type: Number,
    default: 0,
  },
})

const maxSpeed = 300
const lineCount = 30

// 05 是條狀 UI，這裡沿用 circleStyle 名稱改用 boxStyle 供 template 使用
const { circleStyle: boxStyle } = useOrientation('80%')
const { themeColor, changeColor } = useThemeColor()

// 判斷時速對應到第幾格；依序點亮並用 transition-delay 產生「流動」效果
const activeStyle = (i) => {
  if (i === 1 && props.speed === 0) {
    return { background: '#333', 'transition-duration': '1s' }
  }

  if (props.speed >= (i - 1) * (maxSpeed / lineCount)) {
    return {
      background: `var(--meter-color-${themeColor.value})`,
      'transition-delay': `${(i - 1) * 0.005}s`,
    }
  }

  return { background: '#333', 'transition-duration': '1s' }
}
</script>

<template>
  <div class="full" @click="changeColor()">
    
    <div class="box">
      <div class="number">
        <div v-for="i in 7">{{ (i-1) * 50 }}</div>
      </div>
      <div class="line">
        <div v-for="i in lineCount" :style="activeStyle(i)"></div>
      </div>
    </div>
    <div class="digital-info">
      <div>{{ props.speed }}</div>
      <div>km/h</div>
    </div>
  </div>
  
</template>

<style lang="scss" scoped>
  .full{
    position: absolute;
    left: 50%;
    top: 50%;
    width: 90%;
    min-height: 100px;
    transform: translate(-50%,-50%);
    padding:5px 0 0 0;
    border: 3px solid #ccc;
  }
  .box{
    position: relative;
    width: 100%;
    min-height: 50px;
    // background: #333;
    .number{
      position: relative;
      width: calc(100% - 20px);
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-between;
      div{
        width: 31px;
        text-align: left;
        font-family: "Tektur", sans-serif;
        font-optical-sizing: auto;
        font-weight: 400;
        font-style: normal;
      }
    }
    .line{
      position: relative;
      padding: 0 0 5px 0;
      width: calc(100% - 20px);
      left: 50%;
      transform: translateX(-50%);
      display: flex;
      justify-content: space-between;
      div{
        width: 100%;
        height: 30px;
        margin: 0 1px;
        background: #333;
        align-self: flex-end;
      }
      border-bottom: 5px solid #333;
    }
  }
  .digital-info{
    position: relative;
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
      font-size: 50px;
      font-family: "Tektur", sans-serif;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
      align-self: flex-end;
      &:nth-child(1){
        margin-right: 10px;
        color: #fff;
      }
      &:nth-child(2){
        color: #999;
        position: absolute;
        right: 10px;
        bottom: 10px;
        font-size: 16px;
      }
    }
  }

</style>
