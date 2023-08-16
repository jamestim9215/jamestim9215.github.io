<script setup>
import { ref, onMounted } from "vue";
import GameHome from "./components/GameHome.vue";
import GameImageList from "./components/GameImageList.vue";
import { useI18n } from "vue-i18n";

// ?name=ray&headgear=0&expression=0&outfit=0&leftHandAccessory=0&rightHandAccessory=0&mainBody=0&background=0

let queryString = window.location.search;
let urlParams = new URLSearchParams(queryString);

const lang = ref("zh-tw");

const stepStatus = ref(1);
const name = ref("");
const itemIndex = ref({
  headgear: 0,
  expression: 0,
  outfit: 0,
  leftHandAccessory: 0,
  rightHandAccessory: 0,
  mainBody: 0,
  background: 0,
})

const isEdit = ref(false);

const initParams = () => {
  console.log("init");
  lang.value = urlParams.get('lang') ? urlParams.get('lang') : "en-us";

  
  if((localStorage.getItem('userUrl') && !urlParams.get('lang')) || (localStorage.getItem('userUrl') == queryString)){
    var url = new URL(location.href);
    var search_params = url.searchParams;

    search_params.set('lang', lang.value);
    search_params.set('name', localStorage.getItem('name'));
    search_params.set('headgear', localStorage.getItem('headgear'));
    search_params.set('expression', localStorage.getItem('expression'));
    search_params.set('outfit', localStorage.getItem('outfit'));
    search_params.set('leftHandAccessory', localStorage.getItem('leftHandAccessory'));
    search_params.set('rightHandAccessory', localStorage.getItem('rightHandAccessory'));
    search_params.set('mainBody', localStorage.getItem('mainBody'));
    search_params.set('background', localStorage.getItem('background'));
    url.search = search_params.toString();

    var new_url = url.toString();
    var obj = {
    Title: '??',
    Url: new_url
    };
    window.history.replaceState(obj, obj.Title , obj.Url );

    isEdit.value = true;
    queryString = window.location.search;
    urlParams = new URLSearchParams(queryString);
  }

  name.value = urlParams.get('name') ? urlParams.get('name') : "";
  itemIndex.value.headgear = urlParams.get('headgear') ? Number(urlParams.get('headgear')) : 0;
  itemIndex.value.expression = urlParams.get('expression') ? Number(urlParams.get('expression')) : 0;
  itemIndex.value.outfit = urlParams.get('outfit') ? Number(urlParams.get('outfit')) : 0;
  itemIndex.value.leftHandAccessory = urlParams.get('leftHandAccessory') ? Number(urlParams.get('leftHandAccessory')) : 0;
  itemIndex.value.rightHandAccessory = urlParams.get('rightHandAccessory') ? Number(urlParams.get('rightHandAccessory')) : 0;
  itemIndex.value.mainBody = urlParams.get('mainBody') ? Number(urlParams.get('mainBody')) : 0;
  itemIndex.value.background = urlParams.get('background') ? Number(urlParams.get('background')) : 0;

}

initParams();


const setStepStatusFun = (data) => {
  if (data.name) name.value = data.name;
  if (data.itemIndex) itemIndex.value = data.itemIndex;
  stepStatus.value = data.stepStatus;
  console.log(stepStatus.value);
  if(stepStatus.value == 1){

    // initParams();
  }
};
</script>

<template>
  <div class="dressing-game-div">
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
      v-if="stepStatus != 0"
    />
  </div>
</template>

<style lang="scss" scoped>
.dressing-game-div {
  position: relative;
  margin: 0 auto;
  width: 100%;
  max-width: 500px;
  height: auto;
  min-height: 100vh;
  background: #000;
  padding: 0 0;
}
</style>
