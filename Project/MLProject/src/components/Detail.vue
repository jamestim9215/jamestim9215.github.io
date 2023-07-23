<script setup>
import { ref } from "vue";

defineProps({});

</script>

<template>
  <div class="detailbody">
    <div class="container">
      <div class="detail-div">
        <div class="title">
          Title
        </div>
        <div class="content">
          <img src="@/assets/images/banner.png" alt="">
          <p>
            content content content content content content content content content content content content content content content content content content .....
          </p>
          <p>
            content content content content content content content content content content content content content content content content content content .....
          </p>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.detailbody{
  background: var(--theme-color-2-02);
  padding: 50px 0 ;
}

.detail-div{
  position: relative;
  width: 100%;
  height: auto;
  .title{
    position: relative;
    width: 100%;
    height: auto;
    min-height: 80px;
    line-height: 80px;
    color: #fff;
    background: var(--theme-color-2);
    font-size: 36px;
    padding: 0 20px;
  }
  .content{
    img{
      width: auto;
      max-width: 100%;
      height: auto;
      background: #ccc;
    }
    position: relative;
    width: calc(100% - 40px);
    height: auto;
    min-height: 200px;
    background: #fff;
    font-size: 16px;
    padding: 20px;
  }
}



@media (max-width: 768px) {
  
}
</style>
