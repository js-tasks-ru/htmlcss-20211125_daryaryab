window.addEventListener('load', () => {
  initBurgerMenu();
  initModalPopup();
  removePreload();
});

window.addEventListener('scroll', () => {
  scrollToTop();
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

function initModalPopup() {
  const close = document.getElementById('modal-close');
  const modal = document.getElementById('modal__popup');
  const modalOpen = document.getElementById('modal-open');

  if (!close || !modalOpen || !modal) {
    return;
  }

  modalOpen.addEventListener('click', () => {
    modal.style.display = 'block';
    document.body.overflow = 'hidden';
  });

  close.addEventListener('click', () => {
    modal.style.display = 'none';
    document.body.overflow = 'initial';
  });
}

function removePreload() {
  document.body.classList.remove('preload');
}

function scrollToTop() {
  const arrow = document.getElementById('arrow-top');
  const arrowWrapper = document.getElementsByClassName('page__navigate')[0];

  if (!arrow) return;

   if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50) {
     arrowWrapper.style.display = 'block';
   } else {
     arrowWrapper.style.display = 'none';
   }

   arrow.addEventListener('click', () => {
     document.body.scrollTop = 0;
     document.documentElement.scrollTop = 0;
   });
}

