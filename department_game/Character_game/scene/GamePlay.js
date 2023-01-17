import { config, PlayerInfo } from '../config'
// import { socket } from '../socket'
import Player from '../scene/Player.js'
import Slime from '../scene/Slime.js'
import Sword from '../scene/Sword.js'
import Smear from '../scene/Smear.js'
import { Game } from 'phaser'


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

        this.playerContainer = this.add.container(PlayerInfo.x, PlayerInfo.y);
        this.playerContainer.setSize(16, 26);
        this.physics.world.enable(this.playerContainer);

        this.player = new Player(this, PlayerInfo.x, PlayerInfo.y, PlayerInfo, 'Player');
        this.player.anims.play('CharacterIdleDown', true);
        this.player.isUser = true;
        
        this.sword = new Sword(this);
        this.smear = new Smear(this);

        this.swordHitbox = this.add.rectangle(0, 0, 16, 16, 0xffffff, 0).setOrigin(0.5, 0.5);
        this.swordHitbox.setActive(false).setVisible(false);
        this.swordHitbox.isAttack = false;
        this.swordHitbox.attackNum = 0;
        this.physics.add.existing(this.swordHitbox);

        this.playerContainer.add(this.player);
        this.playerContainer.add(this.sword);
        this.playerContainer.add(this.smear);
        this.playerContainer.add(this.swordHitbox);


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

        this.slimes = this.add.group();

        for (var i = 0; i < this.slimeObject.length; i++) {
            var slime = new Slime(this, this.slimeObject[i].x, this.slimeObject[i].y);

            this.slimes.add(slime)
        }

        this.slimes.children.entries.forEach((slime)=>{
            this.physics.add.collider(slime, this.slimeWall);
            this.physics.add.overlap(this.swordHitbox, slime,this.hitSlime)
        })



        this.physics.add.collider(this.playerContainer, this.wall);
        // this.physics.add.collider(this.playerContainer, this.target, this.hitEvent, null, this);


        this.cursors = this.input.keyboard.createCursorKeys();
        this.keys = this.input.keyboard.addKeys('A,W,D,S,C,Z');



        this.cameras.main.setBounds(0, 0, 800, 800);
        this.cameras.main.startFollow(this.playerContainer, true);



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
        this.sword.update(this.cursors, this.keys);
        this.smear.update(this.cursors, this.keys);

        this.updateMove(this.player);
        for (var index = 0; index < this.otherPlayers.length; index++) {
            this.otherPlayers[index].update(false, false);
            this.updateMove(this.otherPlayers[index]);
        }


        
        this.slimes.children.entries.forEach((slime)=>{
            slime.update();
        })




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
    hitSlime(swordHitbox, slime) {
        if(swordHitbox.isAttack){
            if(swordHitbox.attackNum == 0){
                swordHitbox.attackNum =  swordHitbox.attackNum +1;
                
                console.log(swordHitbox, slime);
                setTimeout(()=>{
                    slime.hp = slime.hp - 10;
                    slime.slimeHpText.text = slime.hp;
                    slime.setTint(0xff0000);
                    setTimeout(()=>{
                        slime.clearTint();
                        if(slime.hp <= 0){
                            slime.deleteSlime();

                        }
                    },50)
                    
                },200)
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