

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
        this.hp = 2000;

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

        this.bossStatus = "Attack"; // Idle, Attack , Change
        this.bossFightMode = 0;  // 1, 2 ,3


        //mode 1 參數
        this.mode1_attack1PosList = [];
        this.mode1_isAttackInit = false;
        this.mode1_attackNum = 12;
        this.mode1_attackTimes = 0;
        this.mode1_attackMaxTimes = 1;

        this.mode1_waitTime = 4.5;

        //mode 2 參數
        this.mode2_attack1PosList = [];
        this.mode2_isAttackInit = false;
        this.mode2_attackFlyTimes = 0;
        this.mode2_attackFlyMaxTimes = 6;
        this.mode2_attackTimes = 0;
        this.mode2_attackMaxTimes = 1;

        this.mode2_waitTime = 4.5;

        this.isBossHitPlayer = 0;


        this.setSize(23, 38);
        this.setOffset(36, 32);

        this.anims.play('BossIdle');

        this.body.immovable = true;
       
        
        this.HpText = this.scene.add.text(320, 30, "Boss Hp: " + this.hp , {
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

        this.HpText.text =  "Boss Hp: " + this.hp;

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

        if(this.scene.GameStatus == "Start"){
            if(this.bossFightMode == 1){
                if(this.bossStatus == 'Idle') this.anims.play('BossIdle',true);
                if(this.bossStatus == 'Attack') this.anims.play('BossIdle2',true);
            }
            if(this.bossFightMode == 2){
                if(this.bossStatus == 'Idle') this.anims.play('BossIdle',true);
                if(this.bossStatus == 'IdleAttack') this.anims.play('BossIdle2',true);
                if(this.bossStatus == 'Hide') this.anims.play('BossIdleHide',true);
                if(this.bossStatus == 'Show') this.anims.play('BossIdleShow',true);
            }

        }

    }
}