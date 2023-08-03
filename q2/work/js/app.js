$(function () {
    //フェイドイン
    $(".modal_open_button").click(function () {
        $(".modal_win").fadeIn()
    });
    //フェイドアウト
    $(".modal_close_button").click(function () {
        $(".modal_win").fadeOut()
    })
});