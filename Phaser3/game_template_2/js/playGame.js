class playGame extends Phaser.Scene {
  constructor() {
    super('playGame');
  }

  init() {

  }

  preload() {
  }

  create() {
    this.bg_1 = this.add.tileSprite(0, 0, game.config.width, game.config.height, "bg-1").setScale(600 / 224);
    this.bg_1.setOrigin(0, 0);
    this.bg_1.setScrollFactor(0);

    this.bg_2 = this.add.tileSprite(0, 0, game.config.width, game.config.height, "bg-2").setScale(600 / 224);
    this.bg_2.setOrigin(0, 0);
    this.bg_2.setScrollFactor(0);

    // add player
    this.player = this.add.sprite(game.config.width / 2, game.config.height / 2, "player").setScale(2);
    // create an animation for the player
    this.anims.create({
      key: "fly",
      frames: this.anims.generateFrameNumbers("player", {
        start: 3,
        end: 4
      }),
      frameRate: 10,
      repeat: -1
    });
    this.player.play("fly");

    this.cursors = this.input.keyboard.createCursorKeys();

    this.myCam = this.cameras.main;
    this.myCam.setBounds(0, 0, game.config.width * 3, game.config.height);

    this.myCam.startFollow(this.player);

  }

  update() {
    // move the player when the arrow keys are pressed
    if (this.cursors.left.isDown && (this.player.x-50) > 0) {
      this.player.x -= 10;
      this.player.flipX = true;
    } else if (this.cursors.right.isDown && (this.player.x+50) < game.config.width * 3) {
      this.player.x += 10;
      this.player.flipX = false;
    }
    if (this.cursors.up.isDown && (this.player.y-40) > 0) {
      this.player.y -= 5;
    } else if (this.cursors.down.isDown && (this.player.y+40) < game.config.height) {
      this.player.y += 5;
    }

    // scroll the texture of the tilesprites proportionally to the camera scroll
    this.bg_1.tilePositionX = this.myCam.scrollX * .3;
    this.bg_2.tilePositionX = this.myCam.scrollX * .6;
  }

}