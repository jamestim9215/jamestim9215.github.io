//設定 ID 圖層 順序 下至上
var objectIdList = [
    'topImg',
];

//設定 圖層移動量 順序 下至上
var speedList = [
    0.03
]

var objectDataList = [];
var mousePosition = {
    x: window.innerWidth/2, 
    y: window.innerHeight/2 
};
var windowScrollY = 0;

function getPosition (element) {
    var x = 0;
    var y = 0;
    while ( element ) {
      x += element.offsetLeft - element.scrollLeft + element.clientLeft;
      y += element.offsetTop - element.scrollLeft + element.clientTop;
      element = element.offsetParent;
    }
    return { x: x, y: y };
}
function moveObject(object,objectPosition,speed,x,y){
    object.style.position = "absolute";
    object.style.left = (objectPosition.x  + x * speed) + "px";
    object.style.top = (objectPosition.y  + y * speed) + "px";
}
function mouseFun(e){
    var x = e.clientX;
    var y = e.clientY;
    
    var _moveX = (x-mousePosition.x); 
    var _moveY = (y-mousePosition.y);

    for(var key=0; key< objectDataList.length; key++){
        var data = objectDataList[key];
        moveObject(data.object,data.position,data.speed,_moveX,_moveY);
    }
    // document.removeEventListener("mousemove", mouseFun);
}

function initial(){
    for(var i=0; i< objectIdList.length; i++){
        var _data = {
            object: document.getElementById(objectIdList[i]),
            position: getPosition(document.getElementById(objectIdList[i])),
            speed: speedList[i],
            objectStyle: document.getElementById(objectIdList[i]).style
        }
        objectDataList.push(_data)
    }
}


setTimeout(()=>{
    initial();
    document.addEventListener("mousemove", mouseFun);
},500)

var times = false;
function resizeFun(){
    document.removeEventListener("mousemove", mouseFun);
    if(times==false){
        console.log(objectDataList);
        for(var key=0; key< objectDataList.length; key++){
            objectDataList[key].object.style = objectDataList[key].objectStyle;
        }
        times = true;
        mousePosition = {
            x: window.innerWidth/2, 
            y: window.innerHeight/2 
        };
        objectDataList = [];
        setTimeout(()=>{
            initial();
            document.addEventListener("mousemove", mouseFun);
            times = false;
        },500)
    }
}

function scrollFun(){
    windowScrollY = window.scrollY;
    resizeFun()
}
window.addEventListener('scroll', scrollFun);
window.addEventListener("resize", resizeFun);