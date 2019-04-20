$(document).ready(function(){
    $('.partners__slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: true,
        arrows: false,
        responsive: [
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]

    });
});
