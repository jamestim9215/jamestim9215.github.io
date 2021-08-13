class GameLogo extends Phaser.Scene{
    constructor(){
        super('gameLogo');
    }

    init(){

    }

    preload(){
       
    }

    create(){
        this.aorusLogo = this.add.image(config.width/2 ,config.height/2,"aoruslogo");
        this.aorusLogo.setOrigin(0.5,0.5);
        this.aorusLogo.setScale(1);
        this.aorusLogo.alpha = 0;
        this.aorusslogan = this.add.image(config.width/2 ,config.height-100,"aorusslogan");
        this.aorusslogan.setOrigin(0.5,0.5);
        this.aorusslogan.setScale(1);
        this.aorusslogan.alpha = 0;
        
        this.tweens.add({
            targets: [this.aorusLogo,this.aorusslogan],
            ease: 'Power1',
            duration: 500,
            alpha: 1,
            onComplete: function(){
                this.scene.start('gameMenu');    
            },
            callbackScope: this
        });
    }

    update(){
       
        
    }
    playGame(){
        
    }
}