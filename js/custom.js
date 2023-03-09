// banner slick slider 
$(function(){
    $(".banner-slide").slick({
        dots: false,
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        nextArrow:'.next',
        prevArrow:'.prev',
    })
});

// counter up 
$('.counter').counterUp({
    delay: 10,
    time: 1000
});
// our service slider 
$(function(){
    $(".service-one").slick({
        dots: false,
        infinite: true,
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 2000,
        vertical: true,
        nextArrow:'.next',
        prevArrow:'.prev',
    })
})
