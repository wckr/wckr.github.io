$(function() {

  (function sideNav() {
    var $main = $('.js-site-main');
    var $h2 = $main.find('h2');
    var $nav = $('.js-site-nav');
    var $navs = $nav.children('ul');
    var index, text;

    $h2.each(function() {
      index = $h2.index(this);
      text = $(this).text();
      $(this).attr('id', 'h2-' + index );
      $navs.append('<li><a href="#h2-' + index + '">' + text + '</a></li>');
    });

    $navs.on('click', 'li', function() {
      $navs.children('li').removeClass('active');
      $(this).addClass('active');
    });
  })();

});
