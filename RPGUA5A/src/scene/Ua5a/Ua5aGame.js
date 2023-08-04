import { CreateDrawMap, UpdateDrawMap } from "@/common/CommonDrawMap.js";
import { PlayerInfo } from "../../config";

export default class Ua5aGame extends Phaser.Scene {
  constructor() {
    super("Ua5aGame");
  }
  create() {
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    document.querySelectorAll("canvas")[0].style.background = "#352a29";

    this.scenePage = "Ua5a";
    this.playerName = "";
    this.GameStatus = "play"; // play, pause, stop

    // 新增地圖
    this.Map = this.make.tilemap({ key: "Ua5aJSON" });
    this.tileSet1 = this.Map.addTilesetImage("pixel-cyberpunk-interior", "Ua5aMap1TileImg");
    this.tileSet2 = this.Map.addTilesetImage("Tileset", "Ua5aMap2TileImg");
    this.tileSet3 = this.Map.addTilesetImage("TileSet v1.0", "Ua5aMap3TileImg");

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

    this.RoomDoor = null;

    this.objectList.children.entries.map((item)=>{
      if(item.name == 'RoomDoor'){
        this.RoomDoor = item;
        this.RoomDoor.body.enable = false;
      }
    })

    this.isShowGirl = false;
  }

  update() {
    UpdateDrawMap(this);

    if(PlayerInfo.Flag.indexOf('room_npc_1') != -1){
      this.RoomDoor.body.enable = true;
    }

    if(this.isShowGirl==false && PlayerInfo.Flag.indexOf("show_girl") != -1){
      this.isShowGirl = true;
      
    }
  }

  playGame() {}
}
