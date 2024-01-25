<script setup>
import { ref, watch, computed } from 'vue'
import {useRouter,useRoute } from 'vue-router';

import "@/assets/css/content.scss";

const router = useRouter();
const route = useRoute();

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
    { text: "Option", value: "options" , width: 60 },
    { text: "Photo", value: "photo" , width: 60 },
    { text: "Name", value: "name" , width: 180},
    { text: "Line ID", value: "lineId"  },
    { text: "Email", value: "message"  },
]);
const tableItems = ref([
    {
        id: 1,
        name: "大壯",
        options: ["view"],
        lineId: "lineId1",
        message: "阿怎麼沒水了!!",
        photo: imgUserUrl('01.webp')
    },
    {
        id: 2,
        name: "阿明",
        options: [],
        lineId: "lineId2",
        message: "冷氣壞了! 一直滴水",
        photo: imgUserUrl('02.webp')
    },
    {
        id: 3,
        name: "小美",
        options: ["view"],
        lineId: "lineId3",
        message: "房東先生有女朋友嗎?",
        photo: imgUserUrl('03.webp')
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
</script>

<template>
  <div class="content-page">
    <div class="content-title">
        訊息管理
    </div>
    <div class="content-body">
        <div class="table-list">
            <div class="table-div-top">
                
                <div>
                    <span class="material-icons-outlined">
                        chat
                    </span>
                    <span>
                        List
                    </span>
                </div>
                <div>
                    <button class="btn btn-info">
                        <span class="material-icons-outlined">
                        cloud_download
                        </span>
                        Export
                    </button>
                </div>
            </div>
            <div class="table-div-content">
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
                    <template #item-options="row" >
                        <button class="btn btn-sm btn-outline-primary" v-if="row.options.includes('view')">
                            <span class="material-icons-outlined">
                            visibility
                            </span>
                        </button>
                    </template>
                    <template #item-photo="row" >
                        <img :src="row.photo" class="img-fluid" />
                    </template>
                </EasyDataTable>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>



</style>