<script setup>
import { ref,computed  } from 'vue'

const props = defineProps({
  speed: {
    type: Number,
    default: 0
  }
})

const windowWidth = ref(window.innerWidth)
const windowHeight = ref(window.innerHeight)

// 判斷視窗 是直的還是橫的
const isVertical = computed(() => {
  return windowWidth.value < windowHeight.value
})

// 判斷視窗 是直的還是橫的 如果是直 回傳style width:80% 如果是橫 回傳style height:80%
const circleStyle = computed(() => {
  return isVertical.value ? 'width:80%' : 'height:80%'
})

// 監聽直式橫式
window.addEventListener('resize', () => {
  windowWidth.value = window.innerWidth
  windowHeight.value = window.innerHeight
})

</script>

<template>

  <div class="digital-div" :style="circleStyle">
    <div class="digital-speed">
      <div class="digital-speed-number">
        {{ speed }}
      </div>
      <div class="digital-speed-unit">
        km/h
      </div>
    </div>
  </div>
  <div class="circle-div" :style="circleStyle">
    <div class="speed-shanxing">
      <div class="shanxing-1"></div>
      <div class="shanxing-2"></div>
    </div>
    <div class="speed-step">
      <div>0</div>
      <div>30</div>
      <div>60</div>
      <div>90</div>
      <div>120</div>
      <div>150</div>
    </div>
    <div class="speed-line">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
    </div>
    <div class="circle-cover"></div>
    <div class="circle-cover2"></div>
  </div>

</template>

<style lang="scss" scoped>
.circle-div{
  position: absolute;
  // width: 80%;
  aspect-ratio: 1 / 1;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  // 270deg 扇形
  .speed-shanxing{
    position: absolute;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    // background: linear-gradient(270deg, #FFD700 50%, #fff 50%);
    .shanxing-1{
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: linear-gradient(30deg, rgba(0,0,0,0) 50%, #ff6400 50%);
    }
    .shanxing-2{
      position: absolute;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      background: linear-gradient(-30deg, rgba(0,0,0,0) 50%, #ff6400 50%);
    }
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
      height: 110%;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 1.5rem;
      font-weight: 700;
      color: #fff;
      font-family: "Pixelify Sans", sans-serif;
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
    div{
      position: absolute;
      width: 1px;
      height: 50%;
      border-radius: 50%;
      display: flex;
      justify-content: center;
      align-items: center;
      background: #fff;
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
  .circle-cover{
    position: absolute;
    width: calc(70%);
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #333;
  }
  .circle-cover2{
    position: absolute;
    width: calc(95%);
    aspect-ratio: 1 / 1;
    border-radius: 50%;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background: #222;
    opacity: 0.7;
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
      font-family: "Pixelify Sans", sans-serif;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
    }
    .digital-speed-unit {
      font-size: 1rem;
      font-weight: 700;
      color: #fff;
      font-family: "Pixelify Sans", sans-serif;
      font-optical-sizing: auto;
      font-weight: 400;
      font-style: normal;
    }
  }
}


</style>
