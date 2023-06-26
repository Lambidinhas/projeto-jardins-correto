const btn = document.querySelector('.button-nav');
const nav = document.querySelector('.nav-mobile');

btn.addEventListener('click', function (e) {
  if (nav.style.display === 'none') {
    nav.style.display = 'flex';
  } else {
    nav.style.display = 'none';
  }
});
