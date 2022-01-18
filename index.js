window.addEventListener('load', () => {
  initBurgerMenu();
  removePreload();
});

function initBurgerMenu() {
  const menu = document.getElementById('burger-menu');
  const menuClose = document.getElementById('burger-menu-close');
  const menuOpen = document.getElementById('burger-menu-open');

  if (menuOpen) {
    menuOpen.addEventListener('click', function () {
      if (menu) {
        menu.setAttribute('data-open', '');
      }
    });
  }

  if (menuClose) {
    menuClose.addEventListener('click', function () {
      if (menu) {
        menu.removeAttribute('data-open');
      }
    });
  }
}

function removePreload() {
  document.body.classList.remove('preload');
}
