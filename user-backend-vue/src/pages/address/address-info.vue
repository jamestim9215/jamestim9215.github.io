<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import {useRouter,useRoute } from 'vue-router';

import { LineChart, PieChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";


import "@/assets/css/content.scss";

Chart.register(...registerables);

const router = useRouter();
const route = useRoute();

const pageType = computed(() => {
  if(route.params.addressId == 'add'){
    contentType.value = 2;
    return 'add';
  }

  return 'edit';
});


const confirm = ref(null);
const confirmDel = ref(null);

const contentType = ref(1);
const name = ref('M01');


const infoCardTypeList = ref([
  {
    id: 1,
    name: "目前狀態與數據",
    iconName: "analytics",
    isShow: pageType.value == 'edit' ? true : false,
  },
  {
    id: 2,
    name: "編輯地址資訊",
    iconName: "edit",
    isShow: true,
  },
  {
    id: 3,
    name: "工作人員列表",
    iconName: "manage_accounts",
    isShow: pageType.value == 'edit' ? true : false,
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
  { text: "管理員姓名", value: "name" , width: 220},
  { text: "工作內容", value: "manageType"  },
]);
const tableItems = ref([
  {
    id: 1,
    name: "大壯",
    options: ["view"],
    photo: imgUserUrl('01.webp'),
    manageType: '房仲',
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

// 11張 張圖 第一張是預設大圖
const imgPreviewList = ref([
  // {
  //   img: imgUserUrl('https://images.pexels.com/photos/7031731/pexels-photo-7031731.jpeg?auto=compress&cs=tinysrgb&w=600'),
  //   file: null,
  // },
  // ...
])

const deleteImgHandler = (index) => {
  imgPreviewList.value.splice(index, 1);
};

const fileOnSelected = (e) => {
  const files = e.target.files;

  for (let i = 0; i < files.length; i++) {
    const file = files[i];
    const reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = () => {
      imgPreviewList.value.push({
        img: reader.result,
        file: file,
      });
    };
  }
};

const category = ref('');
const address = ref('');
const rent = ref('');

const categoryOptions = ref([
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
])


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
          <img :src="imgPreviewList[0].img" alt="" v-if="imgPreviewList.length>0">
          <img :src="imgUserUrl('https://images.pexels.com/photos/7031731/pexels-photo-7031731.jpeg?auto=compress&cs=tinysrgb&w=600')" alt="" v-else>
        </div>
        
        <div class="info-card-content" v-if="pageType=='edit'">
          <button class="btn btn-block mb-1 p-1" :class="contentType==infoCardTypeItem.id?'active':''" @click="contentType=infoCardTypeItem.id" v-for="(infoCardTypeItem, infoCardTypeIndex) in infoCardTypeList" :key="infoCardTypeIndex" v-show="infoCardTypeItem.isShow">
            <span class="material-icons-outlined">
              {{infoCardTypeItem.iconName}}
            </span>
            {{infoCardTypeItem.name}}
          </button>
        </div>
        
        <div class="info-card-footer" v-if="pageType=='edit'">
          <button class="btn btn-block btn-outline-danger">刪除地址</button>
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
            <div>
              <select name="" id="">
                <option value="">2021</option>
                <option value="">2022</option>
                <option value="">2023</option>
                <option value="">2024</option>
              </select>
            </div>
            <div class="chart-container">
              <LineChart :chartData="LineChartData" :options="LineChartOption" />
            </div>
            <div class="flex chart-flex mt-2">
              <div class="chart-container piechart">
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
          <div class="title" v-if="pageType=='edit'">
            <span class="material-icons-outlined">
              edit
            </span>
            編輯地址資訊
          </div>
          <div class="title" v-if="pageType=='add'">
            <span class="material-icons-outlined">
              edit
            </span>
            新增地址資訊
          </div>
          <div class="content">
            <div class="flex upload-img">
              <div v-if="imgPreviewList.length>0">
                <img :src="imgPreviewList[0].img" alt="">
                <span class="material-icons-outlined delete-btn" @click="deleteImgHandler(imgPreviewIndex)">
                  remove_circle_outline
                </span>
              </div>
              <div class="input-div file" v-if="imgPreviewList.length <= 11">
                <input type="file" id="address-image" accept=".png, .jpg, .jpeg" @change="fileOnSelected" multiple>
                <label class="uploadBtn" for="address-image">
                  <span>選擇檔案</span>
                  <div>沒有選擇檔案</div>
                </label>
              </div>
            </div>
            <div class="flex img-preview-list" v-if="imgPreviewList.length > 1">
              <div class="img-preview" v-for="(imgPreviewItem, imgPreviewIndex) in imgPreviewList" :key="imgPreviewIndex" v-show="imgPreviewIndex!=0">
                <img :src="imgPreviewItem.img" alt="">
                <span class="material-icons-outlined delete-btn" @click="deleteImgHandler(imgPreviewIndex)">
                  remove_circle_outline
                </span>
              </div>
            </div>
            <hr class="my-2">
            <div class="flex">
              <div class="input-div text">
                <input type="text" class="form-control" v-model="name">
                <label for="">別名</label>
              </div>
            </div>
            <div class="flex">
              <div class="input-div text">
                <input type="text" class="form-control" v-model="address">
                <label for="">地址</label>
              </div>
            </div>

          </div>
          <div class="footer">
            <button class="btn btn-outline-primary">儲存</button>
          </div>
        </div>


        <div v-if="contentType==3">
          <div class="title">
            <span class="material-icons-outlined">
            manage_accounts
            </span>
            工作人員列表
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
                {{ row.name }}
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
  >div{
    position: relative;
      margin-right: 10px;
    img{
      width: 200px;
      aspect-ratio: 16/9;
      object-fit: cover;
      border-radius: 5px;
      background: var(--bs-gray-200);
    }
    
  }
}

@media (max-width: 600px) {
  
  .upload-img{
    >div{
      img{
        width: 100%;
        margin-right: 0;
      }
    }
  }

  

  .chart-flex{
    >div:nth-child(1){
      width: 100%;
    }
    >div:nth-child(2){
      width: 100%;
    }

  }
}
</style>