$(function () {
    // .dropdwnのli要素に対してhoverイベントを設定
    $(".dropdwn li").hover(
        function () {
            // ホバー時の処理：対象のli要素の子要素ulをスライドダウン
            $(this).children("ul").stop().slideDown();
        },
        function () {
            // ホバー解除時の処理：対象のli要素の子要素ulをスライドアップ
            $(this).children("ul").stop().slideUp();
        }
    );
});