document.addEventListener('DOMContentLoaded', function() {
  // Отримуємо елементи DOM
  const menu = document.getElementById('mobile-menu');
  const openBtn = document.querySelector('[data-menu-open]');
  const closeBtn = document.querySelector('[data-menu-close]');
  const body = document.body;

  // Перевіряємо, чи всі елементи існують
  if (!menu || !openBtn || !closeBtn) return;

  // Функція для перемикання меню
  function toggleMenu() {
    const isOpen = menu.classList.toggle('is-open');
    body.classList.toggle('no-scroll', isOpen);
    openBtn.setAttribute('aria-expanded', isOpen);
  }

  // Відкриття меню
  openBtn.addEventListener('click', function(e) {
    e.stopPropagation();
    toggleMenu();
  });

  // Закриття меню
  closeBtn.addEventListener('click', toggleMenu);

  // Закриття при кліку на посилання в меню
  const menuLinks = menu.querySelectorAll('a');
  menuLinks.forEach(link => {
    link.addEventListener('click', toggleMenu);
  });

  // Закриття при кліку поза меню
  menu.addEventListener('click', function(e) {
    if (e.target === menu) {
      toggleMenu();
    }
  });

  // Закриття при натисканні Escape
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && menu.classList.contains('is-open')) {
      toggleMenu();
    }
  });
});