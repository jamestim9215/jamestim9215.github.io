import { config, PlayerInfo } from '../config'
// import { socket } from '../socket'


export default class Preload extends Phaser.Scene {
    constructor() {
        super('bootGame');
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


        //載入背景
        this.load.image('background', "./assets/images/BG.png");


        //載入按鈕
        this.load.spritesheet("GameButton", "./assets/images/Ui/gui_paper_animated_button1.png", {
            frameWidth: 96,
            frameHeight: 32
        });


        //載入字體
        this.load.bitmapFont("pixelFont", "./assets/fonts/PressStart2P.png", "./assets/fonts/PressStart2P.xml");


        //載入所有角色Skin

        this.load.spritesheet('Character', "./assets/images/Character/GumdropSource_03/SpriteSheets/Hero_P1.png", {
            frameWidth: 64,
            frameHeight: 64
        });

        this.load.spritesheet('Sword', "./assets/images/Character/GumdropSource_03/SpriteSheets/Sword_FG.png", {
            frameWidth: 64,
            frameHeight: 64
        });

        this.load.spritesheet('Smear', "./assets/images/Character/GumdropSource_03/SpriteSheets/Smear.png", {
            frameWidth: 64,
            frameHeight: 64
        });

        this.load.spritesheet('Slime', "./assets/images/SlimeRed.png", {
            frameWidth: 32,
            frameHeight: 32
        });
        // this.load.spritesheet('SlimeBlue', "./assets/images/SlimeBlue.png", {
        //     frameWidth: 32,
        //     frameHeight: 32
        // });


        this.load.spritesheet('Boss', "./assets/images/Boss/Boss.png", {
            frameWidth: 96,
            frameHeight: 96
        });
        this.load.spritesheet('BossEgg', "./assets/images/Boss/egg.png", {
            frameWidth: 32,
            frameHeight: 32
        });
        this.load.spritesheet('AttackCicle', "./assets/images/Effects/weaponhit.png", {
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('AttackShock', "./assets/images/Effects/shock.png", {
            frameWidth: 140,
            frameHeight: 50
        });
        this.load.spritesheet('AttackFire', "./assets/images/Effects/fire.png", {
            frameWidth: 100,
            frameHeight: 100
        });


        // 載入地圖資源

        this.load.tilemapTiledJSON('map', './assets/map/GameMap.json')
        this.load.image('tiles', './assets/images/Map/Serene_Village_32x32.png')

        this.load.tilemapTiledJSON('mapBoss', './assets/map/BossMap.json')
        this.load.image('tilesBoss', './assets/images/Full.png')


    }

    create() {
        var keyName = 'Character';

        //站著
        this.anims.create({
            key: "CharacterIdleDown",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "CharacterIdleRight",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [10, 11, 12, 13, 14, 15, 16, 17] }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "CharacterIdleUp",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [20, 21, 22, 23, 24, 25, 26, 27] }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "CharacterIdleLeft",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [30, 31, 32, 33, 34, 35, 36, 37] }),
            frameRate: 10,
            repeat: -1
        })

        //走路
        this.anims.create({
            key: "CharacterWalkDown",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [40, 41, 42, 43, 44, 45, 46, 47] }),
            frameRate: 15,
            repeat: -1
        })
        this.anims.create({
            key: "CharacterWalkRight",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [50, 51, 52, 53, 54, 55, 56, 57] }),
            frameRate: 15,
            repeat: -1
        })
        this.anims.create({
            key: "CharacterWalkUp",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [60, 61, 62, 63, 64, 65, 66, 67] }),
            frameRate: 15,
            repeat: -1
        })
        this.anims.create({
            key: "CharacterWalkLeft",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [70, 71, 72, 73, 74, 75, 76, 77] }),
            frameRate: 15,
            repeat: -1
        })


        //跑步
        this.anims.create({
            key: "CharacterRunDown",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [80, 81, 82, 83, 84, 85, 86, 87] }),
            frameRate: 20,
            repeat: -1
        })
        this.anims.create({
            key: "CharacterRunRight",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [90, 91, 92, 93, 94, 95, 96, 97] }),
            frameRate: 20,
            repeat: -1
        })
        this.anims.create({
            key: "CharacterRunUp",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [100, 101, 102, 103, 104, 105, 106, 107] }),
            frameRate: 20,
            repeat: -1
        })
        this.anims.create({
            key: "CharacterRunLeft",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [110, 111, 112, 113, 114, 115, 116, 117] }),
            frameRate: 20,
            repeat: -1
        })

        //攻擊 往右揮動
        this.anims.create({
            key: "CharacterAttackDown",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [120, 121, 122, 123, 124, 125] }),
            frameRate: 30,
            repeat: 0
        })
        this.anims.create({
            key: "CharacterAttackRight",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [130, 131, 132, 133, 134, 135] }),
            frameRate: 30,
            repeat: 0
        })
        this.anims.create({
            key: "CharacterAttackUp",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [140, 141, 142, 143, 144, 145] }),
            frameRate: 30,
            repeat: 0
        })
        this.anims.create({
            key: "CharacterAttackLeft",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [150, 151, 152, 153, 154, 155] }),
            frameRate: 30,
            repeat: 0
        })
        //攻擊 往左揮動
        this.anims.create({
            key: "CharacterAttackLDown",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [160, 161, 162, 163, 164, 165] }),
            frameRate: 30,
            repeat: 0
        })
        this.anims.create({
            key: "CharacterAttackLRight",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [170, 171, 172, 173, 174, 175] }),
            frameRate: 30,
            repeat: 0
        })
        this.anims.create({
            key: "CharacterAttackLUp",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [180, 181, 182, 183, 184, 185] }),
            frameRate: 30,
            repeat: 0
        })
        this.anims.create({
            key: "CharacterAttackLLeft",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [190, 191, 192, 193, 194, 195] }),
            frameRate: 30,
            repeat: 0
        })

        var keyNameSword = 'Sword';

        //站著
        this.anims.create({
            key: "SwordIdleDown",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "SwordIdleRight",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [10, 11, 12, 13, 14, 15, 16, 17] }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "SwordIdleUp",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [20, 21, 22, 23, 24, 25, 26, 27] }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "SwordIdleLeft",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [30, 31, 32, 33, 34, 35, 36, 37] }),
            frameRate: 10,
            repeat: -1
        })

        //走路
        this.anims.create({
            key: "SwordWalkDown",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [40, 41, 42, 43, 44, 45, 46, 47] }),
            frameRate: 15,
            repeat: -1
        })
        this.anims.create({
            key: "SwordWalkRight",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [50, 51, 52, 53, 54, 55, 56, 57] }),
            frameRate: 15,
            repeat: -1
        })
        this.anims.create({
            key: "SwordWalkUp",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [60, 61, 62, 63, 64, 65, 66, 67] }),
            frameRate: 15,
            repeat: -1
        })
        this.anims.create({
            key: "SwordWalkLeft",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [70, 71, 72, 73, 74, 75, 76, 77] }),
            frameRate: 15,
            repeat: -1
        })


        //跑步
        this.anims.create({
            key: "SwordRunDown",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [80, 81, 82, 83, 84, 85, 86, 87] }),
            frameRate: 20,
            repeat: -1
        })
        this.anims.create({
            key: "SwordRunRight",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [90, 91, 92, 93, 94, 95, 96, 97] }),
            frameRate: 20,
            repeat: -1
        })
        this.anims.create({
            key: "SwordRunUp",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [100, 101, 102, 103, 104, 105, 106, 107] }),
            frameRate: 20,
            repeat: -1
        })
        this.anims.create({
            key: "SwordRunLeft",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [110, 111, 112, 113, 114, 115, 116, 117] }),
            frameRate: 20,
            repeat: -1
        })

        //攻擊 往右揮動
        this.anims.create({
            key: "SwordAttackDown",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [120, 121, 122, 123, 124, 125] }),
            frameRate: 30,
            repeat: 0
        })
        this.anims.create({
            key: "SwordAttackRight",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [130, 131, 132, 133, 134, 135] }),
            frameRate: 30,
            repeat: 0
        })
        this.anims.create({
            key: "SwordAttackUp",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [140, 141, 142, 143, 144, 145] }),
            frameRate: 30,
            repeat: 0
        })
        this.anims.create({
            key: "SwordAttackLeft",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [150, 151, 152, 153, 154, 155] }),
            frameRate: 30,
            repeat: 0
        })
        //攻擊 往左揮動
        this.anims.create({
            key: "SwordAttackLDown",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [160, 161, 162, 163, 164, 165] }),
            frameRate: 30,
            repeat: 0
        })
        this.anims.create({
            key: "SwordAttackLRight",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [170, 171, 172, 173, 174, 175] }),
            frameRate: 30,
            repeat: 0
        })
        this.anims.create({
            key: "SwordAttackLUp",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [180, 181, 182, 183, 184, 185] }),
            frameRate: 30,
            repeat: 0
        })
        this.anims.create({
            key: "SwordAttackLLeft",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [190, 191, 192, 193, 194, 195] }),
            frameRate: 30,
            repeat: 0
        })

        var keyNameSmear = 'Smear';

        //站著
        this.anims.create({
            key: "SmearIdleDown",
            frames: this.anims.generateFrameNumbers(keyNameSmear, { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "SmearIdleRight",
            frames: this.anims.generateFrameNumbers(keyNameSmear, { frames: [10, 11, 12, 13, 14, 15, 16, 17] }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "SmearIdleUp",
            frames: this.anims.generateFrameNumbers(keyNameSmear, { frames: [20, 21, 22, 23, 24, 25, 26, 27] }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "SmearIdleLeft",
            frames: this.anims.generateFrameNumbers(keyNameSmear, { frames: [30, 31, 32, 33, 34, 35, 36, 37] }),
            frameRate: 10,
            repeat: -1
        })

        //走路
        this.anims.create({
            key: "SmearWalkDown",
            frames: this.anims.generateFrameNumbers(keyNameSmear, { frames: [40, 41, 42, 43, 44, 45, 46, 47] }),
            frameRate: 15,
            repeat: -1
        })
        this.anims.create({
            key: "SmearWalkRight",
            frames: this.anims.generateFrameNumbers(keyNameSmear, { frames: [50, 51, 52, 53, 54, 55, 56, 57] }),
            frameRate: 15,
            repeat: -1
        })
        this.anims.create({
            key: "SmearWalkUp",
            frames: this.anims.generateFrameNumbers(keyNameSmear, { frames: [60, 61, 62, 63, 64, 65, 66, 67] }),
            frameRate: 15,
            repeat: -1
        })
        this.anims.create({
            key: "SmearWalkLeft",
            frames: this.anims.generateFrameNumbers(keyNameSmear, { frames: [70, 71, 72, 73, 74, 75, 76, 77] }),
            frameRate: 15,
            repeat: -1
        })


        //跑步
        this.anims.create({
            key: "SmearRunDown",
            frames: this.anims.generateFrameNumbers(keyNameSmear, { frames: [80, 81, 82, 83, 84, 85, 86, 87] }),
            frameRate: 20,
            repeat: -1
        })
        this.anims.create({
            key: "SmearRunRight",
            frames: this.anims.generateFrameNumbers(keyNameSmear, { frames: [90, 91, 92, 93, 94, 95, 96, 97] }),
            frameRate: 20,
            repeat: -1
        })
        this.anims.create({
            key: "SmearRunUp",
            frames: this.anims.generateFrameNumbers(keyNameSmear, { frames: [100, 101, 102, 103, 104, 105, 106, 107] }),
            frameRate: 20,
            repeat: -1
        })
        this.anims.create({
            key: "SmearRunLeft",
            frames: this.anims.generateFrameNumbers(keyNameSmear, { frames: [110, 111, 112, 113, 114, 115, 116, 117] }),
            frameRate: 20,
            repeat: -1
        })

        //攻擊 往右揮動
        this.anims.create({
            key: "SmearAttackDown",
            frames: this.anims.generateFrameNumbers(keyNameSmear, { frames: [120, 121, 122, 123, 124, 125] }),
            frameRate: 30,
            repeat: 0
        })
        this.anims.create({
            key: "SmearAttackRight",
            frames: this.anims.generateFrameNumbers(keyNameSmear, { frames: [130, 131, 132, 133, 134, 135] }),
            frameRate: 30,
            repeat: 0
        })
        this.anims.create({
            key: "SmearAttackUp",
            frames: this.anims.generateFrameNumbers(keyNameSmear, { frames: [140, 141, 142, 143, 144, 145] }),
            frameRate: 30,
            repeat: 0
        })
        this.anims.create({
            key: "SmearAttackLeft",
            frames: this.anims.generateFrameNumbers(keyNameSmear, { frames: [150, 151, 152, 153, 154, 155] }),
            frameRate: 30,
            repeat: 0
        })
        //攻擊 往左揮動
        this.anims.create({
            key: "SmearAttackLDown",
            frames: this.anims.generateFrameNumbers(keyNameSmear, { frames: [160, 161, 162, 163, 164, 165] }),
            frameRate: 30,
            repeat: 0
        })
        this.anims.create({
            key: "SmearAttackLRight",
            frames: this.anims.generateFrameNumbers(keyNameSmear, { frames: [170, 171, 172, 173, 174, 175] }),
            frameRate: 30,
            repeat: 0
        })
        this.anims.create({
            key: "SmearAttackLUp",
            frames: this.anims.generateFrameNumbers(keyNameSmear, { frames: [180, 181, 182, 183, 184, 185] }),
            frameRate: 30,
            repeat: 0
        })
        this.anims.create({
            key: "SmearAttackLLeft",
            frames: this.anims.generateFrameNumbers(keyNameSmear, { frames: [190, 191, 192, 193, 194, 195] }),
            frameRate: 30,
            repeat: 0
        })


        this.anims.create({
            key: "SlimeIdle",
            frames: this.anims.generateFrameNumbers("Slime", { frames: [0, 1, 2, 3] }),
            frameRate: 5,
            repeat: -1
        })

        this.anims.create({
            key: "SlimeJump",
            frames: this.anims.generateFrameNumbers("Slime", { frames: [0, 1, 2, 3] }),
            frameRate: 5,
            repeat: -1
        })




        this.anims.create({
            key: "BossIdle",
            frames: this.anims.generateFrameNumbers("Boss", { frames: [0, 1, 2, 3] }),
            frameRate: 5,
            repeat: -1
        })

        this.anims.create({
            key: "BossIdle2",
            frames: this.anims.generateFrameNumbers("Boss", { frames: [0, 0, 0, 0, 0, 15, 15, 16, 16, 16,] }),
            frameRate: 5,
            repeat: 0
        })

        this.anims.create({
            key: "BossIdleHide",
            frames: this.anims.generateFrameNumbers("Boss", { frames: [15,16,17,18,19] }),
            frameRate: 10,
            repeat: 0
        })
        this.anims.create({
            key: "BossIdleShow",
            frames: this.anims.generateFrameNumbers("Boss", { frames: [19,18,17,16,15] }),
            frameRate: 10,
            repeat: 0
        })

        this.anims.create({
            key: 'AttackCicleRun',
            frames: this.anims.generateFrameNumbers('AttackCicle', { start: 0, end: 35 }),
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
            key: 'AttackWater',
            frames: this.anims.generateFrameNumbers('Boss', { frames: [20, 21, 22, 23, 22, 23, 22, 23, 22, 23, 22, 23, 22, 23, 24, 24, 24] }),
            frameRate: 5,
            repeat: -1
        });

        this.anims.create({
            key: 'EggRun',
            frames: this.anims.generateFrameNumbers('BossEgg', { frames: [0,0,1,0,2,0,1,0,2,0,0] }),
            frameRate: 5,
            repeat: -1
        });
        this.anims.create({
            key: 'AttackFireRun',
            frames: this.anims.generateFrameNumbers('AttackFire', { start: 0, end: 71 }),
            frameRate: 30,
            repeat: 0
        });

        this.scene.start("GameBoss");
        // this.scene.start("GamePlay");
        // this.scene.start("GameHouse");
        // this.scene.start("GameHome");
    }

    update() {

    }
}