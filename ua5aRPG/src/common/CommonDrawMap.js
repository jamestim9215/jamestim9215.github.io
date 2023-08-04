
import Phaser from 'phaser'
import { config,PlayerInfo,getPlayerPosId  } from '@/config.js'
import { CreatePlayer, UpdatePlayer} from '@/common/PlayerGroup.js'
import { CreateNpc, UpdateNpc} from '@/common/NPCGroup.js'
import { CreateWeapon} from '@/common/WeaponGroup.js'
import eventsCenter from '@/common/EventsCenter'
// import { CreateMsgBtn,CreateMsgBox,CreateMsgTPad,UpdateMsgBox,UpdateMsgTPad,showMsgBtn,hideMsgBtn,MsgStatus } from '@/common/ui-elements/msg-box.js'


let CreateDrawMap = function (scene) {
    scene.dialogTarget = null;

    scene.Wall = scene.add.group();
    scene.objectList = scene.add.group();
    
    scene.NpcCount = 0;
    scene.NpcGroup = scene.add.group();

    scene.WeaponCount = 0;
    scene.Map.objects.map((item)=>{
        if(item.name == "Wall"){
            item.objects.map((items)=>{
                let object = null;
                var _w = items.width!=0?items.width: 20;
                var _h = items.height!=0?items.height: 20;

                if(items.rectangle == true){
                    object = new Phaser.GameObjects.Rectangle(scene,items.x,items.y,_w,_h,0xff0000,0.0).setOrigin(0, 0);
                }

                //圓形
                if(items.ellipse == true){
                    object = new Phaser.GameObjects.Ellipse(scene,items.x,items.y,_w,_h,0xff0000,0.0);
                    if(items.width== 0){
                        object.setOrigin(0.5, 0.5);
                    }else{
                        object.setOrigin(0, 0);
                    }
                    
                }

        
                // 添加物体到场景
                scene.add.existing(object);
        
                // 启用物理引擎
                scene.physics.world.enable(object);

                if(items.rectangle == true) object.body.setSize(_w, _h);
                if(items.ellipse == true) object.body.setCircle(_w / 2);
        
                // 设置物体为静态物体（不可移动）
                object.body.setImmovable(true);
        
                scene.Wall.add(object);

            });
        }
        if(item.name == "UserPosition"){
            item.objects.map((items)=>{
                items.properties.map((item2)=>{
                    if(item2.name == 'Position' && item2.value == getPlayerPosId()){
                        PlayerInfo.x = items.x;
                        PlayerInfo.y = items.y;
                    }
                });
            });
        }
        if(item.name == "Event"){
            // console.log(item.objects);
            item.objects.map((items)=>{
                let _w = items.width?items.width:20;
                let _h = items.height?items.height:20;
                let object = new Phaser.GameObjects.Rectangle(scene,items.x,items.y,_w,_h,0x00FF00,0.7);
                scene.physics.add.existing(object);
                object.visible = false; 
                if(items.width==0){
                    object.setOrigin(0.5, 0.5);
                }else{
                    object.setOrigin(0, 0);
                }
                object.isTrigger = false;
                object.name = items.name;
                object.messageId = items.properties[0].value;

                if(items.name == 'Npc'){
                    object.type = items.properties[2].value;
                    CreateNpc(scene,items,object);
                    scene.NpcCount++;
                }
                if(items.name == 'Weapon'){
                    CreateWeapon(scene,items,object);
                    scene.WeaponCount++;
                }


                scene.objectList.add(object);
            });
        }
        
        
    })

    CreatePlayer(scene);

    scene.scene.run('MsgUI');
    setTimeout(()=>{
        eventsCenter.emit('create-msg-btn', scene);
        eventsCenter.emit('set-scene-page', scene.scenePage);
    },10);




    scene.objectList.children.entries.forEach((item)=>{
        scene.physics.add.overlap(scene.playerContainer, item, (player, target)=>{

            // 判断 playerContainer 是否离开了 item
            const isTouching  = scene.physics.overlapRect(
                player.x,
                player.y,
                player.width,
                player.height,
                target.x, 
                target.y,
                target.width,
                target.height
            );
            if (isTouching) {
                if(target.isTrigger == false && scene.dialogTarget==null){
                    scene.dialogTarget = target;
                    target.isTrigger = true;
                    // showMsgBtn(scene,target)
                    console.log("??????????");
                    eventsCenter.emit('show-msg-btn', scene,target);
                }
            }
        
        }, null , scene);
    })


    



}



let UpdateDrawMap = function (scene) {

    if(scene.scenePage!='Boss'){
        eventsCenter.emit('update-bag-status', scene);
    }
    eventsCenter.emit('update-game-status', scene);

    UpdatePlayer(scene);
    if(scene.NpcCount>0){
        UpdateNpc(scene);
    }

    // UpdateMsgBox(scene);
    // UpdateMsgTPad(scene);

    if(scene.dialogTarget!=null){
        const isTouching = scene.physics.overlap(scene.playerContainer, scene.dialogTarget);
        if (isTouching) {
            // playerContainer 正在与 item 接触
        } else {
            // playerContainer 没有与 item 接触
            scene.dialogTarget.isTrigger = false;
            eventsCenter.emit('hide-msg-btn', scene,scene.dialogTarget);
            scene.dialogTarget = null;
        }
    }

}




export {
    CreateDrawMap,
    UpdateDrawMap
}