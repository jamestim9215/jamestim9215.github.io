class Beamleft extends Phaser.GameObjects.Sprite{
    constructor(scene){
        var x = scene.player.x-32;
        var y = scene.player.y-20;

        super(scene,x,y,"beam2");

        scene.add.existing(this);

        this.setScale(0.3);
        this.play('beam2_anim');
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