class BeamEnemy extends Phaser.GameObjects.Sprite{
    constructor(scene,enemy){
        var x = enemy.x;
        var y = enemy.y;
        if(enemy.type==0){
            y = y + 50;
        }else{
            y = y + 100;
        }

        super(scene,x,y,"beam3");

        scene.add.existing(this);

        this.play('beam3_anim');
        scene.physics.world.enableBody(this);
        if(enemy.type==0){
            this.setScale(0.2);
            this.body.velocity.y = 500;
        }else{
            this.setScale(0.5);
            this.body.velocity.y = 700;
        }
        

        scene.enemyProjectiles.add(this);
    }
    update(){
        if(this.y > 1000){
            this.destroy();
        }
    }
}