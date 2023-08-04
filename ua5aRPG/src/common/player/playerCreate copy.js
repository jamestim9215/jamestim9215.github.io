
import ObjectData from '@/common/ObjectData.json'
let PlayerCreate = (preloadCreate) =>{

    var PlayerData = JSON.parse(localStorage.getItem('PlayerData'));

    var keyName = ObjectData.Player.theme[PlayerData.CharacterId].name;

    //站著
    preloadCreate.anims.create({
        key: "CharacterIdleDown",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),
        frameRate: 10,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "CharacterIdleRight",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: [10, 11, 12, 13, 14, 15, 16, 17] }),
        frameRate: 10,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "CharacterIdleUp",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: [20, 21, 22, 23, 24, 25, 26, 27] }),
        frameRate: 10,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "CharacterIdleLeft",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: [30, 31, 32, 33, 34, 35, 36, 37] }),
        frameRate: 10,
        repeat: -1
    })

    //走路
    preloadCreate.anims.create({
        key: "CharacterWalkDown",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: [40, 41, 42, 43, 44, 45, 46, 47] }),
        frameRate: 15,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "CharacterWalkRight",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: [50, 51, 52, 53, 54, 55, 56, 57] }),
        frameRate: 15,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "CharacterWalkUp",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: [60, 61, 62, 63, 64, 65, 66, 67] }),
        frameRate: 15,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "CharacterWalkLeft",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: [70, 71, 72, 73, 74, 75, 76, 77] }),
        frameRate: 15,
        repeat: -1
    })


    //跑步
    preloadCreate.anims.create({
        key: "CharacterRunDown",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: [80, 81, 82, 83, 84, 85, 86, 87] }),
        frameRate: 20,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "CharacterRunRight",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: [90, 91, 92, 93, 94, 95, 96, 97] }),
        frameRate: 20,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "CharacterRunUp",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: [100, 101, 102, 103, 104, 105, 106, 107] }),
        frameRate: 20,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "CharacterRunLeft",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: [110, 111, 112, 113, 114, 115, 116, 117] }),
        frameRate: 20,
        repeat: -1
    })

    //攻擊 往右揮動
    preloadCreate.anims.create({
        key: "CharacterAttackDown",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: [120, 121, 122, 123, 124, 125] }),
        frameRate: 30,
        repeat: 0
    })
    preloadCreate.anims.create({
        key: "CharacterAttackRight",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: [130, 131, 132, 133, 134, 135] }),
        frameRate: 30,
        repeat: 0
    })
    preloadCreate.anims.create({
        key: "CharacterAttackUp",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: [140, 141, 142, 143, 144, 145] }),
        frameRate: 30,
        repeat: 0
    })
    preloadCreate.anims.create({
        key: "CharacterAttackLeft",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: [150, 151, 152, 153, 154, 155] }),
        frameRate: 30,
        repeat: 0
    })
    //攻擊 往左揮動
    preloadCreate.anims.create({
        key: "CharacterAttackLDown",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: [160, 161, 162, 163, 164, 165] }),
        frameRate: 30,
        repeat: 0
    })
    preloadCreate.anims.create({
        key: "CharacterAttackLRight",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: [170, 171, 172, 173, 174, 175] }),
        frameRate: 30,
        repeat: 0
    })
    preloadCreate.anims.create({
        key: "CharacterAttackLUp",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: [180, 181, 182, 183, 184, 185] }),
        frameRate: 30,
        repeat: 0
    })
    preloadCreate.anims.create({
        key: "CharacterAttackLLeft",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: [190, 191, 192, 193, 194, 195] }),
        frameRate: 30,
        repeat: 0
    })

    var keyNameSword = 'Sword';

    //站著
    preloadCreate.anims.create({
        key: "SwordIdleDown",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSword, { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),
        frameRate: 10,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "SwordIdleRight",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSword, { frames: [10, 11, 12, 13, 14, 15, 16, 17] }),
        frameRate: 10,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "SwordIdleUp",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSword, { frames: [20, 21, 22, 23, 24, 25, 26, 27] }),
        frameRate: 10,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "SwordIdleLeft",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSword, { frames: [30, 31, 32, 33, 34, 35, 36, 37] }),
        frameRate: 10,
        repeat: -1
    })

    //走路
    preloadCreate.anims.create({
        key: "SwordWalkDown",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSword, { frames: [40, 41, 42, 43, 44, 45, 46, 47] }),
        frameRate: 15,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "SwordWalkRight",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSword, { frames: [50, 51, 52, 53, 54, 55, 56, 57] }),
        frameRate: 15,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "SwordWalkUp",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSword, { frames: [60, 61, 62, 63, 64, 65, 66, 67] }),
        frameRate: 15,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "SwordWalkLeft",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSword, { frames: [70, 71, 72, 73, 74, 75, 76, 77] }),
        frameRate: 15,
        repeat: -1
    })


    //跑步
    preloadCreate.anims.create({
        key: "SwordRunDown",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSword, { frames: [80, 81, 82, 83, 84, 85, 86, 87] }),
        frameRate: 20,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "SwordRunRight",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSword, { frames: [90, 91, 92, 93, 94, 95, 96, 97] }),
        frameRate: 20,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "SwordRunUp",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSword, { frames: [100, 101, 102, 103, 104, 105, 106, 107] }),
        frameRate: 20,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "SwordRunLeft",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSword, { frames: [110, 111, 112, 113, 114, 115, 116, 117] }),
        frameRate: 20,
        repeat: -1
    })

    //攻擊 往右揮動
    preloadCreate.anims.create({
        key: "SwordAttackDown",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSword, { frames: [120, 121, 122, 123, 124, 125] }),
        frameRate: 30,
        repeat: 0
    })
    preloadCreate.anims.create({
        key: "SwordAttackRight",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSword, { frames: [130, 131, 132, 133, 134, 135] }),
        frameRate: 30,
        repeat: 0
    })
    preloadCreate.anims.create({
        key: "SwordAttackUp",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSword, { frames: [140, 141, 142, 143, 144, 145] }),
        frameRate: 30,
        repeat: 0
    })
    preloadCreate.anims.create({
        key: "SwordAttackLeft",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSword, { frames: [150, 151, 152, 153, 154, 155] }),
        frameRate: 30,
        repeat: 0
    })
    //攻擊 往左揮動
    preloadCreate.anims.create({
        key: "SwordAttackLDown",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSword, { frames: [160, 161, 162, 163, 164, 165] }),
        frameRate: 30,
        repeat: 0
    })
    preloadCreate.anims.create({
        key: "SwordAttackLRight",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSword, { frames: [170, 171, 172, 173, 174, 175] }),
        frameRate: 30,
        repeat: 0
    })
    preloadCreate.anims.create({
        key: "SwordAttackLUp",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSword, { frames: [180, 181, 182, 183, 184, 185] }),
        frameRate: 30,
        repeat: 0
    })
    preloadCreate.anims.create({
        key: "SwordAttackLLeft",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSword, { frames: [190, 191, 192, 193, 194, 195] }),
        frameRate: 30,
        repeat: 0
    })

    var keyNameSmear = 'Smear';

    //站著
    preloadCreate.anims.create({
        key: "SmearIdleDown",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSmear, { frames: [0, 1, 2, 3, 4, 5, 6, 7] }),
        frameRate: 10,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "SmearIdleRight",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSmear, { frames: [10, 11, 12, 13, 14, 15, 16, 17] }),
        frameRate: 10,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "SmearIdleUp",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSmear, { frames: [20, 21, 22, 23, 24, 25, 26, 27] }),
        frameRate: 10,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "SmearIdleLeft",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSmear, { frames: [30, 31, 32, 33, 34, 35, 36, 37] }),
        frameRate: 10,
        repeat: -1
    })

    //走路
    preloadCreate.anims.create({
        key: "SmearWalkDown",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSmear, { frames: [40, 41, 42, 43, 44, 45, 46, 47] }),
        frameRate: 15,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "SmearWalkRight",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSmear, { frames: [50, 51, 52, 53, 54, 55, 56, 57] }),
        frameRate: 15,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "SmearWalkUp",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSmear, { frames: [60, 61, 62, 63, 64, 65, 66, 67] }),
        frameRate: 15,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "SmearWalkLeft",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSmear, { frames: [70, 71, 72, 73, 74, 75, 76, 77] }),
        frameRate: 15,
        repeat: -1
    })


    //跑步
    preloadCreate.anims.create({
        key: "SmearRunDown",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSmear, { frames: [80, 81, 82, 83, 84, 85, 86, 87] }),
        frameRate: 20,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "SmearRunRight",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSmear, { frames: [90, 91, 92, 93, 94, 95, 96, 97] }),
        frameRate: 20,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "SmearRunUp",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSmear, { frames: [100, 101, 102, 103, 104, 105, 106, 107] }),
        frameRate: 20,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "SmearRunLeft",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSmear, { frames: [110, 111, 112, 113, 114, 115, 116, 117] }),
        frameRate: 20,
        repeat: -1
    })

    //攻擊 往右揮動
    preloadCreate.anims.create({
        key: "SmearAttackDown",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSmear, { frames: [120, 121, 122, 123, 124, 125] }),
        frameRate: 30,
        repeat: 0
    })
    preloadCreate.anims.create({
        key: "SmearAttackRight",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSmear, { frames: [130, 131, 132, 133, 134, 135] }),
        frameRate: 30,
        repeat: 0
    })
    preloadCreate.anims.create({
        key: "SmearAttackUp",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSmear, { frames: [140, 141, 142, 143, 144, 145] }),
        frameRate: 30,
        repeat: 0
    })
    preloadCreate.anims.create({
        key: "SmearAttackLeft",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSmear, { frames: [150, 151, 152, 153, 154, 155] }),
        frameRate: 30,
        repeat: 0
    })
    //攻擊 往左揮動
    preloadCreate.anims.create({
        key: "SmearAttackLDown",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSmear, { frames: [160, 161, 162, 163, 164, 165] }),
        frameRate: 30,
        repeat: 0
    })
    preloadCreate.anims.create({
        key: "SmearAttackLRight",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSmear, { frames: [170, 171, 172, 173, 174, 175] }),
        frameRate: 30,
        repeat: 0
    })
    preloadCreate.anims.create({
        key: "SmearAttackLUp",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSmear, { frames: [180, 181, 182, 183, 184, 185] }),
        frameRate: 30,
        repeat: 0
    })
    preloadCreate.anims.create({
        key: "SmearAttackLLeft",
        frames: preloadCreate.anims.generateFrameNumbers(keyNameSmear, { frames: [190, 191, 192, 193, 194, 195] }),
        frameRate: 30,
        repeat: 0
    })



}

export {
    PlayerCreate
};
