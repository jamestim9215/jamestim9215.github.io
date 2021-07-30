class Beamleft extends Phaser.GameObjects.Sprite{
    constructor(scene){
        var x = scene.player.x-48;
        var y = scene.player.y-28;
        var x2 = scene.player.x+48;

        super(scene,x,y,"beam");
        // scene.projectiles.add(this);
        scene.add.existing(this);
        this.play('beam_anim');
        scene.physics.world.enableBody(this);
        this.body.velocity.y = - 500;
    }
    update(){
        if(this.y < 0){
            this.destroy();
        }
    }
}