<script>
  // import {ref} from 'vue'
</script>

<template>
  <Splide :options="{ rewind: true }" aria-label="My Favorite Images">
    <SplideSlide>
      <div>
        <img src="@/assets/banner/banner.png" alt="Sample 1">
        <div class="banner-content">
          <div class="title">超熱門! 烤饅頭 </div>
          <div class="content">超熱門的烤饅頭你吃過了嗎? 還沒開門就一堆人在排隊等待...</div>
          <a href=""><button>馬上下單</button></a>
        </div>
      </div>
    </SplideSlide>
    <SplideSlide>
      <div>
        <img src="@/assets/banner/banner.png" alt="Sample 2">
        <div class="banner-content">
          <div class="title">超熱門! 烤饅頭 </div>
          <div class="content">超熱門的烤饅頭你吃過了嗎? 還沒開門就一堆人在排隊等待...</div>
          <a href=""><button>馬上下單</button></a>
        </div>
      </div>
    </SplideSlide>
  </Splide>
</template>

<style scoped>
  .banner-content{
    position: absolute;
    width: auto;
    right: 0;
    top:50%;
    transform: translateY(-50%);
    text-align: right;
    color: var(--theme-white);
    text-shadow: var(--theme-black) 2px 2px 10px;
    padding: 30px 60px;
  }
  .title{
    font-size: 36px;
  }
  .content{
    font-size: 20px;
  }
  .banner-content>a>button{
    margin-top: 20px;
    width: auto;
    min-width: 120px;
    background: var(--theme-red);
    color: var(--theme-white);
    border: 0;
    padding: 6px 10px;
    font-size: 20px;
    cursor: pointer;
    box-shadow: var(--theme-red) 0px 0px 10px;
  }
  .banner-content>a>button:hover{
    background: var(--theme-red-hover);
  }

  @media (max-width: 767px) {
    
    .title{
      font-size: 24px;
    }
    .content{
      margin-top: 10px;
      font-size: 16px;
    }
    .banner-content>a>button{
      margin-top: 15px;
      min-width: auto;
      font-size: 16px;
    }
  }
</style>
