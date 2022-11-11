
const window_Width = window.innerWidth ;
const window_Height = window.innerHeight;

function config(){
  return {
    width: window_Width,
    height: window_Height,
    backgroundColor: 0xffffff,
    physics:{
        default: "arcade",
        arcade:{
          debug: false
        },
    },
    fps: {
        target: 60,
        forceSetTimeOut: true
    },

  }
} 

export { 
  config 
} 
