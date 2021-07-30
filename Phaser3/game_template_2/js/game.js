var config = {
    width: 1200,
    height: 600,
    backgroundColor: 0x000000,
    scene: [preloadGame, playGame],
    physics:{
        default: "arcade",
        arcade:{
            debug: true
        }
    }
}

var game = new Phaser.Game(config);


