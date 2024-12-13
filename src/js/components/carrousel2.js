const carousel = document.querySelector(".carrousel-films2");
const prevButton = document.querySelector(".categorie__left-arrow2");
const nextButton = document.querySelector(".categorie__right-arrow2");

if (carousel) {
    const premierItem = document.querySelector(".carrousel__item2");
    const items = document.querySelectorAll(".carrousel__item2");
    const scrollAmount = premierItem.clientWidth / 2;
    const startIndex = 2;

    const itemWidthWithGap = premierItem.offsetWidth + 22;
    carousel.scrollLeft =
        startIndex * itemWidthWithGap - carousel.offsetWidth / 2 + premierItem.offsetWidth / 2;

    prevButton.addEventListener("click", () => {
        carousel.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    });

    nextButton.addEventListener("click", () => {
        carousel.scrollBy({ left: scrollAmount, behavior: "smooth" });
    });
}