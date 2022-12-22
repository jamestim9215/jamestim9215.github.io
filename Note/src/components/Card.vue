<script setup>
import { ref } from 'vue'

defineProps({
  cardKey: String,
  cardInfo: Object,
})

const setPos = (pos) => {
  return `left: ${pos.X}px;top: ${pos.Y}px;transform: rotate(${pos.Deg}deg);`
}


const pad = (v) => {
  return v < 10 ? "0" + v : v;
};

const getDateString = (d) => {
  let year = d.getFullYear();
  let month = pad(d.getMonth() + 1);
  let day = pad(d.getDate());
  let hour = pad(d.getHours());
  let min = pad(d.getMinutes());
  let sec = pad(d.getSeconds());
  //YYYY-MM-DD hh:mm:ss
  return year + "-" + month + "-" + day + " " + hour + ":" + min + ":" + sec;
};

const nowDate = ref('')

nowDate.value = getDateString(new Date());

setInterval(()=>{
  nowDate.value = getDateString(new Date());
},60000)


const  diffTime = (date1, date2) => {
  const time1 = new Date(date1)
  const time2 = new Date(date2)
  let da = ((Math.abs(time1 - time2)) / (1000 * 60 * 60 * 24));
  let hr = ((Math.abs(time1 - time2)) / (1000 * 60 * 60));
  let min = ((Math.abs(time1 - time2)) / (1000 * 60));

  let _data = {
    num: 0,
    string: ''
  }

  if(da > 1 && da < 2){
    _data.num = da.toFixed(0);
    _data.string = '天前';
    return _data
  }
  if(hr > 1 && hr < 24){
    _data.num = hr.toFixed(0);
    _data.string = '小時前';
    return _data
  }
  _data.num = min.toFixed(0);
  _data.string = '小時前';

  return _data
}

const setTimeString = (data) => {
  return data.num + data.string
}

const isShowCard = (data) => {
  if(data.string == '天前'){
    if(data.num > 2) return false 
  }

  return true
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
    v-if="isShowCard(diffTime(cardInfo.Date,nowDate))"
  >
    <slot></slot>
    <div class="name" v-if="cardInfo.Name"><b>{{cardInfo.Name}}</b> 說</div>
    <div class="content" v-if="cardInfo.Content">{{cardInfo.Content}}</div>
    <div class="ImageBase64" v-if="cardInfo.ImageBase64"><img :src="cardInfo.ImageBase64" alt=""></div>
    <div class="date" >{{setTimeString(diffTime(cardInfo.Date,nowDate))}}</div>
  </div>
</template>

<style lang="scss" scoped>

.card{
  position: absolute;
  width: auto;
  min-width: 200px;
  max-width: 400px;
  min-height: 100px;
  height: auto;
  color: #000;
  padding: 10px 10px 30px 10px;
  border-radius: 10px;
  box-shadow: 0px 0px 15px #666;
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
    font-size: 20px;
    color: #333;
  }

  .content{
    position: relative;
    font-size: 28px;
    line-height: 32px;
    font-weight: 700;
    color: 000;
  }

  .ImageBase64{
    position: relative;
    text-align: center;
    img{
      max-width: 100%;
      border-radius: 10px;
      -webkit-user-drag: none;
      pointer-events: none;
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
