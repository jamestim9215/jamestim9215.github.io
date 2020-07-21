<template>
  <div id="joinus" >
    <div class="aorus-container pb-5">
      <div class="template-left-title">Join us</div>
      <div class="row">
        <div class="col-12">
          <div class="title glitch" data-text="JOIN GIGABYTE AORUS MEMBER">
            JOIN GIGABYTE AORUS MEMBER
          </div>
          <br>
          <div class="content">
            When you sign up for GIGABYTE AORUS membership, you'll instantly receive 50 bonus points that you can use to redeem rewards from your reward boutique. Get started and sign up now.
          </div>
          <div class="btn-div">
            <span class="Sign-Up">Sign Up</span>
            <span class="log-In">Log In</span>
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
  computed: {

  },
  mounted(){
    
  },
  watch:{
		
	},
  data(){
    return {
      
       
    }
  },
  methods:{
    
  }
}
</script>

<style>
#joinus{
  position: relative;
  width: 100%;
  height: auto;
  min-height: 540px;
  text-align: center;
  z-index: 1;
}
#joinus::before{
  content: "";
  position: absolute;
  left: 0;
  top: -100px;
  right: 0;
  bottom: 0;
  z-index: -2;
  opacity: 1;
  background: #000;
  clip-path: polygon(0 0, 100% 15%, 100% 100%, 0% 100%);
  background-size: cover;
  background-position: center center;
}
#joinus::after{
  content: "";
  position: absolute;
  left: 0;
  top: -100px;
  right: 0;
  bottom: 0;
  z-index: -1;
  opacity: 0.5;
  background: url(../../assets/images/bg/bg.jpg);
  clip-path: polygon(0 0, 100% 15%, 100% 100%, 0% 100%);
  background-size: cover;
  background-position: center center;
}

#joinus .title{
  margin-top: 100px;
  font-family: 'Aldrich',sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 45px;
  line-height: 44px;
  text-align: center;
  color: #FFFFFF;
}

#joinus .content{
  position: relative;
  display: inline-block;
  margin-top: 17px;
  font-family: 'TitilliumWeb',sans-serif;
  font-style: normal;
  font-weight: normal;
  font-size: 18px;
  line-height: 27px;
  text-align: center;
  color: #FFFFFF;
  max-width: 860px;

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
    
    
  }

  @media (max-width: 1199px){
   
  }

  @media (max-width: 991px){

  }
  @media (max-width: 767px){
   
   
  }


  @media (max-width: 575px){
   

  }

</style>