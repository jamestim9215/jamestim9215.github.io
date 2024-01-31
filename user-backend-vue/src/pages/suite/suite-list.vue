<script setup>
import { ref, watch, computed, onMounted } from 'vue'
import {useRouter,useRoute } from 'vue-router';

import "@/assets/css/content.scss";

const router = useRouter();
const route = useRoute();

const confirm = ref(null);
const confirmDel = ref(null);


const imgUserUrl = (url) => {
  if(url.match('http')){
    return url;
  }else{
    return new URL(`/src/assets/images/user/${url}`, import.meta.url).href
  }
}

const suiteList = ref([
  {
    id: 1,
    options: ["view"],
    status: 1,
    name: "A01",
    imgUrl: "https://images.pexels.com/photos/7031731/pexels-photo-7031731.jpeg?auto=compress&cs=tinysrgb&w=600",
    subTitle: "address1",
    currentRent: 9000,
    tenantName: "tenantName1",
    tenantImageUrl: imgUserUrl("01.webp")
  },
  {
    id: 2,
    options: ["view"],
    status: 0,
    name: "A02",
    imgUrl: "https://images.pexels.com/photos/7031731/pexels-photo-7031731.jpeg?auto=compress&cs=tinysrgb&w=600",
    subTitle: "address2",
    currentRent: 14000,
    tenantName: "tenantName2",
    tenantImageUrl: imgUserUrl("02.webp")
  },
  {
    id: 1,
    options: ["view"],
    status: 1,
    name: "A01",
    imgUrl: "https://images.pexels.com/photos/7031731/pexels-photo-7031731.jpeg?auto=compress&cs=tinysrgb&w=600",
    subTitle: "address1",
    currentRent: 9000,
    tenantName: "tenantName1",
    tenantImageUrl: imgUserUrl("01.webp")
  },
  {
    id: 2,
    options: ["view"],
    status: 0,
    name: "A02",
    imgUrl: "https://images.pexels.com/photos/7031731/pexels-photo-7031731.jpeg?auto=compress&cs=tinysrgb&w=600",
    subTitle: "address2",
    currentRent: 14000,
    tenantName: "tenantName2",
    tenantImageUrl: imgUserUrl("02.webp")
  },
  {
    id: 1,
    options: ["view"],
    status: 1,
    name: "A01",
    imgUrl: "https://images.pexels.com/photos/7031731/pexels-photo-7031731.jpeg?auto=compress&cs=tinysrgb&w=600",
    subTitle: "address1",
    currentRent: 9000,
    tenantName: "tenantName1",
    tenantImageUrl: imgUserUrl("01.webp")
  },
  {
    id: 2,
    options: ["view"],
    status: 0,
    name: "A02",
    imgUrl: "https://images.pexels.com/photos/7031731/pexels-photo-7031731.jpeg?auto=compress&cs=tinysrgb&w=600",
    subTitle: "address2",
    currentRent: 14000,
    tenantName: "tenantName2",
    tenantImageUrl: imgUserUrl("02.webp")
  },

])

const address = ref("");
const category = ref("");
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

const previewHandler = (item) => {
  router.push(`/suite-list/${item.id}`)
}

const deleteHandler = (item) => {
  confirmDel.value
    .show(
      "注意",
      `確認要刪除物件"${item.name}"嗎?<br>請輸入"Delete"確認刪除物件`,
      "確認",
      "取消",
      "btn-danger ",
      "btn-outline-brand-two",
      3,
      "Delete"
    )
    .then(() => {
      
      // .catch((err) => {
      //   confirm.value
      //   .show(
      //     "Error",
      //     err,
      //     "確認",
      //     null,
      //     "btn-danger ",
      //     null,
      //     2
      //   )
      // })
    })
}

const isRent = (type) => {
  if(type === 'rentStart'){
    if(rentStart.value < 0 || rentStart.value > 1000000){
      rentStart.value = 0;
    }
    
    if(rentStart.value > rentEnd.value && rentEnd.value != null){
      rentStart.value = rentEnd.value;
    }
    rentStart.value = Number(rentStart.value);
  }else{
    if(rentEnd.value < 0 || rentEnd.value > 1000000){
      rentEnd.value = 1000000;
    }
    if(rentEnd.value < rentStart.value){
      rentEnd.value = rentStart.value;
    }
    rentEnd.value = Number(rentEnd.value);
  }
}

onMounted(() => {
  
})

</script>

<template>
  <div class="content-page">
    <div class="subHeader">
      <div class="subHeader-title">
        
      </div>
      <div class="subHeader-btn">

        <button class="btn btn-primary mr-0" style="cursor: initial;" v-if="address">{{ getAddressLabel() }}</button>
        <button class="btn btn-primary mr-0" style="cursor: initial;" v-if="category">{{ getCategoryLabel() }}</button>
        <button class="btn btn-primary mr-0" style="cursor: initial;" v-if="rentStart != null && rentEnd != null">  {{ rentStart }}$ ~ {{ rentEnd }}$</button>
        
        <div class="line" v-if="(rentStart != null && rentEnd != null) || category || address"></div>

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
              <label>類型</label>
              <select v-model="category">
                <option value="">--請選擇類型--</option>
                <option :value="key.value" v-for="(key, index) in categoryOptions" :key="index">{{key.label}}</option>
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

        <button class="btn btn-outline-primary" @click="router.push('/suite-list/add')">
          <span class="material-icons-outlined">
          add
          </span>
          新增物件
        </button>
      </div>
    </div>
    <div class="content-title">
      物件列表
    </div>
    <div class="content-body">
      <div class="card-list">
        <div class="card" v-for="(suiteItem, suiteIndex) in suiteList" :key="suiteIndex">
          <div>
            <div class="card-header">
              <div>
                <div class="name">
                  {{ suiteItem.name }}
                </div>
                <div class="status">
                  <span :class="'status-'+suiteItem.status">{{ suiteItem.status?'出租中':'未出租' }}</span>
                </div>
              </div>
              <div>
                <div class="dropdown">
                  <span class="material-icons-outlined">
                  more_horiz
                  </span>
                  <div>
                    <!-- <button class="btn btn-block">
                      Edit
                    </button>
                    <hr> -->
                    <button class="btn btn-block" @click="deleteHandler(suiteItem)">
                      <span class="material-icons-outlined">
                      delete
                      </span>
                      Delete
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div class="subTitle">
              {{ suiteItem.subTitle }}
            </div>
            <img :src="suiteItem.imgUrl" alt="">
            <div class="card-footer">
              <div>
                {{ suiteItem.currentRent }}$
              </div>
              <div>
                <img :src="suiteItem.tenantImageUrl" alt="">
                {{ suiteItem.tenantName }}
              </div>
            </div>
            <div class="view-info-btn" @click="previewHandler(suiteItem)">
              <div>
                查看詳情
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  <Confirm ref="confirm" />
  <ConfirmDel ref="confirmDel" />
</template>

<style lang="scss" scoped>
  
.card-list{
  >.card{
    >div{
      >.card-header{
        display: flex;
        justify-content: space-between;
        align-items: center;
        >div{
          display: flex;
          align-items: center;
          >.name{
            font-size: 20px;
            font-weight: 600;
          }
          >.status{
            margin-left: 10px;
            >span{
              padding: 2px 4px;
              border-radius: 5px;
              font-size: 13px;
              font-weight: 700;
              &.status-1{
                background: var(--badge-success-bg);
                color: var(--badge-success-color);
              }
              &.status-0{
                background: var(--badge-danger-bg);
                color: var(--badge-danger-color);
              }
            }
          }
        }
      }
      >.subTitle{
        margin: 10px 0;
        font-size: 14px;
        color: var(--bs-gray);
      }
      >img{
        width: 100%;
        aspect-ratio: 16/9;
        object-fit: cover;
      }
      >div{
        display: flex;
        justify-content: space-between;
        align-items: center;
        &.card-footer{
          >div:nth-child(1){
            color: var(--bs-primary);
          } 
        }
        >div{
          display: flex;
          align-items: center;
          >img{
            width: 30px;
            height: 30px;
            border-radius: 50%;
            object-fit: cover;
            margin-right: 10px;
            background: var(--bs-light);
          }
        }
      }
      >button{
        margin-top: 10px;
      }
      
    }
  }
}



</style>