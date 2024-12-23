var Game ;

var width = window.innerWidth;
var height = window.innerHeight;

var config = {
	type: Phaser.AUTO,
	width: 640,
	height: 320,
	backgroundColor: 0x000000,
    scene: [
        Preload,
        GamePlay
    ],
    physics:{
        default: "arcade",
        arcade:{
			gravity: { y: 1000 },
            debug: true
        }
    }
}

window.onload = function(){
    Game = new Phaser.Game(config);
}