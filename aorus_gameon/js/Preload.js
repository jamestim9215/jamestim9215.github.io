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



        this.load.image('background',"assets/images/jason/map/map-2.jpg");
        this.load.image('mapcloud',"assets/images/jason/map/cloud.png");
        this.load.image('star',"assets/images/jason/map/star.png");

        this.load.image('title',"assets/images/jason/UI/title.png");
        this.load.image('button',"assets/images/jason/UI/button.png");
        this.load.image('button-hover',"assets/images/jason/UI/button-hover.png");
        this.load.image('gameover-frame',"assets/images/jason/UI/gameover-frame.png");
        this.load.image('dashboard',"assets/images/jason/UI/dashboard.png");
        


        // this.load.image('star',"assets/images/star.png");
        this.load.image('heart',"assets/images/jason/item/LifeF.png");
        this.load.image('heart_die',"assets/images/jason/item/LifeF-2.png");

        this.load.spritesheet('spaceship',"assets/images/spritesheets/spaceship.png",{
            frameWidth: 65,
            frameHeight: 78
        });
        this.load.spritesheet('ufo',"assets/images/spritesheets/enemy.png",{
            frameWidth: 137,
            frameHeight: 160
        });
        this.load.spritesheet('ufoM',"assets/images/spritesheets/Monster-Ｍ.png",{
            frameWidth: 188,
            frameHeight: 200
        });
        this.load.spritesheet('ufoboss',"assets/images/spritesheets/Monster-L.png",{
            frameWidth: 245,
            frameHeight: 302
        });
        this.load.spritesheet('die',"assets/images/spritesheets/bum.png",{
            frameWidth: 120,
            frameHeight: 120
        });
        // this.load.spritesheet('powerUp',"assets/images/spritesheets/power-up.png",{
        //     frameWidth: 16,
        //     frameHeight: 16
        // });
        this.load.spritesheet('beam',"assets/images/spritesheets/beam.png",{
            frameWidth: 60,
            frameHeight: 140
        });
        this.load.spritesheet('beam2',"assets/images/spritesheets/beam2.png",{
            frameWidth: 30,
            frameHeight: 130
        });

        this.load.spritesheet('beam3',"assets/images/spritesheets/beam3.png",{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('missile',"assets/images/spritesheets/egb.png",{
            frameWidth: 100,
            frameHeight: 100
        });

        
        this.load.spritesheet('addMissile',"assets/images/jason/item/life.png",{
            frameWidth: 207,
            frameHeight: 201
        });

        this.load.spritesheet('addHeart',"assets/images/jason/item/life.png",{
            frameWidth: 205,
            frameHeight: 199
        });

        this.load.spritesheet('powerup',"assets/images/jason/item/bullet.png",{
            frameWidth: 205,
            frameHeight: 199
        });


        this.load.bitmapFont("pixelFont","assets/fonts/PressStart2P.png","assets/fonts/PressStart2P.xml");

        this.load.audio("audio_beam", "assets/sounds/Sci-Fi Bullet Flyby 2.mp3");
        this.load.audio("player_die", "assets/sounds/Little Character Kill Hit.wav");
        this.load.audio("eneny_die", "assets/sounds/8-Bit Style Damage.wav");
        this.load.audio("music","assets/sounds/Retro_Synthwave_Game_Background_Loop.wav");
        this.load.audio("power_up","assets/sounds/Retro Level Up 1.mp3");
        this.load.audio("heart_up","assets/sounds/Great Game 8-Bit Space Boost.wav");
        this.load.audio("game_button","assets/sounds/Mountain Audio - Sci-Fi Game Button.mp3");
    }

    create(){


        this.anims.create({
            key: "ufo_anim",
            frames: this.anims.generateFrameNumbers('ufo'),
            frameRate: 5,
            repeat: -1
        })
        this.anims.create({
            key: "ufoM_anim",
            frames: this.anims.generateFrameNumbers('ufoM'),
            frameRate: 5,
            repeat: -1
        })
        this.anims.create({
            key: "ufoboss_anim",
            frames: this.anims.generateFrameNumbers('ufoboss'),
            frameRate: 5,
            repeat: -1
        })
        this.anims.create({
            key: "die_anim",
            frames: this.anims.generateFrameNumbers('die'),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        })

        this.anims.create({
            key: "ship_anim",
            frames: this.anims.generateFrameNumbers('spaceship'),
            frameRate: 5,
            repeat: -1
        })

        this.anims.create({
            key: "beam_anim",
            frames: this.anims.generateFrameNumbers('beam'),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "beam2_anim",
            frames: this.anims.generateFrameNumbers('beam2'),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "beam3_anim",
            frames: this.anims.generateFrameNumbers('beam3'),
            frameRate: 15,
            repeat: -1
        })
        this.anims.create({
            key: "missile_anim",
            frames: this.anims.generateFrameNumbers('missile'),
            frameRate: 20,
            repeat: -1
        })

        this.anims.create({
            key: "addheart_anim",
            frames: this.anims.generateFrameNumbers('addHeart'),
            frameRate: 5,
            repeat: -1
        })

        this.anims.create({
            key: "powerup_anim",
            frames: this.anims.generateFrameNumbers('powerup'),
            frameRate: 5,
            repeat: -1
        })

        
        this.anims.create({
            key: "addMissile_anim",
            frames: this.anims.generateFrameNumbers('addMissile'),
            frameRate: 5,
            repeat: -1
        })




        // this.add.text(20, 20, "Loading game");

        // setTimeout(()=>{this.add.text(140, 20, ".");},1000);
        // setTimeout(()=>{this.add.text(160, 20, ".");},2000);
        // setTimeout(()=>{this.add.text(180, 20, ".");},4000);

        // setTimeout(()=>{this.scene.start("playGame");},5000);

        this.scene.start("gameMenu");
    }

    update(){

    }
}