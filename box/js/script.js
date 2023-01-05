

var chanceData = []
var chanceMatchData = []

const lottery = [
    { 
        point: 100,
        chance: 0.1,
        color: "silver"
    },
    { 
        point: 70,
        chance: 0.2,
        color: "pink"
    },
    { 
        point: 50,
        chance: 0.2,
        color: "blue"
    },
    { 
        point: 5,
        chance: 0.2,
        color: "black"
    },
    { 
        point: 30,
        chance: 0.3,
        color: "white"
    },
];




let testFun = () => {
    var dataChance = [0,0,0,0,0];
    var count = 0; 
    var times = 1000;
    setInterval(()=>{
        let random = Math.ceil(Math.random() * 100);
    
        count++;
        for(var i=0; i<chanceMatchData.length; i++){
            if((chanceMatchData[i-1]?chanceMatchData[i-1]:0) < random && random <= chanceMatchData[i]){
                dataChance[i]++;
            }
        }
        if(count == times){
            clearTimeout(this);
            for(var key in dataChance){
                dataChance[key] = Number((dataChance[key] / times * 100).toFixed(0))
            }
            console.log(dataChance);
        }
    }, 1)
}

let runGame = () => {
    chanceData = [];
    chanceMatchData = [];
    lottery.forEach((item,index)=>{
        var chanceBySetting = item.chance * 100 + (chanceMatchData.length>0?chanceMatchData[chanceMatchData.length-1]:0);
        chanceData.push(item.chance * 100)
        chanceMatchData.push(chanceBySetting)
    })

    // testFun();
    let random = Math.ceil(Math.random() * 100);

    var index = 0;
    
    for(var i=0; i<chanceMatchData.length; i++){
        if((chanceMatchData[i-1]?chanceMatchData[i-1]+1:0) <= random && random <= chanceMatchData[i]){
            // console.log((chanceMatchData[i-1]?chanceMatchData[i-1]+1:0)+" <= "+random+" <= "+chanceMatchData[i]);
            index = i;
            break;
        }
    }
    
    // document.querySelectorAll('.card')[0].style.backgroundColor = lottery[index].color;

    let message = document.getElementById(lottery[index].color+'_text_1').innerHTML;
    let pointMes = document.getElementById(lottery[index].color+'_text_2').innerHTML;
    console.log(message, pointMes);

    document.querySelectorAll('.card')[0].innerHTML = `
        <img src="./images/chibi/chibi-${lottery[index].point}.png" alt="">
        <div id="game-message">${message}</div>
        <div id="game-point">${pointMes}</div>
    `
    


}


var clickBox = () => {
    document.getElementById('game-box').classList.add('shake');
    runGame();
    setTimeout(()=>{
        document.getElementById('game-box').classList.remove('shake');
        document.getElementById('box-case').classList.add('openbox');
        document.getElementById('card').classList.add('opencard');
        document.getElementById('cover').classList.add('show');
        document.getElementById('somepaper').classList.add('active');
        setTimeout(()=>{
            
            document.getElementById('cover').classList.add('active');
            document.getElementById('box-case').classList.add('active');
            document.getElementById('card').classList.add('active');
            document.getElementById('restart-btn').classList.add('active');
        }, 600);
    },1000)
}

var clickBtn = () => {
    document.getElementById('cover').classList.remove('active');
    document.getElementById('box-case').classList.remove('active');
    document.getElementById('card').classList.remove('active');
    document.getElementById('restart-btn').classList.remove('active');
    document.getElementById('box-case').classList.remove('openbox');
    document.getElementById('card').classList.remove('opencard');
    document.getElementById('cover').classList.remove('show');
    document.getElementById('somepaper').classList.remove('active');
}