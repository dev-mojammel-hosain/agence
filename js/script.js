$(function(){
    $('.banner-slider').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        arrows: false,
        dots: true,
        pauseOnFocus: false,
        pauseOnHover: false,
      });

      $('.client-review').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        centerMode: true,
        centerPadding: '0px',
        pauseOnFocus: false,
        pauseOnHover: false,
        prevArrow: ('.cleft'),
        mobileFirst: true,
        nextArrow: ('.cright'),
        // mobileFirst: true, //optional, to be used only if your page is mobile first
        responsive: [{
            breakpoint: 320,
            settings: { 
            // unslick: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            // centerMode: false,
            },
            breakpoint: 575,
            settings: { 
            // unslick: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            // centerMode: false,
            },
            breakpoint: 767,
            settings: { 
            // unslick: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            // centerMode: false,
            },
            breakpoint: 991,
            settings: { 
            // unslick: true,
            slidesToShow: 3,
            slidesToScroll: 1,
            // centerMode: false,
            },
        }]
      });

      $('.s-count').counterUp({
        delay: 10,
        time: 1000
        });
    // mobile bar --------------
    $('.bar').click(function () { 
        $('.mobile-menu').css('opacity', 1);
        $('.mobile-menu').css('visibility', 'visible');
    });
    $('.cross').click(function () { 
        $('.mobile-menu').css('opacity', 0);
        $('.mobile-menu').css('visibility', 'hidden');
    });
    $('.mobile-menu').click(function () { 
        $('.mobile-menu').css('opacity', 0);
        $('.mobile-menu').css('visibility', 'hidden');
    });
    // mobile bar --------------

})

// new WOW().init();

const navAll = document.querySelector('.navbar');
window.addEventListener('scroll', () =>{
    if(window.scrollY >= 50){
        navAll.classList.add('nav-scroll');
    }
    else if(window.scrollY < 50){
        navAll.classList.remove('nav-scroll');
    }
})