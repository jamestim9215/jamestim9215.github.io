<template>
  <div class="home-header">
    <img src="@/assets/images/header.jpg" alt="" />
    <div class="profileImg">
      <img src="@/assets/images/user.jpg" alt="">
    </div>
  </div>
</template>

<script>
export default {
  props: {},
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">
.home-header {
  position: relative;
  text-align: center;
}
.home-header>img {
  position: relative;
  width: 100%;
  height: 200px;
  object-fit: cover;
  text-align: center;
}


.profileImg{
  position: relative;
  margin-top: -120px;
  display: inline-block;
  width: 220px;
  height: 220px;
  border-radius: 50%;
  overflow: hidden;
  border: 2px solid #d9ff00;
  transition: 0.3s all;
}
.profileImg>img{
  position: relative;
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: 0.3s all;
}

.profileImg:hover{
  border: 10px solid #d9ff00;
  transform: translateY(-8px);
}

.profileImg:hover>img{
  transform: scale(1.1);
}

</style>
