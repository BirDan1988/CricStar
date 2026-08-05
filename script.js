console.log("script loaded");
console.log(typeof $);
console.log($('#match-status span').length);




$(document).ready(function () {

    $('.hero-slider').owlCarousel({
        loop: true,
        margin: 10,
        nav: false,
        dots: true,
        autoplay: true,
        autoplayTimeout: 4000, // wait 4 seconds before next slide
        autoplaySpeed: 2000,   // slide movement takes 1 second
        autoplayHoverPause: true,
        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 1
            },
            1024: {
                items: 1
            }
        }
    })

    let storySlider = $('.story-slider');

    storySlider.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,

        autoplay: true,
        autoplayTimeout: 4000,
        autoplaySpeed: 2000,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 2
            },
            1024: {
                items: 3
            }
        }
    });

    $('.button-right').click(function () {
        storySlider.trigger('prev.owl.carousel');
    });

    $('.button-left').click(function () {
        storySlider.trigger('next.owl.carousel');
    });


    let newsSlider = $('.news-slider');

    newsSlider.owlCarousel({
        loop: true,
        margin: 10,
        nav: false,

        autoplay: false,
        autoplayTimeout: 4000,
        autoplaySpeed: 2000,
        autoplayHoverPause: true,

        responsive: {
            0: {
                items: 1
            },
            640: {
                items: 2
            },
            1024: {
                items: 4
            }
        }
    });

    $('.news-button-right').click(function () {
        newsSlider.trigger('prev.owl.carousel');
    });

    $('.news-button-left').click(function () {
        newsSlider.trigger('next.owl.carousel');
    });

    $('#series ul li a').click(function () {
        $(this).addClass('text-white  bg-blue-500 rounded-2xl block')
        $(this).parent().siblings().find('a').removeClass('text-white bg-blue-500')
        $(this).parent().siblings().find('a').addClass('text-[#A0B3C5]')

    })

    // live page
  
     let active='bg-primary text-[#071B2A]  shadow-[0px_1px_5px_rgba(0,212,255,0.8)]';
    let inactive='bg-bgtag border-2 border-[#1E4A66] text-para' 

    $('#match-status span').click(function () {
       $(this).removeClass(inactive).siblings().addClass(inactive)  
       $(this).addClass(active).siblings().removeClass(active) 
    })

    $('#match-category span').click(function () {
        
       $(this).removeClass(inactive).siblings().addClass(inactive)  
       $(this).addClass(active).siblings().removeClass(active) 
    })

    // match filter
    let selectedStatus = "all";
let selectedCategory = "all";


$('#match-status span').click(function(){

    selectedStatus = $(this).data('status');

    filterMatch();

});


$('#match-category span').click(function(){

    selectedCategory = $(this).data('category');

    filterMatch();

});


function filterMatch(){

    $('.scoreboard').each(function(){

        let matchStatus = $(this).data('status');
        let matchCategory = $(this).data('category');


        let statusMatch =
            selectedStatus === "all" ||
            matchStatus === selectedStatus;


        let categoryMatch =
            selectedCategory === "all" ||
            matchCategory === selectedCategory;


        if(statusMatch && categoryMatch){
            $(this).show();
        }
        else{
            $(this).hide();
        }

    });

}




function filterMatch(){

    $('.teams').each(function(){

       
        let matchCategory = $(this).data('category');


      


        let categoryMatch =
            selectedCategory === "all" ||
            matchCategory === selectedCategory;


        if(categoryMatch){
            $(this).show();
        }
        else{
            $(this).hide();
        }

    });

}




})



