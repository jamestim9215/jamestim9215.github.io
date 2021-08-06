class BeamEnemy extends Phaser.GameObjects.Sprite{
    constructor(scene,enemy){
        var x = enemy.x;
        var y = enemy.y;

        super(scene,x,y,"beam3");

        scene.add.existing(this);

        this.play('beam3_anim');
        scene.physics.world.enableBody(this);
        this.body.velocity.y = 500;

        scene.enemyProjectiles.add(this);
    }
    update(){
        if(this.y > 1000){
            this.destroy();
        }
    }
}