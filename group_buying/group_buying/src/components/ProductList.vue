<script setup>
import { ref } from 'vue'

const productData = ref([
  {
    id: 0,
    tag: "最新上市",
    name: "原味烤饅頭 (5入) x 10份",
    content: "必須排隊超過一個小時的超平民美食～超好吃的脆皮烤饅頭",
    img: "banner.png",
    price: 400,
    sales: 360,
    isCoupon: true,
    isGiveaway: true, 
  },
  {
    id: 1,
    tag: "",
    name: "花生烤饅頭 (5入) x 10份",
    content: "必須排隊超過一個小時的超平民美食～超好吃的脆皮烤饅頭",
    img: "banner.png",
    price: 400,
    sales: 360,
    isCoupon: false,
    isGiveaway: true, 
  },
  {
    id: 2,
    tag: "",
    name: "蔥烤饅頭 (5入) x 10份",
    content: "必須排隊超過一個小時的超平民美食～超好吃的脆皮烤饅頭",
    img: "banner.png",
    price: 400,
    sales: 360,
    isCoupon: false,
    isGiveaway: false, 
  }
])

const getUrl = (key)=> {
  // return encodeURI(key)
  return key
}

const getImageUrl = (name) => {
  return new URL(`../assets/product/${name}`, import.meta.url).href
}

</script>

<template>
  <h2 class="tag-title">NEW! 最新團購</h2>
  <div class="product-list-div">
    <div v-for="(key,index) in productData" :key="key.id">
      <router-link :to="'/product/'+getUrl(key.name)">
        <div>
          <div class="notice-tag" v-if="key.tag">
            {{key.tag}}
          </div>
          <img :src="getImageUrl(key.img)" alt="">
          <div class="product-title">{{key.name}}</div>
          <div class="product-content">{{key.content}}</div>
          <div class="product-price">市價 $ {{key.price}}</div>
          <div class="product-sales-price">團購優惠 <span>$ {{key.sales}}</span></div>
          <div class="product-discount-coupon">
            <span class="tag-coupon" v-if="key.isCoupon">折價券</span>
            <span class="tag-giveaway" v-if="key.isGiveaway">贈品</span>
          </div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<style scoped>
.tag-title{
  /* font-size: 20px; */
  font-weight:400;
  margin-bottom: 10px;
  padding: 0 10px;
  margin: 15px 0 10px 0;
}

.product-list-div{
  position: relative;
  width: 100%;
  display: inline-flex;
  flex-direction: row;
  flex-wrap: wrap ;
}
.product-list-div>div{
  position: relative;
  min-height: 10px;
  width: calc(100%/ 3  - 20px); 
  padding: 0 10px;
  margin-bottom: 20px;
}
.product-list-div>div>a{
  position: relative;
  display: flex;
  text-decoration: none;
}
.product-list-div>div>a>div{
  width: 100%;
  background-color: #fff;
  padding: 0 0 40px 0;
}
.product-list-div>div>a>div>img{
  width: 100%;
  height: 135px;
  object-fit: cover;
  object-position: center center;
}

.notice-tag{
  position: absolute;
  top: 10px;
  left: 0px;
  width: 80px;
  height: 35px;
  line-height: 35px;
  font-size: 16px;
  padding: 0 10px 0 10px;
  color: var(--theme-white);
  background: var(--theme-red);
  clip-path: polygon(0% 0%, 100% 0, calc(100% - 15px) 50%, 100% 100%, 0% 100%);
}

.product-title,
.product-content{
  color: var(--theme-black);
  width: calc(100% - 10px);
  padding: 0 5px;
}
.product-title{
  font-size: 14px;
  font-weight: 500;
}
.product-content{
  margin-top: 5px;
  font-size: 10px;
  width: 70%;
  color: var(--theme-gray);
}
.product-sales-price{
  position: absolute;
  z-index: 10;
  right: 5px;
  bottom: 2px;
  color: var(--theme-red);
  font-size: 18px;
  padding: 0 5px;
  font-weight: 500;
}
.product-sales-price>span{
  font-size: 28px;
}


.product-price{
  position: absolute;
  z-index: 10;
  right: 5px;
  bottom: 35px;
  color: var(--theme-gray);
  font-size: 14px;
  padding: 0 5px;
  text-decoration: line-through;
}

.product-discount-coupon{
  position: absolute;
  z-index: 10;
  left: 5px;
  bottom: 5px;
  width: calc(50% - 30px);
}

.product-discount-coupon>span{
  font-size: 12px;
  margin-right: 5px;
}

.tag-coupon{
  position: relative;
  display: inline-block;
  padding: 2px 4px;
  border: 1px solid var(--theme-red);
  color: var(--theme-red);
  background: var(--theme-white);
}
.tag-giveaway{
  position: relative;
  display: inline-block;
  padding: 2px 4px;
  border: 1px solid var(--theme-yellow);
  color: var(--theme-white);
  background: var(--theme-yellow);
}

@media (max-width: 999px) {
  .product-list-div>div{
    min-height: 10px;
    width: calc(100% / 2 - 20px); 
    padding: 0 10px;
    margin-bottom: 20px;
  }
}

@media (max-width: 589px) {
  .product-list-div>div{
    min-height: 10px;
    width: calc(100% / 1 - 20px); 
    padding: 0 10px;
    margin-bottom: 20px;
  }
}
</style>
