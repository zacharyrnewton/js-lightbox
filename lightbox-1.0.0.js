$( ".js-lightbox-zn-trigger" ).each(function() {

  var $type = $(this).attr('data-type');
  var $host = $(this).attr('data-host');
  var $path = $(this).attr('data-path');
  //var $gallery = $(this).attr('data-gallery');
  var $theme = $(this).attr('data-theme');

  $(this).on('click', function(){

    $('body').append('<div class="js-lightbox-zn-wrapper"><div class="js-lightbox-zn-close"><div class="js-lightbox-zn-close-wrapper"><div class="js-lightbox-zn-close-left-diagonal"></div><div class="js-lightbox-zn-close-right-diagonal"></div></div></div><div class="js-lightbox-zn-content-container"></div></div>');

    if ($theme === "light") {
      $('.js-lightbox-zn-wrapper').css({'position':'fixed', 'top':'0', 'right':'0', 'bottom':'0', 'left':'0', 'z-index':'1000', 'background':'#FFFFFF'});
      $('.js-lightbox-zn-close').css({'position':'absolute', 'top':'20px', 'right':'20px', 'z-index':'1010', 'height':'16px', 'width':'16px', 'cursor':'pointer'});
      $('.js-lightbox-zn-close-wrapper').css({'transform': 'translateY(6px) translateX(-1px)'});
      $('.js-lightbox-zn-close-left-diagonal').css({'content':'""', 'display':'block', 'background':'#000000', 'height':'2px', 'width':'16px', 'position':'relative', 'transform-origin': 'center', 'transform': 'rotate(-45deg) translateY(1.35px)'});
      $('.js-lightbox-zn-close-right-diagonal').css({'content':'""', 'display':'block', 'background':'#000000', 'height':'2px', 'width':'16px', 'position':'relative', 'transform-origin': 'center', 'transform': 'rotate(45deg) translateY(-1.35px)'});
    }

    else {
      $('.js-lightbox-zn-wrapper').css({'position':'fixed', 'top':'0', 'right':'0', 'bottom':'0', 'left':'0', 'z-index':'1000', 'background':'#111'});
      $('.js-lightbox-zn-close').css({'position':'absolute', 'top':'20px', 'right':'20px', 'z-index':'1010', 'height':'16px', 'width':'16px', 'cursor':'pointer'});
      $('.js-lightbox-zn-close-wrapper').css({'transform': 'translateY(6px) translateX(-1px)'});
      $('.js-lightbox-zn-close-left-diagonal').css({'content':'""', 'display':'block', 'background':'white', 'height':'2px', 'width':'16px', 'position':'relative', 'transform-origin': 'center', 'transform': 'rotate(-45deg) translateY(1.35px)'});
      $('.js-lightbox-zn-close-right-diagonal').css({'content':'""', 'display':'block', 'background':'white', 'height':'2px', 'width':'16px', 'position':'relative', 'transform-origin': 'center', 'transform': 'rotate(45deg) translateY(-1.35px)'});
    }

    if ($type === "iframe" && $host === "youtube"){
      if ($(window).width() < 820) {
        $('.js-lightbox-zn-content-container').css({'position':'absolute', 'top': '50%', 'left':'50%', 'transform':'translateX(-50%) translateY(-50%)', 'z-index':'1005', 'width':'95%'});
      }
      else {
        $('.js-lightbox-zn-content-container').css({'position':'absolute', 'top': '50%', 'left':'50%', 'transform':'translateX(-50%) translateY(-50%)', 'z-index':'1005', 'width':'800px'});
      }
      $('.js-lightbox-zn-content-container').append('<div class="js-lightbox-zn-iframe-wrapper" style="position:relative;padding-bottom: 56.25%;padding-top: 25px;height: 0;" ><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" src="' + $path + '?autoplay=1"></iframe></div>');
    }

    if ($type === "iframe" && $host === "vimeo"){
      if ($(window).width() < 820) {
        $('.js-lightbox-zn-content-container').css({'position':'absolute', 'top': '50%', 'left':'50%', 'transform':'translateX(-50%) translateY(-50%)', 'z-index':'1005', 'width':'95%'});
      }
      else {
        $('.js-lightbox-zn-content-container').css({'position':'absolute', 'top': '50%', 'left':'50%', 'transform':'translateX(-50%) translateY(-50%)', 'z-index':'1005', 'width':'800px'});
      }
      $('.js-lightbox-zn-content-container').append('<div class="js-lightbox-zn-iframe-wrapper" style="position:relative;padding-bottom: 56.25%;padding-top: 25px;height: 0;" ><iframe style="position:absolute;top:0;left:0;width:100%;height:100%;" frameborder="0" src="' + $path + 'autoplay=1"></iframe></div>');
    }

    if ($type === "image"){
      if ($(window).width() < 820) {
        $('.js-lightbox-zn-content-container').css({'position':'absolute', 'top': '50%', 'left':'50%', 'transform':'translateX(-50%) translateY(-50%)', 'z-index':'1005', 'width':'95%', 'max-height':'80%', 'overflow':'scroll'});
      }
      else {
        $('.js-lightbox-zn-content-container').css({'position':'absolute', 'top': '50%', 'left':'50%', 'transform':'translateX(-50%) translateY(-50%)', 'z-index':'1005', 'width':'800px', 'max-height':'80%', 'overflow':'scroll'});
      }
      $('.js-lightbox-zn-content-container').append('<img width="100%" height="auto" src="' + $path + '">');
    }

    if ($type === "video"){
      if ($(window).width() < 820) {
        $('.js-lightbox-zn-content-container').css({'position':'absolute', 'top': '50%', 'left':'50%', 'transform':'translateX(-50%) translateY(-50%)', 'z-index':'1005', 'width':'95%'});
      }
      else {
        $('.js-lightbox-zn-content-container').css({'position':'absolute', 'top': '50%', 'left':'50%', 'transform':'translateX(-50%) translateY(-50%)', 'z-index':'1005', 'width':'800px'});
      }
      $('.js-lightbox-zn-content-container').append('<video style="width:100%;height:auto;" controls autoplay><source src="' + $path + '" type="video/mp4"> </video>');
    }

    $('.js-lightbox-zn-close').on('click', function(){
      $('.js-lightbox-zn-wrapper').remove();
    });
  });
});
