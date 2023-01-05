
class GamePlay extends Phaser.Scene{
    constructor(){
        super('GamePlay');
    }

    init(){
    }

    preload(){
       
    }

    create(){

        // 新增地圖
        this.map = this.make.tilemap({ key: 'map' });
        this.tileset = this.map.addTilesetImage('nature-paltformer-tileset-16x16', 'tiles');
        this.sky = this.map.createLayer('sky', this.tileset, 0, 0);
        this.tree = this.map.createLayer('tree', this.tileset, 0, 0);
        this.ground = this.map.createLayer('ground', this.tileset, 0, 0);

        this.sky.setScale(2);
        this.tree.setScale(2);
        this.ground.setScale(2);
        this.ground.setCollisionByExclusion([-1])
        

        this.ground.debug = true;

        this.leftright = 'right';

        this.player = new Player(this, 100, 150);
        this.player.setSize(16,32, 30, 20);

        this.physics.add.collider(this.player, this.ground);

        this.cursors = this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys('A,W,D,S');

    }

    update(){
        this.player.update(this.cursors,this.keys)
    }

    playGame(){
        
    }
}