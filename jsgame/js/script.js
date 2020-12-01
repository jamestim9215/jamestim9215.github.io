
var gameWindowCover = document.getElementById('gameWindowCover');
var character = document.getElementById('character');
var block = document.getElementById('block');
var sourceValue = document.getElementById('sourceValue');
var speedValue = document.getElementById('speedValue');
var source = 0;
var speed = 2000;
var level = 1;
var gameStatus = false;

function jump(){
    if(character.classList != 'animate'){
        character.classList.add('animate');
    }
    setTimeout(function(){
        character.classList.remove('animate');
    },500)
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
    speed = 2000;
    source = 0;
    level = 1;
    document.body.style.backgroundColor = "#fff";
    block.style.animationDuration = speed+'ms';
    speedValue.innerHTML = level;
    sourceValue.innerHTML = source;
    if(block.classList != 'animate'){
        block.classList.add('animate');
    }
    gameWindowCover.style.opacity = '0';
    gameStatus = true;
}


function gameOver(){
    gameStatus = false;
    document.body.style.backgroundColor = "#fff";
    character.classList.remove('animate');
    block.classList.remove('animate');
    gameWindowCover.style.opacity = '1';
    alert('you lose');
}

var isAddSource = false;

var checkDead = setInterval(function(){
    var characterTop = parseInt(window.getComputedStyle(character).getPropertyValue("bottom"));
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));

    
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
        if(blockLeft<= -90){
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
                
            }
        }  
    }else{
        if(gameStatus){
            block.classList.add('animate');
        }
    }
    
    

},10);