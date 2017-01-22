/*---For active menu item---*/
$(function () {
	$('.overlay-menu .desctop li a').each(function () {
		var location = window.location.pathname;
		var link = this.pathname;
		var result = location.match(link);
		if(result && link.length > 0) {
			$(this).addClass('overlay-menu-item-active');
		}
	});
});
/*--------------------------*/
$(function () {
	$('.more-menu .submenu .submenu-list li a').each(function () {
		var location = window.location.pathname;
		var link = this.pathname;
		var result = location.match(link);
		if(result && link.length > 0) {
			$(this).addClass('submenu-item-active');
		}
	});
});
/*--------------------------*/
$(function () {
	$('.navigations-menu-block ul li a').each(function () {
		var location = window.location.pathname;
		var link = this.pathname;
		var result = location.match(link);
		if(result && link.length > 0) {
			$(this).addClass('menu-item-active');
		}
	});
});
/*--------------------------*/

// DESCTOP MENU
$('#toggle').click(function() {
	$(this).toggleClass('active');
	$('#overlay').toggleClass('open');
	$('#toggle').parents('.inside-page-header').css('padding: 0;')
});


// SLIDER
$(document).ready(function() {

	$('.special-offers-slider').slick({
		autoplay: false,
		autoplaySpeed: 3000,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '20px',
		variableWidth: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '20px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '20px',
				slidesToShow: 1
			}
		}
		]
	});

	/*About page slider*/
	$('.about-slider').slick({
		autoplay: false,
		autoplaySpeed: 3000,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '0',
		nextArrow: '<div class="next-btn"><img src="images/more-next.png" alt="more prev"></div>',
		prevArrow: '<div class="prev-btn"><img src="images/more-prev.png" alt="more next"></div>'
	});

	$('.related-product-slider').slick({
		autoplay: false,
		autoplaySpeed: 3000,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		centerPadding: '20px',
		variableWidth: true,
		responsive: [
		{
			breakpoint: 768,
			settings: {
				arrows: false,
				centerMode: true,
				centerPadding: '20px',
				slidesToShow: 1
			}
		},
		{
			breakpoint: 480,
			settings: {
				arrows: true,
				centerMode: true,
				centerPadding: '20px',
				slidesToShow: 1
			}
		}
		]
	});

});


/*for click on more button in menu*/
$(document).ready(function () {
	$(".more-menu").click(function() {

		$(this).find(".submenu").toggleClass("visible");

		$(this).toggleClass("active-toggle");


		if($(".more-menu").find(".icon-more .fa").hasClass("fa-angle-right") ){

			$(".icon-more .fa").removeClass('fa-angle-right').addClass('fa-angle-down');

		}
		else {

			$(".icon-more .fa").removeClass('fa-angle-down').addClass('fa-angle-right');

		}

		$(".icon-more .fa").parent(".icon-more").toggleClass("more-active");

	});
});

// counter on page product
$(document).ready(function() {
	$('.minus').click(function () {
		var $input = $(this).parent().find('input');
		var count = parseInt($input.val()) - 1;
		count = count < 1 ? 1 : count;
		$input.val(count);
		$input.change();
		return false;
	});
	$('.plus').click(function () {
		var $input = $(this).parent().find('input');
		$input.val(parseInt($input.val()) + 1);
		$input.change();
		return false;
	});
});
// FOR DROPDOWN ACTIVE
$(document).ready(function($) {
	$('.ui.dropdown').dropdown();
}); 
$(document).ready(function($) {	
	$("#add-category").click(function () {
		$(".choose-category-block").append('<div class="ui compact selection dropdown" tabindex="0"><i class="dropdown icon"></i><div class="text">Choose Category</div><div class="menu"><div class="item">Dresses</div><div class="item">Jackets</div><div class="item">Jeans</div><div class="item">Shirts</div></div></div>');
	});
}); 