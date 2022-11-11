import { config } from '../config'
import  Character from '../class/character'

export default class Main extends Phaser.Scene {
    constructor() {
        super('mainpage');
    }

    create() {
        // this.add.text(20, 20, "Playing Game", {font: "25px Ariel",fill: "yellow"});
        this.scoreTitleLabel = this.add.bitmapText( 30 , 30, "pixelFont", "Digital World", 20).setOrigin(0,0);
        this.scoreTitleLabel.setDepth(10);

        this.Man = this.physics.add.sprite(Phaser.Math.Between(100, config().width - 100),  Phaser.Math.Between(100,config().height - 100), 'Man');
        this.Man.setVelocity((Math.round(Math.random()) * 2 - 1) * 40, Phaser.Math.Between(10, 10));
        this.Man.anims.play('Man_anims');
        this.Man.setCollideWorldBounds(true); //設定與世界邊界碰撞
        this.Man.setBounce(1);
        this.Man.setDepth(1);
        this.Man.setScale(0.8);
        // console.log(this.Man);

        this.Woman = this.physics.add.sprite(Phaser.Math.Between(100, config().width - 100),  Phaser.Math.Between(100,config().height - 100), 'Woman');
        this.Woman.setVelocity((Math.round(Math.random()) * 2 - 1) * 40, Phaser.Math.Between(10, 10));
        this.Woman.anims.play('Woman_anims');
        this.Woman.setCollideWorldBounds(true); //設定與世界邊界碰撞
        this.Woman.setBounce(1);
        this.Woman.setDepth(2);
        this.Woman.setScale(0.8);

        // this.Woman = new Character(this);

    }
    update() {
        if (this.Man.body.velocity.x < 0) {
            this.Man.setFlipX(true);
        } else if (this.Man.body.velocity.x > 0) {
            this.Man.setFlipX(false);
        }

        // this.Woman.update();
        if (this.Woman.body.velocity.x < 0) {
            this.Woman.setFlipX(true);
        } else if (this.Woman.body.velocity.x > 0) {
            this.Woman.setFlipX(false);
        }

        if(this.Man.y > this.Woman.y){
            this.Man.setDepth(2);
            this.Woman.setDepth(1);
        }else if(this.Man.y < this.Woman.y){
            this.Man.setDepth(1);
            this.Woman.setDepth(2);
        }
    }
}