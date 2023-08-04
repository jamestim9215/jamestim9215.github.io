import { config,PlayerInfo  } from '@/config.js'
import { CreateMsgBtn,CreateMsgBox,CreateMsgTPad,showMsgBtn,hideMsgBtn,MsgStatus,targetShowMsg} from '@/common/ui-elements/msg-box.js'

import eventsCenter from '@/common/EventsCenter'

import Phaser from 'phaser'

export default class MsgUI extends Phaser.Scene{
    constructor(){
        super('MsgUI')
    }

    create(){

        this.scenePage = null;
        // console.log("MSGUI CREATE");

        // CreateMsgBtn(this);

        CreateMsgBox(this);
        CreateMsgTPad(this);

        // console.log(Phaser);

        eventsCenter.on('set-scene-page', this.setScenePage, this)
        eventsCenter.on('create-msg-btn', this.CreatedMsgBtn, this)
	    eventsCenter.on('show-msg-btn', this.ShowMsgBtn, this)
	    eventsCenter.on('hide-msg-btn', this.HideMsgBtn, this)
	    eventsCenter.on('update-game-status', this.updateGameStatus, this)

        this.events.on(Phaser.Scenes.Events.SHUTDOWN, () => {
            eventsCenter.off('set-scene-page', this.setScenePage, this)
            eventsCenter.off('create-msg-btn', this.CreatedMsgBtn, this)
            eventsCenter.off('show-msg-btn', this.ShowMsgBtn, this)
            eventsCenter.off('hide-msg-btn', this.HideMsgBtn, this)
            eventsCenter.off('update-game-status', this.updateGameStatus, this)
        })

    }

    update(){



        // UpdateMsgBox(this);
        // UpdateMsgTPad(this);
    }

    updateGameStatus(scene){
        // if(MsgStatus(this)){
        //     scene.GameStatus = 'pause';
        // }else{
        //     scene.GameStatus = 'play';
        // }
    }
    setScenePage(scene){
        // console.log(scene);
        this.scenePage  = scene;
    }

    CreatedMsgBtn(scene){
        CreateMsgBtn(scene)
    }

    ShowMsgBtn(scene,target)
	{
		showMsgBtn(scene,this,target)
        
        // this.scene.get(this.scenePage+'Game').GameStatus = 'pause';
	}
    HideMsgBtn(scene,target)
	{
		hideMsgBtn(scene)
        scene.scene.get(scene.scenePage+'Game').GameStatus = 'play';
        
        // this.scene.get(this.scenePage+'Game').GameStatus = 'play';
	}

    TargetShowMsg(scene,target){
        targetShowMsg(scene,this,target)
    }
}