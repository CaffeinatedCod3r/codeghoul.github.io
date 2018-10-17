(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    windowH();
    mapheight();
    $(window).resize(function() {
        windowH();
        mapheight();
    });
    $('.fixed-action-btn').floatingActionButton();
    $('.tooltipped').tooltip();
  }); // end of document ready
})(jQuery); // end of jQuery name space


function windowH() {
   var wH = $(window).height();
   $('.main-parallax').css({height: wH});
}

function mapheight() {
  var contactH =  $('#contact-block').height();
  $('#map').css({height : contactH});
}