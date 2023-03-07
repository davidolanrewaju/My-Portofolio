const hamburgerIcon = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close');
const menuList = document.querySelector('.menu-list');
const navList = document.querySelectorAll('.nav-list');

function openMenu() {
  hamburgerIcon.style.display = 'none';
  menuList.style.display = 'block';
}

function closeMenu() {
  hamburgerIcon.style.display = 'block';
  menuList.style.display = 'none';
}

hamburgerIcon.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);
navList.forEach((i) => {
  i.addEventListener('click', closeMenu);
});