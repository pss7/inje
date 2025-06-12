$(function () {

  $('.tabContentBox .viewListBox').hide();
  $('.tabContentBox .viewListBox').first().show();

  $('.tab li').click(function () {

    $('.tab li').children().removeClass('active');
    $(this).children().addClass('active');

    const Idx = $(this).index();

    $('.tabContentBox .viewListBox').hide();
    $('.tabContentBox .viewListBox').eq(Idx).show();


  })

});
