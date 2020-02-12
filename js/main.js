
$(function () {
  $(document).scroll(function () {
    var $nav = $(".navbar-fixed-top");
    if ($(document).width() > 800) {
      $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
    }
  });
  $('#burger').click(function() {
    $('.navbar-fixed-top').show('nav-links')
  });
});
