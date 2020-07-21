<template>
  <div class="aorus-container mb-5">
    <div class="template-left-title">explore our PRODUCT</div>
    <div class="row">
      <div class="col-12 text-center">
        <div class="template-title glitch " data-text="Gaming Gears">
          <span>
          Gaming Gears
          </span>
        </div>
        <div class="template-content">
          Play at your peak with the highest performance gaming equipment from AORUS.
        </div>
        <div class="template-btn">
          SHOW ALL Gears <i class="fas fa-angle-right"></i>
        </div>
      </div>

      <div class="col-12 product-line-div">
        <div v-swiper:productListSwiper="productListSwiperOptions" ref="productListSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(key , index) in productList" :key="index">
              <div class="product-div">
                <a :href="key.link">
                  <div class="box">
                    <img :src="key.imgUrl" alt="">
                    <div class="name active">
                      <span></span>
                      {{key.name}}
                    </div>
                  </div>
                </a>
              </div>  
            </div>
          </div>
          
          <div class="swiper-button-next">
            <img src="assets/images/svg/arrow.svg" width="45" alt="">
          </div>
          <div class="swiper-button-prev">
            <img src="assets/images/svg/arrow.svg" width="45" alt="">
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: {
    
  },
  computed: {
    
    swiper() {
      return this.$refs.productListSwiper.swiper
    }
  },
  mounted(){
    
  },
  watch:{
		
	},
  data(){
    return {
      productListSwiperOptions: {
        // loop: true,
        speed: 1000,
        autoplay: false,
        slidesPerView: 1,
        spaceBetween: 0,
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        pagination: false,
        clickable: true,
        breakpoints: {
          576: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
          1600: {
            slidesPerView: 4,
            spaceBetween: 20,
          },
        }
      },
     productList: [
       {
         imgUrl: 'https://static.gigabyte.com/Product/2/7249/2020043017292972629c53754fd600e173884f0c287d18f6_big.png',
         name: 'Motherboard',
         link: 'https://www.gigabyte.com/Motherboard',
       },
       {
         imgUrl: 'https://static.gigabyte.com/Product/3/7017/2019072515314279487ade0b9a0288b1a31e377c7cb3e5db_big.png',
         name: 'Graphics Card',
         link: 'https://www.gigabyte.com/Graphics-Card',
       },
       {
         imgUrl: 'https://static.gigabyte.com/Product/2/7249/2020043017292972629c53754fd600e173884f0c287d18f6_big.png',
         name: 'Laptop',
         link: 'https://www.gigabyte.com/Laptop',
       },
       {
         imgUrl: 'https://static.gigabyte.com/Product/11/6939/201906111152346276763cbb3f4b42b582cddaab9b8f02a8_mm.png',
         name: 'Monitor',
         link: 'https://www.gigabyte.com/Monitor/All-Series',
       },
       {
         imgUrl: 'https://static.gigabyte.com/Product/13/6467/2017111317472467_big.png',
         name: 'Peripherals',
         link: 'https://www.gigabyte.com/Keyboard',
       },
       {
         imgUrl: 'https://www.aorus.com/upload/Product/F_201712051655651aoGC7.PNG',
         name: 'Components',
         link: 'https://www.aorus.com/product-list.php?t=48',
       },
       
     ]
    }
  },
  methods:{
    
  }
}
</script>

<style>

  .product-line-div{
    position: relative;
    width: 100%;
    padding: 0px 100px 0 100px;
  }

  .product-line-div .product-div{
    position: relative;
    width: 100%;
    min-height: 400px;
    text-align: center;
  }

  .product-line-div .product-div .box{
    position: absolute;
    bottom: 0;
    width: 100%;
    cursor: pointer;
  }

  .product-line-div .product-div img{
    width: 320px;
    transition: 0.3s all;
  }
  
  .product-line-div .product-div:hover img{
    width: 400px;
  }

  .product-line-div .product-div .name{
    position: relative;
    margin-top: 16px;
    font-family: 'TitilliumWeb',sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 22px;
    line-height: 33px;
    text-align: center;
    padding: 4px 6px;
    color: #8E8E8E;
    transition: .3s all;
  }

  .product-line-div .product-div:hover .name{
    color: #ff6400;
    
    font-size: 29px;
    line-height: 44px;
  }

  .product-line-div .product-div .name span{
    position: absolute;
    width: 100%;
    height: 100%;
    left: 0;
    top: 0;
    z-index: 0;
  }


  .product-line-div .product-div .name::before, 
  .product-line-div .product-div .name::after,
  .product-line-div .product-div .name span::before,
  .product-line-div .product-div .name span::after
  {
      content:'';
      position:absolute;
      /* display:inline-block; */
      border-color:#ff6400;
      /* border-color:rgba(0,0,0,0); */
      box-sizing:border-box;
      border-style:solid;
      /* width:0;
      height:0; */
      width:10px;
      height:10px;
      transition:all 0.3s ease-in-out
  }

  .product-line-div .product-div .name:before{
    top:50%;
    left:50%;
    border-width:0 0 0 0;
    z-index:5;
  }

  .product-line-div .product-div .name:after{
    bottom:50%;
    right:50%;
    border-width:0 0 0 0;
  }

  .product-line-div .product-div .name span::before {
    top:50%;
    right:50%;
    border-width:0 0 0 0;
    z-index:5;
  }

  .product-line-div .product-div .name span::after{
    bottom:50%;
    left:50%;
    border-width:0 0 0 0;
  }


  .product-line-div .product-div:hover .name:before, 
  .product-line-div .product-div:hover .name:after,
  .product-line-div .product-div:hover .name span::before,
  .product-line-div .product-div:hover .name span::after {
    display:block;
    width:10px;
    height:10px;
    border-color:#ff6400;
  }

  .product-line-div .product-div:hover .name:before{
    top:0px;
    left:0px;
    border-width:2px 0 0 2px;
    z-index:5;
  }
  .product-line-div .product-div:hover .name:after{
    bottom:0px;
    right:0px;
    border-width:0 2px 2px 0;
  }
  
  .product-line-div .product-div:hover .name span:before {
    top:0px;
    right:0px;
    z-index:5;
    border-width:2px 2px 0 0  ;
  }
  .product-line-div .product-div:hover .name span::after {
    bottom:0px;
    left:0px;
    border-width: 0 0 2px 2px;
  }


  .swiper-button-prev{
    transform: rotate(180deg);
  }

  .swiper-button-prev::after,
  .swiper-button-next::after{
    display: none;
  }

  .swiper-button-disabled{
    display: none;
  }

  @media (max-width: 1919px){
    .product-line-div{
      padding: 0px 60px 0 60px;
    }
  }

  @media (max-width: 1199px){
    .product-line-div{
      padding: 0px 30px 0 30px;
    }
  }

  @media (max-width: 991px){
   
    .product-line-div{
      padding: 0px 20px 0 20px;
    }
  }
  @media (max-width: 767px){
   
    .product-line-div{
      padding: 0px 10px 0 10px;
    }
  }


  @media (max-width: 575px){
    .product-line-div{
      padding: 0px 10px 0 10px;
    }
  }

</style>