import { config,PlayerInfo } from '@/config'
// import { socket } from '../socket'

export default class Player extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, _x, _y, _playerInfo, type) {
    super(scene, 0, -14, _playerInfo.Name, 0);
    this.scene = scene;
    // this.scene.physics.world.enable(this)
    this.scene.add.existing(this);
    this.setInteractive();

    //設定角色
    this.setScale(1);

    this.status = "Idle";

    this.hp = 100;

    this.movePath = [];
    this.isDestroy = false;
    this.stand = true;

    this.setDepth(2);

    this.create();
    this.setAnims();
    this.moveSpeed = 80;
    this.runSpeed = 2.5;

    this.isAttack = false;
    this.AttackTimes = 0;
    this.isDownZ = false;
  }

  deletePlayer() {
    clearTimeout(this.setInter);
    this.movePath = [];
    this.name.destroy();
    this.destroy();
  }

  setAnims() {
    var keyName = "Character";
    this.setTexture(keyName);
  }
  create() {}
  update(cursors, keys, GameStatus) {
    // this.HpText.text =  "Hp: " + this.hp;
    var _this = this;
    if (cursors && keys && GameStatus == "play") {
      // let sword = this.scene.sword;
      // let smear = this.scene.smear;

      if (PlayerInfo.Weapon && keys.Z.isDown && this.isDownZ == false && this.isAttack == false && this.AttackTimes <= 1) {
        this.isDownZ = true;
        this.AttackTimes = this.AttackTimes + 1;
        this.scene.playerContainer.body.setVelocityX(0);
        this.scene.playerContainer.body.setVelocityY(0);
        this.isAttack = true;
        this.stand = true;
        this.status = "Attack";
        let swordHitbox = this.scene.swordHitbox;
        swordHitbox.setActive(true).setVisible(true);
        swordHitbox.body.setVelocityX(0);
        swordHitbox.body.setVelocityY(0);
        swordHitbox.x = 0;
        swordHitbox.y = 0;
        swordHitbox.isAttack = true;
        if (this.direction == "Up" && this.AttackTimes == 1) {
          // this.anims.play("CharacterAttackUp", true);
          // sword.anims.play("SwordAttackUp", true);
          // smear.anims.play("SmearAttackUp", true);
          swordHitbox.y = this.y - 18;
          swordHitbox.setSize(48, 24);
          swordHitbox.setOrigin(0.5, 0.5);
          swordHitbox.body.setSize(48, 24);
          this.scene.playerContainer.body.setVelocityY(-10);
        }
        if (this.direction == "Down" && this.AttackTimes == 1) {
          // this.anims.play("CharacterAttackDown", true);
          // sword.anims.play("SwordAttackDown", true);
          // smear.anims.play("SmearAttackDown", true);
          swordHitbox.y = this.y + 18;
          swordHitbox.setSize(48, 24);
          swordHitbox.setOrigin(0.5, 0.5);
          swordHitbox.body.setSize(48, 24);
          this.scene.playerContainer.body.setVelocityY(10);
        }
        if (this.direction == "Right" && this.AttackTimes == 1) {
          // this.anims.play("CharacterAttackRight", true);
          // sword.anims.play("SwordAttackRight", true);
          // smear.anims.play("SmearAttackRight", true);
          swordHitbox.x = this.x + 18;
          swordHitbox.setSize(24, 48);
          swordHitbox.setOrigin(0.5, 0.5);
          swordHitbox.body.setSize(24, 48);
          this.scene.playerContainer.body.setVelocityX(10);
        }
        if (this.direction == "Left" && this.AttackTimes == 1) {
          // this.anims.play("CharacterAttackLeft", true);
          // sword.anims.play("SwordAttackLeft", true);
          // smear.anims.play("SmearAttackLeft", true);
          swordHitbox.x = this.x - 18;
          swordHitbox.setSize(24, 48);
          swordHitbox.setOrigin(0.5, 0.5);
          swordHitbox.body.setSize(24, 48);
          this.scene.playerContainer.body.setVelocityX(-10);
        }
        var attack1Timer = setTimeout(() => {
          if (_this.AttackTimes == 2) {
            if (_this.direction == "Up") {
              // _this.anims.play("CharacterAttackLUp", true);
              // sword.anims.play("SwordAttackLUp", true);
              // smear.anims.play("SmearAttackLUp", true);
              swordHitbox.y = this.y - 18;
              swordHitbox.setSize(48, 24);
              swordHitbox.setOrigin(0.5, 0.5);
              swordHitbox.body.setSize(48, 24);
              _this.scene.playerContainer.body.setVelocityY(-10);
            }
            if (_this.direction == "Down") {
              // _this.anims.play("CharacterAttackLDown", true);
              // sword.anims.play("SwordAttackLDown", true);
              // smear.anims.play("SmearAttackLDown", true);
              swordHitbox.y = this.y + 18;
              swordHitbox.setSize(48, 24);
              swordHitbox.setOrigin(0.5, 0.5);
              swordHitbox.body.setSize(48, 24);
              _this.scene.playerContainer.body.setVelocityY(10);
            }
            if (_this.direction == "Right") {
              // _this.anims.play("CharacterAttackLRight", true);
              // sword.anims.play("SwordAttackLRight", true);
              // smear.anims.play("SmearAttackLRight", true);
              swordHitbox.x = this.x + 18;
              swordHitbox.setSize(24, 48);
              swordHitbox.setOrigin(0.5, 0.5);
              swordHitbox.body.setSize(24, 48);
              _this.scene.playerContainer.body.setVelocityX(10);
            }
            if (_this.direction == "Left") {
              // _this.anims.play("CharacterAttackLLeft", true);
              // sword.anims.play("SwordAttackLLeft", true);
              // smear.anims.play("SmearAttackLLeft", true);
              swordHitbox.x = this.x - 18;
              swordHitbox.setSize(24, 48);
              swordHitbox.setOrigin(0.5, 0.5);
              swordHitbox.body.setSize(24, 48);
              _this.scene.playerContainer.body.setVelocityX(-10);
            }

            var attack2Timer = setTimeout(() => {
              swordHitbox.x = 0;
              swordHitbox.y = 0;
              swordHitbox.setSize(12, 12);
              swordHitbox.setOrigin(0.5, 0.5);
              swordHitbox.body.setSize(12, 12);
              swordHitbox.body.setVelocityX(0);
              swordHitbox.body.setVelocityY(0);
              swordHitbox.attackNum = 0;
              swordHitbox.setActive(false).setVisible(false);
              swordHitbox.isAttack = false;
              _this.isAttack = false;
              _this.scene.playerContainer.body.setVelocityX(0);
              _this.scene.playerContainer.body.setVelocityY(0);
              clearTimeout(attack2Timer);
            }, 150);
          } else {
            swordHitbox.x = 0;
            swordHitbox.y = 0;
            swordHitbox.setSize(12, 12);
            swordHitbox.setOrigin(0.5, 0.5);
            swordHitbox.body.setSize(12, 12);
            swordHitbox.body.setVelocityX(0);
            swordHitbox.body.setVelocityY(0);
            swordHitbox.attackNum = 0;
            swordHitbox.setActive(false).setVisible(false);
            swordHitbox.isAttack = false;
            _this.isAttack = false;
            _this.scene.playerContainer.body.setVelocityX(0);
            _this.scene.playerContainer.body.setVelocityY(0);
          }
          clearTimeout(attack1Timer);
        }, 150);

        if (_this.AttackTimes != 0) {
          var attackNum1Timer = setTimeout(() => {
            if (_this.AttackTimes < 2) _this.AttackTimes = 0;
            var attackNum2Timer = setTimeout(() => {
              if (_this.AttackTimes == 2) _this.AttackTimes = 0;
              clearTimeout(attackNum2Timer);
            }, 150);
            clearTimeout(attackNum1Timer);
          }, 300);
        }

        var attackITimer = setTimeout(
          () => {
            if (cursors.left.isDown) {
              _this.anims.play("CharacterIdleLeft", true);
              // sword.anims.play("SwordIdleLeft", true);
              // smear.anims.play("SmearIdleLeft", true);
              _this.direction = "Left";
            } else if (cursors.right.isDown) {
              _this.anims.play("CharacterIdleRight", true);
              // sword.anims.play("SwordIdleRight", true);
              // smear.anims.play("SmearIdleRight", true);
              _this.direction = "Right";
            } else if (cursors.up.isDown) {
              _this.anims.play("CharacterIdleUp", true);
              // sword.anims.play("SwordIdleUp", true);
              // smear.anims.play("SmearIdleUp", true);
              _this.direction = "Up";
            } else if (cursors.down.isDown) {
              _this.anims.play("CharacterIdleDown", true);
              // sword.anims.play("SwordIdleDown", true);
              // smear.anims.play("SmearIdleDown", true);
              _this.direction = "Down";
            }
            clearTimeout(attackITimer);
          },
          _this.AttackTimes == 2 ? 300 : 150
        );
      }
      if(PlayerInfo.Weapon && keys.Z.isUp) {
        this.isDownZ = false;
      }
      // else if (keys.Z.direction) {
      //   if (_this.AttackTimes != 0) {
      //     var attackNum1Timer = setTimeout(() => {
      //       if (_this.AttackTimes < 2) _this.AttackTimes = 0;
      //       var attackNum2Timer = setTimeout(() => {
      //         if (_this.AttackTimes == 2) _this.AttackTimes = 0;
      //         clearTimeout(attackNum2Timer);
      //       }, 150);
      //       clearTimeout(attackNum1Timer);
      //     }, 150);
      //   }
      // }

      if (this.isAttack == true) {
        this.status = "Attack";
      } else {
        this.status = "Idle";
      }

      if (this.status != "Attack") {
        this.scene.playerContainer.body.setVelocityX(0);
        this.scene.playerContainer.body.setVelocityY(0);
        if (cursors.up.isDown && cursors.left.isDown) {
          if (cursors.shift.isDown) {
            this.scene.playerContainer.body.setVelocityX(
              (-(this.moveSpeed * this.runSpeed) / 3) * 2
            );
            this.scene.playerContainer.body.setVelocityY(
              (-(this.moveSpeed * this.runSpeed) / 3) * 2
            );
          } else {
            this.scene.playerContainer.body.setVelocityX(
              (-this.moveSpeed / 3) * 2
            );
            this.scene.playerContainer.body.setVelocityY(
              (-this.moveSpeed / 3) * 2
            );
          }
        } else if (cursors.up.isDown && cursors.right.isDown) {
          if (cursors.shift.isDown) {
            this.scene.playerContainer.body.setVelocityX(
              ((this.moveSpeed * this.runSpeed) / 3) * 2
            );
            this.scene.playerContainer.body.setVelocityY(
              (-(this.moveSpeed * this.runSpeed) / 3) * 2
            );
          } else {
            this.scene.playerContainer.body.setVelocityX(
              (this.moveSpeed / 3) * 2
            );
            this.scene.playerContainer.body.setVelocityY(
              (-this.moveSpeed / 3) * 2
            );
          }
        } else if (cursors.down.isDown && cursors.left.isDown) {
          if (cursors.shift.isDown) {
            this.scene.playerContainer.body.setVelocityX(
              (-(this.moveSpeed * this.runSpeed) / 3) * 2
            );
            this.scene.playerContainer.body.setVelocityY(
              ((this.moveSpeed * this.runSpeed) / 3) * 2
            );
          } else {
            this.scene.playerContainer.body.setVelocityX(
              (-this.moveSpeed / 3) * 2
            );
            this.scene.playerContainer.body.setVelocityY(
              (this.moveSpeed / 3) * 2
            );
          }
        } else if (cursors.down.isDown && cursors.right.isDown) {
          if (cursors.shift.isDown) {
            this.scene.playerContainer.body.setVelocityX(
              ((this.moveSpeed * this.runSpeed) / 3) * 2
            );
            this.scene.playerContainer.body.setVelocityY(
              ((this.moveSpeed * this.runSpeed) / 3) * 2
            );
          } else {
            this.scene.playerContainer.body.setVelocityX(
              (this.moveSpeed / 3) * 2
            );
            this.scene.playerContainer.body.setVelocityY(
              (this.moveSpeed / 3) * 2
            );
          }
        } else if (cursors.left.isDown) {
          if (cursors.shift.isDown) {
            this.scene.playerContainer.body.setVelocityX(
              -this.moveSpeed * this.runSpeed
            );

            this.anims.play("CharacterRunLeft", true);
            // sword.anims.play("SwordRunLeft", true);
            // smear.anims.play("SmearRunLeft", true);
          } else {
            this.scene.playerContainer.body.setVelocityX(-this.moveSpeed);

            this.anims.play("CharacterWalkLeft", true);
            // sword.anims.play("SwordWalkLeft", true);
            // smear.anims.play("SmearWalkLeft", true);
          }
          this.direction = "Left";
        } else if (cursors.right.isDown) {
          if (cursors.shift.isDown) {
            this.scene.playerContainer.body.setVelocityX(
              this.moveSpeed * this.runSpeed
            );

            this.anims.play("CharacterRunRight", true);
            // sword.anims.play("SwordRunRight", true);
            // smear.anims.play("SmearRunRight", true);
          } else {
            this.scene.playerContainer.body.setVelocityX(this.moveSpeed);

            this.anims.play("CharacterWalkRight", true);
            // sword.anims.play("SwordWalkRight", true);
            // smear.anims.play("SmearWalkRight", true);
          }
          this.direction = "Right";
        } else if (cursors.up.isDown) {
          if (cursors.shift.isDown) {
            this.scene.playerContainer.body.setVelocityY(
              -this.moveSpeed * this.runSpeed
            );
            this.anims.play("CharacterRunUp", true);
            // sword.anims.play("SwordRunUp", true);
            // smear.anims.play("SmearRunUp", true);
          } else {
            this.scene.playerContainer.body.setVelocityY(-this.moveSpeed);
            this.anims.play("CharacterWalkUp", true);
            // sword.anims.play("SwordWalkUp", true);
            // smear.anims.play("SmearWalkUp", true);
          }
          this.direction = "Up";
        } else if (cursors.down.isDown) {
          if (cursors.shift.isDown) {
            this.scene.playerContainer.body.setVelocityY(
              this.moveSpeed * this.runSpeed
            );

            this.anims.play("CharacterRunDown", true);
            // sword.anims.play("SwordRunDown", true);
            // smear.anims.play("SmearRunDown", true);
          } else {
            this.scene.playerContainer.body.setVelocityY(this.moveSpeed);
            this.anims.play("CharacterWalkDown", true);
            // sword.anims.play("SwordWalkDown", true);
            // smear.anims.play("SmearWalkDown", true);
          }
          this.direction = "Down";
        } else {
          this.status = "Idle";
          if (this.direction == "Up") {
            this.anims.play("CharacterIdleUp", true);
            // sword.anims.play("SwordIdleUp", true);
            // smear.anims.play("SmearIdleUp", true);
          }
          if (this.direction == "Down") {
            this.anims.play("CharacterIdleDown", true);
            // sword.anims.play("SwordIdleDown", true);
            // smear.anims.play("SmearIdleDown", true);
          }
          if (this.direction == "Right") {
            this.anims.play("CharacterIdleRight", true);
            // sword.anims.play("SwordIdleRight", true);
            // smear.anims.play("SmearIdleRight", true);
          }
          if (this.direction == "Left") {
            this.anims.play("CharacterIdleLeft", true);
            // sword.anims.play("SwordIdleLeft", true);
            // smear.anims.play("SmearIdleLeft", true);
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
