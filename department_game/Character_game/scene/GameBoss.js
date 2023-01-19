import { config, PlayerInfo } from '../config'
// import { socket } from '../socket'
import Player from './Player.js'
import Slime from './Slime.js'
import Sword from './Sword.js'
import Smear from './Smear.js'
import Boss from './boss/Boss.js'
import { Game } from 'phaser'

let colliderActivated = true;

export default class GameBoss extends Phaser.Scene {
    constructor() {
        super('GameBoss');

    }
    create() {
        // 新增地圖
        this.map = this.make.tilemap({ key: 'mapBoss' });
        this.tileset = this.map.addTilesetImage('Full', 'tilesBoss');

        this.note = this.add.text(10, 300, "攻擊: Z / 奔跑: Shift / 移動: ↑ ↓ → ←", {
            fontFamily: 'Arial',
            color: '#ff0000'
        }).setFontSize(12).setOrigin(0);



        this.wall = this.map.createLayer('Wall', this.tileset, 0, 0);
        this.ground = this.map.createLayer('Map', this.tileset, 0, 0);
        this.object = this.map.createLayer('Object', this.tileset, 0, 0);

        this.boss = new Boss(this);
        this.boss.mode1_attack1PosList = this.map.objects[0].objects;
        this.boss.mode2_attack1PosList = this.map.objects[1].objects;

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

        this.physics.add.overlap(this.swordHitbox, this.boss, this.playerHitBoss);

        // this.physics.add.overlap(this.boss, this.playerContainer, () => {
        //     if (this.boss.isBossHitPlayer == 0 && this.player.hp > 0) {
        //         this.boss.isBossHitPlayer = 1;
        //         setTimeout(() => {
        //             this.player.hp = this.player.hp - 10;
        //             // this.player.HpText.text = this.player.hp;

        //             this.player.setTint(0xff0000);
        //             setTimeout(() => {
        //                 this.player.clearTint();

        //                     setTimeout(() => {
        //                         this.boss.isBossHitPlayer = 0;
        //                     }, 350)
        //             }, 50);

        //         }, 100)
        //     }
        // }, null, true);



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

        this.ReadyText = this.add.text(540, 180, "Ready !", {
            fontFamily: 'Arial',
            color: '#ff0000'
        }).setFontSize(24).setOrigin(0.5);
        this.physics.add.existing(this.ReadyText);


        this.gameoverText = this.add.text(240, 180, "GAME OVER !!", {
            fontFamily: 'Arial',
            color: '#ff0000'
        }).setFontSize(24).setOrigin(0.5);

        this.gameoverText.visible = false;
        this.gameoverText.setDepth(5);


        this.gameWinText = this.add.text(240, 180, "You Win!!", {
            fontFamily: 'Arial',
            color: '#00ff00'
        }).setFontSize(24).setOrigin(0.5);
        this.gameWinText.visible = false;
        this.gameWinText.setDepth(5);



    }
    playerHitBoss(swordHitbox, boss) {
        if (swordHitbox.isAttack) {
            if (swordHitbox.attackNum == 0 && boss.hp > 0) {
                swordHitbox.attackNum = 1;
                setTimeout(() => {
                    boss.hp = boss.hp - 10;
                    // boss.HpText.text = "Boss Hp: " + boss.hp;
                    boss.setTint(0xff0000);
                    setTimeout(() => {
                        boss.clearTint();
                        // if(boss.hp <= 0){
                        //     boss.setVelocity(0, 0);
                        //     boss.setTint(0x000000);
                        //     setTimeout(()=>{
                        //         boss.clearTint();
                        //         boss.deleteSlime();
                        //     },500)
                        // }
                    }, 50)

                }, 100)
            }
        }
    }

    BossAttackMode1() {
        var _this = this;
        if (this.boss.y > 40 && this.boss.bossStatus == 'Attack') {
            this.boss.setVelocityY(-40);
        } else if (this.boss.bossStatus == 'Attack') {
            this.boss.setVelocityY(0);
            if (!this.boss.mode1_isAttackInit) {

                this.boss.mode1_isAttackInit = true;
                this.boss.mode1_attackTimes = this.boss.mode1_attackTimes + 1;

                var NumList = [];
                for (var n = 0; n < this.boss.mode1_attack1PosList.length; n++) {
                    NumList.push(n);
                }

                for (var i = 0; i < this.boss.mode1_attackNum; i++) {  // 隨機 20 個區塊攻擊
                    setTimeout(() => {
                        var randNum = (Math.floor(Math.random() * NumList.length));
                        // console.log(_this.boss.mode1_attack1PosList.length,randNum);
                        var attackCicle = _this.add.sprite(_this.boss.mode1_attack1PosList[NumList[randNum]].x, _this.boss.mode1_attack1PosList[NumList[randNum]].y, 'AttackCicle');
                        var attackWater = _this.add.sprite(_this.boss.mode1_attack1PosList[NumList[randNum]].x, _this.boss.mode1_attack1PosList[NumList[randNum]].y - 64, 'AttackWater');
                        var attackShock = _this.add.sprite(_this.boss.mode1_attack1PosList[NumList[randNum]].x, _this.boss.mode1_attack1PosList[NumList[randNum]].y - 16, 'AttackShock');
                        attackWater.visible = false;
                        attackShock.visible = false;

                        attackCicle.play('AttackCicleRun', true);
                        // _this.bossAttackCicle.add(attackCicle);
                        NumList.splice(randNum, 1);
                        setTimeout(() => {
                            attackCicle.destroy();
                            attackWater.visible = true;
                            _this.physics.add.existing(attackWater);
                            attackWater.setOrigin(0.5, 0.5);
                            attackWater.setScale(2);
                            attackWater.body.setSize(16, 16);
                            attackWater.body.setOffset(40, 72);
                            attackWater.setDepth(3);
                            attackWater.play('AttackWater', true);
                            attackWater.isBossHitPlayer = 0;

                            setTimeout(() => {
                                attackWater.body.setCircle(8);
                                attackShock.visible = true;
                                attackShock.play('AttackShockRun', true);

                                _this.physics.add.overlap(attackWater, _this.playerContainer, () => {
                                    if (attackWater.isBossHitPlayer == 0 && _this.player.hp > 0) {
                                        attackWater.isBossHitPlayer = 1;
                                        setTimeout(() => {
                                            _this.player.hp = _this.player.hp - 30;
                                            // _this.player.HpText.text = this.player.hp;

                                            _this.player.setTint(0xff0000);
                                            setTimeout(() => {
                                                _this.player.clearTint();

                                                setTimeout(() => {
                                                    attackWater.isBossHitPlayer = 0;
                                                }, 850)
                                            }, 50);

                                        }, 100)
                                    }
                                }, null, true);


                                setTimeout(() => {
                                    attackShock.destroy();
                                }, 200);
                            }, 200);

                            setTimeout(() => {
                                attackWater.destroy();
                            }, 2000); // 水消失時間
                        }, 2000);
                    }, 500 + 500 * i); // 隨機 並 delay 500 ms 發動攻擊
                }

                setTimeout(() => {
                    _this.boss.mode1_isAttackInit = false;
                    _this.boss.bossStatus = 'Idle';

                    setTimeout(() => {
                        _this.boss.bossStatus = 'Attack';
                        if (_this.boss.mode1_attackMaxTimes == _this.boss.mode1_attackTimes) {
                            _this.boss.bossStatus = 'Idle';
                            _this.boss.bossFightMode = '0';
                            _this.boss.mode1_attackTimes = 0;
                            _this.randomMode();
                            _this.boss.bossStatus = 'Attack';
                        }
                    }, _this.boss.mode1_waitTime * 1000) //攻擊完畢 等待回到場地 接受玩家攻擊 5秒
                }, 500 * 10 + (_this.boss.mode1_attackNum / 3) * 1000) //發動攻擊後 等待5秒回到場地
            }


        } else {
            if (this.boss.y < 120) {
                this.boss.setVelocityY(40);
            } else {
                this.boss.setVelocityY(0);
            }
        }
    }

    BossAttackMode2() {
        let _this = this;
        if (this.boss.bossStatus == 'Attack') {
            if (!this.boss.mode2_isAttackInit) {

                this.boss.mode2_isAttackInit = true;
                this.boss.mode2_attackTimes = this.boss.mode2_attackTimes + 1;
                // this.boss.mode2_attack1PosList = this.boss.mode1_attack1PosList;

                var NumList = [];
                for (var n = 0; n < this.boss.mode2_attack1PosList.length; n++) {
                    NumList.push(n);
                }
                this.boss.mode2_attackFlyTimes = 0;
                for (var i = 0; i <= this.boss.mode2_attackFlyMaxTimes; i++) {  // 隨機 20 個區塊攻擊
                    setTimeout(() => {
                        _this.boss.bossStatus = 'Hide';
                        setTimeout(() => {
                            _this.boss.visible = false;
                            _this.boss.x = -100;
                            _this.boss.y = -100;
                            setTimeout(() => {
                                _this.boss.mode2_attackFlyTimes = _this.boss.mode2_attackFlyTimes + 1;
                                if (_this.boss.mode2_attackFlyMaxTimes + 1 == _this.boss.mode2_attackFlyTimes) {
                                    _this.boss.x = 240;
                                    _this.boss.y = 120;
                                    _this.boss.visible = true;
                                    _this.boss.bossStatus = 'Show';
                                    setTimeout(() => {
                                        _this.boss.bossStatus = 'Idle';
                                        _this.randomMode();
                                        setTimeout(() => {
                                            _this.boss.mode2_isAttackInit = false;
                                            _this.boss.bossStatus = 'Attack';
                                        }, _this.boss.mode2_waitTime * 1000);  // 攻擊完等待幾秒
                                    }, 500);

                                } else {
                                    var randNum = (Math.floor(Math.random() * NumList.length));
                                    _this.boss.x = _this.boss.mode2_attack1PosList[NumList[randNum]].x;
                                    _this.boss.y = _this.boss.mode2_attack1PosList[NumList[randNum]].y - 48;
                                    _this.boss.visible = true;
                                    _this.boss.bossStatus = 'Show';
                                    setTimeout(() => {
                                        _this.boss.bossStatus = 'IdleAttack';
                                    }, 500);
                                    setTimeout(() => {
                                        _this.boss.bossStatus = 'Idle';
                                    }, 1000);
                                    setTimeout(() => {
                                        let attackFire = _this.add.sprite(_this.boss.x - 4, _this.boss.y + 48, 'AttackFire');
                                        _this.physics.add.existing(attackFire);
                                        attackFire.setScale(2);
                                        attackFire.setOrigin(0.5, 0.5);
                                        attackFire.body.setOffset(21, 17);
                                        attackFire.body.setCircle(30);
                                        attackFire.play("AttackFireRun", true);
                                        attackFire.isBossHitPlayer = 0;


                                        _this.physics.add.overlap(attackFire, _this.playerContainer, () => {
                                            if (attackFire.isBossHitPlayer == 0 && _this.player.hp > 0) {
                                                attackFire.isBossHitPlayer = 1;
                                                setTimeout(() => {
                                                    _this.player.hp = _this.player.hp - 20;
                                                    // _this.player.HpText.text = this.player.hp;

                                                    _this.player.setTint(0xff0000);
                                                    setTimeout(() => {
                                                        _this.player.clearTint();
                                                        setTimeout(() => {
                                                            attackFire.isBossHitPlayer = 0;
                                                        }, 850)
                                                    }, 50);

                                                }, 100)
                                            }
                                        }, null, true);

                                        setTimeout(() => {
                                            attackFire.destroy();
                                        }, 750)
                                    }, 500);


                                    NumList.splice(randNum, 1);
                                }
                            }, 500);
                        }, 500)
                    }, 3000 * i);
                }
            }
        }
        // _this.bossSlimes.children.entries.forEach((slime)=>{
        //     _this.enemyFollows(slime,_this.playerContainer);
        // })
    }
    randomMode() {
        var num = Math.floor(Math.random() * 2) + 1;
        this.boss.bossFightMode = num;
        console.log(num);
    }
    enemyFollows(enemy, player) {
        if (enemy.body.velocity.x < 0) {
            enemy.setFlipX(true);

        } else if (enemy.body.velocity.x > 0) {
            enemy.setFlipX(false);
        }
        this.physics.moveToObject(enemy, player, 30);
    }
    update() {
        var _this = this;

        if (this.player.hp <= 0 || this.boss.hp <= 0) {
            this.GameStatus = "GameOver";
        }

        if (this.GameStatus == "Load") {
            this.boss.update();
        }
        if (this.GameStatus == "Ready") {
            if (this.ReadyText.x > 250) {
                this.ReadyText.body.setVelocityX(-200);
            } else if (this.ReadyText.x > -120 && this.ReadyText.x < 230) {
                this.ReadyText.body.setVelocityX(-200);
            } else if (this.ReadyText.x < -120) {
                this.ReadyText.destroy();
                this.GameStatus = "Start";
                this.randomMode();
            } else {
                this.ReadyText.body.setVelocityX(0);
                setTimeout(() => {
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

            if (this.boss.bossFightMode == 1) {
                this.BossAttackMode1();
            }

            if (this.boss.bossFightMode == 2) {
                this.BossAttackMode2();
            }
        }
        if (this.GameStatus == "GameOver") {
            this.boss.body.setVelocityX(0);
            this.boss.body.setVelocityY(0);
            this.playerContainer.body.setVelocityX(0);
            this.playerContainer.body.setVelocityY(0);
            this.player.status = 'Idle';

            if (this.player.hp <= 0) {
                this.gameoverText.visible = true;
            }
            if (this.player.hp > 0) {
                this.gameWinText.visible = true;
            }
        }



    }
}