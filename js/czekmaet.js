$(function(){
   $('.slide-link').on('click', function(e){
      e.preventDefault();
      let tar = $(this).attr('href');
      $('html, body').animate({
         scrollTop: $(tar).offset().top
      }, 600);
   });
   function init() {
      var imgDefer = document.getElementsByTagName('img');
      for (var i=0; i<imgDefer.length; i++) {
         if(imgDefer[i].getAttribute('data-src')) {
            imgDefer[i].setAttribute('src',imgDefer[i].getAttribute('data-src'));
         } 
      } 
   }
   window.onload = init;
})