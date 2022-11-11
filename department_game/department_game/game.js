import './style.css'
import Phaser from 'phaser'
import { config } from './config'


import Preload from './scene/Preload.js'
import Main from './scene/Main.js'

const window_Width = window.innerWidth ;
const window_Height = window.innerHeight;

var phaserConfig = {
  type: Phaser.AUTO,
  scene: [Preload,Main],
}

phaserConfig = Object.assign(phaserConfig, config());

var game = new Phaser.Game(phaserConfig);
