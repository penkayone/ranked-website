console.log('Happy developing ✨');

/*
Burger menu
 */
$('.burger-menu').click(function () {
    $('.nav-buttons').toggleClass('mobile');
    $(this).html('<i class="fa-solid fa-xmark"></i>');
});
