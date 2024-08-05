document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.querySelector(".preloader");
    const container = document.querySelector(".container");

    setTimeout(() => {
        preloader.style.display = "none";
        container.style.display = "block";
    }, 2000); // Adjust the timeout duration as needed
});