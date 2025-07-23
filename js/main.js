
$(function () {

  //aos 초기화
  $(window).load(function () {
    AOS.init({
      duration: 2000
    });
    $('#mainWrap').addClass('active');
  });

  $('#mainWrap .slick').on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
    var i = (currentSlide ? currentSlide : 0) + 1;
    $('.controlBox02 .count').html('<em>' + i + '</em>' + slick.slideCount);
  });

  $("#mainWrap .slick").slick({
    autoplay: true,
    arrows: false,
    dots: false,
    accessibility: false,
    draggable: true,
    infinite: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    zIndex: 1000,
    pauseOnHover: false,
    autoplaySpeed: 5000,
    speed: 1500,
  });

  $('.controlBox01 .prev, .controlBox02 .prev').on('click', function () {
    $('#mainWrap .slick').slick('slickPrev');
  });

  $('.controlBox01 .next, .controlBox02 .next').on('click', function () {
    $('#mainWrap .slick').slick('slickNext');
  });

  $('#mainWrap .controlBox02 button').on('click', function (e) {
    e.preventDefault();
    if ($(this).hasClass('pause')) {
      $(this).hide();
      $('#mainWrap .controlBox02 .play').show();
      $('#mainWrap .slick').slick('slickPause');
    } else if ($(this).hasClass('play')) {
      $(this).hide();
      $('#mainWrap .controlBox02 .pause').show();
      $('#mainWrap .slick').slick('slickPlay');
    }
  });


});
