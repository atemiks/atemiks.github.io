$( document ).ready(function() {

	// animation
    setTimeout(function(){
      AOS.init();
    }, 100);

    // Select all links with hashes
	$('a[href*="#"]')
	  // Remove links that don't actually link to anything
	  .not('[href="#"]')
	  .not('[href="#0"]')
	  .click(function(event) {
	    // On-page links
	    if (
	      location.pathname.replace(/^\//, '') == this.pathname.replace(/^\//, '') 
	      && 
	      location.hostname == this.hostname
	    ) {
	      // Figure out element to scroll to
	      var target = $(this.hash);
	      target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
	      // Does a scroll target exist?
	      if (target.length) {
	        // Only prevent default if animation is actually gonna happen
	        event.preventDefault();
	        $('html, body').animate({
	          scrollTop: target.offset().top
	        }, 600);
	      }
	    }
	  });

    // phone mask
    $("input[type='tel']").mask("+7 (999) 999-99-99");

    // header
    $( ".offcanvas-toggler, .offcanvas .close" ).on( "click", function() {
    	$('body').toggleClass('offcanvas-open');
        $('.offcanvas').toggleClass('visible');
    });

    // slider
	$('.slider-example').slick({
		vertical: true,
		arrows: false,
		dots: true,
		responsive: [
	    {
			breakpoint: 767,
			settings: {
				vertical: false,
				arrows: false
			}
	    }
	  	]
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
    // var resultSum = getSum / 100 * coeff;
    // var resultCalc =  getSum / 100 * (coeff / 30);
    var resultSum = getSum / getTime;
    $('.result-box .result-sum span').text(resultSum.toFixed(0)).divide();
    // $('.result-box .result span').text(resultCalc.toFixed(0)).divide();

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
                resultSum = getSum / getTime;
                // resultCalc = getSum / 100 * (coeff / 30);
                $('.result-box .result-sum span').text(resultSum.toFixed(0)).divide();
                // $('.result-box .result span').text(resultCalc.toFixed(0)).divide();
            }
            else {
                $('.result-box .result-sum span').text('0');
                // $('.result-box .result span').text('0');
            }
        });

    $rangeSumImport.on('input', function() {
        $rangeSumImport[0].value = this.value;
        getSum = $('#range-sum-input').val();
        getTime = $('#range-time-input').val();

        if(getSum != 0 && getTime != 0 ) {
            resultSum = getSum / 100 * coeff;
                resultCalc = getSum / getTime;
                $('.result-box .result-sum span').text(resultSum.toFixed(0)).divide();
                // $('.result-box .result span').text(resultCalc.toFixed(0)).divide();
                $rangeSumSlider.val(getSum).change();
        }
        else {
            this.value = 0;
            $('.result-box .result-sum span').text('0');
                // $('.result-box .result span').text('0');
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
            getSum = $('#range-sum-input').val();
            getTime = $('#range-time-input').val();

            if(getSum != 0 && getTime != 0 ) {
                resultSum = getSum / getTime;
                // resultCalc = getSum / 100 * (coeff / 30);
                $('.result-box .result-sum span').text(resultSum.toFixed(0)).divide();
                // $('.result-box .result span').text(resultCalc.toFixed(0)).divide();
            }
            else {
                $('.result-box .result-sum span').text('0');
                // $('.result-box .result span').text('0');
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
    $('.range-sum-value-left').text($('#range-sum-slider').attr('min')).divide();
    $('.range-sum-value-right').text($('#range-sum-slider').attr('max')).divide();

    $('.range-time-value-left').text($('#range-time-slider').attr('min')).append(' месяцев');
    $('.range-time-value-right').text($('#range-time-slider').attr('max')).append(' месяцев');
});


var in2put = $('#range-sum-input');
$(in2put).divide();