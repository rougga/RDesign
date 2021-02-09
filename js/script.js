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

    /*if(window.innerHeight>window.innerWidth){
        let arr = $(".bg") ;
        for ( let i=0;i<arr.length;i++ ) {
            $(arr[i]).attr("data-src" ,"img/bg/webp/tele/bg-8.webp");
        }
    }*/

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