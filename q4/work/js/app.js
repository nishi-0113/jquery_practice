$(function () {
    $(".nav li").click(function () {
        let change = $(".nav li").index(this);
        $(".description li").addClass("is-hidden");
        $(".description li").eq(change).removeClass("is-hidden")
    })
});