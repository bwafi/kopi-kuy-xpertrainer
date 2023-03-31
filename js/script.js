// Toggle Class active
const navbarNav = document.querySelector('.navigasi');

// Ketika humburger-menu di klik
document.querySelector('.humburger').onclick = () => {
  navbarNav.classList.toggle('nav-active');
};

// Klik diluar sidebar untuk menghilangkan nav
const humburger = document.querySelector('.humburger');

document.addEventListener('click', function (e) {
  if (!humburger.contains(e.target) && navbarNav.contains(e.target)) navbarNav.classList.remove('nav-active');
});
