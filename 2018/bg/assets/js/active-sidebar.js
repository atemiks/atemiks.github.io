var menu_selector = "#right-menu";
var menuLink = $("#right-menu a");
$(".nano-content").scroll(function() {
	menuLink.each(function() {
		var scroll_top = $(".nano-content").scrollTop();
		var hash = $(this).attr("href");
		var target = $(hash);
		if (target.position().top <= scroll_top && target.position().top + target.outerHeight(true) > scroll_top) {
			//alert(target.outerHeight(true));
			$(menu_selector + " a.active").removeClass("active");
			$(this).addClass("active");
		} else {
			$(this).removeClass("active");
		}
	});
});
function onScroll(){
	
}

$("#right-menu a").click(function(event) {
	$(menu_selector + " a.active").removeClass("active");
	$(this).addClass("active");
});
/*$(document).ready(function () {
	$(".main-content").on("scroll", onScroll);
	$("a[href^=\\#]").click(function(e){
		e.preventDefault();
		$(".main-content").off("scroll");
		$(menu_selector + " a.active").removeClass("active");
		$(this).addClass("active");
		var hash = $(this).attr("href");
		var target = $(hash);
		$(".main-content").animate({
		    scrollTop: target.offset().top
		}, 500, function(){
			window.location.hash = hash;
			$(".main-content").on("scroll", onScroll);
			$(".nano").nanoScroller({ scrollTo: $(this) });
		});
	});
}); */