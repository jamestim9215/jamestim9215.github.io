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

const previousPosition = ref(null);
const previousTimestamp = ref(null);
const speeds = ref([]);
const filteredSpeed = ref(0);


const calculateSpeed = (position) => {
  if (previousPosition.value !== null && previousTimestamp.value !== null) {
    const distance = calculateDistance(
      previousPosition.value.coords.latitude,
      previousPosition.value.coords.longitude,
      position.coords.latitude,
      position.coords.longitude
    );

    const timeDifference = (position.timestamp - previousTimestamp.value) / 1000;
    const newSpeed = Math.round((distance / timeDifference) * 3600);

    // 濾除極端值
    if (newSpeed > 1 && newSpeed < 150) {
      // 將新速度添加到速度列表
      speeds.value.push(newSpeed);

      // 保留最後 N 個速度，這裡設定為10
      const maxSpeeds = 10;
      if (speeds.value.length > maxSpeeds) {
        speeds.value.shift();
      }

      // 平滑速度
      const smoothedSpeed = exponentialMovingAverage(newSpeed);

      // 計算平均速度
      const totalSpeed = speeds.value.reduce((acc, speed) => acc + speed, 0);
      filteredSpeed.value = (speeds.value.length > 0) ? Math.round(totalSpeed / speeds.value.length) : 0;
    }
  }

  // 更新前一個位置和時間
  previousPosition.value = position;
  previousTimestamp.value = position.timestamp;
};

// 指數移動平均
const exponentialMovingAverage = (newValue, alpha = 0.2) => {
  if (typeof exponentialMovingAverage.prevValue === 'undefined') {
    exponentialMovingAverage.prevValue = newValue;
  }

  const smoothedValue = alpha * newValue + (1 - alpha) * exponentialMovingAverage.prevValue;
  exponentialMovingAverage.prevValue = smoothedValue;

  return Math.round(smoothedValue);
};

const calculateDistance = (lat1, lon1, lat2, lon2) => {
  const R = 6371;
  const dLat = deg2rad(lat2 - lat1);
  const dLon = deg2rad(lon2 - lon1);
  const a =
    Math.sin(dLat / 2) * Math.sin(dLat / 2) +
    Math.cos(deg2rad(lat1)) * Math.cos(deg2rad(lat2)) * Math.sin(dLon / 2) * Math.sin(dLon / 2);
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
  const distance = R * c;
  return distance;
};

const deg2rad = (deg) => {
  return deg * (Math.PI / 180);
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
      <p>時速: {{ filteredSpeed }} km/h</p>
      <button @click="randomSpeed()"> random speed </button>
      <button @click="chnageSpeedometerType()"> change type </button>
    </div>
    <Speedometer01 :speed="filteredSpeed" v-if="SpeedometerType==1"/>
    <Speedometer02 :speed="filteredSpeed" v-if="SpeedometerType==2"/>
    <Speedometer03 :speed="filteredSpeed" v-if="SpeedometerType==3"/>
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
