$( document ).ready(function() {

	 // init hypher
    jQuery(function ($) {
        $('.about-card .about-title, .production-card .production-body').hyphenate('ru');
    });

    // animation
    setTimeout(function(){
      AOS.init();
    }, 100);

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

     // phone mask
    $("input[type='tel']").mask("+7 (999) 999-99-99");


    // custom select
    $('.custom-select').select2({
        minimumResultsForSearch: Infinity
    });

	// custom file upload
	// var wrapper = $( ".custom-file" ),
 //        inp = wrapper.find( "input" ),
 //        btn = wrapper.find( "button" ),
 //        lbl = wrapper.find( "div" );
 //    btn.focus(function(){
 //        inp.focus()
 //    });
 //    // Crutches for the :focus style:
 //    inp.focus(function(){
 //        wrapper.addClass( "focus" );
 //    }).blur(function(){
 //        wrapper.removeClass( "focus" );
 //    });

 //    var file_api = ( window.File && window.FileReader && window.FileList && window.Blob ) ? true : false;

 //    inp.change(function(){
 //        var file_name;
 //        if( file_api && inp[ 0 ].files[ 0 ] )
 //            file_name = inp[ 0 ].files[ 0 ].name;
 //        else
 //            file_name = inp.val().replace( "C:\\fakepath\\", '' );

 //        if( ! file_name.length )
 //            return;

 //        if( lbl.is( ":visible" ) ){
 //            lbl.text( file_name );
 //            btn.text( "Обзор" );
 //        }else
 //            btn.text( file_name );
 //    }).change();


 //    $( window ).resize(function(){
	//     $( ".custom-file input" ).triggerHandler( "change" );
	// });


    //Reference: 
    //https://www.onextrapixel.com/2012/12/10/how-to-create-a-custom-file-input-with-jquery-css3-and-php/
    ;(function($) {

              // Browser supports HTML5 multiple file?
              var multipleSupport = typeof $('<input/>')[0].multiple !== 'undefined',
                  isIE = /msie/i.test( navigator.userAgent );

              $.fn.customFile = function() {

                return this.each(function() {

                  var $file = $(this).addClass('custom-file-upload-hidden'), // the original file input
                      $wrap = $('<div class="file-upload-wrapper">'),
                      $input = $('<input type="text" class="file-upload-input" />'),
                      // Button that will be used in non-IE browsers
                      $button = $('<button type="button" class="file-upload-button">Обзор</button>'),
                      // Hack for IE
                      $label = $('<label class="file-upload-button" for="'+ $file[0].id +'">Select a File</label>');

                  // Hide by shifting to the left so we
                  // can still trigger events
                  $file.css({
                    position: 'absolute',
                    left: '-9999px'
                  });

                  $wrap.insertAfter( $file )
                    .append( $file, $input, ( isIE ? $label : $button ) );

                  // Prevent focus
                  $file.attr('tabIndex', -1);
                  $button.attr('tabIndex', -1);

                  $button.click(function () {
                    $file.focus().click(); // Open dialog
                  });

                  $file.change(function() {

                    var files = [], fileArr, filename;

                    // If multiple is supported then extract
                    // all filenames from the file array
                    if ( multipleSupport ) {
                      fileArr = $file[0].files;
                      for ( var i = 0, len = fileArr.length; i < len; i++ ) {
                        files.push( fileArr[i].name );
                      }
                      filename = files.join(', ');

                    // If not supported then just take the value
                    // and remove the path to just show the filename
                    } else {
                      filename = $file.val().split('\\').pop();
                    }

                    $input.val( filename ) // Set the value
                      .attr('title', filename) // Show filename in title tootlip
                      .focus(); // Regain focus

                  });

                  $input.on({
                    blur: function() { $file.trigger('blur'); },
                    keydown: function( e ) {
                      if ( e.which === 13 ) { // Enter
                        if ( !isIE ) { $file.trigger('click'); }
                      } else if ( e.which === 8 || e.which === 46 ) { // Backspace & Del
                        // On some browsers the value is read-only
                        // with this trick we remove the old input and add
                        // a clean clone with all the original events attached
                        $file.replaceWith( $file = $file.clone( true ) );
                        $file.trigger('change');
                        $input.val('');
                      } else if ( e.which === 9 ){ // TAB
                        return;
                      } else { // All other keys
                        return false;
                      }
                    }
                  });

                });

              };

              // Old browser fallback
              if ( !multipleSupport ) {
                $( document ).on('change', 'input.customfile', function() {

                  var $this = $(this),
                      // Create a unique ID so we
                      // can attach the label to the input
                      uniqId = 'customfile_'+ (new Date()).getTime(),
                      $wrap = $this.parent(),

                      // Filter empty input
                      $inputs = $wrap.siblings().find('.file-upload-input')
                        .filter(function(){ return !this.value }),

                      $file = $('<input type="file" id="'+ uniqId +'" name="'+ $this.attr('name') +'"/>');

                  // 1ms timeout so it runs after all other events
                  // that modify the value have triggered
                  setTimeout(function() {
                    // Add a new input
                    if ( $this.val() ) {
                      // Check for empty fields to prevent
                      // creating new inputs when changing files
                      if ( !$inputs.length ) {
                        $wrap.after( $file );
                        $file.customFile();
                      }
                    // Remove and reorganize inputs
                    } else {
                      $inputs.parent().remove();
                      // Move the input so it's always last on the list
                      $wrap.appendTo( $wrap.parent() );
                      $wrap.find('input').focus();
                    }
                  }, 1);

                });
              }

    }(jQuery));

    $('input[type=file]').customFile();


    // header
    $( ".offcanvas-toggler, .offcanvas .close" ).on( "click", function() {
        $('body').toggleClass('offcanvas-open');
        $('.offcanvas').toggleClass('offcanvas-visible');
    });



	// map

    // Basic options for a simple Google Map
    // For more options see: https://developers.google.com/maps/documentation/javascript/reference#MapOptions
    var mapOptions = {
        // How zoomed in you want the map to start at (always required)
        zoom: 10,

        // The latitude and longitude to center the map (always required)
        center: new google.maps.LatLng(55.6329645, 37.4416959),

    };

    // Get the HTML DOM element that will contain your map 
    // We are using a div with id="map" seen below in the <body>
    var mapElement = document.getElementById('map');

    // Create the Google Map using our element and options defined above
    var map = new google.maps.Map(mapElement, mapOptions);

    // Let's also add a marker while we're at it
    var icon = {
	    url: "./images/icons/icon-location.svg", // url
	    scaledSize: new google.maps.Size(50, 50), // scaled size
	    origin: new google.maps.Point(0,0), // origin
	    anchor: new google.maps.Point(0, 0) // anchor
	};

    var marker = new google.maps.Marker({
        map: map,
        position: new google.maps.LatLng(55.6329645, 37.4416959),
        icon: icon,
        animation: google.maps.Animation.DROP,
        title: 'Инпродас!'
    });

    // forms
    $("#form-modal-callback").submit(function() {
        $.ajax({
            type: "POST",
            url: "/mail-form-callback.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#form-modal-callback").trigger("reset");
        });
        return false;
    });

    $("#form-modal-cost").submit(function() {
        $.ajax({
            type: "POST",
            url: "/mail-form-cost.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#form-modal-cost").trigger("reset");
        });
        return false;
    });

    $("#form-hero").submit(function() {
        $.ajax({
            type: "POST",
            url: "/mail-form-hero.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#form-hero").trigger("reset");
        });
        return false;
    });

    $("#form-feedback").submit(function() {
        $.ajax({
            type: "POST",
            url: "/mail-form-feedback.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#form-feedback").trigger("reset");
        });
        return false;
    });

    $(".form-feedback").submit(function() {
        $.ajax({
            type: "POST",
            url: "/mail-form-feedback.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $(".form-feedback").trigger("reset");
        });
        return false;
    });

    $("#form-partners").submit(function() {
        $.ajax({
            type: "POST",
            url: "/mail-form-partners.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $("#form-partners").trigger("reset");
        });
        return false;
    });







});