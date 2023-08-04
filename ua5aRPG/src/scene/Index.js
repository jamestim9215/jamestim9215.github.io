import { config,PlayerInfo  } from '@/config.js'
import CustomButton from '@/common/ui-elements/CustomButton.js'

// import { socket } from '../socket'

export default class Index extends Phaser.Scene {
    constructor() {
        super('Index');
    }
    create() {
        this.cameras.main.fadeIn(1000, 0, 0, 0);

        let _this = this;
        //滑鼠
        this.input.setDefaultCursor('url(./src/assets/images/cursor.png), pointer');

        this.background = this.add.tileSprite(0, 0, config.width * 2, config.height * 2, 'homeBg').setScale(1);

        //開始按鈕
        // this.PlayButton = this.add.sprite(config.width / 2, config.height / 5 * 3 + 50, 'ButtonBg').setInteractive().setOrigin(0.5);
        // this.anims.create({//建立 按鈕未按下的狀態
        //     key: "ButtonUp",
        //     frames: this.anims.generateFrameNumbers('ButtonBg', { frames: [14,16] }),
        //     frameRate: 3,
        //     repeat: -1     // 循環播放 -1 
        // })
        // this.anims.create({
        //     key: "ButtonDown",
        //     frames: this.anims.generateFrameNumbers('ButtonBg', { frames: [17] }),
        //     frameRate: 0,
        //     repeat: 0     // 循環播放 -1 
        // })
        // this.PlayButton.anims.play('ButtonUp',true);
        // this.PlayText = this.add.bitmapText(config.width / 2, config.height / 5 * 3 + 45, "pixelFont", "Enter", 8).setOrigin(0.5, 0.5);

        this.add.text(config.width / 2, config.height / 5 * 4, "Enter", {
            fontFamily: '"Press Start 2P"',
            fontSize: '16px',
            color: '#FFFFFF',
            wordWrap: { width: config.width - 30, useAdvancedWrap: true }
        }).setOrigin(0.5, 0.5)


        this.add.text(config.width / 2, config.height / 5 * 2, "歡迎來到數位平台", {
            fontFamily: '"Microsoft JhengHei"',
            fontSize: '24px',
            color: '#FFFFFF',
            wordWrap: { width: config.width - 30, useAdvancedWrap: true }
        }).setOrigin(0.5, 0.5)


        // this.PlayButton.on('pointerover', function () { //開始按鈕 hover的時候
        //     this.anims.play('ButtonDown',true);
        //     _this.PlayText.y = config.height / 5 * 3 + 46;
        // });
        // this.PlayButton.on('pointerout', function () { //開始按鈕 離開的時候
        //     this.anims.play('ButtonUp',true);
        //     _this.PlayText.y = config.height / 5 * 3 + 45;
        // });

        // this.PlayButton.on('pointerdown', function (pointer) {
        //     // _this.scene.start('MainPreload');
        //     // _this.scene.start('HomePreload');
        //     this.cameras.main.fadeOut(1000, 0, 0, 0)
        // });

        this.input.keyboard.once('keydown-ENTER', () => {
            // fade to black
            this.cameras.main.fadeOut(1000, 0, 0, 0)
        })

        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
          this.scene.start('CreatePlayerPreload')
        //   this.scene.start('MainPreload')
          // this.scene.start('HomePreload');
        })

        
        // 創建自定義按鈕
        // this.customButton = new CustomButton(this, config.width / 2, config.height / 5 * 3, 150, 'ButtonBg', 8, 9, 11, ()=>{

        // }); 
        // // 設置中間部分的寬度
        // this.customButton.setMiddleWidth(50);



        // CreateMsgBox(this)
    }
   
    update() {
        this.background.tilePositionX += 0.3;
        this.background.tilePositionY += 0.3;
    }

    playGame(){
        // this.scene.start('playGame');
        // this.scene.start('playGame2');
    }
}