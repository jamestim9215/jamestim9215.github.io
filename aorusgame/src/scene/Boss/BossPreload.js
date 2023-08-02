import { config,setPlayerPosId } from '@/config.js'
// import { socket } from '../socket'
import { PlayerCreate } from '@/common/player/playerCreate.js'


export default class BossPreload extends Phaser.Scene {
    constructor() {
        super('BossPreload');
    }

    init() {

    }

    preload() {

        //loading 進度條

        this.add.text(20, 20, "Loading game", { fontSize: 24 });
        var loadingText = this.add.text(260, 20, "0%", { fontSize: 24 });

        var _this = this;

        var loading1 = false;
        var loading2 = false;
        var loading3 = false;

        this.load.on('progress', function (value) {
            var load = parseInt(value * 100);
            loadingText.text = load + "%";
            if (load < 90 && load > 60 && loading3 == false) {
                loading3 = true;
                _this.add.text(240, 20, ".", { fontSize: 24 });
            } else if (load < 60 && load > 30 && loading2 == false) {
                loading2 = true;
                _this.add.text(220, 20, ".", { fontSize: 24 });
            } else if (load < 30 && load > 0 && loading1 == false) {
                loading1 = true;
                _this.add.text(200, 20, ".", { fontSize: 24 });
            }

        });

        this.load.on('complete', function () {

        });
        //loading End 進度條
        
        // 載入地圖資源

        this.load.tilemapTiledJSON('CyberBossJSON', './src/assets/maps/CyberBoss.json')
        this.load.image('CyberBoss1TileImg', './src/assets/images/32CyberPop Vexed/CP_WallsA4.png')
        this.load.image('CyberBoss2TileImg', './src/assets/images/32CyberPop Vexed/Low-TownB.png')
        this.load.image('CyberBoss3TileImg', './src/assets/images/32CyberPop Vexed/Low-TownD.png')
        this.load.image('CyberBoss4TileImg', './src/assets/images/32CyberPop Vexed/Mid-TownA5.png')
        this.load.image('CyberBoss5TileImg', './src/assets/images/32CyberPop Vexed/Mid-TownD.png')
        this.load.image('CyberBoss6TileImg', './src/assets/images/Add16x2/Tileset.png')


        //載入按鈕圖片
        this.load.spritesheet('ButtonBg', './src/assets/images/ui/PixelGUIButtons.png', { frameWidth: 16, frameHeight: 32 });
        //載入UI圖片
        this.load.image('BagBgUI', './src/assets/images/ui/GameUi/UI06.png');
        this.load.image('BagConcentBgUI', './src/assets/images/ui/GameUi/UI_D_01.png');

        this.load.spritesheet('IconUI', './src/assets/images/ui/Modern and Sci-Fi Icons/Icons/IconSheet.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('IconChoose', './src/assets/images/ui/Modern and Sci-Fi Icons/Icons/icon_choose.png', { frameWidth: 32, frameHeight: 32 });
        

        
        // boss
        this.load.spritesheet('Boss', './src/assets/images/Boss/NewBossIdeo.png', {
            frameWidth: 128,
            frameHeight: 128
        });

        // boss
        this.load.spritesheet('BossX4', './src/assets/images/Boss/BossUI_buejka.png', {
            frameWidth: 512,
            frameHeight: 512
        });

        // boss
        this.load.spritesheet('BossAttack1', './src/assets/images/Boss/BossAtk1t.png', {
            frameWidth: 128,
            frameHeight: 128
        });

        // bossDie
        this.load.spritesheet('BossDead', './src/assets/images/Boss/BossDead.png', {
            frameWidth: 128,
            frameHeight: 128
        });

        // bossAttackNormalBall
        this.load.spritesheet('bossAttackNormalBall', './src/assets/images/Effects/Super Pixel Effects Pack 2/spritesheet/fx2_fire_burst_small_blue/spritesheet.png', {
            frameWidth: 32,
            frameHeight: 32
        });

        this.load.spritesheet('AttackCircle', "./src/assets/images/Effects/weaponhit.png", {
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('AttackShock', "./src/assets/images/Effects/shock.png", {
            frameWidth: 140,
            frameHeight: 50
        });
        this.load.spritesheet('AttackWater', "./src/assets/images/Effects/water.png", {
            frameWidth: 64,
            frameHeight: 192
        });
        this.load.spritesheet('AttackBox', "./src/assets/images/Effects/attackBox.png", {
            frameWidth: 320,
            frameHeight: 320
        });
        this.load.spritesheet('Attack3Fire', "./src/assets/images/Effects/attack3Fire.png", {
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('BossDieFire', "./src/assets/images/Effects/bossDieFire.png", {
            frameWidth: 320,
            frameHeight: 320
        });

    }

    create() {

        PlayerCreate(this);
        this.anims.create({
            key: 'AttackNormalBallRun',
            frames: this.anims.generateFrameNumbers('bossAttackNormalBall', { start: 0, end: 16 }),
            frameRate: 8,
            repeat: -1
        });

        this.anims.create({
            key: 'AttackCicleRun',
            frames: this.anims.generateFrameNumbers('AttackCircle', { start: 0, end: 35 }),
            frameRate: 15,
            repeat: -1
        });
        this.anims.create({
            key: 'AttackShockRun',
            frames: this.anims.generateFrameNumbers('AttackShock', { start: 0, end: 6 }),
            frameRate: 15,
            repeat: -1
        });
        this.anims.create({
            key: 'AttackWaterRun',
            frames: this.anims.generateFrameNumbers('AttackWater', { start: 0, end: 4}),
            frameRate: 10,
            repeat: -1
        });
        this.anims.create({
            key: 'AttackBoxRun',
            frames: this.anims.generateFrameNumbers('AttackBox', { start: 0, end: 15}),
            frameRate: 16,
            repeat: -1
        });
        this.anims.create({
            key: 'Attack3FireRun1',
            frames: this.anims.generateFrameNumbers('Attack3Fire', { start: 5, end: 24}),  //83
            frameRate: 39,
            repeat: 0
        });
        this.anims.create({
            key: 'Attack3FireRun2',
            frames: this.anims.generateFrameNumbers('Attack3Fire', { start: 25, end: 65}),  //83
            frameRate: 39,
            repeat: -1
        });
        this.anims.create({
            key: 'Attack3FireRun3',
            frames: this.anims.generateFrameNumbers('Attack3Fire', { start: 65, end: 83}),  //83
            frameRate: 39,
            repeat: 0
        });
        this.anims.create({
            key: 'BossDieFireRun',
            frames: this.anims.generateFrameNumbers('BossDieFire', { start: 0, end: 15}),  //83
            frameRate: 16,
            repeat: 0
        });

        

        this.scene.start("BossGame");
    }

    update() {

    }
}