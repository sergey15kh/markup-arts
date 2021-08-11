// Testimonials Slider
$(function() {
    $('.testimonials-items').slick({
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay:true,
        autoplaySpeed:3000,
        speed:900,
      });
});

// Burger Menu
$(document).ready(function() {
    $('.header__menu-burger').click(function(event) {
        $('.burger-menu').toggleClass('active');
    });
});

// ScrollBar
$(function() {
    $(".seo-block, .mobile-content").mCustomScrollbar({
        theme:"dark"
    });
});