<script setup>
import { ref, onMounted } from 'vue';

import DigitalDashboard from './components/Speedometer01.vue';

const options =  ref({
  enableHighAccuracy: true,
  timeout: 1000,
  maximumAge: 0
});


const previousPosition = ref(null);
const previousTimestamp = ref(null);
const speed = ref(0);

const calculateSpeed = (position) => {
  console.log(position);
  if (previousPosition.value !== null && previousTimestamp.value !== null) {
    const distance = calculateDistance(
      previousPosition.value.coords.latitude,
      previousPosition.value.coords.longitude,
      position.coords.latitude,
      position.coords.longitude
    );

    const timeDifference = (position.timestamp - previousTimestamp.value) / 1000;
    const newSpeed = Math.round((distance / timeDifference) * 3600);

    // 更新時速
    speed.value = newSpeed;
  }

  // 更新前一個位置和時間
  previousPosition.value = position;
  previousTimestamp.value = position.timestamp;
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
  speed.value = Math.floor(Math.random() * 150);
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
    </div>
    <DigitalDashboard :speed="speed"/>
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
        font-size: 20px;
        margin: 0;
      }
      button{
        margin-left: 10px;
        padding: 5px 10px;
        border-radius: 5px;
        background: #fff;
        color: #333;
        border: 0;
        cursor: pointer;
      }
    }
  }


</style>
