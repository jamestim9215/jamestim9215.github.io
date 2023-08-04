import { config,PlayerInfo  } from '@/config.js'
import eventsCenter from '@/common/EventsCenter'

import Phaser from 'phaser'

export default class PlayerUI extends Phaser.Scene{
    constructor(){
        super('PlayerUI')

        this.PlayerUIStatus = "Load"; // Waiting, Show, Hide
        this.hp = 10; 
        this.PlayerMaxHp=10;

    }

    create(){

        this.PlayerNameText = this.add.text( 10,-25, "Player 1", {
            fontFamily: '"Press Start 2P"',
            fontSize: '12px',
            color: '#FFFFFF',
            wordWrap: { width: config.width - 30, useAdvancedWrap: true }
        }).setOrigin(0, 0);
        this.add.existing(this.PlayerNameText);
        this.physics.world.enable(this.PlayerNameText);

        this.PlayerHpBar = new Phaser.GameObjects.Rectangle(this,10,
            -10 ,200 ,10,0xFF6400,0.7).setOrigin(0,0);
        this.add.existing(this.PlayerHpBar);
        this.physics.world.enable(this.PlayerHpBar);
    }

    initFun(){
        this.PlayerNameText.x = 10;
        this.PlayerNameText.y = -25;
        this.PlayerHpBar.x = 10;
        this.PlayerHpBar.y = -10;
        this.hp = this.PlayerMaxHp;
        this.PlayerHpBar.width = 200;
    }

    update(){

        if(this.PlayerUIStatus == "Show"){
            
            if(this.PlayerNameText.y < 10 ){
                this.PlayerNameText.body.setVelocityY(100);
            }else{
                this.PlayerNameText.body.setVelocityY(0);
            }
            if(this.PlayerHpBar.y < 25 ){
                this.PlayerHpBar.body.setVelocityY(100);
            }else{
                this.PlayerHpBar.body.setVelocityY(0);
            }

            this.PlayerHpBar.width = (this.hp / this.PlayerMaxHp) * 200;
        }
        if(this.PlayerUIStatus == "Hide"){
            
            if(this.PlayerNameText.y > -25 ){
                this.PlayerNameText.body.setVelocityY(-100);
            }else{
                this.PlayerNameText.body.setVelocityY(0);
            }
            if(this.PlayerHpBar.y > -10 ){
                this.PlayerHpBar.body.setVelocityY(-100);
            }else{
                this.PlayerHpBar.body.setVelocityY(0);
                // this.initFun();
                // this.hp = 200;
                // this.PlayerHpBar.width = 200;
            }

        }

        
        




    }

}