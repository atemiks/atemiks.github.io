$( document ).ready(function() {
    'use strict';
    
    var windowWidth = $(window).width();
    
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
            }, 600);
          }
        }
      });
    
    // custom scroll
    if(windowWidth > 1024) {
        $(".service-card .service-body").mCustomScrollbar({
            theme:"dark-thick",
            autoHideScrollbar: true,
            axis:"y"
         });
    }
    else {
        $(".service-card .service-body").mCustomScrollbar('destroy');
    }
    
    
    // header
    $( ".header-toggle, .offcanvas-close" ).on( "click", function() {
        $('body').toggleClass('offcanvas-open');
        $('.offcanvas').toggleClass('offcanvas-active');
    });
    
    $( ".offcanvas-menu" ).on( "click", 'a', function() {
        $('.offcanvas').removeClass('offcanvas-active');
        $('body').removeClass('offcanvas-open');
    });
    
    // section hero
    var video = document.getElementById("hero-video");

    //Check if video can play, and play it
    video.addEventListener( "canplay", function() {
        video.play();
    });
});