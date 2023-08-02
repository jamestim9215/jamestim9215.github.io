import { CreateDrawMap, UpdateDrawMap } from "@/common/CommonDrawMap.js";
import { config, PlayerInfo } from "@/config";
// import { createGameGui,updatedGameGui } from '@/common/ui-elements/GameGui.js'

export default class MainGame extends Phaser.Scene {
  constructor() {
    super("MainGame");
  }
  create() {
    this.cameras.main.fadeIn(1000, 0, 0, 0);

    this.scenePage = "Main";
    this.playerName = "Player1";
    this.GameStatus = "play"; // play, pause, stop

    // 新增地圖
    // this.Map = this.make.tilemap({ key: 'MainMapJSON' });
    // this.tileSet = this.Map.addTilesetImage('MainTiled', 'MainMapImg');

    this.Map = this.make.tilemap({ key: "CyberMainJSON" });
    this.tileSet1 = this.Map.addTilesetImage(
      "CyberMain1Tiled",
      "CyberMain1TileImg"
    );
    this.tileSet2 = this.Map.addTilesetImage(
      "CyberMain2Tiled",
      "CyberMain2TileImg"
    );
    this.tileSet3 = this.Map.addTilesetImage(
      "CyberMain3Tiled",
      "CyberMain3TileImg"
    );
    this.tileSet4 = this.Map.addTilesetImage(
      "CyberMain4Tiled",
      "CyberMain4TileImg"
    );
    this.tileSet5 = this.Map.addTilesetImage(
      "CyberMain5Tiled",
      "CyberMain5TileImg"
    );

    this.Ground = this.Map.createLayer(
      "Ground",
      [
        this.tileSet1,
        this.tileSet2,
        this.tileSet3,
        this.tileSet4,
        this.tileSet5,
      ],
      0,
      0
    );
    this.MapGround = this.Map.createLayer(
      "Map",
      [
        this.tileSet1,
        this.tileSet2,
        this.tileSet3,
        this.tileSet4,
        this.tileSet5,
      ],
      0,
      0
    );
    this.Object = this.Map.createLayer(
      "Object",
      [
        this.tileSet1,
        this.tileSet2,
        this.tileSet3,
        this.tileSet4,
        this.tileSet5,
      ],
      0,
      0
    );
    this.ObjectPos = this.Map.createFromObjects("Object", "Object", {
      key: "Object",
    });

    this.Ground.setDepth(0);
    this.MapGround.setDepth(0);
    this.Object.setDepth(0);

    CreateDrawMap(this);

    // createGameGui(this);
  }

  update() {
    UpdateDrawMap(this);
    // updatedGameGui(this)
  }

  playGame() {}
}
