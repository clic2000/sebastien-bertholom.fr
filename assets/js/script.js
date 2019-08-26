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

// Slide effect

var slideIndex = 1;
showDivs(slideIndex);

function plusDivs(n) {
    showDivs(slideIndex += n);
}
function showDivs(n) {
    var i;
    var x = document.getElementsByClassName("slider");
    if (n > x.length) {slideIndex = 1} 
    if (n < 1) {slideIndex = x.length} ;
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none"; 
    }
    x[slideIndex-1].style.display = "block"; 
}