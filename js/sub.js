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

  //동의 체크 시 버튼 활성화
  $('#agreeCheck').on('change', function () {
    if ($(this).is(':checked')) {
      $('#verificationBtn').prop('disabled', false);
    } else {
      $('#verificationBtn').prop('disabled', true);
    }
  });

});
