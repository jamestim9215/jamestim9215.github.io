
class GameHouse extends Phaser.Scene{
    constructor(){
        super('GameHouse');
    }

    init(){
    }

    preload(){
       
    }

    create(){

        var w = (config.width - 320) / 2;
        var h = (config.height - 320) / 2;
        // 新增地圖
        this.map = this.make.tilemap({ key: 'mapHouse' });
        this.tileset = this.map.addTilesetImage('tilesetInHouse2', 'tilesHouse');
        this.ground = this.map.createLayer('Ground', this.tileset, w , h);
        this.wall = this.map.createLayer('Wall', this.tileset,  w , h);
        this.target = this.map.createLayer('target', this.tileset,  w , h);


        this.leftright = 'right';
        this.player = new Player(this, 200, 290, PlayerInfo.skin);
        this.player.setSize(13,20);
        this.player.setOffset(10, 10);
        this.player.isUp = 'Up';
        this.player.anims.play('CharacterIdleUp'+PlayerInfo.skin, true);



        

        this.wall.setCollisionByExclusion([-1])
        this.target.setCollisionByExclusion([-1])
        

        this.physics.add.collider(this.player, this.wall);

        this.physics.add.collider(this.player, this.target,this.hitEvent, null, this);


        // this.wall.debug = true;

        this.cursors = this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys('A,W,D,S,C');
        

        this.cameras.main.setBounds(0, 0, config.width, config.width);
        this.cameras.main.startFollow(this.player, true);
    }

    update(){
        this.player.update(this.cursors,this.keys)

    }

    hitEvent(sprite, tile){
        if(tile.properties.type==='Door'){
            this.scene.start("GamePlay");
        }
        // map.removeTile(tile, 29, false);
    
        // pickups = map.filterTiles(function (tile) {
        //     return (tile.index === 82);
        // });
    }

    playGame(){
        
    }
}