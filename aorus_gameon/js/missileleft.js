class Missileleft extends Phaser.GameObjects.Sprite{
    constructor(scene){
        var x = scene.player.x-50;
        var y = scene.player.y;

        super(scene,x,y,"missile");

        scene.add.existing(this);

        this.type = 1;
        this.setScale(0.7);
        this.angle = -11;
        this.play('missile_anim');
        scene.physics.world.enableBody(this);
        this.body.velocity.y = - 500;
        this.body.velocity.x = - 100;

        scene.projectiles.add(this);
    }
    update(scene){
        if(this.y < 50){
            this.destroy();
        }
        // var _enemy = null;
        // for(var j=0; j<scene.enemies.getChildren().length; j++){
        //     var enemy = scene.enemies.getChildren()[j];
        //     if(enemy.type==1){
        //         _enemy = enemy;
        //         break;
        //     }
        // }
        // if(_enemy){
        //     // target  x, y
        //     const tx = _enemy.x;
        //     const ty = _enemy.y;
        //     const x = this.x;
        //     const y = this.y;
        //     const rotation = Phaser.Math.Angle.Between(x, y, tx, ty);
        //     console.log(rotation);
        //     this.setRotation(rotation + 1.5);


        //     this.body.velocity.y = (y-ty)>0? -500:500;
        //     this.body.velocity.x = (x-tx)>0? -100:100;
        // }
    }
}