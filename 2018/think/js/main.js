$( document ).ready(function() {

    // sticky header
    window.onscroll = function() {myFunction()};

    // Get the header
    var header = document.getElementById("header-navbar");
    var heightHeader = $('#header-navbar').height();

    // Get the offset position of the navbar
    var sticky = 80;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function myFunction() {
      if (window.pageYOffset >= sticky) {
        header.classList.add("navbar-scroll");
      } else {
        header.classList.remove("navbar-scroll");
      }
    }
    

    $( ".header-toggler" ).on( "click", function() {
        $('body').toggleClass('modal-open');
    });


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
              scrollTop: target.offset().top - heightHeader
            }, 300);
          }
        }
      });


    


    // float labels
    function updateText(event){
        var input=$(this);
        setTimeout(function(){
            var val=input.val();
            if (val != "")
                input.parent().addClass("floating-placeholder-float");
            else
                input.parent().removeClass("floating-placeholder-float");
        },1)
    }
    $(".floating-placeholder input, .floating-placeholder textarea").keydown(updateText);
    $(".floating-placeholder input, .floating-placeholder textarea").change(updateText);

    // grow textarea
    function autosize(){
        console.log('function');
      var el = this;
      setTimeout(function(){
        el.style.cssText = 'height:auto; padding:0';
        // for box-sizing other than "content-box" use:
        // el.style.cssText = '-moz-box-sizing:content-box';
        el.style.cssText = 'height:' + el.scrollHeight + 'px';
      },0);
    }
    $('textarea').keydown(autosize);
    $('textarea').change(autosize);
    

    // section hero
    // var video = document.getElementById("hero-video");

    // //Check if video can play, and play it
    // video.addEventListener( "canplay", function() {
    //   console.log('play');
    //     video.play();
    // });

    // section contact
    $( ".section-contact .form-contact #radioCanterbury" ).on( "click", function() {
        $('.section-contact .contact-info-block').removeClass('d-block');
        $('.section-contact .contact-info-canterbury').addClass('d-block');
    });
    $( ".section-contact .form-contact #radioLondon" ).on( "click", function() {
        $('.section-contact .contact-info-block').removeClass('d-block');
        $('.section-contact .contact-info-london').addClass('d-block');
    });

    $( ".section-contact .form-contact button[type='submit']" ).on( "click", function() {
        $('.section-contact .contact-wrapper').addClass('hidden');
        $('.section-contact .contact-tnanks-wrapper').addClass('d-block');
    });

});
