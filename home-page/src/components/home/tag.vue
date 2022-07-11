<template>
  <div class="tag-div">
    <router-link v-for="key in menuList" :key="key.id" :to="key.link"
    :style="(key.id=='menu_00' && path=='/')?'display:none;':''">
      <button :class="path!='/'?'fullbtn':''" :title="key.zhTW_name">
        {{ key.en_name }}
      </button>
    </router-link>
  </div>
</template>

<script>
export default {
  props: {},
  computed: {
    menuList() {
      return this.$store.getters.getMenuList;
    },
  },
  data() {
    return {
      path: '',
    }
  },
  mounted(){
    this.path = location.pathname;
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.tag-div {
  position: relative;
  width: calc(100% - 30px);
  padding: 0 15px;
  max-width: 1000px;
  text-align: center;
  margin: 0 auto;
  margin-top: 30px;

  button {
    position: relative;
    border: 1px solid #d9ff00;
    background: #222;
    padding: 8px 12px;
    font-size: 16px;
    border-radius: 5px;
    color: #d9ff00;
    margin: 0 10px 10px 0;
    cursor: pointer;
    transition: 0.5s all;
    overflow: hidden;
    z-index: 0;
    &::before {
      content: "";
      position: absolute;
      z-index: 0;
      width: 50%;
      height: 100%;
      left: -100%;
      top: 0;
      background: #d9ff00;
      transition: 0.5s all;
    }
    &::after {
      content: "";
      position: absolute;
      z-index: 0;
      width: 50%;
      height: 100%;
      right: -100%;
      top: 0;
      background: #d9ff00;
      transition: 0.5s all;
    }
    &:hover {
      color: #333;
      &::before {
        z-index: -1;
        left: 0%;
      }
      &::after {
        z-index: -1;
        right: 0%;
      }
    }
  }
  .fullbtn{
    width: 100%;
  }
  a:nth-last-child(1) button {
    margin: 0 0 10px 0;
  }
}

@media (max-width: 768px){
  .tag-div {
    button {
      width: 100%;
    }
  }
}
</style>
