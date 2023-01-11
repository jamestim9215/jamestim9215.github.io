//app.js
/*建立http服務*/
var app = require('http').createServer()
/*引入socket.io*/
const { Server } = require("socket.io");

/*自訂監聽端口*/
var port = 5001;
console.log('app listen at ' + port)

const io = new Server(app, {
    cors: {
        origin: "http://127.0.0.1:5500",
    }
});

/*用戶陣列*/
let users = [];
// server-side
io.on("connection", (socket) => {

    /*是否為新用戶*/
    let isNewPerson = true;
    /*當前登入用戶*/
    let user = null;

    // console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    socket.on("login", (data) => {
        for(var i=0; i<users.length; i++){
            isNewPerson = (users[i].Name === data.Name)? false : true;
        }
        if(isNewPerson){
            user = data
            users.push(data)
            data.userCount = users.length
            /*發送 登入成功 事件*/
            socket.emit('loginSuccess', data)
            /*向所有連接的用戶廣播 add 事件*/
            io.sockets.emit('add', data);
            io.sockets.emit('moveing', user);
        }else{
            /*發送 登入失敗 事件*/
            socket.emit('loginFail', '')
        }
    })

    socket.on("moveing", (data) => {
        for(var i=0; i<users.length; i++){
            if(users[i].Name === data.Name){
                users[i] = data;
                io.sockets.emit('moveing', user);
                break;
            }
        }
        
    })

    socket.on("disconnect", (reason) => {

        users.map(function(val, index){
            if(val.Name === user.Name){
                console.log(reason + ": " + user.Name);
                io.sockets.emit('logout', user);
                users.splice(index, 1);
            }
        })
    });

});

app.listen(port);

