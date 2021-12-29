<template>
  <div id="app">
    <div class="window-box-cover" v-if="windowOpen">
      <div class="window-box">
        <h3 style="margin-bottom: 15px">嗨! 請選擇你要找的車位種類!</h3>
        <select name="" id="initSelectType">
          <option
            :value="key.type"
            v-for="(key, index) in carType"
            :key="index"
          >
            {{ key.name }}
          </option>
        </select>
        <button class="btn" @click="initCarTypeChange">確定</button>
      </div>
    </div>

    <div class="window-box-cover" v-if="windowMessageOpen">
      <div class="window-box">
        <h3 style="margin-bottom: 15px; text-align: left">
          嗨!歡迎使用 <b style="color: #2ee7d6">我到底能停哪?</b> <br /><br />

          目前資料處於 "<b style="color: #2ee7d6">測試階段</b>" ，
          除了有圖片的地點， 其餘地點皆為"<b style="color: #2ee7d6">僅供參考</b
          >"， 歡迎車友們可以使用<b
            ><a
              href="https://forms.gle/iJCyfqVtpL35WtZM7"
              style="color: #2ee7d6"
              target="_blank"
              >錯誤資訊回報</a
            ></b
          >或是<b
            ><a
              href="https://forms.gle/siWoYMo9PtxAk38w9"
              style="color: #2ee7d6"
              target="_blank"
              >提供停車場資訊</a
            ></b
          >表單， 有了大家的幫忙! 以後就能方便車友們查詢到正確的地點停車~<br /><br />

          p.s.<br />
          目前規劃 此系統免費提供給大家使用!!<br />
          <!-- 如果覺得不錯，可以請我喝杯<a href="https://paypal.me/jamestim9215?country.x=TW&locale.x=zh_TW" style="color:#2ee7d6" target="_blank">咖啡</a>‧<br><br> -->
          <!-- 如果覺得不錯，可以請我喝杯<a href="https://payment.opay.tw/Broadcaster/Donate/C9169C214B7D9633A239CBB7D3CB9251" style="color:#2ee7d6" target="_blank">咖啡</a>‧<br><br> -->

          

          謝謝各位!
        </h3>

        <button class="btn" @click="windowMessageOpen = false">確定</button>
      </div>
    </div>
    <div class="window-box-cover" v-if="windowFAQOpen">
      <div class="window-box">
        <h3 style="margin-bottom: 15px; text-align: left">如何加入手機桌面?</h3>
        <br />
        <h4 style="text-align: left">
          p.s.<br />以下以IOS為範例 安卓系統大同小異 <br /><br />

          Step 1. 使用 Safari 開啟網站 並點擊下方分享按鈕
          <img width="100%" src="@/assets/images/ios_01.jpg" alt="" />
          <br />
          Step 2. 加入主畫面
          <img width="100%" src="@/assets/images/ios_02.jpg" alt="" />
          <br />
          Step 3. 儲存
          <img width="100%" src="@/assets/images/ios_03.jpg" alt="" />
          <br />
          Step 4. 即可在桌面開啟 並無網頁狀態列
          <img width="100%" src="@/assets/images/ios_04.jpg" alt="" />
          <br />
        </h4>
        <br />
        <button class="btn" @click="windowFAQOpen = false">確定</button>
      </div>
    </div>

    <div class="appTitle">
      <h1>我到底能停哪?</h1>
    </div>
    <button
      class="btn btnGetLngLat"
      @click="
        mapOptions.getLngLat
          ? (mapOptions.getLngLat = false)
          : (mapOptions.getLngLat = true)
      "
      :class="mapOptions.getLngLat ? 'active' : ''"
    >
      {{ mapOptions.getLngLat ? "結束取得座標" : "手動取得座標" }}
    </button>
    <button
      class="btn btnFAQ"
      @click="windowFAQOpen ? (windowFAQOpen = false) : (windowFAQOpen = true)"
    >
      如何加入手機桌面?
    </button>

    <!-- 設定 -->
    <div class="mainInfoBox" :class="menuActive ? 'active' : ''">
      <div
        class="menuBtn"
        @click="menuActive ? (menuActive = false) : (menuActive = true)"
        :class="menuActive ? 'active' : ''"
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h3 style="padding: 0 25px 0 0">設定</h3>
      <h5>車種</h5>
      <select
        style="width: 100%; margin-bottom: 10px"
        :value="mapOptions.carTypeSelected"
        @change="carTypeChange"
      >
        <option :value="key.type" v-for="(key, index) in carType" :key="index">
          {{ key.name }}
        </option>
      </select>

      <h5>區域</h5>
      <select
        style="width: calc(50% - 5px); margin-bottom: 10px"
        :value="mapOptions.citySelected"
        v-model="mapOptions.citySelected"
        @change="mapOptions.cityAreaSelected = ''"
      >
        <option :value="index" v-for="(key, index) in areaData" :key="index">
          {{ index }}
        </option>
      </select>
      <select
        style="width: calc(50% - 5px); margin-right: 0"
        :value="mapOptions.cityAreaSelected"
        v-model="mapOptions.cityAreaSelected"
      >
        <option value="">全選</option>
        <option
          :value="key"
          v-for="(key, index) in areaData[mapOptions.citySelected]"
          :key="index"
        >
          {{ key }}
        </option>
      </select>

      <h5>地圖樣式</h5>
      <select
        style="width: 100%; margin-bottom: 0px"
        :value="mapOptions.mapStylesSelected"
        v-model="mapOptions.mapStylesSelected"
      >
        <option
          :value="key.value"
          v-for="(key, index) in mapStyle"
          :key="index"
        >
          {{ key.name }}
        </option>
      </select>

      <h5 style="margin-top: 10px; margin-bottom: 10px">回報</h5>
      <a href="https://forms.gle/siWoYMo9PtxAk38w9" target="_blank"
        ><button class="btn" style="font-size: 10px; margin: 0 5px 5px 0">
          提供停車場資訊
        </button></a
      >
      <a href="https://forms.gle/iJCyfqVtpL35WtZM7" target="_blank"
        ><button class="btn" style="font-size: 10px; margin: 0 5px 5px 0">
          錯誤資訊回報
        </button></a
      >

      <!-- <a href="https://paypal.me/jamestim9215?country.x=TW&locale.x=zh_TW" target="_blank"><button class="btn" style="font-size: 10px">請我喝杯咖啡</button></a> -->
      <!-- <a href="https://payment.opay.tw/Broadcaster/Donate/C9169C214B7D9633A239CBB7D3CB9251" style="color:#2ee7d6" target="_blank"><button class="btn" style="font-size: 10px">請我喝杯咖啡</button></a> -->
     

      <ins
        class="adsbygoogle"
        style="display: block"
        data-ad-format="fluid"
        data-ad-layout-key="-fb+5w+4e-db+86"
        data-ad-client="ca-pub-6596839701234097"
        data-ad-slot="5429225032"
      ></ins>
    </div>

    <!-- 停車場資訊 -->
    <div
      class="mainInfoBox mainInfoBox2"
      id="mainInfoBox2"
      :class="infoActive ? 'active' : ''"
    >
      <div
        class="menuBtn"
        @click="infoActive = false"
        :style="infoActive ? '' : 'opacity: 0'"
        :class="infoActive ? 'active' : ''"
      >
        <div></div>
        <div></div>
        <div></div>
      </div>
      <h3 id="parkingLotTitle" style="padding: 0 25px 0 0"></h3>
      <div>
        地址:
        <div id="parkingLotAddress"></div>
      </div>
      <div>
        營業時間:
        <div id="parkingLotBusinessHours"></div>
      </div>
      <div><div id="parkingLotSomeInfo"></div></div>
      <div id="parkingLotInfo"></div>
      <br />
      <ins
        class="adsbygoogle"
        style="display: block; text-align: center"
        data-ad-layout="in-article"
        data-ad-format="fluid"
        data-ad-client="ca-pub-6596839701234097"
        data-ad-slot="6570916319"
      ></ins>
    </div>

    <pre id="coordinates" class="coordinates"></pre>

    <MapBox
      :carType="mapOptions.carTypeSelected"
      :getLngLat="mapOptions.getLngLat"
      :city="mapOptions.citySelected"
      :cityArea="mapOptions.cityAreaSelected"
      :mapStylesSelected="mapOptions.mapStylesSelected"
      @parkingInfo="onSetParkingInfo"
      @userCityArea="onSetUserCityArea"
    />
  </div>
</template>

<script>
import MapBox from "./components/MapBox.vue";
import "@/assets/css/style.css";
import AreaData from "@/assets/json/area_data.json";
// import axios from 'axios';

export default {
  name: "App",
  components: {
    MapBox,
  },
  data() {
    return {
      windowFAQOpen: false,

      windowOpen: false,
      windowMessageOpen: true,
      menuActive: false,
      infoActive: false,

      areaData: AreaData,
      carType: [
        { type: 1, name: "普通小型車" },
        { type: 2, name: "大型重型機車" },
        { type: 3, name: "機車" },
      ],
      mapStyle: [
        {
          name: "暗色模式",
          value: "mapbox://styles/jamestim9215/ckvkdj5cd1q4115nzwxa9rny3",
        }, //客製化
        {
          name: "亮色模式",
          value: "mapbox://styles/jamestim9215/ckvueghhu2woc14nrsgysx41v",
        }, //客製化

        // { name: "Streets", value: "mapbox://styles/mapbox/streets-v11"},                      //Streets
        // { name: "Outdoors", value: "mapbox://styles/mapbox/outdoors-v11"},                    //Outdoors
        // { name: "Light", value: "mapbox://styles/mapbox/light-v10"},                          //Light
        // { name: "Dark", value: "mapbox://styles/mapbox/dark-v10"},                            //Dark
        // { name: "Satellite", value: "mapbox://styles/mapbox/satellite-v9"},                   //Satellite
        // { name: "Satellite Streets", value: "mapbox://styles/mapbox/satellite-streets-v11"},  //Satellite Streets
        // { name: "Navigation Day", value: "mapbox://styles/mapbox/navigation-day-v1"},         //Navigation Day
        // { name: "Navigation Night", value: "mapbox://styles/mapbox/navigation-night-v1"}      //Navigation Night
      ],

      mapOptions: {
        carTypeSelected: 1,
        getLngLat: false,
        citySelected: "台北市",
        cityAreaSelected: "中正區",
        mapStylesSelected:
          "mapbox://styles/jamestim9215/ckvkdj5cd1q4115nzwxa9rny3",
      },
    };
  },
  created() {
    if (localStorage.getItem("userInitSetCarType")) {
      this.mapOptions.carTypeSelected = parseInt(
        localStorage.getItem("userInitSetCarType")
      );
    } else {
      this.windowOpen = true;
    }
  },
  mounted() {
    const inlineScript = document.createElement("script");
    inlineScript.type = "text/javascript";
    inlineScript.text = "(adsbygoogle = window.adsbygoogle || []).push({});";
    document.getElementsByTagName("body")[0].appendChild(inlineScript);
  },
  methods: {
    carTypeChange(i) {
      this.mapOptions.carTypeSelected = parseInt(i.target.value);
    },

    initCarTypeChange() {
      this.mapOptions.carTypeSelected = parseInt(
        document.getElementById("initSelectType").value
      );
      localStorage.setItem(
        "userInitSetCarType",
        this.mapOptions.carTypeSelected
      );
      this.windowOpen = false;
    },
    onSetUserCityArea(data) {
      var city = data.features[4].text;
      switch (city) {
        case "Taipei City":
          city = "台北市";
          break;
        case "New Taipei City":
          city = "新北市";
          break;
        case "Keelung":
          city = "基隆市";
          break;
        case "Taoyuan City":
          city = "桃園市";
          break;
        case "Hsinchu":
          city = "新竹縣";
          break;
        case "Hsinchu City":
          city = "新竹市";
          break;
        case "Miaoli":
          city = "苗栗縣";
          break;
        case "Taichung":
          city = "臺中市";
          break;
        case "Nantou":
          city = "南投縣";
          break;
        case "Changhua":
          city = "彰化縣";
          break;
        case "Yunlin":
          city = "雲林縣";
          break;
        case "Chiayi":
          city = "嘉義縣";
          break;
        case "Chiayi City":
          city = "嘉義市";
          break;
        case "Tainan":
          city = "臺南市";
          break;
        case "Kaohsiung City":
          city = "高雄市";
          break;
        case "Pingtung":
          city = "屏東縣";
          break;
        case "Yilan":
          city = "宜蘭縣";
          break;
        case "Hualien":
          city = "花蓮縣";
          break;
        case "Taitung":
          city = "臺東縣";
          break;
        case "Penghu":
          city = "澎湖縣";
          break;
        case "Kinmen":
          city = "金門縣";
          break;
        case "Matsu Islands":
          city = "連江縣";
          break;
      }
      var cityArea = data.features[3].text;
      for (var key in this.areaData) {
        for (var keys in this.areaData[key]) {
          if (key == city && this.areaData[key][keys] == cityArea) {
            this.mapOptions.citySelected = key;
            setTimeout(() => {
              this.mapOptions.cityAreaSelected = cityArea;
            }, 50);
            break;
          }
        }
      }
    },

    onSetParkingInfo(data) {
      document.getElementById("mainInfoBox2").scrollTop = 0;

      document.getElementById("parkingLotTitle").innerText = data.title;
      document.getElementById("parkingLotAddress").innerText = data.address;
      document.getElementById("parkingLotBusinessHours").innerText = data.times;
      document.getElementById("parkingLotSomeInfo").innerHTML = data.info;
      const carInfo = data.carInfo;
      var html = "<hr>";
      for (var key in carInfo) {
        var isShow = false;
        if (data.carType.indexOf(1) != -1 && key == "car") isShow = true;
        if (data.carType.indexOf(2) != -1 && key == "superBike") isShow = true;
        if (data.carType.indexOf(3) != -1 && key == "scooter") isShow = true;
        html =
          html +
          `
          <div class="carInfoBox" ${
            isShow == false ? 'style="display:none"' : ""
          }>
            <h4> 
            ${key == "car" ? "普通小型車" : ""}
            ${key == "superBike" ? "大型重型機車" : ""}
            ${key == "scooter" ? "普通重型機車" : ""}</h4> 
            ${
              carInfo[key].halfAnHour != "-"
                ? '<div>半小時 : <span class="infoColor">' +
                  carInfo[key].halfAnHour +
                  "</span></div>"
                : ""
            } 
            ${
              carInfo[key].anHour != "-"
                ? '<div>1小時 :  <span class="infoColor">' +
                  carInfo[key].anHour +
                  "</span></div>"
                : ""
            } 
            ${
              carInfo[key].dayMax != "-"
                ? '<div>單日上限 :  <span class="infoColor">' +
                  carInfo[key].dayMax +
                  "</span></div>"
                : ""
            } 
            ${
              carInfo[key].oneTime != "-"
                ? '<div>計次: <span class="infoColor">' +
                  carInfo[key].oneTime +
                  "</span></div>"
                : ""
            } 
            ${
              carInfo[key].other != "-"
                ? '<div>詳細資訊: <br> <span class="infoColor">' +
                  carInfo[key].other +
                  "</span></div>"
                : ""
            } 
          </div>
        `;
      }
      document.getElementById("parkingLotInfo").innerHTML = html;
      this.infoActive = true;
    },
  },
};
</script>

<style>
</style>
