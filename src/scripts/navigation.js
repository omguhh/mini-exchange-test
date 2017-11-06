var hamburgerMenu = document.getElementsByClassName('navigation__hamburger')[0];
var menuItemsWrapper = document.getElementsByClassName('navigation__items')[0];

hamburgerMenu.addEventListener('click', function(){
    menuItemsWrapper.classList.toggle('navigation__items--active');
});