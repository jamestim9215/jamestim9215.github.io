import Npc from '@/common/npc/Npc.js'

export let CreateNpc = function (scene,npcInfo,object) {
  // 新增NPC
    scene.npcContainer = scene.add.container(npcInfo.x + object.width/2,npcInfo.y + object.height/2);
    scene.npcContainer.setSize(18, 18);
    scene.physics.world.enable(scene.npcContainer);
    let npc = new Npc(
        scene,
        npcInfo.x,
        npcInfo.y,
        npcInfo,
        npcInfo.properties[2].value
    );  

    // if (npc.direction == "Left") {
    //     npc.anims.play(npc.animsKeyName+"Right", true);
    // } else if (npc.direction == "Right") {
    //     npc.anims.play(npc.animsKeyName+"Left", true);
    // } else if (npc.direction == "Up") {
    //     npc.anims.play(npc.animsKeyName+"Down", true);
    // } else if (npc.direction == "Down") {
    //     npc.anims.play(npc.animsKeyName+"Up", true);
    // }
    
    scene.npcContainer.add(npc);
    scene.npcContainer.body.immovable = true;
    scene.npcContainer.setDepth(1);
    

    console.log(scene.npcContainer);

    // scene.physics.add.collider(scene.npcContainer, scene.playerContainer);
    // scene.physics.add.collider(scene.npcContainer, scene.playerContainer, ()=>{
    //     console.log('碰撞');
    // }, null , scene);

    scene.NpcGroup.add(scene.npcContainer);
    

};

export let UpdateNpc = function (scene) {
    // scene.physics.add.collider(scene.npcContainer, scene.playerContainer);
    scene.NpcGroup.getChildren().forEach((item)=>{
        scene.physics.add.collider(item, scene.playerContainer);
        if(item.y > scene.playerContainer.y){
            item.setDepth(2);
            scene.playerContainer.setDepth(1.5);
        }else{
            item.setDepth(1.5);
            scene.playerContainer.setDepth(2);
        }

        item.list[0].update(scene.GameStatus);
    
    });
};
