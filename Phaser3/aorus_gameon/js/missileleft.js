class Missileleft extends Phaser.GameObjects.Sprite{
    constructor(scene){
        var x = scene.player.x-80;
        var y = scene.player.y+60;

        super(scene,x,y,"missile");

        scene.add.existing(this);

        this.type = 1;
        this.target = null;
        this.setScale(0.7);
        // this.angle = -11;
        this.play('missile_anim');
        scene.physics.world.enableBody(this);
        this.body.velocity.y = - 500;
        // this.body.velocity.x = - 100;
        this.body.setCircle(25,25,25);
    
        scene.projectiles.add(this);
    }
    update(scene){
        if(this.y < 0 || this.y > config.height || this.x < 0 || this.x> config.width){
            this.destroy();
            return;
        }
        var _enemy = null;
        if(this.target==null){
            _enemy = null;
            var enemyCount = scene.enemies.getChildren().length - 1;
            var randemId = Phaser.Math.Between(0,enemyCount);
            var enemy = scene.enemies.getChildren()[randemId];
            _enemy = enemy;
            // for(var j=0; j<scene.enemies.getChildren().length; j++){
                
            //     var enemy = scene.enemies.getChildren()[j];
            //     if(enemy.type==0){
                    
                    // _enemy = enemy;
            //         break;
            //     }
            // }
            this.target = _enemy;
        }else{
            _enemy = this.target;
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
                this.body.velocity.y = vy ;
                this.body.velocity.x = vx ;
            }
        }
    }
}