import { config } from '@/config.js'
// import { socket } from '../socket'
import WebFontFile from '@/common/WebFontFile'


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
		this.load.addFile(new WebFontFile(this.load, 'Press Start 2P'))

        //載入背景
        this.load.image('homeBg', "./src/assets/images/Maps.png");

        // //載入按鈕圖片
        // this.load.spritesheet('ButtonBg', './src/assets/images/ui/PixelGUIButtons.png', { frameWidth: 16, frameHeight: 32 });

        // //載入字體
        // this.load.bitmapFont("pixelFont", "./src/assets/fonts/PressStart2P.png", "./src/assets/fonts/PressStart2P.xml");

        
        // this.load.plugin('DialogModalPlugin', './src/Common/DialogModal/DialogModalPlugin.js',true);
    }

    create() {
        this.scene.start("Index");
    }

    update() {

    }
}