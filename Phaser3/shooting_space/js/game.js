var config = {
    width: 600,
    height: 1000,
    backgroundColor: 0x000000,
    scene: [Preload, GameMenu, GamePlay],
    physics:{
        default: "arcade",
        arcade:{
            debug: false
        }
    },
    life: 3,
}
var  gameSetting =  {
    playerSpeed: 500,
}

var game = new Phaser.Game(config);


