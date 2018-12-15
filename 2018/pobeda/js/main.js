$( document ).ready(function() {
    // animation
    setTimeout(function(){
      AOS.init();
    }, 100);

    // phone mask
    $("input[type='tel']").mask("+7 (999) 999-99-99");

    // header
    $( ".header-offcanvas-toggler, .offcanvas-close" ).on( "click", function() {
        $('.offcanvas').toggleClass('visible');
    });

    // calculator
    $.fn.setCursorPosition = function (pos) {
        this.each(function (index, elem) {
            if (elem.setSelectionRange) {
                elem.setSelectionRange(pos, pos);
            } else if (elem.createTextRange) {
                var range = elem.createTextRange();
                range.collapse(true);
                range.moveEnd('character', pos);
                range.moveStart('character', pos);
                range.select();
            }
        });
        return this;
    };

    var coeff = 4.5;
    var $rangeSumSlider = $('#range-sum-slider');
    var $rangeSumImport = $('#range-sum-input');

    var $rangeTimeSlider = $('#range-time-slider');
    var $rangeTimeImport = $('#range-time-input');

    var getSum = $('#range-sum-input').val();
    var getTime = $('#range-time-input').val();
    var resultSum = getSum / 100 * coeff;
    var resultCalc =  getSum / 100 * (coeff / 30);
    $('.result-box .result-sum span').text(resultSum.toFixed(0)).number(true, 0);
    $('.result-box .result span').text(resultCalc.toFixed(0)).number(true, 0);

    // range sum
    $rangeSumSlider
        .rangeslider({
            polyfill: false
        })
        .on('input', function() {
            $rangeSumImport[0].value = this.value;
            getSum = $('#range-sum-input').val();
            getTime = $('#range-time-input').val();

            if(getSum != 0 && getTime != 0 ) {
                resultSum = getSum / 100 * coeff;
                resultCalc = getSum / 100 * (coeff / 30);
                $('.result-box .result-sum span').text(resultSum.toFixed(0)).number(true, 0);
                $('.result-box .result span').text(resultCalc.toFixed(0)).number(true, 0);
            }
            else {
                $('.result-box .result-sum span').text('0');
                $('.result-box .result span').text('0');
            }
        });

    $rangeSumImport.on('input', function() {
        $rangeSumImport[0].value = this.value;
        getSum = $('#range-sum-input').val();
        getTime = $('#range-time-input').val();

        if(getSum != 0 && getTime != 0 ) {
            resultSum = getSum / 100 * coeff;
                resultCalc = getSum / 100 * (coeff / 30);
                $('.result-box .result-sum span').text(resultSum.toFixed(0)).number(true, 0);
                $('.result-box .result span').text(resultCalc.toFixed(0)).number(true, 0);
                $rangeSumSlider.val(getSum).change();
        }
        else {
            this.value = 0;
            $('.result-box .result-sum span').text('0');
                $('.result-box .result span').text('0');
                $rangeSumSlider.val(this.value).change();
        }
    });

    // range time
    // $rangeTimeSlider
    //     .rangeslider({
    //         polyfill: false
    //     })
    //     .on('input', function() {
    //         $rangeTimeImport[0].value = this.value;
    //         getSum = $('#range-sum-input').val();
    //         getTime = $('#range-time-input').val();

    //         if(getSum != 0 && getTime != 0 ) {
    //             resultCalc = getSum / getTime;
    //             $('.result-box .result').text(resultCalc.toFixed(0));
    //         }
    //         else {
    //             $('.result-box .result').text('0');
    //         }

    //     });

    $rangeTimeImport.on('input', function() {
        if (this.value == "") {
            this.value = 0;
            $rangeTimeSlider.val(this.value).change();
        } else {
            $rangeTimeSlider.val(this.value).change();
        }

    });

    var input = $('#range-sum-input');
    var inputslider = $('#range-sum-input');


    $('#range-sum-slider').on("input change", function() {
        inputslider.val(this.value);
    });

    $('#range-sum-input').on("input", function() {
        input.val(this.value);
    });


    // clear sum input on focus
    var currentInputValue = $('#range-sum-input').val();
    $('#range-sum-input').on("focus", function() {
        currentInputValue = $(this).val();
        $(this).val('');
    });

    $('#range-sum-input').on("blur", function() {
        if (!this.value.length) {
            $(this).val(currentInputValue).divide();
        }
    });

    // get data from sliders
    $('.range-sum-value-left').text($('#range-sum-slider').attr('min'));
    $('.range-sum-value-right').text($('#range-sum-slider').attr('max'));

    $('.range-time-value-left').text($('#range-time-slider').attr('min')).append(' месяцев');
    $('.range-time-value-right').text($('#range-time-slider').attr('max')).append(' месяцев');


    // form payment
    $( '.form-payment input[name="formPaymentSum"]' ).keyup(function() {
        var result = ( $(this).val() / 96.2 ) * 100;

        $('.form-payment input[name="formPaymentSumPercent"]').val( result.toFixed(2) );
        $('.form-payment input[name="formPaymentSumPercentDisabled"]').val( result.toFixed(2) );
    });
    $( '.form-payment input[name="formPaymentSum"]' ).change(function() {
        var result = ( $(this).val() / 96.2 ) * 100;
        $('.form-wrapper-pay form input[name="formPaymentSumPercent"]').val( result.toFixed(2) );
        $('.form-wrapper-pay form input[name="formPaymentSumPercentDisabled"]').val( result.toFixed(2) );
    });

});
var in2put = $('#range-sum-input');
$(in2put).divide();
