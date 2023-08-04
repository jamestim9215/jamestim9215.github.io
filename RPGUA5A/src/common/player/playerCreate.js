
import ObjectData from '@/common/ObjectData.json'
let PlayerCreate = (preloadCreate) =>{

    var PlayerData = JSON.parse(localStorage.getItem('PlayerData'));

    var CharacterObject = ObjectData.Player.theme[PlayerData.CharacterId];
    var keyName = CharacterObject.name;

    //站著
    preloadCreate.anims.create({
        key: "CharacterIdleDown",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: [0] }),
        frameRate: 0,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "CharacterIdleRight",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: [4] }),
        frameRate: 0,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "CharacterIdleUp",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: [12] }),
        frameRate: 0,
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "CharacterIdleLeft",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: [8] }),
        frameRate: 0,
        repeat: -1
    })

    //走路
    preloadCreate.anims.create({
        key: "CharacterWalkDown",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames:  CharacterObject.frames[0] }),
        frameRate: CharacterObject.frameRate[1],
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "CharacterWalkRight",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: CharacterObject.frames[1]  }),
        frameRate: CharacterObject.frameRate[1],
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "CharacterWalkUp",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: CharacterObject.frames[3]  }),
        frameRate: CharacterObject.frameRate[1],
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "CharacterWalkLeft",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: CharacterObject.frames[2]  }),
        frameRate: CharacterObject.frameRate[1],
        repeat: -1
    })


    //跑步
    preloadCreate.anims.create({
        key: "CharacterRunDown",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: CharacterObject.frames[0]  }),
        frameRate: CharacterObject.frameRate[2],
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "CharacterRunRight",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: CharacterObject.frames[1]  }),
        frameRate: CharacterObject.frameRate[2],
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "CharacterRunUp",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: CharacterObject.frames[3]  }),
        frameRate: CharacterObject.frameRate[2],
        repeat: -1
    })
    preloadCreate.anims.create({
        key: "CharacterRunLeft",
        frames: preloadCreate.anims.generateFrameNumbers(keyName, { frames: CharacterObject.frames[2]  }),
        frameRate: CharacterObject.frameRate[2],
        repeat: -1
    })


}

export {
    PlayerCreate
};
