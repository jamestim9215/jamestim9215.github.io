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
    addLife: 100, 
    enemyCount: 5,
    enemyLife: 3,
    bossLife: 30,
}
var  gameSetting =  {
    playerSpeed: 500,
}

var game = new Phaser.Game(config);


