

export default class Boss extends Phaser.Physics.Arcade.Sprite {
    constructor(scene, _x,_y ) {
        super(scene,0,0)
        this.scene = scene
        // this.scene.physics.world.enable(this)
        this.scene.add.existing(this);
        this.setInteractive();


        //設定角色
        this.setScale(1);
        this.setOrigin(0.5);


        // this.setBounce(1); //反弹（bounce）值

        // this.create();

        this.timer = null;
        this.status = 1;
        this.hp = 100;

        this.bossStatus = "Idle"; // Idle, Attack , Change
        this.bossFightMode = 1;  // normal:1  ,  ultimate: 1, 2 ,3
        this.bossAttackStatus = 'normal'; // normal, ultimate

        // mode normal 1
        this.normal_mode_1_attack1PosList = [];
        this.normal_mode_1_isAttackInit = false;
        this.normal_mode_1_attackNum = 3;
        this.normal_mode_1_attackTimes = 0;
        this.normal_mode_1_attackMaxTimes = 1;
        this.normal_mode_1_attackDelayTime = 50;

        this.normal_mode_1_atackTime = 10000;
        this.normal_mode_1_atackSpeed = 500;
        this.normal_mode_1_atackSpeedFire = 150;
        this.normal_mode_1_attackStatus = 'attack'; // attack, wait , end

        this.normal_mode_1_waitTime = 4.5;

        this.normal_mode_1_hitPlayerValue = 1;


        //mode 1 參數
        this.mode1_attack1PosList = [];
        this.mode1_isAttackInit = false;
        this.mode1_attackNum = 200;
        this.mode1_attackTimes = 0;
        this.mode1_attackMaxTimes = 1;
        this.mode1_attackDelayTime = 25; 

        this.mode1_waitTime = 4.5;
        this.mode1_hitPlayerValue = 2;

        //mode 2 參數
        this.mode2_attack1PosList = [];
        this.mode2_isAttackInit = false;
        this.mode2_attackNum = 3;
        this.mode2_attackTimes = 0;
        this.mode2_attackMaxTimes = 3;
        this.mode2_attackDelayTime = 50; 

        this.mode2_waitTime = 4.5;
        this.mode2_hitPlayerValue = 4;

        //mode 3 參數
        this.mode3_attack1PosList = [];
        this.mode3_isAttackInit = false;
        this.mode3_attackNum = 3;
        this.mode3_attackTimes = 0;
        this.mode3_attackMaxTimes = 1;
        this.mode3_attackDelayTime = 50; 

        this.mode3_waitTime = 4.5;
        this.mode3_hitPlayerValue = 3;



        this.isBossHitPlayer = 0;

        this.setTexture('Boss');

        this.anims.play('BossIdle');

        // this.body.immovable = true;
       
        
        // this.HpText = this.scene.add.text(320, 30, "Boss Hp: " + this.hp , {
        //     fontFamily: 'Arial',
        //     color: '#ff0000'
        // }).setFontSize(16).setOrigin(0);



        // this.bossTimer = setInterval(()=>{

        // }, 10000)

    }
    preload() {
    
    }

    delete(){
        clearTimeout(this.timer);
        // this.movePath = [];
        // this.HpText.destroy();
        this.destroy();
    }

    
    // create() {
        

    // }
    update() {

        // this.HpText.text =  "Boss Hp: " + this.hp;

        if(this.scene.GameStatus == "Load"){
            // if(this.y <= 60){
            //     this.setVelocityY(60);
            // }else if(this.y <= 120 && this.y > 60){
            //     this.setVelocityY(30);
            // }else{
            //     this.setVelocityY(0);
            //     this.scene.GameStatus = "Ready"
            // }
        }

        if(this.scene.GameStatus == "Start"){
            if(this.bossFightMode == 1){
                if(this.bossStatus == 'Idle') this.anims.play('BossIdle',true);
                if(this.bossStatus == 'Attack') this.anims.play('BossIdle2',true);
            }
            // if(this.bossFightMode == 2){
            //     if(this.bossStatus == 'Idle') this.anims.play('BossIdle',true);
            //     if(this.bossStatus == 'IdleAttack') this.anims.play('BossIdle2',true);
            //     if(this.bossStatus == 'Hide') this.anims.play('BossIdleHide',true);
            //     if(this.bossStatus == 'Show') this.anims.play('BossIdleShow',true);
            // }

        }

    }
}