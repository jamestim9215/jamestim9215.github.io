<template>
  <div class="home">
    <Banner />
    <div class="content">
      <h1>
        嗨! 我是爽爽<br />
        歡迎來到我的秘密基地
      </h1>
      <div class="sns">
        <a href="mailto:jamstim9215@gmail.com">
          <div>
            <span><i class="fas fa-envelope"></i></span>
            <div>jamstim9215@gmail.com</div>
          </div>
        </a>
        <a>
          <div>
            <span><i class="fas fa-mobile-alt"></i></span>
            <div>0937-738-876</div>
          </div>
        </a>
        <a
          href="https://www.facebook.com/profile.php?viewas=100000686899395"
          target="_blank"
        >
          <div>
            <span><i class="fab fa-facebook-square"></i></span>
            <div>Tai Yi Lin</div>
          </div>
        </a>
        <a href="https://www.instagram.com/jamestim9215/" target="_blank">
          <div>
            <span><i class="fab fa-instagram"></i></span>
            <div>jamestim9215</div>
          </div>
        </a>
      </div>
      <div class="sns">
        這是個前端工程師做的無聊網站<br />
        無聊時做了一些小遊戲、小工具...<br />
        都進來了就加減看看吧!<br />
      </div>
      <MenuButton/>
    </div>
    <CardRandom :random="true" :randomCount="3"/>
  </div>
</template>

<script>
import {
  loadingStart,
  loadingOver
} from "@/module/common";

import Banner from "@/components/home/banner.vue";
import MenuButton from "@/components/common/menuButton.vue";
import CardRandom from "@/components/common/card.vue";

export default {
  name: "Home",
  components: {
    Banner,
    MenuButton,
    CardRandom
  },
  mounted() {
    loadingOver();
  },
  data() {
    return {};
  },
  beforeRouteLeave (to, from, next) {
    loadingStart();
    setTimeout(()=>{
      next();
    },1000)
  }
};
</script>
<style scoped lang="scss">
.content {
  position: relative;
  width: 100%;
  max-width: 1000px;
  text-align: center;
  margin: 30px auto;
}
.content > h1 {
  font-size: 18px;
  line-height: 28px;
  font-weight: normal;
  padding: 0;
}

.sns {
  position: relative;
  width: calc(100% - 4vh);
  max-width: 360px;
  margin: 0 auto;
  padding: 2vh;
  text-align: center;
  /* border-top: 1px solid #d9ff00; */
  border-bottom: 1px solid #d9ff00;
}
.sns > a {
  position: relative;
  display: inline-block;
  vertical-align: top;
  text-decoration: none;
  cursor: pointer;
}
.sns > a > div {
  position: relative;
  width: 100%;
}
.sns > a > div > span {
  position: relative;
  display: inline-block;
  width: 30px;
  height: 30px;
  vertical-align: middle;
  text-align: center;
  font-size: 18px;
  color: #999;
  transition: 0.3s all;
  line-height: 30px;
}
.sns > a > div > div {
  opacity: 0;
  position: absolute;
  text-align: center;
  width: auto;
  min-width: 80px;
  top: calc(100% + 10px);
  background: #d9ff00;
  padding: 5px 10px;
  border-radius: 5px;
  color: #000;
  // left: -50%;
  transform: translateX(calc(-50% + 15px));
  white-space:nowrap;
}
.sns > a > div:hover > div {
  opacity: 1;
}
.sns > a > div > div::after {
  content: "";
  position: absolute;
  top: -10px;
  left: calc(50% - 5px);
  border-top: 5px solid rgba(0, 0, 0, 0);
  border-left: 5px solid rgba(0, 0, 0, 0);
  border-right: 5px solid rgba(0, 0, 0, 0);
  border-bottom: 5px solid #d9ff00;
}
.sns > a > div:hover > span {
  color: #d9ff00;
}
</style>
