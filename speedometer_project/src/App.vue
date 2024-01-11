<script setup>
import { ref, onMounted } from 'vue';

import Speedometer01 from './components/Speedometer01.vue';
import Speedometer02 from './components/Speedometer02.vue';
import Speedometer03 from './components/Speedometer03.vue';
import Speedometer04 from './components/Speedometer04.vue';

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
  speed.value = Math.floor(Math.random() * 200);
};

const changeSpeedometerType = () => {
  SpeedometerType.value = (SpeedometerType.value==4)? 1 : SpeedometerType.value+1;
};

const headsUpDisplayHandler = () => {
  headsUpDisplay.value = !headsUpDisplay.value
}

const timer = ref(null);
const time = ref(0); 
const averageSpeed = ref(0);
const topSpeed = ref(0);

const startStopHandler = () => {
  if (timer.value) {
    clearInterval(timer.value);
    timer.value = null;
    averageSpeed.value = Math.round(filteredSpeed.value.reduce((a, b) => a + b, 0) / filteredSpeed.value.length);
    topSpeed.value = Math.max(...filteredSpeed.value);
  } else {
    time.value = "00:00:00";
    filteredSpeed.value = [];
    timer.value = setInterval(() => {
      time.value = new Date(time.value).getTime() + 1000;
      filteredSpeed.value.push(speed.value);
    }, 1000);
  }
};

onMounted(() => {
  // 啟用位置追蹤
  if ("geolocation" in navigator) {
    navigator.geolocation.watchPosition(calculateSpeed, (error) => {
      console.log(error)
    }, options.value);
  } else {
    console.log("瀏覽器不支援Geolocation API");
  }
});
</script>

<template>
  <div class="digital-box">
    <div class="randomSpeed">
      <button @click="randomSpeed()"> Random </button>
      <button @click="changeSpeedometerType()"> Type </button>
      <button @click="headsUpDisplayHandler()"> heads up </button>
    </div>
    <!-- <div class="timer-div">
      <p v-if="timer">Time run: {{ time }}</p>
      <p v-if="timer">Average speed: {{ averageSpeed }} km/h</p>
      <p v-if="timer">Top speed: {{ topSpeed }} km/h <br></p>
      <button @click="startStopHandler()"> {{timer?'stop':'Start'}} </button>
    </div> -->
    <div :class="headsUpDisplay?'headsUpDisplay':''" >
      <Speedometer01 :speed="speed" v-if="SpeedometerType==1" />
      <Speedometer02 :speed="speed" v-if="SpeedometerType==2" />
      <Speedometer03 :speed="speed" v-if="SpeedometerType==3" />
      <Speedometer04 :speed="speed" v-if="SpeedometerType==4" />
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
