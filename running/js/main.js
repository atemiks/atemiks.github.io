$(document).ready(function() {
    'use strict'

    /* animation effect */
    jQuery('.post').addClass("unshow").viewportChecker({
        classToAdd: 'show animated fadeInUp',
        offset: 100
    });

    var currentWidth = $(window).width();


    // header

    // burger
    $('.toggle-header-menu').on('click', function(e) {
        e.preventDefault();
        $('.header-menu').slideToggle('fast');
    });

    if(currentWidth < 992) {
        // collapse 
        $('.header-menu-list .menu-block .menu-block-list').slideUp('fast');
    }
    $('.header-menu-list li.dropdown a').on('click', function(event) {
        if(currentWidth < 992) {
            $(this).parent().toggleClass("open");
            if(  $(this).parent().hasClass('open') )
                $('.header-menu-list .dropdown.open .dropdown-menu').slideDown('fast');
            else 
                $('.header-menu-list .dropdown:not(.open) .dropdown-menu').slideUp('fast');
            
        }
    });

    // hero menu accordion
    if( currentWidth < 992 ) {
        $('.header-menu-list .menu-block .menu-block-list').slideUp('fast');
    }
    else {
        $('.header-menu-list .menu-block .menu-block-list').slideDown('fast');
    }

    $('.header-menu-list').on('click', '.menu-block-title', function(e) {
        if( currentWidth < 992 ) {
            e.stopPropagation();
            e.preventDefault();
            $(this).parent().toggleClass('active');
            $(this).next('ul').slideToggle('fast');

            if( $(this).parent().hasClass('active') ) 
                $(".header-menu-list .menu-block:not(.active)").slideUp('fast');
            else 
                $(".header-menu-list .menu-block").slideDown('fast');
        }
    });


    // page home
    if( currentWidth < 767) {
        $('.slider-articles').slick({
            slidesToShow: 1,
            slidesToScroll: 1,
            dots: false
        });
    }
    else if( $('.slider-articles').hasClass('slick-slider') ) {
        $('.slider-articles').slick('unslick');
    }
    

    

    $('.starrr').starrr({
      readOnly: true
    })

    // sliders init
    $('.slider-products').slick({
        slidesToShow: 4,
        slidesToScroll: 4,
        dots: false,
        responsive: [{
                breakpoint: 992,
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 3
                }
            }, {
                breakpoint: 767,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    variableWidth: true,
                    arrows: false
                }
            }
        ]
    });

    //  page product
    $('.slider-gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true,
        fade: true,
        customPaging : function(slider, i) {
            var thumb = $(slider.$slides[i]).data('thumb');
            return '<a class="dots-thumbnail-wrap" ><img class="dots-thumbnail-img" src="'+thumb+'"></a>';
        }
        /*asNavFor: '.slider-gallery-nav'*/
    });
    $('.slider-gallery-nav').slick({
        rows: 2,
        slidesToShow: 7,
        slidesToScroll: 1,
        asNavFor: '.slider-gallery',
        arrows: false,
        dots: false,
        focusOnSelect: true,
        variableWidth: true
    });


    // show more
    $('.show-more-toggle').on('click', function(e) {
        e.preventDefault();
        $('.related-products').addClass('more-products');
        $(this).css('display', 'none');
    });

    

    // page catalog
    var $asideFilters = $('.aside-filters');

    function positionCatalogHeader() {
        var $catalogHeader = $('.catalog-header');
        var catalogHeaderOffset = $catalogHeader.offset();
        console.log(catalogHeaderOffset.top);

        var catalogHeaderHeight = $('.catalog-header').outerHeight();
        console.log(catalogHeaderHeight);

        $asideFilters.offset({top: catalogHeaderOffset.top + catalogHeaderHeight, left: 0});
    }

    setTimeout(function() {

        

    }, 300);

    $( ".filter-toggle" ).on( "click", function(e) {
        e.preventDefault();
        $asideFilters.slideToggle();
        positionCatalogHeader();
    });
    $( ".aside-filters-close" ).on( "click", function(e) {
        e.preventDefault();
        $asideFilters.slideUp();
    });

    // price slider
    $('.nstSlider').nstSlider({
        "left_grip_selector": ".leftGrip",
        "right_grip_selector": ".rightGrip",
        "value_bar_selector": ".bar",
        "highlight": {
            "grip_class": "gripHighlighted",
            "panel_selector": ".highlightPanel"
        },
        "value_changed_callback": function(cause, leftValue, rightValue) {
            $('.leftLabel').text(leftValue);
            $('.rightLabel').text(rightValue);
        },
    });

    // resize
    $(window).resize(function() {
        currentWidth = $(window).width();
        console.log(currentWidth);

        if( currentWidth < 992 ) {
            // header
            $('.header-menu-list .menu-block .menu-block-list').slideUp('fast');
        }
        else {
            // header
            $('.header-menu-list .menu-block .menu-block-list').slideDown('fast');
        }


        
        if( currentWidth < 767) {
            // page home
            $('.slider-articles').slick({
                slidesToShow: 1,
                slidesToScroll: 1,
                dots: false
            });
        }
        else if( $('.slider-articles').hasClass('slick-slider') ) {
            $('.slider-articles').slick('unslick');
        }
    });



    // default

    // select
    $('select').each(function() {
        var $this = $(this),
            numberOfOptions = $(this).children('option').length;

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
            $('div.select-styled.active').not(this).each(function() {
                $(this).removeClass('active').next('ul.select-options').hide();
            });
            $(this).toggleClass('active').next('ul.select-options').toggle();
        });

        $listItems.click(function(e) {
            e.stopPropagation();
            $styledSelect.text($(this).text()).removeClass('active');
            $this.val($(this).attr('rel'));
            $list.hide();
            //console.log($this.val());
        });

        $(document).click(function() {
            $styledSelect.removeClass('active');
            $list.hide();
        });

    });


    jQuery('.quantity').each(function() {
        var spinner = jQuery(this),
            input = spinner.find('input[type="number"]'),
            btnUp = spinner.find('.quantity-up'),
            btnDown = spinner.find('.quantity-down'),
            min = input.attr('min'),
            max = input.attr('max');

        btnUp.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue >= max) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue + 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

        btnDown.click(function() {
            var oldValue = parseFloat(input.val());
            if (oldValue <= min) {
                var newVal = oldValue;
            } else {
                var newVal = oldValue - 1;
            }
            spinner.find("input").val(newVal);
            spinner.find("input").trigger("change");
        });

    });

});
