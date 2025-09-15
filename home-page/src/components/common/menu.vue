

<script setup>
import { ref } from 'vue';
import MenuButton from "@/components/common/menuButton.vue";

const isMenuActive = ref(false);

</script>

<template>
  <div class="menu-btn" @click="isMenuActive = !isMenuActive">
    <i class="fa-solid fa-bars"></i>
  </div>
  <div class="menu-div" :class="isMenuActive ? 'active' : ''">
    <div class="menu-close-btn" @click="isMenuActive = !isMenuActive">
      <i class="fa-solid fa-times"></i>
    </div>
    <router-link  class="profileImg"
      :key="'home'"
      :to="'/'"
    >
    <img src="@/assets/images/user.jpg" alt="" />
    </router-link>
    <div>
      爽爽 | Ray
    </div>
    <MenuButton />
  </div>
</template>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.menu-btn , .menu-close-btn {
  position: fixed;
  left: 10px;
  top: 10px;
  width: 40px;
  height: 40px;
  border-radius: 5px;
  background: #222;
  border: 1px solid #d9ff00;
  color: #d9ff00;
  text-align: center;
  line-height: 40px;
  font-size: 20px;
  z-index: 10;
  cursor: pointer;
  display: none;
  opacity: 0.5;
  transition: 0.3s ease-in-out;
  &:hover{
    opacity: 1;
  }
  >.fa-solid{
    transition: 0.3s ease-in-out;
  }
}
.menu-close-btn{
  position: absolute;
  right: 10px;
  left: auto;
  top: 10px;
}

.menu-div {
  position: relative;
  display: inline-block;
  vertical-align: top;
  text-align: center;
  width: 300px;
  height: 100vh;
  background: #222;
  transition: 0.3s ease-in-out;

  .profileImg {
    position: relative;
    margin: 30px auto;
    display: inline-block;
    width: 100px;
    height: 100px;
    border-radius: 50%;
    overflow: hidden;
    border: 2px solid #d9ff00;
    transition: 0.3s all;
    > img {
      position: relative;
      width: 100%;
      height: 100%;
      object-fit: cover;
      transition: 0.3s all;
    }
  }
}

@media (max-width: 768px) {
  .menu-btn , .menu-close-btn {
    display: block;
  }
  .menu-div {
    position: fixed;
    left: -100%;
    top: 0;
    z-index: 999;
    &.active{
      left: 0;
    }
  }
}
</style>
