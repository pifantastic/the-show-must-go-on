$(window).load(function() {

  var theWindow = $(window);
  var $bg = $("#bg");
  var aspectRatio = $bg.width() / $bg.height();

  function resizeBg () {
    if ( (theWindow.width() / theWindow.height()) < aspectRatio ) {
      $bg.removeClass().addClass('bgheight');
    }
    else {
      $bg.removeClass().addClass('bgwidth');
    }
  }

  theWindow.resize(resizeBg).trigger('resize');

});
