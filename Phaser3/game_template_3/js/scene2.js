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
        

        this.ufo1 = this.physics.add.sprite(Phaser.Math.Between(0, config.width), 300, 'ufo');
        this.ufo2 = this.physics.add.sprite(Phaser.Math.Between(0, config.width), 300, 'ufo');
        this.ufo3 = this.physics.add.sprite(Phaser.Math.Between(0, config.width), 300, 'ufo');

        this.ufo1.anims.play('ufo_anim');
        this.ufo2.anims.play('ufo_anim');
        this.ufo3.anims.play('ufo_anim');
        this.ufo1.setInteractive();
        this.ufo2.setInteractive();
        this.ufo3.setInteractive();
        // this.input.on('gameobjectdown', this.destoryUfo, this);

        this.player = this.physics.add.sprite(300, 800, 'spaceship');
        this.player.anims.play('ship_anim');

        this.cursorKeys = this.input.keyboard.createCursorKeys();
        this.player.setCollideWorldBounds(true);
        this.player.setBounce(1);

        this.spacebar = this.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.SPACE); 
        this.projectiles = this.add.group();

        this.enemies = this.physics.add.group();
        this.enemies.add(this.ufo1);
        this.enemies.add(this.ufo2);
        this.enemies.add(this.ufo3);

        // this.physics.add.collider(this.projectiles, this.enemies);

        this.physics.add.overlap(this.player, this.enemies,this.hurtPlayer, null , this);
        this.physics.add.overlap(this.projectiles, this.enemies,this.hurtEnemy, null , this);


    }

    update() {
        this.moveUfo(this.ufo1, 4);
        this.moveUfo(this.ufo2, 5);
        this.moveUfo(this.ufo3, 6);

        this.background.tilePositionY -= 1;

        this.movePlayerManager();

        if(Phaser.Input.Keyboard.JustDown(this.spacebar)){
            this.shootBeam();
        }
        for(var i=0; i<this.projectiles.getChildren().length; i++){
            var beam = this.projectiles.getChildren()[i];
            beam.update();
        }
    }
    hurtPlayer(player, enemy){
        this.resetUfoPos(enemy);
        player.x = 300;
        player.y = 800;
    }
    hurtEnemy(projectile, enemy){
        projectile.destroy();
        
        enemy.setTexture('ufoDie');
        enemy.play('ufoDie_anim');
        var _this = this;
        setTimeout(function(){
            _this.resetUfoPos(enemy);
            
            enemy.setTexture('ufo');
            enemy.play('ufo_anim');

        },100);
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
        gameObject.play('ufoDie_anim');
    }
    shootBeam(){
        // var beamL = new Beamleft(this);
        // var beamR = new Beamright(this);
        var beam = new Beam(this);
        var beamL = new Beamleft(this);
        var beamR = new Beamright(this);
        this.projectiles.add(beam); 
        this.projectiles.add(beamL); 
        this.projectiles.add(beamR); 
        
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
}