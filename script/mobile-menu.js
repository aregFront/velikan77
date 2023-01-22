
let menuBtn = document.getElementById('header-mob-menu-btn');
let menu = document.getElementById('header-mob-menu');

menuBtn.addEventListener("click", openMenu);

function openMenu() {
    menu.style.display = "flex";
}

let close = document.getElementById('close-header-menu')

close.addEventListener("click", closeMenu);

function closeMenu() {
    menu.style.display = "none";
}
