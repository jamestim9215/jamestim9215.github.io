var GameSorce = 1000;
var GameType = "1";
var _game2 = 0;
var _game3 = false;
var _game3sorce = 200;

var sorcelist = [["0", "0", "0"], ["0", "0", "0"], ["0", "0", "0"], ["0", "0", "0"], ["0", "0", "0"]];
var sorcelist2 = ["○", "□", "△", "◎", "∞", "7"];
$("#cash").text(GameSorce);

function getSorce() {
    return GameSorce;
}

function setSorce(num) {
    GameSorce = GameSorce + num;
}

function showSorce() {
    updateFirebaseDb(GameSorce);
    $("#cash").text(getSorce());
}

var rand01 = weightedRand({
    100: 35,
    200: 30,
    500: 15,
    1000: 10,
    100000: 6,
    1000000: 4
});

function changeGame(lastType, newType) {
    $(".game-" + lastType).fadeOut(500, function () {
        $(".game-" + newType).fadeIn(500);
    });
}

function reStartGame() {
    $("#mes").text("");
    if (getSorce() == 0) {
        alert("可憐的窮光蛋!!送你1000!!");
        setSorce(1000);
    } else {
        removeGame();
    }
    showSorce();
}

function removeGame() {
    switch (GameType) {
        case "1": setSorce(-100); $('#promo').remove(); setGame(); break;
        case "2": setSorce(-100); setGame2(); break;
        case "3": setSorce(-200); setGame3(); break;
    }
}

function weightedRand(spec) {
    var i, j, table = [];
    for (i in spec) {
        for (j = 0; j < spec[i] * 10; j++) {
            table.push(i);
        }
    }
    return function () {
        return table[Math.floor(Math.random() * table.length)];
    }
}






function check() {
    var total = 0;
    for (var i = 0; i < 5; i++) {
        var num = 0;
        if (sorcelist[i][0] == sorcelist[i][1] && sorcelist[i][1] == sorcelist[i][2]) {
            total = total + parseInt(sorcelist[i][0]);
            $(".spanBox").eq(i).last().append('<div class="bingo"></div>');
        }
    }
    if (total == 0) {
        $("#mes").text("哭哭沒中");
    } else {
        $("#mes").text("恭賀老爺!恭喜夫人!!您中了" + total);
        setSorce(total);
    }
}

//GAME 3 
function setGame3() {
    var num = Math.floor((Math.random() * 10) + 1);
    _game3 = true;
    _game3sorce = 200;
    $(".gameSelect").text("?");
    $(".btn-next").fadeOut(5);
    $(".btn-restart").fadeOut(5, function () {
        $(".btn-box").fadeIn(250);
        $(".game3-cover").fadeIn(5);
    });
    $("#game2-val").text(_game3sorce);
    $(".num-l").text(num);
}

function checkpoint(type) {
    var _r = parseInt($(".num-r").text());
    var _l = parseInt($(".num-l").text());
    if (type == "b") {
        if (_l > _r) {
            return 1;
        } else {
            return 0;
        }
    } else {
        if (_l < _r) {
            console.log("< win");

            return 1;
        } else {
            console.log("< lose");
            return 0;
        }
    }
}

$(".btn-big").on('click', function () {
    $(".gameSelect").text($(this).val());
    $(".btn-box").fadeOut(250, function () {
        num = Math.floor((Math.random() * 10) + 1);
        $(".num-r").text(num);
        $(".game3-cover").fadeOut();
        if (checkpoint("b")) {
            _game3sorce = _game3sorce * 2;
            $(".btn-next").fadeIn();
            $(".btn-restart").fadeIn();
            $("#mes").text('你贏了');
        } else {
            _game3sorce = 0;
            $(".btn-restart").fadeIn();
            $("#mes").text('你輸了');
        }
        $("#game2-val").text(_game3sorce);
        $(".btn-next-box").fadeIn(250);
    });
});

$(".btn-smill").on('click', function () {
    $(".gameSelect").text($(this).val());
    $(".btn-box").fadeOut(250, function () {
        num = Math.floor((Math.random() * 10) + 1);
        $(".num-r").text(num);
        $(".game3-cover").fadeOut();
        if (checkpoint("s")) {
            _game3sorce = _game3sorce * 2;
            $(".btn-next").fadeIn();
            $(".btn-restart").fadeIn();
            $("#mes").text('你贏了');
        } else {
            _game3sorce = 0;
            $(".btn-restart").fadeIn();
            $("#mes").text('你輸了');
        }
        $("#game2-val").text(_game3sorce);
        $(".btn-next-box").fadeIn(250);
    });
});

$(".btn-next").on('click', function () {
    var num = Math.floor((Math.random() * 10) + 1);
    _game3 = true;
    $(".gameSelect").text("?");
    $("#mes").text('');
    $(".btn-next").fadeOut(5);
    $(".btn-restart").fadeOut(5, function () {
        $(".btn-box").fadeIn(250);
        $(".game3-cover").fadeIn(5);
    });
    $(".num-l").text(num);
});

$(".btn-restart").on('click', function () {
    _game3sorce = _game3sorce / 2;
    setSorce(_game3sorce);
    if (_game3sorce > 0) {
        $("#mes").text('你贏了' + _game3sorce);
    }
    showSorce();
    $(".btn-next").fadeOut();
    $(".btn-restart").fadeOut();
    $(".gameSelect").text("?");
    $(".game3-cover").fadeIn(5); $(".num-l").text("?");
    _game3sorce = 0;
    $("#game2-val").text(_game3sorce);
});

function setGame() {
    var num = Math.floor((Math.random() * 10) + 1);
    $(".gamePaper").last().append(
        '<div id="promo" class="scratchpad">' +
        '<div class="code"></div>' +
        '</div>'
    );

    $('#promo').wScratchPad({
        size: 30,
        bg: './images/bg.png',
        realtime: true,
        fg: './images/cover/' + num + '.jpg',
        'cursor': 'url("images/coin.png") 5 5, default',
        scratchMove: function (e, percent) {
            if (percent > 70 && percent < 100) {
                this.clear();
                check();
                showSorce();
            }
        },
        scratchDown: function () {
            $(".spanBox").fadeIn(50);
        }
    });

    for (var i = 0; i < 5; i++) {
        var list = i + 1;
        $(".code").last().append('<div class="spanBox"><i style="font-size:0.8rem;">' + list + '</i><span>' + rand01() + '</span><span>' + rand01() + '</span><span>' + rand01() + '</span></div>');
    }

    $(".spanBox").each(function (e) {
        $(this).find("span").each(function (i) {
            sorcelist[e][i] = $(this).text();
        });
    });
}

$(".reStartGame").on('click', function () {
    reStartGame();
});

$("#game-select").on('change', function () {
    var value = $(this).val();
    switch (value) {
        case "1": changeGame(GameType, value); GameType = value; break;
        case "2": changeGame(GameType, value); GameType = value; break;
        case "3": changeGame(GameType, value); GameType = value; break;
        default: alert("尚未開放!!"); break;
    }

});

function initial() {
    $(".game-1").fadeIn();
    $(".game-2").fadeOut();
    $(".game-3").fadeOut();
}

initial();


// game2
var rand02 = weightedRand({
    "○": 40,
    "△": 30,
    "◎": 15,
    "★": 10,
    "7": 5
});

var point2 = {
    "○○○": 100,
    "△△△": 500,
    "◎◎◎": 10000,
    "★★★": 50000,
    "777": 1000000
}

function setGame2() {
    $(".game2btn").addClass("game2btn-active");
    $(".game2btn2").addClass("game2btn2-active");
    $(".pushBtn").removeClass("btn-secondary");
    $(".pushBtn").addClass("btn-info");
    $(".pushBtn").attr("disabled", false);
    $(".num1 ul").children().remove();
    $(".num2 ul").children().remove();
    $(".num3 ul").children().remove();
    game2init();
    setTimeout(function () {
        $(".game2btn").removeClass("game2btn-active");
        $(".game2btn2").removeClass("game2btn2-active");
    }, 800);
}

$(".game2btn").on('click', function () {
    reStartGame();
});

$(".pushBtn").on('click', function () {
    $(this).removeClass("btn-info");
    $(this).addClass("btn-secondary");
    $(this).attr("disabled", true);
});

var _index = [0, 0, 0];
var gameTimeOut1;
var gameTimeOut2;
var gameTimeOut3;

function read_index(index) {
    // var v = index - 1;
    return _index[index];
}

function seticon(index) {
    var v = index + 1;
    $(".num" + v).children().remove();
    $(".num" + v).last().append('<span style="width:100%" id="num-' + index + '-0">' + rand02() + '</span><br><span id="num-' + index + '-1">' + rand02() + '</span><br><span id="num-' + index + '-2">' + rand02() + '</span>');
    if (_index[index] < 9) {
        _index[index]++;
    } else {
        _index[index] = 0;
    }
    stopGame2(v);
    startGame2(v);
}

function startGame2(index) {
    if (index == 1) gameTimeOut1 = setTimeout(function () {
        seticon(0);
    }, 100);
    if (index == 2) gameTimeOut2 = setTimeout(function () {
        seticon(1);
    }, 100);
    if (index == 3) gameTimeOut3 = setTimeout(function () {
        seticon(2);
    }, 100);
}

function checkGame2() {
    var num = [[], [], []];
    var total2 = 0;
    for (var i = 0; i < 3; i++) {
        for (var j = 0; j < 3; j++) {
            num[i][j] = $("#num-" + i + "-" + j).text();
        }
    }
    // console.log(num);
    if (num[0][0] == num[1][0] && num[1][0] == num[2][0]) {
        var str = num[0][0] + num[1][0] + num[2][0];
        total2 = total2 + parseInt(point2[str]);
        $("#num-0-0").css({ "animation": "example 1.5s infinite" });
        $("#num-1-0").css({ "animation": "example 1.5s infinite" });
        $("#num-2-0").css({ "animation": "example 1.5s infinite" });
    }
    if (num[0][1] == num[1][1] && num[1][1] == num[2][1]) {
        var str = num[0][1] + num[1][1] + num[2][1];
        total2 = total2 + parseInt(point2[str]);
        $("#num-0-1").css({ "animation": "example 1.5s infinite" });
        $("#num-1-1").css({ "animation": "example 1.5s infinite" });
        $("#num-2-1").css({ "animation": "example 1.5s infinite" });
    }
    if (num[0][2] == num[1][2] && num[1][2] == num[2][2]) {
        var str = num[0][2] + num[1][2] + num[2][2];
        total2 = total2 + parseInt(point2[str]);
        $("#num-0-2").css({ "animation": "example 1.5s infinite" });
        $("#num-1-2").css({ "animation": "example 1.5s infinite" });
        $("#num-2-2").css({ "animation": "example 1.5s infinite" });
    }
    if (num[0][0] == num[1][1] && num[1][1] == num[2][2]) {
        var str = num[0][0] + num[1][1] + num[2][2];
        total2 = total2 + parseInt(point2[str]);
        $("#num-0-0").css({ "animation": "example 1.5s infinite" });
        $("#num-1-1").css({ "animation": "example 1.5s infinite" });
        $("#num-2-2").css({ "animation": "example 1.5s infinite" });
    }
    if (num[0][2] == num[1][1] && num[1][1] == num[2][0]) {
        var str = num[0][2] + num[1][1] + num[2][0];
        total2 = total2 + parseInt(point2[str]);
        $("#num-0-2").css({ "animation": "example 1.5s infinite" });
        $("#num-1-1").css({ "animation": "example 1.5s infinite" });
        $("#num-2-0").css({ "animation": "example 1.5s infinite" });
    }
    $("#mes").text("");
    setSorce(total2);
    if (total2 != 0) $("#mes").text("恭賀老爺!恭喜夫人!!您中了" + total2);
    showSorce();

}

function stopGame2(index) {
    if (index == 1) clearTimeout(gameTimeOut1);
    if (index == 2) clearTimeout(gameTimeOut2);
    if (index == 3) clearTimeout(gameTimeOut3);
}

function game2init() {
    startGame2(1);
    startGame2(2);
    startGame2(3);
}

$(".pushBtn").on('click', function () {
    var id = $(this).val();
    stopGame2(1);
    setTimeout(function () {
        stopGame2(2);
        setTimeout(function () {
            stopGame2(3);
            checkGame2();
        }, 800);
    }, 800);


});

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDp4Y5yD8-hmbJORVm1WLMCaqtNo3GUwxE",
    authDomain: "raygames-80b7d.firebaseapp.com",
    // databaseURL: "https://raygames-80b7d.firebaseio.com",
    projectId: "raygames-80b7d",
    // storageBucket: "raygames-80b7d.appspot.com",
    // messagingSenderId: "870358241848"
};
firebase.initializeApp(config);

// Initialize Cloud Firestore through Firebase
var db = firebase.firestore();
var dbId = "";

$(".newUserBtn").on('click', function () {
    var newUser = $("#new-user-name").val();
    if (newUser != "") {
        db.collection("user-sorce").where("name", "==", newUser).get().then(function (querySnapshot) {
            var i = 0;
            querySnapshot.forEach(function (doc) {
                if (doc.id != "") {
                    alert("已經有人使用這個名字囉!!");
                }
                i++;
            });
            if (i == 0) {
                var time = new Date();
                db.collection("user-sorce").add({
                    name: newUser,
                    sorce: 1000,
                    time: time
                }).then(function (docRef) {
                    console.log("Document written with ID: ", docRef.id);
                    dbId = docRef.id;
                }).catch(function (error) {
                    console.error("Error adding document: ", error);
                });
                $("#userName").text(newUser);
                $(".new-user-box").fadeOut(250);
            }
        }).catch(function (error) {
            console.log("Error getting documents: ", error);
        });
    } else {
        alert("請填寫名字!!");
    }

});

function updateFirebaseDb(sorce) {
    var time = new Date();
    var washingtonRef = db.collection("user-sorce").doc(dbId);
    return washingtonRef.update({
        sorce: sorce,
        time: time
    }).then(function () {
        console.log("Document successfully updated!");
    }).catch(function (error) {
        // The document probably doesn't exist.
        console.error("Error updating document: ", error);
    });
}

$(".rankBtn").on('click', function () {
    $(".rankbox").addClass("rankbox-active");
    $("body").css("overflow", "hidden");
    db.collection("user-sorce").orderBy("sorce", "desc").limit(5).get().then(function(querySnapshot) {
        var i=1;
        $(".rankbox table tbody").children().remove();
        querySnapshot.forEach(function(doc) {
            console.log(doc.data());
            $(".rankbox table tbody").last().append('<tr><td><b>'+i+'</b></td><td>'+doc.data().name+'</td><td>'+doc.data().sorce+'</td><td>'+doc.data().time+'</td></tr>');
            i++;
        });
    });
});

$(".rankBtnClose").on('click', function () {
    $(".rankbox").removeClass("rankbox-active");
    setTimeout(function(){
        $("body").css("overflow", "auto");
    },500);
});