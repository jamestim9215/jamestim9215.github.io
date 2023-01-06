
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
        this.playerSkin = 1;
        this.player = new Player(this, 200, 290, this.playerSkin);
        this.player.setSize(13,20);
        this.player.setOffset(10, 10);



        

        this.wall.setCollisionByExclusion([-1])
        this.target.setCollisionByExclusion([-1])
        

        this.physics.add.collider(this.player, this.wall);

        this.physics.add.collider(this.player, this.target,this.hitEvent, null, this);


        // this.wall.debug = true;

        this.cursors = this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys('A,W,D,S,C');
        var _this = this;
        

        this.input.keyboard.on('keydown', function (event) {
            if(event.key==='c'){
                _this.playerSkin = _this.playerSkin + 1;
                if(_this.playerSkin > 32) _this.playerSkin = 1;
                _this.player.skin = _this.playerSkin;
                _this.player.setAnims();
            }
        });

        this.cameras.main.setBounds(0, 0, config.width, config.width);
        this.cameras.main.startFollow(this.player, true);
    }

    update(){
        this.player.update(this.cursors,this.keys)

    }

    hitEvent(sprite, tile){
        console.log(tile);
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