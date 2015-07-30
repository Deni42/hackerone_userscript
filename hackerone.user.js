// ==UserScript==
// @name        hackerone
// @namespace   hackerone
// @description hackerone
// @include     https://hackerone.com/hacktivity*
// @version     1
// @grant       none
// ==/UserScript==


var elem = $('<a class="topbar-navigation-link" style="cursor: pointer; padding-top: 0px;">Show/hide activities without a public disclosure</a>');

elem.on('click', function() {
  $('.hacktivity-item').each(function() {
    if ($(this).find('a[href^="/reports/"]').length == 0)
      $(this).css('display', $(this).css('display') == 'none' ? 'block' : 'none');
  });
});

elem.prependTo($('body .wrapper'));
