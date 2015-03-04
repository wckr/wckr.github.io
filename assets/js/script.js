$(function() {

  (function sideNav() {
    var $content  = $('.js-site-content');
    var contentH  = $content.height();
    var $main     = $('.js-site-main');
    var $h2       = $main.find('h2');
    var $footer   = $('.js-site-footer');
    var footerTop = $footer.offset().top;
    var $aside    = $('.js-site-aside');
    var $nav      = $('.js-site-nav');
    var $navs     = $nav.children('ul');
    var $affix    = $('.js-affix');
    var affixW    = $affix.width();
    var affixH    = $affix.height();
    var affixTop  = $affix.offset().top;
    var scrlTop   = $(window).scrollTop();
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

    $aside.css({
      height: contentH + 'px'
    });

    $affix.css({
      width: affixW + 'px'
    });

    $(window).on('scroll', function() {
      scrlTop = $(window).scrollTop();
      affixH  = $affix.height();
      console.log( 'scrlTop: ' + scrlTop + ', affixTop: ' + affixTop + ', footerTop: ' + footerTop + ', affixH: ' + affixH);
      if ( scrlTop > affixTop && scrlTop <= (footerTop - affixH) ) {
        $affix.removeClass('affix-bottom').addClass('affix');
      } else if ( scrlTop > affixTop && scrlTop > (footerTop - affixH) ) {
        $affix.removeClass('affix').addClass('affix-bottom');
      } else {
        $affix.removeClass('affix');
      }
    });

  })();

});
