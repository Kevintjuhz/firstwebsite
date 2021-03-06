$( document ).ready(function() {

    /* Home Page Parallax */
    $('.parallax-window').parallax({imageSrc: 'img/Parallax1.jpg'});

    /* Home Page Scroll Reveal */

    window.sr = ScrollReveal();

    sr.reveal('.service-items', { 
        origin: 'left',
        duration: 300, 
        distance: '100px',
        delay: 200,
        scale: 0.9,
        mobile: true,
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
        reset: false,
        viewFactor: 0.4
    });

    sr.reveal('.testimonials', { 
        origin: 'left',
        duration: 300, 
        distance: '100px',
        delay: 200,
        scale: 0.9,
        mobile: true,
        easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
        reset: false,
        viewFactor: 0.4
    });
    
});