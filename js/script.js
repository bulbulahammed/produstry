$(function ($) {

    var menutop = $(".menu_back").offset().top;

    $(window).scroll(function () {

        var scrollto = $(window).scrollTop();

        if (scrollto > menutop) {
            $(".menu_back").addClass("menufix");
        } else {
            $(".menu_back").removeClass("menufix");
        }
        if (scrollto > 200) {
            $('.button').fadeIn(1000);
        } else {
            $('.button').fadeOut(1000);
        }

    });

    $('.button').click(function () {
        $('html, body').animate({
            scrollTop: 0
        }, 500)
    })



    //    var menuBackHeight = $(".menu_back").outerHeight();
    $('a[href*="#"]:not([href="#').on('click', function () {

        if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
            var target = $(this.hash);
            target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
            if (target.length) {
                $('html, body').animate({
                    scrollTop: target.offset().top - 70
                }, 1000);
                return false;
            }
        }

    })

});

$(function ($) {
    // about part div fadeIn and fadeOut

    $("#history").click(function () {
        $("#about_div_content_2").fadeIn(10);
        $("#about_div_content_1").fadeOut(.1);
        $("#about_div_content_3").fadeOut(.1);
        $("#about_div_content_4").fadeOut(.1);
    });

    $("#company").click(function () {
        $("#about_div_content_1").fadeIn(10);
        $("#about_div_content_2").fadeOut(.1);
        $("#about_div_content_3").fadeOut(.1);
        $("#about_div_content_4").fadeOut(.1);
    });
    $("#mission").click(function () {
        $("#about_div_content_3").fadeIn(10);
        $("#about_div_content_1").fadeOut(.1);
        $("#about_div_content_2").fadeOut(.1);
        $("#about_div_content_4").fadeOut(.1);
    });
    $("#awards").click(function () {
        $("#about_div_content_4").fadeIn(10);
        $("#about_div_content_1").fadeOut(.1);
        $("#about_div_content_2").fadeOut(.1);
        $("#about_div_content_3").fadeOut(.1);
    });

    $('#menu_slider').slick({
        infinite: true,
        speed: 500,
        fade: true,
        autoplay: true,
        prevArrow: '.banner .prev',
        nextArrow: '.banner .next',
        autoplaySpeed: 2000,
        cssEase: 'linear'
    });


    $('.test_slider').slick({
        infinite: true,
        speed: 1000,
        prevArrow: '.testimonial_container .prev',
        nextArrow: '.testimonial_container .next',
//        autoplay: true,
//        autoplaySpeed: 2000,
        cssEase: 'linear'
    });

    $('.market_slider').slick({
        slidesToShow: 5,
        infinite: true,
        slidesToScroll: 2,
        speed: 1000,
        prevArrow: '.market_part .prev',
        nextArrow: '.market_part .next',
        autoplay: true,
        autoplaySpeed: 2000,
        cssEase: 'linear'
    });

    $(".portfolio_slider").slick({
        slidesToShow: 4,
        arrows: false,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 1000,
    });
    new WOW().init();



});

$(function ($) {


});


$(function ($) {
    $(document).ready(function () {
        $(".blog_slide").slick({
            prevArrow: '.blog_inner .prev',
            nextArrow: '.blog_inner .next',
            slidesToShow: 3,
            slidesToScroll: 1,
            //            autoplay: true,
            //            autoplaySpeed: 1000,
        });

    });

});
