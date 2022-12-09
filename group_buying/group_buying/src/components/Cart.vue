<script setup>
import { ref } from 'vue'
import { useRouter,useRoute } from 'vue-router'

const props = defineProps(['dataList','type'])


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

const router = useRouter()
const route = useRoute()
const checkoutHandler = () => {
  router.push('/order/establish/'+route.params.cartId)
}
const establishHandler = () => {
  router.push('/order/payment/'+route.params.cartId)
}
const paymentHandler = () => {
  router.push('/order/status/'+route.params.cartId)
}

</script>

<template>
  <div class="cart" v-for="item in props.dataList" :key="item.id">
    <div class="status-div" v-if="type!=='cart'">
      <div :class="{
        'active':type==='checkout',
        'done': type==='establish' || type==='payment' || type==='status' || type==='complete',
        'show': type==='checkout'
      }"
      >確認訂單</div>
      <div :class="{
        'active':type==='establish',
        'done': type==='payment' || type==='status' || type==='complete',
        'show': type==='checkout' ||type==='establish'
      }">訂單成立</div>
      <div :class="{
        'active':type==='payment',
        'done': type==='status' || type==='complete',
        'show': type==='establish' || type==='payment'
      }" >付款</div>
      <div :class="{
        'active':type==='status',
        'done': type==='complete',
        'show': type==='payment' || type==='status' || type==='complete'
      }" >狀態</div>
      <div :class="{
        'active':type==='complete',
        'show': type==='status' || type==='complete'
      }">訂單完成</div>
    </div>

    <div class="shop-name" v-if="type==='cart' || type==='checkout' || type==='complete'">
      {{item.shopName}}
    </div>
    <div class="order-list-title" v-if="type==='cart' || type==='checkout' || type==='complete' || type==='myorders'">
      <div></div>
      <div>項目</div>
      <div>運送方式</div>
      <div>規格</div>
      <div>單價</div>
      <div>數量</div>
      <div>金額</div>
      <div></div>
    </div>
    <div class="order-list" v-for="key in item.productList" v-if="type==='cart' || type==='checkout' || type==='complete'">
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
        <input type="number" v-model="key.quantity">
      </div>
      <div>${{toLocaleString(key.price * key.quantity)}}</div>
      <div>
        <font-awesome-icon  v-if="type==='cart'" icon="fa-solid fa-xmark" />
      </div>
    </div>
    <div class="order-list-title order-list-bottom" v-if="type==='cart'">
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div></div>
      <div>總金額</div>
      <div>${{toLocaleString(item.totolPrice)}}</div>
      <div></div>
    </div>
    <div class="payment-method-div" v-if="type==='checkout'">
      <div>
        付款方式
        <div>
          <div class="radio-div">
            <input name="payment-method-radio" type="radio" id="transfer" checked>
            <label for="transfer">
              <span></span>
              匯款
            </label>
          </div>
          <div class="radio-div">
            <input name="payment-method-radio" type="radio" id="ecpay">
            <label for="ecpay">
              <span></span>
              綠界
            </label>
          </div>
        </div>
      </div>
    </div>

    <div class="establish-div" v-if="type==='establish'">
      <div class="title">訂單成立</div>
      <img src="@/assets/ok.png" alt="">
      
      <p>訂單已成立!</p>
      <p>請注意! 訂單尚未完成!</p>
      <p>請點選 ”下一步 付款”  </p>
      <br>
      <p>訂單編號 #T000005</p>
      <p>金額 $ 72,000</p>
    </div>

    <div class="payment-div" v-if="type==='payment' || type==='status'">
      <div class="box title"><label>匯款金額</label> <span>${{toLocaleString(72000)}}</span></div>
      <div class="box" v-if="type==='payment'">
        <div>
          <label>匯款期限：</label>   <span>2022-11-03 23:59:59 (如超過此期限訂單自動失效)</span>
        </div>
        <div>請匯款至以下帳號</div>
        <div class="content">
          <label>銀行  :</label>  (000) XX銀行 OO分行<br>
          <label>帳號  :</label>  000000-000000000<br>
          <label>姓名  :</label>  OOO
        </div>
      </div>
      <div class="box" v-if="type==='payment'">
        匯款帳號後五碼
        <input type="text" maxlength="5">

      </div>
      <div class="box title" v-if="type==='status'">
        <label>訂單狀態</label>  

        <span>款項確認中</span>
        <span>已確認款項</span>
        <span>訂單準備中</span>
        <span>可取貨</span>
        <span>已出貨</span>
        <span>已完成</span>
      </div>
    </div>

    <div class="options-div">
      <router-link :to="'/checkout/'+item.id">
        <button  v-if="type==='cart'" class="btn buy-now-btn">去買單</button>
      </router-link>
      
      <div class="checkout-btn-div" v-if="type==='checkout'" >
        <span>總金額</span>
        <span>${{toLocaleString(item.totolPrice)}}</span>
        <button @click="checkoutHandler"  class="btn buy-now-btn">結帳</button>
      </div>
      <div  v-if="type==='establish'" >
        <button @click="establishHandler"  class="btn buy-now-btn">下一步 付款</button>
      </div>  
      <div  v-if="type==='payment'" >
        <button @click="paymentHandler"  class="btn buy-now-btn">我已經匯款</button>
      </div>  
      <div  v-if="type==='status'" >
        <router-link to="/my-orders/">
          <button  class="btn buy-now-btn">我的訂單</button>
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
  margin: 10px 0 5px 0;
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
  width: calc(100% - 780px);
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

.order-list-bottom{
  margin-top: 5px;
  border-top: 3px solid var(--theme-yellow);
  border-bottom: 0;
  padding: 10px 0;
}

.order-list-bottom>div{
  font-size: 20px;
  color: var(--theme-black);
}

.options-div{
  position: relative;
  width: 100%;
  text-align: right;
}
.buy-now-btn{
  background: var(--theme-red);
  color: var(--theme-white);
  font-size: 16px;
  border: 0;
}
.buy-now-btn:hover{
  background: var(--theme-red-hover);
}


.payment-method-div{
  margin-top: 5px;
  border-top: 3px solid var(--theme-yellow);
  border-bottom: 0;
  padding: 10px 0;
}
.payment-method-div>div{
  position: relative;
  display: block;
  padding: 10px;
  min-height: 80px;
  background: var(--theme-light-50);
}
.payment-method-div>div>div{
  display: block;
  padding: 15px;
}

.checkout-btn-div>span{
  font-size: 20px;
  margin-right: 30px;
  font-weight: 400;
}
.checkout-btn-div>span:nth-child(2){
  color: var(--theme-red);
}
.radio-div{
  position: relative;
  display: inline-block;
  margin-right: 30px;
}
.radio-div>input{
  visibility: hidden; 
}
.radio-div>label{
  padding: 0 10px 0 10px;
}
.radio-div>label>span{
  height: 20px;
  width: 20px;
  /* border: 2px solid var(--theme-yellow); */
  /* border-radius: 50%; */
  background: var(--theme-white);
  display: inline-block;
  position: absolute;
  left: 0;
  top: 4px;
}

.radio-div>label>span::after { /* 中間點點 */
  content: "";
  display: block;
  height: 70%;
  width: 70%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  background-color: var(--theme-yellow);
  opacity: 0;
  transition: opacity 0.2s;
}

.radio-div>input:checked ~ label>span::after {
  opacity: 1;
}

.status-div{
  position: relative;
  display: flex;
  margin-bottom: 10px;
}
.status-div>div{
  position: relative;
  width: 100%;
  height: 40px;
  text-align: center;
  line-height: 40px;
  font-size: 18px;
  font-weight: 400;
  background: var(--theme-light-50);
}

.status-div>div.active{
  background: var(--theme-yellow);
}
.status-div>div.done{
  background: var(--theme-yellow-50);
}
.status-div>div.show{
  display: inline;
}

.status-div>div::after{
  position: absolute;
  content: "";
  z-index: 1;
  right: -40px;
  border-top:  20px solid rgba(0,0,0,0);
  border-right:  20px solid rgba(0,0,0,0);
  border-bottom:  20px solid rgba(0,0,0,0);
  border-left: 20px solid var(--theme-light-50);
}

.status-div>div:nth-last-child(1):after{
  visibility: hidden;
}


.status-div>div.active::after{
  border-left: 20px solid var(--theme-yellow);
}

.status-div>div.done::after{
  border-left: 20px solid var(--theme-yellow-50);
}

.establish-div{
  position: relative;
  text-align: center;
  display: block;
  padding: 10px;
}
.establish-div>.title{
  font-size: 24px;
  font-weight: 400;
  margin: 10px 0;
}

.establish-div>img{
  opacity: 1;
  animation-name: okimg;
  animation-duration: 0.5s;
}


.payment-div{
  position: relative;
  display: block;
  font-weight: 400;
}

.payment-div>.box{
  position: relative;
  display: block;
  background: var(--theme-light-50);
  padding: 10px;
  margin-bottom: 10px;
  line-height: 32px;
}

.payment-div>.box.title{
  font-size: 20px;
}

.payment-div>.box>label{
  position: relative;
  display: inline-block;
  width: 120px;
}

.payment-div>.box>span{
  color: var(--theme-red);
}

.payment-div>.box>.content{
  position: relative;
  display: block;
  /* padding:  0 10px 0 10px; */
}

.payment-div>.box>.content>label{
  position: relative;
  display: inline-block;
  width: 60px;
  padding:0 30px;
}

.payment-div>.box>input{
  width: 200px;
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

  
  .status-div>div{
    display: none;
  }
  
  .status-div>div.show{
    display: inline;
  }

}
</style>
