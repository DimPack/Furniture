function testWebP(callback) {

    var webP = new Image();
    webP.onload = webP.onerror = function () {
    callback(webP.height == 2);
    };
    webP.src = "data:image/webp;base64,UklGRjoAAABXRUJQVlA4IC4AAACyAgCdASoCAAIALmk0mk0iIiIiIgBoSygABc6WWgAA/veff/0PP8bA//LwYAAA";
    }
    
    testWebP(function (support) {
    
    if (support == true) {
    document.querySelector('body').classList.add('webp');
    }else{
    document.querySelector('body').classList.add('no-webp');
    }
    });
////////////SLIDER/////////////////////
$(document).ready(function(){
    $('.fon-slider').slick({
        arrows:false,
        speed: 1000,
        autoplay:true,
        autoplaySpeed:10000,
        pauseOnFocus:true,
        pauseOnHover:true,
        asNavFor:'.small-slider'
    });
    $('.small-slider').slick({

        speed: 1000,
        autoplay:true,
        autoplaySpeed:10000,
        pauseOnFocus:true,
        pauseOnHover:true,
        asNavFor:'.fon-slider',
    });
    $('.slider-ourAvantages').slick({
        slidesToShow: 3,
        slidesToScroll: 3,
      });
});