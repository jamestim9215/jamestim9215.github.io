class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'player', 0)
        this.scene = scene
        this.scene.physics.world.enable(this)
        this.scene.add.existing(this)

        //設定角色
        this.setScale(2);
        this.body.immovable = true;

        this.skin = 1;
        this.status = 'Idle';
        this.isChangeSkin=false;

        this.setBounce(0); //反弹（bounce）值
        // this.setCollideWorldBounds(true); //世界边界（bound）的碰撞

        this.create();
        this.setAnims();

        this.anims.play('CharacterIdle'+this.skin);

        
    }

    setAnims(){

        var keyName = 'Character'+this.skin;

        this.setTexture(keyName);

        
    }

    create() {
        
        for(var i=1; i<=32;i++){

            var keyName = 'Character'+i;

            this.anims.create({
                key: "CharacterIdle"+i,
                frames: this.anims.generateFrameNumbers(keyName,{ frames: [ 1 ] }),
                frameRate: 5,
                repeat: -1
            })
    
            this.anims.create({
                key: "CharacterDown"+i,
                frames: this.anims.generateFrameNumbers(keyName,{ frames: [ 0,1,2,1,0 ] }),
                frameRate: 10,
                repeat: -1
            })
    
            this.anims.create({
                key: "CharacterLeft"+i,
                frames: this.anims.generateFrameNumbers(keyName,{ frames: [ 3,4,5,4,3 ] }),
                frameRate: 10,
                repeat: -1
            })
    
            this.anims.create({
                key: "CharacterRight"+i,
                frames: this.anims.generateFrameNumbers(keyName,{ frames: [ 6,7,8,7,6 ] }),
                frameRate: 10,
                repeat: -1
            })
    
            this.anims.create({
                key: "CharacterUp"+i,
                frames: this.anims.generateFrameNumbers(keyName,{ frames: [ 9,10,11,10,9 ] }),
                frameRate: 10,
                repeat: -1
            })
        }
    }

    update(cursors,keys) {
            if ((cursors.up.isDown || keys.W.isDown) && (cursors.left.isDown || keys.A.isDown))
            {
                this.setVelocityX(-100);
                this.setVelocityY(-100);
                this.status = 'walking';
                this.anims.play('CharacterLeft'+this.skin, true);
            }
            else if ((cursors.up.isDown || keys.W.isDown) && (cursors.right.isDown || keys.D.isDown))
            {
                this.setVelocityX(100);
                this.setVelocityY(-100);
                this.status = 'walking';
                this.anims.play('CharacterRight'+this.skin, true);
            }
            else if ((cursors.down.isDown || keys.S.isDown) && (cursors.left.isDown || keys.A.isDown))
            {
                this.setVelocityX(-100);
                this.setVelocityY(100);
                this.status = 'walking';
                this.anims.play('CharacterLeft'+this.skin, true);
            }
            else if ((cursors.down.isDown || keys.S.isDown) && (cursors.right.isDown || keys.D.isDown))
            {
                this.setVelocityX(100);
                this.setVelocityY(100);
                this.status = 'walking';
                this.anims.play('CharacterRight'+this.skin, true);
            }
            else if (cursors.left.isDown || keys.A.isDown)
            {
                this.setVelocityX(-100);
                this.setVelocityY(0);
                this.status = 'walking';
                this.anims.play('CharacterLeft'+this.skin, true);
            }
            else if (cursors.right.isDown || keys.D.isDown)
            {
                this.setVelocityX(100);
                this.setVelocityY(0);
                this.status = 'walking';
                this.anims.play('CharacterRight'+this.skin, true);
            }
            else if (cursors.up.isDown || keys.W.isDown)
            {
                this.setVelocityX(0);
                this.setVelocityY(-100);
                this.status = 'walking';
                this.anims.play('CharacterUp'+this.skin, true);
            }
            else if (cursors.down.isDown || keys.S.isDown)
            {
                this.setVelocityX(0);
                this.setVelocityY(100);
                this.status = 'walking';
                this.anims.play('CharacterDown'+this.skin, true);
            }
            else
            {
                this.setVelocityX(0);
                this.setVelocityY(0);
                this.status = 'Idle';
                this.anims.play('CharacterIdle'+this.skin, true);
            }
    }
}