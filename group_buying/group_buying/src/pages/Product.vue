<script setup>
import { ref, onMounted } from "vue";
// import { Splide, SplideSlide, Options } from '@splidejs/vue-splide';
import Header from "@/components/Header.vue";

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
});

// mainSplide.value.mount();
// thumbsSplide.value.mount();
</script>

<template>
  <Header></Header>
  <div class="cart-btn">
    <font-awesome-icon icon="fa-solid fa-cart-shopping" />
    <span>5</span>
  </div>
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
          <router-link to="/"><span>Home</span></router-link>
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
        </div>
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

@media (max-width: 767px) {
}

@media (max-width: 390px) {
}
</style>
