<template>
    <div class="aorus-header">
      <div class="aorus-container">
        <div class="row">
          <div class="col-12 p-0">
            <span id="menuBtn" @click="menuFun()">
              <i class="fas fa-bars"></i>
            </span>
            
            <img class="logo" src="assets/images/logo.png">
            <ul :class="menuStatus?'active':''">
              <div class="menuHeader">
                <div class="closeMenuBtn"  @click="menuFun()">
                  <i class="fas fa-times"></i>
                </div>
              </div>
              <li>PRODUCTS <i class="fas fa-angle-down"></i></li>
              <li>BUILD YOUR OWN</li>
              <li>EXPLORE <i class="fas fa-angle-down"></i></li>
              <li>ESPORT</li>
              <li>SERVICE</li>
              <li>MEMBERSHIP</li>
            </ul>
            <img class="GB-logo" src="assets/images/logo_gigabyte_white.png">
            <span id="search-icon">
              <i class="fas fa-search"></i>
            </span>
            <span id="user-icon">
              <i class="fas fa-user" ></i>
            </span>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
module.exports = {
  props: {
   
  },
  mounted:function(){

  },
  watch:{
		
	},
  data(){
    return {
      menuStatus: false
    }
  },
  methods:{
    menuFun(){
      console.log("....menuFun");
      if(this.menuStatus){
        this.menuStatus = false
      }else{
        this.menuStatus = true
      }
    }

  }
}
</script>

<style>
  .aorus-header{
    position: fixed;
    z-index: 100;
    width: 100%;
    height: 137px;
    background: rgb(2,0,36);
    background: linear-gradient(180deg, rgba(0,0,0,1) 0%,rgba(255,255,255,0) 100%);
    line-height: 100px;
    padding: 0 30px;
    color: #fff;
  }
  .logo{
    position: relative;
    display: inline-block;
    height: 36px;
    margin-bottom: 10px;
    margin-right: 15px;
  }
  .GB-logo{
    position: absolute;
    right: 92px;
    margin-top: calc(50px - 7px);
    height: 14px;
  }
  #menuBtn{
    transition: 0.3s all;
    cursor: pointer;
  }
  #user-icon{
    position: absolute;
    right: 0px;
    height: 16px;
    transition: 0.3s all;
    cursor: pointer;
  }
  #search-icon{
    position: absolute;
    right: 46px;
    height: 16px;
    transition: 0.3s all;
    cursor: pointer;
  }
  #menuBtn:hover,
  #search-icon:hover,
  #user-icon:hover{
    color: #ff6400;
  }


      
  .aorus-header ul,
  .aorus-header li{
    list-style: none;
    display: inline-block;
    padding: 0;
  }

  .aorus-header li{
    position: relative;
    display: inline-block;
    padding: 0 15px;
    font-family: 16px;
    transition: 0.3s all;
    cursor: pointer;
    font-family: 'Aldrich',sans-serif;
  }

  #search-icon:hover,
  #user-icon:hover,
  .aorus-header li:hover{
    color: #ff6400;
  }

  #menuBtn{
    display: none;
  }

  .menuHeader{
    position: absolute;
    z-index: -999;
    width: 100%;
    height: 50px;
    top: -100%;
    transition: 0.3s all;
  }
  .closeMenuBtn{
    /* display: none; */
    transition: 0.3s all;
  }

  @media (max-width: 1919px){

  }

  @media (max-width: 1199px){

    .aorus-header{
      position: fixed;
      width: 100%;
      height: 50px;
      line-height: 50px;
      padding: 0 15px;
    }

    #menuBtn{
      display: inline;
    }

    .aorus-header ul{
      position: fixed;
      z-index: 10;
      top: 0;
      left: -400px;
      width: 400px;
      height: 100vh;
      background: #000;
      transition: 0.3s all;
    }

    .aorus-header ul li{
      width: 100%;
      padding: 0 20px;
    }

    .aorus-header ul.active{
      left: 0;
    }

    #search-icon{
      right: 0;
    }
    
    .logo{
      position: absolute;
      left: calc(50% - 52.5px);
      height: 25px;
      top: 12.5px;
      margin: 0;
    }

    .aorus-header li{
      padding: 0 5px;
    }

    .GB-logo{
      display: none;
    }
    #user-icon{
      display: none;
    }
    .menuHeader{
      position: relative;
      top: 0;
      margin-bottom: 15px;
    }

    .closeMenuBtn{
      display: inline-block;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      cursor: pointer;
      transition: 0.3s all;
    }
    .closeMenuBtn:hover{
      color: #ff6400;
      transform: rotate(180deg);
    }

  }
  @media (max-width: 991px){
    .aorus-header{
      position: fixed;
      width: 100%;
      height: 50px;
      line-height: 50px;
      padding: 0 15px;
    }

    #menuBtn{
      display: inline;
    }
    .aorus-header ul{
      position: fixed;
      z-index: 10;
      top: 0;
      left: -400px;
      width: 400px;
      height: 100vh;
      background: #000;
      transition: 0.3s all;
    }

    .aorus-header ul li{
      width: 100%;
      padding: 0 20px;
    }

    .aorus-header ul.active{
      left: 0;
    }

    #search-icon{
      right: 0;
    }
    
    .logo{
      position: absolute;
      left: calc(50% - 52.5px);
      height: 25px;
      top: 12.5px;
      margin: 0;
    }

    .closeMenuBtn{
      display: inline-block;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      cursor: pointer;
      transition: 0.3s all;
    }
    .closeMenuBtn:hover{
      color: #ff6400;
      transform: rotate(180deg);
    }
  }

  @media (max-width: 767){

    .aorus-header{
      position: fixed;
      width: 100%;
      height: 50px;
      line-height: 50px;
      padding: 0 15px;
    }

    #menuBtn{
      display: inline-block;
    }

    .aorus-header ul{
      position: fixed;
      z-index: 10;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100vh;
      background: #000;
      transition: 0.3s all;
    }

    .aorus-header ul li{
      width: 100%;
      padding: 0 20px;
    }

    .aorus-header ul.active{
      left: 0;
    }

    #search-icon{
      right: 0;
    }
    
    .logo{
      position: absolute;
      left: calc(50% - 52.5px);
      height: 25px;
      top: 12.5px;
      margin: 0;
    }

    .aorus-header li{
      padding: 0 5px;
    }

    .GB-logo{
      display: none;
    }
    #user-icon{
      display: none;
    }

    .closeMenuBtn{
      display: inline-block;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      cursor: pointer;
      transition: 0.3s all;
    }
    .closeMenuBtn:hover{
      color: #ff6400;
      transform: rotate(180deg);
    }

  }

  @media (max-width: 575px){
    
    .aorus-header{
      position: fixed;
      width: 100%;
      height: 50px;
      line-height: 50px;
      padding: 0 15px;
    }

    #menuBtn{
      display: inline-block;
    }

    .aorus-header ul{
      position: fixed;
      z-index: 10;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100vh;
      background: #000;
      transition: 0.3s all;
    }

    .aorus-header ul li{
      width: 100%;
      padding: 0 20px;
    }

    .aorus-header ul.active{
      left: 0;
    }

    #search-icon{
      right: 0;
    }
    
    .logo{
      position: absolute;
      left: calc(50% - 52.5px);
      height: 25px;
      top: 12.5px;
      margin: 0;
    }

    .aorus-header li{
      padding: 0 5px;
    }

    .GB-logo{
      display: none;
    }
    #user-icon{
      display: none;
    }

    .closeMenuBtn{
      display: inline-block;
      width: 50px;
      height: 50px;
      line-height: 50px;
      text-align: center;
      cursor: pointer;
      transition: 0.3s all;
    }
    .closeMenuBtn:hover{
      color: #ff6400;
      transform: rotate(180deg);
    }

  }


</style>