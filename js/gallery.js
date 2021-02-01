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
                src: 'http://rougga.ma/img/gallery/int/g-1.webp',
                w: 2600,
                h: 1585
            },
            {
                src: 'http://rougga.ma/img/gallery/int/g-2.webp',
                w: 2000,
                h: 1220
            },
            {
                src: 'http://rougga.ma/img/gallery/int/g-3.webp',
                w: 2000,
                h: 1220
            },
            {
                src: 'http://rougga.ma/img/gallery/int/g-4.webp',
                w: 2000,
                h: 1220
            },
            {
                src: 'http://rougga.ma/img/gallery/int/g-5.webp',
                w: 2000,
                h: 1220
            },
            {
                src: 'http://rougga.ma/img/gallery/int/g-6.webp',
                w: 2000,
                h: 1220
            },
            {
                src: 'http://rougga.ma/img/gallery/int/g-7.webp',
                w: 2000,
                h: 1220
            },
            {
                src: 'http://rougga.ma/img/gallery/int/g-8.webp',
                w: 2000,
                h: 1220
            },
            {
                src: 'http://rougga.ma/img/gallery/int/g-9.webp',
                w: 2000,
                h: 1220
            },
            {
                src: 'http://rougga.ma/img/gallery/int/g-10.webp',
                w: 2000,
                h: 1220
            },
            {
                src: 'http://rougga.ma/img/gallery/int/g-11.webp',
                w: 2000,
                h: 1220
            }
        ];
        openPS(items);
    });

    $("#ext").click(function () {
        var items = [
            {
                src: 'http://rougga.ma/img/gallery/ext/g-1.webp',
                w: 2600,
                h: 1711
            },
            {
                src: 'http://rougga.ma/img/gallery/ext/g-2.webp',
                w: 2600,
                h: 1711
            }
        ];
        openPS(items);
    });

    $("#aut").click(function () {
        var items = [
            {
                src: 'http://rougga.ma/img/gallery/aut/g-1.webp',
                w: 2600,
                h: 1711
            }
        ];
        openPS(items);
    });
    $("#p2d").click(function () {
        var items = [
            {
                src: 'http://rougga.ma/img/gallery/p2d/g-1.webp',
                w: 2600,
                h: 1711
            }
        ];
        openPS(items);
    });

});