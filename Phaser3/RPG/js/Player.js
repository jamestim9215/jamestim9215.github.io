

class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, _x,_y ,_playerInfo) {
        super(scene, _x, _y, 'player', 0)
        this.scene = scene
        this.scene.physics.world.enable(this)
        this.scene.add.existing(this)

        //設定角色
        this.setScale(1);
        this.body.immovable = true;

        this.skin = _playerInfo.skin;
        this.status = 'Idle';
        this.isChangeSkin = false;

        
        this.isMoving = false;
        this.movePath = [];

        this.setBounce(0); //反弹（bounce）值
        // this.setCollideWorldBounds(true); //世界边界（bound）的碰撞

        this.create();
        this.setAnims();
        // this.setOrigin(0,0);

        this.setSize(11, 20);
        this.setOffset(11, 10);

        this.moveSpeed = 1;

        // this.name = this.scene.add.bitmapText( x, y, "pixelFont",  _playerInfo.Name, 10).setOrigin(1,1);

        
        this.name = this.scene.add.text(_x, _y, _playerInfo.Name, {
            fontFamily: 'Arial',
            color: '#ffffff'
        }).setFontSize(10).setOrigin(0.5);
        // this.name.trackSprite(this, 0, 0, true);

        


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
                frames: this.anims.generateFrameNumbers(keyName, { frames: [0, 1, 2, 1] }),
                frameRate: 10,
                repeat: -1
            })

            this.anims.create({
                key: "CharacterLeft" + i,
                frames: this.anims.generateFrameNumbers(keyName, { frames: [3, 4, 5, 4] }),
                frameRate: 10,
                repeat: -1
            })

            this.anims.create({
                key: "CharacterRight" + i,
                frames: this.anims.generateFrameNumbers(keyName, { frames: [6, 7, 8, 7] }),
                frameRate: 10,
                repeat: -1
            })

            this.anims.create({
                key: "CharacterUp" + i,
                frames: this.anims.generateFrameNumbers(keyName, { frames: [9, 10, 11, 10] }),
                frameRate: 10,
                repeat: -1
            })
        }

        // setInterval(()=>{
        //     socket.emit("moveing", PlayerInfo);
        // }, 5000)

    }

    update(cursors, keys) {
        if(cursors && keys){
            if ((cursors.up.isDown || keys.W.isDown) && (cursors.left.isDown || keys.A.isDown)) {
                this.x = this.x - this.moveSpeed;
                this.y = this.y - this.moveSpeed;
                this.anims.play('CharacterLeft' + this.skin, true);
            }
            else if ((cursors.up.isDown || keys.W.isDown) && (cursors.right.isDown || keys.D.isDown)) {
                this.x = this.x + this.moveSpeed;
                this.y = this.y - this.moveSpeed;
                this.anims.play('CharacterRight' + this.skin, true);
            }
            else if ((cursors.down.isDown || keys.S.isDown) && (cursors.left.isDown || keys.A.isDown)) {
                this.x = this.x - this.moveSpeed;
                this.y = this.y + this.moveSpeed;
                this.anims.play('CharacterLeft' + this.skin, true);
            }
            else if ((cursors.down.isDown || keys.S.isDown) && (cursors.right.isDown || keys.D.isDown)) {
                this.x = this.x + this.moveSpeed;
                this.y = this.y + this.moveSpeed;
                this.anims.play('CharacterRight' + this.skin, true);
            }
            else if (cursors.left.isDown || keys.A.isDown || this.isUp == 'Left' && this.status == 'walking') {
                this.setVelocityY(0);
                this.x = this.x - this.moveSpeed;
                this.isUp = 'Left'
                this.anims.play('CharacterLeft' + this.skin, true);
            }
            else if (cursors.right.isDown || keys.D.isDown || this.isUp == 'Right' && this.status == 'walking') {
                this.setVelocityY(0);
                this.isUp = 'Right'
                this.x = this.x + this.moveSpeed;
                this.anims.play('CharacterRight' + this.skin, true);
            }
            else if (cursors.up.isDown || keys.W.isDown || this.isUp == 'Up' && this.status == 'walking') {
                this.setVelocityX(0);
                this.y = this.y - this.moveSpeed;
                this.isUp = 'Up'
                this.anims.play('CharacterUp' + this.skin, true);
            }
            else if (cursors.down.isDown || keys.S.isDown || this.isUp == 'Down' && this.status == 'walking') {
                this.setVelocityX(0);
                this.y = this.y + this.moveSpeed;
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
        }

        this.name.x = this.x;
        this.name.y = this.y - 35;
    }
}