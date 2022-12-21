<script setup>
import { ref } from 'vue'

const boxingCount = ref(50);
const boxingList = ref([]);
const getRandom = (min,max) => {
    return Math.floor(Math.random()*max)+min;
};
for(var key=0; key<boxingCount.value; key++){
  var w = getRandom(10,50);
  var deg = (Math.round(Math.random())*2 - 1) * getRandom(60,720);
  var data = `left: ${getRandom(0,100)}%; width: ${w}px;height: ${w}px;  transform: rotate(${deg}deg); animation-duration: ${getRandom(5,20)}s;`
  boxingList.value.push(data);
}

</script>

<template>
  <div class="boxing">
    <div v-for="key in boxingList" :style="key"></div>
  </div>
</template>

<style scoped>

.boxing{
  position: fixed;
  z-index: -1;
  left: 0;
  top: 0;
  width: 100vw;
  height: 100vh;
  overflow: hidden;
}

.boxing>div{
  position: absolute;
  z-index: 0;
  background: #fff;
  border-radius: 30%;
  opacity: 0.5;
  top: -20%;
  animation-name: rotatebox;    /*動畫名稱，需與 keyframe 名稱對應*/
  animation-iteration-count: infinite;    /*動畫次數，infinite 為無限次*/ 
  animation-timing-function: linear;
}
@keyframes rotatebox{
  0%{
    top: -20%;
  }
  100%{
    transform: rotate(0deg);
    top: 100%;
    opacity: 0;
  }
}

@media (max-width: 767px) {
  

}

@media (max-width: 390px) {
  
}
</style>
