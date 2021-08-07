var window_Width = window.innerWidth;
var window_Height = window.innerHeight;


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
    timeLevelUp: 10,

    playerSpeed: 500,
    life: 3, //玩家生命
    powerLevel: 5, //武器等級
    enemyCount: 2, //初始 怪物數量
    enemyLife: 2, //小怪生命

    enemyMLife: 7,
    enemyMCreateCycle: 30, //每幾秒產生

    bossLife: 15, //王 生命
    bossCreateCycle: 60, //每幾秒產生王

    addLife: 20, // 每 N 秒 產生一條命
    addPowerUp: 15,  // 每 N 秒 可獲得武器升級

    autoShootSpeed: 0.25, 
    missileLevel: 5,  //導彈出現等級
    autoMissileSpeed: 0.75,  

    levelUp: 250, // 幾分 等級升級
    createEnemy: 5, // 每 N 等級生怪
    addEnemyLife: 5,  // 每 N 等級 怪血 +2

    addEnemyMove: 2,  // 每 N 等級 怪移動 
    addEnemyMMove: 4, 
    addBossMove: 8, 
    autoShoot: true, //自動發射
    stepGameMenu : false, //跳過開頭
    mute : false, //靜音

}



var game = new Phaser.Game(config);

setTimeout(()=>{
    if(window_Width > window_Height){
        document.querySelector("canvas").style.height = window_Height + "px";
        document.querySelector("canvas").style.width  = (window_Height * 6) / 10 + "px";
    }else{
        if((window_Width / window_Height) > 0.6){
            document.querySelector("canvas").style.height = window_Height + "px";
            document.querySelector("canvas").style.width  = (window_Height * 6) / 10 + "px";
        }else{
            document.querySelector("canvas").style.width  = "100%";
        }
    }
},50)


