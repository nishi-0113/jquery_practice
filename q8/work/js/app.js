$(function () {
    function a(e) {
        $(".message").remove();
        let b;
        0 < (
            null == (b = e[0].items) ? void 0 : b.length
        )
            ? $.each(e[0].items, function (h, c) {
                let g = '<li class="lists-item"><div class="list-inner"><p>' + (
                    (c.title ? c.title : "") + "</p><p>"
                ) + ((
                    c["dc:creator"]? c["dc:creator"]: ""
                ) + "</p><p>") + ((
                    c["dc:publisher"]? c["dc:publisher"] [0] : ""
                ) + '</p><a href="') + (c.link["@id"] + '" target="_blank"></a></div></li>');
                $(".lists").prepend(g)
            })
            : $(".lists").before('<div class="message"></div>')
    }
    let d = 1,
        f = "";
    $(".search-btn").on("click", function () {
        let e = $("#search-input").val();
        e !== f
            ? (d = 1, $(".lists").empty(), f = e) : d++;
            $.ajax({
                url: "https://ci.nii.ac.jp/books/opensearch/search?title=" + e + "&format=json&p=" + d + "&count=20",
                method: "GET"
            })
            .done(function (b) {
                a(b["@graph"])
            })
            .fail(function (b) {
                $(".lists").empty();
                $(".message").remove();
                0 === b.status
                    ? $(".lists").before('<div class="message"></div>')
                    : 400 === b.status
                        ? $(".lists").before('<div class="message"></div>')
                        : $(".lists").before('<div class="message"></div>')
            })
    });
    $(".reset-btn").on("click", function () {
        d = 1;
        f = "";
        $(".lists").empty();
        $(".message").remove();
        $("#search-input").val("")
    })
});