$(function () {

  /* 탭 */
  $('.tabContentBox .viewListBox').hide();
  $('.tabContentBox .viewListBox').first().show();

  $('.tab li').click(function () {

    $('.tab li').children().removeClass('active');
    $(this).children().addClass('active');

    const Idx = $(this).index();

    $('.tabContentBox .viewListBox').hide();
    $('.tabContentBox .viewListBox').eq(Idx).show();

  })

  /* 선택 */
  $('.selectBox .selectBtn').click(function () {

    if ($(this).hasClass('active')) {
      $(this).removeClass('active');
      $(this).next().fadeOut();
    } else {
      $(this).addClass('active');
      $(this).next().fadeIn();
    }

  });

});
