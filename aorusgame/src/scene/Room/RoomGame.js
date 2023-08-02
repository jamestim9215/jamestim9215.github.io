import { CreateDrawMap, UpdateDrawMap } from "@/common/CommonDrawMap.js";
import { PlayerInfo } from "../../config";

export default class RoomGame extends Phaser.Scene {
  constructor() {
    super("RoomGame");
  }
  create() {
    this.cameras.main.fadeIn(1000, 0, 0, 0);
    document.querySelectorAll("canvas")[0].style.background = "#352a29";

    this.scenePage = "Room";
    this.playerName = "";
    this.GameStatus = "play"; // play, pause, stop

    // 新增地圖
    this.Map = this.make.tilemap({ key: "CyberRoomJSON" });
    this.tileSet1 = this.Map.addTilesetImage("Mid-TownA5", "CyberRoom1TileImg");
    this.tileSet2 = this.Map.addTilesetImage("Mid-TownD", "CyberRoom2TileImg");
    this.tileSet3 = this.Map.addTilesetImage("Mid-TownB", "CyberRoom3TileImg");
    this.tileSet4 = this.Map.addTilesetImage("Mid-TownC", "CyberRoom4TileImg");
    this.tileSet5 = this.Map.addTilesetImage("CP_WallsA4", "CyberRoom5TileImg");

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
