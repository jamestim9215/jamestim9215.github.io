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
const edit = computed(() => {
  return route.query.edit
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
    Title: "Title",
    Content: "Content",
    IsShow: true,
  },
  {
    id: 2,
    Title: "Title2",
    IsShow: false,
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
    key: "Options",
    slot: "options",
    thAlign: "center",
    tdAlign: "center",
    width: "70px",
  },
  {
    title: "Title",
    key: "Title",
    thAlign: "left",
    tdAlign: "left",
  },
  {
    title: "Content",
    key: "Content",
    thAlign: "left",
    tdAlign: "left",
  },
  {
    title: "IsShow",
    key: "IsShow",
    slot: "IsShow",
    thAlign: "center",
    tdAlign: "center",
    width: "70px",
  },
  {
    title: "Create By",
    key: "CreateBy",
    thAlign: "left",
    tdAlign: "left",
  },
  {
    title: "Create Date",
    key: "CreateDate",
    thAlign: "left",
    tdAlign: "left",
  },
])

const editHander = (row) => {
  console.log(nowPageUrl.value + "/edit?id=");
  router.push({
    path: nowPageUrl.value + "/edit?id=" + row.id,
  })
}


</script>
<template>
  <div class="account-div">
    <div class="text-right">
      <button class="btn btn-color-2">Save</button>
    </div>
    <h3 class="title">Banner</h3>
    <div class="content-box">
      <div class="input-div">
        <label for="">
          Title
        </label>
        <input type="text" value="Demo Cases">
      </div>
      <div class="input-div">
        <label for="">
          Content
        </label>
        <textarea name="" id="" rows="5">content content content content content content content content content content content content content content content content content content .....</textarea>
      </div>
      <div class="input-div">
        <label for="">
          Button More Url
        </label>
        <input type="text">
      </div>
    </div>

    <div class="function-div border-top pt-2">
        <div class="btn btn-color-2"  v-if="!edit">
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
      <template #IsShow="{ row }" >
        <span class="material-icons text-color2"  v-if="row.IsShow">
          done
        </span>
      </template>
      <template #options="{ row }">
        <button @click="editHander(row)" class="btn btn-color-2 mr-1">
          <span class="material-icons">
            edit
          </span>
        </button>
        <button class="btn btn-color-1 mr-1" v-if="row.IsShow==false">
          <span class="material-icons">
            visibility
          </span>
        </button>
        <button class="btn btn-color-3 mr-1" v-if="row.IsShow==true">
          <span class="material-icons">
            visibility_off
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
