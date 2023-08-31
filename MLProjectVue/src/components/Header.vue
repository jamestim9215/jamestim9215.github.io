<script setup>
import { ref } from "vue";
import {useRouter,useRoute} from 'vue-router';

defineProps({});

const menuShow = ref(false);

const router = useRouter();
const route = useRoute();

</script>

<template>
  <div class="header-log-div">
    <div class="container">
      <button @click="router.push('/login')">
        <span class="material-icons">login</span>
        Login
      </button>
    </div>
  </div>
  <div class="header-div">
    <div class="container">
      <div>
        <div><router-link to="/"><img src="" alt="">半導體設計服務平台</router-link></div>
        <div>
          <div class="menu-btn" @click="menuShow=true">
            <span class="material-icons">
            menu
            </span>
          </div>
          <div class="menu-div" :class="menuShow ? 'active' : ''">
            <div class="menu-close-btn" @click="menuShow=false">
              <span class="material-icons">
              close
              </span>
            </div>
            <div>
              Material
              <div>
                <router-link to="/introduction-hem"><div>Introduction(HEM)</div></router-link>
                <router-link to="/material_informatics"><div>Material informatics</div></router-link>
              </div>
            </div>
            <div>
              Collabration
              <div>
                <router-link to="/demo_cases"><div>Demo cases</div></router-link>
              </div>
            </div>
            <div>Materials Explorer
            <div>
              <router-link to="/materials_explorer"><div>Data base</div></router-link>
            </div></div>
            <div>ML platform
            <div>
              <router-link to="/data_cleaning"><div>data cleaning</div></router-link>
              <router-link to="/feature_select"><div>feature select</div></router-link>
              <router-link to="/cross_validation"><div>Cross validation</div></router-link>
              <router-link to="/prediction"><div>Prediction</div></router-link>
              <router-link to="/optimization"><div>Optimization</div></router-link>
            </div></div>
            <router-link to="/about_us"><div>About us</div></router-link>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<style lang="scss" scoped>
.header-log-div {
  position: relative;
  width: 100%;
  height: 30px;
  background: #333;
  div {
    text-align: right;
    button{
      color: var(--text-color);
      border: 0;
      height: 30px;
      padding: 0 15px;
      vertical-align: middle;
      font-size: 16px;
      font-weight: 300;
      cursor: pointer;
      background: var(--theme-color-1);
    }
  }
}

.header-div{
  position: relative;
  width: 100%;
  background: #F1F3F2;
  >div>div{
    position: relative;
    display: flex;
    justify-content: space-between;
    height: 80px;
    >div{
      position: relative;
      height: 80px;
      line-height: 80px;
      img{
        position: relative;
        display: inline-block;
        height: 50px;
        min-width: 130px;
        background: #D9D9D9;
        vertical-align: middle;
        margin-right: 20px;
      }
      font-size: 24px;
      color: #111111;
      font-weight: 300;
      &:nth-last-child(1){
        width: auto;
        div.menu-btn{
          display: none;
        }
        div.menu-div{
              transition: 0.3s all ease-in-out;
            >.menu-close-btn{
              display: none;
            }
          >a>div,
          >div{
            position: relative;
            width: auto;
            text-align: left;
            display: inline-block;
            padding: 0 15px;
            text-wrap: nowrap;
                cursor: pointer;
           >div{
              position: absolute;
              background: #fff;
              z-index: 1;
              top: 60px;
              left: 0;
              display: block;
              font-size: 18px;
              color: #333333;
              visibility: hidden;
              padding: 20px 0;
              min-width: 100%;
              a>div,
              >div{
                height: 40px;
                line-height: 40px;
                display: block;
                text-wrap: nowrap;
                padding: 5px 10px;
                cursor: pointer;
              }
            }
            &:hover{
              background: #fff;
              >div{
                visibility: inherit;
              }
            }
          }
        }
      }
    }
  }

}

@media (max-width: 960px) {
  .header-div{
    >div>div{
      height: 60px;
      // line-height: 60px;
      >div{
        padding: 0 10px;
        height: 60px;
        line-height: 60px;
        img{
          height: 40px;
          min-width: 100px;
          margin: 0;
          margin-right: 10px;
          vertical-align: middle;
        }
        font-size: 22px;
        &:nth-last-child(1){
          width: auto;
          div.menu-btn{
            display: inline-block;
            // padding: 0 15px;
            .material-icons{
              font-size: 25px;
              vertical-align: middle;
            }
          }
          div.menu-div{
            position: fixed;
            right: -300px;
            top: 0px;
            width: 300px;
            height: calc(100vh - 50px);
            z-index: 100;
            overflow: auto;
            display: block;
            background: #eee;
            padding: 50px 0 0 0 ;
            overflow-y: auto;
            &.active{
              right: 0;
            }
            >.menu-close-btn{
              position: absolute;
              display: inline-block;
              width: 50px;
              height: 50px ;
              right: 0;
              top: 0px;
              z-index: 100 ;
              line-height: 50px ;
              text-align: center ;
            }
            >div{
              position: relative;
              width: auto;
              height: auto;
              text-align: center;
              display: block;
              padding: 0 ;
              text-wrap: nowrap;
                  cursor: pointer;
              >div{
                position: relative;
                background: #fff;
                top: auto;
                right: auto;
                display: block;
                visibility: inherit;
                >div{
                  height: 50px;
                  line-height: 50px;
                  display: block;
                  text-wrap: nowrap;
                  padding: 5px 10px;
                  cursor: pointer;
                }
              }
              &:hover{
                background: none;
                >div{
                  visibility: inherit;
                }
              }
            }
          }
        }
      }
    }

  }
}
</style>
