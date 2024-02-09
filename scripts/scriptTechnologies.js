const filterButtons = document.querySelectorAll(".filter .item");
const filterableCards = document.querySelectorAll(".technologiesList .item");

const filterCards = e => {
    e.target.classList.add("active");
    let filterName = e.target.getAttribute('dataFilter');
    filterableCards.forEach(card => {
        let filterCards = card.getAttribute('dataFilter');
        card.classList.add("hide");
        if(filterCards === filterName) {
            card.classList.remove("hide");
        }
    })
    document.querySelector(".active").classList.remove("active");
}

filterButtons.forEach(button => button.addEventListener("click", filterCards))