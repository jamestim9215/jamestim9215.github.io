import { config,PlayerInfo } from '../config'
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
        this.load.image('background', "assets/images/BG.png");


        //載入按鈕
        this.load.spritesheet("GameButton", "./assets/images/Ui/gui_paper_animated_button1.png", {
            frameWidth: 96,
            frameHeight: 32
        });


        //載入字體
        this.load.bitmapFont("pixelFont", "assets/fonts/PressStart2P.png", "assets/fonts/PressStart2P.xml");


        //載入所有角色Skin
        // for (var i = 1; i <= 32; i++) {
        //     var num = 0;
        //     if (i < 10) {
        //         num = '0' + i
        //     } else {
        //         num = i
        //     }

        //     this.load.spritesheet('Character' + i, "./assets/images/Character/cat/pipo-nekonin0" + num + ".png", {
        //         frameWidth: 32,
        //         frameHeight: 32
        //     });

        // }

        this.load.spritesheet('Character', "./assets/images/Character/GumdropSource_03/SpriteSheets/Hero_P1.png", {
            frameWidth: 64,
            frameHeight: 64
        });


        this.load.spritesheet('Slime', "./assets/images/Slime 32x32.png", {
            frameWidth: 32,
            frameHeight: 32
        });


        // 載入地圖資源

        this.load.tilemapTiledJSON('map', './assets/map/GameMap.json')
        this.load.image('tiles', './assets/images/Map/Serene_Village_32x32.png')
        
    
    }

    create() {


        this.anims.create({
            key: "SlimeIdle",
            frames: this.anims.generateFrameNumbers("Slime", { frames: [0,1,2,3] }),
            frameRate: 5,
            repeat: -1
        })
        
        this.anims.create({
            key: "SlimeJump",
            frames: this.anims.generateFrameNumbers("Slime", { frames: [0,1,2,3] }),
            frameRate: 5,
            repeat: -1
        })
        
        this.scene.start("GamePlay");
        // this.scene.start("GameHouse");
        // this.scene.start("GameHome");
    }

    update() {

    }
}