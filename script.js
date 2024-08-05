document.addEventListener("DOMContentLoaded", function() {
    const preloader = document.querySelector(".preloader");
    const container = document.querySelector(".container");

    // Ensure this runs after the page content is fully loaded
    window.addEventListener("load", function() {
        setTimeout(() => {
            preloader.style.display = "none";
            container.style.display = "block";
        }, 200); // Adjust the timeout duration here (in milliseconds)
    });
});