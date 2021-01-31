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


    $("#int").click(function () {
        var items = [
            {
                src: 'http://rougga.ma/img/bg/webp/bg-2.webp',
                w: 2600,
                h: 1585
            },
            {
                src: 'http://rougga.ma/img/bg/webp/bg-4.webp',
                w: 2000,
                h: 1220
            },
            {
                src: 'http://rougga.ma/img/bg/webp/bg-7.webp',
                w: 2000,
                h: 1220
            }
        ];
        openPS(items);
    });

    $("#ext").click(function () {
        var items = [
            {
                src: 'http://rougga.ma/img/bg/webp/bg-5.webp',
                w: 2600,
                h: 1711
            }
        ];
        openPS(items);
    });

    $("#aut").click(function () {
        var items = [
            {
                src: 'http://rougga.ma/img/bg/webp/bg-5.webp',
                w: 2600,
                h: 1711
            }
        ];
        openPS(items);
    });
    $("#p2d").click(function () {
        var items = [
            {
                src: 'http://rougga.ma/img/bg/webp/bg-5.webp',
                w: 2600,
                h: 1711
            }
        ];
        openPS(items);
    });

});