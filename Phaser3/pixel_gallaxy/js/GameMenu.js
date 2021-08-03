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

        this.background = this.add.tileSprite(config.width/2, config.height/2, config.width, config.height, 'background');
        this.star = this.add.tileSprite(config.width/2, config.height/2 , config.width, config.height, 'star');

        this.player = this.physics.add.sprite(config.width/2, config.height + 100, 'spaceship');
        this.player.anims.play('ship_anim');
        

        
        this.mainTitle = this.add.bitmapText( config.width/2 ,config.height/3 - 60, "pixelFont", "Piexl", 60);
        this.mainTitle.setOrigin(0.5,0.5);
        this.mainTitle.alpha = 0;

        this.mainSubTitle = this.add.bitmapText( config.width/2 ,config.height/3  + 10, "pixelFont", "Gallaxy", 60);
        this.mainSubTitle.setOrigin(0.5,0.5);
        this.mainSubTitle.alpha = 0;

        
        this.enterMessage = this.add.bitmapText( config.width/2 ,config.height - 20, "pixelFont", "Enter to play", 16);
        this.enterMessage.setOrigin(0.5,0.5);
        this.enterMessage.alpha = 0;
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
                this.tweens.add({
                    targets: this.mainSubTitle,
                    alpha: 1,
                    ease: 'Power2',
                    duration: 1500,
                    repeat:0,
                    onComplete: function(){
                    },
                    callbackScope: this
                });
                
                this.tweens.add({
                    targets: this.enterMessage,
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
        this.music.play(musicConfig);

        
        this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    }

    update(){
        this.background.tilePositionY -= 0.5;
        this.star.tilePositionY -= 1;

        if(Phaser.Input.Keyboard.JustDown(this.enterKey) && this.isInit==true){
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
            this.tweens.add({
                targets: this.mainSubTitle,
                alpha: 0,
                ease: 'Power2',
                duration: 1500,
                repeat:0,
                onComplete: function(){
                },
                callbackScope: this
            });
            
            this.tweens.add({
                targets: this.enterMessage,
                alpha: 0,
                ease: 'Power2',
                duration: 3000,
                repeat:0,
                onComplete: function(){

                },
                callbackScope: this
            });
            this.tweens.add({
                targets: this.player,
                y: -100,
                ease: 'Power1',
                duration: 1000,
                repeat:0,
                onComplete: function(){
                    console.log("????");
                    this.scene.start('playGame');
                },
                callbackScope: this
            });
            
        }
    }
}