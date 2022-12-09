<script setup>
import { ref } from 'vue'

const props = defineProps(['dataList','type'])

const historyDataList = ref(JSON.parse(JSON.stringify(props.dataList)));

const toLocaleString = (money) => { 
  return Number(
    parseFloat(money).toFixed(3)
  ).toLocaleString("en", {
    minimumFractionDigits: 0
  })
}
const getImageUrl = (name) => {
  return new URL(`../assets/product/${name}`, import.meta.url).href;
};


</script>

<template>
  <div class="cart" v-for="(item,index) in historyDataList" :key="item.id">

    <div class="order-info" >
      <div>
        <div>訂單編號：#T000005</div>
        <div>訂單日期：2022/10/31</div>
      </div>
      <div>
        <div class="order-status-div payment" v-if="item.orderStatus==='payment'">待付款</div>
        <div class="order-status-div complete" v-if="item.orderStatus==='complete'">已完成</div>
      </div>
    </div>
    <div class="order-list-title" v-if="item.isShowInfo">
      <div></div>
      <div>項目</div>
      <div>運送方式</div>
      <div>規格</div>
      <div>單價</div>
      <div>數量</div>
      <div>金額</div>
    </div>
    <div class="order-list" v-for="key in item.productList" v-if="item.isShowInfo">
      <div>
        <img :src="getImageUrl(key.img)" alt="">
      </div>
      <div class="one-line">{{key.name}}</div>
      <div class="one-line">
        <span>{{key.shippingMethod}}</span>
        <span>{{key.shippingDate}}</span>
      </div>
      <div class="one-line">{{key.specification}}</div>
      <div>${{toLocaleString(key.price)}}</div>
      <div>
        {{key.quantity}}
      </div>
      <div>${{toLocaleString(key.price * key.quantity)}}</div>
    </div>
    <div class="order-list-bottom">
      <div>{{item.shopName}}</div>
      <div>${{toLocaleString(item.totolPrice)}}</div>
    </div>

    <div class="options-div">
      <div></div>
      <div>
        <button  class="btn order-info-show-btn" @click="item.isShowInfo = false" v-if="item.isShowInfo==true">關閉查看</button>
        <button  class="btn order-info-show-btn" @click="item.isShowInfo = true" v-if="item.isShowInfo==false">查看更多</button>
      </div>
      <div>
        <router-link :to="'/order/payment/'+item.id" v-if="item.orderStatus==='payment'">
          <button  class="btn buy-now-btn">前往付款</button>
        </router-link>
      </div>
      
    
    </div>

    
  </div>
</template>

<style scoped>
.cart{
  background: var(--theme-white);
  padding: 10px;
  margin: 0 0 10px 0;
}

.cart>.shop-name{
  font-size: 16px;
  font-weight: 400;
}

.order-list-title{
  width: 100%;
  border-bottom: 3px solid var(--theme-yellow);
  margin: 5px 0 5px 0;
}

.order-list-title>div{
  position: relative;
  display: inline-block;
  align-self: center;
  color: var(--theme-yellow);
  font-size: 14px;
}

.order-list-title>div:nth-child(1){
  width: 90px;
}

.order-list{
  width: 100%;
  margin: 5px 0;
}
.order-list>div{
  position: relative;
  display: inline-block;
  align-self: center;
  color: var(--theme-black);
  font-size: 20px;
  background: var(--theme-light-50);
  min-height: 70px;
  line-height: 70px;
  vertical-align: middle;
}
.one-line{
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}

.order-list>div:nth-child(1) img{
  position: relative;
  display: inline-block;
  width: 50px;
  height: 50px;
  vertical-align: middle;
}

.order-list-title>div:nth-child(1){
  width: 70px;
}
.order-list>div:nth-child(1){
  width: 50px;
  padding:  0 10px;
}

.order-list-title>div:nth-child(2),
.order-list>div:nth-child(2){
  width: calc(100% - 760px);
}

.order-list-title>div:nth-child(3),
.order-list>div:nth-child(3){
  width: 260px;
}

.order-list>div:nth-child(3)>span:nth-child(1){
  position: absolute;
  top: 16px;
  line-height: 18px;
}
.order-list>div:nth-child(3)>span:nth-child(2){
  position: absolute;
  top: 40px;
  line-height: 16px;
  font-size: 16px;
  color: var(--theme-black);
  font-weight: 300;
}


.order-list-title>div:nth-child(4),
.order-list>div:nth-child(4){
  width: 160px;
}
.order-list-title>div:nth-child(5),
.order-list>div:nth-child(5){
  width: 80px;
  font-weight: 400;
}
.order-list>div:nth-child(5){
  color: var(--theme-red);
}

.order-list-title>div:nth-child(6),
.order-list>div:nth-child(6){
  width: 70px;
  padding: 0 10px 0 0;
}

.order-list-title>div:nth-child(7),
.order-list>div:nth-child(7){
  width: 100px;
  font-weight: 400;
  padding: 0 10px 0 0;
  text-align: right;
}

.order-list>div:nth-child(7){
  color: var(--theme-red);
}

.order-list-title>div:nth-child(8),
.order-list>div:nth-child(8){
  width: 30px;
  color: var(--theme-red);
}
.order-list>div:nth-child(8)>svg{
  cursor: pointer;
}
.order-list>div:nth-child(5){
  color: var(--theme-red);
}

.order-list input{
  display: inline-block;
  align-self: center;
  vertical-align: middle;
  padding: 0 0 0 10px;
}
.order-info{
  display: flex;
  font-size: 16px;
  color: var(--theme-gray);
  justify-content: space-between;
}
.order-info>div{

}
.order-list-bottom{
  margin-top: 5px;
  border-top: 3px solid var(--theme-yellow);
  border-bottom: 0;
  padding: 5px 0;
  display: flex;
  justify-content: space-between;
}

.order-list-bottom>div{
  font-size: 16px;
  color: var(--theme-gray);
}
.order-list-bottom>div:nth-child(2){
  font-size: 20px;
  color: var(--theme-red);
  font-weight: 500;
}

.options-div{
  position: relative;
  width: 100%;
  display: flex;
  justify-content: space-between;
}
.options-div>div{
  width: 33.33%;
  text-align: center;
}
.options-div>div:nth-child(3){
  text-align: right
}

.buy-now-btn{
  background: var(--theme-red);
  color: var(--theme-white);
  font-size: 12px;
  border: 0;
}
.buy-now-btn:hover{
  background: var(--theme-red-hover);
}

.order-info-show-btn{
  background: var(--theme-yellow-50);
  color: var(--theme-black);
  font-size: 12px;
  border: 0;
}
.order-info-show-btn:hover{
  background: var(--theme-yellow);
}

.order-status-div{
  padding: 4px 10px;
  font-weight: 400;
  font-size: 12px;
  background: var(--theme-white);
}
.order-status-div.payment{
  color: var(--theme-red);
  border: 1px solid var(--theme-red);
}
.order-status-div.complete{
  color: var(--theme-yellow);
  border: 1px solid var(--theme-yellow);
}




@keyframes okimg {
  0% {
    opacity: 0;
  }
  100%{
    opacity: 1;
  }
}

.establish-div>p{
  font-size: 18px;
  color: var(--theme-999);
  margin: 0;
}


@media (max-width: 899px) {
  
  .order-list-title>div{
    display: none;
  }

  .order-list{
    position: relative;
  }
  .order-list>div:nth-child(1)::before{
    position: absolute;
    content: "規格:";
    z-index: 3;
    left: 10px;
    top: 45px;
    color: var(--theme-gray);
    font-size: 14px;
  }
  .order-list>div:nth-child(1)::after{
    position: absolute;
    content: "運送:";
    z-index: 3;
    left: 10px;
    top: 80px;
    color: var(--theme-gray);
    font-size: 14px;
  }
  .order-list>div:nth-child(2){
    width: calc(100% - 70px);
  }
  .order-list>div:nth-child(3){
    width: calc(100% - 80px);
    padding: 30px 10px 0 70px;
  }
  .order-list>div:nth-child(3)>span:nth-child(1){
    top: 35px;
  }
  .order-list>div:nth-child(3)>span:nth-child(2){
    top: 60px;
    color: var(--theme-gray)
  }
  .order-list>div:nth-child(4){
    position: absolute;
    background: none;
    top: 45px;
    left: 70px;
  }
  .order-list>div:nth-child(5){
    position: absolute;
    z-index: 1;
    background: none;
    bottom: 10px;
    left: 70px;
    line-height: 30px;
    min-height: 30px;
  }
  .order-list>div:nth-child(5)::before{
    position: absolute;
    content: "x";
    z-index: 2;
    right: 3px;
    color: var(--theme-black);
    font-size: 14px;
  }
  .order-list>div:nth-child(6){
    position: absolute;
    z-index: 1;
    background: none;
    bottom: 10px;
    left: 170px;
    overflow: auto;
    line-height: 30px;
    min-height: 30px;
  }
  .order-list>div:nth-child(7){
    padding: 0 10px;
    line-height: 30px;
    min-height: 30px;
    width: calc(100% - 10px);
    padding: 0 10px 10px 0;
    text-align: right;
  }
  .order-list>div:nth-child(8){
    position: absolute;
    background: none;
    top: 0;
    right: 0;
    line-height: 40px;
    color: var(--theme-red);
  }

}
</style>
