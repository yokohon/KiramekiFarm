// スリック
$('.gallery-box').slick({
    infinite: true,
    slidesToShow: 1,      // PCで3枚表示
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