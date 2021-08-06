class GamePlay extends Phaser.Scene {
    constructor() {
        super('playGame');
    }

    init() {

    }

    preload() {
    }
    create() {
        
        this.life = gameSetting.life;
        this.isAddHeart = false;
        this.isPowerUp = false;
        this.enemyMoveSpeed = [2,2];
        this.bossMoveSpeed = 2;
        this.level = 1;
        this.powerLevel = 1;
        this.levelUpSetting = false;
        this.ufoLife = gameSetting.enemyLife;
        this.bossLife = gameSetting.bossLife;

        this.oldScore = 0;

        this.background = this.add.tileSprite(config.width/2.2, config.height/2.2, config.width*2.2, config.height*2.2, 'background').setScale(0.5);   
        this.mapcloud = this.add.tileSprite(config.width/2.2, config.height/2.2, config.width*2.2, config.height*2.2, 'mapcloud').setScale(0.5);   
        this.star = this.add.tileSprite(config.width/2.2, config.height/2.2, config.width*2.2, config.height*2.2, 'star').setScale(0.5);   

        // this.background = this.add.tileSprite(config.width/2, config.height/2, config.width, config.height, 'background');
        // this.star = this.add.tileSprite(config.width/2, config.height/2 , config.width, config.height, 'star');
        this.dashboard = this.add.image(config.width/2, config.height - 40, "dashboard");

        this.enemies = this.physics.add.group();
        for(var i=0; i< gameSetting.enemyCount; i++){
            this.createEnemy(0);
        }

        this.time.addEvent({
            delay: gameSetting.bossCreateCycle * 1000,
            callback: ()=>{
                if(this.player.active){
                    this.createEnemy(1);
                }  
            },
            callbackScope: this,
            loop: true
        });


        this.input.on('gameobjectdown', this.destoryUfo, this);

        this.physics.world.setBoundsCollision();


        this.player = this.physics.add.sprite(config.width/2, config.height + 100, 'spaceship');
        this.player.anims.play('ship_anim');
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.alpha = 0.5;

        this.firstGame = true;
                

        this.tweens.add({
            targets: this.player,
            y: config.height - 200,
            ease: 'Power1',
            alpha: 1,
            duration: 1000,
            repeat:0,
            onComplete: function(){
                // this.player.setCollideWorldBounds(true);
                this.firstGame = false;
            },
            callbackScope: this
        });


        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); 
        this.projectiles = this.add.group();
        this.enemyProjectiles = this.add.group();
        


        this.physics.add.overlap(this.player, this.enemies,this.hurtPlayer, null , this);
        this.physics.add.overlap(this.projectiles, this.enemies,this.hitEnemy, null , this);
        this.physics.add.overlap(this.enemyProjectiles, this.player,this.hitPlayerByEnemy, null , this);



        // var graphics = this.add.graphics();
        // graphics.fillStyle(0x000000, 1);
        // graphics.beginPath();
        // graphics.moveTo(0,0);
        // graphics.lineTo(config.width,0);
        // graphics.lineTo(config.width, 40);
        // graphics.lineTo(0,40);
        // graphics.lineTo(0,0);
        // graphics.closePath();
        // graphics.fillPath();
        //自動射擊
        if(gameSetting.autoShoot){
            this.time.addEvent({
                delay: 250,
                callback: ()=>{
                    if(this.player.active){
                        this.shootBeam();
                    }  
                },
                callbackScope: this,
                loop: true
            });
        }
        if(gameSetting.autoShoot){
            this.time.addEvent({
                delay: 750,
                callback: ()=>{
                    if(this.player.active){
                        this.shootMissile();
                    }  
                },
                callbackScope: this,
                loop: true
            });
        }

        this.time.addEvent({
            delay: gameSetting.addPowerUp * 1000,
            callback: ()=>{
                if(this.score !=0 && this.life != 0 && this.powerLevel != gameSetting.powerLevel && this.isPowerUp==false){
                    this.createPowerUp();
                }
            },
            callbackScope: this,
            loop: true
        });

        
        this.time.addEvent({
            delay: gameSetting.addLife * 1000,
            callback: ()=>{
                if(this.score !=0 && this.life < gameSetting.life && this.life != 0  && this.isAddHeart==false){
                    this.createHeart();
                }
            },
            callbackScope: this,
            loop: true
        });

        this.isEnemyBeam = false;
        this.time.addEvent({
            delay: 2500,
            callback: ()=>{
                if(this.isEnemyBeam == false){
                    this.isEnemyBeam = true;
                }
            },
            callbackScope: this,
            loop: true
        });



        this.hearts = this.add.group();

        for(var i=0; i< this.life; i++){
            this.heart = this.add.image((config.width - (this.life * 60)) + i*60 + 30, config.height - 30,"heart").setScale(0.6);
            this.hearts.add(this.heart);
        }

        this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

        

            
        this.onTouchX = 0;
        this.onTouchY = 0;
        this.playerXX = this.player.x;
        this.playerYY = this.player.y;
        this.isInput = false;
        

        this.score = 0;
        // var scoreFormated = this.zeroPad(this.score, 5);
        var scoreFormated = this.score;
        this.scoreTitleLabel = this.add.bitmapText( config.width/2 , config.height - 65, "pixelFont", "SCORE", 20).setOrigin(0.5,0.5);
        this.scoreLabel = this.add.bitmapText( config.width/2 , config.height - 25 , "pixelFont", scoreFormated, 40).setOrigin(0.5,0.5);

        
        this.levelLabel = this.add.bitmapText( 15 , config.height - 40, "pixelFont", "Level "+this.level, 20);

        this.beamSound = this.sound.add("audio_beam");
        this.dieSound = this.sound.add("audio_die");

        
    }
    update() {


        if(this.firstGame==false){
            for(var i=0; i<this.enemies.getChildren().length; i++){
                var ufo = this.enemies.getChildren()[i];
                if(ufo.type == 0){
                    this.moveUfo(ufo, ufo.speedY,ufo.speedX,this.isEnemyBeam);
                }else{
                    this.moveUfo(ufo, ufo.speedY,ufo.speedX,this.isEnemyBeam );
                }
            }
            if(this.isEnemyBeam)
                this.isEnemyBeam = false;

        }
        
        this.background.tilePositionY -= 2;
        this.mapcloud.tilePositionY -= 3;
        this.star.tilePositionY -= 1;

        this.movePlayerManager();

        var pointer = this.input.activePointer;
        this.input.on('pointerdown',()=>{
            this.isInput = true;
            this.onTouchX = pointer.x;
            this.onTouchY = pointer.y;
            this.playerXX = this.player.x;
            this.playerYY = this.player.y;
        });
        this.input.on('pointerup',()=>{
            this.isInput = false;
            this.onTouchX = pointer.x;
            this.onTouchY = pointer.y;
            this.playerXX = this.player.x;
            this.playerYY = this.player.y;
        });

        if(this.isInput) {
           var x = pointer.x - this.onTouchX;
           var y = pointer.y - this.onTouchY;
           this.player.x = this.playerXX + x;
           this.player.y = this.playerYY + y;
        }
        
        

        if(Phaser.Input.Keyboard.JustDown(this.spacebar)){
            if(this.player.active){
                // this.shootBeam();
                // this.shootMissile();
            }
        }


        for(var i=0; i<this.projectiles.getChildren().length; i++){
            var beam = this.projectiles.getChildren()[i];
            beam.update(this);

        }

        if(this.player.y < config.height - 60){
            this.player.setCollideWorldBounds(true);
        }

        

        // if(this.score !=0 && this.score % gameSetting.addLife== 0 && this.life != gameSetting.life && this.isAddHeart==false){
        //     this.isAddHeart = true;
        //     this.createHeart();
        // }

        if(this.levelUpSetting){
            this.levelUp();
        }

        
        if(Phaser.Input.Keyboard.JustDown(this.enterKey) && this.life<=0){
            this.life = 3;
            this.scene.start('playGame');
        }


    }
    levelUp(){
        if(this.level % gameSetting.createEnemy == 0){
            this.createEnemy(0);
        }
        if(this.level % gameSetting.addEnemyLife == 0){
            this.ufoLife = this.ufoLife + 2;
        }
        if(this.level % gameSetting.addEnemyMove == 0){
            this.enemyMoveSpeed[1] = this.enemyMoveSpeed[1] * 1.1;
        }
        if(this.level % gameSetting.addBossMove == 0){
            this.bossMoveSpeed = this.bossMoveSpeed + 1;
        }
        for(var i=0; i<this.enemies.getChildren().length; i++){
            var ufo = this.enemies.getChildren()[i];
            if(ufo.type == 0){
                ufo.life = this.ufoLife;
                ufo.speedY = Phaser.Math.Between(3, this.enemyMoveSpeed[1]);
            }else{
                ufo.life = parseInt(ufo.life + 5);
                ufo.speedY = this.bossMoveSpeed;
            }
        }

        this.levelUpSetting = false;
    }
    createPowerUp(){
        this.powerup = this.physics.add.sprite(Phaser.Math.Between(50, config.width-50), -100, 'powerup');
        this.powerup.play("powerup_anim");
        this.powerup.setScale(0.3);
        this.powerup.setVelocity(100,Phaser.Math.Between(100,100));
        this.powerup.setCollideWorldBounds(true);
        this.powerup.setBounce(1);

        this.physics.add.overlap(this.player, this.powerup,this.addPowerUpFun, null , this);
    }
    addPowerUpFun(player, powerup){
        powerup.destroy();

        if(gameSetting.powerLevel > this.powerLevel){
            this.powerLevel = this.powerLevel + 1;
            this.player.setScale(1 + this.powerLevel * 0.1);
        }
    }
    createHeart(){
        this.heart = this.physics.add.sprite(Phaser.Math.Between(50, config.width-50), - 100, 'addHeart');
        this.heart.play("addheart_anim");
        this.heart.setScale(0.3);
        this.heart.setVelocity(100,Phaser.Math.Between(100,100));
        this.heart.setCollideWorldBounds(true);
        this.heart.setBounce(1);

        this.physics.add.overlap(this.player, this.heart,this.addHeartFun, null , this);
    }
    addHeartFun(player, heart){
        heart.destroy();

        if(gameSetting.life > this.life){
            this.life = this.life + 1;
            this.hearts.getChildren()[this.life-1].setTexture('heart');
            
        }


    }
    hitPlayerByEnemy(projectile,player){
        projectile.destroy();
        if(this.player.alpha < 1){
            return;
        }

        this.dieSound.play();
        this.player.setCollideWorldBounds(false);
        if(this.life > 0){
            this.life = this.life-1;
            this.hearts.getChildren()[this.life].setTexture('heart_die');
        }
        if(this.powerLevel > 1){
            this.powerLevel = this.powerLevel - 1;
            this.player.setScale(1 + this.powerLevel * 0.1);
        }
       

        var explosion = new Explosion(this, player.x, player.y);

        this.player.disableBody(true, true);


        
        if(this.life > 0){
            this.time.addEvent({
                delay: 500,
                callback: this.resetPlayer,
                callbackScope: this,
                loop: false
            });
        }else{
            this.gameOverInfo();
        }
    }

    hurtPlayer(player, enemy){
        
        if(this.player.alpha < 1){
            return;
        }

        this.resetUfoPos(enemy);
        
        this.dieSound.play();
        this.player.setCollideWorldBounds(false);
        if(this.life > 0){
            this.life = this.life-1;
            this.hearts.getChildren()[this.life].setTexture('heart_die');
        }
        if(this.powerLevel > 1){
            this.powerLevel = this.powerLevel - 1;
            this.player.setScale(1 + this.powerLevel * 0.1);
        }
       

        var explosion = new Explosion(this, player.x, player.y);

        this.player.disableBody(true, true);


        
        if(this.life > 0){
            this.time.addEvent({
                delay: 500,
                callback: this.resetPlayer,
                callbackScope: this,
                loop: false
            });
        }else{
            this.gameOverInfo();
        }
        
    }
    resetPlayer(){
        var x = config.width / 2;
        var y = config.height + 300;

        this.player.enableBody(true, x, y, true, true);
        
        this.player.alpha = 0.5;
        var tween = this.tweens.add({
            targets: this.player,
            y: config.height - 200,
            ease: 'Power1',
            duration: 1000,
            repeat:0,
            onComplete: function(){
                this.time.addEvent({
                    delay: 500,
                    callback: ()=>{
                        if(this.player.alpha == 0.3){
                            this.player.alpha = 0.5;
                        }else{
                            this.player.alpha = 0.3;
                        }
                    },
                    callbackScope: this,
                    repeat: 4
                });
                this.time.addEvent({
                    delay: 2500,
                    callback: ()=>{
                        this.player.alpha = 1;
                    },
                    callbackScope: this,
                    loop: false
                });
                
            },
            callbackScope: this
        });
    }

    movePlayerManager(){
        if(this.cursorKeys.left.isDown){
            // this.player.setVelocityX(-gameSetting.playerSpeed);
            this.player.x -= 8;
        }else if(this.cursorKeys.right.isDown){
            // this.player.setVelocityX(gameSetting.playerSpeed);
            this.player.x += 8;
        }else{
            
        }
        if(this.cursorKeys.up.isDown){
            // this.player.setVelocityY(-gameSetting.playerSpeed);
            this.player.y -= 8;
        }else if(this.cursorKeys.down.isDown){
            // this.player.setVelocityY(gameSetting.playerSpeed);
            this.player.y += 8;
            
        }
    }

    //Enemy
    createEnemy(type){
        var ufo = null;
        if(type==0){
            ufo = this.physics.add.sprite(Phaser.Math.Between(60, config.width-60), Phaser.Math.Between(-100, -300), 'ufo').setScale(0.5);
            ufo.anims.play('ufo_anim');
            ufo.life = this.ufoLife;
            ufo.type = type;
            ufo.speedX = Phaser.Math.Between(-1, 1) * 0.1;
            ufo.speedY = Phaser.Math.Between(this.enemyMoveSpeed[0], this.enemyMoveSpeed[1]);
            ufo.setInteractive();
        }else{
            ufo = this.physics.add.sprite(Phaser.Math.Between(120, config.width-120), -120, 'ufoboss').setScale(0.8);
            ufo.anims.play('ufoboss_anim');
            ufo.life = this.bossLife == 10 ? this.bossLife : this.bossLife + 10;
            ufo.type = type;
            ufo.speedX = 0;
            ufo.speedY = this.bossMoveSpeed;
            ufo.setInteractive();
        }
        this.enemies.add(ufo);
    } 
    hitEnemy(projectile, enemy){
        projectile.destroy();
        if(enemy.life>1){
            enemy.life = enemy.life - 1;
        }else{
            var explosion = new Explosion(this, enemy.x, enemy.y);
            this.resetUfoPos(enemy);
            if(enemy.type==0){
                this.score += 10;
            }else{
                this.score += 50;
            }
            if((this.score - this.oldScore) > gameSetting.levelUp){
                this.level = this.level + 1;
                this.levelUpSetting = true;
                this.levelLabel.text = "Level "+this.level;
                this.oldScore = this.score;
            }
            this.isAddHeart = false;
            this.isPowerUp = false;
            // var scoreFormated = this.zeroPad(this.score, 5);
            var scoreFormated = this.score;
            this.scoreLabel.text = scoreFormated;
        }
    }
    moveUfo(ufo, speedY , speedX , isEnemyBeam ) {
        ufo.y += speedY;
        ufo.x += speedX;
        if(isEnemyBeam){
            this.time.addEvent({
                delay: Phaser.Math.Between(10, 30)*100,
                callback: ()=>{
                    var beam3 = new BeamEnemy(this,ufo);
                },
                callbackScope: this,
                loop: false
            });
        }
        if (ufo.y - 60 > config.height) {
            this.resetUfoPos(ufo);
        }
    }

    resetUfoPos(ufo) {
        if(ufo.type == 1){
            ufo.destroy();
        }else{
            ufo.life = this.ufoLife;
            ufo.y = Phaser.Math.Between(-100, -300);
            var randomX = Phaser.Math.Between(60, config.width - 60);
            ufo.x = randomX;
        }
    }
    destoryUfo(pointer, gameObject) {
        gameObject.setTexture('ufoDie');
        gameObject.play('die_anim');
    }
    shootBeam(){
        if(this.powerLevel == 1){
            var beam = new Beam(this);
        }
        if(this.powerLevel == 2){
            var beamL = new Beamleft(this);
            var beamR = new Beamright(this);
        }
        if(this.powerLevel >= 3){
            var beam = new Beam(this);
            var beamL = new Beamleft(this);
            var beamR = new Beamright(this);
        }
        if(this.powerLevel >= 4){
            var beamL2 = new Beamleft2(this);
            var beamR2 = new Beamright2(this);
        }

        this.beamSound.play();

    }
    shootMissile(){
        if(this.powerLevel >= 5){
            var missileL = new Missileleft(this);
            var missileR = new Missileright(this);
            this.beamSound.play();

        }

    }

    zeroPad(number,size){
        var stringNumber = String(number);
        while(stringNumber.length < (size || 2)){
            stringNumber = "0" + stringNumber;
        }
        return stringNumber
    }
    gameOverInfo(){
        var graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 0.5);
        graphics.beginPath();
        graphics.moveTo(0,0);
        graphics.lineTo(config.width,0);
        graphics.lineTo(config.width, config.height);
        graphics.lineTo(0,config.height);
        graphics.lineTo(0,0);
        graphics.closePath();
        graphics.fillPath();
        graphics.alpha = 0;

        // this.gameoverTitle1 = this.add.bitmapText( config.width/2 ,config.height/3 - 60, "pixelFont", "game", 60);
        // this.gameoverTitle1.setOrigin(0.5,0.5);
        // this.gameoverTitle1.alpha = 0;
        // this.gameoverTitle2 = this.add.bitmapText( config.width/2 ,config.height/3 + 10, "pixelFont", "over", 60);
        // this.gameoverTitle2.setOrigin(0.5,0.5);
        // this.gameoverTitle2.alpha = 0;

        this.gameoverframe = this.add.image(config.width/2 ,config.height/2,"gameover-frame");
        this.gameoverframe.setOrigin(0.5,0.5).setScale(0.6);
        this.gameoverframe.alpha = 0;

        this.mainTitle = this.add.image(config.width/2 ,-100,"title");
        this.mainTitle.setOrigin(0.5,0.5);
        this.mainTitle.setScale(0.4);
        this.mainTitle.alpha = 0;
        
        this.gameoverScore = this.add.bitmapText( config.width/2 ,config.height/2, "pixelFont", this.score, 60);
        this.gameoverScore.setOrigin(0.5,0.5);
        this.gameoverScore.alpha = 0;

        this.scoreTitleLabel.alpha = 0;
        this.scoreLabel.alpha = 0;
        
        // this.enterTryMessage = this.add.bitmapText( config.width/2 ,config.height - 20, "pixelFont", "Enter or touch to play angin", 16);
        // this.enterTryMessage.setOrigin(0.5,0.5);
        // this.enterTryMessage.alpha = 0;
        this.buttonPlay = this.add.image(config.width/2, config.height/2 + 100, "button");
        this.buttonPlay.setOrigin(0.5,0.5).setScale(0.5);
        this.buttonPlay.alpha = 0;

        this.tweens.add({
            targets: graphics,
            alpha: 1,
            ease: 'Power1',
            duration: 1000,
            repeat:0,
            onComplete: function(){
                this.tweens.add({
                    targets: this.gameoverframe,
                    alpha: 1,
                    ease: 'Power1',
                    duration: 1000,
                    repeat:0,
                    callbackScope: this
                });
                this.tweens.add({
                    targets: this.mainTitle,
                    alpha: 1,
                    y: config.height/3 - 100,
                    ease: 'Power1',
                    duration: 1000,
                    repeat:0,
                    callbackScope: this
                });
                this.tweens.add({
                    targets: this.gameoverScore,
                    alpha: 1,
                    ease: 'Power1',
                    duration: 2000,
                    repeat:0,
                    callbackScope: this
                });
                this.tweens.add({
                    targets: this.buttonPlay,
                    alpha: 1,
                    ease: 'Power1',
                    duration: 2000,
                    repeat:0,
                    callbackScope: this
                });
            },
            callbackScope: this
        });

        this.input.on('pointerdown',()=>{
            this.buttonPlay.setTexture("button-hover");
            this.input.on('pointerup',()=>{
                this.buttonPlay.setTexture("button");
                this.life = 3;
                this.scene.start('playGame');
                
            });
        });
    }
}