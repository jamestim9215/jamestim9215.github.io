$(document).on("click",".alert-box-close,.alert-box .btn-gray",function(){
    $(".alert-box-cover").fadeOut(250);
});

function showAlert(mes1,mes2,go,back){
    $(".alert-box .mes-1").text(mes1);
    $(".alert-box .mes-2").text(mes2);
    $(".alert-box .btn-gray").show();

    if(go != ""){
        $(document).on("click",".alert-box .btn-orange",function(){
            location.href=go;
        });
    }else{
        $(document).on("click",".alert-box .btn-orange",function(){
            $(".alert-box-cover").fadeOut(250);
        });
    }

    if(back == null){
        $(".alert-box .btn-gray").hide();
    }else if(back != ""){
        $(document).on("click",".alert-box .btn-gray",function(){
            location.href=back;
        });
    }else{
        $(document).on("click",".alert-box .btn-gray",function(){
            $(".alert-box-cover").fadeOut(250);
        });
    }

    $(".alert-box-cover").fadeIn(250);
}

    // showAlert("主訊息" , "次訊息" , "前往路徑","返回路徑");
    // 主訊息 > 必填
    // 次訊息 > 非必填 不填就空白即可
    // 前往路徑 > (確定按鈕) 連結 或 路徑 ， 如不去任何地方可直接空白
    // 返回路徑 > (取消按鈕) 連結 或 路徑 ， 如不去任何地方可直接空白 ， 隱藏按鈕 null
    // showAlert("我是標題","我是內容","",null);