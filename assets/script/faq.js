
$('.accordion-title').click(function () {
    $(this).next('dd').stop().slideToggle();

    $(this).find('.accordion-icon').toggleClass('bi-plus-lg bi-dash-lg')

});


