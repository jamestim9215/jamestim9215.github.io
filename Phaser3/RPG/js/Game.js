var Game ;

var width = window.innerWidth;
var height = window.innerHeight;

var config = {
	type: Phaser.AUTO,
	width: window.innerWidth * window.devicePixelRatio,
	height: window.innerHeight * window.devicePixelRatio,
	backgroundColor: 0x000000,
    scene: [
        Preload,
        GamePlay,
        GameHouse
    ],
    scale: {
        // mode: Phaser.Scale.FIT,
        // autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    },
    physics:{
        default: "arcade",
        arcade:{
			gravity: { y: 0 },
            debug: true
        }
    }
}

var PlayerInfo = {
    x: 130, 
    y: 680,
    skin:1
}

window.onload = function(){
    Game = new Phaser.Game(config);
}