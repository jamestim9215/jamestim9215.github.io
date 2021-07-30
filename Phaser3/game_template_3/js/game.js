var config = {
    width: 600,
    height: 1000,
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2],
    physics:{
        default: "arcade",
        arcade:{
            debug: false
        }
    }
}
var  gameSetting =  {
    playerSpeed: 500,
}

var game = new Phaser.Game(config);


