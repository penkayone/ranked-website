document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("apply-filter").addEventListener("click", applyFilters);
    document.getElementById("reset-filter").addEventListener("click", resetFilters);
});

function applyFilters() {
    let selectedRelevance = document.getElementById("filter-relevance").value;
    let selectedPopularity = document.getElementById("filter-popularity").value;
    let authorFilter = document.getElementById("filter-author").value.toLowerCase();

    let updatesContainer = document.querySelector(".updates-list");
    let updates = Array.from(updatesContainer.querySelectorAll(".update-card"));
    let hasResults = false;

    let filteredUpdates = updates.filter(update => {
        let meta = update.querySelector(".update-meta").innerText.toLowerCase();
        let matchesAuthor = authorFilter === "" || meta.includes(authorFilter);

        if (matchesAuthor) {
            update.style.display = "flex";
            hasResults = true;
            return true;
        } else {
            update.style.display = "none";
            return false;
        }
    });

    // Применяем сортировку к отфильтрованным постам
    if (selectedRelevance === "Newest") {
        sortUpdatesByDate(filteredUpdates, true);
    } else if (selectedRelevance === "Oldest") {
        sortUpdatesByDate(filteredUpdates, false);
    }

    // Убираем лишнее пространство
    updatesContainer.style.display = hasResults ? "flex" : "block";
    updatesContainer.style.flexDirection = hasResults ? "column" : "block";
    updatesContainer.style.gap = hasResults ? "15px" : "0";

    // Показываем или скрываем заглушку
    let noResultsMessage = document.getElementById("no-results");
    if (!hasResults) {
        if (!noResultsMessage) {
            noResultsMessage = document.createElement("p");
            noResultsMessage.id = "no-results";
            noResultsMessage.innerText = "Нет результатов";
            noResultsMessage.style.textAlign = "center";
            noResultsMessage.style.color = "white";
            updatesContainer.insertAdjacentElement("afterbegin", noResultsMessage);
        }
    } else {
        if (noResultsMessage) noResultsMessage.remove();
    }
}

function sortUpdatesByDate(updates, descending) {
    let updatesContainer = document.querySelector(".updates-list");

    updates.sort((a, b) => {
        let dateA = new Date(a.getAttribute("data-date"));
        let dateB = new Date(b.getAttribute("data-date"));
        return descending ? dateB - dateA : dateA - dateB;
    });

    updates.forEach(update => {
        updatesContainer.appendChild(update);
        update.style.display = "flex";
    });
}

// Функция для сброса фильтров
function resetFilters() {
    document.getElementById("filter-relevance").value = "Newest";
    document.getElementById("filter-popularity").value = "N/A";
    document.getElementById("filter-author").value = "";

    applyFilters(); // Перезапускаем фильтрацию
}
