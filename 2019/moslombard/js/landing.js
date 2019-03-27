$(document).ready(function() {

    // header menu
    $('.menu-toggler').on('click', function(e) {
        e.preventDefault();

        var self = $(this);
        var parrent = self.closest('.menu-wrapper');
        parrent.toggleClass('active');
    })

    // close header menu when click outside
    $(document).click(function(event) {
        if (!$(event.target).closest(".menu-wrapper").length) {
            $("body").find(".menu-wrapper").removeClass("active");
        }
    });



    // popover
    $('.popover-toggle, .popover-close').on('click', function(e) {
        e.preventDefault();

        var self = $(this);
        var parrent = self.closest('.popover');
        parrent.toggleClass('open');
    })

    // click popover when click outside
    $(document).click(function(e) {
        //if you click on anything except the modal itself or the "open modal" link, close the modal
        if (!$(e.target).closest(".popover").length) {
            $("body").find(".popover").removeClass("open");
        }
    });


    // calculator
    var $rangeExplicitSumSlider = $('.section-explicit-calc #range-sum-slider');
    var $rangeExplicitSumImport = $('.section-explicit-calc #range-sum-input');

    var $rangeExplicitTimeSlider = $('.section-explicit-calc #range-time-slider');
    var $rangeExplicitTimeImport = $('.section-explicit-calc #range-time-input');

    var getExplicitSum = +$('.section-explicit-calc #range-sum-input').val();
    var getExplicitTime = +$('.section-explicit-calc #range-time-input').val();
    var defaultPark = 5.8 / 100;
    var defaultPTS = 7.8 / 100;
    var resultCalcPark =  ( getExplicitSum + getExplicitSum * (getExplicitTime * defaultPark)) / getExplicitTime;
    var resultCalcPTS =  ( getExplicitSum + getExplicitSum * (getExplicitTime * defaultPTS)) / getExplicitTime;
    $('.result-park .result').text(resultCalcPark.toFixed(0)).number(true, 0).append(' ₽');
    $('.result-pts .result').text(resultCalcPTS.toFixed(0)).number(true, 0).append(' ₽');

    // range sum
    $rangeExplicitSumSlider
        .rangeslider({
            polyfill: false
        })
        .on('input', function() {
            $rangeExplicitSumImport[0].value = this.value;
            getExplicitSum = +$('.section-explicit-calc #range-sum-input').val();
            getExplicitTime = +$('.section-explicit-calc #range-time-input').val();

            if(getExplicitSum != 0 && getExplicitTime != 0 ) {
                resultCalcPark = ( getExplicitSum + getExplicitSum * (getExplicitTime * defaultPark) ) / getExplicitTime;
                resultCalcPTS = ( getExplicitSum + getExplicitSum * (getExplicitTime * defaultPTS) ) / getExplicitTime;
                $('.result-park .result').text(resultCalcPark.toFixed(0)).number(true, 0).append(' ₽');
                $('.result-pts .result').text(resultCalcPTS.toFixed(0)).number(true, 0).append(' ₽');
            }
            else {
                $('.result-block .result').text('0 ₽');
            }
        });

    $rangeExplicitSumImport.on('input', function() {
        if (this.value == "") {
            this.value = 0;
            $rangeExplicitSumSlider.val(this.value).change();
        } else {
            $rangeExplicitSumSlider.val(this.value).change();
        }

    });

    // range time 
    $rangeExplicitTimeSlider
        .rangeslider({
            polyfill: false
        })
        .on('input', function() {
            $rangeExplicitTimeImport[0].value = this.value;
            getExplicitSum = +$('.section-explicit-calc #range-sum-input').val();
            getExplicitTime = +$('.section-explicit-calc #range-time-input').val();

            if(getExplicitSum != 0 && getExplicitTime != 0 ) {
                resultCalcPark = ( getExplicitSum + getExplicitSum * (getExplicitTime * defaultPark) ) / getExplicitTime;
                resultCalcPTS = ( getExplicitSum + getExplicitSum * (getExplicitTime * defaultPTS) ) / getExplicitTime;
                $('.result-park .result').text(resultCalcPark.toFixed(0)).number(true, 0).append(' ₽');
                $('.result-pts .result').text(resultCalcPTS.toFixed(0)).number(true, 0).append(' ₽');
            }
            else {
                $('.result-block .result').text('0 ₽');
            }

        });

    $rangeExplicitTimeImport.on('input', function() {
        if (this.value == "") {
            this.value = 0;
            $rangeExplicitTimeSlider.val(this.value).change();
        } else {
            $rangeExplicitTimeSlider.val(this.value).change();
        }

    });

    // get data from sliders
    // $('.range-sum-value-left').text($('#range-sum-slider').attr('min')).number(true, 0).append(' руб.');
    // $('.range-sum-value-right').text($('#range-sum-slider').attr('max')).number(true, 0).append(' руб.');

    // $('.range-time-value-left').text($('#range-time-slider').attr('min')).append(' месяцев');
    // $('.range-time-value-right').text($('#range-time-slider').attr('max')).append(' месяцев');
})