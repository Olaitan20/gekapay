window.onscroll = function() {
    const nav = document.querySelector('nav');
    if (window.scrollY > 50) {
        nav.classList.add('sticky');
    } else {
        nav.classList.remove('sticky');
    }
};
const hamburger = document.getElementById ("hamburger")
const collapsed_menu = document.getElementById ("collapsed-menu")
const close = document.getElementById ("close")
hamburger.addEventListener("click", ()=> {
    collapsed_menu.classList.toggle('hidden')
    hamburger.classList.toggle('hidden')
    close.classList.toggle('hidden')
})
close.addEventListener("click", ()=> {
    collapsed_menu.classList.toggle('hidden')
    hamburger.classList.toggle('hidden')
    close.classList.toggle('hidden')
})