<template>
  <div class="card-div">
    <div class="card" v-for="key in projectList" :key="key.name">
      <a :href="key.link" :target="key.link?'_blank':''" :title="key.name">
        <div>
          <img :src="key.img" :alt="key.name">
          <span class="tag">
            <span v-for="tagItem in key.tag" :key="tagItem">{{tagItem}}</span>
          </span>
          <span class="localize" v-if="key.localize" :title="key.localizeCount + '個地區語言'">
            <i class="fa-solid fa-globe"></i>
            {{key.localizeCount}}
          </span>
          <div class="title">{{key.name}}</div>
          <div class="content">
            {{key.detail}}
            <div class="technology">
              <span v-for="technologyItem in key.technology" :key="technologyItem">{{technologyItem}}</span>
            </div>
          </div>
        </div>
      </a>
    </div>
  </div>
</template>

<script>

export default {
  props: {
    random:{
      type: Boolean,
      default: false
    },
    randomCount: {
      type: Number,
      default: 0
    }
  },
  computed: {
    projectList() {
      if(this.random){
        var arr = this.$store.getters.getProjectList;
        var shuffled = arr.slice(0), i = arr.length, min = i - this.randomCount, temp, index;
        while (i-- > min) {
            index = Math.floor((i + 1) * Math.random());
            temp = shuffled[index];
            shuffled[index] = shuffled[i];
            shuffled[i] = temp;
        }
        return shuffled.slice(min);
      }else{
        return this.$store.getters.getProjectList;
      }
      
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.card-div{
  position: relative;
  width: calc(100% - 30px);
  height: auto;
  padding: 15px;
  background: #131313;
}
.card-div .card{
  position: relative;
  display:  inline-block;
  width: calc(33% - 20px);
  padding: 10px;
  >a>div{
    position: relative;
    background: #222;
    height: auto;
    min-height: 300px;
    border-radius: 5px;
    overflow: hidden;
    img{
      position: absolute;
      z-index: 0;
      width: 100%;
      height: 100%;
      object-fit: cover;
      object-position: top center;
    }
    .tag{
      position: absolute;
      right: 5px;
      top: 5px;
      z-index: 2;
      span{
        width: auto;
        padding: 2px 4px;
        color: #d9ff00;
        border: 1px solid #d9ff00;
        background: #222;
        font-size: 12px;
        margin: 0 0 0 5px;
      }
    }
    .localize{
      position: absolute;
      right: 10px;
      top: 40px;
      z-index: 2;
      color: #d9ff00;
      font-size: 12px;
    }
    .title{
      position: absolute;
      z-index: 2;
      left: 0;
      top: 0;
      height: 25px;
      width: auto;
      line-height: 25px;
      padding: 0 25px 0 5px;
      background: #d9ff00;
      color: #222;
      font-weight: 700;
      font-size: 15px;
      transition: 0.5s all;
      -webkit-clip-path: polygon(0 0,100% 0,calc(100% - 20px) 100%,0 100%);
      clip-path: polygon(0 0,100% 0,calc(100% - 20px) 100%,0 100%);
    }
    .content{
      position: absolute;
      z-index: 1;
      width: calc(100% - 20px);
      height: auto;
      max-height: calc(100% - 40px);
      bottom: -100%;
      padding: 10px 10px 30px 10px;
      background: rgba(0,0,0, 0.5);
      transition: .5s all;
      color: #d9ff00;
      font-size: 14px;
      .technology{
        position: absolute;
        bottom: 5px;
        right: 5px;
        width: auto;
        span{
          width: auto;
          padding: 2px 4px;
          color: #d9ff00;
          border: 1px solid #d9ff00;
          background: #222;
          font-size: 12px;
          margin: 0 0 0 5px;
        }
      }
    }
    &:hover{
      .title{

      }
      .content{
        bottom: 0px;
      }
    }
  }
}

@media (max-width: 3840px) {
  .card-div .card{
    width: calc(25% - 20px);
  }
}

@media (max-width: 2560px) {
  .card-div .card{
    width: calc(33% - 20px);
  }
}

@media (max-width: 1400px) {
  .card-div .card{
    width: calc(50% - 20px);
  }
}

@media (max-width: 768px) {
  .card-div .card{
    width: calc(100% - 20px);
  }
}
</style>
