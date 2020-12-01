
var gameWindowCover = document.getElementById('gameWindowCover');
var character = document.getElementById('character');
var block = document.getElementById('block');
var ground = document.getElementById('ground');
var ground2 = document.getElementById('ground2');
var cloud = document.getElementById('cloud');

var sourceValue = document.getElementById('sourceValue');
var speedValue = document.getElementById('speedValue');
var source = 0;
var speed = 2500;
var level = 1;
var gameStatus = false;

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
    speed = 2500;
    source = 0;
    level = 1;
    cloud.style.top = getRandom(20, 80) + 'px';
    document.body.style.backgroundColor = "#fff";
    block.style.animationDuration = speed+'ms';
    ground.style.animationDuration = speed+'ms';
    ground2.style.animationDuration = speed+'ms';
    speedValue.innerHTML = level;
    sourceValue.innerHTML = source;
    if(block.classList != 'animate'){
        block.classList.add('animate');
        ground.classList.add('animate');
        ground2.classList.add('animate');
    }
    gameWindowCover.style.opacity = '0';
    gameStatus = true;
}


function gameOver(){
    gameStatus = false;
    document.body.style.backgroundColor = "#fff";
    character.classList.remove('animate');
    block.classList.remove('animate');
    ground.classList.remove('animate');
    ground2.classList.remove('animate');
    gameWindowCover.style.opacity = '1';
    alert('you lose');
}

function getRandom(min,max){
    return Math.floor(Math.random()*(max-min+1))+min;
};

var isAddSource = false;

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var cloudLeft = parseInt(window.getComputedStyle(cloud).getPropertyValue("left"));

    if(cloudLeft <= -50){
        cloud.style.top = getRandom(20, 80) + 'px'
    }
    
    
    if(blockLeft<96 && blockLeft>50 && characterTop<=20){
        gameOver();
    }else if(blockLeft<96 && blockLeft>50){
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
                        speed = speed - 50;
                    }
                    if(level >10 && level <= 15){
                        speed = speed - 25;
                    }
                    if(level >15 && level <= 20){
                        speed = speed - 10;
                    }

                    if((level > 5 && level < 10) || (level > 15 && level < 20)){
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