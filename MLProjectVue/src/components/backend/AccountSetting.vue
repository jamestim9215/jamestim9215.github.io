<script setup>
import { ref, computed,onMounted } from "vue";
import {useRouter,useRoute} from 'vue-router';
import Table from "@/components/common/hq_table.vue";

defineProps({});

const router = useRouter();
const route = useRoute();
const confirm = ref(null);
const confirmDel = ref(null);

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
    email: "admin@aaa.aaa",
    visible: true,
    isAdmin: true,
  },
  {
    id: 2,
    email: "2222@aaa.aaa",
    visible: false,
    isAdmin: false,
  },
  {
    id: 3,
    email: "333@aaa.aaa",
    visible: true,
    isAdmin: false,
  }
]);

const columns = ref([
  {
    title: "#",
    slot: "tdIndex",
    thAlign: "center",
    tdAlign: "center",
    width: "30px",
  },
  {
    title: "",
    slot: "checkbox",
    thAlign: "center",
    tdAlign: "center",
    width: "30px",
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
    title: "isAdmin",
    key: "isAdmin",
    slot: "isAdmin",
    thAlign: "center",
    tdAlign: "center",
    width: "70px",
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

const deleteAccount = (row,index) => {
  var _this = this;

  // console.log(confirmDel.value.show);
  
  confirmDel.value.show(
    `Confirm to delete account ? <br> 
    Please input account email : 
    ${row.email}`,
    "Confirm",
    "Cancel",
    "color-1-full btn-lg",
    "color-3-full btn-lg",
    row.email
  )
  .then(() => {
    listData.value.splice(index, 1);
  })
  .catch(() => {
    return;
  });
}

const showMessage = () => {
  confirm.value.show(
    "Messages .... ",
    "Confirm",
    null,
    "color-1-full btn-lg",
    null,
  )
}


</script>
<template>
  <div class="account-div">
    <div class="function-div">
        <button class="btn btn-lg btn-color-4-full mr-1" @click="showMessage">
          設為管理者權限
        </button>
        <button class="btn btn-lg btn-color-3-full mr-1">
          取消管理者權限
        </button>
        <button class="btn btn-lg btn-color-4-full mr-1">
          帳號通過
        </button>
        <button class="btn btn-lg btn-color-3-full mr-1">
          帳號失效
        </button>
    </div>
    <Table 
      id="member"
      :columns="columns"
      :list-data="listData"
      is-null-str="-"
      :isloading="isloading">
      <template #checkbox="{ index }" >
        <input type="checkbox" name="" :id="'checkbox-'+index">
      </template>
      <template #tdIndex="{ index }" >
        {{index+1}}
      </template>
      <template #visible="{ row }" >
        <span class="material-icons text-color2"  v-if="row.visible">
          done
        </span>
      </template>
      <template #isAdmin="{ row }" >
        <span class="material-icons text-color2"  v-if="row.isAdmin">
          done
        </span>
      </template>
      <template #options="{ row,index }">
        <!-- <button class="btn btn-color-4 mr-1" v-if="row.isAdmin==true">
          <span class="material-icons">
            admin_panel_settings
          </span>
        </button> -->
<!-- 
        <button class="btn btn-color-1 mr-1" v-if="row.visible==false">
          <span class="material-icons">
            visibility
          </span>
        </button>
        <button class="btn btn-color-3 mr-1" v-if="row.visible==true">
          <span class="material-icons">
            visibility_off
          </span>
        </button> -->

        <button class="btn btn-color-3" title="刪除帳號" @click="deleteAccount(row,index)">
          <span class="material-icons">
            delete
          </span>
        </button>
      </template>
    </Table>
  </div>
  <HQConfirm ref="confirm"/>
  <HQConfirmDel ref="confirmDel"/>
</template>

<style lang="scss" scoped>
.account-div{
  position: relative;
  width: 100%;
}

@media (max-width: 960px) {
  
}
</style>
