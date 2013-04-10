$(function () {

  $('nav a').click(function () {
    $('article').removeClass('active');
    $('#' + $(this).data('target')).addClass('active');
    return false;
  });

});
