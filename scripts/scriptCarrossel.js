const carrossel = document.querySelector(".listTestimonials");
const firstTestimonial = carrossel.querySelectorAll(".testimonial")[0];
const arrowIcons = document.querySelectorAll(".divArrow img");
let isDragStart = false, prevPageX, prevScrollLeft;
let firstImgWidth = firstTestimonial.clientWidth+34;

arrowIcons.forEach(icon => {
    icon.addEventListener("click", () => {
        carrossel.scrollLeft += icon.id == "left" ? -firstImgWidth : firstImgWidth
    })
})

const dragStart = (e) => {
    isDragStart = true;
    prevPageX = e.pageX;
    prevScrollLeft = carrossel.scrollLeft;
}

const dragging = (e) => {
    if (!isDragStart) return;
    e.preventDefault();
    let positionDiff = e.pageX - prevPageX;
    carrossel.scrollLeft = prevScrollLeft - positionDiff;
}

const dragStop = () => {
    isDragStart = false;
} 

carrossel.addEventListener("mousedown", dragStart);
carrossel.addEventListener("mousemove", dragging);
carrossel.addEventListener("mouseup", dragStop);