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
}
var  gameSetting =  {
    playerSpeed: 500,

    life: 3, //玩家生命
    powerLevel: 2, //武器等級

    enemyCount: 3, //初始 怪物數量
    enemyLife: 1, //小怪生命
    bossLife: 10, //王 生命

    addLife: 200, // 每幾分能產生一條命
    // addPowerUp: 250,  // 每幾分 可獲得武器升級
    levelUp: 500, // 幾分能升級

    createEnemy: 5, // 每 N 等級生怪
    addEnemyLife: 2,  // 每 N 等級 怪血 + 1
    addEnemyMove: 5,  // 每 N 等級 怪移動 + 0.2
    addBossMove: 10, 
}

var game = new Phaser.Game(config);


