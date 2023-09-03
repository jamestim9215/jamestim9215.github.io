<script setup>
import { ref, computed, } from "vue";
import {useRouter,useRoute} from 'vue-router';
import Table from "@/components/common/hq_table.vue";

defineProps({});

const router = useRouter();
const route = useRoute();

const nowPageUrl = computed(() => {
  return route.fullPath
});
const menu = computed(() => {
  return route.params.menu
});
const item = computed(() => {
  return route.params.item
});

const detail = computed(() => {
  return route.params.detail
});

</script>
<template>
  <div class="account-div">
    <div class="text-right">
      <button class="btn btn-color-2">Save</button>
    </div>
    <h3 class="title">Web Title</h3>
    <div class="content-box">
      <div class="input-div">
        <label for="">
          Title
        </label>
        <input type="text" value="半導體設計服務平台">
      </div>
    </div>

  </div>
</template>

<style lang="scss" scoped>
.account-div{
  position: relative;
  width: 100%;
}
.title{
  color: var(--theme-color-2);
  font-size: 18px;
  font-weight: 300;
  margin: 10px 0 0 0;
}
.content-box{
  background: var(--theme-color-2-02);
  position: relative;
  display: block;
  height: auto;
  padding: 20px 10px 10px 10px;
  border: 1px solid var(--theme-color-2-05);
  margin: 0 0 10px 0;
  // border-radius: 5px;
  .content-title{
    position: absolute;
    top: 0px;
    left: 4px;
    font-size: 14px;
    color: var(--theme-color-2);
  }
}

@media (max-width: 960px) {

}
</style>
