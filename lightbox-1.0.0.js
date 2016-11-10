$( ".js-lt" ).each(function() {

  var $theme = $(this).attr('data-theme');
  var $type = $(this).attr('data-type');
  var $host = $(this).attr('data-host');
  var $path = $(this).attr('data-path');
  //var $gallery = $(this).attr('data-gallery');

  $(this).on('click', function(){

    //Lightbox Hierarchy
    $('body').append('<div class="js-lightbox-wrapper"><div class="js-lightbox-close"><div class="js-lightbox-close-wrapper"><div class="js-lightbox-close-left-diagonal"></div><div class="js-lightbox-close-right-diagonal"></div></div></div><div class="js-lightbox-content-container"></div></div>');

    //Themes

    //Light Theme
    if ($theme === "light") {
      $('.js-lightbox-wrapper').css({'position':'fixed', 'top':'0', 'right':'0', 'bottom':'0', 'left':'0', 'z-index':'1000', 'background':'#FFFFFF'});
      $('.js-lightbox-close').css({'position':'absolute', 'top':'20px', 'right':'20px', 'z-index':'1010', 'height':'16px', 'width':'16px', 'cursor':'pointer'});
      $('.js-lightbox-close-wrapper').css({'transform': 'translateY(6px) translateX(-1px)'});
      $('.js-lightbox-close-left-diagonal').css({'content':'""', 'display':'block', 'background':'#000000', 'height':'2px', 'width':'16px', 'position':'relative', 'transform-origin': 'center', 'transform': 'rotate(-45deg) translateY(1.35px)'});
      $('.js-lightbox-close-right-diagonal').css({'content':'""', 'display':'block', 'background':'#000000', 'height':'2px', 'width':'16px', 'position':'relative', 'transform-origin': 'center', 'transform': 'rotate(45deg) translateY(-1.35px)'});
    }

    //Default Dark Theme
    else {
      $('.js-lightbox-wrapper').css({'position':'fixed', 'top':'0', 'right':'0', 'bottom':'0', 'left':'0', 'z-index':'1000', 'background':'#111'});
      $('.js-lightbox-close').css({'position':'absolute', 'top':'20px', 'right':'20px', 'z-index':'1010', 'height':'16px', 'width':'16px', 'cursor':'pointer'});
      $('.js-lightbox-close-wrapper').css({'transform': 'translateY(6px) translateX(-1px)'});
      $('.js-lightbox-close-left-diagonal').css({'content':'""', 'display':'block', 'background':'white', 'height':'2px', 'width':'16px', 'position':'relative', 'transform-origin': 'center', 'transform': 'rotate(-45deg) translateY(1.35px)'});
      $('.js-lightbox-close-right-diagonal').css({'content':'""', 'display':'block', 'background':'white', 'height':'2px', 'width':'16px', 'position':'relative', 'transform-origin': 'center', 'transform': 'rotate(45deg) translateY(-1.35px)'});
    }

    //Content Type

    //Youtube Hosted
    if ($type === "iframe" && $host === "youtube"){
      if ($(window).width() < 820) {
        $('.js-lightbox-content-container').css({'position':'absolute', 'top': '50%', 'left':'50%', 'transform':'translateX(-50%) translateY(-50%)', 'z-index':'1005', 'width':'95%'});
      }
      if ($(window).width() > 1280) {
        $('.js-lightbox-content-container').css({'position':'absolute', 'top': '50%', 'left':'50%', 'transform':'translateX(-50%) translateY(-50%)', 'z-index':'1005', 'width':'62.5%'});
      }
      else {
        $('.js-lightbox-content-container').css({'position':'absolute', 'top': '50%', 'left':'50%', 'transform':'translateX(-50%) translateY(-50%)', 'z-index':'1005', 'width':'800px'});
      }
      $('.js-lightbox-content-container').append('<div class="js-lightbox-iframe-wrapper" style="position:relative;padding-bottom: 56.25%;padding-top: 25px;height: 0;" ><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" src="' + $path + '?autoplay=1"></iframe></div>');
    }

    //Vimeo Hosted
    if ($type === "iframe" && $host === "vimeo"){
      if ($(window).width() < 820) {
        $('.js-lightbox-content-container').css({'position':'absolute', 'top': '50%', 'left':'50%', 'transform':'translateX(-50%) translateY(-50%)', 'z-index':'1005', 'width':'95%'});
      }
      if ($(window).width() > 1280) {
        $('.js-lightbox-content-container').css({'position':'absolute', 'top': '50%', 'left':'50%', 'transform':'translateX(-50%) translateY(-50%)', 'z-index':'1005', 'width':'62.5%'});
      }
      else {
        $('.js-lightbox-content-container').css({'position':'absolute', 'top': '50%', 'left':'50%', 'transform':'translateX(-50%) translateY(-50%)', 'z-index':'1005', 'width':'800px'});
      }
      $('.js-lightbox-content-container').append('<div class="js-lightbox-iframe-wrapper" style="position:relative;padding-bottom: 56.25%;padding-top: 25px;height: 0;" ><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" src="' + $path + 'autoplay=1"></iframe></div>');
    }

    //Site Image
    if ($type === "image"){
      if ($(window).width() < 820) {
        $('.js-lightbox-content-container').css({'position':'absolute', 'top': '50%', 'left':'50%', 'transform':'translateX(-50%) translateY(-50%)', 'z-index':'1005', 'width':'95%', 'max-height':'80%', 'overflow':'scroll'});
      }
      if ($(window).width() > 1280) {
        $('.js-lightbox-content-container').css({'position':'absolute', 'top': '50%', 'left':'50%', 'transform':'translateX(-50%) translateY(-50%)', 'z-index':'1005', 'width':'62.5%', 'max-height':'80%', 'overflow':'scroll'});
      }
      else {
        $('.js-lightbox-content-container').css({'position':'absolute', 'top': '50%', 'left':'50%', 'transform':'translateX(-50%) translateY(-50%)', 'z-index':'1005', 'width':'800px', 'max-height':'80%', 'overflow':'scroll'});
      }
      $('.js-lightbox-content-container').append('<img width="100%" height="auto" src="' + $path + '">');
    }

    //Site Video
    if ($type === "video"){
      if ($(window).width() < 820) {
        $('.js-lightbox-content-container').css({'position':'absolute', 'top': '50%', 'left':'50%', 'transform':'translateX(-50%) translateY(-50%)', 'z-index':'1005', 'width':'95%'});
      }
      if ($(window).width() > 1280) {
        $('.js-lightbox-content-container').css({'position':'absolute', 'top': '50%', 'left':'50%', 'transform':'translateX(-50%) translateY(-50%)', 'z-index':'1005', 'width':'62.5%'});
      }
      else {
        $('.js-lightbox-content-container').css({'position':'absolute', 'top': '50%', 'left':'50%', 'transform':'translateX(-50%) translateY(-50%)', 'z-index':'1005', 'width':'800px'});
      }
      $('.js-lightbox-content-container').append('<video style="width:100%;height:auto;" controls autoplay><source src="' + $path + '" type="video/mp4"> </video>');
    }

    //Close Lightbox
    $('.js-lightbox-close').on('click', function(){
      $('.js-lightbox-wrapper').remove();
    });
  });
});
