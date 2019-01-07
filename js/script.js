
jQuery(document).ready(function () {
    $(".navbar-toggler").on('click', function () {
        $(".menu").slideToggle();
    });

    $(".work-item img").addClass("img-responsive");

    $('#id-team-members').owlCarousel({
        loop: true,
        margin: 10,
        responsiveClass: true,
        responsive: {
            0: {
                items: 1,
                nav: false
            },
            568: {
                items: 2,
                nav: false
            },
            768: {
                items: 3,
                nav: false
            }
        }

    });

    $('#id-testimonials-items').owlCarousel({
        items: 1,
        loop: true,
        margin: 10,
        autoplay: true,
        autoplayTimeout: 5000,
        autoplayHoverPause: false
    });

    $("a.navbar-link").click(function() {
        if(window.innerWidth <= 1199) {
            $(".menu").slideToggle();
        }
        let target = $(this).attr("href");

        $('html,body').stop().animate({
          scrollTop: $(target).offset().top - 74
        }, 600);
        event.preventDefault();
      });
});