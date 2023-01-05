class Player extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, x, y) {
        super(scene, x, y, 'player', 0)
        this.scene = scene
        this.scene.physics.world.enable(this)
        this.scene.add.existing(this)

        //設定角色
        this.setScale(2);
        this.body.immovable = true;

        this.status = 'Idle';

        this.setBounce(0); //反弹（bounce）值
        this.setCollideWorldBounds(true); //世界边界（bound）的碰撞

        this.anims.play('CharacterIdle');
    }

    update(cursors,keys) {

            if (cursors.left.isDown || keys.A.isDown)
            {
                this.flipX = true;
                this.setVelocityX(-300);
                this.leftright = 'left';
                this.status = 'Run';
                if(this.status!='Jump')
                    this.anims.play('CharacterRun', true);
            }
            else if (cursors.right.isDown || keys.D.isDown)
            {
                this.flipX = false;
                this.setVelocityX(300);
                this.leftright = 'right';
                this.status = 'Run';
                if(this.status!='Jump')
                    this.anims.play('CharacterRun', true);
            }
            else
            {
                this.setVelocityX(0);
                this.status = 'Idle';
                this.anims.play('CharacterIdle', true);
            }

            if ((cursors.up.isDown || cursors.space.isDown) && this.body.blocked.down)
            {
                this.setVelocityY(-420);
                this.status = 'Jump';
                this.anims.play('CharacterJump', false);
            }

            if(!this.body.touching.down){
                this.status = 'Jump';
            }
    }
}