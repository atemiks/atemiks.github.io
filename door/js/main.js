$(document).ready(function() {
    'use strict'
    var currentWidth = $(window).width();



    //  page product
    $('.slider-gallery').slick({
        slidesToShow: 1,
        slidesToScroll: 1
    });



    // default

    // aside collapse

    $(".content-aside-toggle").on( "click", function() {
        $('.content-aside-collapse').slideToggle();
    });


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

    // range slider
    jQuery("#range-slider").slider({
        min: 0,
        max: 100000,
        values: [0, 100000],
        range: true,
        stop: function(event, ui) {
            jQuery("input#minCost").val(jQuery("#range-slider").slider("values", 0));
            jQuery("input#maxCost").val(jQuery("#range-slider").slider("values", 1));

        },
        slide: function(event, ui) {
            jQuery("input#minCost").val(jQuery("#range-slider").slider("values", 0));
            jQuery("input#maxCost").val(jQuery("#range-slider").slider("values", 1));
        }
    });

    // init titles
    $('.range-value-left').text( $("#minCost").val() );
    $('.range-value-right').text( $("#maxCost").val() );



    $('.ui-slider-range').draggable();

    jQuery("input#minCost").change(function() {

        var value1 = jQuery("input#minCost").val();
        var value2 = jQuery("input#maxCost").val();

        if (parseInt(value1) > parseInt(value2)) {
            value1 = value2;
            jQuery("input#minCost").val(value1);
        }
        jQuery("#range-slider").slider("values", 0, value1);
    });


    jQuery("input#maxCost").change(function() {

        var value1 = jQuery("input#minCost").val();
        var value2 = jQuery("input#maxCost").val();

        if (value2 > 100000) {
            value2 = 100000;
            jQuery("input#maxCost").val(100000)
        }

        if (parseInt(value1) > parseInt(value2)) {
            value2 = value1;
            jQuery("input#maxCost").val(value2);
        }
        jQuery("#range-slider").slider("values", 1, value2);
    });



    jQuery('.slider-price-inputs input').keypress(function(event) {
        var key, keyChar;
        if (!event) var event = window.event;

        if (event.keyCode) key = event.keyCode;
        else if (event.which) key = event.which;

        if (key == null || key == 0 || key == 8 || key == 13 || key == 9 || key == 46 || key == 37 || key == 39) return true;
        keyChar = String.fromCharCode(key);

        if (!/\d/.test(keyChar)) return false;

    });

});
