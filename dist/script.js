let menu = document.querySelector('#menu');
let menu_area = document.querySelector('#nav-area');

menu.addEventListener('click', function() {
    let compStyles = window.getComputedStyle(menu_area);
    if (parseInt(compStyles.getPropertyValue('top')) < 0) {
        menu_area.style.position = "static";

        menu_area.style.top = 68 + "px";
    } else {
        menu_area.style.position = 'absolute';
        menu_area.style.top = -500 + "px";

    }
});