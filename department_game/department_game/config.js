
const window_Width = window.innerWidth ;
const window_Height = window.innerHeight;


var characterListData = [
  {
      name: 'Man', url: '../assets/images/character/Man.png',
      type: 'user'
  },
  {
      name: 'Woman', url: '../assets/images/character/Woman.png',
      type: 'user'
  },
  // {
  //     name: 'Boxing', url: '../assets/images/character/Boxing.png',
  //     type: 'npc'
  // },
  {
      name: 'InfoMan', url: '../assets/images/character/InfoMan.png',
      type: 'npc'
  },
  // {
  //     name: 'Chase', url: '../assets/images/character/Chase.png',
  //     type: 'npc'
  // },
  // {
  //     name: 'Dizni', url: '../assets/images/character/Dizni.png',
  //     type: 'npc'
  // },
]

function config(){
  return {
    width: window_Width,
    height: window_Height,
    backgroundColor: 0xffffff,
    physics:{
        default: "arcade",
        arcade:{
          debug: true
        },
    },
    fps: {
        target: 60,
        forceSetTimeOut: true
    },

  }
} 

function characterList(){
  return characterListData
}

export { 
  config ,
  characterList
} 
