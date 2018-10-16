(function($){
  $(function(){

    $('.sidenav').sidenav();
    $('.parallax').parallax();
    $('.scrollspy').scrollSpy();
    windowH();
    $(window).resize(function() {
        windowH();
    });
    $('.fixed-action-btn').floatingActionButton();
    $('.tooltipped').tooltip();
  }); // end of document ready
})(jQuery); // end of jQuery name space


function windowH() {
   var wH = $(window).height();
   $('.main-parallax').css({height: wH});
}