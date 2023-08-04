import { config } from '@/config.js'
// import { socket } from '../socket'
import { PlayerCreate } from '@/common/player/playerCreate.js'
import { NpcCreate } from '@/common/npc/npcCreate.js'


export default class Ua5aPreload extends Phaser.Scene {
    constructor() {
        super('Ua5aPreload');
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
        this.load.tilemapTiledJSON('Ua5aJSON', './src/assets/maps/Ua5aMap.json')
        this.load.image('Ua5aMap1TileImg', './src/assets/images/Add16x2/pixel-cyberpunk-interior.png')
        this.load.image('Ua5aMap2TileImg', './src/assets/images/Add16x2/Tileset.png')
        this.load.image('Ua5aMap3TileImg', './src/assets/images/Add16x2/TileSet v1.0.png')

    }

    create() {

        PlayerCreate(this);
        


        NpcCreate(this);



        this.scene.start("Ua5aGame");
    }

    update() {

    }
}