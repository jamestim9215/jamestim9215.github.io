import { CreateDrawMap, UpdateDrawMap } from "@/common/CommonDrawMap.js";

export default class HomeGame extends Phaser.Scene {
  constructor() {
    super("HomeGame");
  }
  create() {
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    document.querySelectorAll("canvas")[0].style.background = "#2d3035";

    this.scenePage = "Home";
    this.playerName = "Player1";
    this.GameStatus = "play"; // play, pause, stop

    // 新增地圖
    this.Map = this.make.tilemap({ key: "CyberHomeJSON" });
    this.tileSet1 = this.Map.addTilesetImage("Cyber1Tiled", "Cyber1TileImg");
    this.tileSet2 = this.Map.addTilesetImage("Cyber2Tiled", "Cyber2TileImg");
    this.tileSet3 = this.Map.addTilesetImage("Cyber3Tiled", "Cyber3TileImg");
    this.tileSet4 = this.Map.addTilesetImage("Cyber4Tiled", "Cyber4TileImg");
    this.tileSet5 = this.Map.addTilesetImage("Cyber5Tiled", "Cyber5TileImg");

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

    this.cameras.main.setBounds(
      0,
      0,
      this.Map.widthInPixels,
      this.Map.heightInPixels
    ); // 800 * 800 地圖大小

    CreateDrawMap(this);
  }

  update() {
    UpdateDrawMap(this);
  }

  playGame() {}
}
