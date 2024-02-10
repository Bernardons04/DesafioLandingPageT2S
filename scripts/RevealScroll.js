window.scrl = ScrollReveal({
    origin: 'top',
    distance: '60px',
    duration: 1500,
    delay: 200,
    reset: true
})

scrl.reveal('.container, #banner img');
scrl.reveal('#ourMetrics, .divReason, #reasons a');
scrl.reveal('.filter, .technologiesList');
scrl.reveal('.allTestimonial', {origin: 'left'})
scrl.reveal('.mapAndInfos', {origin: 'top'})
scrl.reveal('.contactForm', {origin: 'bottom'})
scrl.reveal('.logoFooter, .middleFooter, .footerInferior', {origin: 'top'})
