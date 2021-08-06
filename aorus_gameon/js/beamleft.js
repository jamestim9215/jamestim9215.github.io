class Beamleft extends Phaser.GameObjects.Sprite{
    constructor(scene){
        var x = scene.player.x-28;
        var y = scene.player.y-20;

        super(scene,x,y,"beam");

        scene.add.existing(this);

        this.play('beam_anim');
        scene.physics.world.enableBody(this);
        this.body.velocity.y = - 500;
        this.body.velocity.x = 0;

        scene.projectiles.add(this);
    }
    update(){
        if(this.y < 50){
            this.destroy();
        }
    }
}