$( document ).ready(function() {

    // sticky header
    window.onscroll = function() {headerSticky()};

    // Get the header
    var header = $(".header-box");
    var heightHeader = $('.header-box').height();

    // Get the offset position of the navbar
    var sticky = 82;

    // Add the sticky class to the header when you reach its scroll position. Remove "sticky" when you leave the scroll position
    function headerSticky() {
      if (window.pageYOffset >= sticky) {
        header.addClass("header-sticky");
      } else {
        header.removeClass("header-sticky");
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



    // check ie
    function msieversion() {

        var ua = window.navigator.userAgent;
        var msie = ua.indexOf("MSIE ");

        if (msie > 0 || !!navigator.userAgent.match(/Trident.*rv\:11\./))  // If Internet Explorer, return version number
        {
            alert(parseInt(ua.substring(msie + 5, ua.indexOf(".", msie))));
        }
        else  // If another browser, return 0
        {
            alert('otherbrowser');
        }

        return false;
    }
    msieversion();
    

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



    // page about
    $(".slider-expertise").owlCarousel({
        loop: false,
        margin: 6,
        nav: true,
        dots: false,
        autoWidth: true,
        center: false,
        responsive: {
          768 : {
              margin: 10
          }
        }
    });


    // page post
    var getMax = function(){
        // return $(document).height() - $(window).height();
        return $('.header-box').height() + $('.section-hero').height() + $('.post').height() ;
    }
    
    var getValue = function(){
        return $(window).scrollTop();
    }
    
    if('max' in document.createElement('progress')){
        // Browser supports progress element
        var progressBar = $('progress');
        
        // Set the Max attr for the first time
        progressBar.attr({ max: getMax() });

        $(document).on('scroll', function(){
            // On scroll only Value attr needs to be calculated
            progressBar.attr({ value: getValue() });
        });
      
        $(window).resize(function(){
            // On resize, both Max/Value attr needs to be calculated
            progressBar.attr({ max: getMax(), value: getValue() });
        });   
    }
    else {
        var progressBar = $('.progress-bar'), 
            max = getMax(), 
            value, width;
        
        var getWidth = function(){
            // Calculate width in percentage
            value = getValue();            
            width = (value/max) * 100;
            width = width + '%';
            return width;
        }
        
        var setWidth = function(){
            progressBar.css({ width: getWidth() });
        }
        
        $(document).on('scroll', setWidth);
        $(window).on('resize', function(){
            // Need to reset the Max attr
            max = getMax();
            setWidth();
        });
    }


    // post share
    $( ".share-list .social-item.email" ).on( "click", function() {
        $('.share-list .social-item').not('.email').toggleClass('hidden');
        $('.form-share-email').toggleClass('d-block');
    });

});
