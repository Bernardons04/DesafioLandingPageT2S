const navMenu = document.getElementById("nav")
const navToggle = document.getElementById("nav-toggle")

navToggle.addEventListener('click', () => {
    navMenu.classList.toggle('show-menu')
    if (navMenu.classList.contains('show-menu') === true) {
        navToggle.style.color = "var(--second-color)"
        navToggle.style.transform = "scale(1.2)";
    } else {
        navToggle.style.color = "var(--light)"
        navToggle.style.transform = "scale(1)";
    }
});

Array.from(li_s).forEach((li) => {
    li.addEventListener('click', () => {
        navMenu.classList.toggle('show-menu')
        navToggle.style.color = "var(--light)"
        navToggle.style.transform = "scale(1)";
    });
});