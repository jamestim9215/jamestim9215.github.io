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

// server-side
io.on("connection", (socket) => {
    // console.log(socket.id); // x8WIv7-mJelg7on_ALbx
    socket.on("hello", (data) => {
        console.log(data.Name);
    })
});

app.listen(port);

