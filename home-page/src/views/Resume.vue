<template>
  <div class="resume">
    <Menu/>
    <div class="page-content">
      <div class="container">
        <h1>Resume</h1>
        <div class="row">
          <div class="box-3-2">
            <div class="title">
              <span>Ray</span>
              <span>林台益</span>
            </div>
            <div class="subTitle">
              <span>前端工程師</span>
              |
              <span>Front End Developer</span>
            </div>
            <div class="content">
              <p>五年以上網頁前端開發經驗，三年以上VUE大型網站實戰經驗。<br>後台系統畫面規劃與設計。</p>
              
              
            </div>
          </div>
          <div class="box-3-1">
            <img class="aboutMeImg" src="@/assets/images/user.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import {
  loadingStart,
  loadingOver
} from "@/module/common";
import Menu from "@/components/common/menu.vue";

export default {
  components: {
    Menu,
  },
  mounted() {
    loadingOver();
  },
  beforeRouteLeave (to, from, next) {
    loadingStart();
    setTimeout(()=>{
      next();
    },1000)
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.resume {
  position: relative;
  width: 100%;
}

h1{
  margin-bottom: 50px;
}

.title {
  color: #d9ff00;
  margin: 0 0 20px 0;
  > span {
    &:nth-child(1) {
      font-size: 32px;
      margin-right: 10px;
    }
    &:nth-child(2) {
      font-size: 24px;
    }
  }
}
.subTitle{
  color: #999999;
  margin: 0 0 30px 0;
  font-size: 20px;
  > span{
    color: #ffffff;
  }
  .sl{
    margin: 0 10px;
  }
}

.content{
  font-size: 16px;
  h3{
    margin: 30px 0 15px 0;
  }
  p{
    padding-left: 0px; 
  }

}

.aboutMeImg {
  position: relative;
  width: 100%;
  // height: 500px;
  object-fit: cover;
  object-position: 80% center;
}

@media (max-width: 768px) {
}
</style>