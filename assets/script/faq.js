
$('.accordion-title').click(function () {
    $(this).next('dd').stop().slideToggle();
    $(this).toggleClass('open');
});