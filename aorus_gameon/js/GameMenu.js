class GameMenu extends Phaser.Scene{
    constructor(){
        super('gameMenu');
    }

    init(){

    }

    preload(){
       
    }

    create(){
        this.isInit = false;

        this.background = this.add.tileSprite(config.width/2.2, config.height/2.2, config.width*2.2, config.height*2.2, 'background').setScale(0.5);   
        this.mapcloud = this.add.tileSprite(config.width/2.2, config.height/2.2, config.width*2.2, config.height*2.2, 'mapcloud').setScale(0.5);   
        this.star = this.add.tileSprite(config.width/2.2, config.height/2.2, config.width*2.2, config.height*2.2, 'star').setScale(0.5);   

        this.player = this.physics.add.sprite(config.width/2, config.height + 100, 'spaceship').setScale(2);
        this.player.anims.play('ship_anim');
        

        this.mainTitle = this.add.image(config.width/2 ,config.height/3 - 60,"title");
        this.mainTitle.setOrigin(0.5,0.5);
        this.mainTitle.setScale(0.4);
        this.mainTitle.alpha = 0;

        // this.mainSubTitle = this.add.bitmapText( config.width/2 ,config.height/3  + 10, "pixelFont", "Gallaxy", 60);
        // this.mainSubTitle.setOrigin(0.5,0.5);
        // this.mainSubTitle.alpha = 0;

        this.buttonPlay = this.add.image(config.width/2, config.height - 150, "button");
        this.buttonPlay.setOrigin(0.5,0.5).setScale(0.5);
        this.buttonPlay.alpha = 0;
        this.tweens.add({
            targets: this.player,
            y: config.height/3*2,
            ease: 'Power1',
            duration: 2000,
            repeat:0,
            onComplete: function(){
                this.tweens.add({
                    targets: this.mainTitle,
                    alpha: 1,
                    ease: 'Power2',
                    duration: 500,
                    repeat:0,
                    onComplete: function(){

                    },
                    callbackScope: this
                });
                // this.tweens.add({
                //     targets: this.mainSubTitle,
                //     alpha: 1,
                //     ease: 'Power2',
                //     duration: 1500,
                //     repeat:0,
                //     onComplete: function(){
                //     },
                //     callbackScope: this
                // });
                
                this.tweens.add({
                    targets: this.buttonPlay,
                    alpha: 1,
                    ease: 'Power2',
                    duration: 1000,
                    repeat:0,
                    onComplete: function(){
                        this.isInit = true;
                    },
                    callbackScope: this
                });
            },
            callbackScope: this
        });

        this.music = this.sound.add("music");

        var musicConfig = {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        if(!gameSetting.mute){
            this.music.play(musicConfig);
        }
        

        
        this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        this.isTouch = false;
        this.input.on('pointerdown',()=>{
            this.buttonPlay.setTexture("button-hover");
        });
        
        this.input.on('pointerup',()=>{
            this.buttonPlay.setTexture("button");
            this.isTouch = true;
        });

        if(gameSetting.stepGameMenu){
            this.scene.start('playGame');
        }
    }

    update(){
        this.background.tilePositionY -= 2;
        this.mapcloud.tilePositionY -= 3;
        this.star.tilePositionY -= 1;

        if(Phaser.Input.Keyboard.JustDown(this.enterKey) && this.isInit==true){
            this.buttonPlay.setTexture("button-hover");
            this.playGame();
            
        }
        if(this.isInit==true && this.isTouch){
            
            this.playGame();
        }
        
    }
    playGame(){
        this.tweens.add({
            targets: this.mainTitle,
            alpha: 0,
            ease: 'Power2',
            duration: 500,
            repeat:0,
            onComplete: function(){

            },
            callbackScope: this
        });
        // this.tweens.add({
        //     targets: this.mainSubTitle,
        //     alpha: 0,
        //     ease: 'Power2',
        //     duration: 1500,
        //     repeat:0,
        //     onComplete: function(){
        //     },
        //     callbackScope: this
        // });
        
        this.tweens.add({
            targets: this.buttonPlay,
            alpha: 0,
            ease: 'Power1',
            duration: 1000,
            repeat:0,
            onComplete: function(){
                // this.scene.start('playGame');

            },
            callbackScope: this
        });
        this.tweens.add({
            targets: this.player,
            y: -200,
            ease: 'Power1',
            duration: 1000,
            repeat:0,
            onComplete: function(){
                this.scene.start('playGame');
            },
            callbackScope: this
        });
    }
}