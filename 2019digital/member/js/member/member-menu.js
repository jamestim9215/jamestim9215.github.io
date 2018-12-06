$(function () {

    $(window).scroll(function () {
        var scrollVal = $(this).scrollTop();
        var header_height = $(".aorus_header_div").height();
        if(scrollVal > header_height ){
            $(".member-menu-div").css({"position":"fixed","top":"0"});
            // $(".aorus_header_div").css({"opacity":"0"});
            // $(".aorus_header_div").fadeOut(0);
        }else { 
            var y = (header_height - scrollVal) / header_height;
            $(".member-menu-div").css("position","absolute");
            // $(".aorus_header_div").fadeIn(0);
            // $(".aorus_header_div").css({"opacity":y});
        }
    });

    $(".btn-subMenu").on('click', function () {
        if($(this).hasClass("open")){
            $(this).find(".fas").removeClass("fa-chevron-up");
            $(this).find(".fas").addClass("fa-chevron-down");
            $(this).removeClass("open");
            $(this).parent().find(".lv1").slideUp();
        }else{
            $(this).find(".fas").removeClass("fa-chevron-down");
            $(this).find(".fas").addClass("fa-chevron-up");
            $(this).addClass("open");
            $(this).parent().find(".lv1").slideDown();
        }
    });

    // $("").on('click', function () {
    //     if($(".member-menu-div .lv1 li .font-aldrich").parent().hasClass("open")){
    //         // $(".member-menu-div .lv1 li .font-aldrich").parent().find(".fas").removeClass("fa-chevron-up");
    //         // $(".member-menu-div .lv1 li .font-aldrich").parent().find(".fas").addClass("fa-chevron-down");
    //         // $(".member-menu-div .lv1 li .font-aldrich").parent().removeClass("open");
    //         // $(".member-menu-div .lv1 li .font-aldrich").parent().find(".lv2").slideUp(250);
    //     }
    // });


    $(".member-menu-div .lv1 li .font-aldrich").on('click', function () {
        if($(this).parent().hasClass("open")){
            $(this).parent().find(".fas").removeClass("fa-chevron-up");
            $(this).parent().find(".fas").addClass("fa-chevron-down");
            $(this).parent().removeClass("open");
            $(this).parent().find(".lv2").slideUp(250);
        }else{
            $(".member-menu-div .lv1>li").removeClass("open");
            $(".member-menu-div .lv1>li").find(".lv2").slideUp(250);
            $(".member-menu-div .lv1>li").find(".fas").removeClass("fa-chevron-up");
            $(".member-menu-div .lv1>li").find(".fas").addClass("fa-chevron-down");
            $(this).parent().find(".fas").removeClass("fa-chevron-down");
            $(this).parent().find(".fas").addClass("fa-chevron-up");
            $(this).parent().addClass("open");
            $(this).parent().find(".lv2").slideDown(250);
        }
    });
});

$(document).ready(function(){
    
    $(document).on('mouseleave','.member-menu-div .lv1 .open .lv2',function(){
        $(this).parent().find(".fas").removeClass("fa-chevron-up");
        $(this).parent().find(".fas").addClass("fa-chevron-down");
        $(this).parent().removeClass("open");
        $(this).slideUp(250);
    });

});
