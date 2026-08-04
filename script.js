
$(document).ready(function(){

    $('.hero-slider').owlCarousel({
    loop:true,
    margin:10,
    nav:false,
    autoplay: true,
    autoplayTimeout: 4000, // wait 4 seconds before next slide
    autoplaySpeed: 2000,   // slide movement takes 1 second
    autoplayHoverPause: true,
    responsive:{
        0:{
            items:1
        },
        640:{
            items:1
        },
        1024:{
            items:1
        }
    }
})

   var newsSlider = $('.news-slider');

newsSlider.owlCarousel({
    loop:true,
    margin:10,
    nav:false,

    autoplay:true,
    autoplayTimeout:4000,
    autoplaySpeed:2000,
    autoplayHoverPause:true,

    responsive:{
        0:{
            items:1
        },
        640:{
            items:2
        },
        1024:{
            items:3
        }
    }
});

$('.button-right').click(function () {
    newsSlider.trigger('prev.owl.carousel');
});

$('.button-left').click(function () {
    newsSlider.trigger('next.owl.carousel');
});






})



