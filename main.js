/**
 * 1- Detect someone clicking the hamburger menu icon (addEventListener)
 * 2- Add a class to the menu (.menu-open)
 * 3- Detect when someone clicks the 'close-menu' ID
 * 4- Remove the .menu-open class
 *
 * 'toggling a class'
 */

const hamburgerMenu = document.querySelector('.controls');
hamburgerMenu.addEventListener('click', toggleMenu);
hamburgerMenu.addEventListener('keydown', function (e) {
  if (e.keyCode === 13 || e.keyCode === 32) {
    toggleMenu();
  }
});

function toggleMenu() {
  document.querySelector(".menu").classList.toggle('menu-open');
}

document.querySelector('#menu-close').addEventListener('click', toggleMenu);