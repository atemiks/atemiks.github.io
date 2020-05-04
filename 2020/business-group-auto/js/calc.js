var in2put = $('#range-sum-input');
$(in2put).divide();

$(document).ready(function () {
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

    var $rangeSumSlider = $('#range-sum-slider');
    var $rangeSumImport = $('#range-sum-input');

    var $rangeTimeSlider = $('#range-time-slider');
    var $rangeTimeImport = $('#range-time-input');

    var getSum = $('#range-sum-input').val();
    var getTime = $('#range-time-input').val();
    var resultSum = getSum / getTime * currentPersent;

    var currentPersent = 0.02;

    function calcTotalSum() {
        var monthSum = +getSum,
            totalSum = monthSum;

        for (var i = 1; i <= getTime; i++) {
            totalSum += monthSum + monthSum * 0.02;
            console.log(i + ' ' + totalSum);
        }
    }

    calcTotalSum();

    // $('.calc-type-list').on('click', '.calc-type-item', function() {
    //     var self = $(this);
    //     var parrent = $(self).closest('.calc-type-list');

    //     $(parrent).find('.calc-type-item').removeClass('active');
    //     $(self).addClass('active');

    //     resultSum = getSum / getTime * currentPersent ;
    //     $('.section-calc .calc-payment-month span').text(resultSum.toFixed(0)).divide();
    // });

    resultSum = getSum / getTime * currentPersent;
    $('.section-calc .calc-payment-month span').text(resultSum.toFixed(0)).divide();

    // range sum
    $rangeSumSlider
        .rangeslider({
            polyfill: false
        })
        .on('input', function () {
            $rangeSumImport[0].value = this.value;
            getSum = $('#range-sum-input').val();
            getTime = $('#range-time-input').val();

            if (getSum != 0 && getTime != 0) {
                resultSum = getSum / getTime * currentPersent;
                $('.section-calc .calc-payment-month span').text(resultSum.toFixed(0)).divide();
            }
            else {
                $('.section-calc .calc-payment-month span').text('0');
            }
        });

    $rangeSumImport.on('input', function () {
        $rangeSumImport[0].value = this.value;
        getSum = $('#range-sum-input').val();
        getTime = $('#range-time-input').val();

        if (getSum != 0 && getTime != 0) {
            resultCalc = getSum / getTime * currentPersent;
            $('.section-calc .calc-payment-month span').text(resultSum.toFixed(0)).divide();
            $rangeSumSlider.val(getSum).change();
        }
        else {
            this.value = 0;
            $('.section-calc .calc-payment-month span').text('0');
            $rangeSumSlider.val(this.value).change();
        }
    });

    // range time
    $rangeTimeSlider
        .rangeslider({
            polyfill: false
        })
        .on('input', function () {
            $rangeTimeImport[0].value = this.value;
            getSum = $('#range-sum-input').val();
            getTime = $('#range-time-input').val();

            if (getSum != 0 && getTime != 0) {
                resultSum = getSum / getTime * currentPersent;
                $('.section-calc .calc-payment-month span').text(resultSum.toFixed(0)).divide();
            }
            else {
                $('.section-calc .calc-payment-month span').text('0');
            }

        });

    $rangeTimeImport.on('input', function () {
        if (this.value == "") {
            this.value = 0;
            $rangeTimeSlider.val(this.value).change();
        } else {
            $rangeTimeSlider.val(this.value).change();
        }

    });

    var input = $('#range-sum-input');
    var inputslider = $('#range-sum-input');


    $('#range-sum-slider').on("input change", function () {
        inputslider.val(this.value);
    });

    $('#range-sum-input').on("input", function () {
        input.val(this.value);
    });

    // clear sum input on focus
    var currentInputValue = $('#range-sum-input').val();
    $('#range-sum-input').on("focus", function () {
        currentInputValue = $(this).val();
        $(this).val('');
    });

    $('#range-sum-input').on("blur", function () {
        if (!this.value.length) {
            $(this).val(currentInputValue).divide();
        }
    });


    // get data from sliders
    $('.range-sum-value-left').html($('#range-sum-slider').attr('min')).divide().append(' <span class="rouble">руб.</span>');
    $('.range-sum-value-right').html($('#range-sum-slider').attr('max')).divide().append(' <span class="rouble">руб.</span>');

    $('.range-time-value-left').html($('#range-time-slider').attr('min')).append(' мес.');
    $('.range-time-value-right').html($('#range-time-slider').attr('max')).append(' мес.');
})

