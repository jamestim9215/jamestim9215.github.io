
var gameWindowCover = document.getElementById('gameWindowCover');
var character = document.getElementById('character');
var block = document.getElementById('block');
var ground = document.getElementById('ground');
var ground2 = document.getElementById('ground2');
var cloud = document.getElementById('cloud');
var hightValue = document.getElementById('hightValue');
var highestdiv = document.getElementById('Highestdiv');

var sourceValue = document.getElementById('sourceValue');
var speedValue = document.getElementById('speedValue');
var source = 0;
var speed = 2500;
var level = 1;
var gameStatus = false;

if(localStorage.getItem("aorus404")){
    highestdiv.style.display = 'inline';
    hightValue.innerHTML = localStorage.getItem("aorus404");
}

function jump(){
    if(character.classList != 'animate'){
        character.classList.add('animate');
        setTimeout(function(){
            character.classList.remove('animate');
        },500)
    }
}

document.addEventListener('keydown', logKey);

function logKey(e) {
    if(e.code == 'Space'){
        if(gameStatus==false){
            gameStart();
        }
        jump();
    }
}

function gameStart(){
    var hi = localStorage.getItem("aorus404");
    if(hi){
        hightValue.innerHTML = hi;
    }

    speed = 2500;
    source = 0;
    level = 1;
    cloud.style.top = getRandom(20, 80) + 'px';
    document.body.style.backgroundColor = "#fff";
    block.style.animationDuration = speed+'ms';
    ground.style.animationDuration = speed+'ms';
    ground2.style.animationDuration = speed+'ms';    
    character.style.backgroundImage = 'url(images/robot.gif)';
    character.style.width = '50px';
    character.style.height = '43px';

    speedValue.innerHTML = level;
    sourceValue.innerHTML = source;
    if(block.classList != 'animate'){
        block.classList.add('animate');
        ground.classList.add('animate');
        ground2.classList.add('animate');
        cloud.classList.add('animate');
    }
    gameWindowCover.style.opacity = '0';
    gameStatus = true;
}


function gameOver(){
    if(localStorage.getItem("aorus404") < source){
        localStorage.setItem("aorus404",source);
        hightValue.innerHTML = source;
    }
    

    gameStatus = false;
    character.style.backgroundImage = 'url(images/robotlose.png)';
    character.style.width = '80px';
    character.style.height = '80px';
    document.body.style.backgroundColor = "#fff";
    character.classList.remove('animate');
    block.classList.remove('animate');
    ground.classList.remove('animate');
    ground2.classList.remove('animate');
    cloud.classList.remove('animate');
    gameWindowCover.style.opacity = '1';
    // alert('you lose');
}

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
};

var isAddSource = false;

var checkDead = setInterval(function(){
    var characterBottom = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var cloudLeft = parseInt(window.getComputedStyle(cloud).getPropertyValue("left"));
    

    if(cloudLeft <= -50){
        cloud.style.top = getRandom(20, 80) + 'px'
    }
    if(blockLeft<95 && blockLeft>55 && characterBottom<=20 && characterBottom > -1){
        gameOver();
    }else if(blockLeft<95 && blockLeft>55){
        if(isAddSource == false){
            source = source + 50;
            isAddSource = true;
            sourceValue.innerHTML = source;
        }
    }else if(blockLeft<50){
        isAddSource = false;
        if(blockLeft<= -27.5){
            
            
            if(source%100 == 0){

                if(speed > 100){
                    level = level + 1;
                    if(level <= 5){
                        speed = speed - 100;
                    }
                    if(level >5 && level <= 10){
                        speed = speed - 80;
                    }
                    if(level >10 && level <= 15){
                        speed = speed - 60;
                    }
                    if(level >15 && level <= 20){
                        speed = speed - 40;
                    }
                    if(level >20 && level <= 25){
                        speed = speed - 30;
                    }
                    if(level >25 && level <= 30){
                        speed = speed - getRandom(30, 50);
                    }
                    if(level >30){
                        speed = speed - getRandom(30, 100);
                    }

                    if(
                        // (level > 5 && level < 10) || 
                        (level > 15 && level < 20) ||
                        (level > 25 && level < 30) ||
                        (level > 35 && level < 40)
                    ){
                        document.body.style.backgroundColor = "#000";
                    }else{
                        document.body.style.backgroundColor = "#fff";
                    }
                }

            
                block.classList.remove('animate');
                block.style.left = '500px';
                speedValue.innerHTML = level;
                block.style.animationDuration = speed+'ms';
                ground.style.animationDuration = speed+'ms';
                ground2.style.animationDuration = speed+'ms';
                
            }
        }  
    }else{
        if(gameStatus){
            block.classList.add('animate');
        }
    }
    
    

},10);