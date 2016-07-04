$(function(){

    "use strict";
    new WOW().init();

    "use strict";
    
    $("#owl-demo").owlCarousel({
        autoPlay: 4000,
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1370, 3], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
    });

    $("body").on("click", '#open' ,function(){
        document.getElementById("myNav").style.height = "100%"
    });
    $("body").on("click", '.closebtn' ,function(){
        document.getElementById("myNav").style.height = "0%"
    });
    $("body").on('click'," #link-novedades", function()
        {
            $('html, body').animate({scrollTop: $('#novedades').offset().top},800);
            return false;
    });
});
