$(document).ready(function() {
    'use strict'
    var currentWidth = $(window).width();



    //  page product
    /*$('.slider-hero').slick({
        slidesToShow: 1,
        slidesToScroll: 1,
        arrows: false,
        dots: true
    });*/

    /* accordion */
    $('.collapse').on('shown.bs.collapse', function(){
    $(this).parent().find(".sprite-icon-arrow-down").removeClass("sprite-icon-arrow-down").addClass("sprite-icon-arrow-up");
    }).on('hidden.bs.collapse', function(){
    $(this).parent().find(".sprite-icon-arrow-up").removeClass("sprite-icon-arrow-up").addClass("sprite-icon-arrow-down");
    });


    var $rangeSumSlider = $('#range-sum-slider');
    var $rangeSumImport = $('#range-sum-input');

    var $rangeTimeSlider = $('#range-time-slider');
    var $rangeTimeImport = $('#range-time-input');

    var getSum = $('#range-sum-input').val();
    var getTime = $('#range-time-input').val();
    /*var resultCalc =  getSum / getTime;*/
    console.log('sum' + getSum);
    console.log('time' + getTime);
    var result = ( (getSum * 0.035 * getTime + +getSum ) / getTime ).toFixed(2);
    $('.result-box .result').text( result );
    console.log('sum' + getSum);
    console.log('time' + getTime);


    var outputSum = $('#range-sum-output');
    var outputTime = $('#range-time-output');
    outputSum.text( getSum );
    outputTime.text( getTime );

    // range sum
    $rangeSumSlider
        .rangeslider({
            polyfill: false
        })
        .on('input', function() {
            $rangeSumImport[0].value = this.value;
            outputSum.text( this.value );
            getSum = $('#range-sum-input').val();
            getTime = $('#range-time-input').val();

            if(getSum != 0 && getTime != 0 ) {
                result = ( (getSum * 0.035 * getTime + +getSum ) / getTime ).toFixed(2);
                $('.result-box .result').text(  result  );
            }
            else {
                $('.result-box .result').text('0');
            }
        });

    $rangeSumImport.on('input', function() {
        if (this.value == "") {
            this.value = 0;
            $rangeSumSlider.val(this.value).change();
        } else {
            $rangeSumSlider.val(this.value).change();
        }

    });

    // range time 
    $rangeTimeSlider
        .rangeslider({
            polyfill: false
        })
        .on('input', function() {
            $rangeTimeImport[0].value = this.value;
            outputTime.text( this.value );
            getSum = $('#range-sum-input').val();
            getTime = $('#range-time-input').val();

            if(getSum != 0 && getTime != 0 ) {
                result = ( (getSum * 0.035 * getTime + +getSum ) / getTime ).toFixed(2);
                $('.result-box .result').text( result );
            }
            else {
                $('.result-box .result').text('0');
            }

        });

    $rangeTimeImport.on('input', function() {
        if (this.value == "") {
            this.value = 0;
            $rangeTimeSlider.val(this.value).change();
        } else {
            $rangeTimeSlider.val(this.value).change();
        }

    });

    // get data from sliders
    $('.range-sum-value-left').text($('#range-sum-slider').attr('min'));
    $('.range-sum-value-right').text($('#range-sum-slider').attr('max'));

    $('.range-time-value-left').text($('#range-time-slider').attr('min'));
    $('.range-time-value-right').text($('#range-time-slider').attr('max'));

});
