import {
  config,
  PlayerInfo,
  setPlayerPosId,
  setPlayerDirection,
} from "@/config.js";

import interactive from "@/assets/story/interactive.json";
import messages from "@/assets/story/messages.json";
import eventData from "@/assets/story/EventData.json";
import { getLangText } from "@/common/language.js";

let MessageContent = "";
let MessageContentNum = 0;

let mesIndex = 0;
let FKey = null;
let msgItem = null;

let CreateMsgBtn = (scene) => {
  scene.dialogBtn = scene.rexUI.add
    .dialog({
      x: 0,
      y: 0,
      // z: 100,
      // width: 60,
      // height: 0,

      background: scene.rexUI.add.roundRectangle(0, 0, 0, 0, 5, "0xffffff"),

      leftToolbar: [
        scene.rexUI.add.label({
          width: 10,
          // background: scene.rexUI.add.roundRectangle(0, 0, 0, 0, 5, '0xffffff'),
          text: scene.add.text(0, 0, "", {
            fontFamily: '"Microsoft JhengHei"',
            fontSize: "10px",
            color: "#ff6400",
          }),

          space: {
            left: 2,
            // right: 0,
            // top: 0,
            // bottom: 0
          },
        }),
      ],
      space: {
        left: 2,
        right: 2,
        top: 2,
        bottom: 2,
      },
      align: {
        leftToolbar: "center",
      },
    })
    .layout();

  scene.dialogBtn.setDepth(6);
  // showMsgBtn;

  // scene.dialogBtn.y = scene.cameras.cameras[0]._scrollY + config.height - scene.dialogBtn.height/2 - 10;

  hideMsgBtn(scene);
};

let CreateMsgBox = (scene) => {
  scene.dialog = scene.rexUI.add
    .dialog({
      x: config.width / 2,
      y: 0,
      width: config.width - 20,
      // height: 80,

      background: scene.rexUI.add.roundRectangle(0, 0, 100, 100, 5, "0xffffff"),

      toolbar: [createLabel(scene, "")],
      leftToolbar: [createLabel(scene, "")],
      content: createContent(scene, ""),

      actions: [
        createActionBtn(scene, "F: OK"),
        createActionBtn(scene, "Space: Next"),
      ],

      space: {
        left: 0,
        right: 0,
        top: -10,
        bottom: 0,

        toolbarItem: 1,
        // action: 0,
      },

      align: {
        // title: 'center',
        // content: 'left',
        // description: 'left',
        // choices: 'left',
        actions: "right", // 'center'|'left'|'right'
      },
    })
    .layout(); //重新繪製畫面
  // .popUp(1000);

  scene.dialog.setDepth(999);
  scene.dialog.setOrigin(0.5, 1);

  scene.dialog.y = config.height - 10;

  // scene.dialog.on('button.click', function (button, groupName, index, pointer, event) {

  //     if(groupName == 'actions'){

  //         hideMsgBox(scene);
  //         hideMsgBtn(scene);
  //     }
  // }, scene)

  hideMsgBox(scene);
};
let CreateMsgTPad = (scene) => {
  scene.dialogTpad = scene.rexUI.add
    .dialog({
      x: config.width / 2,
      y: config.height / 2,
      width: config.width - 20,
      // height: 80,

      // background: scene.rexUI.add.roundRectangle(0, 0, 100, 100, 5, '0xff0000'),

      toolbar: [
        // createLabel(scene, '')
      ],
      leftToolbar: [
        // createLabel(scene, '')
      ],
      // content: createContent(scene, ''),

      actions: [createTpadActionBtn(scene, ""), createTpadActionBtn(scene, "")],

      space: {
        left: 0,
        right: 0,
        top: -10,
        bottom: 0,

        toolbarItem: 1,
      },

      align: {
        actions: "center", // 'center'|'left'|'right'
      },
    })
    .layout(); //重新繪製畫面

  scene.dialogTpad.setDepth(1000);

  // scene.dialogTpad.y = scene.cameras.cameras[0]._scrollY + config.height - scene.dialog.height/2 - 10;

  hideMsgTPad(scene);
};

var showContent = function (scene, UIScene, target) {
  let msgId = target.ReturnId.split(":")[1];

  console.log(msgId);

  MessageContent = '';
  UIScene.dialog.layout();

  var isShowDone = false;
  UIScene.dialog.childrenMap.leftToolbar[0].visible = false;
  UIScene.dialog.childrenMap.toolbar[0].visible = false;

  // messages[msgId]

  var isMassageDown = false;
  var isQA = false;
  var isInput = false;

  messages.map((item) => {
    console.log(item[msgId]);
    if (item[msgId]) {
      MessageContentNum = item[msgId].length;
      if (item[msgId][mesIndex]) {
        if (item[msgId][mesIndex + 1] == undefined) {
          for (let j in eventData) {
            if (eventData[j].EventID == target.Next) {
              if (eventData[j].Action == "TFPad") {
                isQA = true;
                break;
              }
              if (eventData[j].Action == "InputPlayerName") {
                isInput = true;
                break;
              }
            }
          }
          isMassageDown = true;
        }

        UIScene.dialog.childrenMap.actions[0].visible = false;

        // if (isQA && isMassageDown) {
        //   UIScene.dialog.childrenMap.actions[1].visible = false;
        // } else if (isInput && isMassageDown) {
        //   UIScene.dialog.childrenMap.actions[1].visible = false;
        // } else {
          UIScene.dialog.childrenMap.actions[1].visible = true;
          UIScene.dialog.childrenMap.actions[1].text =
            "Space: " + getLangText("TpadBtn", "next");

          const SpaceKey = scene.input.keyboard.addKey(
            Phaser.Input.Keyboard.KeyCodes.SPACE
          );
          SpaceKey.on("down", handleSPACEKey, scene);
          function handleSPACEKey() {
            if (isShowDone) {
              mesIndex++;
              if (MessageContentNum > mesIndex) {
                showContent(scene, UIScene, target);
                SpaceKey.off("down", handleSPACEKey, scene);
              } else {
                mesIndex = 0;
                hideMsgBox(UIScene);
                
                scene.scene.get(scene.scenePage+'Game').GameStatus = 'play';
                scene.isFStatus = false;
                SpaceKey.off("down", handleSPACEKey, scene);
                SpaceKey.removeAllListeners();
                SpaceKey.destroy();


                if (target.Next != "End") {
                  let _item = getEvent(target);
                  eventFun(scene, UIScene, _item);
                }
              }
            }
          }
        // }

        MessageContent = getLangText(
          scene.scenePage,
          msgId + "_" + item[msgId][mesIndex].DiglogueId
        );

        // 使用正则表达式匹配 {{NpcNameValue:xxx}} 并提取出变量名 xxx
        const regex = /\{\{NpcNameValue:(.*?)\}\}/g;
        const matches = MessageContent.match(regex);

        console.log(MessageContent, matches);

        // 如果有匹配的模式，则进行替换
        if (matches) {
          for (const match of matches) {
            // 提取变量名 xxx
            const variableName = match.slice(15, -2);
            // 替换掉整个模式
            MessageContent = MessageContent.replace(
              matches,
              getLangText("Message", variableName)
            );
          }
        }

        MessageContent = MessageContent.replace(
          /{{PlayerName}}/g,
          PlayerInfo.Name
        );

        if (item[msgId][mesIndex].Identity.match(/Npc/)) {
          UIScene.dialog.childrenMap.toolbar[0].text = getLangText(
            "Message",
            item[msgId][mesIndex].NameId
          );
          UIScene.dialog.childrenMap.leftToolbar[0].visible = false;
          UIScene.dialog.childrenMap.toolbar[0].visible = true;
          MessageContent = MessageContent.replace(
            /{{NpcName}}/g,
            getLangText("Message", item[msgId][mesIndex].NameId)
          );
        } else if (item[msgId][mesIndex].Identity.match(/Player|System/)) {
          UIScene.dialog.childrenMap.leftToolbar[0].text = getLangText(
            "Message",
            item[msgId][mesIndex].NameId
          );
          UIScene.dialog.childrenMap.toolbar[0].visible = false;
          UIScene.dialog.childrenMap.leftToolbar[0].visible = true;
        }
        UIScene.dialog.childrenMap.content.text = MessageContent;
        UIScene.dialog.layout();
      }
    }
  });

  var num = MessageContent.length;
  var i = 0;
  UIScene.dialog.childrenMap.content.text = "";
  var timer = setInterval(() => {
    if (i == num - 1) {
      isShowDone = true;
      clearInterval(timer);
      if (isMassageDown) {
        if (target.Next != "End") {
          if (target.Next != "End") {
            let _item = getEvent(target);
            // eventFun(scene, UIScene, _item);
          } else {
            clearInterval(eventInterval);
          }
        }
      }
    }
    UIScene.dialog.childrenMap.content.text += MessageContent[i];
    // UIScene.dialog.y = scene.cameras.cameras[0]._scrollY + config.height  - UIScene.dialog.height/2 - 10;
    i++;
  }, 50);
};

var createLabel = function (scene, text) {
  return scene.rexUI.add.label({
    width: 0, // Minimum width of round-rectangle
    height: 0, // Minimum height of round-rectangle

    background: scene.rexUI.add.roundRectangle(0, 0, 100, 40, 5, 0xff6400),

    text: scene.add.text(0, -10, text, {
      fontFamily: '"Microsoft JhengHei"',
      fontSize: "10px",
    }),

    space: {
      left: 5,
      right: 5,
      top: 5,
      bottom: 5,
    },
  });
};
var createContent = function (scene, text) {
  return scene.rexUI.add.label({
    width: 0, // Minimum width of round-rectangle
    height: 0, // Minimum height of round-rectangle

    background: scene.rexUI.add.roundRectangle(0, 0, 0, 0, 80, null),

    text: scene.add.text(0, 0, text, {
      fontFamily: '"Microsoft JhengHei"',
      fontSize: "12px",
      color: "#000000",
      wordWrap: { width: config.width - 30, useAdvancedWrap: true },
    }),

    space: {
      left: 5,
      right: 5,
      top: 5,
      bottom: 5,
    },
  });
};
var createActionBtn = function (scene, text) {
  return scene.rexUI.add.label({
    background: scene.rexUI.add.roundRectangle(0, 0, 100, 40, 5, 0xffffff),

    text: scene.add.text(0, 0, text, {
      fontFamily: '"Microsoft JhengHei"',
      fontSize: "10px",
      color: "#cccccc",
    }),
    space: {
      left: 5,
      right: 5,
      top: 5,
      bottom: 5,
    },
  });
};
var createTpadActionBtn = function (scene, text) {
  return scene.rexUI.add.label({
    background: scene.rexUI.add.roundRectangle(0, 0, 100, 40, 5, 0xff6400),

    text: scene.add.text(0, 0, text, {
      fontFamily: '"Microsoft JhengHei"',
      fontSize: "10px",
      color: "#fff",
    }),
    margin: {
      left: 5,
      right: 5,
    },
    space: {
      left: 5,
      right: 5,
      top: 5,
      bottom: 5,
    },
  });
};

let getEvent = function (target) {
  for (let key in eventData) {
    if (eventData[key].EventID == target.Next) {
      return eventData[key];
    }
  }
};

let eventFun = function (scene, UIScene, item) {
  console.log(item);
  var eventInterval = setInterval(() => {
    if (item.Action == "") {
      console.log("End");
      if (item.Next != "End") {
        item = getEvent(item);
      } else {
        clearInterval(eventInterval);
      }
    } else if (item.Action == "MessagePad") {
      scene.scene.get(scene.scenePage+'Game').GameStatus = 'pause';
      scene.isFStatus = true;
      console.log("MessagePad");
      // console.log(item.ReturnId);
      UIScene.dialog.setVisible(true);
      console.log(item);
      showContent(scene, UIScene, item);
      clearInterval(eventInterval);
    } else if (item.Action == "TFPad") {
      scene.scene.get(scene.scenePage+'Game').GameStatus = 'pause';
      scene.isFStatus = true;
      console.log("TFPad");
      showMsgTPad(scene, UIScene, item);

      clearInterval(eventInterval);
    } else if (item.Action == "AddFlag") {
      console.log("AddFlag");
      PlayerInfo.Flag.push(item.ReturnId.split(":")[1]);
      if (item.Next != "End") {
        item = getEvent(item);
      } else {
        clearInterval(eventInterval);
      }
    } else if (item.Action == "ChangeScene") {
      console.log("ChangeScene");
      clearInterval(eventInterval);
      var ReturnId = item.ReturnId.split(":")[1];
      var nextScene = ReturnId.split(",");
      setPlayerPosId(nextScene[1]);
      setPlayerDirection(nextScene[2]);
      console.log(nextScene[1], nextScene[2]);
      scene.cameras.main.fadeOut(1000, 0, 0, 0);
      scene.cameras.main.once(
        Phaser.Cameras.Scene2D.Events.FADE_OUT_COMPLETE,
        (cam, effect) => {
          scene.scene.start(nextScene[0] + "Preload");
        }
      );
    } else if (item.Action == "AddMainQuest") {
      console.log("AddMainQuest");
      var Object = item.ReturnId.split(":")[1];
      if (item.Next != "End") {
        item = getEvent(item);
      } else {
        clearInterval(eventInterval);
      }
    } else if (item.Action == "AddObject") {
      console.log("AddObject");
      var Object = item.ReturnId.split(":")[1];
      if (Object == "Sword1") {
        PlayerInfo.Weapon = "Sword1";
        // scene.sword.visible = true;
        scene.swordHitbox.visible = true;
        // scene.smear.visible = true;
      }

      if (item.Next != "End") {
        item = getEvent(item);
      } else {
        clearInterval(eventInterval);
      }
    }else if( item.Action == "InputPlayerName"){
      scene.scene.get(scene.scenePage+'Game').GameStatus = 'pause';
      scene.isFStatus = true;
      clearInterval(eventInterval);
        UIScene.InputMessageBox = UIScene.add.rectangle(config.width/2, config.height-10, config.width-30, 50, 0xffffff, 1).setOrigin(0.5,1);
        UIScene.playerNameText = UIScene.add.text(UIScene.InputMessageBox.x - config.width/2 + 25, UIScene.InputMessageBox.y-40,"請輸入玩家名稱:", { fontSize: '14px', fill: '#00000' });
        UIScene.playerNameTextEnter = UIScene.add.text(config.width - 20, UIScene.InputMessageBox.y - 5,"Enter : 送出", { fontSize: '10px', fill: '#cccccc' }).setOrigin(1,1);
        let playerName = "";
        UIScene.input.keyboard.on('keydown', function (event) {
          if (event.key === "Enter") {
            // 按下回车键表示玩家输入完成
            PlayerInfo.Name = playerName;
            playerName = "";

            if (item.Next != "End") {
              UIScene.InputMessageBox.destroy();
              UIScene.playerNameText.destroy();
              UIScene.playerNameTextEnter.destroy();
              UIScene.input.keyboard.removeListener('keydown');
              scene.scene.get(scene.scenePage+'Game').GameStatus = 'play';
              scene.isFStatus = false;
              eventFun(scene,UIScene, getEvent(item));
              
            }

          } else if (event.key === "Backspace") {
            // 按下退格键，从玩家名称中删除最后一个字符
            playerName = playerName.slice(0, -1);
            UIScene.playerNameText.setText("請輸入玩家名稱:" + playerName);
          } else if (event.key.length === 1) {
            // 将按下的非特殊键添加到玩家名称变量中
            if(playerName.length < 20){
              playerName += event.key;
            }
            UIScene.playerNameText.setText("請輸入玩家名稱:" + playerName);
          }
        });




      // if (item.Next != "End") {
      //   item = getEvent(item);
      // } else {
      // }
    }
  }, 100);
};

var showMsgBox = function (scene, UIScene, target) {
  // console.log(target);
  let item = target;
  eventFun(scene, UIScene, item);

  // mesIndex = 0;
  // MessageContent = '';

  // let msgId = null;

  // interactive[scene.scenePage][target.name].map((item)=>{
  //     if(item.MessageId == target.messageId){
  //         msgId = item.MessageId;
  //     }
  // })
  // scene.dialog.setVisible(true);

  // showContent(scene,msgId);
};

var showMsgTPad = function (scene, UIScene, target) {
  // console.log("showMsgTPad", target);
  let item = target;
  let RetrunArr = item.ReturnId.split(":")[1];
  let btnArr = RetrunArr.split(",");

  // console.log(btnArr);

  for (let i = 0; i < btnArr.length; i++) {
    UIScene.dialogTpad.childrenMap.actions[i].text =
      (i == 0 ? "Space: " : "F: ") + getLangText("TpadBtn", btnArr[i]);
    UIScene.dialogTpad.childrenMap.actions[i].visible = true;
  }

  let nextArr = item.Next.split(",");

  const SpaceKey = scene.input.keyboard.addKey(
    Phaser.Input.Keyboard.KeyCodes.SPACE
  );
  SpaceKey.on("down", handleSPACEKey, scene);
  const FKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
  FKey.on("down", handleFKey, scene);

  function handleSPACEKey() {
    mesIndex = 0;
    hideMsgBox(UIScene);
    scene.scene.get(scene.scenePage+'Game').GameStatus = 'play';
    scene.isFStatus = false;
    hideMsgTPad(UIScene);
    FKey.off("down", handleFKey, scene);
    FKey.removeAllListeners();
    FKey.destroy();
    SpaceKey.off("down", handleSPACEKey, scene);
    SpaceKey.removeAllListeners();
    SpaceKey.destroy();

    for (let j in eventData) {
      if (eventData[j].EventID == nextArr[0]) {
        eventFun(scene, UIScene, eventData[j]);
      }
    }
  }
  function handleFKey() {
    mesIndex = 0;
    hideMsgBox(UIScene);
    scene.scene.get(scene.scenePage+'Game').GameStatus = 'play';
    scene.isFStatus = false;
    hideMsgTPad(UIScene);
    SpaceKey.off("down", handleSPACEKey, scene);
    SpaceKey.removeAllListeners();
    SpaceKey.destroy();
    FKey.off("down", handleFKey, scene);
    FKey.removeAllListeners();
    FKey.destroy();

    for (let j in eventData) {
      if (eventData[j].EventID == nextArr[1]) {
        eventFun(scene, UIScene, eventData[j]);
      }
    }
  }

  UIScene.dialogTpad.setVisible(true);
  UIScene.dialogTpad.layout();
};

var getMsgItem = function (scene, eventArr) {
  for (let key in eventArr) {
    for (let keys in eventData) {
      if (eventData[keys].EventID == eventArr[key]) {
        console.log(PlayerInfo.Flag, eventData[keys].HaveFlag);
        console.log(PlayerInfo.Flag.indexOf(eventData[keys].HaveFlag));
        if (
          PlayerInfo.Flag &&
          PlayerInfo.Flag.indexOf(eventData[keys].HaveFlag) != -1
        ) {
          return eventData[keys];
        }
        msgItem = eventData[keys];
      }
    }
  }
  return msgItem;
};

var targetShowMsg = function (scene, UIScene, target) {
  console.log(target);


  
  msgItem = null;

  var eventArr = null;
  interactive.map((item) => {
    if (item[scene.scenePage]) {
      eventArr = null;
      item[scene.scenePage].map((items) => {
        if (items.Name == target.type || items.Name == target.name) {
          eventArr = items.EventId.split(",");
        }
      });
    }
  });
  console.log(eventArr);

  if (eventArr == null) return;

  eventArr.reverse();

  msgItem = getMsgItem(scene, eventArr);

  showMsgBox(scene, UIScene, msgItem);
        
  scene.scene.get(scene.scenePage+'Game').GameStatus = 'pause';
  scene.isFStatus = true;
}

var showMsgBtn = function (scene, UIScene, target) {
  msgItem = null;
  var eventArr = null;
  interactive.map((item) => {
    if (item[scene.scenePage]) {
      eventArr = null;
      item[scene.scenePage].map((items) => {
        if (items.Name == target.type || items.Name == target.name) {
          eventArr = items.EventId.split(",");
        }
      });
    }
  });
  console.log(eventArr);

  if (eventArr == null) return;

  eventArr.reverse();

  msgItem = getMsgItem(scene, eventArr);

  scene.dialogBtn.childrenMap.leftToolbar[0].text = "F";

  var dialogbtnX = 0;
  var dialogbtnY = 0;

  if(config.width > scene.Map.widthInPixels){
    dialogbtnX = target.x  + (target.width>20?target.width/2:0);
    dialogbtnY = target.y - 32;
  }else{
    dialogbtnX =  target.x + (target.width>20?target.width/2:0);
    dialogbtnY = target.y - 32;
  }

  scene.dialogBtn.x = dialogbtnX;
  scene.dialogBtn.y = dialogbtnY;

  console.log(scene.dialogBtn);

  scene.dialogBtn.setVisible(true);

  // 添加键盘事件
  FKey = scene.input.keyboard.addKey(Phaser.Input.Keyboard.KeyCodes.F);
  FKey.on("down", handleFKey, scene);

  function handleFKey() {
    showMsgBox(scene, UIScene, msgItem);

    scene.isFStatus = true;
        
    scene.scene.get(scene.scenePage+'Game').GameStatus = 'pause';
    scene.isFStatus = true;

    hideMsgBtn(scene);
    FKey.removeAllListeners();
    FKey.destroy();
  }
};

var hideMsgBox = function (scene) {
  scene.dialog.setVisible(false);
};

var hideMsgTPad = function (scene) {
  scene.dialogTpad.setVisible(false);
};

var UpdateMsgBox = function (UIScene) {
  // UIScene.dialog.y = UIScene.cameras.cameras[0]._scrollY + config.height - scene.dialog.height/2 - 10;
  // UIScene.dialog.x = UIScene.cameras.cameras[0]._scrollX + config.width - scene.dialog.width/2 - 10;
};
var UpdateMsgTPad = function (scene) {
  scene.dialogTpad.y =
    scene.cameras.cameras[0]._scrollY +
    config.height -
    scene.dialog.height / 2 -
    10;
  scene.dialogTpad.x =
    scene.cameras.cameras[0]._scrollX +
    config.width -
    scene.dialog.width / 2 -
    10;
};

var hideMsgBtn = function (scene) {
  scene.dialogBtn.setVisible(false);
  if (FKey) {
    FKey.removeAllListeners();
    FKey.destroy();
  }
};

var MsgStatus = function (UIScene) {
  return UIScene.dialog._visible;
};
var MsgBtnStatus = function (scene) {
  return scene.dialogBtn._visible;
};

export {
  CreateMsgBtn,
  CreateMsgBox,
  CreateMsgTPad,
  UpdateMsgBox,
  UpdateMsgTPad,
  showMsgBox,
  hideMsgBox,
  showMsgBtn,
  hideMsgBtn,
  MsgStatus,
  targetShowMsg
};
