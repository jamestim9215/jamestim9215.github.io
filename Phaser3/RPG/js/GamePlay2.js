
class GamePlay2 extends Phaser.Scene{
    constructor(){
        super('GamePlay2');
    }

    init(){
    }

    preload(){
       
    }

    create(){

        console.log("????????? Game 2");

        // 新增地圖
        this.map = this.make.tilemap({ key: 'map' });
        this.tileset = this.map.addTilesetImage('TilesetMap', 'tiles');

        this.wall = this.map.createLayer('Wall', this.tileset, 0, 0);
        this.target = this.map.createLayer('Target', this.tileset, 0, 0);
        this.water = this.map.createLayer('Sea', this.tileset, 0, 0);
        this.ground = this.map.createLayer('Ground', this.tileset, 0, 0);
        this.ground2 = this.map.createLayer('Ground2', this.tileset, 0, 0);
        this.house = this.map.createLayer('House', this.tileset, 0, 0);

        // this.sky.setScale(2);
        this.player = new Player(this, PlayerInfo.x, PlayerInfo.y, PlayerInfo.skin);
        this.player.anims.play('CharacterIdleDown'+PlayerInfo.skin, true);

        this.tree = this.map.createLayer('Tree', this.tileset, 0, 0);
        this.object = this.map.createLayer('Object', this.tileset, 0, 0);

        // this.map.setCollision([235], true, this.wall);

        this.wall.setCollisionByExclusion([-1])
        this.target.setCollisionByExclusion([-1])
        
        this.physics.add.collider(this.player, this.wall);

        this.physics.add.collider(this.player, this.target,this.hitEvent, null, this);

        // this.waterWall.debug = true;

        this.cursors = this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys('A,W,D,S,C');
        var _this = this;
        

        this.input.keyboard.on('keydown', function (event) {
            if(event.key==='c'){
                PlayerInfo.skin =PlayerInfo.skin + 1;
                if(PlayerInfo.skin > 32) PlayerInfo.skin = 1;
                _this.player.skin = PlayerInfo.skin;
                _this.player.setAnims();
            }
        });

        this.cameras.main.setBounds(0, 0, 800, 800);
        this.cameras.main.startFollow(this.player, true);  

        // scaleRatio = window.devicePixelRatio / 3;
        // myAsset.scale.setTo(scaleRatio, scaleRatio);
    }

    update(){
        this.player.update(this.cursors,this.keys)

    }

    hitEvent(sprite, tile){
        console.log(tile.properties.type);
        if(tile.properties.type==='Door'){
            PlayerInfo.x = this.player.x;
            PlayerInfo.y = this.player.y;
            this.scene.start("GameHouse");
        }
        // map.removeTile(tile, 29, false);
    
        // pickups = map.filterTiles(function (tile) {
        //     return (tile.index === 82);
        // });
    }

    playGame(){
        
    }
}