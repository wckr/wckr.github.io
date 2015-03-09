$(function() {

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
  var navsAbove = 1;
  var text, h2Top, h2NextTop, $navsItem;

  $h2.each(function(i) {
    text = $(this).text();
    $(this).attr('id', 'h2-' + i );
    $navs.append('<li><a href="#h2-' + i + '">' + text + '</a></li>');
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

  function affixSidebar() {
    scrlTop = $(window).scrollTop();
    affixH  = $affix.height();
    if ( scrlTop > affixTop && scrlTop <= (footerTop - affixH) ) {
      $affix.removeClass('affix-bottom').addClass('affix');
    } else if ( scrlTop > affixTop && scrlTop > (footerTop - affixH) ) {
      $affix.removeClass('affix').addClass('affix-bottom');
    } else {
      $affix.removeClass('affix');
    }

    $h2.each(function(i) {
      $navsItem = $navs.find('li');
      h2Top = Math.floor($(this).offset().top);
      h2FirstTop = Math.floor($h2.eq(0).offset().top);
      if (i === $h2.length - 1) {
        h2NextTop = $('body').height();
      } else {
        h2NextTop = Math.floor($h2.eq(i + 1).offset().top);
      }

      if ( scrlTop === 0 ) {
        $navsItem.removeClass('active');
        $navsItem.eq(0).addClass('active');
      } else if ( scrlTop >= (h2Top - $(window).height() / 2) && scrlTop < (h2NextTop - $(window).height() / 2) ) {
        $navsItem.removeClass('active');
        $navsItem.eq(i + navsAbove).addClass('active');
      }
    });
  }

  affixSidebar();
  $(window).on('scroll', function() {
    affixSidebar();
  });

});

function show_issues(res) {
  var issues  = res.data;
  var $issues = $('.js-site-issues');
  if (issues.length) {
    var $ul = $('<ul />');
    $(issues).each(function(){
      $ul.append('<li><a href="' + this.html_url + '" title="' + this.login + '">' + this.title + '</a></li>');
    });
    $issues.append($ul);
  }
}
