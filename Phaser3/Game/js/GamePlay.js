
class GamePlay extends Phaser.Scene{
    constructor(){
        super('GamePlay');
    }

    init(){
    }

    preload(){
       
    }

    create(){
        this.leftright = 'right';

        //***角色**********************************************************************************
        //設定角色
        this.player = this.physics.add.sprite(100, 150, 'CharacterIdle').setScale(2);
        this.player.body.setSize(16, 32, 20, 0);
        this.player.body.immovable = true;

        this.player.status = 'Idle';
        
        this.player.setBounce(0); //反弹（bounce）值
        this.player.setCollideWorldBounds(true); //世界边界（bound）的碰撞

        this.player.anims.play('CharacterIdle');
        //***角色 End**********************************************************************************

        
        this.cursors = this.input.keyboard.createCursorKeys();

        this.keys = this.input.keyboard.addKeys('A,W,D,S');
        
    }

    update(){
        
        this.movePlayerManager();
    }

    movePlayerManager(){

        if(this.player){

            if (this.cursors.left.isDown || this.keys.A.isDown)
            {
                this.player.flipX = -1;
                this.player.setVelocityX(-300);
                this.leftright = 'left';
                this.player.status = 'Run';
                this.player.anims.play('CharacterRun', true);
            }
            else if (this.cursors.right.isDown || this.keys.D.isDown)
            {
                this.player.flipX = 0;
                this.player.setVelocityX(300);
                this.leftright = 'right';
                this.player.status = 'Run';
                this.player.anims.play('CharacterRun', true);
            }else 
            {
                this.player.setVelocityX(0);
                this.player.status = 'Idle';
                this.player.anims.play('CharacterIdle', true);
            }

            if ((this.cursors.up.isDown || this.cursors.space.isDown  || this.keys.W.isDown) && this.player.body.velocity.y == 0)
            {
                this.player.setVelocityY(-300);
                this.player.status = 'Jump';
                this.player.anims.play('CharacterJump', true);
            }

            if(this.player.body.velocity.y != 0){
                this.player.status = 'Jump';
            }


            
            
        }

    }

    playGame(){
        
    }
}