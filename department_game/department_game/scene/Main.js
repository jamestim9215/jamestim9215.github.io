import { config,characterList } from '../config'

var characterData = characterList();

export default class Main extends Phaser.Scene {
    constructor() {
        super('mainpage');
    }
    create() {
        this.scoreTitleLabel = this.add.bitmapText( 30 , 30, "pixelFont", "Digital World", 20).setOrigin(0,0);
        this.scoreTitleLabel.setDepth(10);
        

        this.characters = this.physics.add.group();

        for (var i = 0; i < characterData.length; i++) {
            console.log(characterData[i].type);
            if(characterData[i].type == 'npc'){
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

                this.changeCharacterAnims(character)
            }
        }

        
        var x = config().width/2;
        var y = config().height/2;

        this.user = this.physics.add.sprite(x,y,characterData[0].name);

        this.characters.add(this.user);

        this.user.name = characterData[0].name;
        this.user.setCollideWorldBounds(true); //設定與世界邊界碰撞
        this.user.setBounce(1);
        this.user.setDepth(y);
        this.user.setScale(0.8);

        this.platforms = this.physics.add.staticGroup()
        this.platforms.create(200, 200)

        this.physics.add.overlap(this.user, this.characters,this.showName, null , this);
        // this.physics.add.collider(this.characters, this.characters);

        
        //添加事件监听器
        this.cursors = this.input.keyboard.createCursorKeys();

    }
    changeCharacterAnims(character){
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
    showName(user, npc){
        console.log(npc.name);
        clearTimeout(npc.timer);
        npc.setVelocity(0, 0);
        npc.anims.play(npc.name+'_stand');

        npc.timer = setTimeout(()=>{
            this.changeCharacterAnims(npc);
        },3000)
        console.log(user, npc);
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


        if(this.user){

            this.user.anims.play(this.user.name+'_run', true);
            if (this.cursors.up.isDown && this.cursors.right.isDown)
            {
                this.user.setVelocityY(-120);
                this.user.setVelocityX(120);
                this.user.setFlipX(false);
            }
            else if (this.cursors.up.isDown && this.cursors.left.isDown)
            {
                this.user.setVelocityY(-120);
                this.user.setVelocityX(-120);
                this.user.setFlipX(true);
            }
            else if (this.cursors.down.isDown && this.cursors.right.isDown)
            {
                this.user.setVelocityY(120);
                this.user.setVelocityX(120);
                this.user.setFlipX(false);
            }
            else if (this.cursors.down.isDown && this.cursors.left.isDown)
            {
                this.user.setVelocityY(120);
                this.user.setVelocityX(-120);
                this.user.setFlipX(true);
            }
            else if (this.cursors.up.isDown)
            {
                this.user.setVelocityY(-120);
                this.user.setVelocityX(0);
            }
            else if (this.cursors.down.isDown)
            {
                this.user.setVelocityY(120);
                this.user.setVelocityX(0);
            }
            else if (this.cursors.left.isDown)
            {
                this.user.setVelocityX(-120);
                this.user.setVelocityY(0);
                this.user.setFlipX(true);
            }
            else if (this.cursors.right.isDown)
            {
                this.user.setVelocityX(120);
                this.user.setVelocityY(0);
                this.user.setFlipX(false);
            }
            else 
            {
                this.user.setVelocityX(0);
                this.user.setVelocityY(0);

                this.user.anims.play(this.user.name+'_stand');
            }
            
        }
    }
}