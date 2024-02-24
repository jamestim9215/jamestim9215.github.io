<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import {useRouter,useRoute } from 'vue-router';

import { LineChart, PieChart, DoughnutChart } from 'vue-chart-3';
import { Chart, registerables } from "chart.js";


import "@/assets/css/content.scss";


Chart.register(...registerables);

const router = useRouter();
const route = useRoute();

const pageType = computed(() => {
  if(route.params.suiteId == 'add'){
    contentType.value = 4;
    return 'add';
  }

  return 'edit';
});


const confirm = ref(null);
const confirmDel = ref(null);

const contentType = ref(1);
const name = ref('A01');


const infoCardTypeList = ref([
  {
    id: 1,
    name: "歷年數據",
    iconName: "analytics",
    isShow: pageType.value == 'edit' ? true : false,
  },
  {
    id: 2,
    name: "歷年租客與合約",
    iconName: "history",
    isShow: pageType.value == 'edit' ? true : false,
  },
  {
    id: 3,
    name: "歷年收支",
    iconName: "account_balance",
    isShow: pageType.value == 'edit' ? true : false,
  },
  {
    id: 4,
    name: "編輯物件",
    iconName: "edit",
    isShow: true,
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
  { text: "合約內容", value: "options" , width:120 },
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


const chartLine = ref(null);

const LineChartData = ref({
  // labels: ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11','12'],
  labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'],
  datasets: [
    {
      data: [0, 3000, 5000 , 4000, 6000, 3000, 5000, 4000, 6000, 3000, 5000, 4000],
      borderColor: '#19ECD3',
      pointBackgroundColor: 'white',
      borderWidth: 3,
      radius: 0,
      fill: true,
      pointBorderColor: 'white',
      tension: 0.25,
      backgroundColor: ()=>{
        const ctx = chartLine.value.canvasRef.getContext('2d');
        const gradient = ctx.createLinearGradient(0, 0, 0, 400);
        gradient.addColorStop(0, '#E6FDFA');
        gradient.addColorStop(1, 'rgba(255,255,255, 0)');
        return gradient;
      },
    },
  ],

})

const LineChartOption = ref({
  responsive: true,
  maintainAspectRatio: false,
  scaleFontColor: 'red',
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
        color: '#999',
      },
      border: {
        color: 'rgba(0,0,0,0.1)'
      },
    },
    y: {
      grid: {
        display: true,
      },
      ticks: {
        color: '#999',
      },
      border: {
        color: 'rgba(0,0,0,0)'
      }
    },
  },
})

const doughnutChart1 = ref(null);
const doughnutChart2 = ref(null);

const DoughnutChart1Data = ref({
  labels: ['A', 'B'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [30, 70],
      backgroundColor: [
        '#4d69fa',
        '#ccc',
      ],
    },
  ],
})

const DoughnutChart2Data = ref({
  labels: ['A', 'B'],
  datasets: [
    {
      label: 'Dataset 1',
      data: [90, 10],
      backgroundColor: [
        '#4d69fa',
        '#ccc',
      ],
    },
  ],
})

const DoughnutChart1Option = ref({
  cutout: '70%',
  responsive: true,
  maintainAspectRatio: true,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: '報修金額',
    }
  },
})

const DoughnutChart2Option = ref({
  cutout: '70%',
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      display: false,
    },
    title: {
      display: false,
      text: '報修金額',
    }
  },
})

const DoughnutChart1plugins = ref([
  {
    beforeDraw: function(chart) {
      const width = chart.width,
            height = chart.height,
            ctx = chart.ctx;
      ctx.restore();
      const fontSize = (height / 114).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.fillStyle = '#000';
      ctx.textBaseline = "bold";
      const text = '30%',
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

      ctx.fillText(text, textX, textY);
      ctx.save();

      // 百分比底下有文字 
      ctx.restore();
      ctx.font = (fontSize / 2).toFixed(2) + "em sans-serif";
      ctx.fillStyle = '#4d69fa';
      ctx.textBaseline = "bold";
      const text2 = '入住率',
            textX2 = Math.round((width - ctx.measureText(text2).width) / 2),
            textY2 = height / 2 + 20;
      //顏色:#4d69fa

      ctx.fillText(text2, textX2, textY2);
      ctx.save();

      
    }
  }
])

const DoughnutChart2plugins = ref([
  {
    beforeDraw: function(chart) {
      const width = chart.width,
            height = chart.height,
            ctx = chart.ctx;
      ctx.restore();
      const fontSize = (height / 114).toFixed(2);
      ctx.font = fontSize + "em sans-serif";
      ctx.fillStyle = '#000';
      ctx.textBaseline = "bold";
      const text = '30%',
            textX = Math.round((width - ctx.measureText(text).width) / 2),
            textY = height / 2;

      ctx.fillText(text, textX, textY);
      ctx.save();

      // 百分比底下有文字 
      ctx.restore();
      ctx.font = (fontSize / 2).toFixed(2) + "em sans-serif";
      ctx.textBaseline = "bold";
      const text2 = '入住率',
            textX2 = Math.round((width - ctx.measureText(text2).width) / 2),
            textY2 = height / 2 + 20;
      //顏色:#4d69fa
      ctx.fillStyle = '#4d69fa';

      ctx.fillText(text2, textX2, textY2);
      ctx.save();

      
    }
  }
])






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
          <button class="btn btn-block btn-outline-danger">刪除物件</button>
        </div>

      </div>
      <div class="info-setting" v-if="contentType==1">
        <div>
          <div class="flex">
            <div class="title">
              <span class="material-icons-outlined">
                analytics
              </span>
              統計數據
            </div>
            <div class="center-btns">
              <button class="btn">
                Week
              </button>
              <button class="btn active">
                Month
              </button>
              <button class="btn">
                Year
              </button>
            </div>
            <div class="right-btns">
              <button class="btn btn-sm">
                <span class="material-icons-outlined">
                keyboard_arrow_left
                </span>
              </button>
              <button class="btn active">
                2024
              </button>
              <button class="btn btn-sm">
                <span class="material-icons-outlined">
                keyboard_arrow_right
                </span>
              </button>
            </div>
          </div>
          <div class="content">
            <div class="chart-flex-div">
              <div>
                <button class="btn btn-block btn-chart-left">報修金額</button>
                <button class="btn btn-block btn-chart-left">電費</button>
                <button class="btn btn-block btn-chart-left">水費</button>
              </div>
              <div class="chart-container">
                <LineChart ref="chartLine" :chartData="LineChartData" :options="LineChartOption" />
              </div>
            </div>
            <!-- <div class="flex chart-flex mt-2">
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
             -->
          </div>
        </div>
      </div>

      <div class="info-setting info-setting-2" v-if="contentType==1">
        <div>
          <div class="flex">
            <div class="title">
              <span class="material-icons-outlined">
                analytics
              </span>
              數據
            </div>
          </div>
          <div class="content flex">
            <div style="width:50%;padding: 20px 60px">
              <DoughnutChart ref="doughnutChart1" :chartData="DoughnutChart1Data" :options="DoughnutChart1Option" :plugins="DoughnutChart1plugins" />
            </div>
            <div style="width:50%;padding: 20px 60px" >
              <DoughnutChart ref="doughnutChart2" :chartData="DoughnutChart2Data" :options="DoughnutChart2Option" :plugins="DoughnutChart2plugins" />
            </div>
          </div>
        </div>
      </div>

      <div class="info-setting info-setting-2" v-if="contentType==1">
        <div>
          <div class="flex">
            <div class="title">
              <span class="material-icons-outlined">
                analytics
              </span>
              歷年數據
            </div>
          </div>
          <div class="content">
              <table class="chart-table">
                <thead>
                  <tr>
                    <th>項目</th>
                    <th>金額</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>月平均電費</td>
                    <td>$ 1000</td>
                  </tr>
                  <tr>
                    <td>報修金額</td>
                    <td>$ 8000</td>
                  </tr>
                  <tr>
                    <td>月平均水費</td>
                    <td>$ 1200</td>
                  </tr>
                  <tr>
                    <td>月平均水費</td>
                    <td>$ 600</td>
                  </tr>
                </tbody>
              </table>
              
          </div>
        </div>
      </div>


      <div class="info-setting" v-if="contentType==2">
        <div>
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
      </div>


      <div class="info-setting" v-if="contentType==3">

        <div>
          
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
      </div>


      <div class="info-setting" v-if="contentType==4">
        <div>
          <div class="title" v-if="pageType=='edit'">
            <span class="material-icons-outlined">
              edit
            </span>
            編輯物件
          </div>
          <div class="title" v-if="pageType=='add'">
            <span class="material-icons-outlined">
              edit
            </span>
            新增物件
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
                <input type="file" id="suite-image" accept=".png, .jpg, .jpeg" @change="fileOnSelected" multiple>
                <label class="uploadBtn" for="suite-image">
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
                <label for="">物件名稱</label>
              </div>
            </div>
            <div class="flex">
              <div class="input-div select">
                <select class="form-select" v-model="category">
                  <option value="">--請選擇類型--</option>
                  <option :value="key.value" v-for="(key, index) in categoryOptions" :key="index">{{key.label}}</option>
                </select>
                <label for="">類型</label>
              </div>
            </div>
            <div class="flex">
              <div class="input-div text">
                <input type="text" class="form-control" v-model="address">
                <label for="">地址</label>
              </div>
            </div>
            <div class="flex">
              <div class="input-div text">
                <input type="number" min="0" class="form-control" v-model="rent">
                <label for="">預設租金</label>
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
  position: relative;
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

.chart-flex-div{
  display: flex;
  justify-content: flex-start;
  align-items: center;
  >div:nth-child(1){
    padding: 10px;
    margin-right: 30px;
    .btn-chart-left{
      width: 100%;
      margin-bottom: 10px;
      background: #fff;
      color: var(--bs-info);
      border: 1px solid var(--bs-gray-200);
    }
    &:last-child{
      margin-bottom: 0;
    }
  }
  .chart-container{
    width: 100%;
    max-width: 1120px;
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

.chart-table{
  width: 100%;
  // border-collapse: collapse;
  border-spacing: 0;
  thead{
    background: var(--bs-gray-100);
    th{
      padding: 10px;
      text-align: left;
      font-size: 14px;
      font-weight: 700;
      color: var(--bs-dark);
      &:nth-last-child(1){
        text-align: right;
      }
    }
  }
  tbody{
    tr{
      td{
        padding: 10px;
        text-align: center;
        font-size: 14px;
        color: var(--bs-dark);
        text-align: left;
        &:nth-last-child(1){
          text-align: right;
        }
      }
      &:nth-child(even){
        background: var(--bs-gray-100);
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