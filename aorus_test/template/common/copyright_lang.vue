<template>
    <div class="aorus-copyright-lang-div">
      <div class="aorus-container py-4">
        <div class="row">
          <div class="col-12 col-sm-6">
            <div class="lang-change">
              <i class="fas fa-globe-americas"></i> Global (English)
            </div>
          </div>
          <div class="col-12 col-sm-6 text-right copyright">
              ©2020 GIGA-BYTE Technology Co., Ltd. All rights reserved. | Terms Of Use | Privacy Policy
          </div>
        </div>

      </div>
      <div class="colorbottom">

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

  .aorus-copyright-lang-div{
    color:#fff;
    background: #000;
  }
  .colorbottom{
    position: relative;
    height: 5px;
    width: 100%;
    background:  linear-gradient(90deg, #5FF9FC 0%, #69A5DC 23.5%, #B460C6 69.44%, #F232B1 100%);
    transform: matrix(1, 0, 0, -1, 0, 0);
  }

  .copyright{
    font-family: 'TitilliumWeb',sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 13px;
    line-height: 20px;
    text-transform: capitalize;
    color: #C4C4C4;
  }

  .lang-change{
    font-family: 'TitilliumWeb',sans-serif;
    font-style: normal;
    font-weight: normal;
    font-size: 16px;
    line-height: 24px;
    text-transform: capitalize;

    color: #FFFFFF;
  }

  .lang-change svg{
    font-size: 22px;
    margin-right: 5px;
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