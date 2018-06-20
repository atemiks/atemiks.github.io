$( document ).ready(function() {

    // smooth scroll
    // Select all links with hashes
    $('a[href*="#"]')
      // Remove links that don't actually link to anything
      .not('[href="#"]')
      .not('[href="#0"]')
      .click(function(event) {
        // On-page links
        if (
          location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
          && 
          location.hostname == this.hostname
        ) {
          // Figure out element to scroll to
          var target = $(this.hash);
          target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
          // Does a scroll target exist?
          if (target.length) {
            // Only prevent default if animation is actually gonna happen
            event.preventDefault();
            $('html, body').animate({
              scrollTop: target.offset().top
            }, 300);
          }
        }
      });


    // sticky header
    window.onscroll = function() {myFunction()};

    // Get the header
    var header = document.getElementById("header-navbar");

    // Get the offset position of the navbar
    var sticky = 200;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        header.classList.add("navbar-scroll");
      } else {
        header.classList.remove("navbar-scroll");
      }
    }


    // float labels
    //This code is a bit rudimentary.
    //This is more of a proof of concept than code for production.
    //The only thing it needs to do, however, is to check if the field has any value. The rest is done with CSS

    $(document).ready(function(){
      function updateText(event){
        var input=$(this);
        setTimeout(function(){
          var val=input.val();
          if(val!="")
            input.parent().addClass("floating-placeholder-float");
          else
            input.parent().removeClass("floating-placeholder-float");
        },1)
      }
      $(".floating-placeholder input").keydown(updateText);
      $(".floating-placeholder input").change(updateText);
    });
});
