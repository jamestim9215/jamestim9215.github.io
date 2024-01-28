<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import {useRouter,useRoute } from 'vue-router';

import { LineChart, PieChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";


import "@/assets/css/content.scss";

Chart.register(...registerables);

const router = useRouter();
const route = useRoute();

const confirm = ref(null);
const confirmDel = ref(null);

const contentType = ref(1);
const name = ref('A01');


const infoCardTypeList = ref([
  {
    id: 1,
    name: "歷年數據",
    iconName: "analytics"
  },
  {
    id: 2,
    name: "歷年租客與合約",
    iconName: "history"
  },
  {
    id: 3,
    name: "歷年帳單",
    iconName: "account_balance"
  },
  {
    id: 4,
    name: "編輯物件",
    iconName: "edit"
  },
])


const dataTable = ref(null);
const dataTable2 = ref(null);
const serverOptions = ref({
  "page": 1,
  "rowsPerPage": 10
});
const serverOptions2 = ref({
  "page": 1,
  "rowsPerPage": 10
});

serverOptions.value.rowsPerPage = 10;
serverOptions2.value.rowsPerPage = 10;

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
  { text: "房客姓名", value: "name" , width: 220},
  { text: "租金", value: "rent"  },
  { text: "合約內容", value: "options" , width: 60 },
]);
const tableHeaders2 = ref([
  { text: "#", value: "id" , width: 30 },
  { text: "帳單", value: "bill" , width: 180},
  { text: "應付款日", value: "payableDate", width: 180},
  { text: "", value: "photo" , width: 60 },
  { text: "付款人", value: "name"  },
  { text: "帳單狀態", value: "billStaus" , width: 120 },
]);
const tableItems = ref([
  {
    id: 1,
    name: "大壯",
    options: ["view"],
    startDate: "2023-01-01",
    endDate: "2023-12-31",
    phoneNumber: "0912345678",
    photo: imgUserUrl('01.webp'),
    gender: "男",
    country: "台灣",
    rent: 15000,
  },
]);
const tableItems2 = ref([
  {
    id: 1,
    name: "大壯",
    options: ["view"],
    bill: "2024年02月 費用",
    payableDate: "2024-02-01",
    photo: imgUserUrl('01.webp'),
    billStaus: "已付款",
  },
])

const serverItemsLength = ref(30);
const serverItemsLength2 = ref(30);
const tableLoading = ref(false);
const tableLoading2 = ref(false);

const currentPageFirstIndex = computed(() => dataTable.value?.currentPageFirstIndex);
const currentPageLastIndex = computed(() => dataTable.value?.currentPageLastIndex);
const clientItemsLength = computed(() => dataTable.value?.clientItemsLength);
const isFirstPage = computed(() => dataTable.value?.isFirstPage);
const isLastPage = computed(() => dataTable.value?.isLastPage);
const maxPaginationNumber = computed(() => dataTable.value?.maxPaginationNumber);
const currentPaginationNumber = computed(() => dataTable.value?.currentPaginationNumber);
const rowsPerPageOptions = computed(() => dataTable.value?.rowsPerPageOptions);
const rowsPerPageActiveOption = computed(() => dataTable.value?.rowsPerPageActiveOption);

const currentPageFirstIndex2 = computed(() => dataTable2.value?.currentPageFirstIndex);
const currentPageLastIndex2 = computed(() => dataTable2.value?.currentPageLastIndex);
const clientItemsLength2 = computed(() => dataTable2.value?.clientItemsLength);
const isFirstPage2 = computed(() => dataTable2.value?.isFirstPage);
const isLastPage2 = computed(() => dataTable2.value?.isLastPage);
const maxPaginationNumber2 = computed(() => dataTable2.value?.maxPaginationNumber);
const currentPaginationNumber2 = computed(() => dataTable2.value?.currentPaginationNumber);
const rowsPerPageOptions2 = computed(() => dataTable2.value?.rowsPerPageOptions);
const rowsPerPageActiveOption2 = computed(() => dataTable2.value?.rowsPerPageActiveOption);

const nextPage = () => {
  dataTable.value.nextPage();
};
const prevPage = () => {
  dataTable.value.prevPage();
};
const nextPage2 = () => {
  dataTable2.value.nextPage();
};
const prevPage2 = () => {
  dataTable2.value.prevPage();
};

const LineChartData = ref({
  labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12'],
  datasets: [
    {
      data: [65, 59, 80, 81, 56, 55, 40, 65, 59, 80, 81, 56],
      backgroundColor: ['#4d69fa'],
    },
    {
      data: [28, 48, 40, 19, 86, 27, 90],
      backgroundColor: ['#ffa2c0'],
    }
  ],
})

const LineChartOption = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: true,
      text: '報修金額',
    },
  },
  scales: {
    x: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#000',
      },
    },
    y: {
      grid: {
        display: false,
      },
      ticks: {
        color: '#000',
      },
    },
  },
})

const PieChartData = ref({
  labels: ['水費', '電費'],
  datasets: [
    {
      data: [300, 50],
      backgroundColor: ['#e7eaff', '#fff9e6'],
    },
  ],
})

const PieChartOption = ref({
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: true,
      position: 'left', 
    },
    title: {
      display: false,
    },
  },
})


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
          <button class="btn btn-block mb-1 p-1" :class="contentType==infoCardTypeItem.id?'active':''" @click="contentType=infoCardTypeItem.id" v-for="(infoCardTypeItem, infoCardTypeIndex) in infoCardTypeList" :key="infoCardTypeIndex">
            <span class="material-icons-outlined">
              {{infoCardTypeItem.iconName}}
            </span>
            {{infoCardTypeItem.name}}
          </button>
        </div>
        
        <div class="info-card-footer">
          <button class="btn btn-block btn-outline-danger">刪除物件</button>
        </div>

      </div>
      <div class="info-setting">
        

        <div v-if="contentType==1">
          
          <div class="title">
            <span class="material-icons-outlined">
              analytics
            </span>
            歷年數據
          </div>
          <div class="content">
            <LineChart :chartData="LineChartData" :options="LineChartOption" />
            <div class="flex chart-flex mt-2">
              <div>
                <PieChart :chartData="PieChartData" :options="PieChartOption" />
              </div>
              <div>
                <div>
                  月平均電費：NT$ 1,500
                </div>
                <div>
                  月平均水費：NT$ 1,000
                </div>
              </div>
            </div>
            
          </div>
        </div>


        <div v-if="contentType==2">
          <div class="title">
            <span class="material-icons-outlined">
            history
            </span>
            歷年租客與合約
          </div>
          <div class="content">
            
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
              <template #item-name="row" >
                {{ row.name }} ({{row.country}}) <br> 
                {{ row.startDate }} ~ {{ row.endDate }}
              </template>
              <template #item-rent="row" >
                租金：{{ row.rent }} $
              </template>
              <template #item-options="row" >
                  <button class="btn btn-outline-primary" v-if="row.options.includes('view')">
                      查看
                  </button>
              </template>
              <template #item-photo="row" >
                  <img :src="row.photo" class="img-fluid" />
              </template>
            </EasyDataTable>
          </div>
        </div>

        <div v-if="contentType==3">
          
          <div class="title">
            <span class="material-icons-outlined">
              account_balance
            </span>
            歷年收支
          </div>
          <div class="content">
            <EasyDataTable
                ref="dataTable2"
                buttons-pagination
                theme-color="#6c5dd3"
                v-model:server-options="serverOptions2"
                :server-items-length="serverItemsLength2"
                :headers="tableHeaders2"
                :items="tableItems2"
                :loading="tableLoading2"
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
            </EasyDataTable>
          </div>
        </div>

        <div v-if="contentType==4">
          <div class="title">
            <span class="material-icons-outlined">
              edit
            </span>
            編輯物件
          </div>
          <div class="content">
            <div class="flex upload-img">
              <img :src="imgUserUrl('https://images.pexels.com/photos/7031731/pexels-photo-7031731.jpeg?auto=compress&cs=tinysrgb&w=600')" alt="">
              <div class="input-div file">
                <input type="file" id="suite-image">
                <label class="uploadBtn" for="suite-image">
                  <span>選擇檔案</span>
                  <div>沒有選擇檔案</div>
                </label>
              </div>
            </div>
            <hr>
            <div class="flex">
              <div class="input-div text">
                <input type="text" class="form-control" v-model="name">
                <label for="">物件名稱</label>
              </div>
              <div class="input-div select">
                <select class="form-select">
                  <option value="">--請選擇狀態--</option>
                  <option value="0">出租中</option>
                  <option value="1">空置中</option>
                </select>
                <label for="">出租狀態</label>
              </div>
            </div>

          </div>
          <div class="footer">
            <button class="btn btn-outline-primary">儲存</button>
          </div>
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


.chart-flex{
  >div:nth-child(1){
    width: 50%;
  }
  >div:nth-child(2){
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    >div{
      width: 100%;
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 10px;
      &:last-child{
        margin-bottom: 0;
      }
    }
  }

}

.upload-img{
  
  img{
    width: 200px;
    aspect-ratio: 16/9;
    object-fit: cover;
    border-radius: 5px;
    margin-right: 10px;
  }
}

@media (max-width: 600px) {
  
  .upload-img{
    img{
      width: 100%;
      margin-right: 0;
    }
  }
}
</style>