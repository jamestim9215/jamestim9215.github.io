<template>
  <div class="menu-div">
    <div class="profileImg">
      <img src="@/assets/images/user.jpg" alt="" />
    </div>
    <div>
      爽爽 | Ray
    </div>
    <MenuButton />
  </div>
</template>

<script>
import MenuButton from "@/components/common/menuButton.vue";

export default {
  props: {},
  components: {
    MenuButton,
  },
  computed: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.menu-div {
  position: relative;
  display: inline-block;
  vertical-align: top;
  text-align: center;
  width: 300px;
  height: 100vh;
  background: #222;

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
  .menu-div {
    position: fixed;
    left: -100%;
    top: 0;
  }
}
</style>
