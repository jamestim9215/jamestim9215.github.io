<script setup>
import { ref, onMounted, onUnmounted } from 'vue';

import Speedometer01 from './components/template/Speedometer01.vue';
import Speedometer02 from './components/template/Speedometer02.vue';
import Speedometer03 from './components/template/Speedometer03.vue';
import Speedometer04 from './components/template/Speedometer04.vue';
import Speedometer05 from './components/template/Speedometer05.vue';

const keepAwakeTimer = ref(null);

const templateCount = ref(5);

const SpeedometerType = ref(4);

const headsUpDisplay = ref(false)

const options =  ref({
  enableHighAccuracy: true,
  timeout: 1000,
  maximumAge: 0
});

const filteredSpeed = ref(0);

const speed = ref(0);


const calculateSpeed = (position) => {
  const currentSpeed = position.coords.speed || 0;
  console.log(position.coords.speed);
  // 四捨五入 取到整數
  speed.value = Math.round((currentSpeed * 3600) / 1000);
};



const randomSpeed = () => {
  speed.value = Math.floor(Math.random() * 350);
};

const changeSpeedometerType = () => {
  SpeedometerType.value = (SpeedometerType.value== templateCount.value)? 1 : SpeedometerType.value+1;
};

const headsUpDisplayHandler = () => {
  headsUpDisplay.value = !headsUpDisplay.value
}

const keepAwake = () => {
  document.body.innerHTML += ' ';
}


onMounted(() => {
  // 啟用位置追蹤
  if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(calculateSpeed, (error) => {
      console.log(error)
    }, options.value);

    // 開始保持螢幕亮起
    console.log('開始保持螢幕亮起');
    keepAwakeTimer.value = setInterval(keepAwake, 20000); // 每 20 秒執行一次

  } else {
    console.log("瀏覽器不支援Geolocation API");
  }
});

onUnmounted(() => {
  // 停止保持螢幕亮起
  console.log('停止保持螢幕亮起');
  clearInterval(keepAwakeTimer.value);
});

</script>

<template>
  <div class="digital-box">
    <div class="randomSpeed">
      <button @click="randomSpeed()"> Random </button>
      <button @click="changeSpeedometerType()"> Type </button>
      <button @click="headsUpDisplayHandler()"> heads up </button>
    </div>

    <div :class="headsUpDisplay?'headsUpDisplay':''" >
      <Speedometer01 :speed="speed" v-if="SpeedometerType==1" />
      <Speedometer02 :speed="speed" v-if="SpeedometerType==2" />
      <Speedometer03 :speed="speed" v-if="SpeedometerType==3" />
      <Speedometer04 :speed="speed" v-if="SpeedometerType==4" />
      <Speedometer05 :speed="speed" v-if="SpeedometerType==5" />
    </div>
  </div>
</template>

<style lang="scss" scoped>
  .digital-box {
    position: fixed;
    width: 100%;
    height: 100dvh;
    .randomSpeed{
      position: absolute;
      bottom: 0;
      left: 0;
      z-index: 999;
      width: 100%;
      background: #333;
      padding: 10px;
      display: flex;
      justify-content: space-between;
      button{
        margin: 0 5px;
        padding: 5px 10px;
        border-radius: 5px;
        background: #222;
        color: #fff;
        border: 0;
        cursor: pointer;
      }
    }
    .timer-div{
      position: absolute;
      left: 50%;
      bottom: 15%;
      transform: translateX(-50%);
      z-index: 999;
      text-align: center;
      p{
        margin: 0;
        color: #fff;
      }
      button{
        margin: 10px 5px;
        padding: 5px 10px;
        border-radius: 5px;
        background: #333;
        color: #fff;
        border: 0;
        cursor: pointer;
      }
    }
    .headsUpDisplay{
      height: 100%;
      transform: rotateY(180deg);
    }
  }


</style>
