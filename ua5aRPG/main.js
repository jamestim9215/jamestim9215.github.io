// import './style.css'
import Phaser from 'phaser'
import { config } from '@/config.js'
import UIPlugin from 'phaser3-rex-plugins/templates/ui/ui-plugin.js';
// import FindTilePath from './scene/TilemapLayer.findTilePath.js'

import Preload from '@/scene/Preload.js'
import Index from '@/scene/Index.js'
import CreatePlayerPreload from '@/scene/CreatePlayer/CreatePlayerPreload.js'
import CreatePlayerGame from '@/scene/CreatePlayer/CreatePlayerGame.js'
import Ua5aPreload from '@/scene/Ua5a/Ua5aPreload.js'
import Ua5aGame from '@/scene/Ua5a/Ua5aGame.js'
import MsgUI from '@/common/ui-elements/MsgUI.js'

import { initLanguage } from "@/common/language.js"

// import GameBoss from './scene/GameBoss.js'

const window_Width = window.innerWidth ;
const window_Height = window.innerHeight;

initLanguage();

var phaserConfig = {
    type: Phaser.AUTO,
    plugins: {
        scene: [
            {
                key: 'rexUI',
                plugin: UIPlugin,
                mapping: 'rexUI'
            },
        ]
    },
    scene: [
        Preload,
        Index,
        CreatePlayerPreload,
        CreatePlayerGame,
        Ua5aPreload,
        Ua5aGame,
        MsgUI

    ],
}

phaserConfig = Object.assign(phaserConfig, config);

var game = new Phaser.Game(phaserConfig);

var _w, _h;
if(window_Width>window_Height){
    _h = window_Height;
    _w = window_Height / config.windowHeight * config.windowWidth;

    if(window_Height/window_Width >  config.windowHeight / config.windowWidth){
        _w = window_Width;
        _h = window_Width / config.windowWidth * config.windowHeight;
    }

}else{
    _w = window_Width;
    _h = window_Width / config.windowWidth * config.windowHeight;
}

document.querySelector("canvas").style.width = _w + "px";
document.querySelector("canvas").style.height = _h + "px";

function showPerformance () {
    var script = document.createElement('script')
    script.onload = function () {
        var stats = new window['Stats']()
        stats.dom.style.setProperty('position', 'absolute')
        stats.dom.style.setProperty('top', '0')
        stats.dom.style.setProperty('left', 'auto')
        stats.dom.style.setProperty('right', '0')
        stats.dom.style.setProperty('z-index', '999')
        document.body.appendChild(stats.dom)
        requestAnimationFrame(function loop() {
            stats.update()
            requestAnimationFrame(loop)
        })
    }
    script.src = '//mrdoob.github.io/stats.js/build/stats.min.js'
    document.head.appendChild(script)
}
showPerformance();