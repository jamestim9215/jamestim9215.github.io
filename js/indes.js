var centerPos = window.innerWidth/2;
var img = document.getElementById('topImg');

function f(){  //事件偵測函數
    var event = event || window.event;  //標準化事件物件
    // console.log(event.clientX+" - "+event.clientY);
    var num = 0;
    num = -((event.clientX-centerPos) * 0.02 * 0.02 + 10) + '%'; 
    img.style.left =num;

}




