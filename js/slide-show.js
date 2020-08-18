var $slider_container = $(".slider-container"),
  $slider = $(".slider");

// スライド初期化時にクラスを追加
// はじめはdisplay:noneしておき、.initializedが追加されたらdisplay:block
$slider.on("init", function () {
  $slider_container.addClass("initialized");
});

$slider.slick({
  appendArrows: $slider_container,
  prevArrow: '<div class="slider-arrow slider-prev fa fa-angle-left"></div>',
  nextArrow: '<div class="slider-arrow slider-next fa fa-angle-right"></div>',
  slidesToShow: 3,
});

// スライドの横幅を小数点以下pxまで表示
$slider.on("setPosition", function () {
  var slider_width = $slider.width(),
    slide_gutter = $slider
    .find(".slick-slide")
    .eq(0)
    .css("margin-right")
    .split("px")[0],
    slides_num = $slider.slick("slickGetOption", "slidesToShow"),
    slide_width =
    (slider_width - slide_gutter * (slides_num - 1)) / slides_num;
  $slider.find(".slick-active").css("width", slide_width + "px");
});
