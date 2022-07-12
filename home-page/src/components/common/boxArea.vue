<template>
  <ul class="box-area">
    <li />
    <li />
    <li />
    <li />
    <li />
    <li />
    <li />
    <li />
    <li />
    <li />
  </ul>
</template>

<style scoped lang="scss">

  .box-area {
    position: fixed;
    left: 0;
    top: 0;
    z-index: 0;
    width: 100%;
    height: 100%;
    overflow: hidden;
  }
  .box-area li {
    position: absolute;
    display: block;
    list-style: none;
    // width: 25px;
    // height: 25px;
    background: rgba(217, 255, 0, 0.3);
    border: 1px solid #d9ff00;
    animation: animate 20s linear infinite;
    bottom: -150px;
    border-radius: 30%;
  }
  .box-area li:nth-child(1) {
    left: 86%;
    width: 80px;
    height: 80px;
    animation-delay: 0s;
  }
  .box-area li:nth-child(2) {
    left: 12%;
    width: 30px;
    height: 30px;
    animation-delay: 1.5s;
    animation-duration: 10s;
  }
  .box-area li:nth-child(3) {
    left: 70%;
    width: 100px;
    height: 100px;
    animation-delay: 5.5s;
  }
  .box-area li:nth-child(4) {
    left: 42%;
    width: 150px;
    height: 150px;
    animation-delay: 0s;
    animation-duration: 15s;
  }
  .box-area li:nth-child(5) {
    left: 65%;
    width: 40px;
    height: 40px;
    animation-delay: 0s;
  }
  .box-area li:nth-child(6) {
    left: 40%;
    width: 70px;
    height: 70px;
    animation-delay: 1s;
  }
  .box-area li:nth-child(7) {
    left: 30%;
    width: 130px;
    height: 130px;
    animation-delay: 0s;
  }
  .box-area li:nth-child(8) {
    left: 5%;
    width: 110px;
    height: 110px;
    animation-delay: 0s;
  }
  .box-area li:nth-child(9) {
    left: 90%;
    width: 50px;
    height: 50px;
    animation-delay: 3s;
  }
  .box-area li:nth-child(10) {
    left: 25%;
    width: 30px;
    height: 30px;
    animation-delay: 3.5s;
  }
  @keyframes animate {
    0% {
      transform: translateY(0px) rotate(0deg);
      opacity: 1;
    }
    100% {
      transform: translateY(-800px) rotate(360deg);
      opacity: 0;
    }
  }
</style>