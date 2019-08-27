// Animated Burger
function toggleBurger(x) {
    x.classList.toggle("change");
}

// Menu toggle
var menu = document.getElementById("menu");
menu.style.display = "none";

function toggleMenu() {
    if (menu.style.display === "none") {
        menu.style.display = "block";
    } else {
        menu.style.display = "none";
    }
}

//Data aos

AOS.init();
