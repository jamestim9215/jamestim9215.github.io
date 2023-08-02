
export default class CustomUI extends Phaser.GameObjects.Container {
  constructor(scene, x, y, width, height, texture, frames) {
    super(scene, x, y);

    this.topLeft = scene.add.sprite(-width/2 +4 , -height/2 +4, texture, frames[0]).setOrigin(0.5, 0.5);
    this.topCenter = scene.add.sprite(0, -height/2 + 4, texture, frames[1]).setOrigin(0.5, 0.5).setDisplaySize(width - 16, 8);
    this.topRight = scene.add.sprite(width/2 -4, -height/2 +4, texture, frames[3]).setOrigin(0.5, 0.5);
    this.centerLeft = scene.add.sprite(-width/2 + 4, 0, texture, frames[4]).setOrigin(0.5, 0.5).setDisplaySize(8, height - 16);
    
    this.centerCenter = scene.add.sprite(0, 0, texture, frames[6]).setOrigin(0.5, 0.5).setDisplaySize(width - 16, height - 16);

    this.centerRight = scene.add.sprite(width/2 -4, 0, texture, frames[7]).setOrigin(0.5, 0.5).setDisplaySize(8, height - 16);
    this.bottomLeft = scene.add.sprite(-width/2 +4, height/2-4, texture, frames[12]).setOrigin(0.5, 0.5);
    this.bottomCenter = scene.add.sprite(0, height/2-4, texture, frames[13]).setOrigin(0.5, 0.5).setDisplaySize(width - 16, 8);
    this.bottomRight = scene.add.sprite(width/2-4, height/2-4, texture, frames[15]).setOrigin(0.5, 0.5);   

    this.add([
      this.topLeft,
      this.topCenter,
      this.topRight,
      this.centerLeft,
      this.centerCenter,
      this.centerRight,
      this.bottomLeft,
      this.bottomCenter,
      this.bottomRight
    ]);
    // this.add([this.leftPart, this.middlePart, this.rightPart]);
    this.setInteractive();
    this.visible = true;

    scene.add.existing(this);
  }
}