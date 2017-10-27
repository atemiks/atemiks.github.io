$(document).ready(function() {
    'use strict'


    // default
    var 
        //browser window scroll (in pixels) after which the "back to top" link opacity is reduced
        offset_opacity = 1200,
        //duration of the top scrolling animation (in ms)
        scroll_duration = 700,
        // grab the header
        $header = $('.header-box'),
        // grab the "fixed header"
        $fixedHeader = $('.header-fixed'),
        offset =  currentOffsetNavigation(),
        initShow = 8; //number of items loaded on init & onclick load more button

    function currentWindowWidth() {
        return $( window ).width();
    }

    function currentOffsetNavigation() {
        var mainNavigationOffset = $('.section-navigation').offset();
        return mainNavigationOffset.top + $(".section-navigation .navigation-header").height();
        
    }

    function build() {
        if ( currentWindowWidth() < 768 ) {
            offset = $('.header-box').height();
            initShow = 4;
        }
        else {
            offset = currentOffsetNavigation();
            initShow = 8;
        }
    }
    build();

    $( window ).resize(function() {
        build();
    });



    // input mask
    $('input[type="tel"]').mask("+7 (000) 000-00-00", {placeholder: "+7 (___) ___-__-__"});


    // smooth scrolling 
    $('a[href*="#"]')
    // Remove links that don't actually link to anything
    .not('[href="#"]')
    .not('[href="#0"]')
    .click(function(event) {
        // On-page links
        if (
            location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') &&
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
                    scrollTop: target.offset().top - $fixedHeader.height()
                }, 300);
            }
        }
    });


    // convert svg image to line svg
    jQuery('img.svg').each(function(){
        var $img = jQuery(this);
        var imgID = $img.attr('id');
        var imgClass = $img.attr('class');
        var imgURL = $img.attr('src');

        jQuery.get(imgURL, function(data) {
            // Get the SVG tag, ignore the rest
            var $svg = jQuery(data).find('svg');

            // Add replaced image's ID to the new SVG
            if(typeof imgID !== 'undefined') {
                $svg = $svg.attr('id', imgID);
            }
            // Add replaced image's classes to the new SVG
            if(typeof imgClass !== 'undefined') {
                $svg = $svg.attr('class', imgClass+' replaced-svg');
            }

            // Remove any invalid XML tags as per http://validator.w3.org
            $svg = $svg.removeAttr('xmlns:a');

            // Check if the viewport is set, if the viewport is not set the SVG wont't scale.
            if(!$svg.attr('viewBox') && $svg.attr('height') && $svg.attr('width')) {
                $svg.attr('viewBox', '0 0 ' + $svg.attr('height') + ' ' + $svg.attr('width'))
            }

            // Replace image with new SVG
            $img.replaceWith($svg);

        }, 'xml');

    });


    // header
    $(".header-toggle, .mobile-navigation-close").on( "click", function() {
        $('html, body').toggleClass('mobile-navigation-open');
        $(".mobile-navigation").toggleClass('mobile-navigation-active');
    });


    $(window).scroll(function(){
        if( $(this).scrollTop() > offset ) {
            $fixedHeader.addClass('is-visible');
        }
        else {
            $fixedHeader.removeClass('is-visible');
        }
    });


    /* section hero */
    var video = document.getElementById("hero-video");

    //Check if video can play, and play it
    video.addEventListener( "canplay", function() {
        video.play();
    });


     
    /* section main navigation */

    // isotope init
    var $grid = $('.grid-filter').isotope();

    // filter items on button click
    $('.navigation-filter').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });


    var currentData = "";
    $('.header-fixed-nav').on( 'click', 'a', function() {
         currentData = $(this).attr('data-filter-id');
         $('.navigation-filter button[data-filter-id='+currentData+']').click();
    });
    $('.mobile-navigation-list').on( 'click', 'a', function() {
        currentData = $(this).attr('data-filter-id');
        $('html, body').toggleClass('mobile-navigation-open');
        $(".mobile-navigation").toggleClass('mobile-navigation-active');
        $('.navigation-filter button[data-filter-id='+currentData+']').click();
    });


    // change is-checked class on buttons
    $('.navigation-filter').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
    });


    //****************************
    // Isotope Load more button
    //****************************
    
    var counter = initShow; //counter for load more button
    var iso = $grid.data('isotope'); // get Isotope instance


    //append load more button
    $grid.after('<button id="load-more" class="load-more" ><i class="icon icon-more"></i> Показать ещё</button>');

    loadMore(initShow); //execute function onload

    function loadMore(toShow) {
        $grid.find(".hidden").removeClass("hidden");

        var hiddenElems = iso.filteredItems.slice(toShow, iso.filteredItems.length).map(function(item) {
            return item.element;
        });
        $(hiddenElems).addClass('hidden');
        $grid.isotope('layout');

        //when no more to load, hide show more button
        if (hiddenElems.length == 0) {
            jQuery("#load-more").hide();
        } else {
            jQuery("#load-more").show();
        };

    }

    

    //when load more button clicked
    $("#load-more").click(function() {
        if ($('.filters').data('clicked')) {
            //when filter button clicked, set initial value for counter
            counter = initShow;
            $('.filters').data('clicked', false);
        } else {
            counter = counter;
        };

        counter = counter + initShow;

        loadMore(counter);
    });

    //when filter button clicked
    $(".filters").click(function() {
        $(this).data('clicked', true);

        loadMore(initShow);
    });



    // fancy box caption

    $( "[data-fancybox], .fancybox-gallery" ).fancybox({
        loop: true,
        idleTime: false,
        caption : function( instance, item ) {
            var caption = $(this).data('caption') || '';

            if ( item.type === 'image' ) {
                caption = (caption.length ? caption + '<br />' : '') + '<a onclick="$.fancybox.close( true ); callback();" href="#modalOrder"  class="fancybox-order btn btn-warning btn-lg">Обратный звонок</a>' ;
            }

            return caption;
        }
    });

    // Custom click event - open fancyBox manually
    $('.fancybox').on('click', function() {
        var visibleLinks = $('.fancybox:visible');


        $.fancybox.open( visibleLinks, {
            loop: true,
            idleTime: false,
            caption : function( instance, item ) {
                var caption = $(this).data('caption') || '';

                if ( item.type === 'image' ) {
                    caption = (caption.length ? caption + '<br />' : '') + '<a onclick="$.fancybox.close( true ); callback();" href="#modalOrder" class="fancybox-order btn btn-warning btn-lg">Обратный звонок</a>' ;
                }

                return caption;
            }
        }, visibleLinks.index( this ) );

        return false;
    });



    /* section gallery */

    // open gallery button
    $('.intro-action').click(function(e) {
      e.preventDefault();
      $('.fancybox-gallery:eq(0)').click();
    });


});
