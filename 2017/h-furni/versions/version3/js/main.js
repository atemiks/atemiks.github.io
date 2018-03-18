$(document).ready(function() {
    'use strict'


    // default

    // input mask
    $('input[type="tel"]').mask("+7 (999) 999 99 99",{placeholder:"+7 (___) ___ __ __ "});

    // header
    $(".header-toggle, .mobile-navigation-close").on( "click", function() {
        $('html, body').toggleClass('mobile-navigation-open');
        $(".mobile-navigation").toggleClass('mobile-navigation-active');
    });


    // hero video
    var video = document.getElementById("hero-video");

    //Check if video can play, and play it
    video.addEventListener( "canplay", function() {
        video.play();
    });


     

    // isotope
    var $grid = $('.grid-filter').isotope();

    // filter items on button click
    $('.navigation-filter').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
    });

    // change is-checked class on buttons
    $('.navigation-filter').each( function( i, buttonGroup ) {
        var $buttonGroup = $( buttonGroup );
        $buttonGroup.on( 'click', 'button', function() {
            $buttonGroup.find('.is-checked').removeClass('is-checked');
            $( this ).addClass('is-checked');
        });
    });


    // fancy box caption

    $( "[data-fancybox]" ).fancybox({
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

});
