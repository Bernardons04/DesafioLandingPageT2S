window.scrl = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 200,
    reset: true
})

scrl.reveal('.container, #banner img, #ourMetrics, .divReason, .filter, .technologiesList, .divContact, .logoFooter, .middleFooter, .footerInferior');
scrl.reveal('.allTestimonial', {reset: false});