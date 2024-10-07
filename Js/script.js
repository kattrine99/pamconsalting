// Получаем элементы
const menuIcon = document.getElementById('menuIcon');
const menuOverlay = document.getElementById('menuOverlay');
const closeIcon = document.getElementById('closeIcon');

// Открытие меню
menuIcon.addEventListener('click', () => {
    menuOverlay.classList.add('show');
});

// Закрытие меню
closeIcon.addEventListener('click', () => {
    menuOverlay.classList.remove('show');
});

