$(document).ready(function () {
    // for Preeloader
    var overlay = document.getElementById('overlay');
    window.addEventListener('load', function () {
        overlay.style.display = 'none';
    });
    //For slider area
    $('.home-slide ').owlCarousel({
        loop: true,
        dots: true,
        autoplay: true,
        items: 1

    })

    $('.testimonial-Slider ').owlCarousel({
        loop: true,
        dots: true,
        autoplay: true,
        items: 1

    })
    var containerEl = document.querySelector('.container-pro');
    var mixer = mixitup(containerEl);

    //    Our Achivment area
    $('.counter').counterUp({
        delay: 10,
        time: 1000
    });

    $('.achiv-video').magnificPopup({
        type: 'iframe',
        iframe: {
            patterns: {
                youtube: {
                    index: 'youtube.com/',

                    id: 'v=',

                    src: 'http://www.youtube.com/embed/%id%?autoplay=1'
                },

            },

            srcAction: 'iframe_src',
        }
    });
    $('.responsive-menu').click(function () {
        $('nav.menu').toggleClass('show');
    });
})
