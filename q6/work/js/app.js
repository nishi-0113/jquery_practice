$(function () {
    // .select-boxのchangeイベントを設定
    $(".select-box").on("change", function () {
        let select = $(this).val();
        let food = $(".food-list li");
        if (select === "all") {
            food.show();
        } else {
            food.each(function (index, el) {
                let category = $(el).data("category-type");
                if (select === category) {
                    $(el).show();
                } else {
                    $(el).hide();
                }
            });
        }
    });
});