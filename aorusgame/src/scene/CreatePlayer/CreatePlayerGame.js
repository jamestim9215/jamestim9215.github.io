import { config } from '@/config.js'
import ObjectData from '@/common/ObjectData.json'

export default class CreatePlayerGame extends Phaser.Scene {
    constructor() {
        super('CreatePlayerGame');
    }
    create() {
        this.CharacterId = 0; 
        
        this.cameras.main.fadeIn(300, 0, 0, 0)

        this.background = this.add.tileSprite(0,0, config.width * 2.8, config.height * 2.8, 'homeBg').setScale(0.8);
        this.coverColor = new Phaser.GameObjects.Rectangle(this,0,0,config.width,config.height,0x000000,0.5).setOrigin(0, 0);
        this.add.existing(this.coverColor);

        this.Character = new Phaser.Physics.Arcade.Sprite(this, config.width / 2, config.height / 2, ObjectData.Player.theme[this.CharacterId].name).setOrigin(0.5, 0.5).setScale(1);
        var animName = ObjectData.Player.theme[this.CharacterId].name+"_Idle";
        this.Character.anims.play(animName, true);
        this.add.existing(this.Character);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.cursorsIsDown = false;

        
        this.add.text(config.width / 2, config.height / 5 * 4 - 30, "← →: Change theme", {
            fontFamily: '"Press Start 2P"',
            fontSize: '10px',
            color: '#FFFFFF',
            wordWrap: { width: config.width - 30, useAdvancedWrap: true }
        }).setOrigin(0.5, 0.5);

        this.add.text(config.width / 2, config.height / 5 * 4, "Enter: Choose character", {
            fontFamily: '"Press Start 2P"',
            fontSize: '10px',
            color: '#FFFFFF',
            wordWrap: { width: config.width - 30, useAdvancedWrap: true }
        }).setOrigin(0.5, 0.5);

        this.input.keyboard.once('keydown-ENTER', () => {
            console.log(this.CharacterId);
            var PlayerData = {
                CharacterId: this.CharacterId,
                Name: 'Player 1',   //名稱
                Level: 1,  //等級
                Experience: 0, //經驗值
                Health: 100, //血量
                Gold: 0,   //金幣
                Inventory: 10, //背包
                Quests: [], //任務
                Skills: null, //技能
                Achievements: [], //成就
                Language: 'zh-tw',   //語言
                Headgear: null,   //頭盔
                Armor: null,  //衣服
                Weapon: null, //武器
                Flag: []
            }
            localStorage.setItem('PlayerData', JSON.stringify(PlayerData));

            
            this.cameras.main.fadeOut(1000, 0, 0, 0)
        })

        this.cameras.main.once(Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE, (cam, effect) => {
            this.scene.start('RoomPreload')
            // this.scene.start('MainPreload')
            // this.scene.start('HomePreload')
            // this.scene.start('BossPreload')
        })

    }
    
    update() {
        if (this.cursors.left.isDown && this.cursorsIsDown==false) {
            this.cursorsIsDown = true;
            console.log("left");
            this.CharacterId --;
            if(this.CharacterId < 0){
                this.CharacterId = ObjectData.Player.theme.length-1;
            }
        }else if (this.cursors.right.isDown && this.cursorsIsDown==false) {
            this.cursorsIsDown = true;
            console.log("right");
            this.CharacterId ++;
            if(this.CharacterId >= ObjectData.Player.theme.length){
                this.CharacterId = 0;
            }
        }else if(this.cursors.right.isUp && this.cursors.left.isUp){
            this.cursorsIsDown = false;
        }
        var animName = ObjectData.Player.theme[this.CharacterId].name+"_Idle";
        this.Character.anims.play(animName, true);

        this.background.tilePositionX -= 0.3;
        this.background.tilePositionY -= 0.3;
    }
}