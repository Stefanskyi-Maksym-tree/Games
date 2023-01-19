window.addEventListener('DOMContentLoaded', () => {
    const menu = document.querySelector('.Header__List');
    const menuItem = document.querySelectorAll('.Header__Menu');
    const hamburger = document.querySelector('.Header__Hamburger');

    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('Header__HamburgerActive');
        menu.classList.toggle('Header__ListActive');
    });

    menuItem.forEach(item => {
        item.addEventListener('click', () => {
            hamburger.classList.toggle('Header__HamburgerActive');
            menu.classList.toggle('Header__ListActive');
        });
    });
});