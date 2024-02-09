const elements = document.querySelectorAll('.testimonial');

// Itera sobre os elementos
elements.forEach(element => {
    // Adiciona um ouvinte de evento para o evento de hover (mouseenter e mouseleave)
    element.addEventListener('mouseenter', () => {
        // Adiciona a classe .hovered a todos os irmãos anteriores
        let sibling = element.previousElementSibling;
        while (sibling) {
            sibling.classList.add('hovered');
            sibling = sibling.previousElementSibling;
        }

        // Adiciona a classe .hovered a todos os irmãos posteriores
        sibling = element.nextElementSibling;
        while (sibling) {
            sibling.classList.add('hovered');
            sibling = sibling.nextElementSibling;
        }
    });

    // Remove a classe .hovered quando o mouse sai do elemento
    element.addEventListener('mouseleave', () => {
        // Remove a classe .hovered de todos os irmãos anteriores
        let sibling = element.previousElementSibling;
        while (sibling) {
            sibling.classList.remove('hovered');
            sibling = sibling.previousElementSibling;
        }

        // Remove a classe .hovered de todos os irmãos posteriores
        sibling = element.nextElementSibling;
        while (sibling) {
            sibling.classList.remove('hovered');
            sibling = sibling.nextElementSibling;
        }
    });
});