document.addEventListener("DOMContentLoaded", function () {
    const accordeon = document.querySelector(".accordeon");

    accordeon.querySelectorAll("summary").forEach((summary) => {
        summary.addEventListener("click", () => {
            accordeon.querySelectorAll("details").forEach((det) => {
                if (det !== summary.parentElement) {
                    det.open = false;
                }
            });
        });
    });
});
