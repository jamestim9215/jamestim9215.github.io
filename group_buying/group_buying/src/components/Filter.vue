<script setup>
import { ref } from 'vue'

const tabData = ref([
  {
    id: 1,
    name: "NEW! 最新團購",
  },
  {
    id: 2,
    name: "熱門團購",
  },
  {
    id: 3,
    name: "美食",
  },
  {
    id: 4,
    name: "生活",
  }
])

const tabIndex = ref(1) 

</script>

<template>
  <div class="search-div">
    <input id="search-input" type="text">
    <span><font-awesome-icon icon="fa-solid fa-magnifying-glass" /></span>
  </div>
  <div class="tag-list-div">
    <div 
      class="tab" 
      :class="key.id == tabIndex ? 'active' : ''" 
      v-for="(key,index) in tabData" 
      :key="key.id"
      @click="tabIndex=key.id">{{key.name}}</div>
  </div>
</template>

<style scoped>
#search-input{
  width: calc(100% - 50px);
  padding: 0 40px 0 10px;
}
.search-div{
  position: relative;
}
.search-div>span{
  position: absolute;
  z-index: 0;
  right: 0;
  top:0;
  width: 30px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  color: var(--theme-gray);
  transition: 0.3s ease-in-out;
}


.search-div:hover>span{
  color: var(--theme-yellow)
}

.tag-list-div{
  position: relative;
  margin-top: 10px;
}
.tab{
  position: relative;
  width: calc(100% - 20px);
  padding: 8px 10px;
  font-size: 14px;
  font-weight: 500;
  background: var(--theme-white);
  margin-bottom: 10px;
  cursor: pointer;
}
.tab.active{
  color: var(--theme-red);
  border-bottom: 3px solid var(--theme-red);
  cursor: default;
}
</style>
