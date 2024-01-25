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

const suiteList = ref([
  {
    id: 1,
    options: ["view"],
    status: 1,
    name: "M01",
    imgUrl: "https://images.pexels.com/photos/65438/pexels-photo-65438.jpeg?auto=compress&cs=tinysrgb&w=600",
    subTitle: "address1",
    count: 4,
    landlordName: "landlordName1",
    landlordImageUrl: imgUserUrl("01.webp")
  },
  {
    id: 2,
    options: ["view"],
    status: 0,
    name: "M02",
    imgUrl: "https://images.pexels.com/photos/65438/pexels-photo-65438.jpeg?auto=compress&cs=tinysrgb&w=600",
    subTitle: "address2",
    count: 2,
    landlordName: "landlordName2",
    landlordImageUrl: imgUserUrl("02.webp")
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

</script>

<template>
  <div class="content-page">
    <div class="content-title">
        地址列表
    </div>
    <div class="content-body">
      <div class="card-list">
        <div class="card" v-for="(addressItem, suiteIndex) in suiteList" :key="suiteIndex">
          <div>
            <div class="card-header">
              <div>
                <div class="name">
                  {{ addressItem.name }}
                </div>
                <div class="status">
                  <span :class="'status-'+addressItem.status">{{ addressItem.status?'出租中':'未出租' }}</span>
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
              <div>
                <img :src="addressItem.landlordImageUrl" alt="">
                {{ addressItem.landlordName }}
              </div>
            </div>
            <div class="view-info-btn">
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