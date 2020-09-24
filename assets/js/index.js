// js code
function init() {
	// console.log('HTML Boilerplate');
	$('.mobile-nav-Cta').on('click', function(e){
		$(this).toggleClass('active');
		$('.menu').stop().slideToggle(500);
		$('.menu ul ul').slideUp();
		$('.menu .fa-angle-down.active').removeClass('active');
	});
	$('.menu .fa-angle-down').on('click', function(e){
		
		$('.menu .fa-angle-down.active').removeClass('active');
		$('.menu ul ul').slideUp();

		$(this).addClass('active');
		$(this).next('ul').stop().slideDown();
	});

	//Slider
	var saleslider = new Swiper('#sale-slider', {
		pagination: {
		  el: '.swiper-pagination-box-3',
		  clickable: true
		},
	});

	var testimonial = new Swiper('#testimonial', {
		spaceBetween: 30,
		effect: 'fade',
		fadeEffect: {
			crossFade: true
		},
		pagination: {
			el: '.swiper-pagination',
			clickable: true,
		},
	});

	var featureproduct = new Swiper('#featureproduct', {
		slidesPerView: 1,
		spaceBetween: 0,
		navigation: {
			nextEl: '.fp-swiper-button-next',
			prevEl: '.fp-swiper-button-prev',
		},
		breakpoints: {
			760: {
				slidesPerView: 2,
				spaceBetween: 25,
			},
			1000: {
				slidesPerView: 3,
				spaceBetween: 25,
			},
		}
	});
}

window.addEventListener('DOMContentLoaded', function(e) {
	init();
});
  