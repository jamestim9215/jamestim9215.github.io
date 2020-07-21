<template>
  <div class="aorus-container p-0">
    <div v-swiper:mySwiper="swiperOptions" ref="mySwiper">
      <div class="swiper-wrapper">
        <div class="swiper-slide" v-for="(key , index) in banners" :key="index">
          <div class="banner-div">
            <!-- <div class="banner-video"  v-if="key.videoUrl!=''">
              <iframe width="560" height="315" src="https://www.youtube.com/embed/FUrEgXx_lg0?controls=0" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
            </div> -->
            <img class="bannerImg" :src="key.imageUrl" width="100%" v-if="key.imageUrl != ''">
            <div class="banner-bg-cover"></div>
            <div class="fullLink" v-if="key.fullLink!=''"  @click="openLink(key.fullLink)"></div>
            <div class="banner-context-div" :class="'text-'+key.contentAlign+ ' v-align-'+key.contentValign" v-show="key.title!='' || key.subTitle!='' || key.btnText!=''">
              <div class="banner-box" :class="'text-'+key.textAlign">
                <div class="banner-title glitch" :data-text="key.title" v-show="key.title!=''"><span>{{key.title}}</span></div>
                <div class="banner-sub-title" v-show="key.subTitle!=''">{{key.subTitle}}</div>
                <div class="banner-btn" v-show="key.btnText!=''" @click="openLink(key.btnLink)">{{key.btnText}}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div class="swiper-pagination" >
      </div>
    </div>
    
    <div class="bannerTimer">
      <div class="bannerTimerBar" :class="countDown?'active':''"></div>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: {
    banners : Array
  },
  computed: {
    swiper() {
      return this.$refs.mySwiper.swiper
    }
  },
  mounted(){
    var _this = this;
    _this.countDown = true;
    this.swiper.on("slideChangeTransitionEnd", function() {
      if(_this.swiper.activeIndex - 1 < _this.banners.length){
        _this.countDown = false;
        setTimeout(function() {
          _this.countDown = true;
        }, 1);
      }
    });
  },
  watch:{
		
	},
  data(){
    return {
      countDown: false,
      swiperOptions: {
        speed: 1000,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
          // waitForTransition: true
        },
        pagination: {
          el: '.swiper-pagination',
          clickable: true,
        },
        navigation: {
          nextEl: '.swiper-button-next',
          prevEl: '.swiper-button-prev'
        },
        clickable: true,
      },
    }
  },
  methods:{
    onSetTranslate() {
      console.log('onSetTranslate')
    },
    onSwiperSlideChangeTransitionStart() {
      console.log('onSwiperSlideChangeTransitionStart')
    },
    onSwiperClickSlide(index, reallyIndex) {
      console.log('Swiper click slide!', reallyIndex)
    },
    openLink(link){
      if(link != '')
      window.open(link);
    }
  }
}
</script>

<style>
.banner-bg-cover{
  position: absolute;
  width: 100%;
  height: 300px;
  bottom: 0;
  left: 0;
  z-index:1 ;
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%,rgba(255,255,255,0) 100%);
}

.bannerTimer{
  position: absolute;
  right: 20px;
  top: 40%;
  z-index: 5;
  width: 2px;
  height: 50%;
  background: rgba(255, 255, 255, 0.4);
}

.bannerTimerBar{
  position: absolute;
  right: 0;
  top: 0;
  z-index: 1;
  width: 100%;
  height: 0%;
  background: rgba(255, 255, 255, 1);
}

.bannerTimerBar.active{
  height: 100%;
  width: 100%;
  transition: 5s linear;
}

.swiper-container {
  height: auto;
  width: 100%;
}

.swiper-slide {
  display: -webkit-box;
  display: -ms-flexbox;
  display: flex;
  -webkit-box-pack: center;
  -ms-flex-pack: center;
  justify-content: center;
  -webkit-box-align: center;
  -ms-flex-align: center;
  align-items: center;
}
.swiper-pagination{
  text-align: right;
  padding: 0 15px;
}
.bannerImg{
  height: 766px;
  object-fit: cover;
  object-position: center center;
}

.swiper-container-horizontal>.swiper-pagination-bullets .swiper-pagination-bullet{
  margin: 0 5px ;
}
.swiper-pagination-bullet{
  width: 20px;
  height: 5px;
  background: #B7B7B7;
  border-radius: 0;
  transform-origin:top;
  transform:skewX(-45deg);
  opacity: 1;
  transition: 0.3s all;
  cursor: pointer;
  /* border: 1px solid #000; */
}

.swiper-pagination-bullet-active{
  background: #ff6400;
  width: 137px;
}
.banner-div{
  position: relative;
  width: 100%;
  height: 100%;
}
.banner-video{
  position: absolute;
  z-index: 1;
  top: 0;
  left: 0;
  width: 100%;
  height: 766px;
  background: rgba(255,0,0,0.5);
}
.banner-video iframe{
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.fullLink{
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  cursor: pointer;
}
.banner-context-div{
  position: absolute;
  z-index: 3;
  top: 0;
  left: 0;
  width: 100%;
  height: auto;
  padding: 0 249px;
}

.v-align-top{
  top: 80px;
}

.v-align-middle{
  top: 290px;
}

.v-align-bottom{
  top: auto;
  bottom: 80px;
}


.banner-title{
  position: relative;
  display: inline-block;
  /* margin-top: 290px; */
  font-family: 'Aldrich',sans-serif;
  font-size:60px;
  text-transform: uppercase;
  text-shadow: 1px 1px 4px rgba(150, 150, 150, 1);
}
.banner-title span::before{
  content: "";
  position: absolute;
  z-index: 1;
  bottom: 5px;
  left: 0;
  height: 3px;
  width: 90px;
  background: #B7B7B7;
  transform:skewX(-60deg);
}
.banner-title span::after{
  content: "";
  position: absolute;
  z-index: 1;
  bottom: 6.5px;
  left: 0;
  height: 1.5px;
  width: 182px;
  background: #B7B7B7;
  transform:skewX(-60deg);
}

.banner-sub-title{
  margin-top: 15px;
  font-family: 'TitilliumWeb',sans-serif;
  font-size:20px;
  text-shadow: 1px 1px 4px rgba(150, 150, 150, 1);
}

.banner-btn{
  display: inline-block;
  padding: 0 12px;
  margin-top: 30px;
  width: auto;
  min-width: 161px;
  height: 47px;
  color: #fff;
  font-size: 20px;
  line-height: 42px;
  text-align: center;
  text-transform: uppercase;
  clip-path: polygon(15px 0%, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px);
  background: #ff6400;
  cursor: pointer;
  transition: 0.3s all;
}

.banner-btn:hover{
  clip-path: polygon(15px 0%, 100% 0, 100% calc(100% - 15px), calc(100% - 15px) 100%, 0 100%, 0 15px);
  background: #73FBFD;
  color: #000;
}

.banner-box{
  display: inline-block;
  height: auto;
  width: auto;
  min-width: 400px;
  /* background: rgba(255,255,255,0.3); */
}


  @media (max-width: 575px){
    .banner-context-div{
      padding: 0 30px;
    }
    .banner-box{
      min-width: 90%;
    }
    .banner-title{
      /* margin-top: 200px; */
      font-size:32px;
    }
    .banner-sub-title{
      margin-top: 10px;
      font-size: 16px;
    }
    
    .banner-btn{
      margin-top: 15px;
      min-width: 100px;
      height: 36px;
      font-size: 16px;
      line-height: 36px;
      clip-path: polygon(10px 0%, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
    }

    .banner-btn:hover{
      clip-path: polygon(10px 0%, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
    }

    .bannerImg{
      height: 600px;
      object-fit: cover;
      object-position: center center;
    }
    .swiper-pagination{
      text-align: center;
      padding: 0 10px;
    }
    .swiper-pagination-bullet{
      width: 15px;
      height: 6px;
      background: #B7B7B7;
      border-radius: 0;
      transform-origin:top;
      transform:skewX(-45deg);
      opacity: 1;
      transition: 0.3s all;
      cursor: pointer;
      /* border: 1px solid #000; */
    }

    .swiper-pagination-bullet-active{
      background: #ff6400;
      width: 60px;
    }

    .bannerTimer{
      right: auto;
      left: 0;
      top: auto;
      bottom: 0;
      width: 100%;
      height: 2px;
    }

    .bannerTimerBar{
      right: auto;
      left: 0;
      width: 0%;
      height: 100%;
    }

    
    .v-align-top{
      top: 80px;
    }

    .v-align-middle{
      top: 230px;
    }

    .v-align-bottom{
      top: auto;
      bottom: 50px;
    }


  }

  @media (max-width: 767px){
    .banner-context-div{
      padding: 0 30px;
    }
    .banner-box{
      min-width: 90%;
    }
    .banner-title{
      /* margin-top: 200px; */
      font-size:32px;
    }
    .banner-sub-title{
      margin-top: 10px;
      font-size: 16px;
    }
    
    .banner-btn{
      margin-top: 15px;
      min-width: 100px;
      height: 36px;
      font-size: 16px;
      line-height: 36px;
      clip-path: polygon(10px 0%, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
    }

    .banner-btn:hover{
      clip-path: polygon(10px 0%, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
    }

    .bannerImg{
      height: 600px;
      object-fit: cover;
      object-position: center center;
    }
    .swiper-pagination{
      text-align: center;
      padding: 0 10px;
    }
    .swiper-pagination-bullet{
      width: 15px;
      height: 6px;
      background: #B7B7B7;
      border-radius: 0;
      transform-origin:top;
      transform:skewX(-45deg);
      opacity: 1;
      transition: 0.3s all;
      cursor: pointer;
      /* border: 1px solid #000; */
    }

    .swiper-pagination-bullet-active{
      background: #ff6400;
      width: 60px;
    }

    .bannerTimer{
      right: auto;
      left: 0;
      top: auto;
      bottom: 0;
      width: 100%;
      height: 2px;
    }

    .bannerTimerBar{
      right: auto;
      left: 0;
      width: 0%;
      height: 100%;
    }    
    .v-align-top{
      top: 80px;
    }

    .v-align-middle{
      top: 230px;
    }

    .v-align-bottom{
      top: auto;
      bottom: 50px;
    }

  }

  @media (max-width: 991px){
    .banner-context-div{
      padding: 0 30px;
    }
    .banner-box{
      min-width: 90%;
    }
    .banner-title{
      /* margin-top: 200px; */
      font-size:32px;
    }
    .banner-sub-title{
      margin-top: 10px;
      font-size: 16px;
    }
    
    .banner-btn{
      margin-top: 15px;
      min-width: 100px;
      height: 36px;
      font-size: 16px;
      line-height: 36px;
      clip-path: polygon(10px 0%, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
    }

    .banner-btn:hover{
      clip-path: polygon(10px 0%, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
    }

    .bannerImg{
      height: 600px;
      object-fit: cover;
      object-position: center center;
    }
    .swiper-pagination{
      text-align: center;
      padding: 0 10px;
    }
    .swiper-pagination-bullet{
      width: 15px;
      height: 6px;
      background: #B7B7B7;
      border-radius: 0;
      transform-origin:top;
      transform:skewX(-45deg);
      opacity: 1;
      transition: 0.3s all;
      cursor: pointer;
      /* border: 1px solid #000; */
    }

    .swiper-pagination-bullet-active{
      background: #ff6400;
      width: 60px;
    }

    .bannerTimer{
      right: auto;
      left: 0;
      top: auto;
      bottom: 0;
      width: 100%;
      height: 2px;
    }

    .bannerTimerBar{
      right: auto;
      left: 0;
      width: 0%;
      height: 100%;
    }    
    .v-align-top{
      top: 80px;
    }

    .v-align-middle{
      top: 230px;
    }

    .v-align-bottom{
      top: auto;
      bottom: 50px;
    }

  }

  @media (max-width: 1199px){
    
  }

  @media (max-width: 1919px){

  }

</style>