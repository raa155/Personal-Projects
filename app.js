



$('.brand h3').hide().fadeIn(2000);
$('.main-navbar-roman').hide().delay(1000).fadeIn(1000);
$('.header-title1').hide().delay(1000).fadeIn(1000);
$('.paragraph-header1').hide().delay(2000).slideDown(1000);
$('#img-1').delay(3000).fadeIn(1000);
$('.banner-header').hide().fadeIn(2000);
$('.contact-form1').hide().delay(1000).fadeIn(2000);
$('.skills-grid').hide();


$('.previewButton').click(function(){
  $('.skills-grid').slideToggle();
});






$(function() {
  var documentEl = $(document),
      fadeElem = $('.hideme');
    /* Every time the window is scrolled ... */
    $(window).scroll( function(){
        var currScrollPos = documentEl.scrollTop();
        /* Check the location of each desired element */
        fadeElem.each( function(){

          var $this = $(this),
              elemOffsetTop = $this.offset().top - 300;
          if (currScrollPos > elemOffsetTop){

                $(this).animate({'opacity':'2'},1000);

            }

        });

    });

});
