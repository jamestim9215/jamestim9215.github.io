class BeamEnemy extends Phaser.GameObjects.Sprite{
    constructor(scene,enemy,shootType){
        var x = enemy.x;
        var y = enemy.y;

        super(scene,x,y,"beam3");

        if(enemy.type==0){
            y = y + 50;
        }
        if(enemy.type==1){
            y = y + 70;
        }
        if(enemy.type==2){
            y = y + 100;
        }

        var enemySpeed = enemy.speedY;

        scene.physics.world.enableBody(this);
        if(enemy.type==0){
            this.setScale(0.2);
            this.body.velocity.y = enemySpeed + 500;
            this.body.setCircle(50);
        }
        if(enemy.type==1){
            this.setScale(0.35);
            this.body.velocity.y = enemySpeed + 500;
            this.body.setCircle(50);
        }
        if(enemy.type==2){
            this.setScale(0.5);
            this.body.velocity.y = enemySpeed + 700;
            this.body.setCircle(50);
        }
        if(shootType=='L'){
            this.body.velocity.x = - 250
        }
        if(shootType=='R'){
            this.body.velocity.x = + 250
        }

        scene.add.existing(this);
        scene.enemyProjectiles.add(this);

        this.play('beam3_anim');
    
    }
    update(){
        if(this.y > 1000){
            this.destroy();
        }
    }
}