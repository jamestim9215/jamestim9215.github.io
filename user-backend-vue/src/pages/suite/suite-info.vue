<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import {useRouter,useRoute } from 'vue-router';

import "@/assets/css/content.scss";

const router = useRouter();
const route = useRoute();

const confirm = ref(null);
const confirmDel = ref(null);

const contentType = ref(1);
const name = ref('A01');



const dataTable = ref(null);
const serverOptions = ref({
  "page": 1,
  "rowsPerPage": 10
});

serverOptions.value.rowsPerPage = 10;

const imgUserUrl = (url) => {
  if(url.match('http')){
    return url;
  }else{
    return new URL(`/src/assets/images/user/${url}`, import.meta.url).href
  }
}

const tableHeaders = ref([
    { text: "#", value: "id" , width: 30 },
    { text: "承租日期", value: "dateLimit" , width: 200 },
    { text: "", value: "photo" , width: 60 },
    { text: "房客姓名", value: "name" , width: 180},
    { text: "電話", value: "phoneNumber"  },
    { text: "合約內容", value: "options" , width: 60 },
]);
const tableItems = ref([
    {
        id: 1,
        name: "大壯",
        options: ["view"],
        startDate: "2023-01-01",
        endDate: "2023-12-31",
        phoneNumber: "0912345678",
        photo: imgUserUrl('01.webp')
    },
    
]);
const serverItemsLength = ref(30);
const tableLoading = ref(false);

const currentPageFirstIndex = computed(() => dataTable.value?.currentPageFirstIndex);
const currentPageLastIndex = computed(() => dataTable.value?.currentPageLastIndex);
const clientItemsLength = computed(() => dataTable.value?.clientItemsLength);
const isFirstPage = computed(() => dataTable.value?.isFirstPage);
const isLastPage = computed(() => dataTable.value?.isLastPage);
const maxPaginationNumber = computed(() => dataTable.value?.maxPaginationNumber);
const currentPaginationNumber = computed(() => dataTable.value?.currentPaginationNumber);
const rowsPerPageOptions = computed(() => dataTable.value?.rowsPerPageOptions);
const rowsPerPageActiveOption = computed(() => dataTable.value?.rowsPerPageActiveOption);

const nextPage = () => {
  dataTable.value.nextPage();
};
const prevPage = () => {
  dataTable.value.prevPage();
};


watch(serverOptions, (value) => { 
    // initProjectList(value);
}, { deep: true });

onMounted(() => {
  
})

</script>

<template>
  <div class="content-page">

    <div class="info-page">
      <div class="info-card">
        <div class="info-card-top">
          <div class="title">
            <span class="material-icons-outlined">
              home
            </span>
            <div>
              {{ name }}
            </div>
          </div>
          <img :src="imgUserUrl('https://images.pexels.com/photos/7031731/pexels-photo-7031731.jpeg?auto=compress&cs=tinysrgb&w=600')" alt="">
        </div>
        
        <div class="info-card-content">
          <button class="btn btn-block mb-1 p-1" :class="contentType==1?'active':''" @click="contentType=1">
            <span class="material-icons-outlined">
            history
            </span>
            歷年租客與合約
          </button>
          <button class="btn btn-block mb-1 p-1" :class="contentType==2?'active':''" @click="contentType=2">
            <span class="material-icons-outlined">
              account_balance
            </span>
            歷年收支
          </button>
          <button class="btn btn-block mb-1 p-1" :class="contentType==3?'active':''" @click="contentType=3">
            <span class="material-icons-outlined">
              edit
            </span>
            編輯物件
          </button>
        </div>
        
        <div class="info-card-footer">
          <button class="btn btn-block btn-outline-danger">刪除物件</button>
        </div>

      </div>
      <div class="info-setting">
        <div v-if="contentType==1">
          <EasyDataTable
              ref="dataTable"
              buttons-pagination
              theme-color="#6c5dd3"
              v-model:server-options="serverOptions"
              :server-items-length="serverItemsLength"
              :headers="tableHeaders"
              :items="tableItems"
              :loading="tableLoading"
              :sort-by="['sys_create_date']"
              table-class-name="customize-table"
              body-text-direction="left"
              rowsPerPageMessage="顯示"
              rowsOfPageSeparatorMessage="至"
              emptyMessage="查無資料"
              alternating
          > 
            <template #item-dateLimit="row" >
              {{ row.startDate }} ~ {{ row.endDate }}
            </template>
            <template #item-options="row" >
                <button class="btn btn-outline-primary" v-if="row.options.includes('view')">
                    合約內容
                </button>
            </template>
            <template #item-photo="row" >
                <img :src="row.photo" class="img-fluid" />
            </template>
          </EasyDataTable>
        </div>

        <div v-if="contentType==2">
          BB
        </div>

        <div v-if="contentType==3">
          CC
        </div>

      </div>
    </div>
    
  </div>
  <Confirm ref="confirm" />
  <ConfirmDel ref="confirmDel" />
</template>

<style lang="scss" scoped>
.info-card{
  width: 100%;
  height: calc(100dvh - 130px);
  display: flex;
  flex-direction: column;
  border-radius: 10px;
  overflow: hidden;
  background-color: var(--bs-white);
  transition: all .3s;
  .info-card-top{
    width: 100%;
    padding: 20px;
    >.title{
      display: flex;
      justify-content: flex-start;
      align-items: center;
      margin-bottom: 10px;
      >.material-icons-outlined{
        font-size: 32px;
        margin-right: 10px;
        color: var(--bs-primary);
      }
      >div{
        font-size: 16px;
        font-weight: 700;
        color: var(--bs-dark);
      }
    }
    img{
      width: 100%;
      aspect-ratio: 16/9;
      object-fit: cover;
    }
  }
  .info-card-content{
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    padding: 20px;
    button{
      background: var(--badge-info-bg);
      color: var(--badge-info-color);
      &.active{
        background: var(--bs-info);
        color: var(--bs-white);
      }
    }
  }
  .info-card-footer{
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    align-items: center;
    padding: 20px;
  }

}

.info-setting{
  padding: 20px;
}
</style>