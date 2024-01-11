<script setup>
import { ref, onMounted } from 'vue';

import Speedometer01 from './components/Speedometer01.vue';
import Speedometer02 from './components/Speedometer02.vue';
import Speedometer03 from './components/Speedometer03.vue';

const SpeedometerType = ref(3);

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
  speed.value = (currentSpeed * 3600) / 1000;
};



const randomSpeed = () => {
  filteredSpeed.value = Math.floor(Math.random() * 150);
};

const chnageSpeedometerType = () => {
  SpeedometerType.value = (SpeedometerType.value==3)? 1 : SpeedometerType.value+1;
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
      <p>時速: {{ speed }} km/h</p>
      <button @click="randomSpeed()"> random speed </button>
      <button @click="chnageSpeedometerType()"> change type </button>
    </div>
    <Speedometer01 :speed="speed" v-if="SpeedometerType==1"/>
    <Speedometer02 :speed="speed" v-if="SpeedometerType==2"/>
    <Speedometer03 :speed="speed" v-if="SpeedometerType==3"/>
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
      p{
        color: #fff;
        font-size: 16px;
        margin: 0;
      }
      button{
        margin-left: 10px;
        padding: 5px 10px;
        border-radius: 5px;
        background: #222;
        color: #fff;
        border: 0;
        cursor: pointer;
      }
    }
  }


</style>
