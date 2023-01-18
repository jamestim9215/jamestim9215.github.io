

export default class Boss extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, _x,_y ) {
        super(scene, 240, 0)
        this.scene = scene
        this.scene.physics.world.enable(this)
        this.scene.add.existing(this);
        // this.setInteractive();


        //設定角色
        this.setScale(1.5);
        this.setOrigin(0.5);


        this.setBounce(1); //反弹（bounce）值
        // this.setCollideWorldBounds(true); //世界边界（bound）的碰撞
        // this.setDepth(1);

        this.create();
        // this.setAnims();

        this.timer = null;
        this.status = 1;
        this.hp = 3000;

        this.bossPos = {
            idle: [
                {name:"centerCenter" ,x: 240 ,y: 60},
                {name:"centerTop" ,x: 240 ,y: 120},
                {name:"centerBottom" ,x: 240 ,y: 220},
                {name:"leftTop" ,x: 360 ,y: 120},
                {name:"leftBottom" ,x: 360 ,y: 220},
                {name:"rightTop" ,x: 120 ,y: 120},
                {name:"rightBottom" ,x: 120 ,y: 220},
            ]
        }

        this.bossStatus = "Idle"; // Idle, Fight , Change
        this.bossFightMode = 1;  // 1, 2 ,3

        this.attack1PosList = [];
        this.isAttackInit = false;


        this.setSize(23, 38);
        this.setOffset(36, 32);

        this.anims.play('BossIdle');

        this.body.immovable = true;
       
        
        this.HpText = this.scene.add.text(64, 30, "Boss Hp: " + this.hp , {
            fontFamily: 'Arial',
            color: '#ff0000'
        }).setFontSize(16).setOrigin(0);



        // this.bossTimer = setInterval(()=>{

        // }, 10000)

    }
    preload() {
    
    }

    delete(){
        clearTimeout(this.timer);
        // this.movePath = [];
        this.HpText.destroy();
        this.destroy();
    }

    
    create() {
        

    }
    update() {

        if(this.scene.GameStatus == "Load"){
            if(this.y <= 60){
                this.setVelocityY(60);
            }else if(this.y <= 120 && this.y > 60){
                this.setVelocityY(30);
            }else{
                this.setVelocityY(0);
                this.scene.GameStatus = "Ready"
            }
        }

        // if(this.scene.GameStatus == "Start"){

            


        // }

    }
}