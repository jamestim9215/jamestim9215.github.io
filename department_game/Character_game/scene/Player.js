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

        this.isAutoMoving = false;
        this.isKeyMoving = false;
        this.movePath = [];
        this.isDestroy = false;
        this.stand = true;

        // this.setBounce(0); //反弹（bounce）值
        // this.setCollideWorldBounds(true); //世界边界（bound）的碰撞
        this.setDepth(1);

        this.create();
        this.setAnims();

        this.MoveX = 0;
        this.MoveY = 0;

        this.moveSpeed = 100;
        this.runSpeed = 2;
        this.isAttack = false;
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
        var _this = this;
        // this.moveSpeed = this.isAutoMoving? 100: 100;
        if (cursors && keys ) {
            this.isAutoMoving = false;
            if (cursors.up.isDown && cursors.left.isDown && !keys.Z.isDown) {
                
                this.scene.playerContainer.body.setVelocityX(-this.moveSpeed / 3 * 2);
                this.scene.playerContainer.body.setVelocityY(-this.moveSpeed / 3 * 2);
                if(this.isAttack==false)
                    this.anims.play('CharacterWalkLeft', true);
            }
            else if (cursors.up.isDown  && cursors.right.isDown && !keys.Z.isDown) {
                this.isKeyMoving = true;
                
                this.scene.playerContainer.body.setVelocityX(this.moveSpeed / 3 * 2);
                this.scene.playerContainer.body.setVelocityY(-this.moveSpeed / 3 * 2);
                if(this.isAttack==false)
                    this.anims.play('CharacterWalkRight', true);
            }
            else if (cursors.down.isDown && cursors.left.isDown && !keys.Z.isDown) {
                this.isKeyMoving = true;
                
                this.scene.playerContainer.body.setVelocityX(-this.moveSpeed / 3 * 2);
                this.scene.playerContainer.body.setVelocityY(this.moveSpeed / 3 * 2);
                if(this.isAttack==false)
                    this.anims.play('CharacterWalkLeft', true);
            }
            else if (cursors.down.isDown && cursors.right.isDown && !keys.Z.isDown) {
                this.isKeyMoving = true;
                
                this.scene.playerContainer.body.setVelocityX(this.moveSpeed / 3 * 2);
                this.scene.playerContainer.body.setVelocityY(this.moveSpeed / 3 * 2);
                if(this.isAttack==false)
                    this.anims.play('CharacterWalkRight', true);
            }
            else if (cursors.left.isDown && !keys.Z.isDown) {
                if (cursors.shift.isDown) {
                    this.scene.playerContainer.body.setVelocityX(-this.moveSpeed * this.runSpeed);
                    if(this.isAttack==false)
                    this.anims.play('CharacterRunLeft', true);
                } else {
                    this.scene.playerContainer.body.setVelocityX(-this.moveSpeed);
                    if(this.isAttack==false)
                    this.anims.play('CharacterWalkLeft', true);
                }
                this.scene.playerContainer.body.setVelocityY(0);
                this.isUp = 'Left';
                this.isKeyMoving = false;
                
            }
            else if (cursors.right.isDown && !keys.Z.isDown) {
                if (cursors.shift.isDown) {
                    this.scene.playerContainer.body.setVelocityX(this.moveSpeed * this.runSpeed);
                    if(this.isAttack==false)
                    this.anims.play('CharacterRunRight', true);
                } else {
                    this.scene.playerContainer.body.setVelocityX(this.moveSpeed);
                    if(this.isAttack==false)
                    this.anims.play('CharacterWalkRight', true);
                }
                this.scene.playerContainer.body.setVelocityY(0);
                this.isUp = 'Right';
                this.isKeyMoving = false;
                
            }
            else if (cursors.up.isDown && !keys.Z.isDown) {
                if (cursors.shift.isDown) {
                    this.scene.playerContainer.body.setVelocityY(-this.moveSpeed * this.runSpeed);
                    if(this.isAttack==false)
                    this.anims.play('CharacterRunUp', true);
                } else {
                    this.scene.playerContainer.body.setVelocityY(-this.moveSpeed);
                    if(this.isAttack==false)
                    this.anims.play('CharacterWalkUp', true);
                }
                this.scene.playerContainer.body.setVelocityX(0);
                this.isUp = 'Up';
                this.isKeyMoving = false;
            }
            else if (cursors.down.isDown && !keys.Z.isDown) {
                if (cursors.shift.isDown) {
                    this.scene.playerContainer.body.setVelocityY(this.moveSpeed * this.runSpeed);
                    if(this.isAttack==false)
                    this.anims.play('CharacterRunDown', true);
                } else {
                    this.scene.playerContainer.body.setVelocityY(this.moveSpeed);
                    if(this.isAttack==false)
                    this.anims.play('CharacterWalkDown', true);
                }
                this.scene.playerContainer.body.setVelocityX(0);
                this.isUp = 'Down';
                this.isKeyMoving = false;
            }
            else{ 
                if(this.isAttack == false){ 

                    this.isKeyMoving = false;
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

            if (keys.Z.isDown && this.isAttack==false) {
                this.isAttack = true;
                this.stand = true;
                this.status = 'Attack';
                let sword = this.scene.swordHitbox;
                sword.setActive(true).setVisible(true);
                sword.body.setVelocityX(0);
                sword.body.setVelocityY(0);
                sword.x = this.x;
                sword.y = this.y;
                sword.isAttack = true;
                if (this.isUp == 'Up') {
                    this.anims.play('CharacterAttackUp', true);
                    sword.anims.play('SwordAttackUp', true);
                    sword.y = this.y - 16;
                    sword.setSize(48, 24);
                    sword.setOrigin(0.5,0.5);
                    sword.body.setSize(48, 24);
                }
                if (this.isUp == 'Down') {
                    this.anims.play('CharacterAttackDown', true);
                    sword.anims.play('SwordAttackDown', true);
                    sword.y = this.y + 16;
                    sword.setSize(48, 24);
                    sword.setOrigin(0.5,0.5);
                    sword.body.setSize(48, 24);
                }
                if (this.isUp == 'Right') {
                    this.anims.play('CharacterAttackRight', true);
                    sword.anims.play('SwordAttackRight', true);
                    sword.x = this.x + 16;
                    sword.setSize(24, 48);
                    sword.setOrigin(0.5,0.5);
                    sword.body.setSize(24, 48);
                }
                if (this.isUp == 'Left') {
                    this.anims.play('CharacterAttackLeft', true);
                    sword.anims.play('SwordAttackLeft', true);
                    sword.x = this.x - 16;
                    sword.setSize(24, 48);
                    sword.setOrigin(0.5,0.5);
                    sword.body.setSize(24, 48);
                }
                setTimeout(()=>{
                    sword.x = this.x;
                    sword.y = this.y;
                    sword.setSize(16, 16);
                    sword.setOrigin(0.5,0.5);
                    sword.body.setSize(16, 16);
                    sword.body.setVelocityX(0);
                    sword.body.setVelocityY(0);
                    sword.attackNum = 0;
                    sword.setActive(false).setVisible(false);
                    sword.isAttack = false;
                    this.isAttack = false;
                }, 400)
            }
        }
        // this.anims.play('CharacterIdleDown', true);

        // this.MoveX = this.x;
        // this.MoveY = this.y;



        // this.name.x = this.x;
        // this.name.y = this.y - 20;
    }
}