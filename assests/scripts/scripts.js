document.addEventListener("DOMContentLoaded", function () {
    const currentDateElement = document.querySelector(".current-date");
    if (currentDateElement) {
        currentDateElement.textContent = new Date().toISOString();
    }
});
