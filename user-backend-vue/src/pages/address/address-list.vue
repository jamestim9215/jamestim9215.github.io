<script setup>
import { ref, watch, computed } from 'vue'
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

const category = ref("");

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


const getCategoryLabel = () => {
  let label = "";
  categoryOptions.forEach((item) => {
    if(item.value === category.value){
      label = item.label;
    }
  })
  return label;
}


const addressList = ref([
  {
    id: 1,
    options: ["view"],
    status: 1,
    name: "M01",
    imgUrl: "https://images.pexels.com/photos/65438/pexels-photo-65438.jpeg?auto=compress&cs=tinysrgb&w=600",
    subTitle: "address1",
    count: 4,
    landlordList: [
      {
        id: 1,
        name: "landlordName1",
        imageUrl: imgUserUrl("01.webp")
      },
      {
        id: 2,
        name: "landlordName2",
        imageUrl: imgUserUrl("02.webp")
      }
    ],
  },
  {
    id: 2,
    options: ["view"],
    status: 0,
    name: "M02",
    imgUrl: "https://images.pexels.com/photos/65438/pexels-photo-65438.jpeg?auto=compress&cs=tinysrgb&w=600",
    subTitle: "address2",
    count: 2,
    landlordList: [
      {
        id: 1,
        name: "landlordName1",
        imageUrl: imgUserUrl("01.webp")
      },
      {
        id: 2,
        name: "landlordName2",
        imageUrl: imgUserUrl("02.webp")
      },
      {
        id: 3,
        name: "landlordName3",
        imageUrl: imgUserUrl("03.webp")
      },
      {
        id: 4,
        name: "landlordName4",
        imageUrl: imgUserUrl("04.webp")
      }
    ],
  },

])

const deleteHandler = (item) => {
  confirmDel.value
    .show(
      "注意",
      `確認要刪除地址"${item.name}"嗎?<br>請輸入"Delete"確認刪除`,
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


const previewHandler = (item) => {
  router.push(`/address-list/${item.id}`)
}
</script>

<template>
  <div class="content-page">
    <div class="subHeader">
      <div class="subHeader-title">
        
      </div>
      <div class="subHeader-btn">

        <button class="btn btn-primary mr-0" style="cursor: initial;" v-if="category">{{ getCategoryLabel() }}</button>
        
        <div class="line" v-if="(rentStart != null && rentEnd != null) || category || address"></div>

        <div class="dropdown dropdown-primary filter">
          <span class="material-icons-outlined">
          filter_alt
          </span>
          過濾
          <div>
            <div>
              <label>類型</label>
              <select v-model="category">
                <option value="">--請選擇類型--</option>
                <option :value="key.value" v-for="(key, index) in categoryOptions" :key="index">{{key.label}}</option>
              </select>
            </div>
          </div>
        </div>

        <button class="btn btn-outline-primary" @click="router.push('/address-list/add')">
          <span class="material-icons-outlined">
          add
          </span>
          新增物件
        </button>
      </div>
    </div>
    <div class="content-title">
        地址列表
    </div>
    <div class="content-body">
      <div class="card-list">
        <div class="card" v-for="(addressItem, addressIndex) in addressList" :key="addressIndex">
          <div>
            <div class="card-header">
              <div>
                <div class="name">
                  {{ addressItem.name }}
                </div>
                <!-- <div class="status">
                  <span :class="'status-'+addressItem.status">{{ addressItem.status?'出租中':'未出租' }}</span>
                </div> -->
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
                    <button class="btn btn-block" @click="deleteHandler(addressItem)">
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
              {{ addressItem.subTitle }}
            </div>
            <img :src="addressItem.imgUrl" alt="">
            <div class="card-footer">
              <div>
                {{ addressItem.count }} 物件
              </div>
              <div class="landoerd-list-div">
                <div v-for="(landlordItem, landlordIndex) in addressItem.landlordList" :key="landlordIndex" v-show="landlordIndex<3">
                  <img :src="landlordItem.imageUrl" alt="" :title="landlordItem.name">
                </div>
                <div v-show="addressItem.landlordList.length>3">
                  <div>
                    + {{ addressItem.landlordList.length-3 }}
                  </div>
                </div>
              </div>
            </div>
            <div class="view-info-btn" @click="previewHandler(addressItem)">
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
        >div>.dropdown{
          position: relative;
          width: 30px;
          height: 30px;
          border: 1px solid var(--bs-light);
          border-radius: 3px;
          display: flex;
          justify-content: center;
          align-items: center;
          >span{
            color: var(--bs-gray);
            font-size: 20px;
          }
          >div{
            position: absolute;
            right: 0;
            top: 100%;
            width: auto;
            min-width: 150px;
            height: auto;
            // min-height: 200px;
            background: var(--bs-white);
            border: 1px solid var(--bs-gray-400);
            border-radius: 3px;
            padding: 5px;
            display: none;
            z-index: 1;
            >button{
              color: var(--bs-gray);
              background: transparent;
              &:hover{
                background: var(--badge-primary-bg);
                color: var(--badge-primary-color);
              }
            }
            &.active{
              display: block;
            }
          }
          &:hover{
            >div{
              display: block;
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
        }
      }
      >button{
        margin-top: 10px;
      }
      
    }
  }
}

.landoerd-list-div{
  position: relative;
  display: flex;
  align-items: center;
  >div{
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    // margin-left: 0px;
    margin-left: -10px;
    >img{
      background: var(--bs-gray-300);
      width: 100%;
      height: 100%;
      object-fit: cover;
    }
  }
  >div:nth-last-child(1){
    width: 30px;
    height: 30px;
    border-radius: 50%;
    overflow: hidden;
    margin-left: 5px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--bs-gray-300);
    color: var(--bs-white);
    font-weight: 600;
    line-height: 30px;
    text-align: center;
    font-size: 12px;
  }
}



</style>