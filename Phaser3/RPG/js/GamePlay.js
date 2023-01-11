
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
        this.tileset = this.map.addTilesetImage('TilesetMap', 'tiles');

        this.wall = this.map.createLayer('Wall', this.tileset, 0, 0);
        this.target = this.map.createLayer('Target', this.tileset, 0, 0);
        this.water = this.map.createLayer('Sea', this.tileset, 0, 0);
        this.ground = this.map.createLayer('Ground', this.tileset, 0, 0);
        this.ground2 = this.map.createLayer('Ground2', this.tileset, 0, 0);
        this.house = this.map.createLayer('House', this.tileset, 0, 0);

        // this.sky.setScale(2);
        this.player = new Player(this,PlayerInfo.x,PlayerInfo.y, PlayerInfo);
        this.player.anims.play('CharacterIdleDown'+PlayerInfo.skin, true);

        this.tree = this.map.createLayer('Tree', this.tileset, 0, 0);
        this.object = this.map.createLayer('Object', this.tileset, 0, 0);

        // this.map.setCollision([235], true, this.wall);

        this.wall.setCollisionByExclusion([-1])
        this.target.setCollisionByExclusion([-1])
        
        this.physics.add.collider(this.player, this.wall,this.hitWallEvent, null, this);

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

        this.input.on(Phaser.Input.Events.POINTER_UP, (pointer) => {
           
            const { worldX, worldY } = pointer

           
            _this.player.movePath = [];
            _this.player.isMoving = false;
            // _this.player.isUp = 'Stand';

            var tileInfo0 = _this.wall.getTileAtWorldXY(_this.player.x,_this.player.y,true);
            var tileInfo1 = _this.wall.getTileAtWorldXY(worldX,worldY,true);
            _this.player.movePath = _this.wall.findTilePath(tileInfo0.x, tileInfo0.y, tileInfo1.x, tileInfo1.y, _this.wall.layer.collideIndexes) || _this.player.movePath;

            // console.log(_this.player.movePath);

            if((tileInfo0.x * 32 != Math.round(_this.player.x - 16) || tileInfo0.y * 32 != Math.round(_this.player.y - 16))){
                _this.player.x = tileInfo0.x*32+16;
                _this.player.y = tileInfo0.y*32+16;
            }


        })

    

        // scaleRatio = window.devicePixelRatio / 3;
        // myAsset.scale.setTo(scaleRatio, scaleRatio);
    }

    update(){
        this.player.update(this.cursors,this.keys)


        if(this.player.isMoving){

            
            if(this.player.isUp=='Right' && this.player.nextTile.x * 32 <= Math.round(this.player.x - 16)){
                this.player.isMoving = false;
                this.player.status = 'Idle';
            }else

            if(this.player.isUp=='Left' && this.player.nextTile.x * 32 >= Math.round(this.player.x - 16)){
                this.player.isMoving = false;
                this.player.status = 'Idle';
            }else

            if(this.player.isUp=='Down' && this.player.nextTile.y * 32 <= Math.round(this.player.y - 16)){
                this.player.isMoving = false;
                this.player.status = 'Idle';
            }else

            if(this.player.isUp=='Up' && this.player.nextTile.y * 32 >= Math.round(this.player.y - 16)){
                this.player.isMoving = false;
                this.player.status = 'Idle';
            }
            else{

            }

        }else{
            if(this.player.movePath.length>0){
                this.player.isMoving = true;
                this.player.nextTile = this.player.movePath.pop();

                this.player.status = 'walking';

                if(this.player.nextTile.x * 32 < Math.round(this.player.x - 16)){
                    this.player.isUp = 'Left';
                }
                else 
                if(this.player.nextTile.x  * 32 > Math.round(this.player.x - 16)){
                    this.player.isUp = 'Right';
                }

                if(this.player.nextTile.y  * 32 < Math.round(this.player.y - 16)){
                    this.player.isUp = 'Up';
                }
                else 
                if(this.player.nextTile.y  * 32 > Math.round(this.player.y - 16)){
                    this.player.isUp = 'Down';
                }

            }
            else
            {
                this.player.isMoving = false;
                this.player.status = 'Idle';
            }
        }




    }
    hitWallEvent(sprite, tile){
        console.log("????");
        // this.player.movePath = [];
        // this.player.isMoving = false;
        // this.player.isUp = 'Stand';
    }

    hitEvent(sprite, tile){
        console.log(tile.properties.type);
        if(tile.properties.type==='Door'){
            PlayerInfo.x = this.player.x;
            PlayerInfo.y = this.player.y;
            this.scene.start("GameHouse");
        }
    }

    playGame(){
        
    }
}