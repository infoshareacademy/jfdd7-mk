$(document).ready(function () {
    // przewija do odpowiedniej sekcji

    $('a[href^="#"]').on('click', function (event) {

        var target = $($(this).attr('href'));

        if (target.length) {
            event.preventDefault();
            $('html, body').animate({
                scrollTop: target.offset().top
            }, 650);
        }
    });

    //Game shows after submit

    $('form').on('submit', function () {
        $('#dolacz-do-nas').slideUp();
        $('#game').removeClass('hidden');
    });





    //parallax
    $(window).scroll(function () {
        var phone = $(".phone");
        var offset = $(this).scrollTop();
        phone.css("background-position-y", offset / 1.9);
    });
    $(window).scroll(function () {
        var woman = $(".woman");
        var offset = $(this).scrollTop();
        woman.css("background-position-y", offset / 1.7);
    });

    // pojawianie się elementow na stronie

    window.sr = ScrollReveal();
    sr.reveal('.revealed', {
        reset: false,
        delay: 500,
        rotate: {x: 65, y: 65},
        scale: 0.5,
        duration: 500,
        origin: "bottom"
    });
});
