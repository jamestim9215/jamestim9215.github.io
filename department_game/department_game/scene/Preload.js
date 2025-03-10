import { config , characterList } from '../config'

var characterData = characterList();

export default class Preload extends Phaser.Scene{
    constructor(){
        super('bootGame');
    }

    init(){

    }

    preload(){
        
        //loading 進度條
        this.add.text(20, 20, "Loading game", {fontSize: 24, color: "#000"});
        
        var loadingText = this.add.text(260, 20,"0%", {fontSize: 24, color: "#000"});

        var _this = this;

        var loading1 = false;
        var loading2 = false;
        var loading3 = false;

        this.load.on('progress', function (value) {
            var load = parseInt(value * 100);
            loadingText.text = load + "%";
            if(load < 90 && load > 60 && loading3==false){
                loading3 = true;
                _this.add.text(240, 20,".", {fontSize: 24, color: "#000"});
            }else if(load < 60 && load > 30&& loading2==false){
                loading2 = true;
                _this.add.text(220, 20,".", {fontSize: 24, color: "#000"});
            }else if(load < 30 && load > 0 && loading1==false){
                loading1 = true;
                _this.add.text(200, 20,".", {fontSize: 24, color: "#000"});
            }
            
        });

        for(var item in characterData){
            this.load.spritesheet(characterData[item].name,characterData[item].url,{
                frameWidth: 1560 / 12,
                frameHeight: 247
            });
        }

        // this.load.spritesheet('character',"../assets/images/character/Man.png",{
        //     frameWidth: 1560 / 12,
        //     frameHeight: 247
        // });

        
        this.load.bitmapFont("pixelFont","assets/fonts/PressStart2P.png","assets/fonts/PressStart2P.xml");
                
        this.load.on('complete', function () {

        });
    }

    create(){
        

        for(var item in characterData){
            this.anims.create({
                key: characterData[item].name+"_stand",
                frames: this.anims.generateFrameNumbers(characterData[item].name, { start: 0, end: 0 }),
                frameRate: 20,
                repeat: -1
            })
            this.anims.create({
                key: characterData[item].name+"_walk",
                frames: this.anims.generateFrameNumbers(characterData[item].name),
                frameRate: 7,
                repeat: -1
            })
            this.anims.create({
                key: characterData[item].name+"_run",
                frames: this.anims.generateFrameNumbers(characterData[item].name),
                frameRate: 21,
                repeat: -1
            })
        }

        this.scene.start("mainpage");
    }

    update(){

    }
}