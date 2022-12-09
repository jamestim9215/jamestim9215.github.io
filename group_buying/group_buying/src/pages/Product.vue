<script setup>
import { ref, onMounted } from "vue";
// import { Splide, SplideSlide, Options } from '@splidejs/vue-splide';
import Header from "@/components/Header.vue";
import { showLoading, hideLoading } from '@/common/common' 

const slides = ref([
  {
    id: 0,
    img: "product.png",
  },
  {
    id: 1,
    img: "banner.png",
  },
  {
    id: 2,
    img: "product.png",
  },
  {
    id: 3,
    img: "banner.png",
  },
]);
const getImageUrl = (name) => {
  return new URL(`../assets/product/${name}`, import.meta.url).href;
};

var splideOptions = {
  perPage: 1,
  rewind: true,
  type: "fade",
  // heightRatio: 0.5,
  pagination: false,
  arrows: false,
  cover: true,
};
var splideListOptions = {
  perPage: 4,
  rewind: true,
  // fixedWidth      : 96,
  // fixedHeight     : 96,
  isNavigation    : true,
  // gap             : 10,
  focus           : 'center',
  pagination      : false,
  cover           : true,
  dragMinThreshold: {
    mouse: 4,
    touch: 10,
  },
};

const mainSplide = ref();
const thumbs = ref();

onMounted(() => {
  const thumbsSplide = thumbs.value?.splide;
  if (thumbsSplide) {
    mainSplide.value?.sync(thumbsSplide);
  }
})

const ShippingMethod = ref('')
const Quantity = ref(10)
const QuantityMin = ref(10)
const QuantityMax = ref(100)


// mainSplide.value.mount();
// thumbsSplide.value.mount();
</script>

<template>
  <Header></Header>
  <router-link to="/shopping-cart">
    <div class="cart-btn">
      <font-awesome-icon icon="fa-solid fa-cart-shopping" />
      <span>5</span>
    </div>
  </router-link>
  <div class="container">
    <div class="product-div">
      <div
        style="
          vertical-align: middle;
          display: flex;
          justify-content: space-between;
        "
      >
        <router-link to="/">
          <button class="btn back-btn">
            <font-awesome-icon icon="fa-solid fa-angle-left" />團購列表
          </button>
        </router-link>
        <div class="bread-crumbs-div">
          <span>{{ $route.params.id }}</span>
          <font-awesome-icon icon="fa-solid fa-angle-left" />
          <router-link to="/"><span>首頁</span></router-link>
        </div>
      </div>
      <div class="product-content">
        <div class="product-img-div">
          <div class="product-preview-img">
            <Splide ref="mainSplide" :options="splideOptions" aria-label="">
              <SplideSlide v-for="slide in slides" :key="slide.id">
                <div>
                  <img :src="getImageUrl(slide.img)" alt="" />
                </div>
              </SplideSlide>
            </Splide>
          </div>
          <div class="product-preview-img-list">
            <Splide ref="thumbs" :options="splideListOptions" aria-label="">
              <SplideSlide v-for="slide in slides" :key="slide.id">
                <div >
                  <img :src="getImageUrl(slide.img)" alt="" />
                </div>
              </SplideSlide>
            </Splide>
          </div>
        </div>
        <div class="product-info">
          <h1>{{$route.params.id}}</h1>
          <div class="price-div">
            <div>
              團購優惠 <span>$ 360</span>
            </div>
            <div>
              市價 $ 400
            </div>
          </div>
          <div class="input-info-div">
            <div class="input-div">
              <label for="">運送方式</label>
              <select name="" id="" v-model="ShippingMethod">
                <option value="">--請選擇--</option>
                <option value="A">自取</option>
                <option value="B">宅配</option>
              </select>
              <font-awesome-icon icon="fa-solid fa-caret-down" />
            </div>
            <!-- <div class="input-div">
              <label for="">選擇分店</label>
              <select name="" id="">
                <option value="">--請選擇--</option>
                <option value="">二良烤饅頭 (新莊)</option>
              </select>
              <font-awesome-icon icon="fa-solid fa-caret-down" />
            </div> -->
            <div class="input-div" v-if="ShippingMethod==='B'">
              <label for="">預計送達</label>
              <select name="" id="">
                <option value="">--請選擇--</option>
                <option value="">2022-12-05 下午</option>
              </select>
              <font-awesome-icon icon="fa-solid fa-caret-down" />
            </div>
            <div class="input-div" v-if="ShippingMethod==='A'">
              <label for="">預計取貨</label>
              <select name="" id="">
                <option value="">--請選擇--</option>
                <option value="">2022-12-05 下午</option>
              </select>
              <font-awesome-icon icon="fa-solid fa-caret-down" />
            </div>
            <div class="input-div">
              <label for="">規格</label>
              <select name="" id="">
                <option value="">--請選擇--</option>
                <option value="">原味烤饅頭</option>
                <option value="">花生烤饅頭</option>
              </select>
              <font-awesome-icon icon="fa-solid fa-caret-down" />
            </div>
            <div class="input-div">
              <label for="">數量</label>
              <input type="number" :min="QuantityMin" :max="QuantityMax" name="" id="" v-model="Quantity">
              <small>* 最低下單數量 {{QuantityMin}}</small>
            </div>
            <div class="totel-price-div">
              共: <span>$ 36,000</span> 元
            </div>
            <div>
              <button class="btn add-to-cart-btn"><font-awesome-icon icon="fa-solid fa-cart-shopping" /> 加入購物車</button>
              <button class="btn buy-now-btn">直接購買</button>
            </div>
          </div>
        </div>
      </div>
      <div class="product-description">
        <div class="title">產品介紹</div>
        <div style="font-size: 32px;line-height: 39px;color: #FF00FF;">
          <p>必須排隊超過一個小時的超平民美食～</p> 
          <p>超好吃的脆皮烤饅頭</p>
        </div>
        <div class="title">店家資訊</div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.product-div {
  padding: 10px;
}

.product-content {
  position: relative;
  margin-top: 10px;
  width: 100%;
  height: auto;
  min-height: 300px;
  background: var(--theme-white);
  display: flex;
}

.product-img-div {
  position: relative;
  width: 400px;
  height: auto;
  min-height: 450px;
  padding: 25px;
}
.product-info{
  position: relative;
  width: calc(100% - 400px - 25px);
  height: auto;
  min-height: 450px;
  padding: 20px 25px 20px 0;
}
.price-div{
  margin-top: 15px;
  padding: 5px 10px 10px 10px;
  background: var(--theme-light-50);
  display: flex;
}
.price-div>div{
  font-size: 20px;
  align-self: flex-end;
}
.price-div>div:nth-child(1){
  color: var(--theme-red);
}
.price-div>div:nth-child(2){
  margin-left: 15px;
  color: var(--theme-gray);
  text-decoration: line-through;
}

.price-div>div:nth-child(1)>span{
  font-size: 30px;
  font-weight: 500;
}

h1{
  font-size: 24px;
  font-weight: 500;
  margin: 0;
}


.product-preview-img img {
  width: 400px;
  height: 400px;
  object-fit: cover;
  object-position: center center;
}

.product-preview-img-list {
  width: calc(100% + 18px);
  text-align: center;
  margin: 0 -9px;
  margin-top: 18px;
}
.product-preview-img-list img {
  position: relative;
  display: inline-block;
  width: 82px;
  height: 82px;
  object-fit: cover;
  object-position: center center;
}
.splide__track--nav>.splide__list>.splide__slide{
  border: 0;
}
.splide__track--nav>.splide__list>.splide__slide.is-active{
  border: 0;
}
.splide__track--nav>.splide__list>.splide__slide.is-active::after{
  content: "";
  position:absolute;
  left: 11px;
  top: 0;
  width: 76px;
  height: 76px;
  border: 3px solid var(--theme-yellow);
}
.input-info-div{
  position: relative;
  width: 100%;
  max-width: 400px;
}
.input-div{
  position: relative;
  width: 100%;
  margin-top: 15px;
  display: flex;
}
.input-div>label{
  width: 160px;
  font-size: 16px;
  align-self: center;
}
.input-div>select,
.input-div>input{
  width: 100%;
  border: 1px solid var(--theme-gray);
  height: 38px;
  line-height: 38px;
  font-size: 16px;
  color: var(--theme-black);
}
.input-div>select{
  padding: 0 40px 0 10px;
  -moz-appearance:none; /* Firefox */
  -webkit-appearance:none; /* Safari and Chrome */
  appearance:none;
}
.input-div>input[type=number]{
  padding: 0 0 0 10px;
}
.input-div>small{
  position: absolute;
  display: inline-block;
  width: auto;
  bottom: -18px;
  right: 0;
  color: var(--theme-gray);
}

.input-div>svg{
  position: absolute;
  right: 10px;
  top: 10px;
  color: var(--theme-gray);
}

.totel-price-div{
  margin: 20px 0;
  color: var(--theme-gray);
  font-size: 20px;
  text-align: right;
  font-weight: 500;
}
.totel-price-div>span{
  color: var(--theme-red);
  font-size:30px;
  font-weight: 500;
}

.add-to-cart-btn,
.buy-now-btn{
  height: 50px;
  line-height: 50px;
  font-size: 20px;
  padding: 0 30px;
  border: 0;
}

.add-to-cart-btn{
  background: var(--theme-yellow);
  color: var(--theme-black);
  margin: 0 15px 10px 0;
  width: 220px;
}
.buy-now-btn{
  background: var(--theme-red);
  color: var(--theme-white);
  width: calc(100% - 15px - 220px);
}

.add-to-cart-btn:hover{
  background: var(--theme-yellow-hover);
}
.buy-now-btn:hover{
  background: var(--theme-red-hover);
}

.product-description{
  position: relative;
  background: var(--theme-white);
  margin-top: 15px;
  width: calc(100% - 50px);
  padding: 25px;
}
.product-description>.title{
  position: relative;
  font-size: 18px;
  font-weight: 500;
  margin: 0px 0 15px 0;
}

@media (max-width: 909px) {
  .product-img-div {
    position: relative;
    width: 300px;
    height: auto;
    min-height: 450px;
    padding: 25px;
  }

  .product-preview-img img {
    width: 300px;
    height: 300px;
  }

  .product-preview-img-list {
    width: calc(100% + 10px);
    margin: 0 -6px;
    margin-top: 6px;
  }

  .product-preview-img-list img {
    width: 70px;
    height: 70px;
  }

  .splide__track--nav>.splide__list>.splide__slide.is-active::after{
    left: 4px;
    width: 64px;
    height: 64px;
  }

  .product-info{
    width: calc(100% - 300px);
  }

  .add-to-cart-btn{
    width: calc(60% - 15px);
    padding: 0 10px;
  }
  .buy-now-btn{
    width: calc(40%);
    padding: 0 10px;
  }

}
@media (max-width: 767px) {


  .product-content {
    flex-wrap: wrap
  }
  
  .product-img-div {
    width: 100%;
    padding: 10px 10px 0 10px;
    min-height: inherit;
  }

  .product-preview-img img {
    width: 100%;
    height: 300px;
  }

  .product-preview-img-list {
    width: calc(100% + 10px);
    margin: 0 -6px;
    margin-top: 6px;
  }

  .product-preview-img-list img {
    position: relative;
    width: calc(100% - 10px);
    height: 70px;
  }

  .splide__track--nav>.splide__list>.splide__slide.is-active::after{
    left: 5px;
    width: calc(100% - 16px);
    height: 64px;
  }

  .product-info{
    width: calc(100%);
    padding: 10px;
  }
  .input-info-div{
    max-width: inherit;
  }
  .product-description{
    margin-top: 10px;
    width: calc(100% - 20px);
    padding: 10px;
}

}

@media (max-width: 390px) {
}
</style>
