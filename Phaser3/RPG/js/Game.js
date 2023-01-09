var Game ;

var window_Width = window.innerWidth;
var window_Height = window.innerHeight;

var config = {
	type: Phaser.AUTO,
	width:  320 ,
	height:  480 ,
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
    skin:1,
    Name: "我是笨貓"
}

const socket = io('ws://localhost:5001');

socket.on("connect", () => {
    console.log("connect");
    socket.emit("hello", PlayerInfo);
});

socket.on("disconnect", () => {
    console.log(socket.id); // undefined
});

window.onload = function(){
    Game = new Phaser.Game(config);

    setTimeout(()=>{
        if(window_Width > window_Height){
            document.querySelector("canvas").style.height = window_Height + "px";
            document.querySelector("canvas").style.width  = (window_Height * 32) / 48 + "px";
        }else{
            if((window_Width / window_Height) > (32/48)){
                document.querySelector("canvas").style.height = window_Height + "px";
                document.querySelector("canvas").style.width  = (window_Height * 32) / 48 + "px";
            }else{
                document.querySelector("canvas").style.width  = "100%";
            }
        }
    },50)
}


