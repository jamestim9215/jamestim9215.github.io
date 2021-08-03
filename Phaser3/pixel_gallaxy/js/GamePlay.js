class GamePlay extends Phaser.Scene {
    constructor() {
        super('playGame');
    }

    init() {

    }

    preload() {
    }
    create() {
        this.life = config.life;
        this.isAddHeart = false;
        this.level = 1;

        this.background = this.add.tileSprite(config.width/2, config.height/2, config.width, config.height, 'background');
        this.star = this.add.tileSprite(config.width/2, config.height/2 , config.width, config.height, 'star');

        this.enemies = this.physics.add.group();
        for(var i=0; i< config.enemyCount; i++){
            this.createEnemy(0);
        }

        this.time.addEvent({
            delay: 30000,
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
        //     delay: 500,
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
                    this.moveUfo(ufo, Phaser.Math.Between(3, 6));
                }else{
                    this.moveUfo(ufo, 2);
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

        if(this.score !=0 && this.score % config.addLife == 0 && this.life != config.life && this.isAddHeart==false){
            this.isAddHeart = true;
            this.createHeart();
        }

    }

    createHeart(){
        this.heart = this.physics.add.sprite(Phaser.Math.Between(0, config.width), 500, 'addHeart');
        this.heart.play("addheart_anim");
        this.heart.setVelocity(100,100);
        this.heart.setCollideWorldBounds(true);
        this.heart.setBounce(1);

        this.physics.add.overlap(this.player, this.heart,this.addHeartFun, null , this);
    }
    addHeartFun(player, heart){
        heart.destroy();

        if(config.life > this.life){
            this.life = this.life + 1;
            this.hearts.getChildren()[this.life-1].setTexture('heart');
            this.isAddHeart = false;
        }


    }
    

    hurtPlayer(player, enemy){
        
        if(this.player.alpha < 1){
            return;
        }

        this.resetUfoPos(enemy);
        
        this.dieSound.play();
        this.player.setCollideWorldBounds(false);
        this.life = this.life-1;
        this.hearts.getChildren()[this.life].setTexture('heart_die');
        
        
       

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
            this.player.x -= 10;
        }else if(this.cursorKeys.right.isDown){
            // this.player.setVelocityX(gameSetting.playerSpeed);
            this.player.x += 10;
        }else{
            
        }
        if(this.cursorKeys.up.isDown){
            // this.player.setVelocityY(-gameSetting.playerSpeed);
            this.player.y -= 10;
        }else if(this.cursorKeys.down.isDown){
            // this.player.setVelocityY(gameSetting.playerSpeed);
            this.player.y += 10;
            
        }
    }

    //Enemy
    createEnemy(type){
        var ufo = null;
        if(type==0){
            ufo = this.physics.add.sprite(Phaser.Math.Between(0, config.width), -100, 'ufo').setScale(0.5);
            ufo.anims.play('ufo_anim');
            ufo.life = config.enemyLife;
            ufo.type = type;
            ufo.setInteractive();
        }else{
            ufo = this.physics.add.sprite(Phaser.Math.Between(100, config.width-100), -100, 'ufo').setScale(1.2);
            ufo.anims.play('ufo_anim');
            ufo.life = config.bossLife;
            ufo.type = type;
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
            this.score += 10;
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
            ufo.life = config.enemyLife;
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
        var beamL = new Beamleft(this);
        var beamR = new Beamright(this);

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