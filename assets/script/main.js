// ハンバーガーメニュー
var hamburger = $('.hamburger-menu-container');


$('.hamburger-button').on('click', function () {
  hamburger.toggleClass('hamburger-menu-container-active');
});

$(window).on('resize', function () {
  hamburger.removeClass('hamburger-menu-container-active');
});



// アコーディオン
// $(function () {
//     $('.accordion-title').on('click', function () {
//         $(this).next('.accordion-text').slideToggle();
//         $(this).toggleClass('open');
//     });
// });



