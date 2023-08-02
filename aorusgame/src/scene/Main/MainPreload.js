import { config,setPlayerPosId } from '@/config.js'
// import { socket } from '../socket'
import { PlayerCreate } from '@/common/player/playerCreate.js'


export default class MainPreload extends Phaser.Scene {
    constructor() {
        super('MainPreload');
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

        this.load.tilemapTiledJSON('CyberMainJSON', './src/assets/maps/CyberMain.json')
        this.load.image('CyberMain1TileImg', './src/assets/images/32CyberPop Vexed/Mid-TownA5.png')
        this.load.image('CyberMain2TileImg', './src/assets/images/32CyberPop Vexed/Mid-TownD.png')
        this.load.image('CyberMain3TileImg', './src/assets/images/32CyberPop Vexed/Mid-TownB.png')
        this.load.image('CyberMain4TileImg', './src/assets/images/32CyberPop Vexed/Mid-TownC.png')
        this.load.image('CyberMain5TileImg', './src/assets/images/32CyberPop Vexed/CP_WallsA4.png')

        // this.load.spritesheet('Character', "./src/assets/images/player/GumdropSource_03/SpriteSheets/Hero_P1.png", {
        //     frameWidth: 64,
        //     frameHeight: 64
        // });

        // this.load.spritesheet('Sword', "./src/assets/images/player/GumdropSource_03/SpriteSheets/Sword_FG.png", {
        //     frameWidth: 64,
        //     frameHeight: 64
        // });

        // this.load.spritesheet('Smear', "./src/assets/images/player/GumdropSource_03/SpriteSheets/Smear.png", {
        //     frameWidth: 64,
        //     frameHeight: 64
        // });

        // this.load.spritesheet('Character', "./src/assets/images/32CyberPop Vexed/Objects & Extras/$MorganB.png", {
        //     frameWidth: 36,
        //     frameHeight: 64
        // });

        // this.load.spritesheet('Sword', "./src/assets/images/32CyberPop Vexed/Objects & Extras/$MorganB.png", {
        //     frameWidth: 36,
        //     frameHeight: 64
        // });

        // this.load.spritesheet('Smear', "./src/assets/images/32CyberPop Vexed/Objects & Extras/$MorganB.png", {
        //     frameWidth: 36,
        //     frameHeight: 64
        // });

        
        this.load.spritesheet('CharacterAORUS', "./src/assets/images/AllanimAorusgirl.png", {
            frameWidth: 35,
            frameHeight: 64
        });
        this.load.spritesheet('CharacterAORUS16', "./src/assets/images/16AorusGirl.png", {
            frameWidth: 50,
            frameHeight: 64
        });
        this.load.spritesheet('CharacterAORUS162', "./src/assets/images/16AorusGirl2.png", {
            frameWidth: 50,
            frameHeight: 64
        });


        //載入按鈕圖片
        this.load.spritesheet('ButtonBg', './src/assets/images/ui/PixelGUIButtons.png', { frameWidth: 16, frameHeight: 32 });
        //載入UI圖片
        this.load.image('BagBgUI', './src/assets/images/ui/GameUi/UI06.png');
        this.load.image('BagConcentBgUI', './src/assets/images/ui/GameUi/UI_D_01.png');

        this.load.spritesheet('IconUI', './src/assets/images/ui/Modern and Sci-Fi Icons/Icons/IconSheet.png', { frameWidth: 32, frameHeight: 32 });
        this.load.spritesheet('IconChoose', './src/assets/images/ui/Modern and Sci-Fi Icons/Icons/icon_choose.png', { frameWidth: 32, frameHeight: 32 });
    

    }

    create() {

        PlayerCreate(this);

        
        //站著
        this.anims.create({
            key: "CharacterAorusIdleDown",
            frames: this.anims.generateFrameNumbers('CharacterAORUS', { frames: [0, 1, 2, 3, 4] }),
            frameRate: 5,
            repeat: -1
        })
        
        //站著
        this.anims.create({
            key: "CharacterAorusIdle16Down",
            frames: this.anims.generateFrameNumbers('CharacterAORUS16', { frames: [0] }),
            frameRate: 5,
            repeat: -1
        })
        //站著
        this.anims.create({
            key: "CharacterAorusIdle162Down",
            frames: this.anims.generateFrameNumbers('CharacterAORUS162', { frames: [0] }),
            frameRate: 5,
            repeat: -1
        })

        //iconCHoose
        this.anims.create({
            key: "IconChooseAnims",
            frames: this.anims.generateFrameNumbers('IconChoose', { frames: [0,1] }),
            frameRate: 3,
            repeat: -1
        })

        this.scene.start("MainGame");
    }

    update() {

    }
}