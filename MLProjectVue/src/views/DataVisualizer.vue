<script setup>
import { ref, computed, watch, onMounted } from "vue";
import Header from "@/components/Header.vue";
import Footer from "@/components/Footer.vue";
// import PTable from "@/components/PTable.vue";
import DataPageTypeDiv from "@/components/DataPageType.vue";

// import rangeSlider from 'range-slider-input';
// import 'range-slider-input/dist/style.css';

import {useRouter,useRoute} from 'vue-router';

defineProps({});

const theme = ref(1);
const MainPageType = ref(2);
const title = ref('');

const nowPage = ref('');
const route = useRoute();
const router = useRouter();

const item = computed(() => {

  return route.params.item
});

// const isShowPTable = ref(true);

nowPage.value = item.value;

const searchInput = ref('');

const setTextFun = (data) => {
  searchInput.value = data;
}


const rangeValue1 = ref(0);
const rangeValue2 = ref(10);
let rangeSliderElement = null;

onMounted(() => {
  // rangeSliderElement = rangeSlider(document.getElementById('rangeTest'), {
  //   min:0,
  //   max:10,
  //   value: [rangeValue1.value, rangeValue2.value],
  //   onInput(e) {
  //     rangeValue1.value = e[0];
  //     rangeValue2.value = e[1];
  //   },
  // });
});


//watch rangeValue1
// watch(rangeValue1, (newVal, oldVal) => {
//   rangeSliderElement.value([newVal, rangeValue2.value]);
// });

//watch rangeValue2
// watch(rangeValue2, (newVal, oldVal) => {
//   rangeSliderElement.value([rangeValue1.value, newVal]);
// });
</script>

<template>
  <Header />
  <DataPageTypeDiv/>

  <div class="search-div">
    <div class="container">
      <div class="title">Data Visualizer</div>
      <div>
        <button class="btn btn-color-1-full btn-lg">Upload</button>
        <div class="text-color1"> or </div>
        <select name="" id="">
          <option value="">--select--</option>
          <option value="">2020_HEA_XXXXX.csv</option>
        </select>
      </div>
    </div>
  </div>
  <div class="content">
    <div class="filter-div">
      <div class="title">
        Plot Setting
        <!-- <button>Reset</button> -->
      </div>
      <div class="filter">
        <!-- <span class="material-icons-round">
        arrow_drop_down
        </span> -->
        <!-- <div class="title">Composition</div> -->
        
        <div class="filter-content show">
          <div class="filter-input">
            <div class="title">Select the chart type</div>
            <!-- <input type="text"> -->
          </div>
          <div class="filter-input">
            <div class="title">X axis</div>
            <input type="text">
          </div>
          <div class="filter-input">
            <div class="title">Y axis</div>
            <input type="text">
          </div>
          <div class="filter-input">
            <div class="title">Size</div>
            <input type="text">
          </div>
          <div class="filter-input">
            <div class="title">Plot</div>
            <input type="text">
          </div>
            
        </div>
      </div>
      <!-- <div class="filter">
        <span class="material-icons-round">
        arrow_right
        </span>
        <div class="title">Thermodynamics</div>
        
      </div> -->
    </div>
    <div class="content-div">
      <div class="plotOutput">
        
      </div>
    </div>
  </div>
  <Footer />
</template>

<style lang="scss" scoped>
.search-div{
  position: relative;
  width: 100%;
  background: #323D61;
  min-height: 300px;
  padding: 55px 0;
  .title{
      font-size: 50px;
      margin-bottom: 20px;
      font-weight: 700;
      color:#fff;
  }
  .search-text{
    font-size: 18px;
    color: #fff;
    text-align: center;
  }
  .search-group{
    position: relative;
    margin: 30px 0;
    display: flex;
    input{
      position: relative;
      display: block;
      border: 1px solid #ccc;
      background: #fff;
      height: 50px;
      width: 100%;
      line-height: 50px;
      border-radius: 0;
      font-size: 20px;
      color: #000;
      padding: 0;
      width: 135px;
      &:nth-child(1){
        position: relative;
        display: block;
        border-radius: 10px 0 0 10px;
        text-align: center;
        font-size: 20px;
        background: #D9D9D9;
        color: #666666;
      }
      &:nth-child(2){
        padding: 0 15px;
        width: calc(100% - 135px - 135px - 135px - 6px);
      }
    }
    button{
      position: relative;
      display: inline-block;
      width: 135px;
      background: #fff;
      color: #666666;
      border-radius: 0;
      font-size: 20px;
      text-align: center;
      border: 1px solid #ccc;
      &.btn-ptable{
        position: relative;
        display: inline-block;
        width: 135px;
        cursor: pointer;
        img{
          height: 40px;
        }
      }
      &.btn-search{
        position: relative;
        display: inline-block;
        width: 135px;
        background: var(--theme-color-1);
        border: 1px solid var(--theme-color-1);
        border-radius: 0 10px 10px 0;
        color: #fff;
        cursor: pointer;
      }
    }
    .clearBtn{
      position: absolute;
      right: calc(135px + 135px + 8px);
      top: 10px;

    }
  }

}

.content{
  position: relative;
  display: flex;
  .filter-div{
    position: relative;
    display: block;
    width: 400px;
    padding: 25px;
    >div{
      position: relative;
      display: block;
      width:  calc(100% - 40px);
      border-top: 1px solid #ccc;
      border-left: 1px solid #ccc;
      border-right: 1px solid #ccc;
      background: #fff;
      padding: 20px;
      &.title{
        font-size: 20px;
        font-weight: 700;
      }
      &.filter{
        width:  calc(100% - 30px);
        padding: 15px 15px 15px 15px;
        .material-icons-round{
          position: absolute;
          left: 5px;
          top: 10px;
          font-size: 36px;
        }
        >.title{
          font-size: 18px;
          height: auto;
          padding: 0 10px 0 40px;
          margin-bottom: 15px;
        }
        >.filter-content{
          position: relative;
          width: 100%;
          display: none;
          &.show{
            display: block;
          }
          

          >.filter-input{
            position: relative;
            display: block;
            width: 100%;
            margin-bottom: 15px;
            >input{
              width: calc(100% - 20px);
              padding: 5px 10px;
            }
            >.title{
              position: relative;
              font-size: 16px;
              font-weight: 700;
            }
          }
        }
      }
      &:nth-child(1){
        border-radius: 10px 10px 0 0;
        background: #EBEBEB;
        button{
          float:right;
          background: #fff;
          color: #666666;
          border: 1px solid #ccc;
          border-radius: 5px;
          font-size: 16px;
          text-align: center;
          padding: 8px 10px;
          cursor: pointer;
        }
      }
      &:nth-last-child(1){
        border-radius: 0 0 10px 10px;
        border-bottom: 1px solid #ccc;
      }
    }
  }
  .content-div{
    display: block;
    width: calc(100% - 400px);
    height: auto;
    // background: #fff;
    padding: 25px 25px 25px 0;
    >.plotOutput{
      position: relative;
      display: block;
      width: calc(100% - 40px);
      height: 80px;
      font-size: 20px;
      background: #FFFFFF;
      border: 1px solid #CCCCCC;
      border-radius: 10px;
      padding: 0 20px;
      .content{
        position: absolute;
        width: 100%;
        top: 15px;
        >span{
          margin-left: 10px;
          font-weight: 700;
        }
      }
      .showing{
        position: absolute;
        width: 100%;
        top: 40px;
        font-size: 14px;
        color: #ccc;
      }
      select{
        position: absolute;
        right: 20px;
        top: 20px;
        width: 150px;
        height: 40px;
        border: 1px solid #ccc;
        border-radius: 5px;
        background: #fff;
        font-size: 16px;
        color: #000;
      }
    }
  }
}

@media (max-width: 960px) {
  .search-div{
    padding: 10px;
    width: calc(100% - 20px);
    .title{
        font-size: 36px;
    }
    .search-text{
      font-size: 16px;
      text-align: left;
    }
  }
  .search-div .search-group>input{
      &:nth-child(1){
        width: 80px;
        font-size: 16px;
      }
      &:nth-child(2){
        width: calc(100% - 80px - 135px - 6px);
      }
  }
  .search-div .search-group>button.btn-ptable{
      display: none;
  }

  
  .content{
    display: block;
    .filter-div{
      width: calc(100% - 20px);
      padding: 10px;
    }
    .content-div{
      display: block;
      width: calc(100% - 20px);
      padding: 10px;
      height: auto;
    }
  }
    
}

@media (max-width: 768px) {

}
</style>
