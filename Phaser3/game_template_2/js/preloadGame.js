class preloadGame extends Phaser.Scene{
    constructor(){
        super('preloadGame');
    }

    init(){

    }

    preload(){
        this.load.image('bg-1',"assets/images/bg-1.png");
        this.load.image('bg-2',"assets/images/bg-2.png");
        this.load.spritesheet('player',"assets/images/spritesheets/player.png",{
            frameWidth: 60,
            frameHeight: 53
        });

    }

    create(){
        this.add.text(20, 20, "Loading game "); 

        // setTimeout(()=>{this.add.text(140, 20, ".");},1000);
        // setTimeout(()=>{this.add.text(160, 20, ".");},2000);
        // setTimeout(()=>{this.add.text(180, 20, ".");},3000);

        // setTimeout(()=>{this.scene.start("playGame");},4000);

        this.scene.start('playGame');
    }

    update(){

    }
}