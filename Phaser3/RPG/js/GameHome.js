class GameHome extends Phaser.Scene{
    constructor(){
        super('GameHome');
    }

    init(){

    }

    preload(){

    }

    create(){
        userInput.style.visibility = "visible";

        this.background = this.add.tileSprite(config.width/2.2, config.height/2.2, config.width*2.2, config.height*2.2, 'background').setScale(0.5);

        this.skinIndex = 1;

        this.PlayerSkin = this.add.sprite(config.width / 2, config.height / 3, 'Character'+this.skinIndex).setInteractive().setOrigin(0.5).setScale(2);

        this.ChangeSkinButton = this.add.sprite(config.width / 2, config.height / 3 + 50, 'GameButton').setInteractive().setOrigin(0.5);
        // this.anims.create({
        //     key: "ButtonShow",
        //     frames: this.anims.generateFrameNumbers('GameButton', { frames: [24] }),
        //     frameRate: 5,
        //     repeat: -1     // 循環播放 -1 
        // })
        // this.PlayButton.anims.play('ButtonShow');
        

        this.PlayButton = this.add.sprite(config.width / 2, config.height / 3 * 2 + 50, 'GameButton').setInteractive().setOrigin(0.5);
        this.anims.create({
            key: "ButtonDown",
            frames: this.anims.generateFrameNumbers('GameButton', { frames: [24,24,25,26,25,24,24] }),
            frameRate: 10,
            repeat: -1     // 循環播放 -1 
        })
        this.PlayButton.anims.play('ButtonDown');

        this.PlayText = this.add.bitmapText( config.width / 2, config.height / 3 * 2 + 50, "pixelFont",  "Play", 10).setOrigin(0.5,0.5);


        


        var _this = this;

        this.PlayButton.on('pointerdown', function (pointer) {
            if(userInput.value){
                PlayerInfo.Name = userInput.value;
                userInput.style.visibility = "hidden";
                _this.scene.start("GamePlay");
            }else{

            }
            
    
        });

        // setTimeout(()=>{
        //     _this.scene.start("GamePlay");
        // }, 3000)
    }

    update(){
        this.background.tilePositionX += 0.3;
        this.background.tilePositionY += 0.3; 
    }

    playGame(){
        this.scene.start('playGame');
    }
}

