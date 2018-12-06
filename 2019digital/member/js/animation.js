$(window).scroll(function () {

    var scrollVal = -($(this).scrollTop() + 150);
    $(".robot-left").css("top",scrollVal);
    $(".robot-right").css("top",scrollVal);
});