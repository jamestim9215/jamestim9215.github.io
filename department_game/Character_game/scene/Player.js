// import { config,PlayerInfo } from '../config'
// import { socket } from '../socket'

export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, _x, _y, _playerInfo, type) {
        super(scene, _x, _y, _playerInfo.Name, 0)
        this.scene = scene
        this.scene.physics.world.enable(this)
        this.scene.add.existing(this);
        this.setInteractive();


        //設定角色
        this.setScale(1);
        this.body.immovable = true;

        this.SocketID = _playerInfo.SocketID;
        this.skin = _playerInfo.skin;
        this.status = 'Idle';
        this.isChangeSkin = false;
        this.isUser = false;
        this.isMoving = false;

        this.isAutoMoving = false;
        this.isKeyMoving = false;
        this.movePath = [];
        this.isDestroy = false;
        this.stand = true;

        this.setBounce(0); //反弹（bounce）值
        // this.setCollideWorldBounds(true); //世界边界（bound）的碰撞
        this.setDepth(1);

        this.create();
        this.setAnims();
        // this.setOrigin(0,0);

        this.setSize(16, 32);
        this.setOffset(24, 16);


        this.MoveX = 0;
        this.MoveY = 0;

        // this.moveSpeed = 30;
        // this.moveSpeed = 50;
        this.moveSpeed = 50;
        this.runSpeed = 3;

        // this.name = this.scene.add.bitmapText( x, y, "pixelFont",  _playerInfo.Name, 10).setOrigin(1,1);


        // console.log("add player : " +_playerInfo.Name);

        // this.name = this.scene.add.text(_x, _y, _playerInfo.Name, {
        //     fontFamily: 'Arial',
        //     color: type=='Player'?'#00ff00':'#ffffff'
        // }).setFontSize(10).setOrigin(0.5);
        // this.name.trackSprite(this, 0, 0, true);


    }


    deletePlayer() {
        clearTimeout(this.setInter);
        this.movePath = [];
        this.name.destroy();
        this.destroy();
    }

    setAnims() {
        var keyName = 'Character';
        this.setTexture(keyName);

    }

    create() {
        var _this = this;
        var keyName = 'Character';

        //站著
        this.anims.create({
            key: "CharacterIdleDown",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "CharacterIdleRight",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [10, 11, 12, 13, 14, 15, 16, 17] }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "CharacterIdleUp",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [20, 21, 22, 23, 24, 25, 26, 27] }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "CharacterIdleLeft",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [30, 31, 32, 33, 34, 35, 36, 37] }),
            frameRate: 10,
            repeat: -1
        })


        //走路
        this.anims.create({
            key: "CharacterWalkDown",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [40, 41, 42, 43, 44, 45, 46, 47] }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "CharacterWalkRight",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [50, 51, 52, 53, 54, 55, 56, 57] }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "CharacterWalkUp",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [60, 61, 62, 63, 64, 65, 66, 67] }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "CharacterWalkLeft",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [70, 71, 72, 73, 74, 75, 76, 77] }),
            frameRate: 10,
            repeat: -1
        })


        //跑步
        this.anims.create({
            key: "CharacterRunDown",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [80, 81, 82, 83, 84, 85, 86, 87] }),
            frameRate: 20,
            repeat: -1
        })
        this.anims.create({
            key: "CharacterRunRight",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [90, 91, 92, 93, 94, 95, 96, 97] }),
            frameRate: 20,
            repeat: -1
        })
        this.anims.create({
            key: "CharacterRunUp",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [100, 101, 102, 103, 104, 105, 106, 107] }),
            frameRate: 20,
            repeat: -1
        })
        this.anims.create({
            key: "CharacterRunLeft",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [110, 111, 112, 113, 114, 115, 116, 117] }),
            frameRate: 20,
            repeat: -1
        })

        //攻擊 往右揮動
        this.anims.create({
            key: "CharacterAttackDown",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [120, 121, 122, 123, 124, 125, 126] }),
            frameRate: 50,
            repeat: 0
        })
        this.anims.create({
            key: "CharacterAttackRight",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [130, 131, 132, 133, 134, 135, 136] }),
            frameRate: 50,
            repeat: 0
        })
        this.anims.create({
            key: "CharacterAttackUp",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [140, 141, 142, 143, 144, 145, 146] }),
            frameRate: 50,
            repeat: 0
        })
        this.anims.create({
            key: "CharacterAttackLeft",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [150, 151, 152, 153, 154, 155, 156] }),
            frameRate: 20,
            repeat: 0
        })

        this.scene.input.keyboard.on('keydown', function (event) {
            if (event.key === 'z' && _this.status == 'Idle') {
                if (_this.isUp == 'Up') {
                    _this.anims.play('CharacterAttackUp', true);
                }
                if (_this.isUp == 'Down') {
                    _this.anims.play('CharacterAttackDown', true);
                }
                if (_this.isUp == 'Right') {
                    _this.anims.play('CharacterAttackRight', true);
                }
                if (_this.isUp == 'Left') {
                    _this.anims.play('CharacterAttackLeft', true);
                }
            }
        });

    }
    update(cursors, keys) {
        // this.moveSpeed = this.isAutoMoving? 100: 100;
        if (cursors && keys) {
            this.isAutoMoving = false;
            if ((cursors.up.isDown || keys.W.isDown) && (cursors.left.isDown || keys.A.isDown)) {
                this.isKeyMoving = true;
                this.stand = false;
                this.setVelocityX(-this.moveSpeed / 3 * 2);
                this.setVelocityY(-this.moveSpeed / 3 * 2);
                this.anims.play('CharacterWalkLeft', true);
            }
            else if ((cursors.up.isDown || keys.W.isDown) && (cursors.right.isDown || keys.D.isDown)) {
                this.isKeyMoving = true;
                this.stand = false;
                this.setVelocityX(this.moveSpeed / 3 * 2);
                this.setVelocityY(-this.moveSpeed / 3 * 2);
                this.anims.play('CharacterWalkRight', true);
            }
            else if ((cursors.down.isDown || keys.S.isDown) && (cursors.left.isDown || keys.A.isDown)) {
                this.isKeyMoving = true;
                this.stand = false;
                this.setVelocityX(-this.moveSpeed / 3 * 2);
                this.setVelocityY(this.moveSpeed / 3 * 2);
                this.anims.play('CharacterWalkLeft', true);
            }
            else if ((cursors.down.isDown || keys.S.isDown) && (cursors.right.isDown || keys.D.isDown)) {
                this.isKeyMoving = true;
                this.stand = false;
                this.setVelocityX(this.moveSpeed / 3 * 2);
                this.setVelocityY(this.moveSpeed / 3 * 2);
                this.anims.play('CharacterWalkRight', true);
            }
            else if (cursors.left.isDown || keys.A.isDown || this.isUp == 'Left' && this.status == 'walking') {
                if (cursors.shift.isDown) {
                    this.setVelocityX(-this.moveSpeed * this.runSpeed);
                    this.anims.play('CharacterRunLeft', true);
                } else {
                    this.setVelocityX(-this.moveSpeed);
                    this.anims.play('CharacterWalkLeft', true);
                }
                this.setVelocityY(0);
                this.isUp = 'Left';
                this.isKeyMoving = false;
                this.stand = false;
            }
            else if (cursors.right.isDown || keys.D.isDown || this.isUp == 'Right' && this.status == 'walking') {
                if (cursors.shift.isDown) {
                    this.setVelocityX(this.moveSpeed * this.runSpeed);
                    this.anims.play('CharacterRunRight', true);
                } else {
                    this.setVelocityX(this.moveSpeed);
                    this.anims.play('CharacterWalkRight', true);
                }
                this.setVelocityY(0);
                this.isUp = 'Right';
                this.isKeyMoving = false;
                this.stand = false;
            }
            else if (cursors.up.isDown || keys.W.isDown || this.isUp == 'Up' && this.status == 'walking') {
                if (cursors.shift.isDown) {
                    this.setVelocityY(-this.moveSpeed * this.runSpeed);
                    this.anims.play('CharacterRunUp', true);
                } else {
                    this.setVelocityY(-this.moveSpeed);
                    this.anims.play('CharacterWalkUp', true);
                }
                this.setVelocityX(0);
                this.isUp = 'Up';
                this.isKeyMoving = false;
                this.stand = false;
            }
            else if (cursors.down.isDown || keys.S.isDown || this.isUp == 'Down' && this.status == 'walking') {
                if (cursors.shift.isDown) {
                    this.setVelocityY(this.moveSpeed * this.runSpeed);
                    this.anims.play('CharacterRunDown', true);
                } else {
                    this.setVelocityY(this.moveSpeed);
                    this.anims.play('CharacterWalkDown', true);
                }
                this.setVelocityX(0);
                this.isUp = 'Down';
                this.isKeyMoving = false;
                this.stand = false;
            }
            else {

                this.isKeyMoving = false;
                this.stand = true;
                this.setVelocityX(0);
                this.setVelocityY(0);
                this.status = 'Idle';


                if (this.isUp == 'Up') {
                    this.anims.play('CharacterIdleUp', true);
                }
                if (this.isUp == 'Down') {
                    this.anims.play('CharacterIdleDown', true);
                }
                if (this.isUp == 'Right') {
                    this.anims.play('CharacterIdleRight', true);
                }
                if (this.isUp == 'Left') {
                    this.anims.play('CharacterIdleLeft', true);
                }
            }
        }
        // this.anims.play('CharacterIdleDown', true);

        // this.MoveX = this.x;
        // this.MoveY = this.y;



        // this.name.x = this.x;
        // this.name.y = this.y - 20;
    }
}