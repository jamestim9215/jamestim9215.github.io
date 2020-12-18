   
        let dataType = 1;
        let selectData = [
            [
                // { text : '重抽' },
                { text : '花月嵐拉麵' },
                { text : '九湯屋拉麵' },
                { text : '山東水餃王' },
                { text : '高勁牛肉麵' },
                { text : '爭鮮壽司' },
                { text : '定食 8' },
                { text : '大心' },
                { text : '樂昀牛排' },
                { text : '珍宴館' },
                { text : '好享宴小館' },
                { text : '台南虱目魚' },
                { text : '帕米義麵屋' },
                { text : '麵工坊' },
                { text : '吉購吉' },
                { text : '韓國料理' },
                { text : '秋葵犬' },
                { text : '一條通' },
                { text : '龍涎居' },
                { text : '咕咕G廚房' },
                { text : '不會開早餐店' },
                { text : '大埔鐵板燒' },
                { text : '一鼎鮮肉羹' },
                { text : '牛肉蓋飯' },
                { text : '薩利亞' },
                { text : '麥當勞' },
                { text : '漢堡王' },
                { text : '角屋鍋燒' },
                { text : '潛艇堡' },
                { text : '越南菜' },
                { text : '客家菜' },
                { text : '八方雲集' },
                { text : '茱蒂漢堡' },
                { text : '野菇屋比薩'},
                { text : '旺達熱炒'}
            ],
            [
                { text : '50 嵐' },
                { text : '麻古茶坊' },
                { text : '水巷茶弄' },
                { text : '乾杯' },
                { text : '茶湯會' },
                { text : '珍煮丹' },
                { text : '不要對我尖叫' },
                { text : '台茶1號' },
                { text : '清心福全' },
                { text : '這咖啡'}
            ],
        ];

        let data = [];

        var gameStatus = false;
        var oldRotate = 0;
        var RotateTime = 1800;
        data = selectData[0];
        initData();

        function initData(){
            
            document.getElementById('lottery-gift').innerText = '';
            document.getElementById('lottery-sector-color').innerText = '';
            
            // 隨機順序
            data.sort(function(){return Math.random()>0.5?-1:1;});
            var deg = 0;
            for(var key in data){

                var span = document.createElement('span');

                if(data.length == 1){
                    span.style.width = "100%";
                    span.style.height = "100%";
                    span.style.left = '0px'; 
                    span.style.top = '0px'; 
                    span.style.transformOrigin = '50% 50%';
                    span.style.transform = `rotate(0deg) skew(0deg)`;
                }else if(data.length == 2){
                    span.style.width = "100%";
                    span.style.height = "50%";
                    span.style.left = '0px'; 
                    span.style.top = '0px'; 
                    span.style.transformOrigin = '50% 100%';
                    span.style.transform = `rotate(${key * 360 / data.length - 0}deg) skew(0deg)`;
                }else{
                    span.style.transform = `rotate(${key * 360 / data.length - ((180 / data.length) - (-90 +  360 / data.length)) }deg) skew(${-90 +  360 / data.length}deg)`;
                }
                if(data.length % 2 != 0){
                    if(key == 0)span.style.backgroundColor = '#ccc'
                }

                document.getElementById('lottery-sector-color').appendChild(span)
                
                var span = document.createElement('span');
                var spanText = document.createElement('div');
                span.style.transform = `rotate(${key * 360 / data.length}deg)`;
                spanText.innerText = data[key].text;
                span.appendChild(spanText);
                document.getElementById('lottery-gift').appendChild(span);
            }
        
        }
        

        function changeData(){
            var val = document.getElementById('selectData').value;
            console.log(val);
            switch(val){  
                case 'food': data = selectData[0]; break;
                case 'drink': data = selectData[1]; break;
                default: data = selectData[0];
            }

            initData();
            
        }

        function changeTypeData(){
            var val = document.getElementById('selectTpyeData').value;
            console.log(val);
            switch(val){  
                case 'type1': dataType = 1; break;
                case 'type2': dataType = -1; break;
                default: dataType = 1;
            }
            document.getElementById('triangle').style.transform = 'rotate(0deg)';
            document.getElementById('bgRotate').style.transform = 'rotate(0deg)';
            oldRotate = 0;
        }
        

        function go(){
            if(gameStatus == false){
                gameStatus = true;
                var btn;
                if(dataType == 1){
                    btn = document.getElementById('triangle');
                }else{
                    btn = document.getElementById('bgRotate');
                }
                if(oldRotate > RotateTime){
                    oldRotate = oldRotate - RotateTime;
                }
                btn.style.transform = 'rotate('+dataType * oldRotate+'deg)';

                var style = document.createElement('style');
                style.type = 'text/css';
                var random = (Math.floor(Math.random()*360)+ 0);
                var rotate =  parseInt(random + RotateTime);

                var keyFrames = `
                    @keyframes zhuanzhuanzhuan{
                        0%{
                            transform: rotate(${dataType * oldRotate}deg);
                        } 
                        100%{
                            transform: rotate(${dataType * rotate}deg); 
                        }
                    }
                `;
                style.innerHTML = keyFrames;
                document.getElementsByTagName('head')[0].appendChild(style);
                btn.style.animation = 'zhuanzhuanzhuan 3.5s forwards ease-in-out';
                setTimeout(function(){
                    btn.style.animation = '';
                    oldRotate = rotate;
                    btn.style.transform = 'rotate('+dataType * rotate+'deg)';
                    document.getElementsByTagName('head')[0].removeChild(style);
                    var id = Math.round((random  / (360 / data.length)));
                    var num = Math.round((random  / (360 / data.length)).toFixed(2)*10);
                    console.log(num);

                    if(id == data.length){
                        id = 0;
                    }
                    
                    console.log((random  / (360 / data.length)) + " / " + id + " / " + data[id].text);
                    document.getElementById('outputText').innerText = data[id].text;
                    gameStatus = false;
                },3500);

            }
        }
