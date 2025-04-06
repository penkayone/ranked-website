document.addEventListener("DOMContentLoaded", function() {
    // Инициализация фильтров
    initFilters();
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

document.getElementById('admin-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const title = document.getElementById('post-title').value;
    const author = document.getElementById('post-author').value;
    const date = document.getElementById('post-date').value;
    const image = document.getElementById('post-image').value;
    const content = document.getElementById('post-content').value;

    const newPostHTML = `
    <div class="update-card">
        <img src="${image}" alt="">
        <div class="content">
            <h2 class="update-title gradient-text">${title}</h2>
            <div class="update-meta">
                <span class="update-date"><i class="fa-regular fa-calendar"></i> ${date}</span>
                <span class="update-author"><i class="fa-regular fa-user"></i> ${author}</span>
                <span class="update-version"><i class="fa-solid fa-eye"></i> 0 views</span>
            </div>
            <p class="update-content">${content}</p>
        </div>
        <a href="#" class="click-read">
            <i class="fas fa-arrow-right"></i>
            <span>Click to Read!</span>
        </a>
    </div>`;

    document.querySelector('.content-area').insertAdjacentHTML('afterbegin', newPostHTML);

    // Очистка формы
    this.reset();
});
