<script setup>
import { ref,computed  } from 'vue'

const props = defineProps({
  speed: {
    type: Number,
    default: 0
  }
})
const maxSpeed = ref(150);

const themeColor = ref(1)

const windowWidth = ref(window.innerWidth)
const windowHeight = ref(window.innerHeight)

// 判斷視窗 是直的還是橫的
const isVertical = computed(() => {
  return windowWidth.value < windowHeight.value
})

// 判斷視窗 是直的還是橫的 如果是直 回傳style width:80% 如果是橫 回傳style height:80%
const circleStyle = computed(() => {
  return isVertical.value ? 'width:90%' : 'height:90%'
})

// 取得指針的角度 -120deg to 120deg 對應 0 to 150
const speedIndicatorDeg = computed(() => {
  return ((props.speed > maxSpeed.value)?maxSpeed.value:props.speed) * 1.6 - 120
})

// 變更顏色 1~7
const changeColor = () => {
  themeColor.value = themeColor.value === 7 ? 1 : themeColor.value + 1
}

// 監聽直式橫式
window.addEventListener('resize', () => {
  windowWidth.value = window.innerWidth
  windowHeight.value = window.innerHeight
})

</script>

<template>
  <div class="circle-div" :style="circleStyle">
    <div class="pie-chart-bg2"></div>
    <div class="pie-chart-bg"></div>
    <div class="pie-chart" :style="'transform: translate(-50%, -50%) rotate('+(speedIndicatorDeg+120)+'deg);background: conic-gradient(var(--meter-color-'+themeColor+') 0deg 240deg, transparent 0deg)'"></div>
    <div class="pie-chart-cover" :style="'transform: translate(-50%, -50%) rotate('+((speedIndicatorDeg+120)>120?(speedIndicatorDeg):'0')+'deg);background: conic-gradient(#333 0deg 120deg, transparent 0deg)'"></div>
    <div class="pie-chart-cover2" :style="'transform: translate(-50%, -50%) rotate(120deg);background: conic-gradient(#222 0deg 120deg, transparent 0deg)'"></div>
    <div class="speed-step">
      <div>0</div>
      <div>30</div>
      <div>60</div>
      <div>90</div>
      <div>120</div>
      <div>150</div>
    </div>
    <div class="speed-line">
      <div>
        <div v-for="i in 6"></div>
      </div>
      <div>
        <div v-for="i in 10"></div>
      </div>
    </div>
    <div class="circle-cover"></div>
    <div class="speed-indicator">
      <div :style="'transform: rotate('+speedIndicatorDeg+'deg)'"></div>
    </div>
    <div class="circle-cover2"></div>
  </div>
  <div class="digital-div" :style="circleStyle" @click="changeColor()">
    <div class="digital-speed">
      <div class="digital-speed-number">
        {{ speed }}
      </div>
      <div class="digital-speed-unit">
        km/h
        <!-- <br>
        {{ (speedIndicatorDeg+120).toFixed(2) }} -->
      </div>
    </div>
  </div>

</template>

<style lang="scss" scoped>

.circle-div{
  position: absolute;
  aspect-ratio: 1 / 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
    
    
  .pie-chart-bg2 {
    position: absolute;
    // z-index: 999;
    width: 103%;
    aspect-ratio: 1 / 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-120deg);
    background: conic-gradient(#fff 0deg 240deg, transparent 0deg);
    border-radius: 50%;
    transition: 0.5s ease-in-out;
  }
  .pie-chart-bg {
    position: absolute;
    // z-index: 999;
    width: 100%;
    aspect-ratio: 1 / 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-120deg);
    background: conic-gradient(#333 0deg 240deg, transparent 0deg);
    border-radius: 50%;
    transition: 0.5s ease-in-out;
  }

  .pie-chart {
    position: absolute;
    // z-index: 999;
    width: 100%;
    aspect-ratio: 1 / 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%) rotate(-120deg);
    background: conic-gradient(#ffcccc 0deg 240deg, transparent 0deg);
    border-radius: 50%;
    transition: 0.5s ease-in-out;
  }
  .pie-chart-cover,
  .pie-chart-cover2{
    position: absolute;
    width: 100.5%;
    aspect-ratio: 1 / 1;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: conic-gradient(#222 0deg 240deg, transparent 0deg);
    opacity: 1;
    border-radius: 50%;
    transition: 0.5s ease-in-out;
  }
  .speed-step{
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
      position: absolute;
      width: 100%;
      height: 88%;
      z-index: 1;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      font-family: "Tektur", sans-serif;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;

      // -135deg to 135deg 五個區間
      &:nth-child(1){
        transform: rotate(-120deg) translate(0, -50%);
      }
      &:nth-child(2){
        transform: rotate(-72deg) translate(0, -50%);
      }
      &:nth-child(3){
        transform: rotate(-24deg) translate(0, -50%);
      }
      &:nth-child(4){
        transform: rotate(24deg) translate(0, -50%);
      }
      &:nth-child(5){
        transform: rotate(72deg) translate(0, -50%);
      }
      &:nth-child(6){
        transform: rotate(120deg) translate(0, -50%);
      }
    }
  }
  .speed-line{
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    >div{
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
    }
    >div:nth-child(1){
      div{
        position: absolute;
        width: 2px;
        height: 50%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: #fff;
        // -135deg to 135deg 五個區間
        &:nth-child(1){
          width: 5px;
          transform: rotate(-120deg) translate(0, -50%);
        }
        &:nth-child(2){
          transform: rotate(-72deg) translate(0, -50%);
        }
        &:nth-child(3){
          transform: rotate(-24deg) translate(0, -50%);
        }
        &:nth-child(4){
          transform: rotate(24deg) translate(0, -50%);
        }
        &:nth-child(5){
          transform: rotate(72deg) translate(0, -50%);
        }
        &:nth-child(6){
          width: 5px;
          transform: rotate(120deg) translate(0, -50%);
        }
      }
    }
    >div:nth-child(2){
      div{
        position: absolute;
        width: 2px;
        height: 100%;
        display: flex;
        justify-content: center;
        align-items: center;
        background: linear-gradient(180deg, #fff 2.4%, transparent 2.4%, transparent 95.2%);
        
        &:nth-child(1){
          transform: rotate(-104deg) translate(0, 0%);
        }
        &:nth-child(2){
          transform: rotate(-88deg) translate(0, 0%);
        }
        &:nth-child(3){
          transform: rotate(-56deg) translate(0, 0%);
        }
        &:nth-child(4){
          transform: rotate(-40deg) translate(0, 0%);
        }
        &:nth-child(5){
          transform: rotate(-8deg) translate(0, 0%);
        }
        &:nth-child(6){
          transform: rotate(8deg) translate(0, 0%);
        }
        &:nth-child(7){
          transform: rotate(40deg) translate(0, 0%);
        }
        &:nth-child(8){
          transform: rotate(56deg) translate(0, 0%);
        }
        &:nth-child(9){
          transform: rotate(88deg) translate(0, 0%);
        }
        &:nth-child(10){
          transform: rotate(104deg) translate(0, 0%);
        }

      }
    }
  }
  .circle-cover{
    position: absolute;
    width: calc(95%);
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #222;
    opacity: 0.6;
  }
  .speed-indicator{
    // 指針 左邊 -120deg 開始往右轉動 最大 120deg
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 1;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    div{
      position: absolute;
      width: 100px;
      height: 50%;
      top: 0;
      display: flex;
      justify-content: center;
      align-items: center;
      background: var(--meter-color-3);
      transform-origin: bottom;
      clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
      transform: rotate(-120deg);
      transition: 0.5s ease-in-out;
    }
  }
  .circle-cover2{
    position: absolute;
    z-index: 3;
    width: calc(70%);
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #333;
    box-shadow: 0 0 0px 3px #fff;
  }

}

.digital-div {
  position: absolute;
  z-index: 999;
  // width: 80%;
  aspect-ratio: 1 / 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  .digital-speed {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    .digital-speed-number {
      font-size: 6rem;
      font-weight: 700;
      color: #fff;
      font-family: "Tektur", sans-serif;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
    }
    .digital-speed-unit {
      font-size: 1rem;
      font-weight: 700;
      color: #999;
      font-family: "Tektur", sans-serif;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
    }
  }
}


</style>
