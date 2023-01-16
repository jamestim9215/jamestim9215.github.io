
let PlayerInfo = {
  x: 100, 
  y: 200, 
  skin:1,
  Name: "笨貓",
  SocketID : null,
}


let config = {
  width: 320,
  height: 480,
  backgroundColor: 0x000000,
  scale: {
      // mode: Phaser.Scale.FIT,
      // autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
  },
  physics: {
      default: "arcade",
      arcade: {
          gravity: { y: 0 },
          debug: false
      }
  }
} 

export { 
  PlayerInfo, 
  config 
} 
