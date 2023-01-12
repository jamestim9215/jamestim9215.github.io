
class GamePlay extends Phaser.Scene {
    constructor() {
        super('GamePlay');
    }

    init() {
    }

    preload() {

    }

    create() {


        // 新增地圖
        this.map = this.make.tilemap({ key: 'map' });
        this.tileset = this.map.addTilesetImage('TilesetMap', 'tiles');

        this.wall = this.map.createLayer('Wall', this.tileset, 0, 0);
        this.target = this.map.createLayer('Target', this.tileset, 0, 0);
        this.water = this.map.createLayer('Sea', this.tileset, 0, 0);
        this.ground = this.map.createLayer('Ground', this.tileset, 0, 0);
        this.ground2 = this.map.createLayer('Ground2', this.tileset, 0, 0);
        this.house = this.map.createLayer('House', this.tileset, 0, 0);
        this.tree = this.map.createLayer('Tree', this.tileset, 0, 0);
        this.object = this.map.createLayer('Object', this.tileset, 0, 0);



        this.player = new Player(this, PlayerInfo.x, PlayerInfo.y, PlayerInfo,'Player');
        this.player.anims.play('CharacterIdleDown' + PlayerInfo.skin, true);
        this.player.isUser = true;

        this.otherPlayers = [];

        /*加入聊天室提示*/
        socket.on('add', function (data) {
            console.log("newUser", data.Name);
            // _this.newPlayerInText = _this.add.text(30, 100, data.Name, {
            //     fontFamily: 'Arial',
            //     color: '#ffffff'
            // }).setFontSize(14).setOrigin(0).setDepth(5);

            // setTimeout(()=>{
            //     _this.newPlayerInText.destroy();
            // }, 5000)

        })

        this.isInit = false;

        socket.emit("allPlayer", null);
        socket.on('allPlayerInit', function (dataList) {
            for(var key=0; key<dataList.length; key++){
                console.log(dataList[key].Name , PlayerInfo.Name);
                if(dataList[key].Name != PlayerInfo.Name) {
                    var isNew = true;
                    for(var index=0; index < _this.otherPlayers.length; index++){
                        if(dataList[key].Name == _this.otherPlayers[index].name._text){
                            isNew = false;
                            break;
                        }
                    }
                    if(isNew) _this.otherPlayers.push(new Player(_this, dataList[key].x, dataList[key].y, dataList[key],'Other'));
                }
            }

            _this.isInit = true;
        })

        

        /*加入聊天室提示*/
        socket.on('moveing', function (data) {

            if(_this.isInit){
                // var isNew = true;
                // if (PlayerInfo.Name === data.Name) {
                //     isNew = false;
                // }
                // for(var index=0; index < _this.otherPlayers.length; index++){
                //     if (_this.otherPlayers[index].name._text == data.Name) {
                //         isNew = false;
                //         _this.moving(_this.otherPlayers[index], data.x, data.y);
                //         break;
                //     }
                // }
                // if (isNew) {
                //     _this.otherPlayers.push(new Player(_this, 400, 400, data,'Other'));
                // }

                var isNew = true;
                for(var index=0; index < _this.otherPlayers.length; index++){
                    
                    if(data.Name == _this.otherPlayers[index].name._text){
                        isNew = false;
                        _this.moving(_this.otherPlayers[index], data.x, data.y);
                        break;
                    }
                }
                if (PlayerInfo.Name === data.Name) {
                    isNew = false;
                }
                if(isNew) _this.otherPlayers.push(new Player(_this, dataList[key].x, dataList[key].y, dataList[key],'Other'));
            }

        })

        /*離開提示*/
        socket.on('logout', function (name) {
            for(var index=0; index < _this.otherPlayers.length; index++){
                if (_this.otherPlayers[index].name._text == name) {
                    _this.otherPlayers[index].isDestroy = true;
                    break;
                }
            }
        })

        this.wall.setDepth(0);
        this.target.setDepth(0);
        this.water.setDepth(0);
        this.ground.setDepth(0);
        this.ground2.setDepth(0);
        this.house.setDepth(0);

        this.tree.setDepth(2);
        this.object.setDepth(2);

        // this.map.setCollision([235], true, this.wall);

        this.wall.setCollisionByExclusion([-1])
        this.target.setCollisionByExclusion([-1])

        this.physics.add.collider(this.player, this.wall);

        this.physics.add.collider(this.player, this.target, this.hitEvent, null, this);

        // this.waterWall.debug = true;

        this.cursors = this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys('A,W,D,S,C');
        var _this = this;


        this.input.keyboard.on('keydown', function (event) {
            if (event.key === 'c') {
                PlayerInfo.skin = PlayerInfo.skin + 1;
                if (PlayerInfo.skin > 32) PlayerInfo.skin = 1;
                _this.player.skin = PlayerInfo.skin;
                _this.player.setAnims();
            }
        });



        this.cameras.main.setBounds(0, 0, 800, 800);
        this.cameras.main.startFollow(this.player, true);

        this.input.on(Phaser.Input.Events.POINTER_UP, (pointer) => {

            const { worldX, worldY } = pointer;

            _this.moving(_this.player, worldX, worldY);

        })
    }

    moving(player, _x, _y) {

        // console.log(player.x , player.y , _x, _y);
        player.movePath = [];
        player.isMoving = false;

        var tileInfo0 = this.wall.getTileAtWorldXY(player.x, player.y, true);
        var tileInfo1 = this.wall.getTileAtWorldXY(_x, _y, true);


        player.movePath = this.wall.findTilePath(tileInfo0.x, tileInfo0.y, tileInfo1.x, tileInfo1.y, this.wall.layer.collideIndexes) || player.movePath;
        

        if (player.isAutoMoving == false && (tileInfo0.x * 32 != Math.round(player.x - 16) || tileInfo0.y * 32 != Math.round(player.y - 16))) {
            player.x = tileInfo0.x * 32 + 16;
            player.y = tileInfo0.y * 32 + 16;
        }
    }

    update() {
        
        this.player.update(this.cursors, this.keys);
        this.updateMove(this.player);

        

        for(var index=0; index < this.otherPlayers.length; index++){
            if(this.otherPlayers[index].isDestroy == true){
                
                this.otherPlayers[index].deletePlayer();
                this.otherPlayers.splice(index, 1);
                break;
            }
            this.otherPlayers[index].update(false,false);
            this.updateMove(this.otherPlayers[index]);
        }

    }

    updateMove(player){
        if (player.isMoving) {
            if (player.isUp == 'Right' && player.nextTile.x * 32  <= Math.round(player.x - 14)) {
                player.isMoving = false;
                player.status = 'Idle';
            } else if (player.isUp == 'Left' && player.nextTile.x * 32 >= Math.round(player.x - 18)) {
                player.isMoving = false;
                player.status = 'Idle';
            } else if (player.isUp == 'Down' && player.nextTile.y * 32 <= Math.round(player.y - 14)) {
                player.isMoving = false;
                player.status = 'Idle';
            } else if (player.isUp == 'Up' && player.nextTile.y * 32 >= Math.round(player.y - 18)) {
                player.isMoving = false;
                player.status = 'Idle';
            }
        } else {
            if (player.movePath.length > 0) {
                player.isMoving = true;
                player.nextTile = player.movePath.pop();
                player.status = 'walking';
                if (player.nextTile.x * 32 > Math.round(player.x - 14)) {
                    player.isUp = 'Right';
                }else if (player.nextTile.x * 32 < Math.round(player.x - 18)) {
                    player.isUp = 'Left';
                }else if (player.nextTile.y * 32 > Math.round(player.y - 14)) {
                    player.isUp = 'Down';
                }else if (player.nextTile.y * 32 < Math.round(player.y - 18)) {
                    player.isUp = 'Up';
                }
            }
            else {
                player.isMoving = false;
                player.status = 'Idle';
            }
        }
    }


    hitEvent(sprite, tile) {
        console.log(tile.properties.type);
        if (tile.properties.type === 'Door') {
            PlayerInfo.x = this.player.x;
            PlayerInfo.y = this.player.y;
            this.scene.start("GameHouse");
        }
    }

    playGame() {

    }
}