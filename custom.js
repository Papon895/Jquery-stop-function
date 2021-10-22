
$(document).ready(function(){
  $('#start').click(function(){
    $('.one').animate({left : '400px'}, 3000).
              animate({ top : '200px' }, 3000);
  });
  $('#stop').click(function(){
    $('.one').stop(true);
  });
});