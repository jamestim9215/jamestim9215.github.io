import ObjectData from '@/common/ObjectData.json'
let NpcCreate = (preloadCreate) =>{

    ObjectData.Npc.theme.map((item)=>{
        //站著
        preloadCreate.anims.create({
            key: item.name+"NpcIdleDown",
            frames: preloadCreate.anims.generateFrameNumbers(item.name+'Npc', { frames: [0] }),
            frameRate: item.frameRate[0],
            repeat: -1
        })
        preloadCreate.anims.create({
            key: item.name+"NpcIdleRight",
            frames: preloadCreate.anims.generateFrameNumbers(item.name+'Npc', { frames: [4] }),
            frameRate: item.frameRate[0],
            repeat: -1
        })
        preloadCreate.anims.create({
            key: item.name+"NpcIdleUp",
            frames: preloadCreate.anims.generateFrameNumbers(item.name+'Npc', { frames: [12] }),
            frameRate: item.frameRate[0],
            repeat: -1
        })
        preloadCreate.anims.create({
            key: item.name+"NpcIdleLeft",
            frames: preloadCreate.anims.generateFrameNumbers(item.name+'Npc', { frames: [8] }),
            frameRate: item.frameRate[0],
            repeat: -1
        })

    })

    

}

export {
    NpcCreate
};
