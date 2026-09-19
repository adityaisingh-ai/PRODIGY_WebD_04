// =========================
// Smooth scrolling
// =========================

document.querySelectorAll("nav a").forEach(link => {

    link.addEventListener("click", function (event) {

        event.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        target.scrollIntoView({
            behavior: "smooth"
        });

    });

});


// =========================
// Welcome message
// =========================

console.log("Welcome to Aditya's Portfolio!");


// =========================
// Button interaction
// =========================

const projectButton = document.querySelector(".btn");

projectButton.addEventListener("click", function () {
    console.log("Projects section opened");
});