<script setup>
import { ref } from 'vue'

import Header from '@/components/Header.vue'

</script>

<template>
  <Header></Header>

  <div class="container">
    <div class="cart-div">
      <div
        style="
          vertical-align: middle;
          display: flex;
          justify-content: space-between;
        "
      >
        <router-link to="/">
          <button class="btn back-btn">
            <font-awesome-icon icon="fa-solid fa-angle-left" /> 繼續購買
          </button>
        </router-link>
        <div class="bread-crumbs-div">
          <span>購物車</span>
          <font-awesome-icon icon="fa-solid fa-angle-left" />
          <router-link to="/"><span>Home</span></router-link>
        </div>
      </div>
      <div class="title-div">
        <h1>購物車</h1>
      </div>
      <div class="cart" v-for="k in 2">
        <div class="shop-name">
          二良烤饅頭(新莊店)
        </div>
        <div class="order-list-title">
          <div></div>
          <div>項目</div>
          <div>運送方式</div>
          <div>規格</div>
          <div>單價</div>
          <div>數量</div>
          <div>金額</div>
          <div></div>
        </div>
        <div class="order-list" v-for="n in 2">
          <div>
            <img src="@/assets/product/banner.png" alt="">
          </div>
          <div class="one-line">原味烤饅頭 (5入) x 10組</div>
          <div class="one-line">
            <span>自取  -  二良烤饅頭(新莊)</span>
            <span>2022-11-01 14:00:00</span>
          </div>
          <div class="one-line">原味烤饅頭</div>
          <div>$360</div>
          <div>
            <input type="number">
          </div>
          <div>$36,000</div>
          <div>
            <font-awesome-icon icon="fa-solid fa-xmark" />
          </div>
        </div>
        <div class="order-list-title order-list-bottom">
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div></div>
          <div>總金額</div>
          <div>$72,000</div>
          <div></div>
        </div>
        <div class="options-div">
          <button class="btn buy-now-btn">去買單</button>
        </div>
      </div>


    </div>
  </div>
</template>

<style scoped>
.cart-div {
  padding: 10px;
}
.title-div{
  background: var(--theme-white);
  padding: 10px;
  margin: 10px 0;
}
h1{
  font-size: 18px;
  font-weight: 500;
  margin: 0;
}

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
