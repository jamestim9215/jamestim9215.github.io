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
const isloading = ref(false);
const currentPage = ref(1);
const totalCount = ref(100);
const showList = ref(10);
const listData = ref([
  {
    id: 1,
    email: "aaa@aaa.aaa",
    visible: true,
  },
  {
    id: 2,
    email: "2222@aaa.aaa",
    visible: false,
  }
]);

const columns = ref([
  {
    title: "#",
    slot: "tdIndex",
    thAlign: "center",
    tdAlign: "center",
    width: "70px",
  },
  {
    title: "Options",
    key: "options",
    slot: "options",
    thAlign: "center",
    tdAlign: "center",
    width: "70px",
  },
  {
    title: "E-mail",
    key: "email",
    thAlign: "left",
    tdAlign: "left",
  },
  {
    title: "Visible",
    key: "visible",
    slot: "visible",
    thAlign: "center",
    tdAlign: "center",
    width: "70px",
  },
])


</script>
<template>
  <div class="account-div">
    <div class="function-div"  v-if="item==''">
        <div class="btn btn-color-2">
            Create
        </div>
    </div>
    <Table 
      id="member"
      :columns="columns"
      :list-data="listData"
      is-null-str="-"
      :isloading="isloading">
      <template #tdIndex="{ index }" >
        {{index+1}}
      </template>
      <template #visible="{ row }" >
        <span class="material-icons text-color2"  v-if="row.visible">
          done
        </span>
      </template>
      <template #options="{ row }">
        <!-- <button class="btn btn-color-2 mr-1">
          <span class="material-icons">
            edit
          </span>
        </button> -->
        <button class="btn btn-color-1 mr-1" v-if="row.visible==false">
          <span class="material-icons">
            done
          </span>
        </button>
        <button class="btn btn-color-3 mr-1" v-if="row.visible==true">
          <span class="material-icons">
            clear
          </span>
        </button>
        <button class="btn btn-color-3">
          <span class="material-icons">
            delete
          </span>
        </button>
      </template>
    </Table>
  </div>
</template>

<style lang="scss" scoped>
.account-div{
  position: relative;
  width: 100%;
}

@media (max-width: 960px) {
  
}
</style>
