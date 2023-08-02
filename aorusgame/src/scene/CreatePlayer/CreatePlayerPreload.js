import ObjectData from '@/common/ObjectData.json'
export default class CreatePlayerPreload extends Phaser.Scene {
    constructor() {
        super('CreatePlayerPreload');
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
        this.load.image('homeBg', "./src/assets/images/home/BG.png");

        //載入字體
        this.load.bitmapFont("pixelFont", "./src/assets/fonts/PressStart2P.png", "./src/assets/fonts/PressStart2P.xml");

        ObjectData.Player.theme.map((item)=>{
            // 腳色
            this.load.spritesheet(item.name, item.assetsUrl, {
                frameWidth: item.frameWidth,
                frameHeight: item.frameHeight
            });
        })
        ObjectData.Npc.theme.map((item)=>{
            // 腳色
            this.load.spritesheet(item.name+'Npc', item.assetsUrl, {
                frameWidth: item.frameWidth,
                frameHeight: item.frameHeight
            });
        })

        

    }

    create() {

        
        ObjectData.Player.theme.map((item)=>{
            this.anims.create({
                key: item.name+"_Idle",
                frames: this.anims.generateFrameNumbers(item.name, { frames: [0,1,2,3] }),
                frameRate: item.frameRate,
                repeat: -1
            })
        })

        this.scene.start("CreatePlayerGame");
    }

    update() {

    }
}