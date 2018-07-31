var GameSorce = 1000;
var GameType = "1";

var _game3 = false;
var _game3sorce = 200;

var sorcelist = [["0", "0", "0"], ["0", "0", "0"], ["0", "0", "0"], ["0", "0", "0"], ["0", "0", "0"]];
$("#cash").text(GameSorce);

function getSorce() {
    return GameSorce;
}

function setSorce(num) {
    GameSorce = GameSorce + num;
}

var rand012 = weightedRand({
    100: 35,
    200: 30,
    500: 15,
    1000: 10,
    100000: 6,
    1000000: 4
});

function changeGame(lastType, newType) {
    console.log(lastType + " / " + newType);
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
    $("#cash").text(getSorce());

}

function removeGame() {
    switch (GameType) {
        case "1":
            setSorce(-100); $('#promo').remove(); setGame(); break;
        case "2": break;
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

var rand012 = weightedRand({
    100: 35,
    200: 30,
    500: 15,
    1000: 10,
    100000: 6,
    1000000: 4
});


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
    _game3sorce = _game3sorce /2 ;
    setSorce(_game3sorce);
    if (_game3sorce > 0) {
        $("#mes").text('你贏了' + _game3sorce);
    }
    $("#cash").text(getSorce());
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
            }
            $("#cash").text(getSorce());
        },
        scratchDown: function () {
            $(".spanBox").fadeIn(50);
        }
    });

    for (var i = 0; i < 5; i++) {
        var list = i + 1;
        $(".code").last().append('<div class="spanBox"><i style="font-size:0.8rem;">' + list + '</i><span>' + rand012() + '</span><span>' + rand012() + '</span><span>' + rand012() + '</span></div>');
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
        case "2": alert("尚未開放!!"); break;
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