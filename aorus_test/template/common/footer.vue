<template>
    <div class="aorus-footer pt-4 pb-3">
      <img src="assets/images/svg/logo_svg.svg" alt="" srcset="">
      <br>
      <span class="slogan mt-4 glitch" data-text="TEAM UP. FIGHT ON.">
        TEAM UP. FIGHT ON.
      </span>
      <!-- <img class="mt-4" src="assets/images/slogan.png" width="189" alt="" srcset=""> -->
      <br>
      <div class="sns-div">
        <a href="" target="_blank"><i class="fab fa-facebook-f"></i></a>
        <a href="" target="_blank"><i class="fab fa-twitter"></i></a>
        <a href="" target="_blank"><i class="fab fa-youtube"></i></a>
        <a href="" target="_blank"><i class="fab fa-instagram"></i></a>
      </div>
      <div class="footer-list-div">
          <div class="footer-col-5">
            <div class="title">About Us</div>
            <div class="content">
              <div>
                <a href="">About AORUS</a>
              </div>
              <div>
                <a href="">About GIGABYTE</a>
              </div>
              <div>
                <a href="">Press</a>
              </div>
            </div>
          </div>
          <div class="footer-col-5">
            <div class="title">Products</div>
            <div class="content">
              <div>
                <a href="">Motherboard</a>
              </div>
              <div>
                <a href="">Graphics Card</a>
              </div>
              <div>
                <a href="">Laptop</a>
              </div>
              <div>
                <a href="">Monitor</a>
              </div>
              <div>
                <a href="">Peripherals</a>
              </div>
              <div>
                <a href="">Components</a>
              </div>
            </div>
          </div>
          <div class="footer-col-5">
            <div class="title">Explore</div>
            <div class="content">
              <div>
                <a href="">Build your own PC</a>
              </div>
              <div>
                <a href="">Esport</a>
              </div>
              <div>
                <a href="">Deals</a>
              </div>
              <div>
                <a href="">Events</a>
              </div>
              <div>
                <a href="">Blog</a>
              </div>
              <div>
                <a href="">Wallpaper</a>
              </div>
            </div>
          </div>
          <div class="footer-col-5">
            <div class="title">Membership</div>
            <div class="content">
              <div>
                <a href="https://member.aorus.com/global/whyjoin">Why Join</a>
              </div>
              <div>
                <a href="https://member.aorus.com/global/level">Membership Levels</a>
              </div>
              <div>
                <a href="https://member.aorus.com/global/aboutpointrewards">Points & Rewards</a>
              </div>
              <div>
                <a href="https://member.aorus.com/global/achievement_badges">Achievement Badges</a>
              </div>
              <div>
                <a href="https://member.aorus.com/global/rankboard">Member Leaderboard</a>
              </div>
              <div>
                <a href="https://member.aorus.com/global/FAQ">Member FAQ</a>
              </div>
            </div>
          </div>
          <div class="footer-col-5">
            <div class="title">Service</div>
            <div class="content">
              <div>
                <a href="">Where to buy</a>
              </div>
              <div>
                <a href="">Downloads</a>
              </div>
              <div>
                <a href="">Warranty Information</a>
              </div>
              <div>
                <a href="">RMA/ Returns</a>
              </div>
              <div>
                <a href="">Contact Us</a>
              </div>
              <div>
                <a href="">FAQ</a>
              </div>
              <div>
                <a href="">Product Registration</a>
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
  mounted:function(){
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

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>

  .aorus-footer{
      position: relative;
      width: 100%;
      height: auto;
      min-height: 524px;
      background: #1F1F1F;
      text-align: center;
  }
  .slogan{
    font-family: 'Aldrich',sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 18px;
    line-height: 18px;
    text-align: center;
    text-transform: uppercase;
    color: #FFFFFF;
  }
  .sns-div{
    position: relative;
    width: 100%;
    margin-top: 20px;
    padding: 0 30px;
    font-size: 20px;
  }
  .sns-div a{
    text-decoration: none;
  }
  .sns-div svg{
    margin: 0 5px;
    transition: 0.3s all;
    cursor: pointer;
    color: #626262;
  }

  .sns-div svg:hover{
    color: #ff6400;
  }

  .footer-list-div{
    position: relative;
    display: inline-block;
    width: auto;
    text-align: left;
    padding: 0 30px;
  }

  .footer-list-div .footer-col-5{
    position: relative;
    float: left;
    padding: 10px;
    width: 200px;
    height: auto;
    min-height: 100px;
  }

  .footer-list-div .footer-col-5 .title,
  .footer-list-div .footer-col-5 .content{
    position: relative;
    width: 100%;
    color: #fff;
  }

  .footer-list-div .footer-col-5 .title{
    font-family: 'Aldrich',sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 20px;
    line-height: 20px;
    text-transform: capitalize;
    margin-top: 35px;
    margin-bottom: 20px;
  }
  .footer-list-div .footer-col-5 .content{
    /* margin-top: 20px; */
    display: block;
  }
  .footer-list-div .footer-col-5 .content>div{
    margin-bottom: 8px;
  }

  .footer-list-div .footer-col-5 .content div a{
    font-family: 'TitilliumWeb',sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 15px;
    line-height: 23px;
    text-transform: capitalize;
    color: #C4C4C4;
    text-decoration: none;
    transition: 0.3s all;
  }

  .footer-list-div .footer-col-5 .content div a:hover{
    color:#ff6400;
  }

  @media (max-width: 1919px){
  }

  @media (max-width: 1199px){
    .footer-list-div .footer-col-5{
      width: 180px;
    }
  }

  @media (max-width: 991px){
    .footer-list-div .footer-col-5{
      width: 25%;
    }
  }

  @media (max-width: 767px){
    .footer-list-div .footer-col-5 .title{
      margin-top: 22px;
      margin-bottom: 0;
      width: 100%;
      text-align: center;
    }
    .footer-list-div .footer-col-5 .content{
      display: none;
    }
    .footer-list-div .footer-col-5{
      height: auto;
      min-height: auto;
      width: 100%;
    }
  }

  @media (max-width: 575px){
    .footer-list-div .footer-col-5 .title{
      width: 100%;
      text-align: center;
      margin-top: 22px;
      margin-bottom: 0;
    }
    .footer-list-div .footer-col-5 .content{
      display: none;
    }
    .footer-list-div .footer-col-5{
      height: auto;
      min-height: auto;
    }
  }

</style>