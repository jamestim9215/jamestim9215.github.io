// import { config,PlayerInfo } from '../config'
// import { socket } from '../socket'

export default class Slime extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, _x,_y ) {
        super(scene, _x, _y)
        this.scene = scene
        this.scene.physics.world.enable(this)
        this.scene.add.existing(this);
        // this.setInteractive();


        //設定角色
        this.setScale(1);


        this.setBounce(1); //反弹（bounce）值
        // this.setCollideWorldBounds(true); //世界边界（bound）的碰撞
        this.setDepth(1);

        this.create();
        // this.setAnims();

        this.timer = null;
        this.status = 1;
        this.hp = 50 * (Math.floor(Math.random() * 3) + 1);


        this.setSize(26, 20);
        this.setOffset(3, 12);

        this.changeCharacterAnims();

        this.body.immovable = true;
       
        
        this.slimeHpText = this.scene.add.text(this.x, this.y - 15, this.hp, {
            fontFamily: 'Arial',
            color: '#ff0000'
        }).setFontSize(10).setOrigin(0.5);

    }

    deleteSlime(){
        clearTimeout(this.timer);
        // this.movePath = [];
        this.slimeHpText.destroy();
        this.destroy();
    }

    changeCharacterAnims(){
        var _this = this;
        
        this.anims.play('SlimeIdle');

        this.timer = setInterval(()=>{
            var animsType = Math.floor(Math.random() * 2) + 1;
            var vel_x = (Math.round(Math.random()) * 2 - 1) * 30
            var vel_y = (Math.round(Math.random()) * 2 - 1) * 10

            _this.status = animsType;
            if(_this.status == 1){
                // console.log("Idel");
                // _this.setVelocity(0, 0);
                _this.anims.play('SlimeIdle');
            }
            if(_this.status == 2){
                // console.log("Jump");
                _this.setVelocity(vel_x, vel_y);
                _this.anims.play('SlimeJump');
            }
        },Phaser.Math.Between(2,10) * 1000)
    
    }
    
    create() {
        if((Math.round(Math.random()) * 2 - 1) == 1) this.setFlipX(true);
        

    }
    update() {;
        if (this.body.velocity.x < 0) {
            this.setFlipX(true);
            
        } else if (this.body.velocity.x > 0) {
            this.setFlipX(false);
        }
        this.slimeHpText.x = this.x;
        this.slimeHpText.y = this.y - 15;
        // this.anims.play('SlimeJump',true)
       
    }
}