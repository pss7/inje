$(function () {

  $(window).load(function () {
    $('#headerWrap').addClass('active');
  });
  $('#sidebarWrap').addClass('active');
  $('#sidebarWrap .menuBtn').click(function () {
    $('#sidebarWrap').removeClass('active');
    $('#headerWrap .menuBtn').show();
  })
    $('#headerWrap .menuBtn').click(function () {
    $('#sidebarWrap').addClass('active');
  })
  if ($('#sidebarWrap').hasClass('active')) {
    $('#headerWrap .menuBtn').hide();
  }

});
