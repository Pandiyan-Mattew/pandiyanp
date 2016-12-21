$(window).load(function() {
    $(".preloader").fadeOut("slow", function(){
      	$(".preloader-left").addClass("slide-left");
      	$(".preloader-right").addClass("slide-right");
      	$("#portfolio-case").addClass("full-portfolio");
    });
});

$('#navbar').affix({
  offset: {
    top: $('header').height()
  }
});

// ******************************//
// Scroll to Top
// ******************************//


/* =================================
VERTICLE TEXT 
=================================== */
var current = 1; 
var height = $('.roles').height(); 
var numberDivs = $('.roles').children().length; 
var first = $('.roles div:nth-child(1)'); 
setInterval(function() {
    var number = current * -height;
    first.css('margin-top', number + 'px');
    if (current === numberDivs) {
        first.css('margin-top', '0px');
        current = 1;
    } else current++;
}, 2000);
