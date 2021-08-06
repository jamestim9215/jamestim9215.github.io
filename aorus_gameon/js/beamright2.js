class Beamright2 extends Phaser.GameObjects.Sprite{
    constructor(scene){
        var x = scene.player.x+48;
        var y = scene.player.y-15;

        super(scene,x,y,"beam2");
        
        scene.add.existing(this);

        this.play('beam2_anim');
        scene.physics.world.enableBody(this);
        this.body.velocity.y = - 500;
        this.body.velocity.x = + 50;

        scene.projectiles.add(this);
    }
    update(){
        if(this.y < 50){
            this.destroy();
        }
    }
}