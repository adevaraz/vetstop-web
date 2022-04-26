var nav = document.getElementById("nav-links")
var navItems = nav.querySelectorAll(".nav-link");

for(let i = 0; i < navItems.length; i++) {
    navItems[i].addEventListener("click", (e) => {
        var current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace(" active", "");
        navItems[i].className += " active";
    })
}