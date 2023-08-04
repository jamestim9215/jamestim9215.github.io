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
    var _this = this;
    if(GameStatus == 'pause'){
         _this.scene.playerContainer.body.setVelocityX(0);
        _this.scene.playerContainer.body.setVelocityY(0);
    }

    if (cursors && keys && GameStatus == "play") {
      // let sword = this.scene.sword;
      // let smear = this.scene.smear;

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
  }
}
