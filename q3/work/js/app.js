$(function () {
    $(".drawer_button").click(function () {
        //オープン
        $(this).toggleClass("active");
        //取得
        $(".drawer_bg").fadeToggle();
        $("nav").toggleClass("open")
    });
    $(".drawer_bg").click(function () {
        $(this).hide();
        $(".drawer_button").removeClass("active");
        $("nav").removeClass("open")
    })
});