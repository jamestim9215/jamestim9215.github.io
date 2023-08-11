<script setup>
import { ref, onMounted } from 'vue'

import image01 from '@/assets/images/test01.png';
import image01_1 from '@/assets/images/test01-1.png';
import image01_2 from '@/assets/images/test01-2.png';
import image02 from '@/assets/images/test02.png';
import image02_1 from '@/assets/images/test02-1.png';
import image02_2 from '@/assets/images/test02-2.png';
import image03 from '@/assets/images/test03.png';
import image04 from '@/assets/images/test04.png';
import image04_1 from '@/assets/images/test04-1.png';

import logo from '@/assets/logo.png';

window.base64 = null;

let downloadBase64 = null;
let downloadBase64ForMeta = null;

defineProps({

})

let typeIndex = ref('head');

let itemIndex = ref({
  head: 0,
  body: 0,
  foot: 0,
  bg: 0,
})


let gameImageData = {
  head : [
    image02,
    image02_1,
    image02_2,
  ],
  body: [
    image01,
    image01_1,
    image01_2
  ],
  foot: [
    image03
  ],
  bg: [
    image04,
    image04_1
  ]
}

let imgArr = [
  gameImageData['bg'][itemIndex.value['bg']],
  gameImageData['foot'][itemIndex.value['foot']],
  gameImageData['body'][itemIndex.value['body']],
  gameImageData['head'][itemIndex.value['head']],
  
]
let imgIndex = 0;
let imgIndexForMeta = 0;

const ChangeItem = (index) =>{
  itemIndex.value[typeIndex.value] = index;

  imgArr = [
    gameImageData['bg'][itemIndex.value['bg']],
    gameImageData['foot'][itemIndex.value['foot']],
    gameImageData['body'][itemIndex.value['body']],
    gameImageData['head'][itemIndex.value['head']],
  ]

  // drawAndShareImage();
  // drawAndShareImageForMeta();
}

const loadImage = (canvas,context,imgIndex,width,height) =>{
  let myImage = new Image();
  myImage.src = imgArr[imgIndex];
  myImage.crossOrigin = "Anonymous";



  myImage.onload = function () {
    context.drawImage(myImage, 0, 0, width, height);
      
      if(imgArr.length-1 > imgIndex){
        imgIndex++;
        loadImage(canvas,context,imgIndex,width,height);
      }else if(imgArr.length-1 == imgIndex){
        let base64 = canvas.toDataURL('image/png');
        downloadBase64 = base64;
        console.log("????");
        download();
        return
      }

      // let img = document.getElementById('imgPreview');
      // img.setAttribute('src', window.base64);
  }  

}

const drawAndShareImage = () =>{
  let canvas = document.createElement('canvas');
  let width = 1200;
  let height = 1200;
  canvas.width = width;
  canvas.height = height;
  let context = canvas.getContext('2d');

  context.rect(0, 0, canvas.width, canvas.height);
  context.fillStyle = 'rgba(34, 34, 34,1)';
  context.fill();

  loadImage(canvas,context,imgIndex,width,height);

}



const loadImageForMeta = (canvas,context,imgIndexForMeta,width,height) =>{
  let myImage = new Image();
  myImage.src = imgArr[imgIndexForMeta];
  myImage.crossOrigin = "Anonymous";

  myImage.onload = function () {
    context.drawImage(myImage, 285, 0, 630, 630);
      
      if(imgArr.length-1 > imgIndexForMeta){
        imgIndexForMeta++;
        loadImageForMeta(canvas,context,imgIndexForMeta,width,height);
      }else if(imgArr.length-1 == imgIndexForMeta){
        let myLogo = new Image();
        myLogo.src = logo;
        myLogo.crossOrigin = "Anonymous";

        myLogo.onload = function () {
          context.drawImage(myLogo, 15, 15, 250, 59);
          
          let base64 = canvas.toDataURL('image/png');
          downloadBase64ForMeta = base64;

          downloadForMeta();
          // let img = document.getElementById('imgPreview');
          // img.setAttribute('src', downloadBase64ForMeta);

        }  

      }
  
      let base64 = canvas.toDataURL('image/png');
      downloadBase64ForMeta = base64;

      // let img = document.getElementById('imgPreview');
      // img.setAttribute('src', downloadBase64ForMeta);
  }  

}


const drawAndShareImageForMeta = () =>{
  let canvas = document.createElement('canvas');
  let width = 1200;
  let height = 630;
  canvas.width = width;
  canvas.height = height;
  let context = canvas.getContext('2d');

  context.rect(0, 0, canvas.width, canvas.height);
  context.fillStyle = 'rgba(34, 34, 34,1)';
  context.fill();

  loadImageForMeta(canvas,context,imgIndexForMeta,width,height);

}

onMounted(()=>{

  // drawAndShareImage();
  // drawAndShareImageForMeta();
  
})


const download = () => {
  var imgSrc = downloadBase64;
  var name = 'test';

  let image = new Image();
  image.setAttribute('crossOrigin', 'anonymous');
  image.onload = function (){
    let canvas = document.createElement('canvas');
    canvas.width = image.width;
    canvas.height = image.height;
    let context = canvas.getContext('2d');
    context.drawImage(image, 0, 0, image.width, image.height);
    let url = canvas.toDataURL('image/png');  
    let a = document.createElement('a');
    let event = new MouseEvent('click');
    a.download = name || 'photo';
    a.href = url;
    a.dispatchEvent(event);
  }
  image.src = imgSrc;

}

const downloadForMeta = () => {

  var imgSrc2 = downloadBase64ForMeta;
  var name2 = 'testForMeta';

  let image2 = new Image();
  image2.setAttribute('crossOrigin', 'anonymous');
  image2.onload = function (){
    let canvas = document.createElement('canvas');
    canvas.width = image2.width;
    canvas.height = image2.height;
    let context = canvas.getContext('2d');
    context.drawImage(image2, 0, 0, image2.width, image2.height);
    let url = canvas.toDataURL('image/png');  
    let a = document.createElement('a');
    let event = new MouseEvent('click');
    a.download = name2 || 'photo';
    a.href = url;
    a.dispatchEvent(event);
  }
  image2.src = imgSrc2;

}

const downloadHandler = () => {
  drawAndShareImage();
  drawAndShareImageForMeta();
}




// 本體 / 表情 / 服裝 / 左手配件 / 右手配件 / 頭飾


</script>

<template>
    <!-- <img src="" alt="" id="imgPreview"> -->
  <div class="image-list-div">
    
    <img v-for="(key,index) in imgArr" :key="index" :src="key" alt="">
  </div>
  <button @click="downloadHandler">Download</button>


  <div class="choose-box">
    <div class="tab-div">
      <div class="tab" v-for="(key,index) in gameImageData" :key="index" :class="typeIndex == index?'active':''" @click="typeIndex = index">
        {{index}}
      </div>
    </div>

    <img v-for="(key,index) in gameImageData[typeIndex]" :key="index" :src="key" :class="itemIndex[typeIndex] == index?'active':''" @click="ChangeItem(index)">
  </div>

</template>

<style lang="scss" scoped>
  .image-list-div{
    position: relative;
    margin:0 auto;
    width: 320px;
    height: 320px;
    background: rgba(34, 34, 34,1);
    img{
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: auto;
    }
  }
  .choose-box{
    position: relative;
    width: 100%;
    height: auto;
    .tab-div{
      position: relative;
      width: 100%;
      height: auto;
      min-height: 50px;
        white-space: nowrap;
        overflow-x: scroll;
        overflow-y: hidden;
      >.tab{
        position: relative;
        display: inline-block;
        height: 20px;
        width: 100px;
        height: 100px;
        text-align: center;
        line-height: 20px;
        background: #fff;  
        border-radius: 50%;   
        white-space: nowrap;   
        &.active{
        background: #ff0000;  
        }
      }
    }
    img{
      background: #999;
      width: 33%;
      height: auto;      
      &.active{
        background: #f00;  
      }
    }
  }


</style>
