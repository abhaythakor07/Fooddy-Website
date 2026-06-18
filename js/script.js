console.log("KRAY Restaurant Loaded");
let lastScrollTop = 0;
const navbar = document.querySelector("header");

window.addEventListener("scroll", function () {

    let currentScroll =
        window.pageYOffset ||
        document.documentElement.scrollTop;

    if(currentScroll > lastScrollTop){

        navbar.style.transform =
            "translateY(-100%)";

    }else{

        navbar.style.transform =
            "translateY(0)";
    }

    lastScrollTop = currentScroll;
});