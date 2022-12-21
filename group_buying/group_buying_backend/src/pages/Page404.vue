<script setup>
import { ref } from 'vue'
import Header from '@/components/Header.vue'
import Boxing from '@/components/boxing.vue'
import { showLoading, hideLoading } from '@/common/common'

</script>

<template>
  <Header></Header>
  <div class="page-404-div">
    <div>
      <font-awesome-icon icon="fa-solid fa-face-sad-tear" />
      <div>
        頁面不存在 !<br>
        Page 404 not found  !
      </div>
    </div>
  </div>
  <Boxing />
</template>

<style scoped>
  
.page-404-div>div{
  margin: 0 auto;
  width: 100%;
  max-height: 500px;
  margin-top: calc(50vh - 60px);
  transform: translateY(-50%);
  text-align: center;
}
.page-404-div>div>svg{
  color: var(--theme-gray);
  font-size: 60px;
  margin-bottom: 30px;
}
.page-404-div>div>div{
  color: var(--theme-gray);
  width: 100%;
  font-size: 36px;
  font-weight: 500;
}


@media (max-width: 767px) {
  

}

@media (max-width: 390px) {
  
}
</style>
