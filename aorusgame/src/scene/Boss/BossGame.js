import { CreateDrawMap, UpdateDrawMap } from "@/common/CommonDrawMap.js";
import { config, PlayerInfo,
  setPlayerPosId,
  setPlayerDirection, } from "@/config";
import Boss from "@/common/Boss/Boss.js"
import eventsCenter from '@/common/EventsCenter'

// import { createGameGui,updatedGameGui } from '@/common/ui-elements/GameGui.js'

export default class BossGame extends Phaser.Scene {
  constructor() {
    super("BossGame");
  }
  create() {

    console.log("Create BossGame");
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    this.GameStatus = "play"; // play, pause, stop

    this.scenePage = "Boss";
    this.playerName = "Player1";
    this.BossGameStatus = "Init"; // Init ,Load, Waiting, Ready, play, pause, stop

    // 新增地圖

    this.Map = this.make.tilemap({ key: "CyberBossJSON" });
    this.tileSet1 = this.Map.addTilesetImage(
      "CP_WallsA4",
      "CyberBoss1TileImg"
    );
    this.tileSet2 = this.Map.addTilesetImage(
      "Low-TownB",
      "CyberBoss2TileImg"
    );
    this.tileSet3 = this.Map.addTilesetImage(
      "Low-TownD",
      "CyberBoss3TileImg"
    );
    this.tileSet4 = this.Map.addTilesetImage(
      "Mid-TownA5",
      "CyberBoss4TileImg"
    );
    this.tileSet5 = this.Map.addTilesetImage(
      "Mid-TownD",
      "CyberBoss5TileImg"
    );
    this.tileSet6 = this.Map.addTilesetImage(
      "Tileset",
      "CyberBoss6TileImg"
    );

    this.Ground = this.Map.createLayer(
      "Ground",
      [
        this.tileSet1,
        this.tileSet2,
        this.tileSet3,
        this.tileSet4,
        this.tileSet5,
        this.tileSet6,
      ],
      0,
      0
    );
    this.MapGround = this.Map.createLayer(
      "Map",
      [
        this.tileSet1,
        this.tileSet2,
        this.tileSet3,
        this.tileSet4,
        this.tileSet5,
        this.tileSet6,
      ],
      0,
      0
    );
    this.Object = this.Map.createLayer(
      "Object",
      [
        this.tileSet1,
        this.tileSet2,
        this.tileSet3,
        this.tileSet4,
        this.tileSet5,
        this.tileSet6,
      ],
      0,
      0
    );
    this.ObjectPos = this.Map.createFromObjects("Object", "Object", {
      key: "Object",
    });

    this.Ground.setDepth(0);
    this.MapGround.setDepth(0);
    this.Object.setDepth(0);

    this.cameras.main.setBounds(
      0,
      0,
      this.Map.widthInPixels,
      this.Map.heightInPixels
    );

    CreateDrawMap(this);

    // if(this.scene.get('GameUI')){
    //   this.scene.get('GameUI').restart();
    // }

    // if(this.scene.get('BossUI')){
    //   this.scene.get('BossUI').restart();
    // }


    this.BossDoor = null;

    this.objectList.children.entries.map((item)=>{
      if(item.name == 'BossDoor'){
        this.BossDoor = item;
        console.log(this.BossDoor);
        this.BossDoor.body.enable = false;
      }
    })

    PlayerInfo.Weapon = "Sword1";
    this.swordHitbox.setVisible(true);
    this.swordHitbox.setActive(false);
    this.bossInitPosItem = null;

    // 產生Boss 與 動畫
    this.Map.objects.map((item)=>{
      if(item.name == "BossPosition"){
        item.objects.map((items)=>{
            items.properties.map((item2)=>{
                if(item2.name == 'Position' && item2.value == 0){
                    //站著
                    this.anims.create({
                        key: "BossIdle",
                        frames: this.anims.generateFrameNumbers('Boss', { frames: [0,1,2,3,4] }),
                        frameRate: 6,
                        repeat: -1
                    })
                    //Attack1
                    this.anims.create({
                      key: "BossAttack1Run1",
                      frames: this.anims.generateFrameNumbers('BossAttack1', { frames: [0,1,2,3,4] }),
                      frameRate: 15,
                      repeat: 0
                    })
                    this.anims.create({
                        key: "BossAttack1Run2",
                        frames: this.anims.generateFrameNumbers('BossAttack1', { frames: [5,6] }),
                        frameRate: 4,
                        repeat: -1
                    })
                    this.anims.create({
                        key: "BossAttack1Run3",
                        frames: this.anims.generateFrameNumbers('BossAttack1', { frames: [4,2,0] }),
                        frameRate: 10,
                        repeat: 0
                    })
                    this.anims.create({
                        key: "BossDeadRun",
                        frames: this.anims.generateFrameNumbers('BossDead', { frames: [0,1,2,3,4] }),
                        frameRate: 10,
                        repeat: 0
                    })
                    this.anims.create({
                        key: "BossDeadIdle",
                        frames: this.anims.generateFrameNumbers('BossDead', { frames: [4] }),
                        frameRate: 15,
                        repeat: 0
                    })
                    this.bossInitPosItem = items;
                    var boss_x = items.x;
                    var boss_y = items.y;
                    this.bossContainer = this.add.container(boss_x,boss_y);
                    this.physics.world.enable(this.bossContainer);

                    let boss = new Boss(this,0,0);

                    this.bossBody = new Phaser.GameObjects.Rectangle(this,0,18,64,64,0x00ff00,0.0).setOrigin(0.5);
                    this.add.existing(this.bossBody);
                    this.physics.world.enable(this.bossBody);

                    this.bossContainer.add(boss);
                    this.bossContainer.add(this.bossBody);
                    this.bossContainer.setSize(64, 70);
                    this.bossContainer.setDepth(1);

                }
            });
        });
      }
    });

    this.Map.objects.map((item)=>{
      if(item.name == "BossAttack1"){
        this.bossContainer.mode1_attackPosList = item.objects;
      }
      if(item.name == "BossAttack2"){
        this.bossContainer.mode2_attackPosList = item.objects;
      }
      if(item.name == "BossAttack3"){
        this.bossContainer.mode3_attackPosList = item.objects;
      }
    });

    this.attack3Container = null;

    if(PlayerInfo.Flag.indexOf('boss_quest_1') == -1 && PlayerInfo.Flag.indexOf('boss_quest_2') == -1){

      this.initBossTarget = this.add.rectangle(this.Map.widthInPixels/2,this.Map.heightInPixels/2 ,256,256,0x00ff00,0.0).setOrigin(0.5);
      this.add.existing(this.initBossTarget);
      this.physics.world.enable(this.initBossTarget);

      this.isInitTarget = false;
      this.physics.add.overlap(this.initBossTarget, this.playerContainer, function() {
        if (!this.isInitTarget) {
            this.isInitTarget = true;

            let item ={
              name :"BossTarget",
              messageId : 'boss_quest_1_1'
            };

            this.GameStatus = "pause";
            this.playerContainer.body.setVelocityY(0);
            this.playerContainer.body.setVelocityX(0);
            this.scene.get('MsgUI').TargetShowMsg(this,item);
            this.initBossTarget.destroy();
        }
      }, null, this);

    }



    //玩家觸碰Boss 每半秒扣血量
    this.timer = this.time.addEvent({
        delay: 250,
        callback: this.playerOverlapBossEvent,
        callbackScope: this,
        loop: true
    });

    // 玩家攻擊BOSS本體
    this.swordHitBoxAttackBoss = false;
    this.physics.add.overlap(this.swordHitbox, this.bossBody, function() {
        let isHitboxActiveAndVisible = this.swordHitbox.active && this.swordHitbox.visible;
        if (isHitboxActiveAndVisible && !this.swordHitBoxAttackBoss) {
            this.swordHitBoxAttackBoss = true
            // console.log("完成攻擊！");
            let boss = this.bossContainer.list.find(obj => obj instanceof Boss);
            boss.setTint(0xff0000);
            setTimeout(() => {
              boss.clearTint();
            }, 50);
            this.time.delayedCall(100, function() {
              this.swordHitBoxAttackBoss = false;
              this.hitBossHp(1);
              
          }, [], this);

        }
    }, null, this);


    eventsCenter.emit('Change-boss-game-status', this.BossGameStatus);

    this.isPlayerDie = false;
    this.isBossDie = false;

  }


  playerOverlapBossEvent() {
    // console.log("碰到魔王扣血！");
    // this.hitPlayerHp(5);
  }

  hitPlayerHp(value){
    let playerHp = this.scene.get('PlayerUI').hp;
    if(playerHp > 0 && this.BossGameStatus=="Play"){
      this.scene.get('PlayerUI').hp = playerHp - value;
    }

    if(playerHp < 0) this.scene.get('PlayerUI').hp = 0;
  }
  hitBossHp(value){
    let bossHp = this.scene.get('BossUI').hp;
    if(bossHp>0){
      this.scene.get('BossUI').hp = bossHp - value;
    }
    if(bossHp<0){
      this.scene.get('BossUI').hp = 0;
    }
  }

  update() {
    UpdateDrawMap(this);
    const isCurrentlyOverlapping = this.physics.overlap(this.bossBody, this.playerContainer);

    if (!isCurrentlyOverlapping) {
        this.timer.paused = true;
    } else if (isCurrentlyOverlapping) {
        this.timer.paused = false;
    }

    if(this.bossContainer.y + 50 > this.playerContainer.y){
      this.bossContainer.setDepth(2);
      this.playerContainer.setDepth(1.5);
    }else{
      this.bossContainer.setDepth(1.5);
      this.playerContainer.setDepth(2);
    }

    this.updateGameMode();

    this.BossTimer = null; 
    this.isReady = false;
    // updatedGameGui(this)
  }

  updateGameMode(){

    var _this = this;
    let boss = this.bossContainer.list.find(obj => obj instanceof Boss);
    
    let playerHp = this.scene.get('PlayerUI').hp;
    let bossHp = this.scene.get('BossUI').hp;

    if (this.BossGameStatus == "Init") {
      
      if(PlayerInfo.Flag.indexOf('boss_quest_1') != -1 || PlayerInfo.Flag.indexOf('boss_quest_2') != -1){
        console.log("???AAAAAAAAAAAAAAAAAAAAA");
        this.BossGameStatus = "Load"
        eventsCenter.emit('Change-boss-game-status', this.BossGameStatus);
      }
    }

    if (this.BossGameStatus == "Load") {
      this.GameStatus = "pause";
      if(this.BossTimer == null){
        this.BossTimer = setTimeout(() => {
          this.BossGameStatus = "Waiting";
          _this.scene.get('PlayerUI').initFun();
          _this.scene.get('BossUI').initFun();
          eventsCenter.emit('Change-boss-game-status', this.BossGameStatus);
          clearTimeout(this.BossTimer);
        }, 2000)
      }
      
    }

    if (this.BossGameStatus == "Waiting") {
      if(this.bossContainer.y < this.Map.heightInPixels / 2){
        this.bossContainer.body.setVelocityY(80);
      }else{
        this.bossContainer.body.setVelocityY(0);
        // this.BossGameStatus = "Ready";
      }
      this.GameStatus = "pause";
      if(this.BossTimerReady == null){
        this.BossTimerReady = setTimeout(() => {
        this.scene.get('PlayerUI').PlayerUIStatus = "Show";
          _this.BossGameStatus = "Ready";
          eventsCenter.emit('Change-boss-game-status', this.BossGameStatus);
          clearTimeout(this.BossTimerReady);
          _this.BossTimerReady = null;
        }, 2000)
      }
    }

    if(this.BossGameStatus == "Ready"){

      if(!this.isReady){
        this.isReady = true;
        this.scene.get('BossUI').startTimer();
        let isReadyTimer = setTimeout(() => {
          _this.BossGameStatus = "Play";
          eventsCenter.emit('Change-boss-game-status', this.BossGameStatus);
          boss.bossStatus = 'Idle';
          clearTimeout(isReadyTimer);
          this.isReady = false;
          _this.GameStatus = "play";
        },2000);
      }
      

    }
    if(this.BossGameStatus == "Play"){
      if(boss.bossAttackStatus=='normal' && boss.bossFightMode == 1){
        this.BossAttackNormalMode1();
      }


      if(boss.bossAttackStatus=='ultimate' && boss.bossFightMode == 1){
        this.BossAttackUltimateMode1();
      }
      if(boss.bossAttackStatus=='ultimate' && boss.bossFightMode == 2){
        this.BossAttackUltimateMode2();
      }
      if(boss.bossAttackStatus=='ultimate' && boss.bossFightMode == 3){
        this.BossAttackUltimateMode3();
      }
    }

    if(playerHp <= 0 || bossHp<=0){
      this.BossGameStatus = "GameOver";
      eventsCenter.emit('Change-boss-game-status', this.BossGameStatus);
    }

    
    if (this.BossGameStatus == "GameOver") {

        this.scene.get('BossUI').resetTimer();
        this.scene.get('PlayerUI').PlayerUIStatus = "Hide";
        this.bossContainer.body.setVelocityX(0);
        this.bossContainer.body.setVelocityY(0);


        if(playerHp<=0 && this.isPlayerDie==false){
          console.log("玩家死亡！");
          this.isPlayerDie = true;
          this.GameStatus = "pause";
          this.playerContainer.body.setVelocityX(0);
          this.playerContainer.body.setVelocityY(0);
          let UIOutTimer = setTimeout(() => {
             _this.scene.get('BossUI').resetTimer();

            clearTimeout(UIOutTimer);
          } , 3000);

          let playerOutTimer = setTimeout(() => {
            setPlayerPosId(2);
            setPlayerDirection('Down');
            _this.BossGameStatus = "Done";
            eventsCenter.emit('Change-boss-game-status', this.BossGameStatus);
            // _this.BossGameStatus = "Init";
            // eventsCenter.emit('Change-boss-game-status', this.BossGameStatus);
            _this.scene.get('BossUI').initFun();
            _this.scene.get('PlayerUI').initFun();
            _this.scene.stop('BossUI');

            _this.cameras.main.fadeOut(1000, 0, 0, 0);
            _this.cameras.main.once(
              Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE,
              (cam, effect) => {
                _this.scene.stop('BossGame');
                _this.scene.start("MainPreload");
              }
            );

            clearTimeout(playerOutTimer);
          }, 4000);
        }  
        
        
        
        
        if(bossHp<=0 && this.isBossDie==false){

          this.attackNormalTimer.pause = true;

          console.log("boss die");

          let BossDieFire = _this.add.sprite(this.bossContainer.x,this.bossContainer.y, 'BossDieFire');
          BossDieFire.play('BossDieFireRun',true);

          let bossDieTimer = setTimeout(() => {
            
            BossDieFire.destroy();
            boss.play('BossDeadRun',true);
            clearTimeout(bossDieTimer);
          }, 1000);

          this.isBossDie = true;
          this.GameStatus = "play";

          this.GameWinLeaveTarget = this.add.rectangle(this.Map.widthInPixels/2,this.Map.heightInPixels - 32 ,20,20,0x00ff00,0.3).setOrigin(0.5);
          this.add.existing(this.GameWinLeaveTarget);
          this.physics.world.enable(this.GameWinLeaveTarget);

          this.isInitTarget = false;
          this.physics.add.overlap(this.GameWinLeaveTarget, this.playerContainer, function() {
            if (!this.isInitTarget) {
                this.isInitTarget = true;

                this.playerContainer.body.setVelocityY(0);
                this.playerContainer.body.setVelocityX(0);
                this.GameWinLeaveTarget.destroy();
                
                this.BossDoor.body.enable = true;
 
              PlayerInfo.Flag.push('boss_quest_1_2')


              // _this.cameras.main.fadeOut(1000, 0, 0, 0);
              _this.cameras.main.once(
                Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE,
                (cam, effect) => {

                _this.BossGameStatus = "Done";
                eventsCenter.emit('Change-boss-game-status', this.BossGameStatus);
                _this.scene.get('BossUI').initFun();
                _this.scene.get('PlayerUI').initFun();
                _this.scene.stop('BossUI');
                _this.scene.stop('BossGame');
                  _this.scene.stop('BossGame');
                }
              );
            }
        }, null, this);

          
        }    

      
      
    }




  }
  changeNormalUltimateMode(boss){
    // let num = Math.floor(Math.random() * 2) + 1;
    // if(num==1){
    //   boss.bossAttackStatus='normal'
    // }else{
    //   boss.bossAttackStatus='ultimate'
    // }
    // boss.bossAttackStatus='ultimate';

    boss.bossAttackStatus=='normal'?boss.bossAttackStatus='ultimate':boss.bossAttackStatus='normal';
    this.randomMode(boss);
  }
  randomMode(boss) {
    var num = 0;
    if(boss.bossAttackStatus=='normal'){
      num = Math.floor(Math.random() * 1) + 1;
    }else{
      num = Math.floor(Math.random() * 3) + 1;
    }
    // num = 1;
    boss.bossFightMode = num;
  }

  BossMoveToTarget(boss, target, speed) {
    const distanceX = target.x - boss.x;
    const distanceY = target.y - boss.y;

    const distance = Math.sqrt(distanceX * distanceX + distanceY * distanceY);
    const threshold = 1; // 調整這個閾值來控制 Boss 停止的距離

    if (distance > threshold) {
      const angle = Math.atan2(distanceY, distanceX);
      boss.body.setVelocityX(Math.cos(angle) * speed);
      boss.body.setVelocityY(Math.sin(angle) * speed);
    } else {
      boss.body.setVelocity(0, 0); // 停止移動
      // 在這裡可以執行 Boss 追到目標後的相應操作
    }
  }

  bossAttackNormal(){

    if (this.BossGameStatus == "Play"){

      const attackSprite = this.physics.add.sprite(this.bossContainer.x, this.bossContainer.y, 'bossAttackNormalFireBall');
      attackSprite.body.setCircle(16);
      attackSprite.play('AttackNormalBallRun');
      let boss = this.bossContainer.list.find(obj => obj instanceof Boss);
      this.BossMoveToTarget(attackSprite, this.playerContainer, boss.normal_mode_1_atackSpeedFire); // 攻击速度为 200

      // 玩家被普通攻擊打到
      this.attackSpritHitPlayer = false;
      this.physics.add.overlap(attackSprite, this.playerContainer, function() {
          if (!this.attackSpritHitPlayer) {
              this.attackSpritHitPlayer = true
              // console.log("普攻碰到玩家！");
              this.time.delayedCall(100, function() {
                this.attackSpritHitPlayer = false;
                attackSprite.destroy();
                this.hitPlayerHp(boss.normal_mode_1_hitPlayerValue);
                
            }, [], this);

          }
      }, null, this);

      // 设置一个定时器，在一段时间后销毁攻击精灵
      this.time.delayedCall(2000, () => {
        attackSprite.destroy();
      }, [], this);
    }

  }

  BossAttackNormalMode1(){
    var _this = this;

    let boss = this.bossContainer.list.find(obj => obj instanceof Boss);
    boss.bossStatus = 'Attack';
    if (boss.bossStatus == 'Attack') {

      if (!boss.normal_mode_1_isAttackInit) {

        
        
        // 创建一个计时器，每隔一段时间触发 Boss 的攻击
        this.attackNormalTimer = this.time.addEvent({
          delay: boss.normal_mode_1_atackSpeed, // 攻击间隔时间（以毫秒为单位）
          loop: true,
          callback: this.bossAttackNormal,
          callbackScope: this,
        });

        boss.normal_mode_1_attackStatus = 'attack';
        console.log("AttackNormalMode1 Start");
        boss.normal_mode_1_isAttackInit = true;

        let setTimerNormalMode1 = setTimeout(() => {
          boss.normal_mode_1_attackStatus = 'wait';
          _this.attackNormalTimer.remove();
          clearTimeout(setTimerNormalMode1);
        }, boss.normal_mode_1_atackTime);
        

      }

      if(boss.normal_mode_1_attackStatus == 'attack'){
        const player = this.playerContainer; 
        const bossContainer = this.bossContainer;

        this.BossMoveToTarget( bossContainer, player, 50);
      }
      if(boss.normal_mode_1_attackStatus == 'wait'){
        let target = this.bossInitPosItem;
        target.y = this.Map.heightInPixels / 2;
        const bossContainer = this.bossContainer;
        this.BossMoveToTarget( bossContainer, target, 50);

        if(bossContainer.body.velocity.x == 0 && bossContainer.body.velocity.y == 0){
          boss.normal_mode_1_attackStatus = 'end';
          console.log(boss.normal_mode_1_attackStatus);
        }
      }
      if(boss.normal_mode_1_attackStatus == 'end'){
        boss.bossStatus = 'Idle';
        boss.normal_mode_1_isAttackInit = false;
        boss.normal_mode_1_attackStatus = 'none';
        console.log(boss.normal_mode_1_attackStatus);

        this.changeNormalUltimateMode(boss);
        boss.play('BossIdle1',true);
      }
    }
  }
  
  BossAttackUltimateMode1() {
    var _this = this;
    // console.log("BossAttackUltimateMode1");

    let boss = this.bossContainer.list.find(obj => obj instanceof Boss);
    boss.bossStatus = 'Attack';
    if (boss.bossStatus == 'Attack') {
      // this.bossContainer.body.setVelocityY(0);
      if (!boss.mode1_isAttackInit) {
        console.log("AttackMode1 Start");
        boss.mode1_isAttackInit = true;
        boss.mode1_attackTimes = boss.mode1_attackTimes + 1;
        boss.play('BossAttack1Run1',true);
        var NumList = [];
        for (var n = 0; n < this.bossContainer.mode1_attackPosList.length; n++) {
            NumList.push(n);
        }

        for (var i = 0; i < boss.mode1_attackNum; i++) {  // 隨機 20 個區塊攻擊
          let attackTimer1 = setTimeout(() => {
            var randNum = (Math.floor(Math.random() * NumList.length));
            // console.log(_this.bossContainer.mode1_attackPosList.length,randNum);
            var attackCicle = _this.add.sprite(_this.bossContainer.mode1_attackPosList[NumList[randNum]].x, _this.bossContainer.mode1_attackPosList[NumList[randNum]].y, 'AttackCicle');
            var attackWater = _this.add.sprite(_this.bossContainer.mode1_attackPosList[NumList[randNum]].x, _this.bossContainer.mode1_attackPosList[NumList[randNum]].y, 'AttackWater');
            var attackShock = _this.add.sprite(_this.bossContainer.mode1_attackPosList[NumList[randNum]].x, _this.bossContainer.mode1_attackPosList[NumList[randNum]].y - 16, 'AttackShock');
            attackWater.visible = false;
            attackShock.visible = false;

            attackCicle.play('AttackCicleRun', true);

            // _this.bossAttackCicle.add(attackCicle);
            NumList.splice(randNum, 1);
            let attackTimer2 = setTimeout(() => {
                attackCicle.destroy();
                attackWater.visible = true;
                _this.physics.add.existing(attackWater);
                attackWater.setOrigin(0.5, 1);
                attackWater.setScale(1);
                attackWater.body.setSize(32, 32);
                attackWater.body.setOffset(16, 178);
                attackWater.body.setCircle(16);
                attackWater.setDepth(3);
                attackWater.play('AttackWaterRun', true);
                attackWater.isBossHitPlayer = 0;

                let attackShockVisibleTimer = setTimeout(() => {
                    attackShock.visible = true;
                    attackShock.play('AttackShockRun', true);

                    _this.physics.add.overlap(attackWater, _this.playerContainer, () => {
                        if (attackWater.isBossHitPlayer == 0) {
                            attackWater.isBossHitPlayer = 1;
                            setTimeout(() => {
                              console.log("Mode1 攻擊到玩家");
                              _this.hitPlayerHp(boss.mode1_hitPlayerValue);

                                _this.playerContainer.list[0].setTint(0xff0000);
                                setTimeout(() => {
                                  _this.playerContainer.list[0].clearTint();

                                    setTimeout(() => {
                                        attackWater.isBossHitPlayer = 0;
                                    }, 850)
                                }, 50);

                            }, 100)
                        }
                    }, null, true);


                    let attackShockDestroyTimer = setTimeout(() => {
                        attackShock.destroy();
                        clearTimeout(attackShockDestroyTimer);
                    }, 200);
                  clearTimeout(attackShockVisibleTimer);
                }, 200);

                let attackWaterDestroyTimer = setTimeout(() => {
                    attackWater.destroy();
                    clearTimeout(attackWaterDestroyTimer);
                }, 500); // 水消失時間
              clearTimeout(attackTimer2);
            }, 2000);
            clearTimeout(attackTimer1);
          }, boss.mode1_attackDelayTime + boss.mode1_attackDelayTime * i); // 隨機 並 delay 500 ms 發動攻擊
        }

        let setTimer = setTimeout(() => {
          boss.play('BossAttack1Run2',true);
          clearTimeout(setTimer);
        }, 250)
        let setTimer2 = setTimeout(() => {
          boss.play('BossAttack1Run3',true);
          clearTimeout(setTimer2);
        }, (boss.mode1_attackNum + 1) * boss.mode1_attackDelayTime + 2750)

        let timerDown1= setTimeout(() => {
          boss.mode1_isAttackInit = false;
          boss.bossStatus = 'Idle';

          // let timmerStatus = setTimeout(() => {
          //   console.log("?????????");
          //    boss.bossStatus = 'Attack';
              if (boss.mode1_attackMaxTimes == boss.mode1_attackTimes) {
                  boss.bossStatus = 'Idle';
                  boss.bossFightMode = '0';
                  boss.mode1_attackTimes = 0;
                  boss.bossStatus = 'Attack';
                  boss.play('BossIdle',true);
                  console.log("AttackMode1 End");

                  let timmerStatus = setTimeout(() => {
                    _this.changeNormalUltimateMode(boss);

                    clearTimeout(timmerStatus);
                  }, 2000)
              }
          //     clearTimeout(timmerStatus);
          // }, boss.mode1_waitTime * 1000) //攻擊完畢 等待回到場地 接受玩家攻擊 5秒

          clearTimeout(timerDown1);
        }, (boss.mode1_attackNum + 1) * boss.mode1_attackDelayTime + 3000) //發動攻擊後 等待5秒回到場地
      }
    }
  }

  BossAttackUltimateMode2() {
    var _this = this;
    let boss = this.bossContainer.list.find(obj => obj instanceof Boss);
    boss.bossStatus = 'Attack';
    if (boss.bossStatus == 'Attack') {
      if (!boss.mode2_isAttackInit) {
        boss.play('BossAttack1Run1',true);
        console.log("AttackMode2 Start");
        boss.mode2_isAttackInit = true;
        boss.mode2_attackTimes = boss.mode2_attackTimes + 1;
        var NumList = [];
        for (var n = 0; n < this.bossContainer.mode2_attackPosList.length; n++) {
            NumList.push(n);
        }

        for (var i = 0; i < 3; i++) {
            var randNum = (Math.floor(Math.random() * NumList.length));
          // let attackTimer2 = setTimeout(() => {
            let box_x = _this.bossContainer.mode2_attackPosList[NumList[randNum]].x;
            let box_y = _this.bossContainer.mode2_attackPosList[NumList[randNum]].y;
            let box_w = _this.bossContainer.mode2_attackPosList[NumList[randNum]].width;
            let box_h = _this.bossContainer.mode2_attackPosList[NumList[randNum]].height;
            let attackBoxWater = _this.add.sprite(box_x+box_w/2,box_y+box_h/2, 'AttackBox');
            attackBoxWater.visible = false;
            let attackBoxMsg = new Phaser.GameObjects.Rectangle(this,box_x,box_y,box_w,box_h,0xff0000,0.3).setOrigin(0);
            _this.add.existing(attackBoxMsg);
            _this.physics.world.enable(attackBoxMsg);
            attackBoxMsg.setScale(1);
            
            NumList.splice(randNum, 1);
            let num = 0;
            let attackBoxShowHide = setInterval(() => {
              num++;
              if(attackBoxMsg.visible == true){
                attackBoxMsg.visible = false;
              }else{
                attackBoxMsg.visible = true;
              }

              if(num == 8){
                let attackBox = new Phaser.GameObjects.Rectangle(this,box_x,box_y,box_w,box_h,0xff0000,0.0).setOrigin(0);
                _this.add.existing(attackBox);
                _this.physics.world.enable(attackBox);
                attackBox.setScale(1);
                attackBoxWater.visible = true;
                // _this.physics.add.existing(attackBoxWater);
                attackBoxWater.setOrigin(0.5);
                attackBoxWater.setScale(1).setDepth(2);
                attackBoxWater.play('AttackBoxRun', true);
                attackBox.isBossHitPlayer = 0;



                _this.physics.add.overlap(attackBox, _this.playerContainer, () => {
                  if (attackBox.isBossHitPlayer == 0) {
                    attackBox.isBossHitPlayer = 1;
                      setTimeout(() => {
                        console.log("Mode2 攻擊到玩家");
                        _this.hitPlayerHp(boss.mode2_hitPlayerValue);

                          _this.playerContainer.list[0].setTint(0xff0000);
                          setTimeout(() => {
                              _this.playerContainer.list[0].clearTint();

                              setTimeout(() => {
                                attackBox.isBossHitPlayer = 0;
                              }, 850)
                          }, 50);

                      }, 100)
                  }
                }, null, true);

                let attackBoxDestroy = setTimeout(() => {


                  attackBoxWater.destroy();
                  attackBox.destroy();
                  clearTimeout(attackBoxDestroy);
                }, 1000);


                clearInterval(attackBoxShowHide);
                attackBoxMsg.destroy();
              }
            }, 200);

            let timerDown2= setTimeout(() => {
              boss.mode2_isAttackInit = false;
              boss.bossStatus = 'Idle';
    
              // let timmerStatus =  setTimeout(() => {
                //  boss.bossStatus = 'Attack';
                  if (boss.mode2_attackMaxTimes == boss.mode2_attackTimes) {
                      boss.bossStatus = 'Idle';
                      boss.bossFightMode = '0';
                      boss.mode2_attackTimes = 0;
                      _this.changeNormalUltimateMode(boss);
                      boss.bossStatus = 'Attack';
                      console.log("AttackMode2 End");
                  }
                  // clearTimeout(timmerStatus);
              // }, boss.mode2_waitTime * 1000) //攻擊完畢 等待回到場地 接受玩家攻擊 5秒
              clearTimeout(timerDown2);
            }, boss.mode2_waitTime * 1000 ) //發動攻擊後 等待5秒回到場地


            // clearTimeout(attackTimer2);
          // }, boss.mode2_attackDelayTime + boss.mode2_attackDelayTime * i); // 隨機 並 delay 500 ms 發動攻擊
        }

        let setTimer = setTimeout(() => {
          boss.play('BossAttack1Run2',true);
          clearTimeout(setTimer);
        }, 250)
        let setTimer2 = setTimeout(() => {
          boss.play('BossAttack1Run3',true);
          clearTimeout(setTimer2);
        }, 1000)
        let setTimer3 = setTimeout(() => {
          boss.play('BossIdle',true);
          clearTimeout(setTimer3);
        }, 1250)



      }
    }

  }
  BossAttackUltimateMode3() {
    var _this = this;
    let boss = this.bossContainer.list.find(obj => obj instanceof Boss);
    boss.bossStatus = 'Attack';
    if (boss.bossStatus == 'Attack') {
      if (!boss.mode3_isAttackInit) {
        boss.mode3_isAttackInit = true;
          boss.play('BossAttack1Run1',true);
        console.log("AttackMode3 Start");
        let setTimeDelay = setTimeout(() => {

          boss.mode3_attackTimes = boss.mode3_attackTimes + 1;
          let x = this.bossContainer.mode3_attackPosList[0].x;
          let y = this.bossContainer.mode3_attackPosList[0].y;
          let attack3_1 = this.add.sprite(0,0,'Attack3Fire');
          let attack3_2 = this.add.sprite(0,0,'Attack3Fire');
          let attack3_3 = this.add.sprite(0,0,'Attack3Fire');
          let attack3_4 = this.add.sprite(0,0,'Attack3Fire');
          attack3_1.setOrigin(0.5,1);
          attack3_1.setScale(3.5).setDepth(1).setAngle(0);
          attack3_1.play('Attack3FireRun1', true);
          attack3_2.setOrigin(0.5,1);
          attack3_2.setScale(3.5).setDepth(1).setAngle(90);
          attack3_2.play('Attack3FireRun1', true);
          attack3_3.setOrigin(0.5,1);
          attack3_3.setScale(3.5).setDepth(1).setAngle(180);
          attack3_3.play('Attack3FireRun1', true);
          attack3_4.setOrigin(0.5,1);
          attack3_4.setScale(3.5).setDepth(1).setAngle(270);
          attack3_4.play('Attack3FireRun1', true);
          _this.attack3Container = _this.add.container(x,y);
          _this.physics.world.enable(_this.attack3Container);
          _this.attack3Container.setSize(64,0);
          _this.attack3Container.setDepth(1)
          _this.attack3Container.add(attack3_1);
          _this.attack3Container.add(attack3_2);
          _this.attack3Container.add(attack3_3);
          _this.attack3Container.add(attack3_4);
          let attackCir = setTimeout(() => { 
            attack3_1.play('Attack3FireRun2', true);
            attack3_2.play('Attack3FireRun2', true);
            attack3_3.play('Attack3FireRun2', true);
            attack3_4.play('Attack3FireRun2', true);
            for(let i =0 ;i<10 ; i++){
              let attack3_1_circle = new Phaser.GameObjects.Ellipse(_this,0,0 - i*32, 64, 64, 0x00FF00, 0.0).setOrigin(0.5);
              let attack3_2_circle = new Phaser.GameObjects.Ellipse(_this,0,0 + i*32, 64, 64, 0x00FF00, 0.0).setOrigin(0.5);
              let attack3_3_circle = new Phaser.GameObjects.Ellipse(_this,0 + i*32,0, 64, 64, 0x00FF00, 0.0).setOrigin(0.5);
              let attack3_4_circle = new Phaser.GameObjects.Ellipse(_this,0 - i*32,0, 64, 64, 0x00FF00, 0.0).setOrigin(0.5);
              _this.add.existing(attack3_1_circle);
              _this.add.existing(attack3_2_circle);
              _this.add.existing(attack3_3_circle);
              _this.add.existing(attack3_4_circle);
              _this.physics.world.enable(attack3_1_circle);
              _this.physics.world.enable(attack3_2_circle);
              _this.physics.world.enable(attack3_3_circle);
              _this.physics.world.enable(attack3_4_circle);
              attack3_1_circle.body.setCircle(64 / 2)
              attack3_2_circle.body.setCircle(64 / 2)
              attack3_3_circle.body.setCircle(64 / 2)
              attack3_4_circle.body.setCircle(64 / 2)

              _this.attack3Container.add(attack3_1_circle);
              _this.attack3Container.add(attack3_2_circle);
              _this.attack3Container.add(attack3_3_circle);
              _this.attack3Container.add(attack3_4_circle);

              attack3_1_circle.isBossHitPlayer = 0;
              attack3_2_circle.isBossHitPlayer = 0;
              attack3_3_circle.isBossHitPlayer = 0;
              attack3_4_circle.isBossHitPlayer = 0;
              
              _this.physics.add.overlap(attack3_1_circle, _this.playerContainer, () => {
                if (attack3_1_circle.isBossHitPlayer == 0) {
                  attack3_1_circle.isBossHitPlayer = 1;
                    setTimeout(() => {
                      console.log("Mode3 攻擊到玩家");
                      _this.hitPlayerHp(boss.mode3_hitPlayerValue);

                        _this.playerContainer.list[0].setTint(0xff0000);
                        setTimeout(() => {
                            _this.playerContainer.list[0].clearTint();

                            setTimeout(() => {
                              attack3_1_circle.isBossHitPlayer = 0;
                            }, 850)
                        }, 50);

                    }, 100)
                }
              }, null, true);
              
              _this.physics.add.overlap(attack3_2_circle, _this.playerContainer, () => {
                if (attack3_2_circle.isBossHitPlayer == 0) {
                  attack3_2_circle.isBossHitPlayer = 1;
                    setTimeout(() => {
                      console.log("Mode3 攻擊到玩家");
                      _this.hitPlayerHp(boss.mode3_hitPlayerValue);

                        _this.playerContainer.list[0].setTint(0xff0000);
                        setTimeout(() => {
                            _this.playerContainer.list[0].clearTint();

                            setTimeout(() => {
                              attack3_2_circle.isBossHitPlayer = 0;
                            }, 850)
                        }, 50);

                    }, 100)
                }
              }, null, true);
              
              _this.physics.add.overlap(attack3_3_circle, _this.playerContainer, () => {
                if (attack3_3_circle.isBossHitPlayer == 0) {
                  attack3_3_circle.isBossHitPlayer = 1;
                    setTimeout(() => {
                      console.log("Mode3 攻擊到玩家");
                      _this.hitPlayerHp(boss.mode3_hitPlayerValue);

                        _this.playerContainer.list[0].setTint(0xff0000);
                        setTimeout(() => {
                            _this.playerContainer.list[0].clearTint();

                            setTimeout(() => {
                              attack3_3_circle.isBossHitPlayer = 0;
                            }, 850)
                        }, 50);

                    }, 100)
                }
              }, null, true);
              
              _this.physics.add.overlap(attack3_4_circle, _this.playerContainer, () => {
                if (attack3_4_circle.isBossHitPlayer == 0) {
                  attack3_4_circle.isBossHitPlayer = 1;
                    setTimeout(() => {
                      console.log("Mode3 攻擊到玩家");
                      _this.hitPlayerHp(boss.mode3_hitPlayerValue);

                        _this.playerContainer.list[0].setTint(0xff0000);
                        setTimeout(() => {
                            _this.playerContainer.list[0].clearTint();

                            setTimeout(() => {
                              attack3_4_circle.isBossHitPlayer = 0;
                            }, 850)
                        }, 50);

                    }, 100)
                }
              }, null, true);

            }
            // let setTimerDestroy = setTimeout(() => {
            //   console.log(_this.attack3Container);
            //   // for(let i =4 ;i< this.attack3Container.list ; i++){
            //   //     this.attack3Container.list[i].destroy();
            //   // }
            //   clearTimeout(setTimerDestroy)
            // }, 4500);
            clearTimeout(attackCir)
          }, 500);
          _this.attack3Container.angle = 25;
          
          let attackCirdone = setTimeout(() => {
            for(let i = _this.attack3Container.list.length-1;i>=4 ; i--){
              _this.attack3Container.list[i].destroy();
            }
            attack3_1.play('Attack3FireRun3', true);
            attack3_2.play('Attack3FireRun3', true);
            attack3_3.play('Attack3FireRun3', true);
            attack3_4.play('Attack3FireRun3', true);
            clearTimeout(attackCirdone)
          }, 4500);


          
          let setTimer1 = setTimeout(() => {

            _this.attack3Container.destroy();

            boss.play('BossAttack1Run3',true);
            _this.attack3Container = null

            boss.mode3_isAttackInit = false;
            boss.bossStatus = 'Idle';

          // let timmerStatus =  setTimeout(() => {
            //  boss.bossStatus = 'Attack';
            if (boss.mode3_attackMaxTimes == boss.mode3_attackTimes) {
                boss.bossStatus = 'Idle';
                boss.bossFightMode = '0';
                boss.mode3_attackTimes = 0;
                let timmerStatus = setTimeout(() => {
                  _this.changeNormalUltimateMode(boss);

                  clearTimeout(timmerStatus);
                }, 2000)
                boss.play('BossIdle',true);
                console.log("AttackMode3 End");
            }

            clearTimeout(setTimer1);
          }, 5000)


          clearTimeout(setTimeDelay);
        }, 1000);

      }
      if(this.attack3Container){

        if(this.attack3Container.angle >= 360){
          this.attack3Container.setAngle(0);
        }
        
        this.attack3Container.setAngle(this.attack3Container.angle + 1);
      }
    }

  }

  playGame() {}
}
