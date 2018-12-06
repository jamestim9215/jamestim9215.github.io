$(function () {
    
    if($.cookie('gtpr_cookie')){
        $(".gtpr-div").css("display","none");
        header_height = $(".aorus_header_div").height();
        $(".margin-header-div").css("height", header_height);
    }

    $(".menu-hamburger").on('click', function () {
        if (!$("body").hasClass("bodyleft")) {
            $("body").addClass("bodyleft");
            // $(".aorus_header_div").addClass("aorus_header_div-left");
            $(".aorus-m-menu").addClass("aorus-m-menu-left");
            setTimeout(function () {
                // $(".mMenuBtn").removeClass("glyphicon-menu-hamburger");
                // $(".mMenuBtn").addClass("glyphicon-remove");
                $(".menu-hamburger").addClass("menu-active");
            }, 250);

        } else {
            $("body").removeClass("bodyleft");
            // $(".aorus_header_div").removeClass("aorus_header_div-left");
            $(".aorus-m-menu").removeClass("aorus-m-menu-left");
            setTimeout(function () {
                // $(".mMenuBtn").removeClass("glyphicon-remove");
                // $(".mMenuBtn").addClass("glyphicon-menu-hamburger");
                $(".menu-hamburger").removeClass("menu-active");
            }, 250);
        }
    });

    $(".aorus-m-menu .lv1 li").on('click', function () {
        if ($(this).find("span").text() != "▲") {
            $(this).css("background", "#999");
            $(this).find("span").text("▲");
            $(this).find(".lv2").slideToggle();
        } else {
            $(this).css("background", "#333");
            $(this).find("span").text("▼");
            $(this).find(".lv2").slideToggle();
        }
    });

    var header_height = $(".aorus_header_div").height();
    $(".margin-header-div").css("height", header_height);
    $(window).resize(function () {
        header_height = $(".aorus_header_div").height();
        $(".margin-header-div").css("height", header_height);
    });

    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        header_height = $(".aorus_header_div").height();
        if(scrollVal > header_height ){
            $(".go-top-div").fadeIn(250);
        }else{
            $(".go-top-div").fadeOut(250);
        }
    });

    $(".go-top-div").on('click',function(){
        $("html, body").animate({scrollTop:0}, 500); 
    });

    $(".policy-close").on('click', function () {
        $.cookie('gtpr_cookie', 'true', { path:'/', expires: 1 });    
        $(".gtpr-div").slideUp(250,function () {
            header_height = $(".aorus_header_div").height();
            $(".margin-header-div").css("height", header_height);
        });
    });

    $(".lang-btn").on('click',function(){
        $(".lang-cover").fadeIn(250);
        $("body").css("overflow","hidden");
    });
    $(".lang-close-btn").on('click',function(){
        $(".lang-cover").fadeOut(250);
        $("body").css("overflow","auto");
    });

    
    // if($(window).width() > 973){
    //     var page = $(".member-content-div").outerHeight();
    //     console.log(page);
        
    //     $(".member-menu-div").css("min-height",page);
    // }else{
    //     $(".member-menu-div").css("min-height","auto");
    // }
    // $(window).resize(function(){
    //     if($(window).width() > 973){
    //         var page = $(".member-content-div").outerHeight();
    //         $(".member-menu-div").css("min-height",page);
    //     }else{
    //         $(".member-menu-div").css("min-height","auto");
    //     }
    // });

});
