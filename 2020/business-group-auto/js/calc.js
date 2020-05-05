$(document).ready(function () {
    if ($('.section-calc').length == true) {
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

        let $calcContainer = $('.section-calc'),
            $calcPaymentMonth = $calcContainer.find('#calc-payment-month'),
            $calcPaymentTotal = $calcContainer.find('#calc-payment-total'),

            $rangeSumSlider = $('#range-sum-slider'),
            $rangeSumInput = $('#range-sum-input'),

            $rangeTimeSlider = $('#range-time-slider'),
            $rangeTimeInput = $('#range-time-input'),

            calcPersent = parseFloat($calcContainer.find('#calc-percent').text()), // persent for month
            roubleString = ' <span class="rouble" >руб</span>';


        function annualCalc() {
            let tempAnnual = $rangeSumInput.val() * ((calcPersent / 100) / (1 - Math.pow((1 + (calcPersent / 100)), -$rangeTimeInput.val())));
            return tempAnnual.toFixed(0);
        }

        function calcUpdate() {
            if ($rangeSumInput.val() != 0 && $rangeTimeInput.val() != 0) {
                let tempPaymentMonth = annualCalc(),
                    tempPaymentTotal = $rangeTimeInput.val() * tempPaymentMonth;

                $calcPaymentMonth.html(tempPaymentMonth).divide().append(roubleString);
                $calcPaymentTotal.html(tempPaymentTotal).divide().append(roubleString);
            } else {
                $calcPaymentMonth.html('0').append(roubleString);
                $calcPaymentTotal.html('0').append(roubleString);
            }
        }

        function calcInit() {
            // init sum divide
            $rangeSumInput.divide();

            // get data from sliders
            $calcContainer.find('.range-sum-value-left').html($($rangeSumSlider).attr('min')).divide().append(' <span class="rouble">руб.</span>');
            $calcContainer.find('.range-sum-value-right').html($($rangeSumSlider).attr('max')).divide().append(' <span class="rouble">руб.</span>');

            $calcContainer.find('.range-time-value-left').html($($rangeTimeSlider).attr('min')).append(' мес.');
            $calcContainer.find('.range-time-value-right').html($($rangeTimeSlider).attr('max')).append(' мес.');

            calcUpdate();
        }

        calcInit();

        // range sum
        $rangeSumSlider
            .rangeslider({
                polyfill: false
            })
            .on('input', function () {
                $rangeSumInput[0].value = this.value;

                if (this.value > 0) {
                    calcUpdate();
                } else {
                    $calcPaymentMonth.html(this.value).divide().append(roubleString);
                    $calcPaymentTotal.html(this.value).divide().append(roubleString);
                }
            });

        $rangeSumInput.on('input', function () {
            $rangeSumInput[0].value = this.value;
            calcUpdate();
        });

        // range time
        $rangeTimeSlider
            .rangeslider({
                polyfill: false
            })
            .on('input', function () {
                $rangeTimeInput[0].value = this.value;

                calcUpdate();
            });

        $rangeTimeInput.on('input', function () {
            if (this.value == "") {
                this.value = 0;
                $rangeTimeSlider.val(this.value).change();
            } else {
                $rangeTimeSlider.val(this.value).change();
            }
        });


        $($rangeSumSlider).on("input change", function () {
            $rangeSumInput.val(this.value);
        });

        $($rangeSumInput).on("input", function () {
            $rangeSumInput.val(this.value);
        });

        $($rangeTimeSlider).on("input change", function () {
            $rangeTimeInput.val(this.value);
        });

        $($rangeTimeInput).on("input", function () {
            $rangeTimeInput.val(this.value);
        });


        // clear inputs on focus
        var currentInputValue;

        $($rangeSumInput).on("focus", function () {
            currentInputValue = $(this).val();
            $(this).val('');
        });

        $($rangeSumInput).on("blur", function () {
            if (!this.value.length) {
                $(this).val(currentInputValue).divide();
            }
        });

        $($rangeTimeInput).on("focus", function () {
            currentInputValue = $(this).val();
            $(this).val('');
        });

        $($rangeTimeInput).on("blur", function () {
            if (!this.value.length) {
                $(this).val(currentInputValue).divide();
            }
        });
    }
})