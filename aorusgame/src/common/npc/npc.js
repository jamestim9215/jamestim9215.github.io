// import { config,PlayerInfo } from '../config'
// import { socket } from '../socket'

export default class Npc extends Phaser.Physics.Arcade.Sprite {
  constructor(scene, x,y ,_npcInfo,type) {
    super(scene, 0, -8, _npcInfo.name, 0);
    this.scene = scene;
    // this.scene.physics.world.enable(this)
    this.scene.add.existing(this);
    this.setInteractive();

    //設定角色
    this.setScale(1);
    this.status = "Idle";

    this.setDepth(2);

    this.setAnims(type);
    
    
    this.animsKeyName = type+'NpcIdle';
    switch(type){
        case 'AorusGirl': this.animsKeyName = 'AorusGirlIdle'; break;
        case 'AORUSGirl1': this.animsKeyName = 'CharacterAorusIdle'; break;
        case 'AORUSGirl2': this.animsKeyName = 'CharacterAorusIdle16'; break;
        case 'AORUSGirl3': this.animsKeyName = 'CharacterAorusIdle162'; break;
        case 'river': this.animsKeyName = type+'NpcIdle'; break;
        default: this.animsKeyName = type+'NpcIdle';
    }

    console.log(this.animsKeyName+"Down");

    this.anims.play(this.animsKeyName+"Down", true);
    

    this.direction = "down";
  }

  deletePlayer() {
    clearTimeout(this.setInter);
    this.movePath = [];
    this.name.destroy();
    this.destroy();
  }

  setAnims(type) {
    var keyName = "CharacterNpc";
    switch(type){
        case 'AorusGirl': keyName = 'AorusGirl'; break;
        case 'AORUSGirl1': keyName = 'CharacterAorus'; break;
        case 'AORUSGirl2': keyName = 'CharacterAorus16'; break;
        case 'AORUSGirl3': keyName = 'CharacterAorus162'; break;
        default: keyName = 'CharacterNpc';
    }

    this.setTexture(keyName);
  }
  create() {}
  update(GameStatus) {
    if (GameStatus == 'pause') {
        this.direction = this.scene.player.direction;
    }
    if (this.direction == "Left") {
      this.anims.play(this.animsKeyName+"Right", true);
    } else if (this.direction == "Right") {
      this.anims.play(this.animsKeyName+"Left", true);
    } else if (this.direction == "Up") {
      this.anims.play(this.animsKeyName+"Down", true);
    } else if (this.direction == "Down") {
      this.anims.play(this.animsKeyName+"Up", true);
    }

    
  }
}
