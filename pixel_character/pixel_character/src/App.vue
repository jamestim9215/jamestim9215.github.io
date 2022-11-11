<script setup>
import { ref } from "vue";
import { color } from "./assets/color";

import html2canvas from 'html2canvas';

import Man from './assets/Man.json';
import Woman from './assets/Woman.json';
import Boxing from './assets/Boxing.json';

const characterName = ref('Character');
const characterTemplateList = ref([Man,Woman,Boxing])

const colorKey = ref('#000000');
const colorList = ref([...color]);
const colorHistory = ref(["#000000","#FFFFFF"])


const designCount = ref(1);


const designHeadData = ref([]);
const designBodyData = ref([]);
const designHandData = ref([]);
const designFootData = ref([]);

const generateBtnDisabled = ref(false)
const outputBtnDisabled = ref(true)
const runBtnDisabled = ref(true)

let timeOut;

const chooseColor  = (color) => {
  colorKey.value =  color;

  if(colorHistory.value.indexOf(color)==-1  && colorHistory.value.length<8){
    colorHistory.value.unshift(color);
  }else if(colorHistory.value.indexOf(color)==-1  && colorHistory.value.length==8){
    colorHistory.value.splice(-1,1);
    colorHistory.value.unshift(color);
  }else if(colorHistory.value.indexOf(color)!=-1){
    colorHistory.value.splice(colorHistory.value.indexOf(color), 1);
    colorHistory.value.unshift(color);
  }
}

const removeImageBg = (img) => {
  //背景颜色 白色
  const rgba = [255, 255, 255, 255];
  // 容差大小
  const tolerance = 30;

  var imgData = null;
  const [r0, g0, b0, a0] = rgba;
  var r, g, b, a;
  const canvas = document.createElement('canvas');
  const context = canvas.getContext('2d');
  const w = img.width;
  const h = img.height;


  canvas.width = w;
  canvas.height = h;
  context.drawImage(img, 0, 0);
  imgData = context.getImageData(0, 0, w, h);

  for (let i = 0; i < imgData.data.length; i += 4) {
  r = imgData.data[i];
  g = imgData.data[i + 1];
  b = imgData.data[i + 2];
  a = imgData.data[i + 3];
  const t = Math.sqrt((r - r0) ** 2 + (g - g0) ** 2 + (b - b0) ** 2 + (a - a0) ** 2);
  if (t <= tolerance) {
  imgData.data[i] = 0;
  imgData.data[i + 1] = 0;
  imgData.data[i + 2] = 0;
  imgData.data[i + 3] = 0;
  }
  }
  context.putImageData(imgData, 0, 0);
  const newBase64 = canvas.toDataURL('image/png');
  img.src = newBase64;
}

const transImg = () => {
  if(timeOut) clearTimeout(timeOut);
  outputBtnDisabled.value = true;
  runBtnDisabled.value = true;

  document.getElementById('headImg')?document.getElementById('headImg').remove():'';
  document.getElementById('bodyImg')?document.getElementById('bodyImg').remove():'';
  document.getElementById('handLImg')?document.getElementById('handLImg').remove():'';
  document.getElementById('handRImg')?document.getElementById('handRImg').remove():'';
  document.getElementById('footLImg')?document.getElementById('footLImg').remove():'';
  document.getElementById('footRImg')?document.getElementById('footRImg').remove():'';

  HtmltoCanvas('footR');
  HtmltoCanvas('footL');
  HtmltoCanvas('handR');
  HtmltoCanvas('body');
  HtmltoCanvas('handL');
  HtmltoCanvas('head');

  setTimeout(()=>{
    outputBtnDisabled.value = false;
  },500)
}

const HtmltoCanvas = (type) => {
  let target , imgName;
  switch(type){
    case 'head' : target = document.getElementById('head'); imgName = 'headImg'; break;
    case 'body' : target = document.getElementById('body'); imgName = 'bodyImg'; break;
    case 'handL' : target = document.getElementById('hand'); imgName = 'handLImg'; break;
    case 'handR' : target = document.getElementById('hand'); imgName = 'handRImg'; break;
    case 'footL' : target = document.getElementById('foot'); imgName = 'footLImg'; break;
    case 'footR' : target = document.getElementById('foot'); imgName = 'footRImg'; break;
  }
  let output = document.getElementById('showBox');
  html2canvas(target,{
    backgroundColor : null,
    imageTimeout: 0
  }).then(function(canvas) {
    var img = new Image();
    img.id = imgName
    img.classList.add(imgName);
    img.src = canvas.toDataURL("image/png");
    output.appendChild(img);
    setTimeout(()=>{
      removeImageBg(document.getElementById(imgName))
      img.width = 200;
    },50)
  });
}

const initDraw = () => {

  if(designHeadData.value.length==0){

    let _index = 1;
    for (var _x = 1; _x <= designCount.value; _x++) {
      for (var _y = 1; _y <= designCount.value; _y++) {
        let _data = {
          id: _index,
          x: _x,
          y: _y,
          color: "",
        };
        designHeadData.value.push(_data);
        designBodyData.value.push(_data);
        designHandData.value.push(_data);
        designFootData.value.push(_data);
        _index++;
      }
    }
    
  }

  designHeadData.value = JSON.parse(JSON.stringify(designHeadData.value))
  designBodyData.value = JSON.parse(JSON.stringify(designBodyData.value))
  designHandData.value = JSON.parse(JSON.stringify(designHandData.value))
  designFootData.value = JSON.parse(JSON.stringify(designFootData.value))
  
  // setTimeout(()=>{
  //   transImg();
  // },500);
};

const draw = (x, y, target) => {
  if (target === "head") {
    if (
      designHeadData.value[(x - 1) * designCount.value + y - 1].color === colorKey.value
    ) {
      designHeadData.value[(x - 1) * designCount.value + y - 1].color = "";
    } else {
      designHeadData.value[(x - 1) * designCount.value + y - 1].color =
        colorKey.value;
    }
  }
  if (target === "body") {
    if (
      designBodyData.value[(x - 1) * designCount.value + y - 1].color ===
      colorKey.value
    ) {
      designBodyData.value[(x - 1) * designCount.value + y - 1].color = "";
    } else {
      designBodyData.value[(x - 1) * designCount.value + y - 1].color =
        colorKey.value;
    }
  }
  if (target === "hand") {
    if (
      designHandData.value[(x - 1) * designCount.value + y - 1].color ===
      colorKey.value
    ) {
      designHandData.value[(x - 1) * designCount.value + y - 1].color = "";
    } else {
      designHandData.value[(x - 1) * designCount.value + y - 1].color =
        colorKey.value;
    }
  }
  if (target === "foot") {
    if (
      designFootData.value[(x - 1) * designCount.value + y - 1].color ===
      colorKey.value
    ) {
      designFootData.value[(x - 1) * designCount.value + y - 1].color = "";
    } else {
      designFootData.value[(x - 1) * designCount.value + y - 1].color =
        colorKey.value;
    }
  }


};


const changeDesignCount = () =>{
  designHeadData.value = [];
  designBodyData.value = [];
  designHandData.value = [];
  designFootData.value = [];
  initDraw();
}

const initCharacter = (index) => {
  designHeadData.value = [];
  designBodyData.value = [];
  designHandData.value = [];
  designFootData.value = [];

  characterName.value = characterTemplateList.value[index].name;
  designCount.value = Math.sqrt(characterTemplateList.value[index].head.length);
  designHeadData.value = characterTemplateList.value[index].head;
  designBodyData.value = characterTemplateList.value[index].body;
  designHandData.value = characterTemplateList.value[index].hand;
  designFootData.value = characterTemplateList.value[index].foot;
  initDraw();
}

initCharacter(0);

const output = () => {
  let headImg = document.getElementById('headImg');
  if(!headImg) return;
  for(var i=1; i<=12; i++){
    let obj = document.getElementById("showBox");
    let copyObj = obj.cloneNode(true);
    document.getElementById('output'+i).innerHTML='';
    document.getElementById('output'+i).appendChild(copyObj);
  }

  
  runBtnDisabled.value = false;


}

const HtmlToCanvasRun = (index) => {
    let target = document.getElementById('output'+index);
    let output = document.getElementById('runBox');

    html2canvas(target,{
      backgroundColor : null,
      imageTimeout: 0
    }).then(function(canvas) {
      var img = new Image();
      img.id = 'runImg'+index;
      img.classList.add('runImg'+index);
      img.src = canvas.toDataURL("image/png");
      output.appendChild(img);
      setTimeout(()=>{
        removeImageBg(document.getElementById('runImg'+index))
        img.style.opacity = 0;
        if(index == 4) img.style.opacity = 1;
      },50)
    });
}

const runAnimate = () => {
  if(timeOut) clearTimeout(timeOut);
  let num = 3;
  let isAdd = 1;

  timeOut = setInterval(() => {
    num = num + isAdd;

    document.getElementById('runImg1').style.opacity = 0;
    document.getElementById('runImg2').style.opacity = 0;
    document.getElementById('runImg3').style.opacity = 0;
    document.getElementById('runImg4').style.opacity = 0;
    document.getElementById('runImg5').style.opacity = 0;
    document.getElementById('runImg6').style.opacity = 0;
    document.getElementById('runImg7').style.opacity = 0;

    document.getElementById('runImg'+num).style.opacity = 1;
    if(num>=7){
      isAdd = -1;
    }
    if(num<=1){
      isAdd = 1;
    }
  }, 150)
}
const runFun = () => {
  let output = document.getElementById('runBox');
  output.innerHTML = '';

  HtmlToCanvasRun(1) 
  setTimeout(() => { HtmlToCanvasRun(2) }, 50);
  setTimeout(() => { HtmlToCanvasRun(3) }, 100);
  setTimeout(() => { HtmlToCanvasRun(4) }, 150);
  setTimeout(() => { HtmlToCanvasRun(5) }, 200);
  setTimeout(() => { HtmlToCanvasRun(6) }, 250);
  setTimeout(() => { HtmlToCanvasRun(7) }, 300);


  setTimeout(() => {
    runAnimate();
  }, 1000);
}

const rotateCharacter = () => {
  let character = document.getElementById('runBox');
  if(character.style.transform == ""){
    character.style.transform = "rotateY(180deg)";
  }else{
    character.style.transform = "";
  }
}

const outputAssets = () => {
  let target = document.getElementById('assetImg');

    html2canvas(target,{
      backgroundColor : null,
      imageTimeout: 0
    }).then(function(canvas) {

      
      var img = new Image();
      img.id = 'download';
      img.classList.add('download');
      img.src = canvas.toDataURL("image/png").replace("image/png", "image/octet-stream");;
      document.getElementById('downloadImg').appendChild(img);
      setTimeout(()=>{
        removeImageBg(document.getElementById('download'))
        var a = document.createElement('a');
        a.href = img.src;
        a.download = characterName.value + '.png';
        a.click();
        document.getElementById('downloadImg').innerHTML = '';
      },50)
    });
}

const getCharacterJson = () => {
  let content = {
    "name": characterName.value,
    "head": designHeadData.value,
    "body": designBodyData.value,
    "hand": designHandData.value,
    "foot": designFootData.value,
  }


  // 建立隱藏的可下載連結
    var eleLink = document.createElement('a');
    eleLink.download = characterName.value + '.json';
    eleLink.style.display = 'none';
    // 字元內容轉變成blob地址
    var blob = new Blob([JSON.stringify(content)]);
    eleLink.href = URL.createObjectURL(blob);
    // 觸發點選
    document.body.appendChild(eleLink);
    eleLink.click();
    // 然後移除
    document.body.removeChild(eleLink);
}

const getCharacterJsonText = () => {
  let content = {
    "name": characterName.value,
    "head": designHeadData.value,
    "body": designBodyData.value,
    "hand": designHandData.value,
    "foot": designFootData.value,
  }
  return JSON.stringify(content)
}



</script>

<template>
  <div class="main-div">
    <h1 class="title">Pixel character generator</h1>
    <div class="setting-div">
      <b>Color</b>
      <div>
        <div id="color">
          <div>
            <div v-for="(key,index) in colorHistory" :key="index"
            :style="'background: ' + key"
            :class="colorKey == key ? 'active' : ''"
            @click="chooseColor(key)"
              :title="key"
            >{{key}}</div>
          </div>
          <div>
            <div
              v-for="(key, index) in colorList"
              :key="index"
              :style="'background: ' + key.color"
              :class="colorKey == key.color ? 'active' : ''"
              @click="chooseColor(key.color)"
              :title="key.color"
            >
              {{ index }}
            </div>
          </div>
        </div>
      </div>

      <div>
        <!-- <textarea name="" id="" rows="10" :value="JSON.stringify(designHeadData)"></textarea> -->
        <!-- <textarea name="" id="" rows="10" :value="JSON.stringify(designBodyData)"></textarea> -->
        <!-- <textarea name="" id="" rows="10" :value="JSON.stringify(designHandData)"></textarea> -->
        <!-- <textarea name="" id="" rows="10" :value="JSON.stringify(designFootData)"></textarea> -->
      </div>
      <br />

      <b>Character Template</b>
      <br />
      <br />
      <div>
        <button v-for="(key,index) in characterTemplateList" @click="initCharacter(index)">{{key.name}}</button>
      </div>
      <br />
      <b>Setting</b>
      <br />
      <br />
      <div>
        Character Name<br />
        <input type="text" style="width: 90%" v-model="characterName">
      </div><br />
      <div>
        <textarea name="" id="" style="width: 90%" rows="1" :value="getCharacterJsonText()"></textarea>
        <button @click="getCharacterJson()">Download Character Data</button>
      </div>
      <br />
      <b>Other Setting</b>
      <br />
      <br />
      <div>
        Pixel
        <select type="number" v-model="designCount" @change="changeDesignCount">
          <option :value="key" v-for="key in 16" v-show="key>4">{{key}}</option>
        </select> x {{designCount}}
      </div>
      <br />
      <div>
        <button @click="changeDesignCount">Clear Design</button>
      </div>
    </div>
    <div class="design-div">
      <div>
        <div>
          Head
          <div id="head"
              v-if="designHeadData.length > 0"
            >
            <div
              class="row"
              :style="'height: ' + 100 / designCount + '%;'"
              v-for="index_x in designCount"
              :key="'head_' + index_x"
            >
              <span
                v-for="index_y in designCount"
                :key="'head_' + index_y"
                @click="draw(index_x, index_y, 'head')"
                :style="
                  'background:' + designHeadData[(index_x - 1) * designCount + index_y - 1].color
                "
              >
              </span>
            </div>
          </div>
        </div>
        <div>
          Body
          <div id="body">
            <div
              class="row"
              :style="'height: ' + 100 / designCount + '%;'"
              v-for="index_x in designCount"
              :key="'body_' + index_x"
              v-if="designBodyData.length > 0"
            >
              <span v-for="index_y in designCount" :key="'body_' + index_y" 
                @click="draw(index_x, index_y, 'body')"
                :style="
                  'background:' + designBodyData[(index_x - 1) * designCount + index_y - 1].color
                ">
              </span>
            </div>
          </div>
        </div>
        <div>
          Hand
          <div id="hand">
            <div
              class="row"
              :style="'height: ' + 100 / designCount + '%;'"
              v-for="index_x in designCount"
              :key="'hand_' + index_x"
              v-if="designHandData.length > 0"
            >
              <span
                v-for="index_y in designCount"
                :key="'hand_' + index_y"
                @click="draw(index_x, index_y, 'hand')"
                :style="
                  'background:' +designHandData[(index_x - 1) * designCount + index_y - 1]
                    .color
                "
              ></span>
            </div>
          </div>
        </div>
        <div>
          Foot
          <div id="foot">
            <div
              class="row"
              :style="'height: ' + 100 / designCount + '%;'"
              v-for="index_x in designCount"
              :key="'foot_' + index_x"
              v-if="designFootData.length > 0"
            >
              <span
                v-for="index_y in designCount"
                :key="'foot_' + index_y"
                @click="draw(index_x, index_y, 'foot')"
                :style="
                  'background:' +designFootData[(index_x - 1) * designCount + index_y - 1]
                    .color
                "
              ></span>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="review-div">
      <div>
        <div id="show">
          <button id="generateBtn" @click="transImg" :disabled="generateBtnDisabled">1. 角色預覽</button>
          <div id="showBox"></div>
        </div>
      </div>
      <div>
        
        <div id="runBox">
          
        </div>
        <div>
          <button id="runBtn" @click="runFun" :disabled="runBtnDisabled">3. 預覽動畫</button>
          <button id="rotateCharacterBtn" @click="rotateCharacter" :disabled="runBtnDisabled">左右翻轉</button>
        </div>
      </div>
    </div>
    <div class="prview-div">
      Prview <br>
      <button id="outputBtn" @click="output" :disabled="outputBtnDisabled">2. 產生動作群組</button>
      <button @click="outputAssets" :disabled="runBtnDisabled">匯出 動作群組</button>
      <div id="assetImg" v-show="!runBtnDisabled">
        <div :id="'output'+num" v-for="num in 12"></div>
      </div>
    </div>
    <div id="downloadImg"></div>
  </div>
</template>

<style lang="scss" scoped>
.main-div {
  position: relative;
  margin: 0 auto;
  max-width: 1600px;
  width: calc(100% - 20px);
  padding: 10px;
  display: flex;
  flex-wrap: wrap;

  .title {
    flex: 0 0 100%;
    font-weight: 300;
    text-transform: uppercase;
  }

  .design-div {
    position: relative;
    width: 700px;
    min-height: 700px;
    display: flex;
    > div {
      display: flex;
      flex-wrap: wrap;
      &:nth-child(1) {
        flex: 0 0 700px;
        > div {
          flex: 0 0 calc(50% - 20px);
          // border: 1px solid #fff;
          padding: 10px;
          > div {
            position: relative;
            margin: 10px auto;
            width: 300px;
            height: 300px;
            border: 3px solid #eee;
            background: #eee;
            > .row {
              position: relative;
              display: flex;
              width: 100%;
              > span {
                width: 100%;
                height: calc(100% - 2px);
                background: #ffffff;
                margin: 1px;
              }
            }
          }
        }
      }
    }
  }
  .review-div {
    position: relative;
    width: calc(100% - 700px - 300px);
    min-height: 400px;
    // background: #ff0;
    #show {
      position: absolute;
      top: 0;
      width: 300px;
      height: 455px;
      > div {
        margin-top: 10px;
        width: calc(100% - 30px);
        height: calc(100% - 30px);
        border: 3px solid #ccc;
        background: #ffffff;
        overflow: hidden;
        
      }
    }
  }
  .setting-div {
    position: relative;
    width: calc(100% - 700px - 600px);
    min-height: 400px;
    #color {
      margin-top: 10px;
      position: relative;
      width: 300px;
      > div {
        margin-top: 0px;
        width: calc(100% - 30px);
        max-height: 300px;
        border: 3px solid #ccc;
        background: #ccc;
        overflow: hidden;
        overflow-y: auto;
        > div {
          position: relative;
          display: inline-block;
          width: calc(100% / 8 - 2px);
          height: 18px;
          margin: 0;
          color: transparent;
          border: 1px solid #ccc;
          &:hover {
            border: 1px solid #333;
            cursor: crosshair;
          }
          &.active {
            border: 1px solid #f00;
            &::after {
              content: "";
              position: absolute;
              width: 0;
              height: 0;
              top: 0;
              left: calc(50% - 15px);
              border-bottom: 3px solid rgba(0, 0, 0, 0);
              border-top: 3px solid #f00;
              border-left: 15px solid rgba(0, 0, 0, 0);
              border-right: 15px solid rgba(0, 0, 0, 0);
            }
          }
        }
      }
    }
  }

}
</style>
