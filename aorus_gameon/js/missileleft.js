class Missileleft extends Phaser.GameObjects.Sprite{
    constructor(scene){
        var x = scene.player.x-80;
        var y = scene.player.y+60;

        super(scene,x,y,"missile");

        scene.add.existing(this);

        this.type = 1;
        this.setScale(0.7);
        // this.angle = -11;
        this.play('missile_anim');
        scene.physics.world.enableBody(this);
        this.body.velocity.y = - 500;
        // this.body.velocity.x = - 100;
    
        scene.projectiles.add(this);
    }
    update(scene){
        if(this.y < 0 || this.y > config.height || this.x < 0 || this.x> config.width){
            this.destroy();
            return;
        }
        var _enemy = null;
        for(var j=0; j<scene.enemies.getChildren().length; j++){
            var enemy = scene.enemies.getChildren()[j];
            if(enemy.type==2){
                _enemy = enemy;
                break;
            }
        }
        if(_enemy){
            var target = _enemy;
            if(target.y < scene.player.y - 300){
                const targetAngle = Phaser.Math.Angle.Between(
                    this.x, this.y,
                    target.x, target.y
                )
                let diff = Phaser.Math.Angle.Wrap(targetAngle - this.rotation)
                this.angle += diff + 1.5;
                const vx = Math.cos(targetAngle) * 250;
                const vy = Math.sin(targetAngle) * 800;
                console.log(vx);
                this.body.velocity.y = vy ;
                this.body.velocity.x = vx ;
            }
        }
    }
}