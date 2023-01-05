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

        this.load.spritesheet('CharacterIdle',"assets/CHARACTER_SPRITES/Blue/Gunner_Blue_Idle.png",{
            frameWidth: 48,
            frameHeight: 48
        });

        this.load.spritesheet('CharacterRun',"assets/CHARACTER_SPRITES/Blue/Gunner_Blue_Run.png",{
            frameWidth: 48,
            frameHeight: 48
        });
        
        this.load.spritesheet('CharacterJump',"assets/CHARACTER_SPRITES/Blue/Gunner_Blue_Jump.png",{
            frameWidth: 48,
            frameHeight: 48
        });

        
        this.load.spritesheet('CharacterCrouch',"assets/CHARACTER_SPRITES/Blue/Gunner_Blue_Crouch.png",{
            frameWidth: 48,
            frameHeight: 48
        });

        this.load.spritesheet('CharacterDeath',"assets/CHARACTER_SPRITES/Blue/Gunner_Blue_Death.png",{
            frameWidth: 48,
            frameHeight: 48
        });

        // this.load.bitmapFont("pixelFont","assets/fonts/PressStart2P.png","assets/fonts/PressStart2P.xml");
    }

    create(){


        this.anims.create({
            key: "CharacterIdle",
            frames: this.anims.generateFrameNumbers('CharacterIdle'),
            frameRate: 5,
            repeat: -1
        })

        this.anims.create({
            key: "CharacterRun",
            frames: this.anims.generateFrameNumbers('CharacterRun'),
            frameRate: 10,
            repeat: -1
        })

        this.anims.create({
            key: "CharacterJump",
            frames: this.anims.generateFrameNumbers('CharacterJump'),
            frameRate: 5,
            repeat: 0
        })

        this.anims.create({
            key: "CharacterCrouch",
            frames: this.anims.generateFrameNumbers('CharacterCrouch'),
            frameRate: 18,
            repeat: 0
        })

        this.anims.create({
            key: "CharacterDeath",
            frames: this.anims.generateFrameNumbers('CharacterDeath'),
            frameRate: 5,
            repeat: 0
        })

        this.scene.start("GamePlay");
    }

    update(){

    }
}