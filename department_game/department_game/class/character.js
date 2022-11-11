import { config } from '../config'
// import Phaser from 'phaser'
export default class Character extends Phaser.GameObjects.Sprite{
    constructor(scene){
        var x = Phaser.Math.Between(100, config().width - 100);
        var y = Phaser.Math.Between(100, config().height - 100);

        super(scene,x,y,'Woman'); 
        scene.add.existing(this);

        this.setScale(0.8);
        this.setDepth(1);
        // this.setFlipX(true);
        this.play('Woman_anims');

        scene.physics.world.enableBody(this);
        this.body.velocity.x = 30;
        this.body.setCollideWorldBounds(true); //設定與世界邊界碰撞
        this.body.setBounce(1);
    }
    update(){
        if (this.body.velocity.x < 0) {
            this.setFlipX(true);
        } else if (this.body.velocity.x > 0) {
            this.setFlipX(false);
        }
    }
}