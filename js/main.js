
// Determine if we're on a small screen.
function small () {
  return Modernizr.mq('screen and (max-width: 600px)');
}

// Show the YouTube trailer.
function showTrailer () {
  var sm = '<iframe width="411" height="231" src="http://www.youtube.com/embed/vsujbgfQxUU?rel=0" frameborder="0" allowfullscreen></iframe>';
  var lg = '<iframe width="570" height="321" src="http://www.youtube.com/embed/vsujbgfQxUU?rel=0" frameborder="0" allowfullscreen></iframe>';
  $('#trailer-wrapper').html(small() ? sm : lg);
}

// Hide the YouTube trailer.
function hideTrailer () {
  $('#trailer-wrapper').html('');
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

  var navigate = function (target) {
    if (!$('#' + target).length) {
      target = 'home';
    }

    // $('body').removeClass().addClass(target);

    // Hide all content divs.
    $('.content').removeClass('active');

    // Show the targeted div.
    $('#' + target).addClass('active');

    // Toggle the trailer on/off. This is because simply hiding it
    // does weird things in Chrome :(
    if (target === 'trailer') {
      showTrailer();
    }
    else {
      hideTrailer();
    }

    if (target === 'donate') {
      showKickstarter();
    }
    else {
      hideKickstarter();
    }
  };

  // Handle navigation on large screens.
  $('nav a').click(function (e) {
    if (small()) {
      return;
    }

    e.preventDefault();
    navigate($(this).data('target'));
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
  else {
    var hash = window.location.hash ? window.location.hash.slice(1) : 'home';
    navigate(hash);
  }

});
