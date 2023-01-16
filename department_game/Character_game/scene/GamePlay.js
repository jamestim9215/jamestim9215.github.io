import { config, PlayerInfo } from '../config'
// import { socket } from '../socket'
import Player from '../scene/Player.js'
import Slime from '../scene/Slime.js'


export default class GamePlay extends Phaser.Scene {
    constructor() {
        super('GamePlay');
    }
    create() {
        // 新增地圖
        this.map = this.make.tilemap({ key: 'map' });
        this.tileset = this.map.addTilesetImage('TilesetMap', 'tiles');

        this.wall = this.map.createLayer('Wall', this.tileset, 0, 0);
        this.slimeWall = this.map.createLayer('SlimeWall', this.tileset, 0, 0);
        this.target = this.map.createLayer('Target', this.tileset, 0, 0);
        this.water = this.map.createLayer('Sea', this.tileset, 0, 0);
        this.ground = this.map.createLayer('Ground', this.tileset, 0, 0);
        this.ground2 = this.map.createLayer('Ground2', this.tileset, 0, 0);
        this.house = this.map.createLayer('House', this.tileset, 0, 0);
        this.tree = this.map.createLayer('Tree', this.tileset, 0, 0);
        this.tree2 = this.map.createLayer('Tree2', this.tileset, 0, 0);
        this.object = this.map.createLayer('Object', this.tileset, 0, 0);

        this.player = new Player(this, PlayerInfo.x, PlayerInfo.y, PlayerInfo, 'Player');
        this.player.anims.play('CharacterIdleDown' + PlayerInfo.skin, true);
        this.player.isUser = true;


        this.otherPlayers = [];

        this.isInit = false;

        this.wall.setDepth(0);
        this.slimeWall.setDepth(0);
        this.target.setDepth(0);
        this.water.setDepth(0);
        this.ground.setDepth(0);
        this.ground2.setDepth(0);
        this.house.setDepth(0);
        this.tree.setDepth(0);

        this.tree2.setDepth(2);
        this.object.setDepth(2);

        this.wall.setCollisionByExclusion([-1])
        this.slimeWall.setCollisionByExclusion([-1])
        this.target.setCollisionByExclusion([-1])

        
        this.slimeObject = this.map.objects[0].objects;
        this.slimeGroup = [];

        for (var i = 0; i < this.slimeObject.length; i++) {
            this.slimeGroup.push(new Slime(this, this.slimeObject[i].x, this.slimeObject[i].y))
            this.physics.add.collider(this.slimeGroup[i], this.slimeWall);
        }



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

        // setTimeout(() => {
        //     _this.input.on(Phaser.Input.Events.POINTER_UP, (pointer) => {
        //         const { worldX, worldY } = pointer;
        //         _this.moving(_this.player, worldX, worldY);
        //     })
        // }, 3000);




    }

    moving(player, _x, _y) {

        player.isMoving = false;

        var tileInfo0 = this.wall.getTileAtWorldXY(player.x, player.y, true);
        var tileInfo1 = this.wall.getTileAtWorldXY(_x, _y, true);

        // if (player.isAutoMoving == false && (tileInfo0.x * 32 != Math.round(player.x - 16) || tileInfo0.y * 32 != Math.round(player.y - 16))) {
        if (player.movePath.length == 0 && (tileInfo0.x * 32 != Math.round(player.x - 16) || tileInfo0.y * 32 != Math.round(player.y - 16))) {
            player.x = tileInfo0.x * 32 + 16;
            player.y = tileInfo0.y * 32 + 14;
        }

        var newPath = this.wall.findTilePath(tileInfo0.x, tileInfo0.y, tileInfo1.x, tileInfo1.y, this.wall.layer.collideIndexes) || player.movePath;

        player.movePath = newPath;




    }

    update() {

        

        this.player.update(this.cursors, this.keys);
        this.updateMove(this.player);
        for (var index = 0; index < this.otherPlayers.length; index++) {
            this.otherPlayers[index].update(false, false);
            this.updateMove(this.otherPlayers[index]);
        }
        
        for (var i = 0; i < this.slimeGroup.length; i++) {
            this.slimeGroup[i].update();
        }

    }

    updateMove(player) {
        if (player.isMoving) {
            if (player.isUp == 'Right' && player.nextTile.x * 32 <= Math.round(player.x - 12)) {
                player.isMoving = false;
                player.status = 'Idle';
            } else if (player.isUp == 'Left' && player.nextTile.x * 32 >= Math.round(player.x - 19)) {
                player.isMoving = false;
                player.status = 'Idle';
            } else if (player.isUp == 'Down' && player.nextTile.y * 32 <= Math.round(player.y - 10)) {
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
                } else if (player.nextTile.x * 32 < Math.round(player.x - 18)) {
                    player.isUp = 'Left';
                } else if (player.nextTile.y * 32 > Math.round(player.y - 14)) {
                    player.isUp = 'Down';
                } else if (player.nextTile.y * 32 < Math.round(player.y - 18)) {
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

            for (var i = 0; i < this.slimeGroup.length; i++) {
                this.slimeGroup[i].deleteSlime();
            }

            this.slimeGroup = [];


            for (var index = 0; index < this.otherPlayers.length; index++) {
                this.otherPlayers[index].deletePlayer();
            }

            this.otherPlayers = [];

            socket.removeAllListeners();
            socket.disconnect();

            this.scene.stop();
            this.scene.start("GameHouse");
        }
    }

    playGame() {

    }
}