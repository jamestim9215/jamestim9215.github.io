

var chanceData = []
var chanceMatchData = []

const lottery = [
    { 
        name : "大吉",
        chibi: "銀色 Chibi",
        content: "You will soon witness a miracle.",
        point: 100,
        chance: 0.1,
        color: "#999"
    },
    { 
        name : "吉",
        chibi: "粉色Chibi",
        content: "The best is yet to come.",
        point: 70,
        chance: 0.2,
        color: "#ffa9a9"
    },
    { 
        name : "小吉",
        chibi: "藍色Chibi",
        content: "Nothing beats a great smile.",
        point: 50,
        chance: 0.2,
        color: "#2e78dc"
    },
    { 
        name : "凶",
        chibi: "黑色Chibi",
        content: "Watch your back.",
        point: 5,
        chance: 0.2,
        color: "#232323"
    },
    { 
        name : "平",
        chibi: "白色 Chibi",
        content: "Good Luck.",
        point: 30,
        chance: 0.3,
        color: "#fff"
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

function getRandom(min,max){
    return Math.floor(Math.random()*max)+min;
};

var gamePlay = () => {
    var times = getRandom(1,3);
    
    
    chanceData = [];
    chanceMatchData = [];
    lottery.forEach((item,index)=>{
        var chanceBySetting = item.chance * 100 + (chanceMatchData.length>0?chanceMatchData[chanceMatchData.length-1]:0);
        chanceData.push(item.chance * 100)
        chanceMatchData.push(chanceBySetting)
    })

    let random = Math.ceil(Math.random() * 100);
    

    var cardIndex = 0;
    for(var i=0; i<chanceMatchData.length; i++){
        if((chanceMatchData[i-1]?chanceMatchData[i-1]+1:0) <= random && random <= chanceMatchData[i]){
            cardIndex = i;
            break;
        }
    }
    console.log('cardIndex',cardIndex)

    let s = 0;
    let num = 0;
    let index = 0;
    let runtime = 100;


    var timeout = setInterval(()=>{
        num = runtime + num;

        if(index > 4){
            index=0;
        }
        document.querySelectorAll('.box').forEach((item)=>{
            item.classList.remove('active');
        })
        document.getElementById('box'+(index+1)).classList.add('active');
        
        if(num % 1000 == 0){
            s++
        }
        if(s == times){
            if(cardIndex == index){
                clearTimeout(timeout);
                document.getElementById('info').innerHTML = `
                    運勢 : ${lottery[cardIndex].name} <br>
                    ${lottery[cardIndex].point} Points <br>
                    ${lottery[cardIndex].chibi} <br>
                    ${lottery[cardIndex].content}
                `
            }
        }
        index++;
    },runtime)
}