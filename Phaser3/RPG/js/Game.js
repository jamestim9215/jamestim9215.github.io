var Game ;

var width = window.innerWidth;
var height = window.innerHeight;

var config = {
	type: Phaser.AUTO,
	width: 400 ,
	height: 400,
	backgroundColor: 0x000000,
    scene: [
        Preload,
        GamePlay,
        GameHouse
    ],
    physics:{
        default: "arcade",
        arcade:{
			gravity: { y: 0 },
            debug: false
        }
    }
}

var PlayerInfo = {
    x: 130, 
    y:150,
    skin:1
}

window.onload = function(){
    Game = new Phaser.Game(config);
}