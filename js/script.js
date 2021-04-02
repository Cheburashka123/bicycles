$(document).ready(function () {
    $('.burger, .menu__link').click(function (event) {
        $('.burger, .menu__box').toggleClass('active');
        $('body').toggleClass('lock');
    });
});

$(document).ready(function () {
    $('.slider').slick({
        arrows: false,
        dots: true,
        speed: 1000,
        autoplay: true,
        autoplaySpeed: 3000,
        pauseOnFocus: false,

    });


});
