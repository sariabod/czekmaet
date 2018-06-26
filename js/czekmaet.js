$(function(){
   console.log("// WELCOME TO CZEKMAET, FUN STUFF AHEAD //");
   
   $('.slide-link').on('click', function(e){
      e.preventDefault();
      let tar = $(this).attr('href');
      $('html, body').animate({
         scrollTop: $(tar).offset().top
      }, 600);
   });
   window.onscroll = function() {myFunction()};
})