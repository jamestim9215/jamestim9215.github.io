
export default class CustomButton extends Phaser.GameObjects.Container {
  constructor(scene, x, y, width, texture, leftFrame, middleFrame, rightFrame, callback) {
    super(scene, x, y);

    // 創建按鈕的左、中、右三個部分
    this.leftPart = scene.add.sprite(-width/2, 0, texture, leftFrame).setOrigin(0.5, 0.5);
    this.middlePart = scene.add.sprite(0, 0, texture, middleFrame).setOrigin(0.5, 0.5);
    this.middlePart.setDisplaySize(width - 16, this.middlePart.height);
    this.rightPart = scene.add.sprite(width/2, 0, texture, rightFrame).setOrigin(0.5, 0.5);


    this.add([this.leftPart, this.middlePart, this.rightPart]);
    this.setInteractive();

    this.on('pointerdown', callback);

    scene.add.existing(this);
  }
}