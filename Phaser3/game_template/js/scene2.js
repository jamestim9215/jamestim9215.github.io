class Scene2 extends Phaser.Scene {
    constructor() {
        super('playGame');
    }

    init() {

    }

    preload() {
    }

    create() {
        // this.background = this.add.image(300, 500, 'background');
        this.background = this.add.tileSprite(300, 500, config.width, config.height, 'background');
        // this.background.setOrigin(0, 0);
        // this.background.setScale(2);
        // this.background.flipY = true;
        // this.background.angle = 10;

        // this.ufo1 = this.add.image(Phaser.Math.Between(0, config.width), 300, 'ufo').setScale(0.1 * Phaser.Math.Between(5,15));
        // this.ufo2 = this.add.image(Phaser.Math.Between(0, config.width), 300, 'ufo').setScale(0.1 * Phaser.Math.Between(5,15));
        // this.ufo3 = this.add.image(Phaser.Math.Between(0, config.width), 300, 'ufo').setScale(0.1 * Phaser.Math.Between(5,15));
        // this.ship = this.add.image(300, 800, 'spaceship');

        this.ufo = this.add.sprite(Phaser.Math.Between(0, config.width), 300, 'ufo');

        this.ship = this.add.sprite(300, 800, 'spaceship');

        this.anims.create({
            key: "ufo_anim",
            frames: this.anims.generateFrameNumbers('ufo'),
            frameRate: 5,
            repeat: -1
        })
        this.anims.create({
            key: "ufoDie_anim",
            frames: this.anims.generateFrameNumbers('ufoDie'),
            frameRate: 20,
            repeat: 0,
            hideOnComplete: true
        })

        this.anims.create({
            key: "red",
            frames: this.anims.generateFrameNumbers('powerUp', {
                start: 0,
                end: 1
            }),
            frameRate: 10,
            repeat: -1
        })
        this.anims.create({
            key: "gray",
            frames: this.anims.generateFrameNumbers('powerUp', {
                start: 2,
                end: 3
            }),
            frameRate: 10,
            repeat: -1
        })

        this.powerUps = this.physics.add.group();
        this.physics.add.collider(this.powerUps, this.powerUps);

        var maxObjects = 4;
        for (var i = 0; i <= maxObjects; i++) {
            var powerUp = this.physics.add.sprite(16, 16, 'powerUp').setScale(1.5);
            this.powerUps.add(powerUp);
            powerUp.setRandomPosition(0, 0, game.config.width, game.config.height);
            if (Math.random() > 0.5) {
                powerUp.anims.play('red');
            } else {
                powerUp.anims.play('gray');
            }
            powerUp.setVelocity(300,300);
            powerUp.setCollideWorldBounds(true);
            powerUp.setBounce(1);
        }


        this.ufo.anims.play('ufo_anim');
        this.ufo.setInteractive();
        this.input.on('gameobjectdown', this.destoryUfo, this);


        // this.add.text(20, 20, "Playing Game", {
        //     font: "25px Ariel",
        //     fill: "yellow"
        // });
    }

    update() {
        this.moveUfo(this.ufo, 4);

        this.background.tilePositionY -= 1;
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
}