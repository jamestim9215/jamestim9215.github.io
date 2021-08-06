var window_width = window.innerWidth;
var window_Height = window.innerHeight;
console.log(window_Height);

var config = {
    type: Phaser.AUTO,
    width: 600,
    height: 1000,
    backgroundColor: 0x000000,
    scene: [Preload, GameMenu, GamePlay],
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
var  gameSetting =  {
    playerSpeed: 500,
    life: 3, //玩家生命
    powerLevel: 5, //武器等級
    enemyCount: 3, //初始 怪物數量
    enemyLife: 2, //小怪生命
    
    bossLife: 20, //王 生命
    bossCreateCycle: 10, //每幾秒產生王

    addLife: 30, // 每 N 秒 產生一條命
    addPowerUp: 20,  // 每 N 秒 可獲得武器升級
    levelUp: 250, // 幾分能升級
    createEnemy: 5, // 每 N 等級生怪
    addEnemyLife: 3,  // 每 N 等級 怪血 +2
    addEnemyMove: 4,  // 每 N 等級 怪移動 *1.1
    addBossMove: 5, 

    autoShoot: true,
}



var game = new Phaser.Game(config);



