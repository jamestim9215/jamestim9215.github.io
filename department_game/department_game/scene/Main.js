import { config,characterList } from '../config'

var characterData = characterList();

const changeCharacterAnims = (character) =>{
    character.timer = setInterval(()=>{
        var animsType = Math.floor(Math.random() * 3) + 1;
        var vel_x = (Math.round(Math.random()) * 2 - 1) * 40
        var vel_y = (Math.round(Math.random()) * 2 - 1) * 10
        character.status = animsType;
        if(character.status == 1){
            character.setVelocity(0, 0);
            character.anims.play(character.name+'_stand');
        }
        if(character.status == 2){
            character.setVelocity(vel_x, vel_y);
            character.anims.play(character.name+'_walk');
        }
        if(character.status == 3){
            character.setVelocity(vel_x * 3, vel_y);
            character.anims.play(character.name+'_run');
        }
    },Phaser.Math.Between(2,10) * 1000)

}

export default class Main extends Phaser.Scene {
    constructor() {
        super('mainpage');
    }
    create() {
        this.scoreTitleLabel = this.add.bitmapText( 30 , 30, "pixelFont", "Digital World", 20).setOrigin(0,0);
        this.scoreTitleLabel.setDepth(10);
        

        this.characters = this.physics.add.group();

        for (var i = 0; i < characterData.length; i++) {
            
            var x = Phaser.Math.Between(100, config().width - 100);
            var y = Phaser.Math.Between(100, config().height - 100);
            var character = this.physics.add.sprite(x, y, characterData[i].name);
            this.characters.add(character)
            character.name = characterData[i].name;

            character.setCollideWorldBounds(true); //設定與世界邊界碰撞
            character.setBounce(1);
            character.setDepth(y);
            character.setScale(0.8);
            if((Math.round(Math.random()) * 2 - 1) == 1) character.setFlipX(true);

            changeCharacterAnims(character)
        }

    }
    update() {

        for(var i = 0; i < this.characters.children.entries.length; i++){
            var character = this.characters.children.entries[i];
            
            if (character.body.velocity.x < 0) {
                character.setFlipX(true);
            } else if (character.body.velocity.x > 0) {
                character.setFlipX(false);
            }

            character.setDepth(character.y);
            
        }
    }
}