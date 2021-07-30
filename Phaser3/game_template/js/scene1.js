class Scene1 extends Phaser.Scene{
    constructor(){
        super('bootGame');
    }

    init(){

    }

    preload(){
        this.load.image('background',"assets/images/bg2.png");
        // this.load.image('spaceship',"assets/images/spaceship.png");
        // this.load.image('ufo',"assets/images/ufo.png");
        this.load.spritesheet('spaceship',"assets/images/spritesheets/spaceship.png",{
            frameWidth: 120,
            frameHeight: 150
        });
        this.load.spritesheet('ufo',"assets/images/spritesheets/ufo.png",{
            frameWidth: 120,
            frameHeight: 120
        });
        this.load.spritesheet('ufoDie',"assets/images/spritesheets/bum.png",{
            frameWidth: 120,
            frameHeight: 120
        });
        this.load.spritesheet('powerUp',"assets/images/spritesheets/power-up.png",{
            frameWidth: 16,
            frameHeight: 16
        });
    }

    create(){
        this.add.text(20, 20, "Loading game");
        // setTimeout(()=>{this.add.text(140, 20, ".");},1000);
        // setTimeout(()=>{this.add.text(160, 20, ".");},2000);
        // setTimeout(()=>{this.add.text(180, 20, ".");},4000);

        // setTimeout(()=>{this.scene.start("playGame");},5000);

        this.scene.start("playGame");
        
    }

    update(){

    }
}