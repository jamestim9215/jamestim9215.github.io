

export let CreateWeapon = function (scene,WeaponInfo,object) {
  
    scene.Weapon = new Phaser.Physics.Arcade.Sprite(scene, WeaponInfo.x, WeaponInfo.y, 'Sword' ).setOrigin(0.5, 0.5).setScale(1);
    scene.Weapon.setTexture('Sword');
    scene.Weapon.anims.play("SwordRunUp", true);
    scene.add.existing(scene.Weapon);

};