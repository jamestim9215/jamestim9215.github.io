import { config,PlayerInfo  } from '@/config.js'
import CustomUI from '@/common/ui-elements/CustomUI.js';
import eventsCenter from '@/common/EventsCenter'

import Phaser from 'phaser'

export default class BagUI extends Phaser.Scene{
    constructor(){
        super('BagUI')
    }

    create(){

        this.scenePage = null;
        eventsCenter.on('set-scene-page', this.setScenePage, this)



        this.BagOpenStatus = false;

        let bag_w = 32 * 10 ;
        let bag_h = 32 * 6 ;

        this.bgCover = this.add.rectangle(0,0,config.width,config.height,0x000000,0.5).setOrigin(0,0).setDepth(4).setInteractive();

        this.TabList = this.add.group();
        this.bag = this.add.sprite(config.width/2,config.height/2,'BagBgUI',0).setDepth(5);
        this.bagContent = this.add.sprite(config.width/2 + 38 ,config.height/2 + 18,'BagConcentBgUI',0).setDepth(6);
        this.titleText = this.add.text(
            this.bag.x - config.width/4 - 12,
            this.bag.y + config.height/4 + 10,
            "Setting", {
            fontFamily: '"Press Start 2P"',
            fontSize: '12px',
            color: '#ffffe0',
            wordWrap: { width: config.width - 30, useAdvancedWrap: true }
        }).setOrigin(0).setDepth(6).setAngle(-90);


        this.tabChooseIndex = 0;
        this.tabXArr = [ 
            this.bag.x + bag_w/2 - 204,
            this.bag.x + bag_w/2 - 168,
            this.bag.x + bag_w/2 - 132,
            this.bag.x + bag_w/2 - 96,
            this.bag.x + bag_w/2 - 60,
            this.bag.x + bag_w/2 - 24,
        ]
        this.tabYArr = [
            this.bag.y - bag_h/2 + 24,
            this.bag.y - bag_h/2 + 24,
            this.bag.y - bag_h/2 + 24,
            this.bag.y - bag_h/2 + 24,
            this.bag.y - bag_h/2 + 24,
            this.bag.y - bag_h/2 + 24,
        ]
        this.pos = [
            12,
            17,
            38,
            29,
            43,
            5
        ]
        this.textList = [
            "Character",
            "Bag",
            "",
            "",
            "",
            "Setting",
        ]

        for(var i in this.tabXArr){
            let bagTab = this.add.sprite(this.tabXArr[i], this.tabYArr[i], 'IconUI', this.pos[i]).setInteractive().setOrigin(0.5,0.5).setDepth(6).setVisible(true);
            this.TabList.add(bagTab);
        }

        this.tabChoosing = this.add.sprite(this.tabXArr[0], this.tabYArr[0], 'IconChoose', 12).setOrigin(0.5,0.5).setDepth(7);
        this.tabChoosing.play('IconChooseAnims');


        this.input.keyboard.on('keydown-RIGHT', () => {
            this.tabChooseIndex++;
            if(this.tabChooseIndex > this.tabXArr.length-1) this.tabChooseIndex = 0;
            this.changeBagTag();
        })
        this.input.keyboard.on('keydown-LEFT', () => {
            this.tabChooseIndex--;
            if(this.tabChooseIndex < 0) this.tabChooseIndex = this.tabXArr.length-1;
            this.changeBagTag();
        })
        this.scene.setVisible(this.BagOpenStatus);

        
        
        
        eventsCenter.on('update-bag-status', this.updateBagStatus, this)
        eventsCenter.on('open-bag', this.openBag, this)
        this.events.on(Phaser.Scenes.Events.SHUTDOWN, () => {
            eventsCenter.off('set-scene-page', this.setScenePage, this)
            eventsCenter.off('update-bag-status', this.updateBagStatus, this)
            eventsCenter.off('open-bag', this.openBag, this)
        })


        this.input.keyboard.on('keydown-ESC', () => {

            this.openBag('esc',null)
        })


    }

    update(){

    }
    setScenePage(scene){
        // console.log(scene);
        this.scenePage  = scene;
    }
    changeBagTag(){
        this.titleText.text = this.textList[this.tabChooseIndex];
        this.tabChoosing.x = this.tabXArr[this.tabChooseIndex];
        this.tabChoosing.y = this.tabYArr[this.tabChooseIndex];
    }
    openBag(key,scene){
        

        //判斷背包是否打開 設定遊戲模式 暫停 開始
        if(this.BagOpenStatus){
            this.BagOpenStatus = false;
            this.scene.resume(this.scenePage+'Game');
            this.scene.get(this.scenePage+'Game').GameStatus = 'play';
        }else{
            this.BagOpenStatus = true;
            this.scene.pause(this.scenePage+'Game');
            this.scene.get(this.scenePage+'Game').GameStatus = 'pause';
        }
        this.scene.setVisible(this.BagOpenStatus);

        switch(key){
            case 'esc': this.tabChooseIndex = this.tabXArr.length-1; break;
            default: this.tabChooseIndex = 0;
        }

        this.changeBagTag();
    }

    updateBagStatus(scene){
        // if(this.BagOpenStatus){
        //     scene.GameStatus = 'pause';
        // }
        // else{
        //     scene.GameStatus = 'play';
        // }
    }
}