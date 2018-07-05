$( document ).ready(function() {
    
    // filter
    $(".btn-sort").on("click", function() {
      if ( $(this).hasClass('inc') ) {
          $(this).removeClass('inc');
          $(this).addClass('dec');
      } else {
          $(this).removeClass('dec');
          $(this).addClass('inc');
      }
    });
    
    // products grid
    $('.products-grid .product-card .product-header').matchHeight({
        byRow: true
    });
    
    // custom input number
    $(".product-order .product-number").append('<div class="inc button">+</div><div class="dec button">-</div>');
    
    $(".product-order .product-number .button").on("click", function() {
      var $button = $(this);
      var oldValue = $button.parent().find("input").val();

      if ($button.text() == "+") {
          var newVal = parseFloat(oldValue) + 1;
        } else {
        if (oldValue > 0) {
          var newVal = parseFloat(oldValue) - 1;
        } else {
          newVal = 0;
        }
      }
      $button.parent().find("input").val(newVal);
    });
});