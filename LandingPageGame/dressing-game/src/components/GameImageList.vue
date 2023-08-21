<script setup>
import { ref, onMounted, defineProps, defineEmits, watch } from "vue";

import Head_type from "@/assets/images/type/Head.png";
import Head_0 from "@/assets/images/Head/Head_0.png";
import Head_1 from "@/assets/images/Head/Head_1.png";
// import Head_2 from "@/assets/images/Head/Head_2.png";
import Head_preview_0 from "@/assets/images/Head/Head_preview_0.png";
import Head_preview_1 from "@/assets/images/Head/Head_preview_1.png";
// import Head_preview_2 from "@/assets/images/Head/Head_preview_2.png";

import Eye_type from "@/assets/images/type/Eye.png";
import Eye_0 from "@/assets/images/Eye/Eye_0.png";
import Eye_1 from "@/assets/images/Eye/Eye_1.png";
// import Eye_2 from "@/assets/images/Eye/Eye_2.png";
import Eye_preview_0 from "@/assets/images/Eye/Eye_preview_0.png";
import Eye_preview_1 from "@/assets/images/Eye/Eye_preview_1.png";
// import Eye_preview_2 from "@/assets/images/Eye/Eye_preview_2.png";

import Cloth_type from "@/assets/images/type/Cloth.png";
import Cloth_0 from "@/assets/images/Cloth/Cloth_0.png";
import Cloth_1 from "@/assets/images/Cloth/Cloth_1.png";
// import Cloth_2 from "@/assets/images/Cloth/Cloth_2.png";
// import Cloth_3 from "@/assets/images/Cloth/Cloth_3.png";
import Cloth_preview_0 from "@/assets/images/Cloth/Cloth_preview_0.png";
import Cloth_preview_1 from "@/assets/images/Cloth/Cloth_preview_1.png";
// import Cloth_preview_2 from "@/assets/images/Cloth/Cloth_preview_2.png";
// import Cloth_preview_3 from "@/assets/images/Cloth/Cloth_preview_3.png";

// import Mb_type from "@/assets/images/type/Mb.png";
// import Mb_0 from "@/assets/images/Mb/Mb_0.png";
import Mb_1 from "@/assets/images/Mb/Mb_1.png";
// import Mb_2 from "@/assets/images/Mb/Mb_2.png";
// import Mb_preview_0 from "@/assets/images/Mb/Mb_preview_0.png";
import Mb_preview_1 from "@/assets/images/Mb/Mb_preview_1.png";
// import Mb_preview_2 from "@/assets/images/Mb/Mb_preview_2.png";

import Weapon_type from "@/assets/images/type/Weapon.png";
import Weapon_0 from "@/assets/images/Weapon/Weapon_0.png";
import Weapon_1 from "@/assets/images/Weapon/Weapon_1.png";
import Weapon_preview_0 from "@/assets/images/Weapon/Weapon_preview_0.png";
import Weapon_preview_1 from "@/assets/images/Weapon/Weapon_preview_1.png";

import Chibi_type from "@/assets/images/type/Chibi.png";
// import Chibi_0 from "@/assets/images/Chibi/Chibi_0.png";
import Chibi_1 from "@/assets/images/Chibi/Chibi_1.png";
// import Chibi_2 from "@/assets/images/Chibi/Chibi_2.png";
// import Chibi_3 from "@/assets/images/Chibi/Chibi_3.png";
// import Chibi_preview_0 from "@/assets/images/Chibi/Chibi_preview_0.png";
import Chibi_preview_1 from "@/assets/images/Chibi/Chibi_preview_1.png";
// import Chibi_preview_2 from "@/assets/images/Chibi/Chibi_preview_2.png";
// import Chibi_preview_3 from "@/assets/images/Chibi/Chibi_preview_3.png";

// import Bg_0 from "@/assets/images/Bg/Bg_0.png";
import Bg_1 from "@/assets/images/Bg/Bg_1.png";
// import Bg_2 from "@/assets/images/Bg/Bg_2.png";

import logo from "@/assets/logo.png";
import GBLogo from "@/assets/gigabyte_logo.png";

import { useI18n } from "vue-i18n";
const { t, locale } = useI18n();

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
window.base64 = null;

const props = defineProps({
  stepStatus: {
    type: Number,
    default: 2,
  },
  name: {
    type: String,
    default: "",
  },
  itemIndex: {
    type: Object,
    default: {
      Head: 0,
      Eye: 0,
      Cloth: 0,
      Mb: -1,
      Weapon: 0,
      Chibi: 0,
      Bg: -1,
    },
  },
  lang: {
    type: String,
    default: "en-us",
  },
  isEdit: {
    type: Boolean,
    default: false,
  },
});

let downloadBase64 = null;
let downloadBase64ForMeta = null;

let gameImageData = {
  Head: {
    isShowIndex: 2,
    list: [Head_0, Head_1],
    typeImg: Head_type,
    preview: [Head_preview_0, Head_preview_1],
  },
  Eye: {
    isShowIndex: 2,
    list: [Eye_0, Eye_1],
    typeImg: Eye_type,
    preview: [Eye_preview_0, Eye_preview_1],
  },
  Cloth: {
    isShowIndex: 2,
    list: [Cloth_0, Cloth_1],
    typeImg: Cloth_type,
    preview: [Cloth_preview_0, Cloth_preview_1],
  },
  Mb: {
    isShowIndex: 3,
    list: [Mb_1],
    typeImg: null,
    preview: [Mb_preview_1],
  },
  Weapon: {
    isShowIndex: 2,
    list: [Weapon_0, Weapon_1],
    typeImg: Weapon_type,
    preview: [Weapon_preview_0, Weapon_preview_1],
  },
  Chibi: {
    isShowIndex: 2,
    list: [Chibi_1],
    typeImg: Chibi_type,
    preview: [Chibi_preview_1],
  },
  Bg: {
    isShowIndex: 3,
    list: [Bg_1],
    typeImg: null,
    preview: null,
  },
};

let typeIndex = ref("Head");
let pageType = ref("create");

let fonts = ref("AORUS-Font");

// 頭飾 / 表情 / 服裝 / 左手配件 / 右手配件 / 本體 / 背景

let itemIndex = ref({
  Head: 0,
  Eye: 0,
  Cloth: 0,
  Mb: -1,
  Weapon: 0,
  Chibi: 0,
  Bg: -1,
});

itemIndex.value = props.itemIndex;

const emit = defineEmits(["setStepStatus"]);
const name = ref("");

const imgPreview = ref(null);

name.value = props.name;

let imgArr = ref([
  gameImageData["Bg"].list[itemIndex.value["Bg"]],
  gameImageData["Chibi"].list[itemIndex.value["Chibi"]],
  gameImageData["Weapon"].list[itemIndex.value["Weapon"]],
  gameImageData["Mb"].list[itemIndex.value["Mb"]],
  gameImageData["Cloth"].list[itemIndex.value["Cloth"]],
  gameImageData["Eye"].list[itemIndex.value["Eye"]],
  gameImageData["Head"].list[itemIndex.value["Head"]],
]);

watch(itemIndex, () => {
  imgArr.value = [
    gameImageData["Bg"].list[itemIndex.value["Bg"]],
    gameImageData["Chibi"].list[itemIndex.value["Chibi"]],
    gameImageData["Weapon"].list[itemIndex.value["Weapon"]],
    gameImageData["Mb"].list[itemIndex.value["Mb"]],
    gameImageData["Cloth"].list[itemIndex.value["Cloth"]],
    gameImageData["Eye"].list[itemIndex.value["Eye"]],
    gameImageData["Head"].list[itemIndex.value["Head"]],
  ];
});

let downloadImgArr = [];

let imgIndex = 0;
let imgIndexForMeta = 0;

const setStep = (stepStatus, type) => {
  let _data = {};

  let _itemIndex = itemIndex.value;

  // if(stepStatus == 1 && type == 'edit'){
  //   _itemIndex = {
  //       Head: 0,
  //       Eye: 0,
  //       Cloth: 0,
  //       Mb: 0,
  //       Weapon: 0,
  //       Chibi: 0,
  //       Bg: 0,
  //   };
  // }
  // if(stepStatus == 1 && type == 'create'){
  //   _itemIndex = {
  //       Head: 0,
  //       Eye: 0,
  //       Cloth: 0,
  //       Mb: 0,
  //       Weapon: 0,
  //       Chibi: 0,
  //       Bg: 0,
  //   };
  // }
  if (stepStatus == 2) {
    typeIndex.value = "Head";
  }

  if (stepStatus == 2 && type == "create" && props.stepStatus == 1) {
    _itemIndex = {
      Head: 0,
      Eye: 0,
      Cloth: 0,
      Mb: -1,
      Weapon: 0,
      Chibi: 0,
      Bg: -1,
    };
  }
  _data = {
    name: name.value,
    itemIndex: _itemIndex,
    stepStatus: stepStatus,
  };

  console.log(_data);
  itemIndex.value = _data.itemIndex;

  if (stepStatus == 1) {
    okHandler(1);
  }
  if (stepStatus != 1 && stepStatus != 4) {
    imgPreview.value = null;
  }

  emit("setStepStatus", _data);
};

const ChangeItem = (index) => {
  itemIndex.value[typeIndex.value] = index;

  // imgArr.value[0] = gameImageData["BgitemIndex.value["Bg"]];
  imgArr.value[1] = gameImageData["Chibi"].list[itemIndex.value["Chibi"]];
  imgArr.value[2] = gameImageData["Weapon"].list[itemIndex.value["Weapon"]];
  // imgArr.value[3] = gameImageData["Mb"].list[
  //   itemIndex.value["Mb"]
  // ];
  imgArr.value[4] = gameImageData["Cloth"].list[itemIndex.value["Cloth"]];
  imgArr.value[5] = gameImageData["Eye"].list[itemIndex.value["Eye"]];
  imgArr.value[6] = gameImageData["Head"].list[itemIndex.value["Head"]];
};

const SetBg = (index) => {
  imgArr.value[0] = gameImageData["Bg"].list[index];
  itemIndex.value.Bg = index;
  imgArr.value[3] = gameImageData["Mb"].list[index];
  itemIndex.value.Mb = index;

  console.log(imgArr.value);
};

const loadImage = (canvas, context, imgIndex, width, height, isDownload) => {
  let myImage = new Image();
  myImage.src = downloadImgArr[imgIndex];
  myImage.crossOrigin = "Anonymous";

  console.log(downloadImgArr);

  myImage.onload = function () {
    context.drawImage(myImage, 0, 0, width, height);

    if (downloadImgArr.length - 1 > imgIndex) {
      imgIndex++;
      loadImage(canvas, context, imgIndex, width, height, isDownload);
    } else if (downloadImgArr.length - 1 == imgIndex) {
      let myLogo = new Image();
      myLogo.src = logo;
      myLogo.crossOrigin = "Anonymous";
      myLogo.onload = function () {
        context.drawImage(myLogo, 1050, 36, 118.57, 28.18);

        let myGbLogo = new Image();
        myGbLogo.src = GBLogo;
        myGbLogo.crossOrigin = "Anonymous";

        myGbLogo.onload = function () {
          context.drawImage(myGbLogo, 36, 36, 141.96, 18.28);

          // 设置字体样式
          context.font = "75px " + fonts.value;
          context.fillStyle = "#fff"; // 文字颜色

          // 获取文字的宽度
          var text = name.value;
          var textWidth = context.measureText(text).width;

          // 计算文字的位置
          var x = (canvas.width - textWidth) / 2; // 水平居中
          var y = canvas.height - 120; // 在底部留出一些间距

          // 绘制文字
          context.fillText(text, x, y);

          let base64 = canvas.toDataURL("image/png");
          downloadBase64 = base64;
          console.log("isDownload", isDownload);
          download(isDownload);
          return;
        };
      };
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

  loadImage(canvas, context, imgIndex, width, height, isDownload);
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
        // context.drawImage(myLogo, 15, 15, 250, 59);
        context.drawImage(myLogo, 1050, 29, 118.57, 28.18);

        let myGbLogo = new Image();
        myGbLogo.src = GBLogo;
        myGbLogo.crossOrigin = "Anonymous";

        myGbLogo.onload = function () {
          context.drawImage(myGbLogo, 29, 29, 141.96, 18.28);

          // 设置字体样式
          context.font = "50px " + fonts.value;
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
    if (isDownload) {
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
  for (let key in imgArr.value) {
    if (imgArr.value[key] != null) downloadImgArr.push(imgArr.value[key]);
  }
  drawAndShareImage(true);
  drawAndShareImageForMeta();
};

const isShowShareDiv = ref(false);

let shareUrl = new URL(location.href);
const encodedSearchParams = encodeURIComponent(
  shareUrl.searchParams.toString()
);
// let shareDomain = 'https://jamestim9215.github.io/LandingPageGame/dressing-game/dist?';
let shareDomain = "https://member.aorus.com/global/whyjoin?";
const TITLE = ref("");
const URLENCODED_URL = ref(shareDomain + encodedSearchParams);
const TEXT = ref("");
const TWITTER_HANDLE = ref("");

const okHandler = (_step) => {
  if (_step == 4) {
    var url = new URL(location.href);
    var search_params = url.searchParams;

    search_params.set("lang", props.lang);
    search_params.set("name", name.value);
    search_params.set("Head", itemIndex.value.Head);
    search_params.set("Eye", itemIndex.value.Eye);
    search_params.set("Cloth", itemIndex.value.Cloth);
    search_params.set("Mb", itemIndex.value.Mb);
    search_params.set("Weapon", itemIndex.value.Weapon);
    search_params.set("Chibi", itemIndex.value.Chibi);
    search_params.set("Bg", itemIndex.value.Bg);

    url.search = search_params.toString();

    var new_url = url.toString();
    var obj = {
      Title: "??",
      Url: new_url,
    };

    localStorage.setItem("name", name.value);
    localStorage.setItem("Head", itemIndex.value.Head);
    localStorage.setItem("Eye", itemIndex.value.Eye);
    localStorage.setItem("Cloth", itemIndex.value.Cloth);
    localStorage.setItem("Mb", itemIndex.value.Mb);
    localStorage.setItem("Weapon", itemIndex.value.Weapon);
    localStorage.setItem("Chibi", itemIndex.value.Chibi);
    localStorage.setItem("Bg", itemIndex.value.Bg);

    window.history.replaceState(obj, obj.Title, obj.Url);

    let queryString = window.location.search;

    localStorage.setItem("userUrl", queryString);
  }

  downloadImgArr = [];
  for (let key in imgArr.value) {
    if (imgArr.value[key] != null) downloadImgArr.push(imgArr.value[key]);
  }
  drawAndShareImage(false);
  if (_step == 4) {
    setStep(_step, pageType.value);
  }
};

const hiddenImg = ref([]);
for (var item in gameImageData) {
  if (gameImageData[item].typeImg) {
    hiddenImg.value.push(gameImageData[item].typeImg);
  }
  for (var items in gameImageData[item].preview) {
    hiddenImg.value.push(gameImageData[item].preview[items]);
  }
  for (var items in gameImageData[item].list) {
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
};

if (props.stepStatus == 1) {
  okHandler(1);
}
</script>

<template>
  <div class="hiddenImg" v-show="1">
    <img :src="key" v-for="(key, index) in hiddenImg" :key="index" alt="" />
  </div>
  <div class="btn-div">
    <button
      id="BackBtn"
      @click="setStep(props.stepStatus - 1, pageType)"
      v-if="
        props.stepStatus == 2 || props.stepStatus == 3 || props.stepStatus == 4
      "
    >
      {{ t("GameTrans.Back") }}
    </button>
    <button
      id="NextBtn"
      @click="setStep(3, pageType)"
      v-if="props.stepStatus == 2"
      class="nextBtn"
    >
      {{ t("GameTrans.Next") }}
    </button>
    <button
      id="OkBtn"
      @click="okHandler(4)"
      v-if="props.stepStatus == 3 && itemIndex.Mb != -1"
      class="nextBtn"
    >
      {{ t("GameTrans.Done") }}
    </button>
  </div>
  <img :src="imgPreview" alt="" id="imgPreview" v-if="imgPreview" />
  <div class="image-list-div" v-else>
    <img v-for="(key, index) in imgArr" :key="index" :src="key" alt="" />
  </div>
  <div class="home-div" v-if="props.stepStatus == 1">
    <div class="text">{{ t("GameTrans.EnterYourName") }}</div>
    <input type="text" v-model="name" maxlength="15" />
    <div class="text-notice">
      {{ t("GameTrans.NameMax") }}
      <!-- {{ t("GameTrans.TAC") }} -->
    </div>
    <button
      @click="
        setStep(2, 'edit');
        pageType = 'edit';
      "
      v-if="props.isEdit"
      :disabled="name == ''"
      class="edit-btn"
    >
      {{ t("GameTrans.Edit") }}
    </button>
    <button
      @click="
        setStep(2, 'create');
        pageType = 'create';
      "
      :disabled="name == ''"
    >
      {{ t("GameTrans.CreateNew") }}
    </button>
  </div>
  <div class="choose-box" v-if="props.stepStatus == 2">
    <div class="tab-div">
      <img
        class="tab"
        v-for="(key, index) in gameImageData"
        :key="index"
        :src="key.typeImg"
        :class="typeIndex == index ? 'active' : ''"
        @click="typeIndex = index"
        v-show="key.isShowIndex == 2"
      />
    </div>
    <div class="tab-choose-list">
      <img
        v-for="(key, index) in gameImageData[typeIndex].preview"
        :key="index"
        :src="key"
        :class="itemIndex[typeIndex] == index ? 'active' : ''"
        @click="ChangeItem(index)"
      />
    </div>
  </div>
  <div class="chooseBG-box" v-if="props.stepStatus == 3">
    <div class="content">{{ t("GameTrans.GearUpWith") }}</div>
    <img
      v-for="(key, index) in gameImageData.Mb.preview"
      :key="index"
      :src="key"
      :class="itemIndex.Mb == index ? 'active' : ''"
      @click="SetBg(index)"
      v-show="key != null"
    />
  </div>

  <div class="downloadBtn-div" v-if="props.stepStatus == 4">
    <p class="downloadBtnMb content">
      {{ t("GameTrans.LongPressToSaveThePicture") }}
    </p>
    <p class="downloadBtnPC content">{{ t("GameTrans.UseItContent") }}</p>
    <button class="downloadBtn downloadBtnPC" @click="downloadHandler">
      {{ t("GameTrans.Download") }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="32"
        height="28"
        viewBox="0 0 32 28"
        fill="none"
      >
        <path
          d="M28.9493 18.5806V25.0089H3.05067V18.5806H0V27.9999H32V18.5806H28.9493Z"
          fill=""
        />
        <path
          d="M16.0001 19.5568L22.7912 12.8914H17.529V0H14.4712V12.8914H9.20898L16.0001 19.5568Z"
          fill=""
        />
      </svg>
    </button>

    <p>{{ t("GameTrans.ShareYourAORUS") }}</p>
    <button class="downloadBtn" @click="isShowShareDiv = true">
      {{ t("GameTrans.Share") }}
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="30"
        height="28"
        viewBox="0 0 30 28"
        fill="none"
      >
        <path
          d="M25.007 19.9975C24.3789 19.9988 23.7599 20.1478 23.2001 20.4327C22.6403 20.7176 22.1555 21.1303 21.7848 21.6373L8.83018 15.1682C8.94643 14.7883 9.00447 14.393 9.00236 13.9958C9.00324 13.5986 8.94522 13.2035 8.83018 12.8233L21.7848 6.35417C22.3647 7.11927 23.2103 7.63922 24.1547 7.81139C25.0992 7.98356 26.0739 7.79545 26.8864 7.28418C27.699 6.77292 28.2904 5.97563 28.5439 5.04969C28.7974 4.12375 28.6946 3.13643 28.2558 2.28256C27.817 1.42869 27.0741 0.770299 26.1736 0.43736C25.2732 0.10442 24.2807 0.121115 23.3919 0.484125C22.5032 0.847136 21.7828 1.5301 21.373 2.39824C20.9631 3.26637 20.8936 4.2566 21.1781 5.1735L8.22344 11.6344C7.72537 10.9531 7.02462 10.4467 6.22139 10.1877C5.41817 9.92868 4.5536 9.93025 3.75133 10.1922C2.94907 10.4542 2.25019 10.9632 1.75462 11.6463C1.25906 12.3295 0.992188 13.1518 0.992188 13.9958C0.992188 14.8397 1.25906 15.6621 1.75462 16.3452C2.25019 17.0283 2.94907 17.5373 3.75133 17.7993C4.5536 18.0612 5.41817 18.0628 6.22139 17.8038C7.02462 17.5448 7.72537 17.0384 8.22344 16.3571L21.1781 22.8262C21.0618 23.2061 21.0038 23.6014 21.0059 23.9987C21.0059 24.79 21.2405 25.5636 21.6802 26.2216C22.1198 26.8796 22.7447 27.3924 23.4759 27.6953C24.207 27.9981 25.0115 28.0774 25.7876 27.923C26.5638 27.7686 27.2767 27.3875 27.8363 26.8279C28.3959 26.2684 28.7769 25.5554 28.9313 24.7793C29.0857 24.0031 29.0065 23.1986 28.7036 22.4675C28.4008 21.7364 27.888 21.1115 27.23 20.6718C26.572 20.2322 25.7984 19.9975 25.007 19.9975Z"
          fill=""
        />
      </svg>
    </button>
  </div>

  <div class="share-div-cover" v-if="isShowShareDiv">
    <div class="share-div">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="496"
        height="313"
        viewBox="0 0 496 313"
        fill="none"
      >
        <g filter="url(#filter0_b_5342_1666)">
          <path
            d="M495 312H1V23.0074L25.4897 1H166.776L179.523 20.8946H495V312Z"
            fill="#040404"
            fill-opacity="0.7"
          />
          <path
            d="M495 312H1V23.0074L25.4897 1H166.776L179.523 20.8946H495V312Z"
            stroke="#A0A0A0"
            stroke-width="1.3046"
          />
        </g>
        <defs>
          <filter
            id="filter0_b_5342_1666"
            x="-19.6523"
            y="-19.6523"
            width="535.305"
            height="352.305"
            filterUnits="userSpaceOnUse"
            color-interpolation-filters="sRGB"
          >
            <feFlood flood-opacity="0" result="BackgroundImageFix" />
            <feGaussianBlur in="BackgroundImageFix" stdDeviation="10" />
            <feComposite
              in2="SourceAlpha"
              operator="in"
              result="effect1_backgroundBlur_5342_1666"
            />
            <feBlend
              mode="normal"
              in="SourceGraphic"
              in2="effect1_backgroundBlur_5342_1666"
              result="shape"
            />
          </filter>
        </defs>
      </svg>
      <span class="closeShareDivBtn" @click="isShowShareDiv = false"></span>
      <label for="">{{ t("GameTrans.ShareYourAORUS") }}</label>
      <div>
        <a
          :href="
            'https://www.facebook.com/sharer/sharer.php?u=' +
            URLENCODED_URL +
            '&t=' +
            TITLE
          "
          onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"
          target="_blank"
          title="Share on Facebook"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="46"
              viewBox="0 0 22 46"
              fill="none"
            >
              <g clip-path="url(#clip0_5342_1686)">
                <path
                  d="M21.8239 8.42738H16.7768C15.0027 8.42738 14.6356 9.14259 14.6356 10.9306V15.2516H21.8239L21.1203 22.8507H14.605V45.5883H5.27564V22.9401H0.412109V15.2218H5.27564V9.14259C5.27564 3.45073 8.42622 0.470703 15.3392 0.470703H21.7933L21.8239 8.42738Z"
                  fill=""
                />
              </g>
              <defs>
                <clipPath id="clip0_5342_1686">
                  <rect
                    width="21.4118"
                    height="45.1176"
                    fill=""
                    transform="translate(0.412109 0.470703)"
                  />
                </clipPath>
              </defs>
            </svg>
          </span>
        </a>
        <div>{{ t("GameTrans.Facebook") }}</div>
      </div>
      <div>
        <a
          :href="
            'https://twitter.com/share?url=' +
            URLENCODED_URL +
            '&via=' +
            TWITTER_HANDLE
          "
          onclick="javascript:window.open(this.href, '', 'menubar=no,toolbar=no,resizable=yes,scrollbars=yes,height=600,width=600');return false;"
          target="_blank"
          title="Share on Twitter"
        >
          <span>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="38"
              viewBox="0 0 40 38"
              fill="none"
            >
              <path
                d="M4.34836 1.00035L17.7597 19.2016L4.26367 34H7.30109L19.1169 21.0438L28.6619 34H38.9984L24.8342 14.775L37.3962 1H34.3605L23.4771 12.9345L14.6848 1.00035H4.34836ZM8.81442 3.27128H13.5637L34.5341 31.7287H29.7841L8.81442 3.27128Z"
                fill=""
              />
            </svg>
          </span>
        </a>
        <div>{{ t("GameTrans.Twitter") }}</div>
      </div>
      <!-- <div>
        <span @click="copyText">
          <img src="@/assets/images/share.png" alt="" />
        </span>
        <div>{{ t("GameTrans.Share") }}</div>
      </div> -->
    </div>
  </div>
</template>

<style lang="scss" scoped>
.hiddenImg {
  position: absolute;
  width: 100%;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
  z-index: -1;
}
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
    width: 110px;
    height: 50px;
    background: #000;
    border: 1px solid #fff;
    margin: 50px 20px;
    color: #fff;
    font-size: 26px;
    &:hover {
      background: #fff;
      color: #000;
    }
    &.nextBtn {
      background: #ff6400;
      border: 1px solid #ff6400;
      &:hover {
        background: #fff;
        color: #ff6400;
        border: 1px solid #fff;
      }
    }
  }
}
#imgPreview {
  position: relative;
  margin: 0 auto;
  display: block;
  // width: calc(100% - 50px);
  width: 100%;
  aspect-ratio: 1 / 1;
}
.image-list-div {
  position: relative;
  margin: 0 auto;
  // width: calc(100% - 50px);
  width: 100%;
  aspect-ratio: 1 / 1;
  background: rgba(0, 0, 0, 1);
  img {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: auto;
  }
}

.home-div {
  position: relative;
  text-align: center;
  font-family: "Titillium", sans-serif;

  .text {
    // margin-top: 30px;
    color: #fff;
    font-size: 22px;
    font-family: "Titillium", sans-serif;
  }
  .text-notice {
    margin-top: 17px;
    color: #acacac;
    font-size: 18px;
    font-family: "Titillium", sans-serif;
  }
  input {
    position: relative;
    width: 80%;
    height: 50px;
    margin-top: 10px;
    background: #000;
    color: #fff;
    border: 2px solid #fff;
    text-align: center;
    font-size: 20px;
  }
  button {
    position: relative;
    margin: 40px calc(50% - 110px) 0 calc(50% - 110px);
    border: 0;
    // width: calc(80% + 4px);
    width: 220px;
    height: 59px;
    background: #ff6400;
    color: #fff;
    font-size: 26px;
    clip-path: polygon(
      10px 0%,
      100% 0,
      100% calc(100% - 10px),
      calc(100% - 10px) 100%,
      0 100%,
      0 10px
    );
    &:disabled {
      opacity: 0.5;
    }
    &:hover {
      background: #fff;
      color: #ff6400;
      border: 1px solid #fff;
    }
    &.edit-btn {
      margin: 50px 30px 0 30px;
      background: #838383;
      &:hover {
        background: #fff;
        color: #ff6400;
      }
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
    // background: #999;
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
      cursor: pointer;
      &.active {
        background: #ff6400;
      }
    }
  }
  .tab-choose-list {
    // background: #333;
    padding: 10px;
    width: calc(100% - 20px);
    min-height: 300px;
    img {
      position: relative;
      display: inline-block;
      vertical-align: top;
      width: calc((100% - 104px) / 4);
      aspect-ratio: 1 / 1;
      background: #d9d9d9;
      margin: 12px;
      border: 2px solid rgba(0, 0, 0, 0);
      cursor: pointer;
      // border-radius: 50%;
      &.active {
        background: #ff6400;
      }
      &:hover {
        border: 2px solid #ff6400;
      }
    }
  }
}

.chooseBG-box {
  position: relative;
  padding: 10px;
  width: calc(100% - 20px);
  min-height: 300px;
  > div {
    color: #fff;
    text-align: center;
    font-size: 22px;
    padding: 30px 10px 60px 10px;
    font-family: "Titillium", "Noto Sans TC", sans-serif;
  }
  > img {
    position: relative;
    display: inline-block;
    vertical-align: top;
    width: calc((100% - 94px) / 4);
    aspect-ratio: 1 / 1;
    background: #d9d9d9;
    margin: 12px;
    border: 2px solid rgba(0, 0, 0, 0);
    &.active {
      background: #ff6400;
    }
    &:hover {
      border: 2px solid #ff6400;
    }
  }
}

.downloadBtn-div {
  position: relative;
  width: 100%;
  text-align: center;
  padding-top: 50px;
  font-family: "Titillium", "Noto Sans TC", sans-serif;
  p {
    color: #fff;
    font-size: 20px;
    margin-top: 50px;
    margin-bottom: 0px;
    &.content {
      margin-top: 0px;
      margin-bottom: 38px;
    }
  }
  .downloadBtn {
    position: relative;
    display: inline-block;
    margin-top: 10px;
    border: 0;
    width: 218px;
    height: 59px;
    background: #ff6400;
    color: #fff;
    font-size: 26px;
    clip-path: polygon(
      10px 0%,
      100% 0,
      100% calc(100% - 10px),
      calc(100% - 10px) 100%,
      0 100%,
      0 10px
    );
    cursor: pointer;
    svg {
      margin-left: 20px;
      display: inline-block;
      vertical-align: middle;
      fill: #fff;
    }
    &:hover{
      background: #fff;
      color: #ff6400;
      svg{
        fill: #ff6400;
      }
    }
  }
}

.share-div-cover {
  position: fixed;
  z-index: 9999;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100%;
  max-width: 500px;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  .share-div {
    > svg {
      position: absolute;
      z-index: 10px;
      left: 0px;
      top: -10px;
      width: 100%;
      padding: 0;
    }

    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: calc(100% - 30px);
    max-width: 494px;
    // min-height: 311px;
    aspect-ratio: 494 / 311;

    fill: rgba(4, 4, 4, 0.7);
    stroke-width: 1px;
    stroke: #a0a0a0;
    // box-shadow: 0 0 10px #333;
    line-height: 300px;

    clip-path: polygon(
      calc(33% + 4px) 0%,
      calc(33% + 16px) 18px,
      100% 18px,
      100% 100%,
      0 100%,
      0 20px,
      23px 0
    );
    backdrop-filter: blur(10px);
    text-align: center;
    font-family: "Titillium", "Noto Sans TC", sans-serif;
    > .closeShareDivBtn {
      position: absolute;
      right: 10px;
      top: 25px;
      width: 30px;
      height: 30px;
      border-radius: 50%;
      transition: 0.3s ease-in-out;
      cursor: pointer;
      &::before {
        content: "";
        position: absolute;
        width: 70%;
        height: 3px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(45deg);
        background: #ff6400;
      }
      &::after {
        content: "";
        position: absolute;
        width: 70%;
        height: 3px;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%) rotate(-45deg);
        background: #ff6400;
      }
      &:hover {
        transform: rotate(90deg);
      }
    }
    > label {
      position: absolute;
      line-height: 18px;
      width: 100%;
      top: 30px;
      left: 50%;
      transform: translateX(-50%);
      font-size: 18px;
      color: #fff;
      display: none;
    }
    > div {
      position: relative;
      display: inline-block;
      vertical-align: middle;
      line-height: 18px;
      span {
        position: relative;
        display: inline-block;
        vertical-align: middle;
        margin: 0 32px;
        width: 65px;
        height: 65px;
        border-radius: 50%;
        background: #ff6400;
        // border: 2px solid #ffffff;
        line-height: 65px;
        color: #fff;
        svg {
          stroke-width: 0px;
          display: inline-block;
          vertical-align: middle;
          fill: #fff;
        }
        img {
          width: 100%;
          aspect-ratio: 1 / 1;
          overflow: hidden;
          object-fit: cover;
          object-position: center center;
        }
        &:hover {
          background: #fff;
          svg {
            fill: #ff6400;
          }
        }
      }
      div {
        position: absolute;
        line-height: auto;
        top: 80px;
        left: 50%;
        transform: translateX(-50%);
        font-size: 14px;
        color: #fff;
      }
    }
  }
}
.downloadBtnMb {
  display: none;
}
/* 使用設備類型判斷是手機 */
@media only screen and (max-device-width: 767px) and (max-device-height: 1023px) {
  /* 在這裡放置手機裝置的 CSS 樣式 */
  .downloadBtnPC {
    display: none !important;
  }
  .downloadBtnMb {
    display: inline !important;
  }
}
</style>
