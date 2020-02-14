
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    if ($(document).width() >= 1025) {
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    }

  });
});


$(function () {
  $('#burger').click(function() {
    $('nav').toggleClass('show');
    $(this).toggleClass('active');

    console.log('worked')
  });

});

$(function () {
  $('#nav-links p').click(function() {
    $('nav ul').toggleClass('show');
    console.log('worked')
  });

});
