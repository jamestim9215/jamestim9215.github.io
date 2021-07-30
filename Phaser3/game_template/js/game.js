var config = {
    width: 600,
    height: 1000,
    backgroundColor: 0x000000,
    scene: [Scene1, Scene2],
    physics:{
        default: "arcade",
        arcade:{
            debug: true
        }
    }
}

var game = new Phaser.Game(config);


