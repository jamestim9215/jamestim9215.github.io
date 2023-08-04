import { config,PlayerInfo,getPlayerDirection  } from '@/config.js'
import Player from '@/common/player/Player.js'
import Smear from '@/common/player/Smear.js'
import Sword from '@/common/player/Sword.js'

export let CreatePlayer = function (scene) {
  // 新增玩家
    scene.playerContainer = scene.add.container(PlayerInfo.x, PlayerInfo.y);
    scene.playerContainer.setSize(12, 24);
    scene.physics.world.enable(scene.playerContainer);
    scene.player = new Player(
        scene,
        PlayerInfo.x,
        PlayerInfo.y,
        PlayerInfo,
        "Player"
    );
    console.log(getPlayerDirection());

    if(getPlayerDirection() == "Down"){
        scene.player.direction = "Down";
        scene.player.anims.play("CharacterIdleDown", true);
    }
    if(getPlayerDirection() == "Up"){
        scene.player.direction = "Up";
        scene.player.anims.play("CharacterIdleUp", true);
    }
    if(getPlayerDirection() == "Left"){
        scene.player.direction = "Left";
        scene.player.anims.play("CharacterIdleLeft", true);
    }
    if(getPlayerDirection() == "Right"){
        scene.player.direction = "Right";
        scene.player.anims.play("CharacterIdleRight", true);
    }
    scene.player.isUser = true;

    // scene.sword = new Sword(scene);
    // scene.smear = new Smear(scene);
    scene.swordHitbox = scene.add
        .rectangle(0, 0, 12, 12, 0xff0000, 0.5)
        .setOrigin(0.5, 0.5);
    scene.swordHitbox.setActive(false).setVisible(false);
    scene.swordHitbox.isAttack = false;
    scene.swordHitbox.attackNum = 0;
    scene.physics.add.existing(scene.swordHitbox);

    scene.playerContainer.add(scene.player);

    // scene.playerContainer.add(scene.sword);
    // scene.playerContainer.add(scene.smear);
    scene.playerContainer.add(scene.swordHitbox);

    scene.playerContainer.setDepth(2);

    scene.physics.add.collider(scene.playerContainer, scene.Wall);
    


    scene.cursors = scene.input.keyboard.createCursorKeys();
    scene.keys = scene.input.keyboard.addKeys('A,W,D,S,C,Z');

    console.log(scene.Map.widthInPixels , config.width);

    if(scene.Map.widthInPixels < config.width){
        scene.cameras.main.setBounds(-(config.width/2 - scene.Map.widthInPixels/2), -(config.height/2 - scene.Map.heightInPixels/2), 0 , 0);
    }else{
        scene.cameras.main.setBounds(0, 0, scene.Map.widthInPixels, scene.Map.heightInPixels);
    }

    
    scene.cameras.main.startFollow(scene.playerContainer, true);
};

export let UpdatePlayer = function (scene) {
    scene.player.update(scene.cursors, scene.keys, scene.GameStatus);

    // if(PlayerInfo.Weapon){
    //     scene.sword.update(scene.cursors, scene.keys);
    //     scene.smear.update(scene.cursors, scene.keys);
    // }
    
};
