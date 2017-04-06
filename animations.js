/* Home Page Scroll Reveal */

window.sr = ScrollReveal();

sr.reveal('.service-items', { 
    origin: 'left',
    duration: 300, 
    scale: 0.9,
    mobile: true,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    reset: true,
    delay: 200,
    distance: '100px'
});

sr.reveal('.testimonials', { 
    origin: 'left',
    duration: 300, 
    distance: '100px',
    delay: 100,
    scale: 0.9,
    mobile: true,
    easing: 'cubic-bezier(0.6, 0.2, 0.1, 1)',
    reset: true,
    viewFactor: 0.4
});