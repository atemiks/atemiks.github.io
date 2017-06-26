$(document).ready(function() {
    'use strict'

    // animation effect
    jQuery('.post').addClass("unshow").viewportChecker({
        classToAdd: 'show animated fadeInUp',
        offset: 100
    });

    /* Off canvas - Start */

    $('.off-canvas-toggle').on('click', function(e) {
        e.preventDefault();
        $('.off-canvas-sidebar li:not(:has(.sub-menu)) span').addClass('hide-menu');
        $('body').toggleClass('off-canvas-opened');
        $('html').toggleClass('off-canvas-opened');
    });

    $('.close-off-canvas').on('click', function(e) {
        e.preventDefault();
        $('.off-canvas-sidebar li:not(:has(.sub-menu)) span').addClass('hide-menu');
        $('body').removeClass('off-canvas-opened');
        $('html').removeClass('off-canvas-opened');
    });

    $('.off-canvas-menu a').on('click', function() {
        $('.off-canvas-sidebar li:not(:has(.sub-menu)) span').addClass('hide-menu');
        $('body').removeClass('off-canvas-opened');
        $('html').removeClass('off-canvas-opened');
    });

    $('.off-canvas-menu .sub-menu-toggle').on('click', function() {
        var current_root = $(this).closest('.menu-item-has-children').toggleClass('opened');

        current_root.find('> .sub-menu').slideToggle(300);

        if (current_root.closest('.sub-menu').length) {
            var current_root = current_root.parents('.menu-item-has-children').last();
        }

        var root_items = $(this).closest('div').find('> ul > .menu-item-has-children').not(current_root);

        root_items.removeClass('opened').find('> .sub-menu').slideUp(300);
    });
    /* Off canvas - End */

    $('.navbar-nav').on('click', '.dropdown-menu > li', function(e) {
        e.stopPropagation();
    });


    // init sliders
     $('.slider-product').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-product-colors'
     });
     $('.slider-product-colors').slick({
        infinite: false,
        slidesToShow: 5,
        slidesToScroll: 1,
        asNavFor: '.slider-product',
        dots: false,
        centerMode: false,
        focusOnSelect: true,
        variableWidth: true
     });

     $('.slider-single-product').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        fade: true,
        asNavFor: '.slider-single-product-nav'
     });
     $('.slider-single-product-nav').slick({
        infinite: false,
        slidesToShow: 4,
        slidesToScroll: 1,
        asNavFor: '.slider-single-product',
        dots: false,
        centerMode: false,
        focusOnSelect: true
     });


     // custom select

    $('select').each(function(){
        var $this = $(this), numberOfOptions = $(this).children('option').length;
      
        $this.addClass('select-hidden'); 
        $this.wrap('<div class="select"></div>');
        $this.after('<div class="select-styled"></div>');

        var $styledSelect = $this.next('div.select-styled');
        $styledSelect.text($this.children('option').eq(0).text());
      
        var $list = $('<ul />', {
            'class': 'select-options'
        }).insertAfter($styledSelect);
      
        for (var i = 0; i < numberOfOptions; i++) {
            $('<li />', {
                text: $this.children('option').eq(i).text(),
                rel: $this.children('option').eq(i).val()
            }).appendTo($list);
        }
      
        var $listItems = $list.children('li');
      
        $styledSelect.click(function(e) {
            e.stopPropagation();
            $('div.select-styled.active').not(this).each(function(){
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });
      
        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
        });
      
        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });

    // page catalog

    //clear form
    $( ".clear-filter" ).on( "click", function() {
        $('#form-filters')[0].reset();
    });
    $( ".toogle-filters" ).on( "click", function() {

        var $asideCatalog = $(".aside-catalog");
        var $toogleFilters = $(".toogle-filters");
        var $toogleFiltersOffset = $toogleFilters.offset();
        var $documentHeight = $(document).height();
        
        if( $asideCatalog.hasClass("active") ) {
            $asideCatalog.removeClass("active");
            $asideCatalog.offset({top: -1000, left: 0});
            $asideCatalog.css("min-height", "0");
            $(this).html('<i class="icon-filter" ></i>Filters');
        } else {
            $asideCatalog.addClass("active");
            $asideCatalog.offset({top: $toogleFiltersOffset.top + 50, left: 0});
            $asideCatalog.css("min-height", $documentHeight - $toogleFiltersOffset.top - 50);
            $(this).html('<i class="icon-filter" ></i>Hide filters');

        }
    });



     // footer
     // collapse footer
     $('.accordion').collapse();

     if ($(window).width() <= 749){  
        // home page
        $('.panel-collapse').removeClass('in');
    }
    
    $(window).resize(function(){
        if ($(window).width() >= 750){  
            $('.panel-collapse').addClass('in');

        }
        if ($(window).width() <= 749){  

            $('.panel-collapse').removeClass('in');
        }
    });

    $('a[data-toggle="collapse"]').click(function(e){
        if ($(window).width() >= 750){  
            e.stopPropagation();
        }    
    });

    $('.collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".icon-angle-right").removeClass("icon-angle-right").addClass("icon-angle-down");
    }).on('hidden.bs.collapse', function(){
    $(this).parent().find(".icon-angle-down").removeClass("icon-angle-down").addClass("icon-angle-right");
    });


    
});
