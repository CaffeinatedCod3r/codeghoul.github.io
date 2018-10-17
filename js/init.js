M.AutoInit();

window.addEventListener("onload", fun);

window.addEventListener("resize", fun);

function fun() {
    fullpageparallax();
    mapheight();
}

function fullpageparallax() {
   var wh = window.innerHeight;
   document.getElementById('main-parallax').style.height = wh + 'px';
}

function mapheight() {
  document.getElementById('map').style.height = document.getElementById('contact-block').clientHeight;
}