import { config, PlayerInfo } from '../config'
// import { socket } from '../socket'
import Player from './Player.js'
import Slime from './Slime.js'
import Sword from './Sword.js'
import Smear from './Smear.js'
import Boss from './boss/Boss.js'
import { Game } from 'phaser'


export default class GameBoss extends Phaser.Scene {
    constructor() {
        super('GameBoss');
    }
    create() {
        // 新增地圖
        this.map = this.make.tilemap({ key: 'mapBoss' });
        this.tileset = this.map.addTilesetImage('Full', 'tilesBoss');



        this.wall = this.map.createLayer('Wall', this.tileset, 0, 0);
        this.ground = this.map.createLayer('Map', this.tileset, 0, 0);

        this.boss = new Boss(this);
        this.boss.attack1PosList = this.map.objects[0].objects;

        PlayerInfo.x = 240;
        PlayerInfo.y = 224;

        this.playerContainer = this.add.container(PlayerInfo.x, PlayerInfo.y);
        this.playerContainer.setSize(16, 26);
        this.physics.world.enable(this.playerContainer);

        this.player = new Player(this, PlayerInfo.x, PlayerInfo.y, PlayerInfo, 'Player');
        this.player.anims.play('CharacterIdleUp', true);
        this.player.isUp = 'Up';

        this.sword = new Sword(this);
        this.smear = new Smear(this);

        this.swordHitbox = this.add.rectangle(0, 0, 16, 16, 0xffffff, 0).setOrigin(0.5, 0.5);
        this.swordHitbox.setActive(false).setVisible(false);
        this.swordHitbox.isAttack = false;
        this.swordHitbox.attackNum = 0;
        this.physics.add.existing(this.swordHitbox);

        this.playerContainer.add(this.player);
        this.playerContainer.add(this.sword);
        this.playerContainer.add(this.smear);
        this.playerContainer.add(this.swordHitbox);



        this.isInit = false;

        this.GameStatus = 'Load'; // Load, Start, Finish


        this.wall.visible = false;
        this.wall.setDepth(0);
        this.ground.setDepth(0);

        this.boss.setDepth(1);
        this.playerContainer.setDepth(2);


        this.wall.setCollisionByExclusion([-1])


        this.physics.add.collider(this.playerContainer, this.wall);


        this.cursors = this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys('A,W,D,S,C,Z');

        this.cameras.main.setBounds(0, 0, 800, 800);
        // this.cameras.main.startFollow(this.playerContainer, true);

        this.ReadyText = this.add.text(540, 180, "Ready !" , {
            fontFamily: 'Arial',
            color: '#ff0000'
        }).setFontSize(24).setOrigin(0.5);
        this.physics.add.existing(this.ReadyText);

        
        this.bossAttackCicle = this.add.group();


    }

    update() {
        var _this = this;
        if (this.GameStatus == "Load") {
            this.boss.update();
        }
        if (this.GameStatus == "Ready") {
            if(this.ReadyText.x > 250){
                this.ReadyText.body.setVelocityX(-200);
            }else if(this.ReadyText.x > -120 && this.ReadyText.x < 230){
                this.ReadyText.body.setVelocityX(-200);
            }else if(this.ReadyText.x < -120){
                this.ReadyText.destroy();
                this.GameStatus = "Start"
            }else{
                this.ReadyText.body.setVelocityX(0);
                setTimeout(()=>{
                    this.ReadyText.text = " Fight !!";
                    this.ReadyText.body.setVelocityX(-200);
                }, 1000)
            }
            // console.log("Ready!");
        }

        if (this.GameStatus == "Start") {
            this.player.update(this.cursors, this.keys);
            this.sword.update(this.cursors, this.keys);
            this.smear.update(this.cursors, this.keys);

            this.boss.update();

            if (this.playerContainer.y > this.boss.y + 24) {
                this.playerContainer.setDepth(2);
                this.boss.setDepth(1);
            } else {
                this.playerContainer.setDepth(1);
                this.boss.setDepth(2);
            }

            if(this.boss.bossFightMode == 1){

                if(this.boss.y > 60) {
                    this.boss.setVelocityY(-30);
                }else{
                    this.boss.setVelocityY(0);
                    if(!this.boss.isAttackInit){

                        var NumList = [];
                        for(var n = 0; n< this.boss.attack1PosList.length; n++){
                            NumList.push(n);
                        }
                        
                        for(var i=0; i < 10 ; i++){
                            setTimeout(()=>{
                                var randNum = (Math.floor(Math.random() * NumList.length));
                                // console.log(_this.boss.attack1PosList.length,randNum);
                                var attackCicle = _this.add.sprite(_this.boss.attack1PosList[NumList[randNum]].x,_this.boss.attack1PosList[NumList[randNum]].y, 'AttackCicle');
                                var attackWater = _this.add.sprite(_this.boss.attack1PosList[NumList[randNum]].x,_this.boss.attack1PosList[NumList[randNum]].y-64, 'AttackWater');
                                attackWater.visible = false;

                                attackCicle.play('AttackCicleRun', true);
                                // _this.bossAttackCicle.add(attackCicle);
                                NumList.splice(randNum,1);
                                setTimeout(()=>{
                                    attackCicle.destroy();
                                    attackWater.visible = true;
                                    _this.physics.add.existing(attackWater);
                                    attackWater.setOrigin(0.5,0.5);
                                    attackWater.setScale(2);
                                    attackWater.body.setSize(16, 16);
                                    attackWater.body.setOffset(40, 72);
                                    attackWater.setDepth(3);
                                    attackWater.play('AttackWater', true);
                                    setTimeout(()=>{
                                        attackWater.destroy();
                                    }, 3000);
                                }, 2000);
                            }, 500 + 500 * i);
                            
                        }

                        setTimeout(()=>{
                            this.boss.isAttackInit = false;
                        }, 500 * 10 + 3000)

                        this.boss.isAttackInit = true;
                    }
                    


                }
            }
        }



    }
}