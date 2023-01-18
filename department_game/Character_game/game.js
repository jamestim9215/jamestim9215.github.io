// import './style.css'
import Phaser from 'phaser'
import { config } from './config'

import FindTilePath from './scene/TilemapLayer.findTilePath.js'


import Preload from './scene/Preload.js'
// import GameHome from './scene/GameHome.js'
import GamePlay from './scene/GamePlay.js'
import GameBoss from './scene/GameBoss.js'

const window_Width = window.innerWidth ;
const window_Height = window.innerHeight;

var phaserConfig = {
  type: Phaser.AUTO,
  scene: [
      Preload,
    //   GameHome,
      GamePlay,
      GameBoss,
  ],
}

phaserConfig = Object.assign(phaserConfig, config);

var game = new Phaser.Game(phaserConfig);



if(window_Height/window_Width <  320 / 480){
    var _w = ((window_Height - 200) * 48) / 32;
    var _h = (window_Height - 200);
    document.querySelector("canvas").style.width = _w + "px";
    document.querySelector("canvas").style.height = _h + "px";
}else{
    var _w = window_Width;
    var _h = window_Width / 48 * 32;
    document.querySelector("canvas").style.width = _w + "px";
    document.querySelector("canvas").style.height = _h + "px";
}

// setTimeout(() => {
//     if (window_Width > window_Height) {
//         document.querySelector("canvas").style.width = _w + "px";
//         document.querySelector("canvas").style.height = _h + "px";
//     } else {
//         if ((window_Width / window_Height) > (48 / 32)) {
//             document.querySelector("canvas").style.width = _w + "px";
//             document.querySelector("canvas").style.height = _h + "px";
//         } else {
//             document.querySelector("canvas").style.width = window_Width + "px";
//             document.querySelector("canvas").style.height = window_Width / 32 * 48 + "px";
//             // document.querySelector("canvas").style.width = "100%";
//         }
//     }
// }, 50)
