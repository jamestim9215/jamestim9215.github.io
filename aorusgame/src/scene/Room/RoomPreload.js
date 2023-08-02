import { config } from '@/config.js'
// import { socket } from '../socket'
import { PlayerCreate } from '@/common/player/playerCreate.js'
import { NpcCreate } from '@/common/npc/npcCreate.js'


export default class RoomPreload extends Phaser.Scene {
    constructor() {
        super('RoomPreload');
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
        this.load.tilemapTiledJSON('CyberRoomJSON', './src/assets/maps/CyberRoom.json')
        this.load.image('CyberRoom1TileImg', './src/assets/images/32CyberPop Vexed/Mid-TownA5.png')
        this.load.image('CyberRoom2TileImg', './src/assets/images/32CyberPop Vexed/Mid-TownD.png')
        this.load.image('CyberRoom3TileImg', './src/assets/images/32CyberPop Vexed/Mid-TownB.png')
        this.load.image('CyberRoom4TileImg', './src/assets/images/32CyberPop Vexed/Mid-TownC.png')
        this.load.image('CyberRoom5TileImg', './src/assets/images/32CyberPop Vexed/CP_WallsA4.png')

        this.load.spritesheet('AorusGirl', "./src/assets/images/NewAorusGirl.png", {
            frameWidth: 64,
            frameHeight: 64
        });

    }

    create() {

        PlayerCreate(this);
        
        //站著
        this.anims.create({
            key: "AorusGirlIdleDown",
            frames: this.anims.generateFrameNumbers('AorusGirl', { frames: [0, 1, 2, 3] }),
            frameRate: 5,
            repeat: -1
        })

        this.anims.create({
            key: "AorusGirlIdleUp",
            frames: this.anims.generateFrameNumbers('AorusGirl', { frames: [0, 1, 2, 3] }),
            frameRate: 5,
            repeat: -1
        })

        this.anims.create({
            key: "AorusGirlIdleLeft",
            frames: this.anims.generateFrameNumbers('AorusGirl', { frames: [0, 1, 2, 3] }),
            frameRate: 5,
            repeat: -1
        })

        this.anims.create({
            key: "AorusGirlIdleRight",
            frames: this.anims.generateFrameNumbers('AorusGirl', { frames: [0, 1, 2, 3] }),
            frameRate: 5,
            repeat: -1
        })


        NpcCreate(this);

        
        // var keyName = 'CharacterNpc';

        // //站著
        // this.anims.create({
        //     key: "CharacterNpcIdleDown",
        //     frames: this.anims.generateFrameNumbers(keyName, { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),
        //     frameRate: 10,
        //     repeat: -1
        // })
        // this.anims.create({
        //     key: "CharacterNpcIdleRight",
        //     frames: this.anims.generateFrameNumbers(keyName, { frames: [10, 11, 12, 13, 14, 15, 16, 17] }),
        //     frameRate: 10,
        //     repeat: -1
        // })
        // this.anims.create({
        //     key: "CharacterNpcIdleUp",
        //     frames: this.anims.generateFrameNumbers(keyName, { frames: [20, 21, 22, 23, 24, 25, 26, 27] }),
        //     frameRate: 10,
        //     repeat: -1
        // })
        // this.anims.create({
        //     key: "CharacterNpcIdleLeft",
        //     frames: this.anims.generateFrameNumbers(keyName, { frames: [30, 31, 32, 33, 34, 35, 36, 37] }),
        //     frameRate: 10,
        //     repeat: -1
        // })


        this.scene.start("RoomGame");
    }

    update() {

    }
}