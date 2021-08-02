class Scene2 extends Phaser.Scene {
    constructor() {
        super('playGame');
    }

    init() {

    }

    preload() {
    }

    create() {
        this.background = this.add.tileSprite(300, 500, config.width, config.height, 'background');

        this.ufo1 = this.physics.add.sprite(Phaser.Math.Between(0, config.width), 300, 'ufo').setScale(0.5);
        this.ufo2 = this.physics.add.sprite(Phaser.Math.Between(0, config.width), 300, 'ufo').setScale(0.5);
        this.ufo3 = this.physics.add.sprite(Phaser.Math.Between(0, config.width), 300, 'ufo').setScale(0.5);

        this.enemies = this.physics.add.group();
        this.enemies.add(this.ufo1);
        this.enemies.add(this.ufo2);
        this.enemies.add(this.ufo3);

        this.ufo1.anims.play('ufo_anim');
        this.ufo2.anims.play('ufo_anim');
        this.ufo3.anims.play('ufo_anim');

        this.ufo1.setInteractive();
        this.ufo2.setInteractive();
        this.ufo3.setInteractive();

        this.input.on('gameobjectdown', this.destoryUfo, this);

        this.physics.world.setBoundsCollision();


        this.player = this.physics.add.sprite(300, 800, 'spaceship');
        this.player.anims.play('ship_anim');
        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.setCollideWorldBounds(true);

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
        this.music = this.sound.add("music");

        var musicConfig = {
            mute: false,
            volume: 1,
            rate: 1,
            detune: 0,
            seek: 0,
            loop: true,
            delay: 0
        }
        this.music.play(musicConfig);

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

    }

    update() {
        this.moveUfo(this.ufo1, 3);
        this.moveUfo(this.ufo2, 4);
        this.moveUfo(this.ufo3, 5);

        this.background.tilePositionY -= 1;

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
    }
    hurtPlayer(player, enemy){
        
        if(this.player.alpha < 1){
            return;
        }

        this.resetUfoPos(enemy);
        
        this.dieSound.play();

        var explosion = new Explosion(this, player.x, player.y);
        var explosion2 = new Explosion(this, enemy.x, enemy.y);

        this.player.disableBody(true, true);
        
        this.time.addEvent({
            delay: 1000,
            callback: this.resetPlayer,
            callbackScope: this,
            loop: false
        });
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
            duration: 2000,
            repeat:0,
            onComplete: function(){
              this.player.alpha = 1;
            },
            callbackScope: this
        });
    }
    hitEnemy(projectile, enemy){
        var explosion = new Explosion(this, enemy.x, enemy.y);
    
        projectile.destroy();
        this.resetUfoPos(enemy);

        this.score += 15;
        var scoreFormated = this.zeroPad(this.score, 6);
        this.scoreLabel.text = "SCORE " + scoreFormated;
    }

    moveUfo(ufo, speed) {
        ufo.y += speed;
        if (ufo.y - 60 > config.height) {
            this.resetUfoPos(ufo);
        }
    }
    resetUfoPos(ufo) {
        ufo.y = -60;
        var randomX = Phaser.Math.Between(0, config.width);
        ufo.x = randomX;
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

    zeroPad(number,size){
        var stringNumber = String(number);
        while(stringNumber.length < (size || 2)){
            stringNumber = "0" + stringNumber;
        }
        return stringNumber
    }
}