// import { config,PlayerInfo } from '../config'
// import { socket } from '../socket'

export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene) {
        var x = scene.player.x;
        var y = scene.player.y;

        super(scene, x, y, "Sword")

        this.scene = scene
        this.scene.physics.world.enable(this)
        this.scene.add.existing(this);
        this.setInteractive();


        //設定角色
        this.setScale(1);
        this.body.immovable = true;

        this.status = 'Idle';

        this.setBounce(0); //反弹（bounce）值
        // this.setCollideWorldBounds(true); //世界边界（bound）的碰撞
        this.setDepth(0.5);

        this.create();
        this.setAnims();
        // this.setOrigin(0,0);

        this.setSize(16, 32);
        this.setOffset(24, 16);

        this.moveSpeed = 100;
        this.runSpeed = 2;
        this.isAttack = false;
    }


    delete() {
        clearTimeout(this.setInter);
        this.movePath = [];
        this.name.destroy();
        this.destroy();
    }

    setAnims() {
        var keyNameSword = 'Sword';
        this.setTexture(keyNameSword);

    }

    create() {
        var _this = this;
        

    }
    update(cursors, keys) {
        if (cursors && keys) {
            this.isAutoMoving = false;
            if (cursors.up.isDown && cursors.left.isDown && !keys.Z.isDown) {
                this.anims.play('SwordWalkLeft', true);
            }
            else if (cursors.up.isDown  && cursors.right.isDown && !keys.Z.isDown) {
                this.anims.play('SwordWalkRight', true);
            }
            else if (cursors.down.isDown && cursors.left.isDown && !keys.Z.isDown) {
                this.anims.play('SwordWalkLeft', true);
            }
            else if (cursors.down.isDown && cursors.right.isDown && !keys.Z.isDown) {
                this.anims.play('SwordWalkRight', true);
            }
            else if (cursors.left.isDown && !keys.Z.isDown) {
                if (cursors.shift.isDown) {
                    this.anims.play('SwordRunLeft', true);
                } else {
                    this.anims.play('SwordWalkLeft', true);
                }
                this.scene.playerContainer.body.setVelocityY(0);
                this.isUp = 'Left';
                this.isKeyMoving = false;
                
            }
            else if (cursors.right.isDown && !keys.Z.isDown) {
                if (cursors.shift.isDown) {
                    this.anims.play('SwordRunRight', true);
                } else {
                    this.anims.play('SwordWalkRight', true);
                }
                this.isUp = 'Right';
                this.isKeyMoving = false;
                
            }
            else if (cursors.up.isDown && !keys.Z.isDown) {
                if (cursors.shift.isDown) {
                    this.anims.play('SwordRunUp', true);
                } else {
                    this.anims.play('SwordWalkUp', true);
                }
                this.isUp = 'Up';
                this.isKeyMoving = false;
            }
            else if (cursors.down.isDown && !keys.Z.isDown) {
                if (cursors.shift.isDown) {
                    this.anims.play('SwordRunDown', true);
                } else {
                    this.anims.play('SwordWalkDown', true);
                }
                this.isUp = 'Down';
                this.isKeyMoving = false;
            }
            else{ 
                if(this.isAttack == false){ 

                    this.isKeyMoving = false;
                    this.status = 'Idle'

                    if (this.isUp == 'Up') {
                        this.anims.play('SwordIdleUp', true);
                    }
                    if (this.isUp == 'Down') {
                        this.anims.play('SwordIdleDown', true);
                    }
                    if (this.isUp == 'Right') {
                        this.anims.play('SwordIdleRight', true);
                    }
                    if (this.isUp == 'Left') {
                        this.anims.play('SwordIdleLeft', true);
                    }
                }
            }
        }
    }
}