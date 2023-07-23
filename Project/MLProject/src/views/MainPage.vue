<script setup>
import { ref, computed, watch } from "vue";
import Header from "@/components/Header.vue";
import SubBanner from "@/components/SubBanner.vue";
import MainPageContentList from "@/components/MainPageContentList.vue";
import MainPageContentList2 from "@/components/MainPageContentList2.vue";
import Footer from "@/components/Footer.vue";

import {useRouter,useRoute} from 'vue-router';

defineProps({});

const theme = ref(1);
const MainPageType = ref(2);
const title = ref('');

const nowPage = ref('');
const route = useRoute();
const router = useRouter();

const item = computed(() => {

  return route.params.item
});

const setTheme = (item) => {

    switch(item){
      case "introduction-hem":
        theme.value = 1;
        MainPageType.value = 1;
        title.value = "Introduction(HEM)";
        break;
      case "material_informatics":
        theme.value = 1;
        MainPageType.value = 1;
        title.value = "Material informatics";
        break;
      case "demo_cases":
        theme.value = 2;
        MainPageType.value = 2;
        title.value = "Demo cases";
        break;
      case "data_base":
        theme.value = 1;
        MainPageType.value = 1;
        title.value = "Data base";
        break;
      case "data_cleaning":
        theme.value = 2;
        MainPageType.value = 2;
        title.value = "Data cleaning";
        break;
      case "feature_select":
        theme.value = 2;
        MainPageType.value = 2;
        title.value = "Feature select";
        break;
      case "cross_validation":
        theme.value = 2;
        MainPageType.value = 2;
        title.value = "Cross validation";
        break;
      case "prediction":
        theme.value = 2;
        MainPageType.value = 2;
        title.value = "Prediction";
        break;
      case "optimization":
        theme.value = 2;
        MainPageType.value = 2;
        title.value = "Optimization";
        break;
      default:
        theme.value = 1;
        MainPageType.value = 1;
        break;
    }
};

nowPage.value = item.value;
setTheme(nowPage);

console.log("init");

watch(route, (to) => {
  console.log("watch");
    setTheme(to.params.item);
    }, {flush: 'pre', immediate: true, deep: true})

</script>

<template>
  <Header />
  <SubBanner :theme="theme" :title="title"/>
  <MainPageContentList v-if="MainPageType==1"/>
  <MainPageContentList2 :theme="theme" v-else/>
  <Footer />
</template>

<style lang="scss" scoped>

@media (max-width: 768px) {
}
</style>
