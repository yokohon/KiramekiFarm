// ハンバーガーメニュー
var hamburger = $('.hamburger-menu-container');


$('.hamburger-button').on('click', function () {
  hamburger.toggleClass('hamburger-menu-container-active');
});

$(window).on('resize', function () {
  hamburger.removeClass('hamburger-menu-container-active');
});

// スリック
$('.gallery-box').slick({
  infinite: true,
  slidesToShow: 3,      // PCで3枚表示
  slidesToScroll: 1,
  arrows: true,         // 矢印ナビゲーションON
  dots: true,           // 下部のドットON
  autoplay: true,
  autoplaySpeed: 3000,
  responsive: [
    {
      breakpoint: 768,  // スマホ時
      settings: {
        slidesToShow: 1
      }
    }
  ]
});