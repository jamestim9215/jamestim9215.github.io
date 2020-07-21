<template>
  <div id="esport">
    <div class="bg-cover"></div>
    <div class="aorus-container pb-5">
      <div class="template-left-title">E-sport</div>
      <div class="row">
        <div class="col-12 text-left">
          <div class="gammer-img  animate_class" data-animate="animate__fadeInUp"  :data-animatedelay="0.5">
            <img :src="gammerImg" alt="">
          </div>
          <div class="esport-text-div text-center animate_class" data-animate="animate__fadeInUp"  :data-animatedelay="0.2">
            <img :src="logoImg" width="144" alt=""><br>
            <div class="content text-left">
              {{content}}
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
module.exports = {
  props: {
    
  },
  create(){
  },
  computed: {

  },
  mounted(){
  },
  watch:{
		
	},
  data(){
    return {
      logoImg: "assets/images/esport/logo-g2.svg",
      content: "By including G2 Esports' valuable input throughout the product development, AORUS is able to deliver the Z490 AORUS ULTRA G2 with the barrier-breaking performance, cooling, and audio optimized for competitive gaming. With all the gaming-oriented features, you can play like pros with this G2 inspired gaming-ready motherboard.",
      gammerImg: "assets/images/esport/Kenny.png"
    }
  },
  methods:{
  }
}
</script>

<style>
#esport{
  position: relative;
  width: 100%;
  height: auto;
  min-height: 580px;
  /* clip-path: polygon(0 0, 100% 0, 100% 100%, 0% 120%); */
  z-index: 1;
  margin-top: 200px;
}
#esport::before{
  content: "";
  position: absolute;
  left: 0;
  top: -150px;
  right: 0;
  bottom: -10%;
  z-index: -1;
  opacity: 1;
  background: #000;
  background-size: cover;
  clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
  background-position: center center;
  background-attachment: fixed;
}
#esport::after{
  content: "";
  position: absolute;
  left: 0;
  top: -150px;
  right: 0;
  bottom: -10%;
  z-index: -1;
  opacity: 0.5;
  background: url(../../assets/images/bg/bg-kennyS.jpg);
  /* background: #000; */
  background-size: cover;
  background-position: center center;
  clip-path: polygon(0 15%, 100% 0, 100% 100%, 0% 100%);
  background-attachment: fixed;
}
.esport-text-div{
  position: relative;
  display: inline-block;
  padding: 30px 150px 120px 150px;
  margin: 0 180px;
  z-index: 2;
}
/* #esport img{
  position: relative;
  display: inline-block;
} */
#esport .bg-cover{
  position: absolute;
  width: 100%;
  height: 300px;
  bottom: 0;
  left: 0;
  z-index:1 ;
  background: linear-gradient(0deg, rgba(0,0,0,1) 0%,rgba(255,255,255,0) 100%);
}

.gammer-img{
  position: absolute;
  right: calc(40% - 200px);
  top: -50px;
  width: 400;
}
.gammer-img img{
  position: relative;
  display: block;
  width: 400px;
}

#esport .content{
  position: relative;
  display: inline-block;
  margin-top: 20px;
  font-family: 'TitilliumWeb',sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 16px;
  line-height: 24px;
  color: #FFFFFF;
  max-width: 510px;
  z-index: 2;
}

#esport .content::before{
  content: "“";
  position: absolute;
  top: -40px;
  left: -30px;
  font-family: 'Aldrich',sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 63px;
  color: #454545;
}

#esport .content::after{
  content: "”";
  position: absolute;
  right: -30px;
  bottom: -60px;
  font-family: 'Aldrich',sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 64px;
  line-height: 63px;
  color: #454545;
  
}

.btn-div span{
  position: relative;
  display: inline-block;
  padding: 0 12px;
  margin-top: 10px;
  width: auto;
  min-width: 161px;
  height: 47px;
  font-size: 20px;
  line-height: 42px;
  text-align: center;
  text-transform: uppercase;
  clip-path: polygon(10px 0%, 100% 0, 100% calc(100% - 10px), calc(100% - 10px) 100%, 0 100%, 0 10px);
  cursor: pointer;
  transition: 0.3s all;
  border: 0;
  margin: 45px 11px;
}

.Sign-Up{
  background: #ff6400;
  color: #fff;
}

.Sign-Up:hover{
  background: #73FBFD;
  color: #000;
}

.log-In{
  background: rgba(0,0,0,0);
  color: #fff;
  border: 2px solid #FFFFFF !important;
}

.log-In:hover{
  background: #fff;
  color: #000
}


.log-In::before{
  content: "";
  position: absolute;
  z-index: 10;
  right: -4px;
  bottom: 3px;
  width: 15px;
  height: 2px;
  background: #fff;
  transform: rotate(-45deg);
}


.log-In::after{
  content: "";
  position: absolute;
  z-index: 10;
  left: -5px;
  top: 3px;
  width: 16px;
  height: 2px;
  background: #fff;
  transform: rotate(-45deg);
}

  @media (max-width: 1919px){
    .esport-text-div{
      position: relative;
      display: inline-block;
      padding: 30px 100px 120px 100px;
      margin: 0 50px;
    }


    .gammer-img{
      right: calc(25% - 200px);
      top: -50px;
    }
    
  }

  @media (max-width: 1199px){
    .esport-text-div{
      padding: 30px 50px 120px 50px;
      margin: 0px;
    }

    .gammer-img{
      right: calc(25% - 200px);
      top: -50px;
    }
   
  }

  @media (max-width: 991px){
    .esport-text-div{
      position: relative;
      display: inline-block;
      padding: 30px 50px 120px 50px;
      margin: 0px;
    }

    .gammer-img{
      position: absolute;
      right: calc(25% - 200px);
      top: -50px;
    }

  }
  @media (max-width: 767px){

    #esport::before{
      clip-path: polygon(0 5%, 100% 0, 100% 100%, 0% 100%);
    }
    #esport::after{
      clip-path: polygon(0 5%, 100% 0, 100% 100%, 0% 100%);
    }
    #esport .bg-cover{
      height: 600px;
    }

    .esport-text-div{
      padding: 30px 50px 120px 50px;
      margin: 0 0;
      margin-top: 400px;
    }

    .gammer-img{
      right: calc(50% - 200px);
    }
   
   
  }


  @media (max-width: 575px){

    #esport::before{
      clip-path: polygon(0 5%, 100% 0, 100% 100%, 0% 100%);
    }
    #esport::after{
      clip-path: polygon(0 5%, 100% 0, 100% 100%, 0% 100%);
    }
    #esport .bg-cover{
      height: 80%;
      background: linear-gradient(0deg, rgba(0,0,0,1) 0%, rgba(0,0,0,1) 50%, rgba(255,255,255,0) 100%);
    }

    .esport-text-div{
      padding: 30px 15px 120px 15px;
      margin: 0 0;
      margin-top: 280px;
    }

    .gammer-img{
      right: calc(50% - 150px);
    }
    .gammer-img img{
      width: 300px;
    }
  }

</style>