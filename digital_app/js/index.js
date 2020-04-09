
var screen_h = window.innerHeight;

var chagneH_name = "body,.digital2019box,.window_div,.menu-box,.box,.pagecover,.contentPage-1,.contentPage-2,.contentPage-3,.windows-div-cover";
var changeTop_H_Name = ".menu-box,.contentPage-1,.contentPage-2,.contentPage-3";
var changeLineH_Name = ".pagecover,.logo-box";






$(window).on('load', function () {
    var imgif = "url(./intro-191031-zip.gif?" + Math.random() + ")";
    $(".logo-box").css("background-image", imgif);

    $(chagneH_name).height(screen_h);
    $(changeTop_H_Name).css("top", screen_h * 1 + "px");
    $(changeLineH_Name).css({ "line-height": screen_h + "px" });
    $(".content-div").height(screen_h - 50);

    $(".owlSelectYear").owlCarousel({
        center: true,
        items: 2,
        nav: false,
        dot: true,
        margin: 10,
        startPosition: 1,
        lazyLoad: true
    });

    $(".owlSystem").owlCarousel({
        center: true,
        items: 1.2,
        nav: false,
        dot: true,
        margin: 10,
        startPosition: 0,
        lazyLoad: true
    });
    $(".owl1").owlCarousel({
        items: 1,
        nav: false,
        dot: true,
        margin: 10,
    });
    $(".owl2").owlCarousel({
        items: 1,
        nav: false,
        dot: true,
        margin: 10,
    });

    

    setTimeout(function () {
        $(".fullpage").css({ "top": "-100%" });
        // $(".fullpage").css({ "top": "-300%" });
    }, 3000) //3000
});

$(window).resize(function () {
    screen_h = window.innerHeight;
    $(chagneH_name).height(screen_h);
    $(changeTop_H_Name).css("top", screen_h * 2 + "px");
    $(changeLineH_Name).css({ "line-height": screen_h + "px" });
    $(".content-div").height(screen_h - 50);
});

$(".scroll01").scroll(function () {
    var screen_h = window.innerHeight;
    var last = $(this).prop('scrollHeight') - screen_h;
    var scroll = $(this).scrollTop();
    if (scroll >= last) {
        $(".top-btn-1").fadeIn()
    } else {
        $(".top-btn-1").fadeOut()
    }
})
$(".scroll02").scroll(function () {
    var screen_h = window.innerHeight;
    var last = $(this).prop('scrollHeight') - screen_h;
    var scroll = $(this).scrollTop();
    if (scroll >= last) {
        $(".top-btn-3").fadeIn()
    } else {
        $(".top-btn-3").fadeOut()
    }
})
$(".scroll03").scroll(function () {
    var screen_h = window.innerHeight;
    var last = $(this).prop('scrollHeight') - screen_h;
    var scroll = $(this).scrollTop();
    if (scroll >= last) {
        $(".top-btn-3").fadeIn()
    } else {
        $(".top-btn-3").fadeOut()
    }
})
$(".scroll04").scroll(function () {
    var screen_h = window.innerHeight;
    var last = $(this).prop('scrollHeight') - screen_h;
    var scroll = $(this).scrollTop();
    if (scroll >= last) {
        $(".top-btn-2").fadeIn()
    } else {
        $(".top-btn-2").fadeOut()
    }
})


function move(page, _isopen) {
    if (_isopen) {
        $(page).css({ "left": "0%" });
    } else {
        $(page).css({ "left": "100%" });
    }
}



$(document).on('swiperight', '.contentPage-1', function () {
    move(this, false);
    setTimeout(function () {
        $(".CPChart4").hide(0);
        $(".CPChart3").delay(0).show(0);
        $(".CPStep2-2").show(0);
    }, 500);
})

// $(document).on('swiperight','.contentPage-2', function () {
//     move(this,false);
// })
$(document).on('swiperight', '.contentPage-3', function () {
    move(this, false);
})

// $(document).on('swiperight','.main-box', function () {
//     $(".fullpage").css({ "left": "100%" });
// })
$(document).on('swipeleft', '.menu-box', function () {
    $(".fullpage").css({ "left": "0%" });
})
// $(document).on('swipeup','.logo-box', function () {
//     $(".fullpage").css({ "top": "-100%" });
// })

$(document).on('click', "#content-1", function () {
    $(".contentPage-1 .content-div").css("background", "#000");
    move(".contentPage-1", true);
})

// $(document).on('click',"#content-2",function(){
//     move(".contentPage-2",true);
// })

$(document).on('click', "#content-3", function () {
    move(".contentPage-3", true);
})


$(document).on('click', "#content-2-1", function () {
    var id = $(this).data("id");
    $(".customer-data02").fadeOut(50);
    $(".customer-data01").fadeIn(50);
    move(".contentPage-2", true);
})
$(document).on('click', "#content-2-2", function () {
    var id = $(this).data("id");
    $(".customer-data01").fadeOut(50);
    $(".customer-data02").fadeIn(50);
    move(".contentPage-2", true);
})

$(document).on('click', '.menuBtn', function () {
    // move(".menu-box",true);
    $(".fullpage").css({ "left": "100%" });
})
$(document).on('click', ".homeBtn", function () {
    move(".contentPage-1", false);
    move(".contentPage-3", false);
    setTimeout(function () {
        $(".CPChart4").fadeOut(0);
        $(".CPChart3").delay(0).fadeIn(0);
        $(".CPStep2-2").fadeOut(0);
    }, 500);
})
$(document).on('click', ".angleBtn", function () {
    move(".contentPage-2", false);
})
// $(document).on('click',".login-btn",function(){
//     var text = $(".userEmailInput").val();
//     if(text != "")
//     $("#userEmail").text(text)
//     $(".fullpage").css({ "top": "-200%" });
// })
$(document).on('click', ".salesAppBtn", function () {
    $(".fullpage").css({ "top": "-200%" });
})

$(document).on('click', ".digital2019Btn", function () {
    $(".fullpage").css({ "top": "-100%", "left": "200%" });
})
$(document).on('click', ".backBtn", function () {
    $(".fullpage").css({ "top": "-100%", "left": "0" });
})
$(document).on('click', ".digital2018Btn", function () {
    window.open('../../2018digital/index.html');
})
$(document).on('click', ".digital2021Btn", function () {
    window.open('roadmap.html');
})

$(document).on('click', '.closeMenuBtn', function () {
    $(".fullpage").css({ "left": "0%" });
})

$(document).on('click', '.top-btn', function () {
    $('.content-div').animate({ scrollTop: 0 });
});

$(document).on('click', '.notice-btn', function () {
    $("#notice-div").fadeIn(150);
});

$(document).on('click', '.user-btn', function () {
    $("#user-div").fadeIn(150);
});

$(document).on('click', '.close-window-btn', function () {
    $(".windows-div-cover").fadeOut(150);
});

function resetPage() {
    $(".CPChart2").fadeOut(0);
    $(".CPChart1").delay(0).fadeIn(0);
    $(".content-div").css("background", "#000");
    $(".CPStep2").fadeOut(0);
}

$('.menu-btn').on('click', function () {
    var id = $(this).data(id).id;
    if (id == "8") {
        $(".menu-btn").removeClass("active");
        $('.menu-btn').eq(0).addClass("active");
        $("#main-1").fadeIn(50);
        resetPage();
        $(".fullpage").css({ "left": "0%" });
        $(".fullpage").css({ "top": "-100%" });
    } else {
        resetPage();
        if (id != "") {
            $(".menu-btn").removeClass("active");
            $(this).addClass("active");
            $("#main-1,#main-2,#main-3,#main-4,#main-5").fadeOut(50);
            $("#main-" + id).fadeIn(50);
            $(".fullpage").css({ "left": "0%" });
        }

    }

});

$(".CPChart1").on('click', function () {
    $(".CPChart1").fadeOut(0);
    $(".CPChart2").delay(0).fadeIn(0);
    $(".content-div").css("background", "rgb(46, 46, 46)");
    $(".CPStep2").fadeIn(150);
});

$(".CPChart3").on('click', function () {
    $(".CPChart3").fadeOut(0);
    $(".CPChart4").delay(0).fadeIn(0);
    $(".contentPage-1 .content-div").css("background", "rgb(46, 46, 46)");
    $(".CPStep2-2").fadeIn(150);
});

$(".customer-list .title").on('click', function () {
    $(".customer-list .title").removeClass("active");
    $(".customer-list .title img").attr("src", "./images/Icons/icon-plus.svg");
    $(".customer-list .table-responsive").slideUp(150);
    $(this).addClass("active");
    $(this).find("img").attr("src", "./images/Icons/icon-less.svg");
    $(this).next().slideDown(150);
});

$(".tabBtn").on('click', function () {
    var id = $(this).data("id");
    $(".tabBtn").removeClass("active");
    $(this).addClass("active");
    $(".tab-content").fadeOut(250);
    $(".tab-content-" + id).delay(250).fadeIn(250);

});

$(".logOutBtn").on('click', function () {
    $("#userEmailInput").val("");
    $(".windows-div-cover").fadeOut(150);
    $(".fullpage").css({ "top": "-100%" });

    $("#userEmail").text("xxxxxx@gigabyte.com")
});