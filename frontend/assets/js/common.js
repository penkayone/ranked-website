console.log('Happy developing ✨');

document.addEventListener("DOMContentLoaded", function () {
    const themeToggle = document.querySelector(".theme-toggle");
    const body = document.body;
    const icon = themeToggle.querySelector("i");

    // Проверяем, есть ли сохраненная тема
    if (localStorage.getItem("theme") === "light") {
        body.classList.add("light-theme");
        icon.classList.replace("fa-moon", "fa-sun");
    }

    themeToggle.addEventListener("click", function () {
        body.classList.toggle("light-theme");

        // Меняем иконку
        if (body.classList.contains("light-theme")) {
            icon.classList.replace("fa-moon", "fa-sun");
            localStorage.setItem("theme", "light");
        } else {
            icon.classList.replace("fa-sun", "fa-moon");
            localStorage.setItem("theme", "dark");
        }
    });
});

/*
Burger menu
 */
$('.burger-menu').click(function () {
    $('.nav-buttons').toggleClass('mobile');
    $(this).html('<i class="fa-solid fa-xmark"></i>');
});
