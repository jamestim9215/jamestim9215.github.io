// import { config,PlayerInfo } from '../config'
// import { socket } from '../socket'

export default class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, _x, _y, _playerInfo, type) {
        super(scene, 0, 0, _playerInfo.Name, 0)
        this.scene = scene
        // this.scene.physics.world.enable(this)
        this.scene.add.existing(this);
        this.setInteractive();


        //設定角色
        this.setScale(1);
        // this.body.immovable = true;

        this.SocketID = _playerInfo.SocketID;
        this.skin = _playerInfo.skin;
        this.status = 'Idle';
        this.isChangeSkin = false;
        this.isUser = false;
        this.isMoving = false;

        this.hp = 100; 



        this.movePath = [];
        this.isDestroy = false;
        this.stand = true;

        // this.setBounce(0); //反弹（bounce）值
        // this.setCollideWorldBounds(true); //世界边界（bound）的碰撞
        this.setDepth(2);

        this.create();
        this.setAnims();

        this.MoveX = 0;
        this.MoveY = 0;

        this.moveSpeed = 100;
        this.runSpeed = 2;
        this.isAttack = false;
        this.AttackTimes = 0;

        
        
        this.HpText = this.scene.add.text(64, 30, "Hp: " + this.hp , {
            fontFamily: 'Arial',
            color: '#ffffff'
        }).setFontSize(16).setOrigin(0);

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

    }
    update(cursors, keys) {
        this.HpText.text =  "Hp: " + this.hp;

        var _this = this;
        // this.moveSpeed = this.isAutoMoving? 100: 100;
        if (cursors && keys) {
            let sword = this.scene.sword;
            let smear = this.scene.smear;


            if (keys.Z.isDown && this.isAttack == false && this.AttackTimes <= 1) {
                this.AttackTimes = this.AttackTimes + 1;
                this.scene.playerContainer.body.setVelocityX(0);
                this.scene.playerContainer.body.setVelocityY(0);
                this.isAttack = true;
                this.stand = true;
                this.status = 'Attack';
                let swordHitbox = this.scene.swordHitbox;
                swordHitbox.setActive(true).setVisible(true);
                swordHitbox.body.setVelocityX(0);
                swordHitbox.body.setVelocityY(0);
                swordHitbox.x = this.x;
                swordHitbox.y = this.y;
                swordHitbox.isAttack = true;
                if (this.isUp == 'Up' && this.AttackTimes == 1) {
                    this.anims.play('CharacterAttackUp', true);
                    sword.anims.play('SwordAttackUp', true);
                    smear.anims.play('SmearAttackUp', true);
                    swordHitbox.y = this.y - 16;
                    swordHitbox.setSize(48, 24);
                    swordHitbox.setOrigin(0.5, 0.5);
                    swordHitbox.body.setSize(48, 24);
                    this.scene.playerContainer.body.setVelocityY(-10);
                }
                if (this.isUp == 'Down' && this.AttackTimes == 1) {
                    this.anims.play('CharacterAttackDown', true);
                    sword.anims.play('SwordAttackDown', true);
                    smear.anims.play('SmearAttackDown', true);
                    swordHitbox.y = this.y + 16;
                    swordHitbox.setSize(48, 24);
                    swordHitbox.setOrigin(0.5, 0.5);
                    swordHitbox.body.setSize(48, 24);
                    this.scene.playerContainer.body.setVelocityY(10);
                }
                if (this.isUp == 'Right' && this.AttackTimes == 1) {
                    this.anims.play('CharacterAttackRight', true);
                    sword.anims.play('SwordAttackRight', true);
                    smear.anims.play('SmearAttackRight', true);
                    swordHitbox.x = this.x + 16;
                    swordHitbox.setSize(24, 48);
                    swordHitbox.setOrigin(0.5, 0.5);
                    swordHitbox.body.setSize(24, 48);
                    this.scene.playerContainer.body.setVelocityX(10);
                }
                if (this.isUp == 'Left' && this.AttackTimes == 1) {
                    this.anims.play('CharacterAttackLeft', true);
                    sword.anims.play('SwordAttackLeft', true);
                    smear.anims.play('SmearAttackLeft', true);
                    swordHitbox.x = this.x - 16;
                    swordHitbox.setSize(24, 48);
                    swordHitbox.setOrigin(0.5, 0.5);
                    swordHitbox.body.setSize(24, 48);
                    this.scene.playerContainer.body.setVelocityX(-10);
                }
                setTimeout(() => {
                    console.log(_this.AttackTimes);
                    if(_this.AttackTimes == 2){
                        if (_this.isUp == 'Up') {
                            _this.anims.play('CharacterAttackLUp', true);
                            sword.anims.play('SwordAttackLUp', true);
                            smear.anims.play('SmearAttackLUp', true);
                            swordHitbox.y = this.y - 16;
                            swordHitbox.setSize(48, 24);
                            swordHitbox.setOrigin(0.5, 0.5);
                            swordHitbox.body.setSize(48, 24);
                            _this.scene.playerContainer.body.setVelocityY(-10);
                        }
                        if (_this.isUp == 'Down') {
                            console.log("???");
                            _this.anims.play('CharacterAttackLDown', true);
                            sword.anims.play('SwordAttackLDown', true);
                            smear.anims.play('SmearAttackLDown', true);
                            swordHitbox.y = this.y + 16;
                            swordHitbox.setSize(48, 24);
                            swordHitbox.setOrigin(0.5, 0.5);
                            swordHitbox.body.setSize(48, 24);
                            _this.scene.playerContainer.body.setVelocityY(10);
                        }
                        if (_this.isUp == 'Right') {
                            _this.anims.play('CharacterAttackLRight', true);
                            sword.anims.play('SwordAttackLRight', true);
                            smear.anims.play('SmearAttackLRight', true);
                            swordHitbox.x = this.x + 16;
                            swordHitbox.setSize(24, 48);
                            swordHitbox.setOrigin(0.5, 0.5);
                            swordHitbox.body.setSize(24, 48);
                            _this.scene.playerContainer.body.setVelocityX(10);
                        }
                        if (_this.isUp == 'Left') {
                            _this.anims.play('CharacterAttackLLeft', true);
                            sword.anims.play('SwordAttackLLeft', true);
                            smear.anims.play('SmearAttackLLeft', true);
                            swordHitbox.x = this.x - 16;
                            swordHitbox.setSize(24, 48);
                            swordHitbox.setOrigin(0.5, 0.5);
                            swordHitbox.body.setSize(24, 48);
                            _this.scene.playerContainer.body.setVelocityX(-10);
                        }

                        setTimeout(() => {
                            swordHitbox.x = _this.x;
                            swordHitbox.y = _this.y;
                            swordHitbox.setSize(16, 16);
                            swordHitbox.setOrigin(0.5, 0.5);
                            swordHitbox.body.setSize(16, 16);
                            swordHitbox.body.setVelocityX(0);
                            swordHitbox.body.setVelocityY(0);
                            swordHitbox.attackNum = 0;
                            swordHitbox.setActive(false).setVisible(false);
                            swordHitbox.isAttack = false;
                            _this.isAttack = false;
                            _this.scene.playerContainer.body.setVelocityX(0);
                            _this.scene.playerContainer.body.setVelocityY(0);
                        }, 150)
                    }else{
                        swordHitbox.x = _this.x;
                        swordHitbox.y = _this.y;
                        swordHitbox.setSize(16, 16);
                        swordHitbox.setOrigin(0.5, 0.5);
                        swordHitbox.body.setSize(16, 16);
                        swordHitbox.body.setVelocityX(0);
                        swordHitbox.body.setVelocityY(0);
                        swordHitbox.attackNum = 0;
                        swordHitbox.setActive(false).setVisible(false);
                        swordHitbox.isAttack = false;
                        _this.isAttack = false;
                        _this.scene.playerContainer.body.setVelocityX(0);
                        _this.scene.playerContainer.body.setVelocityY(0);
                    }
                }, 150)
                
                setTimeout(() => {
                    if (cursors.left.isDown) {
                        _this.anims.play('CharacterIdleLeft', true);
                        sword.anims.play('SwordIdleLeft', true);
                        smear.anims.play('SmearIdleLeft', true);
                        _this.isUp = 'Left';
                    }
                    else if (cursors.right.isDown) {
                        _this.anims.play('CharacterIdleRight', true);
                        sword.anims.play('SwordIdleRight', true);
                        smear.anims.play('SmearIdleRight', true);
                        _this.isUp = 'Right';
                    }
                    else if (cursors.up.isDown) {
                        _this.anims.play('CharacterIdleUp', true);
                        sword.anims.play('SwordIdleUp', true);
                        smear.anims.play('SmearIdleUp', true);
                        _this.isUp = 'Up';
                    }
                    else if (cursors.down.isDown) {
                        _this.anims.play('CharacterIdleDown', true);
                        sword.anims.play('SwordIdleDown', true);
                        smear.anims.play('SmearIdleDown', true);
                        _this.isUp = 'Down';
                    }
                }, _this.AttackTimes == 2?300:150)
            }else if(keys.Z.isUp){
                if(_this.AttackTimes != 0) {
                    setTimeout(()=>{
                        if(_this.AttackTimes < 2) _this.AttackTimes = 0;
                        setTimeout(()=>{
                            if(_this.AttackTimes == 2 ) _this.AttackTimes = 0;
                        }, 150)
                    }, 150)
                }
            }

            if (this.isAttack == true){
                this.status = 'Attack';
            }else{
                this.status = 'Idle';
            }

            if (this.status != 'Attack') {
                this.scene.playerContainer.body.setVelocityX(0);
                this.scene.playerContainer.body.setVelocityY(0);
                if (cursors.up.isDown && cursors.left.isDown) {
                    if (cursors.shift.isDown) {
                        this.scene.playerContainer.body.setVelocityX(- (this.moveSpeed * this.runSpeed) / 3 * 2);
                        this.scene.playerContainer.body.setVelocityY(- (this.moveSpeed * this.runSpeed) / 3 * 2);
                    } else {
                        this.scene.playerContainer.body.setVelocityX(-this.moveSpeed / 3 * 2);
                        this.scene.playerContainer.body.setVelocityY(-this.moveSpeed / 3 * 2);
                    }
                }
                else if (cursors.up.isDown && cursors.right.isDown) {
                    if (cursors.shift.isDown) {
                        this.scene.playerContainer.body.setVelocityX((this.moveSpeed * this.runSpeed) / 3 * 2);
                        this.scene.playerContainer.body.setVelocityY(- (this.moveSpeed * this.runSpeed) / 3 * 2);
                    } else {
                        this.scene.playerContainer.body.setVelocityX(this.moveSpeed / 3 * 2);
                        this.scene.playerContainer.body.setVelocityY(-this.moveSpeed / 3 * 2);
                    }
                }
                else if (cursors.down.isDown && cursors.left.isDown) {
                    if (cursors.shift.isDown) {
                        this.scene.playerContainer.body.setVelocityX(- (this.moveSpeed * this.runSpeed) / 3 * 2);
                        this.scene.playerContainer.body.setVelocityY( (this.moveSpeed * this.runSpeed) / 3 * 2);
                    } else {
                        this.scene.playerContainer.body.setVelocityX(-this.moveSpeed / 3 * 2);
                        this.scene.playerContainer.body.setVelocityY(this.moveSpeed / 3 * 2);
                    }
                }
                else if (cursors.down.isDown && cursors.right.isDown) {
                    if (cursors.shift.isDown) {
                        this.scene.playerContainer.body.setVelocityX( (this.moveSpeed * this.runSpeed) / 3 * 2);
                        this.scene.playerContainer.body.setVelocityY( (this.moveSpeed * this.runSpeed) / 3 * 2);
                    } else {
                        this.scene.playerContainer.body.setVelocityX(this.moveSpeed / 3 * 2);
                        this.scene.playerContainer.body.setVelocityY(this.moveSpeed / 3 * 2);
                    }
                }
                else
                    if (cursors.left.isDown) {
                        if (cursors.shift.isDown) {
                            this.scene.playerContainer.body.setVelocityX(-this.moveSpeed * this.runSpeed);

                            this.anims.play('CharacterRunLeft', true);
                            sword.anims.play('SwordRunLeft', true);
                            smear.anims.play('SmearRunLeft', true);
                        } else {
                            this.scene.playerContainer.body.setVelocityX(-this.moveSpeed);

                            this.anims.play('CharacterWalkLeft', true);
                            sword.anims.play('SwordWalkLeft', true);
                            smear.anims.play('SmearWalkLeft', true);
                        }
                        this.isUp = 'Left';
                    }
                    else if (cursors.right.isDown) {
                        if (cursors.shift.isDown) {
                            this.scene.playerContainer.body.setVelocityX(this.moveSpeed * this.runSpeed);

                            this.anims.play('CharacterRunRight', true);
                            sword.anims.play('SwordRunRight', true);
                            smear.anims.play('SmearRunRight', true);
                        } else {
                            this.scene.playerContainer.body.setVelocityX(this.moveSpeed);

                            this.anims.play('CharacterWalkRight', true);
                            sword.anims.play('SwordWalkRight', true);
                            smear.anims.play('SmearWalkRight', true);
                        }
                        this.isUp = 'Right';
                    }
                    else if (cursors.up.isDown) {
                        if (cursors.shift.isDown) {
                            this.scene.playerContainer.body.setVelocityY(-this.moveSpeed * this.runSpeed);
                            this.anims.play('CharacterRunUp', true);
                            sword.anims.play('SwordRunUp', true);
                            smear.anims.play('SmearRunUp', true);
                        } else {
                            this.scene.playerContainer.body.setVelocityY(-this.moveSpeed);
                            this.anims.play('CharacterWalkUp', true);
                            sword.anims.play('SwordWalkUp', true);
                            smear.anims.play('SmearWalkUp', true);
                        }
                        this.isUp = 'Up';
                    }
                    else if (cursors.down.isDown) {
                        if (cursors.shift.isDown) {
                            this.scene.playerContainer.body.setVelocityY(this.moveSpeed * this.runSpeed);

                            this.anims.play('CharacterRunDown', true);
                            sword.anims.play('SwordRunDown', true);
                            smear.anims.play('SmearRunDown', true);
                        } else {
                            this.scene.playerContainer.body.setVelocityY(this.moveSpeed);

                            this.anims.play('CharacterWalkDown', true);
                            sword.anims.play('SwordWalkDown', true);
                            smear.anims.play('SmearWalkDown', true);
                        }
                        this.isUp = 'Down';
                    }
                    else {
                        this.status = 'Idle'
                        if (this.isUp == 'Up') {
                            this.anims.play('CharacterIdleUp', true);
                            sword.anims.play('SwordIdleUp', true);
                            smear.anims.play('SmearIdleUp', true);
                        }
                        if (this.isUp == 'Down') {
                            this.anims.play('CharacterIdleDown', true);
                            sword.anims.play('SwordIdleDown', true);
                            smear.anims.play('SmearIdleDown', true);
                        }
                        if (this.isUp == 'Right') {
                            this.anims.play('CharacterIdleRight', true);
                            sword.anims.play('SwordIdleRight', true);
                            smear.anims.play('SmearIdleRight', true);
                        }
                        if (this.isUp == 'Left') {
                            this.anims.play('CharacterIdleLeft', true);
                            sword.anims.play('SwordIdleLeft', true);
                            smear.anims.play('SmearIdleLeft', true);
                        }
                        this.scene.playerContainer.body.setVelocityX(0);
                        this.scene.playerContainer.body.setVelocityY(0);
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