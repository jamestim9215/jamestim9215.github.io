class Missileright extends Phaser.GameObjects.Sprite{
    constructor(scene){
        var x = scene.player.x+50;
        var y = scene.player.y;

        super(scene,x,y,"missile");
        
        scene.add.existing(this);

        this.play('missile_anim');
        this.angle = 11;
        scene.physics.world.enableBody(this);
        this.body.velocity.y = - 500;
        this.body.velocity.x = 100;

        scene.projectiles.add(this);
    }
    update(){
        if(this.y < 50){
            this.destroy();
        }
    }
}