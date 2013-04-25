
// Determine if we're on a small screen.
function small () {
  return Modernizr.mq('screen and (max-width: 600px)');
}

// Show the YouTube trailer.
function showTrailer () {
  var sm = '<iframe width="411" height="231" src="http://www.youtube.com/embed/vsujbgfQxUU?rel=0" frameborder="0" allowfullscreen></iframe>';
  var lg = '<iframe width="570" height="321" src="http://www.youtube.com/embed/vsujbgfQxUU?rel=0" frameborder="0" allowfullscreen></iframe>';
  $('#trailer').html(small() ? sm : lg);
}

// Hide the YouTube trailer.
function hideTrailer () {
  $('#trailer').html('');
}

function showKickstarter () {
  var sm = '<iframe width="411" height="309" src="http://www.kickstarter.com/projects/1810006957/the-show-must-go-on-6/widget/video.html" frameborder="0"></iframe>';
  var lg = '<iframe width="570" height="428" src="http://www.kickstarter.com/projects/1810006957/the-show-must-go-on-6/widget/video.html" frameborder="0"></iframe>';
  var link = '<h4><a href="http://www.kickstarter.com/projects/1810006957/the-show-must-go-on-6">Click to donate</a></h4>';
  $('#donate').html((small() ? sm : lg) + link);
}

function hideKickstarter () {
  $('#donate').html('');
}

$(function () {

  // Handle navigation on large screens.
  $('nav a').click(function () {
    if (small()) {
      return;
    }

    // Hide all content divs.
    $('.content').removeClass('active');

    // Show the targeted div.
    $('#' + $(this).data('target')).addClass('active');

    // Toggle the trailer on/off. This is because simply hiding it
    // does weird things in Chrome :(
    if ($(this).data('target') === 'trailer') {
      showTrailer();
    }
    else {
      hideTrailer();
    }

    if ($(this).data('target') === 'donate') {
      showKickstarter();
    }
    else {
      hideKickstarter();
    }
  });

  $(window).resize(_.throttle(function () {
    if (small()) {
      showTrailer();
      showKickstarter();
    }
    else {
      hideTrailer();
    }
  }, 250));

  // Show the trailer initially for small screens.
  if (small()) {
    showTrailer();
    showKickstarter();
  }

});
