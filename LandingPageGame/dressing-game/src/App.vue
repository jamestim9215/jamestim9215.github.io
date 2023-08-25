<script setup>
import { ref, onMounted } from "vue";
import GameHome from "./components/GameHome.vue";
import GameImageList from "./components/GameImageList.vue";
import { useI18n } from "vue-i18n";
import language from "@/assets/local/language.json";

// ?name=ray&Head=0&Eye=0&Cloth=0&Mb=0&Weapon=0&Chibi=0&Bg=0

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);

const lang = ref("zh-tw");

const stepStatus = ref(0);
const name = ref("");
const itemIndex = ref({
  Head: 0,
  Eye: 0,
  Cloth: 0,
  Mb: 0,
  Weapon: 0,
  Chibi: 0,
  Bg: 0,
});

console.log(language);

const isEdit = ref(false);

const initParams = () => {
  console.log("init");
  lang.value = urlParams.get("lang") ? urlParams.get("lang") : "en-us";

  console.log(urlParams.get("lang") == null);
  if (
    (urlParams.get("lang") == null && localStorage.getItem("userUrl")) ||
    (urlParams.get("lang") &&
      urlParams.get("name") == null &&
      localStorage.getItem("userUrl")) ||
    localStorage.getItem("userUrl") == queryString
  ) {
    var url = new URL(location.href);
    var search_params = url.searchParams;

    search_params.set("lang", lang.value);
    search_params.set("name", localStorage.getItem("name"));
    search_params.set("Head", localStorage.getItem("Head"));
    search_params.set("Eye", localStorage.getItem("Eye"));
    search_params.set("Cloth", localStorage.getItem("Cloth"));
    search_params.set("Mb", localStorage.getItem("Mb"));
    search_params.set("Weapon", localStorage.getItem("Weapon"));
    search_params.set("Chibi", localStorage.getItem("Chibi"));
    search_params.set("Bg", localStorage.getItem("Bg"));
    url.search = search_params.toString();

    var new_url = url.toString();
    var obj = {
      Title: "??",
      Url: new_url,
    };
    window.history.replaceState(obj, obj.Title, obj.Url);

    isEdit.value = true;
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
  }

  name.value = urlParams.get("name")
    ? localStorage.getItem("name")
      ? localStorage.getItem("name")
      : urlParams.get("name")
    : "";
  itemIndex.value.Head = urlParams.get("Head")
    ? Number(urlParams.get("Head"))
    : 0;
  itemIndex.value.Eye = urlParams.get("Eye") ? Number(urlParams.get("Eye")) : 0;
  itemIndex.value.Cloth = urlParams.get("Cloth")
    ? Number(urlParams.get("Cloth"))
    : 0;
  itemIndex.value.Mb = urlParams.get("Mb") ? Number(urlParams.get("Mb")) : 0;
  itemIndex.value.Weapon = urlParams.get("Weapon")
    ? Number(urlParams.get("Weapon"))
    : 0;
  itemIndex.value.Chibi = urlParams.get("Chibi")
    ? Number(urlParams.get("Chibi"))
    : 0;
  itemIndex.value.Bg = urlParams.get("Bg") ? Number(urlParams.get("Bg")) : 0;
};

initParams();

const getLangFonts = (type) => {
  var font = "fontAldrich";
  language.forEach((element) => {
    if (element.code == lang.value) {
      if (element.family == "AORUS-Font") font = "fontAorus";
      if (element.family == "Aldrich") font = "fontAldrich";
      if (element.family == "Roboto") font = "fontRoboto";
      if (element.family == "Noto Sans Thai") font = "fontNotoSansThai";
      if (element.family == "Noto Sans KR") font = "fontNotoSansKR";
      if (element.family == "Noto Sans JP") font = "fontNotoSansJP";
      if (element.family == "Noto Sans TC") font = "fontNotoSansTC";
      if (element.family == "Noto Sans SC") font = "fontNotoSansSC";
      if (element.family == "Almarai") font = "fontAlmarai";
      if (element.family == "Open Sans") font = "fontOpenSans";
    }
  });
  console.log("init font: " + font);
  return font;
};

const setStepStatusFun = (data) => {
  if (data.name) name.value = data.name;
  if (data.itemIndex) itemIndex.value = data.itemIndex;
  stepStatus.value = data.stepStatus;
  console.log(stepStatus.value);
  if (stepStatus.value == 1) {
    // initParams();
  }
};
</script>

<template>
  <div class="dressing-game-div" :class="getLangFonts()">

    <!-- {{stepStatus}} -->
    <GameHome
      :step-status="stepStatus"
      @setStepStatus="setStepStatusFun"
      v-if="stepStatus == 0"
    />
    <GameImageList
      :step-status="stepStatus"
      @setStepStatus="setStepStatusFun"
      :name="name"
      :itemIndex="itemIndex"
      :lang="lang"
      :isEdit="isEdit"
    />
  </div>
</template>

<style lang="scss" scoped>
.dressing-game-div {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 573px;
  height: auto;
  min-height: 100vh;
  background: #000;
  padding: 0 0;
}
</style>
