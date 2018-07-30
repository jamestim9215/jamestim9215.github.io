var GameSorce = 1000;
var sorcelist = [["0", "0", "0"], ["0", "0", "0"], ["0", "0", "0"], ["0", "0", "0"], ["0", "0", "0"]];
$("#cash").text(GameSorce);

function getSorce() {
    return GameSorce;
}

function setSorce(num) {
    GameSorce = GameSorce + num;
}

function reStartGame() {
    $("#mes").text("");
    if (getSorce() == 0) {
        alert("可憐的窮光蛋!!送你1000!!");
        setSorce(1000);
    } else {
        setSorce(-100);
        removeGame();
    }
    $("#cash").text(getSorce());

}

function removeGame() {
    $('#promo').remove();
    setGame();
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
// console.log(rand012());
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