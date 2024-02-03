<script setup>
import { ref, watch, computed } from 'vue'
import {useRouter,useRoute } from 'vue-router';

import "@/assets/css/content.scss";

const router = useRouter();
const route = useRoute();


const address = ref("");
const category = ref("");
const country = ref("");
const rentStart = ref(null);
const rentEnd = ref(null);
const addressOptions = [
  {
    value: "0",
    label: "台北市"
  },
  {
    value: "1",
    label: "新北市"
  },
]
const categoryOptions = [
  {
    value: "0",
    label: "套房"
  },
  {
    value: "1",
    label: "雅房"
  },
  {
    value: "2",
    label: "整層住家"
  },
  {
    value: "3",
    label: "店面"
  },
]
const countryOptions = [
  {
    value: "TW",
    label: "台灣"
  },
  {
    value: "JP",
    label: "日本"
  },
  {
    value: "US",
    label: "美國"
  },
  {
    value: "VN",
    label: "越南"
  },
]

const getAddressLabel = () => {
  let label = "";
  addressOptions.forEach((item) => {
    if(item.value === address.value){
      label = item.label;
    }
  })
  return label;
}

const getCategoryLabel = () => {
  let label = "";
  categoryOptions.forEach((item) => {
    if(item.value === category.value){
      label = item.label;
    }
  })
  return label;
}

const getCountryLabel = () => {
  let label = "";
  countryOptions.forEach((item) => {
    if(item.value === country.value){
      label = item.label;
    }
  })
  return label;
}



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
    { text: "", value: "photo" , width: 60 },
    { text: "房客", value: "name", width: 200},
    { text: "綁定平台", value: "platform", width: 120 },
    { text: "承租物件", value: "lease"  },
    { text: "電話", value: "phone"  },
    { text: "物件承租金額", value: "rent"  },
    { text: "", value: "options" , width: 60 },
]);
const tableItems = ref([
    {
        id: 1,
        options: ["view"],
        name: "陳小華",
        platform: "line",
        phone: "0912345678",
        lease: ["套房", "店面"],
        rent: "10000",
        country: "TW",
        startDate: "2021-01-01",
        endDate: "2021-12-31",
        photo: imgUserUrl('01.webp')
    },
    {
        id: 2,
        options: ["view"],
        name: "林月嬌",
        platform: "line",
        phone: "0912345678",
        lease: ["套房"],
        rent: "10000",
        country: "TW",
        startDate: "2021-01-01",
        endDate: "2021-12-31",
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
</script>

<template>
  <div class="content-page">
    <div class="subHeader">
      <div class="subHeader-title">
        
      </div>
      <div class="subHeader-btn">

        <button class="btn btn-primary mr-0" style="cursor: initial;" v-if="address">{{ getAddressLabel() }}</button>
        <button class="btn btn-primary mr-0" style="cursor: initial;" v-if="category">{{ getCategoryLabel() }}</button>
        <button class="btn btn-primary mr-0" style="cursor: initial;" v-if="country">{{ getCountryLabel() }}</button>
        <button class="btn btn-primary mr-0" style="cursor: initial;" v-if="rentStart != null && rentEnd != null">  {{ rentStart }}$ ~ {{ rentEnd }}$</button>
        
        <div class="line" v-if="(rentStart != null && rentEnd != null) || category || address || country"></div>

        <div class="dropdown dropdown-primary filter">
          <span class="material-icons-outlined">
          filter_alt
          </span>
          過濾
          <div>
            <div>
              <label>地址</label>
              <select v-model="address">
                <option value="">--請選擇--</option>
                <option :value="key.value" v-for="(key, index) in addressOptions" :key="index">{{key.label}}</option>
              </select>
            </div>
            <div>
              <label>承租物件</label>
              <select v-model="category">
                <option value="">--請選擇類型--</option>
                <option :value="key.value" v-for="(key, index) in categoryOptions" :key="index">{{key.label}}</option>
              </select>
            </div>
            <div>
              <label>國籍</label>
              <select v-model="country">
                <option value="">--請選擇類型--</option>
                <option :value="key.value" v-for="(key, index) in countryOptions" :key="index">{{key.label}}</option>
              </select>
            </div>
            <div>
              <label>租金</label>
              <div class="flex">
                <input type="number" v-model="rentStart" min="0" @blur="isRent('rentStart')"> 
                ~ 
                <input type="number" :min="rentStart" :max="1000000"  @blur="isRent('rentEnd')" v-model="rentEnd">
              </div>
            </div>
            <hr>
          </div>
        </div>

        <button class="btn btn-outline-primary" @click="router.push('/tenant/add')">
          <span class="material-icons-outlined">
          add
          </span>
          新增房客
        </button>
      </div>
    </div>
    <div class="content-title">
        房客列表
    </div>
    <div class="content-body">
        <div class="table-list">
            <div class="table-div-top">
                
                <div>
                    <span class="material-icons-outlined">
                        recent_actors
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
                    <template #item-photo="row" >
                        <img :src="row.photo" class="img-fluid" />
                    </template>
                    <template #item-name="row" >
                        {{ row.name }} ({{row.country}}) <br> 
                        {{ row.startDate }} ~ {{ row.endDate }}
                    </template>
                    <template #item-options="row" >
                        <button class="btn btn-outline-primary" v-if="row.options.includes('view')">
                            <!-- <span class="material-icons-outlined">
                            visibility
                            </span> -->
                            查看
                        </button>
                    </template>
                </EasyDataTable>
            </div>
        </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>



</style>