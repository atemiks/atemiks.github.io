$( document ).ready(function() {

	// animation
    setTimeout(function(){
      AOS.init();
    }, 100);

    // smooth scroll
    function smoothScroll(target) {
        $('body,html').animate({
            'scrollTop': target.offset().top
        }, 600);
    }

    // phone mask
    $("input[type='tel']").mask("+7 (999) 999-99-99");


    // header
    $( ".header-search-toggler" ).on( "click", function() {
        $('.header-search').toggleClass('active');
    });

    $( ".offcanvas-toggler, .offcanvas .close, .offcanvas .nav-link" ).on( "click", function() {
    	$('body').toggleClass('offcanvas-open');
        $('.offcanvas').toggleClass('visible');
    });

    $('.nav:not(".nav-tabs") .nav-link').on('click', function(event) {
        event.preventDefault();
        smoothScroll($(this.hash));
    });

    // slider
    var $status = $('.slider-hero-status');
    var $slickElement = $('.slider-hero');


    $slickElement.on('init reInit afterChange', function (event, slick, currentSlide, nextSlide) {
        //currentSlide is undefined on init -- set it to 0 in this case (currentSlide is 0 based)
        var i = (currentSlide ? currentSlide : 0) + 1;
        $status.html('<span>0' + i + '</span>');
    });

	$($slickElement).slick({
        fade: true,
        cssEase: 'linear',
        arrows: false,
        dots: true,
        responsive: [
        {
          breakpoint: 576,
          settings: {
            adaptiveHeight: true,
            arrows: false,
            dots: true
          }
        }
      ]
    });


    // forms
    $("#modalCallback form").submit(function() {
        $.ajax({
            type: "POST",
            url: "/formModalCallback.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $('#modalCallback').modal('hide')
            $("#modalCallback form").trigger("reset");
        });
        return false;
    });

    $("#modalCalc form").submit(function() {
        $.ajax({
            type: "POST",
            url: "/formModalCalc.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $('#modalCalc').modal('hide')
            $("#modalCalc form").trigger("reset");
        });
        return false;
    });

    $("#modalRequest form").submit(function() {
        $.ajax({
            type: "POST",
            url: "/formModalRequest.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $('#modalRequest').modal('hide')
            $("#modalRequest form").trigger("reset");
        });
        return false;
    });

    $("#modalMaster form").submit(function() {
        $.ajax({
            type: "POST",
            url: "/formModalMaster.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $('#modalMaster').modal('hide')
            $("#modalMaster form").trigger("reset");
        });
        return false;
    });

    $(".form-master").submit(function() {
        $.ajax({
            type: "POST",
            url: "/formMaster.php",
            data: $(this).serialize()
        }).done(function() {
            $(this).find("input").val("");
            alert("Спасибо за заявку! Скоро мы с вами свяжемся.");
            $(".form-master").trigger("reset");
        });
        return false;
    });


});
