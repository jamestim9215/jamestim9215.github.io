<script setup>
import { ref, onMounted ,defineProps, defineEmits, watch} from "vue";

import headgear_0 from "@/assets/images/headgear/headgear_0.png";
import headgear_1 from "@/assets/images/headgear/headgear_1.png";
import headgear_2 from "@/assets/images/headgear/headgear_2.png";

import expression_0 from "@/assets/images/expression/expression_0.png";
import expression_1 from "@/assets/images/expression/expression_1.png";
import expression_2 from "@/assets/images/expression/expression_2.png";

import outfit_0 from "@/assets/images/outfit/outfit_0.png";
import outfit_1 from "@/assets/images/outfit/outfit_1.png";
import outfit_2 from "@/assets/images/outfit/outfit_2.png";
import outfit_3 from "@/assets/images/outfit/outfit_3.png";

import leftHandAccessory_0 from "@/assets/images/leftHandAccessory/leftHandAccessory_0.png";
import leftHandAccessory_1 from "@/assets/images/leftHandAccessory/leftHandAccessory_1.png";
import leftHandAccessory_2 from "@/assets/images/leftHandAccessory/leftHandAccessory_2.png";

import rightHandAccessory_0 from "@/assets/images/rightHandAccessory/rightHandAccessory_0.png";
import rightHandAccessory_1 from "@/assets/images/rightHandAccessory/rightHandAccessory_1.png";

import mainBody_0 from "@/assets/images/mainBody/mainBody_0.png";
import mainBody_1 from "@/assets/images/mainBody/mainBody_1.png";
import mainBody_2 from "@/assets/images/mainBody/mainBody_2.png";
import mainBody_3 from "@/assets/images/mainBody/mainBody_3.png";

import background_0 from "@/assets/images/background/background_0.png";
import background_1 from "@/assets/images/background/background_1.png";
import background_2 from "@/assets/images/background/background_2.png";


import logo from "@/assets/logo.png";

import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();


const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
window.base64 = null;

const props = defineProps({
    stepStatus: {
        type: Number,
        default: 2
    },
    name: {
        type: String,
        default: ''
    },
    itemIndex: {
        type: Object,
        default: {
            headgear: 0,
            expression: 0,
            outfit: 0,
            leftHandAccessory: -1,
            rightHandAccessory: 0,
            mainBody: 0,
            background: -1,
        }
    },
    lang: {
        type: String,
        default: 'en-us'
    },
    isEdit: {
        type: Boolean,
        default: false
    },
})

let downloadBase64 = null;
let downloadBase64ForMeta = null;



let gameImageData = {
  headgear: {
    isShowIndex: 2,
    list: [headgear_0, headgear_1, headgear_2],
  },
  expression: {
    isShowIndex: 2,
    list: [ expression_0, expression_1, expression_2],
  },
  outfit: {
    isShowIndex: 2,
    list: [outfit_0, outfit_1, outfit_2, outfit_3],
  },
  leftHandAccessory: {
    isShowIndex: 3,
    list: [leftHandAccessory_0, leftHandAccessory_1, leftHandAccessory_2],
  },
  rightHandAccessory: {
    isShowIndex: 2,
    list: [rightHandAccessory_0, rightHandAccessory_1],
  },
  mainBody: {
    isShowIndex: 2,
    list: [mainBody_0, mainBody_1, mainBody_2,mainBody_3],
  },
  background: {
    isShowIndex: 3,
    list: [background_0,background_1, background_2],
  },
};

let typeIndex = ref("headgear");
let pageType = ref("create")

// 頭飾 / 表情 / 服裝 / 左手配件 / 右手配件 / 本體 / 背景

let itemIndex = ref({
  headgear: 0,
  expression: 0,
  outfit: 0,
  leftHandAccessory: -1,
  rightHandAccessory: 0,
  mainBody: 0,
  background: -1,
});

itemIndex.value = props.itemIndex;

const emit = defineEmits(['setStepStatus'])
const name = ref('')

const imgPreview = ref(null);

name.value = props.name;


let imgArr = ref([
  gameImageData["background"].list[itemIndex.value["background"]],
  gameImageData["mainBody"].list[itemIndex.value["mainBody"]],
  gameImageData["rightHandAccessory"].list[itemIndex.value["rightHandAccessory"]],
  gameImageData["leftHandAccessory"].list[itemIndex.value["leftHandAccessory"]],
  gameImageData["outfit"].list[itemIndex.value["outfit"]],
  gameImageData["expression"].list[itemIndex.value["expression"]],
  gameImageData["headgear"].list[itemIndex.value["headgear"]],
]);



watch(itemIndex, () => {
  imgArr.value = [
    gameImageData["background"].list[itemIndex.value["background"]],
    gameImageData["mainBody"].list[itemIndex.value["mainBody"]],
    gameImageData["rightHandAccessory"].list[itemIndex.value["rightHandAccessory"]],
    gameImageData["leftHandAccessory"].list[itemIndex.value["leftHandAccessory"]],
    gameImageData["outfit"].list[itemIndex.value["outfit"]],
    gameImageData["expression"].list[itemIndex.value["expression"]],
    gameImageData["headgear"].list[itemIndex.value["headgear"]],
  ];
})

let downloadImgArr = [];

let imgIndex = 0;
let imgIndexForMeta = 0;

const setStep = (stepStatus,type) => {
  

    let _data = {};

    let _itemIndex = itemIndex.value;

    // if(stepStatus == 1 && type == 'edit'){
    //   _itemIndex = {
    //       headgear: 0,
    //       expression: 0,
    //       outfit: 0,
    //       leftHandAccessory: 0,
    //       rightHandAccessory: 0,
    //       mainBody: 0,
    //       background: 0,
    //   };
    // }
    // if(stepStatus == 1 && type == 'create'){
    //   _itemIndex = {
    //       headgear: 0,
    //       expression: 0,
    //       outfit: 0,
    //       leftHandAccessory: 0,
    //       rightHandAccessory: 0,
    //       mainBody: 0,
    //       background: 0,
    //   };
    // }
    if(stepStatus == 2){
      typeIndex.value = "headgear";
    }


    if(stepStatus == 2 && type == 'create' && props.stepStatus == 1){
      _itemIndex = {
          headgear: 0,
          expression: 0,
          outfit: 0,
          leftHandAccessory: -1,
          rightHandAccessory: 0,
          mainBody: 0,
          background: -1,
      };
    }
    _data = {
        name : name.value,
        itemIndex : _itemIndex,
        stepStatus : stepStatus
    }

    console.log(_data);
    itemIndex.value = _data.itemIndex;



    
    if(stepStatus == 1){
      okHandler(1);
    }
    if(stepStatus != 1 && stepStatus != 4){
      imgPreview.value = null
    }

    emit('setStepStatus', _data)
}



const ChangeItem = (index) => {
  itemIndex.value[typeIndex.value] = index;

  // imgArr.value[0] = gameImageData["background"].list[itemIndex.value["background"]];
  imgArr.value[1] = gameImageData["mainBody"].list[itemIndex.value["mainBody"]];
  imgArr.value[2] = gameImageData["rightHandAccessory"].list[
    itemIndex.value["rightHandAccessory"]
  ];
  // imgArr.value[3] = gameImageData["leftHandAccessory"].list[
  //   itemIndex.value["leftHandAccessory"]
  // ];
  imgArr.value[4] = gameImageData["outfit"].list[itemIndex.value["outfit"]];
  imgArr.value[5] = gameImageData["expression"].list[itemIndex.value["expression"]];
  imgArr.value[6] = gameImageData["headgear"].list[itemIndex.value["headgear"]];


};

const SetBg = (index) => {
  imgArr.value[0] = gameImageData["background"].list[index];
  itemIndex.value.background = index;
  imgArr.value[3] = gameImageData["leftHandAccessory"].list[index];
  itemIndex.value.leftHandAccessory = index;

  console.log(imgArr.value);
};

const loadImage = (canvas, context, imgIndex, width, height,isDownload) => {
  let myImage = new Image();
  myImage.src = downloadImgArr[imgIndex];
  myImage.crossOrigin = "Anonymous";

  console.log(downloadImgArr)

  myImage.onload = function () {
    context.drawImage(myImage, 0, 0, width, height);

    if (downloadImgArr.length - 1 > imgIndex) {
      imgIndex++;
      loadImage(canvas, context, imgIndex, width, height,isDownload);
    } else if (downloadImgArr.length - 1 == imgIndex) {

      let myLogo = new Image();
      myLogo.src = logo;
      myLogo.crossOrigin = "Anonymous";

      myLogo.onload = function () {
        context.drawImage(myLogo, 15, 15, 250, 59);

        // 设置字体样式
        context.font = "60px Arial";
        context.fillStyle = "#fff"; // 文字颜色
        
        // 获取文字的宽度
        var text = name.value;
        var textWidth = context.measureText(text).width;
        
        // 计算文字的位置
        var x = (canvas.width - textWidth) / 2; // 水平居中
        var y = canvas.height - 100; // 在底部留出一些间距
        
        // 绘制文字
        context.fillText(text, x, y);

        let base64 = canvas.toDataURL("image/png");
        downloadBase64 = base64;
        console.log("isDownload",isDownload);
        download(isDownload);
        return;
      }
    }

  };
};

const drawAndShareImage = (isDownload) => {
  console.log("drawAndShareImage");
  imgIndex = 0;
  let canvas = document.createElement("canvas");
  let width = 1200;
  let height = 1200;
  canvas.width = width;
  canvas.height = height;
  let context = canvas.getContext("2d");

  context.rect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "rgba(0, 0, 0, 1)";
  context.fill();

  loadImage(canvas, context, imgIndex, width, height,isDownload);
};

const loadImageForMeta = (canvas, context, imgIndexForMeta, width, height) => {
  let myImage = new Image();
  myImage.src = downloadImgArr[imgIndexForMeta];
  myImage.crossOrigin = "Anonymous";

  myImage.onload = function () {
    context.drawImage(myImage, 285, 0, 630, 630);

    if (downloadImgArr.length - 1 > imgIndexForMeta) {
      imgIndexForMeta++;
      loadImageForMeta(canvas, context, imgIndexForMeta, width, height);
    } else if (downloadImgArr.length - 1 == imgIndexForMeta) {
      let myLogo = new Image();
      myLogo.src = logo;
      myLogo.crossOrigin = "Anonymous";

      myLogo.onload = function () {
        context.drawImage(myLogo, 15, 15, 250, 59);

        // 设置字体样式
        context.font = "30px Arial";
        context.fillStyle = "#fff"; // 文字颜色
        
        // 获取文字的宽度
        var text = name.value;
        var textWidth = context.measureText(text).width;
        
        // 计算文字的位置
        var x = (canvas.width - textWidth) / 2; // 水平居中
        var y = canvas.height - 50; // 在底部留出一些间距
        
        // 绘制文字
        context.fillText(text, x, y);

        let base64 = canvas.toDataURL("image/png");
        downloadBase64ForMeta = base64;

        downloadForMeta();
        // let img = document.getElementById('imgPreview');
        // img.setAttribute('src', downloadBase64ForMeta);
      };
    }

    let base64 = canvas.toDataURL("image/png");
    downloadBase64ForMeta = base64;

    // let img = document.getElementById('imgPreview');
    // img.setAttribute('src', downloadBase64ForMeta);
  };
};

const drawAndShareImageForMeta = () => {
  imgIndexForMeta = 0;
  let canvas = document.createElement("canvas");
  let width = 1200;
  let height = 630;
  canvas.width = width;
  canvas.height = height;
  let context = canvas.getContext("2d");

  context.rect(0, 0, canvas.width, canvas.height);
  context.fillStyle = "rgba(0, 0, 0, 1)";
  context.fill();

  loadImageForMeta(canvas, context, imgIndexForMeta, width, height);
};

onMounted(() => {
  // drawAndShareImage();
  // drawAndShareImageForMeta();
});

const download = (isDownload) => {
  var imgSrc = downloadBase64;
  var name = "test";

  let image = new Image();
  image.setAttribute("crossOrigin", "anonymous");
  image.onload = function () {
    let canvas = document.createElement("canvas");
    canvas.width = image.width;
    canvas.height = image.height;
    let context = canvas.getContext("2d");
    context.drawImage(image, 0, 0, image.width, image.height);
    let url = canvas.toDataURL("image/png");
    if(isDownload) {
      let a = document.createElement("a");
      let event = new MouseEvent("click");
      a.download = name || "photo";
      a.href = url;
      a.dispatchEvent(event);
    }
    imgPreview.value = imgSrc;
  };
  image.src = imgSrc;
};

const downloadForMeta = () => {
  var imgSrc2 = downloadBase64ForMeta;
  var name2 = "testForMeta";

  let image2 = new Image();
  image2.setAttribute("crossOrigin", "anonymous");
  image2.onload = function () {
    let canvas = document.createElement("canvas");
    canvas.width = image2.width;
    canvas.height = image2.height;
    let context = canvas.getContext("2d");
    context.drawImage(image2, 0, 0, image2.width, image2.height);
    let url = canvas.toDataURL("image/png");
    let a = document.createElement("a");
    let event = new MouseEvent("click");
    a.download = name2 || "photo";
    a.href = url;
    a.dispatchEvent(event);
  };
  image2.src = imgSrc2;
};

const downloadHandler = () => {
  downloadImgArr = [];
  for(let key in imgArr.value){
    if(imgArr.value[key] != null)
      downloadImgArr.push(imgArr.value[key])
  }
  drawAndShareImage(true);
  drawAndShareImageForMeta();
};

const isShowShareDiv = ref(false);

let shareUrl = new URL(location.href)
const encodedSearchParams = encodeURIComponent(shareUrl.searchParams.toString());
// let shareDomain = 'https://jamestim9215.github.io/LandingPageGame/dressing-game/dist?';
let shareDomain = 'https://member.aorus.com/global/whyjoin?';
const TITLE = ref("");
const URLENCODED_URL = ref(shareDomain+encodedSearchParams);
const TEXT = ref("");
const TWITTER_HANDLE = ref("");

const okHandler = (_step) => {

  if(_step == 4){
    var url = new URL(location.href);
    var search_params = url.searchParams;

    search_params.set('lang', props.lang); 
    search_params.set('name', name.value);
    search_params.set('headgear', itemIndex.value.headgear);
    search_params.set('expression', itemIndex.value.expression);
    search_params.set('outfit', itemIndex.value.outfit);
    search_params.set('leftHandAccessory', itemIndex.value.leftHandAccessory);
    search_params.set('rightHandAccessory', itemIndex.value.rightHandAccessory);
    search_params.set('mainBody', itemIndex.value.mainBody);
    search_params.set('background', itemIndex.value.background);


    url.search = search_params.toString();

    var new_url = url.toString();
    var obj = {
    Title: '??',
    Url: new_url
    };

    localStorage.setItem('name', name.value);
    localStorage.setItem('headgear', itemIndex.value.headgear);
    localStorage.setItem('expression', itemIndex.value.expression);
    localStorage.setItem('outfit', itemIndex.value.outfit);
    localStorage.setItem('leftHandAccessory', itemIndex.value.leftHandAccessory);
    localStorage.setItem('rightHandAccessory', itemIndex.value.rightHandAccessory);
    localStorage.setItem('mainBody', itemIndex.value.mainBody);
    localStorage.setItem('background', itemIndex.value.background);
    
    window.history.replaceState(obj, obj.Title , obj.Url );

    let queryString = window.location.search;

    localStorage.setItem('userUrl', queryString);
  }

  downloadImgArr = [];
  for(let key in imgArr.value){
    if(imgArr.value[key] != null)
      downloadImgArr.push(imgArr.value[key])
  }
  drawAndShareImage(false);
  if(_step == 4){
    setStep(_step,pageType.value); 
  }
}

const hiddenImg = ref([]);
for(var item in gameImageData){
  for(var items in gameImageData[item].list){
    hiddenImg.value.push(gameImageData[item].list[items]);
  }
}

const copyText = () => {
  const textToCopy = location.href;
  
  // 创建一个临时文本框来容纳要复制的文本
  const tempInput = document.createElement("textarea");
  tempInput.value = textToCopy;
  document.body.appendChild(tempInput);
  
  // 选择文本并复制到剪贴板
  tempInput.select();
  document.execCommand("copy");
  
  // 清理临时元素
  document.body.removeChild(tempInput);
  
  // 可以添加一些用户反馈，比如提示复制成功
  alert("已複製到剪貼簿! " + textToCopy);
}




if(props.stepStatus == 1){
  okHandler(1);
}


</script>

<template>
  <div class="hiddenImg" v-show="0">
    <img :src="key" v-for="(key,index) in hiddenImg" :key="index" alt="">
  </div>
  <div class="btn-div">
    <button
      id="BackBtn"
      @click="setStep(props.stepStatus - 1,pageType);"
      v-if="props.stepStatus == 2 || props.stepStatus == 3 || props.stepStatus == 4"
    >
      {{ t("GameTrans.Back") }}
    </button>
    <button id="NextBtn" @click="setStep(3,pageType)" v-if="props.stepStatus == 2">{{ t("GameTrans.Next") }}</button>
    <button id="OkBtn" @click="okHandler(4);" v-if="props.stepStatus == 3 && itemIndex.leftHandAccessory!=-1">{{ t("GameTrans.OK") }}</button>
  </div>
  <img :src="imgPreview" alt="" id="imgPreview" v-if="imgPreview">
  <div class="image-list-div" v-else>
    <img v-for="(key, index) in imgArr" :key="index" :src="key" alt="" />
  </div>
  <div class="home-div" v-if="props.stepStatus == 1">
      <div class="text">{{ t("GameTrans.EnterYourName") }}</div>
      <input type="text" v-model="name">
      <button @click="setStep(2,'edit'); pageType = 'edit'" v-if="props.isEdit" :disabled="name==''">{{ t("GameTrans.Edit") }}</button>
      <button @click="setStep(2,'create'); pageType = 'create'" :disabled="name==''">{{ t("GameTrans.CreateNew") }}</button>
  </div>
  <div class="choose-box" v-if="props.stepStatus == 2">
    <div class="tab-div">
      <img
        class="tab"
        v-for="(key, index) in gameImageData"
        :key="index"
        :class="typeIndex == index ? 'active' : ''"
        @click="typeIndex = index"
        v-show="key.isShowIndex==2"
      />
    </div>
    <div class="tab-choose-list">
      <img
        v-for="(key, index) in gameImageData[typeIndex].list"
        :key="index"
        :src="key"
        :class="itemIndex[typeIndex] == index ? 'active' : ''"
        @click="ChangeItem(index)"
      />
    </div>
  </div>
  <div class="chooseBG-box" v-if="props.stepStatus == 3">
      <img
        v-for="(key, index) in gameImageData.leftHandAccessory.list"
        :key="index"
        :src="key"
        :class="itemIndex.leftHandAccessory == index ? 'active' : ''"
        @click="SetBg(index)"
        v-show="key!=null"
      />

  </div>

  <div class="downloadBtn-div"  v-if="props.stepStatus == 4">

    <p class="downloadBtnMb">{{ t("GameTrans.LongPressToSaveThePicture") }}</p>
    <p class="downloadBtnPC">{{ t("GameTrans.UseItContent") }}</p>
    <button class="downloadBtn downloadBtnPC" @click="downloadHandler">{{ t("GameTrans.Download") }}</button>

    <p>{{ t("GameTrans.ShareYourAORUSWarrior") }}</p>
    <button class="downloadBtn" @click="isShowShareDiv = true">{{ t("GameTrans.Share") }}</button>

  </div>

  <div class="share-div-cover" v-if="isShowShareDiv">
    <div class="share-div">
      <span class="closeShareDivBtn" @click="isShowShareDiv = false"></span>
      <label for="">{{ t("GameTrans.ShareYourAORUSWarrior") }}</label>
      <div>
        <a :href="'https://twitter.com/share?url='+URLENCODED_URL+'&via='+TWITTER_HANDLE"
          onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"
          target="_blank" title="Share on Twitter">
        <span>
          <img src="@/assets/images/twitter.png" alt="">
        </span>
        </a>
        <div>{{ t("GameTrans.Twitter") }}</div>
      </div>
      <div>
          <a :href="'https://www.facebook.com/sharer/sharer.php?u='+URLENCODED_URL+'&t='+TITLE"
            onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"
            target="_blank" title="Share on Facebook">
            <span>
                <img src="@/assets/images/facebook.png" alt="">
            </span>
          </a>
        <div>{{ t("GameTrans.Facebook") }}</div>
      </div>
      <div>
        <span @click="copyText">
          <img src="@/assets/images/share.png" alt="">
        </span>
        <div>{{ t("GameTrans.Share") }}</div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.btn-div {
  position: absolute;
  z-index: 1000;
  width: 100%;
  height: 40px;
  display: flex;
  justify-content: space-between;
  button {
    position: relative;
    display: inline-block;
    width: 100px;
    height: 50px;
    background: #000;
    border: 1px solid #fff;
    margin: 10px;
    color: #fff;
    font-size: 18px;
  }
}
#imgPreview{
  position: relative;
  margin: 0 auto;
    display: block;
  width: calc(100% - 50px);
  aspect-ratio: 1 / 1;
}
.image-list-div {
  position: relative;
  margin: 0 auto;
  width: calc(100% - 50px);
  aspect-ratio: 1 / 1;
  background: rgba(0,0,0 ,1);
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
  }
}

.home-div{
      position: relative;
      text-align: center;
      
  .text{
      margin-top: 30px;
      color: #fff;
      font-size: 24px;
      font-family: 'Arial',sans-serif;
  }
  input{
      position: relative;
      width: 80%;
      height: 50px;
      margin-top: 10px;
      background: #dedede;
      border: 0;
      text-align: center;
      font-size: 20px;
  }
  button{
      position: relative;
      margin-top: 30px;
      border: 0;
      width: calc(80% + 4px);
      height: 50px;
      background: #ff6400;
      color: #fff;
      font-size: 20px;
      &:disabled{
        opacity: 0.5;
      }
  }
}
.choose-box {
  position: relative;
  width: 100%;
  height: auto;
  .tab-div {
    position: relative;
    padding: 10px;
    width: calc(100% - 20px);
    height: auto;
    min-height: 50px;
    white-space: nowrap;
    overflow-x: hidden;
    overflow-y: hidden;
    background: #999;
    > .tab {
      position: relative;
      display: inline-block;
      width: calc((100% - 100px) / 5);
      aspect-ratio: 1 / 1;
      object-fit: cover;
      object-position: center;
      margin: 10px;
      text-align: center;
      line-height: 20px;
      background: #fff;
      border-radius: 50%;
      white-space: nowrap;
      &.active {
        background: #ff6400;
      }
    }
  }
  .tab-choose-list{
    background: #333;
    padding: 10px;
    width: calc(100% - 20px);
    min-height: 300px;
    img {
      position: relative;
      display: inline-block;
      vertical-align: top;
      width: calc((100% - 100px) / 5);
      aspect-ratio: 1 / 1;
      background: #999;
      margin: 10px;
      border-radius: 50%;
      &.active {
        background: #ff6400;
      }
    }
  }
  
}

  .chooseBG-box{
    position: relative;
    padding: 10px;
    width: calc(100% - 20px);
    min-height: 300px;
    >img{
      position: relative;
      display: inline-block;
      vertical-align: top;
      width: calc((100% - 90px) / 3);
      aspect-ratio: 1 / 1;
      background: #999;
      margin: 15px;
      &.active {
        background:#ff6400;
      }
    }
  }

  .downloadBtn-div{
    position: relative;
    width: 100%;
    text-align: center;
    padding-top: 50px;
    p{
      color:#fff;
      font-size: 20px;
        margin-top: 30px;
        margin-bottom: 0;
    }
    .downloadBtn{
        position: relative;
        display: inline-block;
        margin-top: 10px;
        border: 0;
        width: calc(80% + 4px);
        height: 50px;
        background: #ff6400;
        color: #fff;
        font-size: 20px;
    }
  }

  .share-div-cover{
    position: fixed;
    z-index: 9999;
    top: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100%;
    max-width: 500px;
    height: 100vh;
    background: rgba(0,0,0 ,0.5);
    .share-div{
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%,-50%);
      width: calc(100% - 30px);
      min-height: 200px;
      background: #333;
      border-radius: 15px;
      box-shadow: 0 0 10px #333;
      line-height: 200px;
      // display: flex;
      // justify-content: space-around;
      text-align: center;
      >.closeShareDivBtn{
        position: absolute;
        right: 0;
        top: 0;
        width: 30px;
        height: 30px;
        border-radius: 50%;
        transition: 0.3s ease-in-out;
        cursor: pointer;
        &::before{
          content:'';
          position: absolute;
          width: 50%;
          height: 3px;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%) rotate(45deg);
          background: #fff;
        }
        &::after{
          content:'';
          position: absolute;
          width: 50%;
          height: 3px;
          top: 50%;
          left: 50%;
          transform: translate(-50%,-50%) rotate(-45deg);
          background: #fff;
        }
        &:hover{
          transform: rotate(90deg);
        }
      }
      >label{
          position: absolute;
          line-height: 18px;
          width: 100%;
          top: 30px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 18px;
          color: #fff;
      }
      >div{
        position: relative;
        display: inline-block;
        vertical-align: middle;
        line-height: 18px;
        span{
          position: relative;
          display: inline-block;
          vertical-align: middle;
          margin: 0 15px;
          width: 50px;
          height: 50px;
          border-radius: 50%;
          // background: #ffffff;
          // border: 2px solid #ffffff;
          line-height: 50px;
          color: #fff;
          img{
            width: 100%;
            aspect-ratio: 1 / 1;
            overflow: hidden;
            object-fit: cover;
            object-position: center center;
          }
        }
        div{
          position: absolute;
          line-height: auto;
          top: 60px;
          left: 50%;
          transform: translateX(-50%);
          font-size: 14px;
          color: #fff;
        }
      }
    }
  }
    .downloadBtnMb{
      display: none;
    }
  /* 使用設備類型判斷是手機 */
  @media only screen and (max-device-width: 767px) and (max-device-height: 1023px) {
    /* 在這裡放置手機裝置的 CSS 樣式 */
    .downloadBtnPC{
      display: none !important;
    }
    .downloadBtnMb{
      display: inline !important;
    }
  }

</style>
