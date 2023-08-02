import { config,PlayerInfo  } from '@/config.js'
import eventsCenter from '@/common/EventsCenter'

import Phaser from 'phaser'

export default class BossUI extends Phaser.Scene{
    constructor(){
        super('BossUI')
        this.hp=100;
        this.BossMaxHp=100;
    }

    create(){
        this.totalSeconds; // 存储时间的起点
        this.timerInterval; // 存储 setInterval() 返回的 ID

        this.BossGameStatus = "Init"; // Load,Waiting, Ready, play, pause, stop

        eventsCenter.on('Change-boss-game-status', this.ChangeBossGameStatus, this)

        this.events.on(Phaser.Scenes.Events.SHUTDOWN, () => {
            eventsCenter.off('Change-boss-game-status', this.ChangeBossGameStatus, this)
        })

        this.BossImg = this.add.sprite( 150, config.height + 300, 'BossX4' , 0).setScale(1);
        this.BossImg.setInteractive();
        this.physics.world.enable(this.BossImg);

        this.leftTopContainer = this.add.container(-100,10);

        this.BossText = this.add.text(10, 10, "BOSS", {
            fontFamily: '"Press Start 2P"',
            fontSize: '14px',
            color: '#FFFFFF',
            wordWrap: { width: config.width - 30, useAdvancedWrap: true }
        }).setOrigin(0.5, 0.5)

        this.BossText2 = this.add.text(10, 25, "LEVEL", {
            fontFamily: '"Press Start 2P"',
            fontSize: '12px',
            color: '#FFFFFF',
            wordWrap: { width: config.width - 30, useAdvancedWrap: true }
        }).setOrigin(0.5, 0.5)
        this.BossText3 = this.add.text(10, 48, "100", {
            fontFamily: '"Press Start 2P"',
            fontSize: '30px',
            color: '#FFFFFF',
            wordWrap: { width: config.width - 30, useAdvancedWrap: true }
        }).setOrigin(0.5, 0.5)

        this.leftTopContainer.add(this.BossText);
        this.leftTopContainer.add(this.BossText2);
        this.leftTopContainer.add(this.BossText3);

        this.rightBottomContainer = this.add.container(config.width+200,config.height - 60);

        this.BossNameText = this.add.text(10, 10, "BO EJ GAR", {
            fontFamily: '"Press Start 2P"',
            fontSize: '40px',
            color: '#FFFFFF',
            wordWrap: { width: config.width - 30, useAdvancedWrap: true }
        }).setOrigin(0.5, 0.5)
        this.rightBottomContainer.add(this.BossNameText);

        this.physics.world.enable(this.leftTopContainer);
        this.leftTopContainer.setSize(50, 0);
        this.physics.world.enable(this.rightBottomContainer);
        this.rightBottomContainer.setSize(50, 0);
        this.rightBottomContainer.add(this.BossNameText);


        this.BossHPNameText = this.add.text(config.width - 10,config.height+10, "BO EJ GAR", {
            fontFamily: '"Press Start 2P"',
            fontSize: '14px',
            color: '#FFFFFF',
            wordWrap: { width: config.width - 25, useAdvancedWrap: true }
        }).setOrigin(1, 0.5)
        this.add.existing(this.BossHPNameText);
        this.physics.world.enable(this.BossHPNameText);

        this.BossHpBar = new Phaser.GameObjects.Rectangle(this,config.width-10
            ,config.height+30 ,config.width - 20,10,0xFF0000,0.7).setOrigin(1,0);
        
        this.add.existing(this.BossHpBar);
        this.physics.world.enable(this.BossHpBar);

        this.FightText = this.add.text(config.width + 150, config.height/2, "READY !!", {
            fontFamily: '"Press Start 2P"',
            fontSize: '36px',
            color: '#FF00FF',
            wordWrap: { width: config.width - 30, useAdvancedWrap: true }
        }).setOrigin(0.5, 0.5)
        this.add.existing(this.FightText);
        this.physics.world.enable(this.FightText);

        this.BossTimerTitle = this.add.text(config.width-10,-35, "計時", {
            fontFamily: '"Press Start 2P"',
            fontSize: '12px',
            color: '#FFFFFF',
            wordWrap: { width: config.width - 30, useAdvancedWrap: true }
        }).setOrigin(1, 0)
        this.add.existing(this.BossTimerTitle);
        this.physics.world.enable(this.BossTimerTitle);
        this.BossTimerText = this.add.text(config.width-10,-15, "0:00", {
            fontFamily: '"Press Start 2P"',
            fontSize: '12px',
            color: '#FFFFFF',
            wordWrap: { width: config.width - 30, useAdvancedWrap: true }
        }).setOrigin(1, 0)
        this.add.existing(this.BossTimerText);
        this.physics.world.enable(this.BossTimerText);

        this.PlayerDieText = this.add.text(config.width/2, -30, "GameOver", {
            fontFamily: '"Press Start 2P"',
            fontSize: '42px',
            color: '#FF00FF',
            wordWrap: { width: config.width - 30, useAdvancedWrap: true }
        }).setOrigin(0.5, 0.5)
        this.add.existing(this.PlayerDieText);
        this.physics.world.enable(this.PlayerDieText);



    }


    startTimer() {
        // console.log("Start Timer");
        let _this = this;
        this.updateTimer(_this);
        this.resetTimer(); // Stop any existing timer first
        this.timerInterval = setInterval(() => {
            _this.totalSeconds++;
            _this.updateTimer(_this);
        }, 1000);
    }

    padZero(num) {
        return num.toString().padStart(2, '0');
    }

    resetTimer() {
        clearInterval(this.timerInterval);
        this.totalSeconds = 0;
    }

    updateTimer(_this) {
        const hours = Math.floor(_this.totalSeconds / 3600);
        const minutes = Math.floor((_this.totalSeconds % 3600) / 60);
        const seconds = _this.totalSeconds % 60;
        const formattedTime = `${_this.padZero(minutes)}:${_this.padZero(seconds)}`;

        _this.BossTimerText.text =  formattedTime;
    }
    

    initFun(){
        this.leftTopContainer.x = -100;
        this.leftTopContainer.y = 10;
        this.rightBottomContainer.x = config.width+200;
        this.rightBottomContainer.y = config.height - 60;
        this.BossHPNameText.x = config.width - 10;
        this.BossHPNameText.y = config.height+10;
        this.BossHpBar.x = config.width-10;
        this.BossHpBar.y = config.height+30;
        this.FightText.x = config.width + 150;
        this.FightText.y = config.height/2;
        this.BossTimerTitle.x = config.width-10;
        this.BossTimerTitle.y = -35;
        this.BossTimerText.x = config.width-10;
        this.BossTimerText.y = -15;
        this.PlayerDieText.x = config.width/2;
        this.PlayerDieText.y = -30;
        this.hp = this.BossMaxHp;
        this.BossHpBar.width = config.width - 20;
    }

    update(){



        
        if (this.BossGameStatus == "Load") {
        
            if(this.BossImg && this.BossImg.y > config.height / 5 *4 ){
                this.BossImg.body.setVelocityY(-500);
            }else{
                this.BossImg.body.setVelocityY(0);
            }
            
            if(this.leftTopContainer.x < 40){
                this.leftTopContainer.body.setVelocityX(200);
            }else{
                this.leftTopContainer.body.setVelocityX(0);
            }
            
            if(this.rightBottomContainer.x > config.width - 200){
                this.rightBottomContainer.body.setVelocityX(-500);
            }else{
                this.rightBottomContainer.body.setVelocityX(0);
            }
        }

        
        
        if (this.BossGameStatus == "Waiting") {
            if(this.leftTopContainer.x > -100){
                this.leftTopContainer.body.setVelocityX(-200);
            }else{
                this.leftTopContainer.body.setVelocityX(0);
            }
            
            if(this.rightBottomContainer.x < config.width+200 ){
                this.rightBottomContainer.body.setVelocityX(500);
            }else{
                this.rightBottomContainer.body.setVelocityX(0);
            }
            if(this.BossImg && this.BossImg.y < config.height + 300 ){
                this.BossImg.body.setVelocityY(500);
            }else{
                this.BossImg.body.setVelocityY(0);
            }
        }
        
        if(this.BossGameStatus == "Ready"){

            if(this.BossHPNameText.y > config.height - 30 ){
                this.BossHPNameText.body.setVelocityY(-100);
            }else{
                this.BossHPNameText.body.setVelocityY(0);
            }

            if(this.BossHpBar.y > config.height - 20 ){
                this.BossHpBar.body.setVelocityY(-100);
            }else{
                this.BossHpBar.body.setVelocityY(0);
            }

            if(this.BossTimerTitle.y < 10 ){
                this.BossTimerTitle.body.setVelocityY(100);
            }else{
                this.BossTimerTitle.body.setVelocityY(0);
            }

            if(this.BossTimerText.y < 25 ){
                this.BossTimerText.body.setVelocityY(100);
            }else{
                this.BossTimerText.body.setVelocityY(0);
            }
            
            if(this.FightText.x < config.width/3*2){
                this.FightText.body.setVelocityX(-500);
                this.FightText.text = 'FIGHT !!';
            }else if(this.FightText.x > -150 ){
                this.FightText.body.setVelocityX(-200);
            }else {
                this.FightText.body.setVelocityX(0);
            }

            this.BossHpBar.width = (this.hp / this.BossMaxHp) * (config.width - 20);
        }

            
        if(this.BossGameStatus == "Play"){

            if(this.BossHPNameText.y > config.height - 30 ){
                this.BossHPNameText.body.setVelocityY(-100);
            }else{
                this.BossHPNameText.body.setVelocityY(0);
            }

            if(this.BossHpBar.y > config.height - 20 ){
                this.BossHpBar.body.setVelocityY(-100);
            }else{
                this.BossHpBar.body.setVelocityY(0);
            }

            if(this.BossTimerTitle.y < 10 ){
                this.BossTimerTitle.body.setVelocityY(100);
            }else{
                this.BossTimerTitle.body.setVelocityY(0);
            }

            if(this.BossTimerText.y < 25 ){
                this.BossTimerText.body.setVelocityY(100);
            }else{
                this.BossTimerText.body.setVelocityY(0);
            }
            
            if(this.FightText.x < config.width/3*2){
                this.FightText.body.setVelocityX(-500);
                this.FightText.text = 'FIGHT !!';
            }else if(this.FightText.x > -150 ){
                this.FightText.body.setVelocityX(-200);
            }else {
                this.FightText.body.setVelocityX(0);
            }

            this.BossHpBar.width = (this.hp / this.BossMaxHp) * (config.width - 20);
        }

        // console.log(this.BossGameStatus);
        
        
        if (this.BossGameStatus == "GameOver") {
            if(this.hp > 0){
                if(this.PlayerDieText.y < config.height/2 ){
                    this.PlayerDieText.body.setVelocityY(100);
                }else{
                    this.PlayerDieText.body.setVelocityY(0);
                }
            }else{

            }

            if(this.BossHPNameText.y < config.height + 10 ){
                this.BossHPNameText.body.setVelocityY(100);
            }else{
                this.BossHPNameText.body.setVelocityY(0);
            }

            if(this.BossHpBar.y < config.height + 30 ){
                this.BossHpBar.body.setVelocityY(100);
            }else{
                this.BossHpBar.body.setVelocityY(0);
                // this.initFun();
            }

            if(this.BossTimerTitle.y > -35 ){
                this.BossTimerTitle.body.setVelocityY(-100);
            }else{
                this.BossTimerTitle.body.setVelocityY(0);
            }

            if(this.BossTimerText.y > -10 ){
                this.BossTimerText.body.setVelocityY(-100);
            }else{
                this.BossTimerText.body.setVelocityY(0);
            }

            
        
        }
        if (this.BossGameStatus == "Done") {
            if(this.hp > 0){
                console.log(this.PlayerDieText.y);
                if(this.PlayerDieText.y > 0 ){
                    this.PlayerDieText.body.setVelocityY(-100);
                }else{
                    this.PlayerDieText.body.setVelocityY(0);
                    this.initFun();
                }
            }
        }

    }

    ChangeBossGameStatus(BossGameStatus){
        this.BossGameStatus = BossGameStatus;
    }

}