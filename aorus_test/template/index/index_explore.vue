<template>
  <div class="aorus-container pb-5" id="explore" >
    <div class="template-left-title">RECENT RELEASES</div>
    <div class="row">
      <div class="col-12 text-center">
        <div class="template-title glitch" data-text="Explore #AORUS">
          <span>
            Explore #AORUS
          </span>
        </div>
        <div class="template-content">
          Play at your peak with the highest performance <br>
          gaming equipment from AORUS.
        </div>
        <div class="template-btn">
          SEE MORE <i class="fas fa-angle-right"></i>
        </div>
      </div>

      <div class="col-12 explore-div">
        <div v-swiper:exploreSwiper="exploreSwiperOptions" ref="exploreSwiper">
          <div class="swiper-wrapper">
            <div class="swiper-slide" v-for="(key , index) in explore" :key="index">
                <div class="content-div animate_class" data-animate="animate__fadeInUp"  :data-animatedelay="index*0.3">
                  <span class="tag">{{key.tag}}</span>
                  <img :src="key.imgUrl" alt="">
                  <div class="content active">
                    <span></span>
                    {{key.name}}
                  </div>
                  <button>
                    More
                  </button>
                </div> 
            </div>
          </div>
          
          <div class="swiper-button-next">
            <img src="assets/images/svg/arrow.svg" width="45" alt="">
          </div>
          <div class="swiper-button-prev">
            <img src="assets/images/svg/arrow.svg" width="45" alt="">
          </div>
          <div class="swiper-pagination" >
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
      return this.$refs.exploreSwiper.swiper
    }
  },
  mounted(){
    
  },
  watch:{
		
	},
  data(){
    return {
      exploreSwiperOptions: {
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
        clickable: true,
        breakpoints: {
          576: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          768: {
            slidesPerView: 1,
            spaceBetween: 10,
          },
          992: {
            slidesPerView: 2,
            spaceBetween: 20,
          },
          1600: {
            slidesPerView: 3,
            spaceBetween: 20,
          },
        }
      },
     explore: [
       {
         imgUrl: 'https://www.aorus.com/upload/Product/F_20200513093610QPv5Bd.JPG',
         name: 'AORUS Z490 motherboards sport Tantalum Polymer Capacitors - Improved stability and performance',
         link: 'https://www.aorus.com/blog/AORUS-Z490-motherboards-sport-Tantalum-Polymer-Capacitors-Improved-stability-and-performance.php',
         tag: 'Featured'
       },
       {
         imgUrl: 'https://www.aorus.com/event_html/1194/images/20191003.jpg',
         name: 'Radeon 2 Game Bundle',
         link: 'https://www.aorus.com/blog/AORUS-Z490-motherboards-sport-Tantalum-Polymer-Capacitors-Improved-stability-and-performance.php',
         tag: 'Redemption'
       },
       {
         imgUrl: 'https://www.aorus.com/upload/Product/F_20200513093610QPv5Bd.JPG',
         name: 'AORUS Z490 motherboards sport Tantalum Polymer Capacitors - Improved stability and performance',
         link: 'https://www.aorus.com/blog/AORUS-Z490-motherboards-sport-Tantalum-Polymer-Capacitors-Improved-stability-and-performance.php',
         tag: 'Featured'
       },
       {
         imgUrl: 'https://www.aorus.com/event_html/1194/images/20191003.jpg',
         name: 'Radeon 2 Game Bundle',
         link: 'https://www.aorus.com/blog/AORUS-Z490-motherboards-sport-Tantalum-Polymer-Capacitors-Improved-stability-and-performance.php',
         tag: 'Redemption'
       },
       
     ]
    }
  },
  methods:{
    
  }
}
</script>

<style>

  .explore-div{
    position: relative;
    width: 100%;
    padding: 0px 100px 0 100px;
  }
  .explore-div a{
    text-decoration: none;
  }
  .explore-div .content-div{
    position: relative;
    width: 100%;
    height: auto;
    min-height: 550px;
  }

 

  .explore-div .content-div img{
    margin-top: 38px;
    width: 100%;
    height: 300px;
    clip-path: polygon(100% 0, 100% 25%, 98% 30%, 98% calc(100% - 30px), calc(98% - 30px) 100%, 0 100%, 0 0);
    -webkit-filter:grayscale(1);
    transition: 0.3s all;
    object-fit: cover;
  }



  .explore-div .content-div .content{
    position: relative;
    margin-top: 15px;
    font-family: 'TitilliumWeb',sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 25px;
    line-height: 36px;
    color: #737373;
    transition: 0.3s all;
  }  
  
  .explore-div .content-div .content::after{
    content: "";
    position: absolute;
    z-index: 3;
    left: 0;
    top: -14px;
    width: 0px;
    height: 3px;
    background: #ff6400;
    transition: 0.3s all;
    opacity: 1;
  }



  .explore-div .content-div button{
    display: inline-block;
    padding: 0 12px;
    margin-top: 10px;
    width: auto;
    min-width: 161px;
    height: 47px;
    color: #fff;
    font-size: 20px;
    line-height: 42px;
    text-align: center;
    text-transform: uppercase;
    background: #ff6400;
    clip-path: polygon(15px 0%, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px);
    cursor: pointer;
    transition: 0.3s all;
    border: 0;
    opacity: 0;
  }

  .explore-div .content-div:hover img{
      -webkit-filter:grayscale(0);
    
  }
  .explore-div .content-div:hover .content{
    color: #000;
  }
  .explore-div .content-div:hover .content::after{
    width: 53px;
    opacity: 1;
  }
  .explore-div .content-div:hover button{
    display: inline-block;
    clip-path: polygon(15px 0%, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px);
    background: #ff6400;
    color: #fff;
    opacity: 1;
  } 

  .explore-div .content-div:hover button:hover{
    background: #73FBFD;
    color: #000;
  } 

  .explore-div .content-div:hover button:focus{
    border: 0;
    outline: 0;
  } 

  .explore-div .content-div .tag{
    position: absolute;
    z-index: 10;
    left: 20px;
    top: 54px;
    width: 104px;
    height: 20px;
    font-family: 'TitilliumWeb',sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 20px;
    text-align: center;
    color: #FFFFFF;
  }
  .explore-div .content-div .tag::after{
    content: "";
    position: absolute;
    z-index: -1;
    left: 0;
    top: 0;
    background: #ff6400;
    width:100%;
    height: 100%;
    transform:skewX(-30deg);
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
    .explore-div{
      padding: 0px 60px 0 60px;
    }
    
    .explore-div .content-div{
      min-height: 550px;
    } 
    
  }

  @media (max-width: 1199px){
    .explore-div{
      padding: 0px 30px 0 30px;
    }

  }

  @media (max-width: 991px){
   
    .explore-div{
      padding: 0px 20px 0 20px;
    }
  }
  @media (max-width: 767px){
   
    .explore-div{
      padding: 0px 10px 0 10px;
    }

    
    .explore-div .content-div{
      min-height: 550px;
    } 
    
    .explore-div .content-div .content{
      font-size: 20px;
      line-height: 30px;
    }

    .explore-div .content-div button{
      padding: 0 12px;
      min-width: 120px;
      height: 35px;
      line-height: 32px;
    }

  }


  @media (max-width: 575px){
    .explore-div{
      padding: 0px 10px 0 10px;
    }

    .explore-div .content-div{
      min-height: 400px;
    } 
    
    .explore-div .content-div .content{
      font-size: 20px;
      line-height: 30px;
    }

    .explore-div .content-div button{
      padding: 0 12px;
      min-width: 120px;
      height: 35px;
      line-height: 32px;
    }

  }

</style>