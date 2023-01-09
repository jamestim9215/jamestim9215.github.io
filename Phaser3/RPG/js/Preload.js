class Preload extends Phaser.Scene{
    constructor(){
        super('bootGame');
    }

    init(){

    }

    preload(){
        //loading 進度條
       
        this.add.text(20, 20, "Loading game", {fontSize: 24});
        var loadingText = this.add.text(260, 20,"0%", {fontSize: 24});

        var _this = this;

        var loading1 = false;
        var loading2 = false;
        var loading3 = false;

        this.load.on('progress', function (value) {
            var load = parseInt(value * 100);
            loadingText.text = load + "%";
            if(load < 90 && load > 60 && loading3==false){
                loading3 = true;
                _this.add.text(240, 20,".", {fontSize: 24});
            }else if(load < 60 && load > 30&& loading2==false){
                loading2 = true;
                _this.add.text(220, 20,".", {fontSize: 24});
            }else if(load < 30 && load > 0 && loading1==false){
                loading1 = true;
                _this.add.text(200, 20,".", {fontSize: 24});
            }
            
        });
                
        this.load.on('complete', function () {

        });
        //loading End 進度條

        this.load.image('background',"assets/images/BG.png");

        this.load.spritesheet("GameButton","./assets/PaperTheme/Spritesheet/gui_paper_animated_button1.png",{
            frameWidth: 96,
            frameHeight: 32
        });


        this.load.bitmapFont("pixelFont","assets/fonts/PressStart2P.png","assets/fonts/PressStart2P.xml");


        for(var i=1; i<=32;i++){
            var num = 0;
            if(i<10){ 
                num = '0' + i 
            }else{ 
                num = i 
            }

            this.load.spritesheet('Character'+i,"./assets/CharacterNEKONIN/pipo-nekonin0"+num+".png",{
                frameWidth: 32,
                frameHeight: 32
            });  

        }
         // 載入地圖資源

         this.load.tilemapTiledJSON('map', './assets/map.json')
         this.load.image('tiles', './assets/SERENE_VILLAGE_REVAMPED/Serene_Village_32x32.png')

         this.load.tilemapTiledJSON('mapHouse', './assets/houseMap.json')
         this.load.image('tilesHouse', './assets/Fantasy Interior Tiles/Full.png')
    }

    create(){

        // this.scene.start("GamePlay");
        this.scene.start("GameHome");
    }

    update(){

    }
}