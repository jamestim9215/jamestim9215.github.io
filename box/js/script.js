

var chanceData = []
var chanceMatchData = []

const lottery = [
    { 
        name : "大吉",
        chibi: "銀色 Chibi",
        content: "You will soon witness a miracle.",
        point: 100,
        chance: 0.1
    },
    { 
        name : "吉",
        chibi: "粉色Chibi",
        content: "The best is yet to come.",
        point: 70,
        chance: 0.2
    },
    { 
        name : "小吉",
        chibi: "藍色Chibi",
        content: "Nothing beats a great smile.",
        point: 50,
        chance: 0.2
    },
    { 
        name : "凶",
        chibi: "黑色Chibi",
        content: "Watch your back.",
        point: 5,
        chance: 0.2
    },
    { 
        name : "平",
        chibi: "白色 Chibi",
        content: "Good Luck.",
        point: 30,
        chance: 0.3
    }
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
            console.log((chanceMatchData[i-1]?chanceMatchData[i-1]+1:0)+" <= "+random+" <= "+chanceMatchData[i]);
            index = i;
            break;
        }
    }
    

    document.querySelectorAll('.card div')[0].innerHTML = `
        <div>${lottery[i].name}</div>
        <div>${lottery[i].chibi}</div>
        <div>${lottery[i].point} Points</div>
        <div>${lottery[i].content}</div>
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