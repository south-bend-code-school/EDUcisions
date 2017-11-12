(function(){

  $(document).ready(initalize);

function initalize(){
  $(".dropdown-button").dropdown();
  $('.carousel.carousel-slider').carousel({fullWidth: true},{duration: 5000});
window.setInterval(function(){$('.carousel').carousel('next')},4500)


}

})();
