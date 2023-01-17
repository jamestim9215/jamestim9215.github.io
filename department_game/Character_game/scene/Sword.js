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
        var keyNameSword = 'Sword';

        //站著
        this.anims.create({
            key: "SwordIdleDown",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "SwordIdleRight",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [10, 11, 12, 13, 14, 15, 16, 17] }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "SwordIdleUp",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [20, 21, 22, 23, 24, 25, 26, 27] }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "SwordIdleLeft",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [30, 31, 32, 33, 34, 35, 36, 37] }),
            frameRate: 10,
            repeat: -1
        })

        //走路
        this.anims.create({
            key: "SwordWalkDown",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [40, 41, 42, 43, 44, 45, 46, 47] }),
            frameRate: 15,
            repeat: -1
        })
        this.anims.create({
            key: "SwordWalkRight",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [50, 51, 52, 53, 54, 55, 56, 57] }),
            frameRate: 15,
            repeat: -1
        })
        this.anims.create({
            key: "SwordWalkUp",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [60, 61, 62, 63, 64, 65, 66, 67] }),
            frameRate: 15,
            repeat: -1
        })
        this.anims.create({
            key: "SwordWalkLeft",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [70, 71, 72, 73, 74, 75, 76, 77] }),
            frameRate: 15,
            repeat: -1
        })


        //跑步
        this.anims.create({
            key: "SwordRunDown",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [80, 81, 82, 83, 84, 85, 86, 87] }),
            frameRate: 20,
            repeat: -1
        })
        this.anims.create({
            key: "SwordRunRight",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [90, 91, 92, 93, 94, 95, 96, 97] }),
            frameRate: 20,
            repeat: -1
        })
        this.anims.create({
            key: "SwordRunUp",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [100, 101, 102, 103, 104, 105, 106, 107] }),
            frameRate: 20,
            repeat: -1
        })
        this.anims.create({
            key: "SwordRunLeft",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [110, 111, 112, 113, 114, 115, 116, 117] }),
            frameRate: 20,
            repeat: -1
        })

        //攻擊 往右揮動
        this.anims.create({
            key: "SwordAttackDown",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [120, 121, 122, 123, 124, 125] }),
            frameRate: 20,
            repeat: 0
        })
        this.anims.create({
            key: "SwordAttackRight",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [130, 131, 132, 133, 134, 135] }),
            frameRate: 20,
            repeat: 0
        })
        this.anims.create({
            key: "SwordAttackUp",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [140, 141, 142, 143, 144, 145] }),
            frameRate: 20,
            repeat: 0
        })
        this.anims.create({
            key: "SwordAttackLeft",
            frames: this.anims.generateFrameNumbers(keyNameSword, { frames: [150, 151, 152, 153, 154, 155] }),
            frameRate: 20,
            repeat: 0
        })
        

        //攻擊事件
        this.scene.input.keyboard.on('keydown', function (event) {
            if (event.key === 'z' && _this.isAttack == false) {
                _this.isAttack = true;
                _this.stand = true;
                _this.status = 'Attack'
                if (_this.isUp == 'Up') {
                    _this.anims.play('SwordAttackUp', true);
                }
                if (_this.isUp == 'Down') {
                    _this.anims.play('SwordAttackDown', true);
                }
                if (_this.isUp == 'Right') {
                    _this.anims.play('SwordAttackRight', true);
                }
                if (_this.isUp == 'Left') {
                    _this.anims.play('SwordAttackLeft', true);
                }
                setTimeout(()=>{
                    _this.isAttack = false
                }, 400)
            }
        });

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