
    var imgdata = {
        0:"images/chart/01.png",
        1:"images/chart/02.png",
        2:"images/chart/03.png",
        3:"images/chart/04.png",
        4:"images/chart/05.png",
        5:"images/chart/06.png",
        6:"images/chart/07.png",
        7:"images/chart/08.png",
        8:"images/chart/09.png",
        9:"images/chart/10.png",
        10:"images/chart/11.png",
        11:"images/chart/12.png",
        12:"images/chart/13.png",
        13:"images/huaban.png",
        14:"images/last.png",
        15:"images/bg/map_user_1.png",
        16:"images/bg/map_user_2.png",
        17:"images/bg/map_user_3.png",
        18:"images/bg/map_user_4.png",
        19:"images/bg/F_201708041758624b9vyr.JPG",
        20:"images/bg/013.jpg",
        21:"images/bg/AORUS-ROBOT-02.jpg",
        22:"images/bg/map_all_bg.jpg",
        23:"images/bg/AORUS-Motherboard-01.jpg",
        24:"images/bg/aorus-logo-rgb-neon-v134.jpg",
        25:"images/bg/010.jpg",
        26:"images/sparks.png"
    }
    for(var key in imgdata){
        $(".loadImgDiv").last().append('<img src="'+imgdata[key]+'">');
    }
    
    $(window).load(function(){
        $(".loadImgDiv").remove();
    });