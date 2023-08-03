$(document).ready(function () {
    $("#q1").css("color", "green");
});


$(document).ready(function () {
    // ボタンがクリックされた
    $("#q2").click(function () {
        // ボタンの景色を変更
        $(this).css("background-color", "#fdfdfd");
    });
});


$(document).ready(function () {
    // ボタンがクリックされた
    $("#q3").click(function () {
        // フェードアウト
        $(this).fadeOut(3000);
    });
});


$(document).ready(function () {
    // ボタンがクリックされたとき
    $("#q4").click(function () {
        // ボタンの幅を現在の幅の2倍
        $(this).width($(this).width() * 2);
    });
});

$(document).ready(function () {
    // ボタンがクリックされたときの処理を設定
    $("#q5").click(function () {
        // 新しいDOM要素を作成
        const el = $("<p>This</p>");
        // 新しいDOM要素
        $("#q5").append(el);
    });
});

$(document).ready(function () {
    // ボタンがクリックされた
    $("#q6").click(function () {
        // 移動させる要素を取得
        const movingElement = $("#q6");
        // アニメーションで移動
        movingElement.animate({
            marginTop: "100px",
            marginLeft: "100px"
        }, 2000);
    });
});

$(document).ready(function () {
    // div要素がクリックされたときの処理
    $("#q7").click(function () {
        // クリックされた要素のIDを取得
        const id = $(this).attr("id");
        console.log(this);
    });
});


$(document).ready(function () {
    $("#q8").hover(function () {
        // ホバー時の新しいサイ
        $(this).css({
            width: "450px",

        });
    });
}, function () {
    // ホバーを外れたときの元のサイズ
    $(this).css({
        width: "200px",
    });
});


$("#q9 li").on("click", function () {
    // #q9の各li要素がクリックされたときにクリックされた要素のindex番号がアラートで表示
    let nums = $(this).index();
    alert(nums)
});

$("#q10 li").on("click", function () {
    let large = $(this).index();
    console.log($("#q11 li").eq(large));
    $("#q11 li").eq(large).addClass("large-text")
})