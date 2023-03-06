const hamburgerIcon = document.querySelector('.hamburger');
const closeIcon = document.querySelector('.close');

function openMenu() {
  document.querySelector('.nav-menu').style.display = 'block';
  hamburgerIcon.style.display = 'none';
  document.querySelector('.close').style.display = 'block';
}

function closeMenu() {
  document.querySelector('.nav-menu').style.display = 'none';
  hamburgerIcon.style.display = 'block';
  document.querySelector('.close').style.display = 'none';
}

hamburgerIcon.addEventListener('click', openMenu);
closeIcon.addEventListener('click', closeMenu);