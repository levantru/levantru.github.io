$('.slider-images').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    arrows: true,
    autoplay: true,
    autoplaySpeed: 5000,
    nextArrow: '<span class="button-slide t-right"><i class="-ap icon-arrow-right "></i></span>',
    prevArrow: '<span class="button-slide t-left"><i class="-ap icon-arrow-left "></i></span>',
    responsive: [
    {
        breakpoint: 991,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 1,
        }
    },
    {
        breakpoint: 767,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 1
        }
    },
    {
        breakpoint: 480,
        settings: {
            slidesToShow: 1,
            slidesToScroll: 1
        }
    }
    ]
});
$( window ).on( "load", function() { 
    setTimeout(function(){ 
        $(".loading").addClass("hide");
    }, 2000);
    $('body').one('click',function(){
        enableAutoplay();
           $('.close').click();
    });
});
    var vid = document.getElementById("myVideo");
    function enableAutoplay() { 
        vid.autoplay = true;
        vid.load();
   }
