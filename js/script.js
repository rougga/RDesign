let openPS = function (items) {
    var pswpElement = document.querySelectorAll('.pswp')[0];
    var options = {
        index: 0,
        showAnimationDuration: 0,
        history: false
    };
    var gallery = new PhotoSwipe(pswpElement, PhotoSwipeUI_Default, items, options);
    gallery.init();
}

$(document).ready(function () {
    $("header,section,footer,iframe").click(function () {
        if ($(".menu-toggle").hasClass("active")) {
            $(".menu-toggle").click();
        }
    });

    $("#int").click(function () {
        openPS(intItems);
    });

    $("#ext").click(function () {
        openPS(extItems);
    });

    $("#aut").click(function () {
        openPS(autItems);
    });
    $("#p2d").click(function () {
        openPS(p2dItems);
    });

});