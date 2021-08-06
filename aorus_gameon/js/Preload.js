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
            console.log(load);
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



        this.load.image('background',"assets/images/jason/map/map.jpg");
        this.load.image('title',"assets/images/jason/UI/title.png");
        this.load.image('button',"assets/images/jason/UI/button.png");
        this.load.image('button-hover',"assets/images/jason/UI/button-hover.png");
        this.load.image('gameover-frame',"assets/images/jason/UI/gameover-frame.png");
        this.load.image('dashboard',"assets/images/jason/UI/dashboard.png");
        


        this.load.image('star',"assets/images/star.png");
        this.load.image('heart',"assets/images/jason/item/LifeF.png");
        this.load.image('heart_die',"assets/images/jason/item/LifeF-2.png");

        this.load.spritesheet('spaceship',"assets/images/spritesheets/spaceship.png",{
            frameWidth: 100,
            frameHeight: 100
        });
        this.load.spritesheet('ufo',"assets/images/spritesheets/ufo.png",{
            frameWidth: 120,
            frameHeight: 120
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
            frameWidth: 8,
            frameHeight: 8
        });
        this.load.spritesheet('beam2',"assets/images/spritesheets/beam2.png",{
            frameWidth: 8,
            frameHeight: 8
        });

        this.load.spritesheet('beam3',"assets/images/spritesheets/beam3.png",{
            frameWidth: 10,
            frameHeight: 10
        });
        this.load.spritesheet('missile',"assets/images/spritesheets/missile.png",{
            frameWidth: 50,
            frameHeight: 100
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

        this.load.audio("audio_beam", ["assets/sounds/beam.ogg","assets/sounds/beam.mp3"]);
        this.load.audio("audio_die", ["assets/sounds/explosion.ogg","assets/sounds/explosion.mp3"]);
        this.load.audio("music","assets/sounds/sci-fi_platformer12.mp3");
        // this.load.audio("music","assets/audio/gamebgm.mp3");
    }

    create(){


        this.anims.create({
            key: "ufo_anim",
            frames: this.anims.generateFrameNumbers('ufo'),
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
            frames: this.anims.generateFrameNumbers('spaceship',{
                start: 0,
                end: 1
            }),
            frameRate: 5,
            repeat: -1
        })

        this.anims.create({
            key: "red",
            frames: this.anims.generateFrameNumbers('powerUp', {
                start: 0,
                end: 1
            }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "gray",
            frames: this.anims.generateFrameNumbers('powerUp', {
                start: 2,
                end: 3
            }),
            frameRate: 10,
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