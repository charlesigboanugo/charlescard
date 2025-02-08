document.addEventListener("DOMContentLoaded", function () {
    const currentDateElement = document.querySelector(".current-date");
    if (currentDateElement) {
        setInterval(() => {
            currentDateElement.textContent = new Date().toISOString();
        }, 1000); // Updates every second
    }
});
