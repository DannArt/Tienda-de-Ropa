//OWL CAROSEL
$(document).ready(function() {

    "use strict";
    
    $("#owl-demo").owlCarousel({
        autoPlay: 4000,
        items: 4, //10 items above 1000px browser width
        itemsDesktop: [1370, 3], //5 items between 1000px and 901px
        itemsDesktopSmall: [900, 2], // betweem 900px and 601px
        itemsTablet: [600, 1], //2 items between 600 and 0
    });
});

//WOW JS
$(document).ready(function() {

    "use strict";
 
    new WOW().init();
});