class GameHome extends Phaser.Scene {
    constructor() {
        super('GameHome');
    }

    init() {

    }

    preload() {

    }

    create() {
        userInput.style.visibility = "visible";

        this.background = this.add.tileSprite(config.width / 2.2, config.height / 2.2, config.width * 2.2, config.height * 2.2, 'background').setScale(0.5);

        this.skinIndex = 1;

        this.PlayerSkin = this.add.sprite(config.width / 2, config.height / 3, 'Character' + this.skinIndex).setInteractive().setOrigin(0.5).setScale(2);
        for (var i = 1; i <= 32; i++) {
            this.anims.create({
                key: "PlayerSkinWalk" + i,
                frames: this.anims.generateFrameNumbers('Character' + i, { frames: [1, 2, 1, 0] }),
                frameRate: 5,
                repeat: -1
            })
        }
        this.PlayerSkin.anims.play('PlayerSkinWalk' + this.skinIndex);



        this.ChangeSkinButton = this.add.sprite(config.width / 2, config.height / 3 + 60, 'GameButton').setInteractive().setOrigin(0.5);
        this.anims.create({
            key: "ChangeSkinButtonShow",
            frames: this.anims.generateFrameNumbers('GameButton', { frames: [24, 24, 25, 26, 25, 24, 24] }),
            frameRate: 5,
            repeat: -1     // 循環播放 -1 
        })
        this.ChangeSkinButton.anims.play('ChangeSkinButtonShow');
        this.changeSkinText = this.add.bitmapText(config.width / 2, config.height / 3 + 60, "pixelFont", "Change", 10).setOrigin(0.5, 0.5);


        this.PlayButton = this.add.sprite(config.width / 2, config.height / 5 * 3 + 50, 'GameButton').setInteractive().setOrigin(0.5);
        this.anims.create({
            key: "ButtonDown",
            frames: this.anims.generateFrameNumbers('GameButton', { frames: [24, 24, 25, 26, 25, 24, 24] }),
            frameRate: 10,
            repeat: -1     // 循環播放 -1 
        })
        this.PlayButton.anims.play('ButtonDown',true);

        this.PlayText = this.add.bitmapText(config.width / 2, config.height / 5 * 3 + 50, "pixelFont", "PLAY", 10).setOrigin(0.5, 0.5);



        var _this = this;

        this.PlayButton.on('pointerdown', function (pointer) {
            if (userInput.value) {
                PlayerInfo.Name = userInput.value;
                PlayerInfo.skin = _this.skinIndex;
                    socket.emit("login", PlayerInfo);
                    /*登入成功*/
                    socket.on('loginSuccess', function(data){
                        if(data.Name === userInput.value){
                            userInput.style.visibility = "hidden";
                            _this.scene.start("GamePlay");
                        }else{
                            alert('Wrong username:( Please try again!')
                        }
                    })

                    /*登入失敗*/
                    socket.on('loginFail', function(){
                        alert('已經有人使用此名稱!')
                    })
            } else {
                alert('請輸入名稱 :)')
            }

            //test 
            // PlayerInfo.Name = userInput.value;
            // PlayerInfo.skin = _this.skinIndex;
            // userInput.style.visibility = "hidden";
            // _this.scene.start("GamePlay");
            //test end

            
            

        });

        this.ChangeSkinButton.on('pointerdown', function (pointer) {
            _this.skinIndex = _this.skinIndex + 1;
            if (_this.skinIndex > 32) _this.skinIndex = 1;
            _this.PlayerSkin.setTexture('Character' + _this.skinIndex);
        });

        // setTimeout(()=>{
        //     _this.scene.start("GamePlay");
        // }, 3000)
    }

    update() {
        this.PlayerSkin.anims.play('PlayerSkinWalk' + this.skinIndex, true);

        this.background.tilePositionX += 0.3;
        this.background.tilePositionY += 0.3;
    }

    playGame(){
        // this.scene.start('playGame');
        this.scene.start('playGame2');
    }
}

