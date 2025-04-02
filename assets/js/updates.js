document.addEventListener("DOMContentLoaded", function() {
    // Инициализация фильтров
    initFilters();

    // Бургер-меню для мобильной версии
    const burgerMenu = document.querySelector('.burger-menu');
    if (burgerMenu) {
        burgerMenu.addEventListener('click', function() {
            const navButtons = document.querySelector('.nav-buttons');
            if (navButtons) {
                navButtons.style.display = navButtons.style.display === 'block' ? 'none' : 'block';
            }
        });
    }
});

function initFilters() {
    const applyBtn = document.getElementById('apply-filter');
    const resetBtn = document.getElementById('reset-filter');

    if (applyBtn && resetBtn) {
        applyBtn.addEventListener('click', applyFilters);
        resetBtn.addEventListener('click', resetFilters);
    }
}

function applyFilters() {
    const relevance = document.getElementById('filter-relevance').value;
    const popularity = document.getElementById('filter-popularity').value;
    const author = document.getElementById('filter-author').value.toLowerCase();

    // Здесь должна быть логика фильтрации
    console.log('Applying filters:', { relevance, popularity, author });
    // В реальном проекте здесь будет код для фильтрации контента
}

function resetFilters() {
    document.getElementById('filter-relevance').value = 'Newest';
    document.getElementById('filter-popularity').value = 'Most Popular';
    document.getElementById('filter-author').value = '';

    // Здесь должна быть логика сброса фильтров
    console.log('Filters reset');
    // В реальном проекте здесь будет код для отображения всего контента
}