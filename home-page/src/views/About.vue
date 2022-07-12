<template>
  <div class="about">
    <Menu />
    <div class="page-content">
      <div class="container">
        <h1>About Me</h1>
        <div class="row">
          <div class="box-3-2">
            <div class="title">
              <span>爽爽</span>
              <!-- <span>林台益</span> -->
            </div>
            <div class="subTitle">
              <span>Ray</span>
              |
              <span>林台益</span> 
              <!-- |
              1993/10/5 -->
            </div>
            <div class="content">
              <h3>我是誰?</h3>
                <p>
                  嗨! 我是Ray，也可以叫我爽爽，<br>
                  土生土長的彰化人，別問彰化有什麼好玩的，<br>我只會告訴你有很多控肉飯可以吃。
                </p>
                <p>
                  本質是個前端工程師，卻又略懂不少其他領域的技能，<br>
                  例如：3D建模、3D列印、遊戲開發、水冷PC主機裝修、維修改裝機車電系與配備 等等。
                  
                </p>

              <h3>學歷</h3>
                <p>
                  畢業於人稱北科高中的 <span>國立台北科技大學 資訊工程學系</span>。<br>
                  畢業於 國立彰化師大附屬高級工業職業學校 資訊科。
                </p>
              
              <h3>有什麼興趣</h3>
                <p>
                  看電影，玩遊戲，看漫畫。<br>
                  騎車到處旅行紓壓，騎檔車樂趣多，為了路權而考取重機駕照。<br>
                  閒不下來，想盡辦法找事情來做，嘗試新事物。<br>
                  畫自己車子的3D模型，並3D列印出來，自己的玩具自己印。
                </p>

              <h3>持續學習</h3>
                <p>
                  自學前端Javascript Vue框架，導入工作使用。<br>
                  自學3D建模，3D列印技術。<br>
                  報名Swift課程，學習iOS開發語言，方便日後工作維護。<br>
                </p>
              
              <h3>有夢最美</h3>
                <p>
                  買一塊土地，<br>
                  擁有自己的房子與車庫，<br>
                  開一間重機咖啡店。<br>
                </p>
                
              
            </div>
          </div>
          <div class="box-3-1">
            <img class="aboutMeImg" src="@/assets/images/cat02.jpg" alt="" />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
// @ is an alias to /src
import { loadingStart, loadingOver } from "@/module/common";
import Menu from "@/components/common/menu.vue";

export default {
  components: {
    Menu,
  },
  mounted() {
    loadingOver();
  },
  beforeRouteLeave(to, from, next) {
    loadingStart();
    setTimeout(() => {
      next();
    }, 1000);
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.about {
  position: relative;
  width: 100%;
}

h1{
  margin-bottom: 50px;
}

.title {
  color: rgb(217, 255, 0);
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
  margin: 0 0 50px 0;
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
    padding-left: 15px; 
    span{
      color: #d9ff00;
    }
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