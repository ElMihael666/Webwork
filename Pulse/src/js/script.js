$(document).ready(function(){
    $('.carousel__inner').slick({
        speed: 1500,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="../icons/left.svg" alt="left"/></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="../icons/right.svg" alt="right"/></button>',
        // autoplay: true,
        // autoplaySpeed: 4000,
        dotsClass: 'slick-dots',
        responsive: [
            {
                breakpoint: 992,
                settings: {
                    arrows: false,
                }
            }
        ],
    });
});