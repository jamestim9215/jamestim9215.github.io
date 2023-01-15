var Game;

var window_Width = window.innerWidth;
var window_Height = window.innerHeight;

var config = {
    type: Phaser.AUTO,
    width: 320,
    height: 480,
    backgroundColor: 0x000000,
    scene: [
        Preload,
        GameHome,
        GamePlay,
        GameHouse
    ],
    scale: {
        // mode: Phaser.Scale.FIT,
        // autoCenter: Phaser.Scale.CENTER_HORIZONTALLY,
    },
    physics: {
        default: "arcade",
        arcade: {
            gravity: { y: 0 },
            debug: false
        }
    }
}
let userInput = document.getElementById('UserNameInput');
let PlayerInfo = {
    x: 100, 
    y: 200, 
    skin:1,
    Name: "笨貓",
    SocketID : null,
}

let socket = io(
    'ws://127.0.0.1:5001',
    // 'ws://10.8.22.37:5001',
    {
        reconnection: true,
    }
);

socket.on("connect", () => {
    console.log("connect",socket.id);
    PlayerInfo.SocketID = socket.id;
});


socket.on("disconnect", () => {
    console.log("disconnect"); // undefined
});

window.onload = function () {
    Game = new Phaser.Game(config);
    var _w = (window_Height * 32) / 48;
    var _h = window_Height;

    setTimeout(() => {
        if (window_Width > window_Height) {
            document.querySelector("canvas").style.width = _w + "px";
            document.querySelector("canvas").style.height = _h + "px";
        } else {
            if ((window_Width / window_Height) > (32 / 48)) {
                console.log("???");
                document.querySelector("canvas").style.width = _w + "px";
                document.querySelector("canvas").style.height = _h + "px";
            } else {
                console.log("???2");
                document.querySelector("canvas").style.width = window_Width + "px";
                document.querySelector("canvas").style.height = window_Width / 32 * 48 + "px";
                // document.querySelector("canvas").style.width = "100%";
            }
        }
    }, 50)
}


