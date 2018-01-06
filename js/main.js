
var scrollFunc = function() {
      $('.home-page__nav li a').click(function(e){
            var elId = e.target.id;
            if(elId == 'hp-nav-about') {
              $('html, body').animate({
                  scrollTop: $('#about-me').offset().top
                }, 400);
            } else if(elId == 'hp-nav-work') {
              $('html, body').animate({
                  scrollTop: $('#projects').offset().top
                }, 400);
            }
          });
};

$(function(){
  $('body').toggleClass('loaded');
});