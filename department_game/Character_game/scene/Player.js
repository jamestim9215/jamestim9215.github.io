// import { config,PlayerInfo } from '../config'
// import { socket } from '../socket'

export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, _x, _y, _playerInfo, type) {
        super(scene, 0, 0, _playerInfo.Name, 0)
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
        this.isAttack = false;

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
        var keyNameSword = 'CharacterSword';

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
            frames: this.anims.generateFrameNumbers(keyName, { frames: [120, 121, 122, 123, 124, 125] }),
            frameRate: 20,
            repeat: 0
        })
        this.anims.create({
            key: "CharacterAttackRight",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [130, 131, 132, 133, 134, 135] }),
            frameRate: 20,
            repeat: 0
        })
        this.anims.create({
            key: "CharacterAttackUp",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [140, 141, 142, 143, 144, 145] }),
            frameRate: 20,
            repeat: 0
        })
        this.anims.create({
            key: "CharacterAttackLeft",
            frames: this.anims.generateFrameNumbers(keyName, { frames: [150, 151, 152, 153, 154, 155] }),
            frameRate: 20,
            repeat: 0
        })


        
        
        var keyNameWeapon = 'Weapon';

        //站著
        this.anims.create({
            key: "WeaponIdleDown",
            frames: this.anims.generateFrameNumbers(keyNameWeapon, { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "WeaponIdleRight",
            frames: this.anims.generateFrameNumbers(keyNameWeapon, { frames: [10, 11, 12, 13, 14, 15, 16, 17] }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "WeaponIdleUp",
            frames: this.anims.generateFrameNumbers(keyNameWeapon, { frames: [20, 21, 22, 23, 24, 25, 26, 27] }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "WeaponIdleLeft",
            frames: this.anims.generateFrameNumbers(keyNameWeapon, { frames: [30, 31, 32, 33, 34, 35, 36, 37] }),
            frameRate: 10,
            repeat: -1
        })

        //走路
        this.anims.create({
            key: "WeaponWalkDown",
            frames: this.anims.generateFrameNumbers(keyNameWeapon, { frames: [40, 41, 42, 43, 44, 45, 46, 47] }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "WeaponWalkRight",
            frames: this.anims.generateFrameNumbers(keyNameWeapon, { frames: [50, 51, 52, 53, 54, 55, 56, 57] }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "WeaponWalkUp",
            frames: this.anims.generateFrameNumbers(keyNameWeapon, { frames: [60, 61, 62, 63, 64, 65, 66, 67] }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "WeaponWalkLeft",
            frames: this.anims.generateFrameNumbers(keyNameWeapon, { frames: [70, 71, 72, 73, 74, 75, 76, 77] }),
            frameRate: 10,
            repeat: -1
        })


        //跑步
        this.anims.create({
            key: "WeaponRunDown",
            frames: this.anims.generateFrameNumbers(keyNameWeapon, { frames: [80, 81, 82, 83, 84, 85, 86, 87] }),
            frameRate: 20,
            repeat: -1
        })
        this.anims.create({
            key: "WeaponRunRight",
            frames: this.anims.generateFrameNumbers(keyNameWeapon, { frames: [90, 91, 92, 93, 94, 95, 96, 97] }),
            frameRate: 20,
            repeat: -1
        })
        this.anims.create({
            key: "WeaponRunUp",
            frames: this.anims.generateFrameNumbers(keyNameWeapon, { frames: [100, 101, 102, 103, 104, 105, 106, 107] }),
            frameRate: 20,
            repeat: -1
        })
        this.anims.create({
            key: "WeaponRunLeft",
            frames: this.anims.generateFrameNumbers(keyNameWeapon, { frames: [110, 111, 112, 113, 114, 115, 116, 117] }),
            frameRate: 20,
            repeat: -1
        })

        //攻擊 往右揮動
        this.anims.create({
            key: "WeaponAttackDown",
            frames: this.anims.generateFrameNumbers(keyNameWeapon, { frames: [120, 121, 122, 123, 124, 125] }),
            frameRate: 20,
            repeat: 0
        })
        this.anims.create({
            key: "WeaponAttackRight",
            frames: this.anims.generateFrameNumbers(keyNameWeapon, { frames: [130, 131, 132, 133, 134, 135] }),
            frameRate: 20,
            repeat: 0
        })
        this.anims.create({
            key: "WeaponAttackUp",
            frames: this.anims.generateFrameNumbers(keyNameWeapon, { frames: [140, 141, 142, 143, 144, 145] }),
            frameRate: 20,
            repeat: 0
        })
        this.anims.create({
            key: "WeaponAttackLeft",
            frames: this.anims.generateFrameNumbers(keyNameWeapon, { frames: [150, 151, 152, 153, 154, 155] }),
            frameRate: 20,
            repeat: 0
        })




        
        //攻擊事件
        this.scene.input.keyboard.on('keydown', function (event) {
            if (event.key === 'z') {
                _this.isAttack = true;
                _this.stand = true;
                _this.status = 'Idle';
                _this.scene.swordHitbox.setVisible(true);
                _this.scene.swordHitbox.x = _this.x;
                _this.scene.swordHitbox.y = _this.y;
                if (_this.isUp == 'Up') {
                    _this.anims.play('CharacterAttackUp', true);
                    _this.scene.swordHitbox.y = _this.y - 16;
                    _this.scene.swordHitbox.setSize(48, 24);
                    _this.scene.swordHitbox.setOrigin(0.5,0.5);
                    _this.scene.swordHitbox.body.setSize(48, 24);
                }
                if (_this.isUp == 'Down') {
                    _this.anims.play('CharacterAttackDown', true);
                    _this.scene.swordHitbox.y = _this.y + 16;
                    _this.scene.swordHitbox.setSize(48, 24);
                    _this.scene.swordHitbox.setOrigin(0.5,0.5);
                    _this.scene.swordHitbox.body.setSize(48, 24);
                }
                if (_this.isUp == 'Right') {
                    _this.anims.play('CharacterAttackRight', true);
                    _this.scene.swordHitbox.x = _this.x + 16;
                    _this.scene.swordHitbox.setSize(24, 48);
                    _this.scene.swordHitbox.setOrigin(0.5,0.5);
                    _this.scene.swordHitbox.body.setSize(24, 48);
                }
                if (_this.isUp == 'Left') {
                    _this.anims.play('CharacterAttackLeft', true);
                    _this.scene.swordHitbox.x = _this.x - 16;
                    _this.scene.swordHitbox.setSize(24, 48);
                    _this.scene.swordHitbox.setOrigin(0.5,0.5);
                    _this.scene.swordHitbox.body.setSize(24, 48);
                }
                setTimeout(()=>{
                    _this.isAttack = false;
                    _this.scene.swordHitbox.x = _this.x;
                    _this.scene.swordHitbox.y = _this.y;
                    _this.scene.swordHitbox.setVisible(false);
                    _this.scene.swordHitbox.setSize(16, 16);
                    _this.scene.swordHitbox.setOrigin(0.5,0.5);
                    _this.scene.swordHitbox.body.setSize(16, 16);
                }, 400)
            }
        });

    }
    update(cursors, keys) {
        var _this = this;
        // this.moveSpeed = this.isAutoMoving? 100: 100;
        if (cursors && keys) {
            this.isAutoMoving = false;
            if ((cursors.up.isDown || keys.W.isDown) && (cursors.left.isDown || keys.A.isDown) && !keys.Z.isDown) {
                this.isKeyMoving = true;
                this.stand = false;
                this.scene.playerContainer.body.setVelocityX(-this.moveSpeed / 3 * 2);
                this.scene.playerContainer.body.setVelocityY(-this.moveSpeed / 3 * 2);
                this.anims.play('CharacterWalkLeft', true);
            }
            else if ((cursors.up.isDown || keys.W.isDown) && (cursors.right.isDown || keys.D.isDown) && !keys.Z.isDown) {
                this.isKeyMoving = true;
                this.stand = false;
                this.scene.playerContainer.body.setVelocityX(this.moveSpeed / 3 * 2);
                this.scene.playerContainer.body.setVelocityY(-this.moveSpeed / 3 * 2);
                this.anims.play('CharacterWalkRight', true);
            }
            else if ((cursors.down.isDown || keys.S.isDown) && (cursors.left.isDown || keys.A.isDown) && !keys.Z.isDown) {
                this.isKeyMoving = true;
                this.stand = false;
                this.scene.playerContainer.body.setVelocityX(-this.moveSpeed / 3 * 2);
                this.scene.playerContainer.body.setVelocityY(this.moveSpeed / 3 * 2);
                this.anims.play('CharacterWalkLeft', true);
            }
            else if ((cursors.down.isDown || keys.S.isDown) && (cursors.right.isDown || keys.D.isDown) && !keys.Z.isDown) {
                this.isKeyMoving = true;
                this.stand = false;
                this.scene.playerContainer.body.setVelocityX(this.moveSpeed / 3 * 2);
                this.scene.playerContainer.body.setVelocityY(this.moveSpeed / 3 * 2);
                this.anims.play('CharacterWalkRight', true);
            }
            else if ((cursors.left.isDown || keys.A.isDown || this.isUp == 'Left' && this.status == 'walking') && !keys.Z.isDown) {
                if (cursors.shift.isDown) {
                    this.scene.playerContainer.body.setVelocityX(-this.moveSpeed * this.runSpeed);
                    this.anims.play('CharacterRunLeft', true);
                } else {
                    this.scene.playerContainer.body.setVelocityX(-this.moveSpeed);
                    this.anims.play('CharacterWalkLeft', true);
                }
                this.scene.playerContainer.body.setVelocityY(0);
                this.isUp = 'Left';
                this.isKeyMoving = false;
                this.stand = false;
            }
            else if ((cursors.right.isDown || keys.D.isDown || this.isUp == 'Right' && this.status == 'walking') && !keys.Z.isDown) {
                if (cursors.shift.isDown) {
                    this.scene.playerContainer.body.setVelocityX(this.moveSpeed * this.runSpeed);
                    this.anims.play('CharacterRunRight', true);
                } else {
                    this.scene.playerContainer.body.setVelocityX(this.moveSpeed);
                    this.anims.play('CharacterWalkRight', true);
                }
                this.scene.playerContainer.body.setVelocityY(0);
                this.isUp = 'Right';
                this.isKeyMoving = false;
                this.stand = false;
            }
            else if ((cursors.up.isDown || keys.W.isDown || this.isUp == 'Up' && this.status == 'walking') && !keys.Z.isDown) {
                if (cursors.shift.isDown) {
                    this.scene.playerContainer.body.setVelocityY(-this.moveSpeed * this.runSpeed);
                    this.anims.play('CharacterRunUp', true);
                } else {
                    this.scene.playerContainer.body.setVelocityY(-this.moveSpeed);
                    this.anims.play('CharacterWalkUp', true);
                }
                this.scene.playerContainer.body.setVelocityX(0);
                this.isUp = 'Up';
                this.isKeyMoving = false;
                this.stand = false;
            }
            else if ((cursors.down.isDown || keys.S.isDown || this.isUp == 'Down' && this.status == 'walking') && !keys.Z.isDown) {
                if (cursors.shift.isDown) {
                    this.scene.playerContainer.body.setVelocityY(this.moveSpeed * this.runSpeed);
                    this.anims.play('CharacterRunDown', true);
                } else {
                    this.scene.playerContainer.body.setVelocityY(this.moveSpeed);
                    this.anims.play('CharacterWalkDown', true);
                }
                this.scene.playerContainer.body.setVelocityX(0);
                this.isUp = 'Down';
                this.isKeyMoving = false;
                this.stand = false;
            }
            else{ 
                if(this.isAttack == false){ 

                    this.isKeyMoving = false;
                    this.stand = true;
                    this.status = 'Idle'

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
                this.scene.playerContainer.body.setVelocityX(0);
                this.scene.playerContainer.body.setVelocityY(0);
            }
        }
        // this.anims.play('CharacterIdleDown', true);

        // this.MoveX = this.x;
        // this.MoveY = this.y;



        // this.name.x = this.x;
        // this.name.y = this.y - 20;
    }
}