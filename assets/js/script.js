$(function() {

  // $('pre code').each(function(i, block) {
  //   hljs.highlightBlock(block);
  // });

  var $content  = $('.js-site-content');
  var contentH  = $content.height();
  var $main     = $('.js-site-main');
  var $h2       = $main.find('h2');
  var $footer   = $('.js-site-footer');
  var footerTop = $footer.offset().top;
  var $aside    = $('.js-site-aside');
  var $nav      = $('.js-page-nav');
  var $navs     = $nav.children('ul');
  var $affix    = $('.js-affix');
  var affixW    = $affix.width();
  var affixH    = $affix.height();
  var affixTop  = $affix.offset().top;
  var scrlTop   = $(window).scrollTop();
  var text, $navsItem, body, $h3;

  $h2.each(function(i) {
    text = $(this).text();
    $(this).attr('id', 'h2-' + i );
    $navs.append('<li id="nav-h2-' + i + '" class="nav-h2"><a href="#h2-' + i + '">' + text + '</a></li>');
  });

  function h3Navs(h2, pageType) {
    if (pageType) {
      body = 'body.js-' + pageType + ' ';
    } else {
      body = '';
    }
    $h3 = $(body + '.js-site-main h2#' + h2).nextUntil('h2', 'h3');
    $('#nav-' + h2).append('<ul class="h3-navs"></ul>');
    $h3.each(function(i) {
      text = $(this).text();
      text = text.replace(/ *\(.*\)/g, '');
      $(this).attr('id', 'h3-' + i);
      $('#nav-' + h2 + ' .h3-navs').append('<li class="nav-h3"><a href="#h3-' + i + '">' + text + '</a></li>');
    });
  }
  h3Navs('h2-1', 'commands');

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

  function chasingNav(h, top, navsAbove) {
    var $h = $main.find(h);
    var hTop, hFirstTop, hPrevTop, hNextTop;
    $h.each(function(i) {
      $navsItem = $navs.find('.nav-' + h);
      hTop = Math.floor($(this).offset().top);
      hFirstTop = Math.floor($h.eq(0).offset().top);
      if (i === 0) {
        hPrevTop = 0;
      } else {
        hPrevTop = Math.floor($h.eq(i - 1).offset().top);
      }
      if (i === $h.length - 1) {
        hNextTop = $('body').height();
      } else {
        hNextTop = Math.floor($h.eq(i + 1).offset().top);
      }

      if ( top && scrlTop === 0 ) {
        $navsItem.removeClass('active');
        $navsItem.eq(0).addClass('active');
      } else if ( !top && scrlTop < (hFirstTop - $(window).height() / 4)) {
        $navsItem.removeClass('active');
      } else if ( scrlTop >= (hTop - $(window).height() / 4) &&
                  scrlTop < (hNextTop - $(window).height() / 4) ) {
        if ( scrlTop >= hPrevTop + 1 ) {
          $navsItem.removeClass('active');
          $navsItem.eq(i + navsAbove).addClass('active');
        } else {
          $navsItem.removeClass('active');
          $navsItem.eq(i + navsAbove - 1).addClass('active');
        }
      }
    });
  }

  function affixSidebar() {
    scrlTop   = $(window).scrollTop();
    footerTop = $footer.offset().top;
    affixH    = $affix.height();
    if ( scrlTop > affixTop && scrlTop <= (footerTop - affixH) ) {
      $affix.removeClass('affix-bottom').addClass('affix');
    } else if ( scrlTop > affixTop && scrlTop > (footerTop - affixH) ) {
      $affix.removeClass('affix').addClass('affix-bottom');
    } else {
      $affix.removeClass('affix');
    }

    chasingNav('h2', true, 1);
    chasingNav('h3', false, 0);
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
