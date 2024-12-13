const carousel = document.querySelector(".carrousel-films3");
const prevButton = document.querySelector(".categorie__left-arrow3");
const nextButton = document.querySelector(".categorie__right-arrow3");

if (carousel) {
    const premierItem = document.querySelector(".carrousel__item3");
    const items = document.querySelectorAll(".carrousel__item3");
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