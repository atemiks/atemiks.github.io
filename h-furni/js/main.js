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



    //****************************
    // Isotope Load more button
    //****************************
    var initShow = 8; //number of items loaded on init & onclick load more button
    var counter = initShow; //counter for load more button
    var iso = $grid.data('isotope'); // get Isotope instance

    //append load more button
    $grid.after('<button id="load-more" class="load-more hidden-xs" ><i class="sprite sprite-more"></i> Показать ещё</button>');

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
        if ($('#filters').data('clicked')) {
            //when filter button clicked, set initial value for counter
            counter = initShow;
            $('#filters').data('clicked', false);
        } else {
            counter = counter;
        };

        counter = counter + initShow;

        loadMore(counter);
    });

    //when filter button clicked
    $("#filters").click(function() {
        $(this).data('clicked', true);

        loadMore(initShow);
    });



    $('.intro-action').click(function(e) {
        $("[data-fancybox='photo-gallery']:eq(0)").click();
    });e.preventDefault();

});
