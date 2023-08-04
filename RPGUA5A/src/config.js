let PlayerInfo = {
  x: 0,
  y: 0,
  CharacterId: "",
  Name: "", //名稱
  Level: 1, //等級
  Experience: 0, //經驗值
  Health: 100, //血量
  Gold: 0, //金幣
  Inventory: 10, //背包
  Quests: [], //任務
  Skills: null, //技能
  Achievements: [], //成就
  Language: "zh-tw", //語言
  Headgear: null, //頭盔
  Armor: null, //衣服
  Weapon: "", //武器
  Flag: [],
};

if (localStorage.getItem("PlayerData")) {
  PlayerInfo = JSON.parse(localStorage.getItem("PlayerData"));
}

let playerPosId = 0;
localStorage.setItem("playerPosId", playerPosId);
let playerDirection = "Down";
localStorage.setItem("playerDirection", playerDirection);

let config = {
  // 遊戲解析度 對應 32x32
  width: 568,
  height: 320,
  // 遊戲解析度 對應
  // width: 640,
  // height: 360,

  // 遊戲畫面比例
  windowWidth: 16,
  windowHeight: 9,

  //遊戲畫面距離上下距離
  gameWindowPadding: 300,

  // backgroundColor: 0x000000,
  scale: {
    // mode: Phaser.Scale.FIT,
    // autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
  },
  physics: {
    default: "arcade",
    arcade: {
      gravity: { y: 0 },
      debug: false,
    },
  },
  fps: {
    target: 60,
    forceSetTimeOut: true,
  },
  resolution: 1,
  autoFocus: true, // 自动聚焦
  // transparent: false, // 背景透明
  transparent: true,
};

let getPlayerPosId = () => {
  playerPosId = localStorage.getItem("playerPosId");
  return playerPosId;
};
let setPlayerPosId = (id) => {
  localStorage.setItem("playerPosId", id);
  playerPosId = id;
};

let getPlayerDirection = () => {
  playerDirection = localStorage.getItem("playerDirection");
  return playerDirection;
};

let setPlayerDirection = (direction) => {
  localStorage.setItem("playerDirection", direction);
  playerDirection = direction;
};

export {
  PlayerInfo,
  config,
  getPlayerPosId,
  setPlayerPosId,
  getPlayerDirection,
  setPlayerDirection,
};
