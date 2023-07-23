<script setup>
import { ref, computed, watch } from "vue";
import Header from "@/components/Header.vue";
import SubBanner from "@/components/SubBanner.vue";
import Detail from "@/components/Detail.vue";
import Footer from "@/components/Footer.vue";

import {useRouter,useRoute} from 'vue-router';

defineProps({});

const theme = ref(1);
const MainPageType = ref(2);

const nowPage = ref('');
const route = useRoute();

const item = computed(() => {

  return route.params.item
});

nowPage.value = item.value;

watch(route, (to) => {
  console.log("watch");

    }, {flush: 'pre', immediate: true, deep: true})

</script>

<template>
  <Header />
  <Detail />
  <Footer />
</template>

<style lang="scss" scoped>

@media (max-width: 768px) {
}
</style>
