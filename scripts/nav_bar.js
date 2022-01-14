var navBar_btn = document.querySelector('.toggle-button');
var button_nav = document.querySelectorAll('.button_nav');
var findcar_btn = document.querySelector('.find_car');

let hideNav = false;
navBar_btn.addEventListener('click', () => {
    if (hideNav == false) {
        document.querySelector(".nav_bar_section").style.visibility = "visible";
        hideNav = true;
    } else {
        document.querySelector(".nav_bar_section").style.visibility = "hidden";
        hideNav = false;
    }
})