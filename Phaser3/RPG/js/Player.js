

class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y, playerSkin) {
        super(scene, x, y, 'player', 0)
        this.scene = scene
        this.scene.physics.world.enable(this)
        this.scene.add.existing(this)

        //設定角色
        this.setScale(2);
        this.body.immovable = true;

        this.skin = playerSkin;
        this.status = 'Idle';
        this.isChangeSkin = false;

        this.setBounce(0); //反弹（bounce）值
        // this.setCollideWorldBounds(true); //世界边界（bound）的碰撞

        this.create();
        this.setAnims();

        this.setSize(11, 20);
        this.setOffset(11, 10);

        this.name = this.scene.add.text(x, y, PlayerInfo.Name, {
            fontFamily: 'Arial',
            color: '#ff00ff'
        }).setFontSize(12).setOrigin(0.5);


    }

    setAnims() {

        var keyName = 'Character' + this.skin;

        this.setTexture(keyName);


    }

    create() {

        for (var i = 1; i <= 32; i++) {

            var keyName = 'Character' + i;

            this.anims.create({
                key: "CharacterIdleDown" + i,
                frames: this.anims.generateFrameNumbers(keyName, { frames: [1] }),
                frameRate: 5,
                repeat: 0
            })
            this.anims.create({
                key: "CharacterIdleUp" + i,
                frames: this.anims.generateFrameNumbers(keyName, { frames: [10] }),
                frameRate: 5,
                repeat: 0
            })
            this.anims.create({
                key: "CharacterIdleLeft" + i,
                frames: this.anims.generateFrameNumbers(keyName, { frames: [4] }),
                frameRate: 5,
                repeat: 0
            })
            this.anims.create({
                key: "CharacterIdleRight" + i,
                frames: this.anims.generateFrameNumbers(keyName, { frames: [7] }),
                frameRate: 5,
                repeat: 0
            })

            this.anims.create({
                key: "CharacterDown" + i,
                frames: this.anims.generateFrameNumbers(keyName, { frames: [0, 1, 2, 1, 0] }),
                frameRate: 10,
                repeat: -1
            })

            this.anims.create({
                key: "CharacterLeft" + i,
                frames: this.anims.generateFrameNumbers(keyName, { frames: [3, 4, 5, 4, 3] }),
                frameRate: 10,
                repeat: -1
            })

            this.anims.create({
                key: "CharacterRight" + i,
                frames: this.anims.generateFrameNumbers(keyName, { frames: [6, 7, 8, 7, 6] }),
                frameRate: 10,
                repeat: -1
            })

            this.anims.create({
                key: "CharacterUp" + i,
                frames: this.anims.generateFrameNumbers(keyName, { frames: [9, 10, 11, 10, 9] }),
                frameRate: 10,
                repeat: -1
            })
        }

    }

    update(cursors, keys) {

        if ((cursors.up.isDown || keys.W.isDown) && (cursors.left.isDown || keys.A.isDown)) {
            this.setVelocityX(-100);
            this.setVelocityY(-100);
            this.status = 'walking';
            this.isUp = 'Left';
            this.anims.play('CharacterLeft' + this.skin, true);
        }
        else if ((cursors.up.isDown || keys.W.isDown) && (cursors.right.isDown || keys.D.isDown)) {
            this.setVelocityX(100);
            this.setVelocityY(-100);
            this.status = 'walking';
            this.isUp = 'Right';
            this.anims.play('CharacterRight' + this.skin, true);
        }
        else if ((cursors.down.isDown || keys.S.isDown) && (cursors.left.isDown || keys.A.isDown)) {
            this.setVelocityX(-100);
            this.setVelocityY(100);
            this.status = 'walking';
            this.isUp = 'Left';
            this.anims.play('CharacterLeft' + this.skin, true);
        }
        else if ((cursors.down.isDown || keys.S.isDown) && (cursors.right.isDown || keys.D.isDown)) {
            this.setVelocityX(100);
            this.setVelocityY(100);
            this.status = 'walking';
            this.isUp = 'Right';
            this.anims.play('CharacterRight' + this.skin, true);
        }
        else if (cursors.left.isDown || keys.A.isDown) {
            this.setVelocityX(-100);
            this.setVelocityY(0);
            this.status = 'walkingLeft';
            this.isUp = 'Left';
            this.anims.play('CharacterLeft' + this.skin, true);
        }
        else if (cursors.right.isDown || keys.D.isDown) {
            this.setVelocityX(100);
            this.setVelocityY(0);
            this.status = 'walkingRight';
            this.isUp = 'Right';
            this.anims.play('CharacterRight' + this.skin, true);
        }
        else if (cursors.up.isDown || keys.W.isDown) {
            this.setVelocityX(0);
            this.setVelocityY(-100);
            this.status = 'walkingUp';
            this.isUp = 'Up';
            this.anims.play('CharacterUp' + this.skin, true);
        }
        else if (cursors.down.isDown || keys.S.isDown) {
            this.setVelocityX(0);
            this.setVelocityY(100);
            this.status = 'walkingDown';
            this.isUp = 'Down';
            this.anims.play('CharacterDown' + this.skin, true);
        }
        else {
            this.setVelocityX(0);
            this.setVelocityY(0);
            this.status = 'Idle';
            if (this.isUp == 'Up') {
                this.anims.play('CharacterIdleUp' + this.skin, true);
            }
            if (this.isUp == 'Down') {
                this.anims.play('CharacterIdleDown' + this.skin, true);
            }
            if (this.isUp == 'Right') {
                this.anims.play('CharacterIdleRight' + this.skin, true);
            }
            if (this.isUp == 'Left') {
                this.anims.play('CharacterIdleLeft' + this.skin, true);
            }
        }

        this.name.x = this.x;
        this.name.y = this.y - 30;
    }
}