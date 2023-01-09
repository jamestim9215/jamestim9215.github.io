
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
        this.tileset = this.map.addTilesetImage('tileset', 'tiles');
        this.water = this.map.createLayer('water', this.tileset, 0, 0);
        this.waterWall = this.map.createLayer('waterwall', this.tileset, 0, 0);
        this.wave = this.map.createLayer('wave', this.tileset, 0, 0);
        this.ground = this.map.createLayer('ground', this.tileset, 0, 0);
        this.wall = this.map.createLayer('wall', this.tileset, 0, 0);
        this.ground2 = this.map.createLayer('ground2', this.tileset, 0, 0);
        this.target = this.map.createLayer('target', this.tileset, 0, 0);
        this.wall2 = this.map.createLayer('wall2', this.tileset, 0, 0);
        this.house = this.map.createLayer('house', this.tileset, 0, 0);


        // this.sky.setScale(2);

        this.leftright = 'right';
        this.player = new Player(this, PlayerInfo.x, PlayerInfo.y, PlayerInfo.skin);
        this.player.anims.play('CharacterIdleDown'+PlayerInfo.skin, true);


        this.tree = this.map.createLayer('tree', this.tileset, 0, 0);
        this.treeWall = this.map.createLayer('treewall', this.tileset, 0, 0);
        this.object = this.map.createLayer('object', this.tileset, 0, 0);
        this.objectWall = this.map.createLayer('objectWall', this.tileset, 0, 0);

        this.waterWall.setCollisionByExclusion([-1])
        this.wall.setCollisionByExclusion([-1])
        this.wall2.setCollisionByExclusion([-1])
        this.house.setCollisionByExclusion([-1])
        this.treeWall.setCollisionByExclusion([-1])
        this.objectWall.setCollisionByExclusion([-1])
        this.target.setCollisionByExclusion([-1])
        

        this.physics.add.collider(this.player, this.waterWall);
        this.physics.add.collider(this.player, this.wall);
        this.physics.add.collider(this.player, this.wall2);
        this.physics.add.collider(this.player, this.house);
        this.physics.add.collider(this.player, this.treeWall);
        this.physics.add.collider(this.player, this.objectWall);

        this.physics.add.collider(this.player, this.target,this.hitEvent, null, this);

        this.waterWall.debug = true;

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