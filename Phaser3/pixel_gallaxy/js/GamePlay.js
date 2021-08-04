class GamePlay extends Phaser.Scene {
    constructor() {
        super('playGame');
    }

    init() {

    }

    preload() {
    }
    create() {
        this.physics.world.setFPS(60);
        
        this.life = gameSetting.life;
        this.isAddHeart = false;
        this.isPowerUp = false;
        this.enemyMoveSpeed = [3,6];
        this.bossMoveSpeed = 2;
        this.level = 1;
        this.powerLevel = 1;
        this.levelUpSetting = false;
        this.ufoLife = gameSetting.enemyLife;

        this.background = this.add.tileSprite(config.width/2, config.height/2, config.width, config.height, 'background');
        this.star = this.add.tileSprite(config.width/2, config.height/2 , config.width, config.height, 'star');

        this.enemies = this.physics.add.group();
        for(var i=0; i< gameSetting.enemyCount; i++){
            this.createEnemy(0);
        }

        this.time.addEvent({
            delay: 20000,
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

        this.physics.add.overlap(this.player, this.enemies,this.hurtPlayer, null , this);
        this.physics.add.overlap(this.projectiles, this.enemies,this.hitEnemy, null , this);



        var graphics = this.add.graphics();
        graphics.fillStyle(0x000000, 1);
        graphics.beginPath();
        graphics.moveTo(0,0);
        graphics.lineTo(config.width,0);
        graphics.lineTo(config.width, 40);
        graphics.lineTo(0,40);
        graphics.lineTo(0,0);
        graphics.closePath();
        graphics.fillPath();

        this.score = 0;
        var scoreFormated = this.zeroPad(this.score, 6);
        this.scoreLabel = this.add.bitmapText( 10 , 5, "pixelFont", "SCORE "+scoreFormated, 24);

        
        this.levelLabel = this.add.bitmapText(  config.width - 5 , 5, "pixelFont", "Level "+this.level, 24);
        this.levelLabel.setOrigin(1,0);

        this.beamSound = this.sound.add("audio_beam");
        this.dieSound = this.sound.add("audio_die");
        // this.music = this.sound.add("music");

        // var musicConfig = {
        //     mute: false,
        //     volume: 1,
        //     rate: 1,
        //     detune: 0,
        //     seek: 0,
        //     loop: true,
        //     delay: 0
        // }
        // this.music.play(musicConfig);

        // this.time.addEvent({
        //     delay: 250,
        //     callback: ()=>{
        //         if(this.player.active){
        //             this.shootBeam();
        //         }  
        //     },
        //     callbackScope: this,
        //     loop: true
        // });

        this.hearts = this.add.group();

        for(var i=0; i< this.life; i++){
            this.heart = this.add.image(40 + i*70, 80,"heart");
            this.hearts.add(this.heart);
        }

        this.enterKey = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.ENTER);

    }
    update() {
        if(this.firstGame==false){
            for(var i=0; i<this.enemies.getChildren().length; i++){
                var ufo = this.enemies.getChildren()[i];
                if(ufo.type == 0){
                    this.moveUfo(ufo, ufo.speed);
                }else{
                    this.moveUfo(ufo, ufo.speed);
                }
            }

        }
        this.background.tilePositionY -= 0.5;
        this.star.tilePositionY -= 1;

        this.movePlayerManager();

        if(Phaser.Input.Keyboard.JustDown(this.spacebar)){
            if(this.player.active){
                this.shootBeam();
            }
        }

        for(var i=0; i<this.projectiles.getChildren().length; i++){
            var beam = this.projectiles.getChildren()[i];
            beam.update();
        }

        if(this.player.y < config.height - 60){
            this.player.setCollideWorldBounds(true);
        }

        
        if(Phaser.Input.Keyboard.JustDown(this.enterKey) && this.life<=0){
            this.life = 3;
            this.scene.start('playGame');
        }

        if(this.score !=0 && this.score % gameSetting.addLife== 0 && this.life != gameSetting.life && this.isAddHeart==false){
            this.isAddHeart = true;
            this.createHeart();
        }

        // if(this.score !=0 && this.score % gameSetting.addPowerUp== 0 && this.powerLevel != gameSetting.powerLevel && this.isPowerUp==false){
        //     console.log("???????");
        //     this.isPowerUp = true;
        //     this.createPowerUp();
        // }

        if(this.levelUpSetting){
            this.levelUp();
        }

    }
    levelUp(){
        if(this.level % gameSetting.createEnemy == 0){
            this.createEnemy(0);
        }
        if(this.level % gameSetting.addEnemyLife == 0){
            this.ufoLife = this.ufoLife + 1;
        }
        if(this.level % gameSetting.addEnemyMove == 0){
            this.enemyMoveSpeed[1] = this.enemyMoveSpeed[1] + 0.2;
        }
        if(this.level % gameSetting.addBossMove == 0){
            this.bossMoveSpeed = this.bossMoveSpeed + 1;
        }
        for(var i=0; i<this.enemies.getChildren().length; i++){
            var ufo = this.enemies.getChildren()[i];
            if(ufo.type == 0){
                ufo.life = this.ufoLife;
                ufo.speed = Phaser.Math.Between(3, this.enemyMoveSpeed[1]);
            }else{
                ufo.life = ufo.life + 10;
                ufo.speed = this.bossMoveSpeed;
            }
            console.log(ufo.type + " / " + ufo.life);
        }

        this.levelUpSetting = false;
    }
    createPowerUp(){
        this.powerup = this.physics.add.sprite(Phaser.Math.Between(50, config.width-50), Phaser.Math.Between(50, config.height-50), 'powerup');
        this.powerup.play("powerup_anim");
        this.powerup.setVelocity(100,100);
        this.powerup.setCollideWorldBounds(true);
        this.powerup.setBounce(1);

        this.physics.add.overlap(this.player, this.powerup,this.addPowerUpFun, null , this);

        console.log("??? IN");
    }
    addPowerUpFun(player, powerup){
        powerup.destroy();
        
        console.log(" OUT");

        if(gameSetting.powerLevel > this.powerLevel){
            this.powerLevel = this.powerLevel + 1;
        }
    }
    createHeart(){
        this.heart = this.physics.add.sprite(Phaser.Math.Between(50, config.width-50), Phaser.Math.Between(50, config.height-50), 'addHeart');
        this.heart.play("addheart_anim");
        this.heart.setVelocity(100,100);
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
            duration: 1500,
            repeat:0,
            onComplete: function(){
                this.player.alpha = 1;
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
            ufo = this.physics.add.sprite(Phaser.Math.Between(0, config.width), Phaser.Math.Between(-100, -300), 'ufo').setScale(0.5);
            ufo.anims.play('ufo_anim');
            ufo.life = this.ufoLife;
            ufo.type = type;
            ufo.speed = Phaser.Math.Between(3, 5);
            ufo.setInteractive();
        }else{
            ufo = this.physics.add.sprite(Phaser.Math.Between(50, config.width-50), -100, 'ufo').setScale(1.2);
            ufo.anims.play('ufo_anim');
            ufo.life = gameSetting.bossLife;
            ufo.type = type;
            ufo.speed = 2;
            ufo.setInteractive();
        }
        this.enemies.add(ufo);
    } 
    hitEnemy(projectile, enemy){
        projectile.destroy();
        console.log(enemy.life);
        if(enemy.life>1){
            enemy.life = enemy.life - 1;
        }else{
            var explosion = new Explosion(this, enemy.x, enemy.y);
            this.resetUfoPos(enemy);
            if(enemy.type==0){
                this.score += 10;
            }else{
                this.score += 50;
                this.level = this.level + 1;
                if(this.score !=0 &&  this.powerLevel != gameSetting.powerLevel && this.isPowerUp==false){
                    this.isPowerUp = true;
                    this.createPowerUp();
                }
            }
            if(this.score % gameSetting.levelUp == 0){
                this.level = this.level + 1;
                this.levelUpSetting = true;
                this.levelLabel.text = "Level "+this.level;
            }
            this.isAddHeart = false;
            this.isPowerUp = false;
            var scoreFormated = this.zeroPad(this.score, 6);
            this.scoreLabel.text = "SCORE " + scoreFormated;
        }
    }
    moveUfo(ufo, speed) {
        ufo.y += speed;
        if (ufo.y - 60 > config.height) {
            this.resetUfoPos(ufo);
        }
    }

    resetUfoPos(ufo) {
        if(ufo.type == 1){
            ufo.destroy();
        }else{
            ufo.life = this.ufoLife;
            ufo.y = -60;
            var randomX = Phaser.Math.Between(0, config.width);
            ufo.x = randomX;
        }
    }
    destoryUfo(pointer, gameObject) {
        gameObject.setTexture('ufoDie');
        gameObject.play('die_anim');
    }
    shootBeam(){
        var beam = new Beam(this);

        if(this.powerLevel == 2){
            var beamL = new Beamleft(this);
            var beamR = new Beamright(this);
        }
        if(this.powerLevel == 3){
            var beamL = new Beamleft(this);
            var beamR = new Beamright(this);
            var beamL2 = new Beamleft2(this);
            var beamR2 = new Beamright2(this);
        }

        this.beamSound.play();

        // this.projectiles.add(beam); 
        // this.projectiles.add(beamL); 
        // this.projectiles.add(beamR); 
        
        // this.physics.add.collider(this.projectiles,this.enemies);
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

        this.gameoverTitle1 = this.add.bitmapText( config.width/2 ,config.height/3 - 60, "pixelFont", "game", 60);
        this.gameoverTitle1.setOrigin(0.5,0.5);
        this.gameoverTitle1.alpha = 0;
        this.gameoverTitle2 = this.add.bitmapText( config.width/2 ,config.height/3 + 10, "pixelFont", "over", 60);
        this.gameoverTitle2.setOrigin(0.5,0.5);
        this.gameoverTitle2.alpha = 0;

        
        this.gameoverScore = this.add.bitmapText( config.width/2 ,config.height/2, "pixelFont", this.score, 60);
        this.gameoverScore.setOrigin(0.5,0.5);
        this.gameoverScore.alpha = 0;

        this.scoreLabel.text = "";
        
        this.enterTryMessage = this.add.bitmapText( config.width/2 ,config.height - 20, "pixelFont", "Enter to try angin", 16);
        this.enterTryMessage.setOrigin(0.5,0.5);
        this.enterTryMessage.alpha = 0;

        this.tweens.add({
            targets: graphics,
            alpha: 1,
            ease: 'Power1',
            duration: 1000,
            repeat:0,
            onComplete: function(){
                this.tweens.add({
                    targets: this.gameoverTitle1,
                    alpha: 1,
                    ease: 'Power1',
                    duration: 1000,
                    repeat:0,
                    callbackScope: this
                });
                this.tweens.add({
                    targets: this.gameoverTitle2,
                    alpha: 1,
                    ease: 'Power1',
                    duration: 1500,
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
                    targets: this.enterTryMessage,
                    alpha: 1,
                    ease: 'Power1',
                    duration: 2000,
                    repeat:0,
                    callbackScope: this
                });
            },
            callbackScope: this
        });
        

    }
}