<script setup>
import { ref } from "vue";
import { useRouter, useRoute } from "vue-router";
const props = defineProps(['tabIndex'])

// const tabIndex = ref(0);
const tabList = ref([
  { id: 0, name: "訂單管理", permissions: 0 , route:'order-list'},
  { id: 1, name: "產品管理", permissions: 0 , route:'product-settings'},
  { id: 2, name: "報表", permissions: 0 , route:'report'},
  { id: 3, name: "店家資料", permissions: 0 , route:'store-info'},
  { id: 4, name: "首頁設定", permissions: 1 , route:'home-settings'},
  { id: 5, name: "標籤設定", permissions: 1 , route:'tag-settings'},
  { id: 6, name: "店家與權限設定", permissions: 1 , route:'store-and-permission'},
]);

const router = useRouter();

const goTo = (route,isLeave) => {
  if(!isLeave) router.push("/"+route);
}
</script>

<template>
  <div class="tab-div">
    <div
      v-for="key in tabList"
      :key="key.id"
      :class="[{ active: key.id == props.tabIndex }, { admin: key.permissions == 1 }]"
      @click="goTo(key.route,(key.id == props.tabIndex))"
    >
      {{ key.name }}
    </div>
  </div>
  <select class="tab-div-mobile">
    <option
      v-for="key in tabList"
      :key="key.id"
      :class="[{ active: key.id == props.tabIndex }, { admin: key.permissions == 1 }]"
    >
      {{ key.name }}
    </option>
  </select>
</template>

<style scoped>
.tab-div {
  position: relative;
  width: 100%;
  height: 45px;
  border-bottom: 2px solid var(--theme-yellow);
}

.tab-div > div {
  position: relative;
  display: inline-block;
  width: auto;
  height: 44px;
  line-height: 44px;
  background: var(--theme-white);
  padding: 0 20px;
  border: 1px solid var(--theme-light);
  color: var(--theme-gray);
  font-size: 20px;
  border-bottom: 0px solid var(--theme-light);
  cursor: pointer;
}
.tab-div > div.admin {
  background: var(--theme-pink);
}
.tab-div > div.active {
  background: var(--theme-yellow);
  color: var(--theme-black);
  cursor: inherit;
}
.tab-div-mobile {
  display: none;
}

@media (max-width: 1199px) {
  .tab-div {
    display: none;
  }
  .tab-div-mobile {
    display: inline;
  }
}
</style>
