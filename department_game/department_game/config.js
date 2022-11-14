
const window_Width = window.innerWidth ;
const window_Height = window.innerHeight;


var characterListData = [
  {
      name: 'Man', url: '../assets/images/character/Man.png'
  },
  {
      name: 'Woman', url: '../assets/images/character/Woman.png'
  },
  {
      name: 'Boxing', url: '../assets/images/character/Boxing.png'
  },
  {
      name: 'InfoMan', url: '../assets/images/character/InfoMan.png'
  },
  {
      name: 'Chase', url: '../assets/images/character/Chase.png'
  },
  {
      name: 'Dizni', url: '../assets/images/character/Dizni.png'
  },
]

function config(){
  return {
    width: window_Width,
    height: window_Height,
    backgroundColor: 0xffffff,
    physics:{
        default: "arcade",
        arcade:{
          debug: false
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
