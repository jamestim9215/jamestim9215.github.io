class Beam extends Phaser.GameObjects.Sprite{
    constructor(scene){
        var x = scene.player.x;
        var y = scene.player.y-70;

        super(scene,x,y,"beam");

        scene.add.existing(this);

        this.play('beam_anim');
        scene.physics.world.enableBody(this);
        this.body.velocity.y = - 500;

        scene.projectiles.add(this);
    }
    update(){
        if(this.y < 50){
            this.destroy();
        }
    }
}