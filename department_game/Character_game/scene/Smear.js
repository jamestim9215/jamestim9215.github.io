// import { config,PlayerInfo } from '../config'
// import { socket } from '../socket'

export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene) {
        var x = scene.player.x;
        var y = scene.player.y;

        super(scene, x, y, "Smear")

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
        var keyNameSmear = 'Smear';
        this.setTexture(keyNameSmear);

    }

    create() {
        var _this = this;

        //攻擊事件
        // this.scene.input.keyboard.on('keydown', function (event) {
        //     if (event.key === 'z' && _this.isAttack == false) {
        //         _this.isAttack = true;
        //         _this.stand = true;
        //         _this.status = 'Attack'
        //         if (_this.isUp == 'Up') {
        //             _this.anims.play('SmearAttackUp', true);
        //         }
        //         if (_this.isUp == 'Down') {
        //             _this.anims.play('SmearAttackDown', true);
        //         }
        //         if (_this.isUp == 'Right') {
        //             _this.anims.play('SmearAttackRight', true);
        //         }
        //         if (_this.isUp == 'Left') {
        //             _this.anims.play('SmearAttackLeft', true);
        //         }
        //         setTimeout(()=>{
        //             _this.isAttack = false
        //         }, 400)
        //     }
        // });

    }
    update(cursors, keys) {
        if (cursors && keys) {
            this.isAutoMoving = false;
            if (cursors.up.isDown && cursors.left.isDown && !keys.Z.isDown) {
                this.anims.play('SmearWalkLeft', true);
            }
            else if (cursors.up.isDown  && cursors.right.isDown && !keys.Z.isDown) {
                this.anims.play('SmearWalkRight', true);
            }
            else if (cursors.down.isDown && cursors.left.isDown && !keys.Z.isDown) {
                this.anims.play('SmearWalkLeft', true);
            }
            else if (cursors.down.isDown && cursors.right.isDown && !keys.Z.isDown) {
                this.anims.play('SmearWalkRight', true);
            }
            else if (cursors.left.isDown && !keys.Z.isDown) {
                if (cursors.shift.isDown) {
                    this.anims.play('SmearRunLeft', true);
                } else {
                    this.anims.play('SmearWalkLeft', true);
                }
                this.scene.playerContainer.body.setVelocityY(0);
                this.isUp = 'Left';
                this.isKeyMoving = false;
                
            }
            else if (cursors.right.isDown && !keys.Z.isDown) {
                if (cursors.shift.isDown) {
                    this.anims.play('SmearRunRight', true);
                } else {
                    this.anims.play('SmearWalkRight', true);
                }
                this.isUp = 'Right';
                this.isKeyMoving = false;
                
            }
            else if (cursors.up.isDown && !keys.Z.isDown) {
                if (cursors.shift.isDown) {
                    this.anims.play('SmearRunUp', true);
                } else {
                    this.anims.play('SmearWalkUp', true);
                }
                this.isUp = 'Up';
                this.isKeyMoving = false;
            }
            else if (cursors.down.isDown && !keys.Z.isDown) {
                if (cursors.shift.isDown) {
                    this.anims.play('SmearRunDown', true);
                } else {
                    this.anims.play('SmearWalkDown', true);
                }
                this.isUp = 'Down';
                this.isKeyMoving = false;
            }
            else{ 
                if(this.isAttack == false){ 

                    this.isKeyMoving = false;
                    this.status = 'Idle'

                    if (this.isUp == 'Up') {
                        this.anims.play('SmearIdleUp', true);
                    }
                    if (this.isUp == 'Down') {
                        this.anims.play('SmearIdleDown', true);
                    }
                    if (this.isUp == 'Right') {
                        this.anims.play('SmearIdleRight', true);
                    }
                    if (this.isUp == 'Left') {
                        this.anims.play('SmearIdleLeft', true);
                    }
                }
            }
        }
    }
}