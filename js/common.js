(function ($) {
	$(document).ready(function () {


		if ($(document).innerWidth() < 1200) {
			$('.header__menu-top').hide();
			$(document).on('click', '#header .burger', function () {
				if (!$(this).hasClass('active')) {
					$('#header .header__menu-top').slideDown();
					$(this).addClass('active');
				} else {
					$('#header .header__menu-top').slideUp();
					$(this).removeClass('active');
				}
			});
		}

		$('input[type="tel"]').inputmask({
			mask: "+7 (999) 999-99-99",
			greedy: false
		});

		$(document).on('click', '.anchor', function (e) {
			var fixed_offset = 50;
			$('html, body').stop().animate({
				scrollTop: $(this.hash).offset().top - fixed_offset
			}, 500);
			e.preventDefault();
		});

		$('.popup-link').magnificPopup({
			type: 'inline',
			focus: 'input',
			showCloseBtn: true,
			alignTop: true,
			fixedContentPos: true
		});

		$('.popup-video').magnificPopup({
			type: 'iframe'
		});

		$(document).on('click', '.header__top .lang', function () {
			$(this).find('.lang-list').slideToggle();
		});

		$('.header__slider').slick({
			dots: false,
			arrows: true,
			infinite: true,
			speed: 900,
			autoplay: true,
			wirableWidth: true,
			autoplaySpeed: 5000,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: $('#header .btn_prev'),
			nextArrow: $('#header .btn_next'),
			responsive: [{
				breakpoint: 1025,
				settings: {
					arrows: false
				}
			}]
		});
		
		
		$('.system .slider').slick({
			dots: false,
			arrows: true,
			infinite: false,
			slidesToShow: 1,
			slidesToScroll: 1,
			prevArrow: $('.system .arrow_prev'),
			nextArrow: $('.system .arrow_next')
		});

		var systemSlideCount = $('.system .slider').slick("getSlick").slideCount;
		var progressPart = -330 / systemSlideCount;
		$('.system .progress-line circle').css('stroke-dashoffset', -330 - progressPart); // начальное положение
		$('.system .arrow_prev').on('click', function() {
			var currProgress = parseInt($('.system .progress-line circle').css('stroke-dashoffset').replace('px', ''));
			$('.system .progress-line circle').css('stroke-dashoffset', currProgress + progressPart);
		});
		$('.system .arrow_next').on('click', function() {
			var currProgress = parseInt($('.system .progress-line circle').css('stroke-dashoffset').replace('px', ''));
			$('.system .progress-line circle').css('stroke-dashoffset', currProgress - progressPart);
		});

		// $('.system .slider').on('afterChange', function () {
		// 	var currProgress = $('.system .progress-line circle').css('stroke-dashoffset');
		// 	currProgress = currProgress.replace('px', ' ');
		// 	var finalNum = currProgress - progressPart;
		// 	console.log(finalNum);
		// 	$('.system .progress-line circle').css('stroke-dashoffset', finalNum);
		// });

		// Productions Slider
		$('.product__slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: true,
			fade: true,
			wirableWidth: true,
			prevArrow: '<div class="btn_slick2 btn_prev2"></div>',
			nextArrow: '<div class="btn_slick2 btn_next2"></div>',
			asNavFor: '.product__subslider'
		});
		$('.product__subslider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			asNavFor: '.product__slider',
			dots: false,
			variableWidth: true,
			arrows: false,
			centerMode: false,
			focusOnSelect: true
		});

		$('.slider__items').slick({
			dots: false,
			arrows: true,
			prevArrow: '<div class="btn_slick btn_slick3 btn_prev4 btn_prev4"></div>',
			nextArrow: '<div class="btn_slick btn_slick3 btn_next4 btn_next4"></div>',
			wirableWidth: true,
			slidesToShow: 1,
			slidesToScroll: 1,
			responsive: [{
				breakpoint: 1025,
				settings: {
					arrows: false,
				}
			}]
		});

		// Секция Отзыв
		$('.review-second__slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			arrows: false,
			wirableWidth: true,
			asNavFor: '.review-all__slider'
		});
		$('.review-all__slider').slick({
			slidesToShow: 4,
			slidesToScroll: 1,
			asNavFor: '.review-second__slider',
			dots: false,
			arrows: true,
			prevArrow: $('#review .btn_prev'),
			nextArrow: $('#review .btn_next'),
			focusOnSelect: true,
			responsive: [{
				breakpoint: 1550,
				settings: {
					slidesToShow: 3,
				}
			}, {
				breakpoint: 700,
				settings: {
					slidesToShow: 2,
				}
			}]
		});

		// Секция Page Slider
		$('.page__slider').slick({
			slidesToShow: 1,
			slidesToScroll: 1,
			fade: true,
			arrows: false,
			wirableWidth: true,
			asNavFor: '.page__subslider',
		});
		$('.page__subslider').slick({
			slidesToShow: 3,
			slidesToScroll: 1,
			asNavFor: '.page__slider',
			dots: false,
			wirableWidth: true,
			arrows: true,
			prevArrow: '<div class="btn_slick btn_slick5 btn_prev btn_prev5"></div>',
			nextArrow: '<div class="btn_slick btn_slick5 btn_next btn_next5"></div>',
			centerMode: true,
			focusOnSelect: true,
			responsive: [{
					breakpoint: 1284,
					settings: {
						arrows: false,
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 1024,
					settings: {
						arrows: false,
						slidesToShow: 2,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 768,
					settings: {
						arrows: false,
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				},
				{
					breakpoint: 425,
					settings: {
						arrows: false,
						slidesToShow: 1,
						slidesToScroll: 1,
					}
				}
			]
		});


		// Initialize and add the map
		function initMap() {
			// The location
			const centerMap = {
				lat: 46.477946,
				lng: 30.745294
			};
			// The map
			const map = new google.maps.Map(document.getElementById("map"), {
				zoom: 18,
				center: centerMap,
			});
			// The marker
			var marker = new google.maps.Marker({
				position: {
					lat: 46.477946,
					lng: 30.745294
				},
				map: map
			});
		}

		if ($('#map').length) {
			initMap();
		}

		var $grid = $('.review__content');
		$grid.masonry({
			// options...
		});

	});
})(jQuery);

// Header Slick

(function ($) {
	$('.header__slider').on('afterChange', function (event, slick, nextSlide) {
		$('.slider-count').find($('.slider-count__current').text(PrependZeros(nextSlide + 1, 2)));
	});
	$('.header__slider').on('init, afterChange', function (event, slick) {
		$('.slider-count').find($('.slider-count__all').text(PrependZeros(slick.slideCount, 2)));
	});

	$('.product__slider').on('afterChange', function (event, slick, nextSlide) {
		$('.product_slider-count').find($('.slider-count__current2').text(PrependZeros(nextSlide + 1, 2)));
	});
	$('.product__slider').on('init, afterChange', function (event, slick) {
		$('.product_slider-count').find($('.slider-count__all2').text(PrependZeros(slick.slideCount, 2)));
	});

	$('.slider__items').on('afterChange', function (event, slick, nextSlide) {
		$('.slider_slider-count').find($('.slider-count__current4').text(PrependZeros(nextSlide + 1, 2)));
	});
	$('.slider__items').on('init, afterChange', function (event, slick) {
		$('.slider_slider-count').find($('.slider-count__all4').text(PrependZeros(slick.slideCount, 2)));
	});

	$('.review-second__slider').on('afterChange', function (event, slick, nextSlide) {
		$('.review_slider-count').find($('.slider-count__current3').text(PrependZeros(nextSlide + 1, 2)));
	});
	$('.review-second__slider').on('init, afterChange', function (event, slick) {
		$('.review_slider-count').find($('.slider-count__all3').text(PrependZeros(slick.slideCount, 2)));
	});

	// Отображения номеров слайдов с ноликами для главного слайдера 
	var PrependZeros = function (str, len, seperator) {
		if (typeof str === 'number' || Number(str)) {
			str = str.toString();
			return ((len - str.length) > 0) ? new Array(len + 1 - str.length).join('0') + str : str;
		} else {
			var spl = str.split(seperator || ' ');
			for (var i = 0; i < spl.length; i++) {
				if (Number(spl[i]) && spl[i].length < len) {
					spl[i] = PrependZeros(spl[i], len);
				}
			}
			return spl.join(seperator || ' ');
		}
	};
	$('.header__slider').on('init', function (event, slick) {
		$('.slider-count').find($('.slider-count__all').text(PrependZeros(slick.slideCount, 2)));
	});

	$('.system .slider').on('afterChange', function (event, slick, nextSlide) {
		$('.system .counter__curr').text(PrependZeros(nextSlide + 1, 2));
	});
	$('.system .slider').on('init', function (event, slick) {
		$('.system .counter__all').text(PrependZeros(slick.slideCount, 2));
	});

	$('.product__slider').on('init', function (event, slick) {
		$('.product_slider-count').find($('.slider-count__all2').text(PrependZeros(slick.slideCount, 2)));
	});

	$('.slider__items').on('init', function (event, slick) {
		$('.slider_slider-count').find($('.slider-count__all4').text(PrependZeros(slick.slideCount, 2)));
	});

	$('.review-second__slider').on('init', function (event, slick) {
		$('.review_slider-count').find($('.slider-count__all3').text(PrependZeros(slick.slideCount, 2)));
	});

	// Filter

	$('.portfolio__filter li').each(function (e) {
		if ($(this).find('.portfolio__filter-link').data('img') == 'shop') {
			$(this).find('.portfolio__filter-link').addClass('active');
		}
	});

	$('.filter .portfolio__items .portfolio__items-item').each(function () {
		if ($(this).data('img') == 'shop') {
			$(this).addClass('active');
		}
	});

	$('.portfolio__filter .portfolio__filter-link').on('click', function (e) {
		e.preventDefault();
		var img = $(this).data('img');

		if ($('.more .portfolio__more').hasClass('active')) {
			$('.more .portfolio__more').text('Посмотреть больше работ');
			$('.more .portfolio__more').removeClass('active');
		}


		$('.portfolio__filter .portfolio__filter-link').removeClass('active');
		$(this).addClass('active');
		$('.filter .portfolio__items .portfolio__items-item').each(function () {
			if ($(this).data('img') == img) {
				$(this).addClass('active');
			} else {
				$(this).removeClass('active');
			}
		});

	});
	$('.more .portfolio__more').on('click', function (e) {
		e.preventDefault();
		$(this).toggleClass('active');
		if ($(this).hasClass('active')) {
			$(this).text('Скрыть');
			$('.filter .portfolio__items .portfolio__items-item').addClass('active');
		} else {
			$(this).text('Посмотреть больше работ');
			$('.filter .portfolio__items .portfolio__items-item').each(function () {
				if ($(this).data('img') != 'shop') {
					$(this).removeClass('active');
				}
			});
		}
	});


	//Service

	$('.service__items .service__items-item').each(function () {
		if ($(this).find('.service__items-item').data('img') == 'img') {
			$(this).find('.service__items-item').addClass('active');
		}
	});

	$('.service__items .service__items-item--box').each(function () {
		if ($(this).data('img') == 'img') {
			$(this).addClass('active-box');
		}
	});

	$('.service__items .service__items-item').on('click', function (e) {
		e.preventDefault();
		var img = $(this).data('img');

		$('.service__items .service__items-item').removeClass('active');
		$(this).addClass('active');
		$('.service__items .service__items-item--box').each(function () {
			if ($(this).data('img') == img) {
				$(this).addClass('active-box');
			} else {
				$(this).removeClass('active-box');
			}
		});
	});

})(jQuery);



// $(document).ready(function () {
// 	$('#review__content').masonry({
// 		// указываем элемент-контейнер в котором расположены блоки для динамической верстки
// 		itemSelector: '.review__content-box',
// 		// указываем класс элемента являющегося блоком в нашей сетке
// 		singleMode: false,
// 		// true - если у вас все блоки одинаковой ширины
// 		isResizable: true,
// 		// перестраивает блоки при изменении размеров окна
// 		isAnimated: true,
// 		// анимируем перестроение блоков
// 		animationOptions: {
// 			queue: false,
// 			duration: 500
// 		}
// 		// опции анимации - очередь и продолжительность анимации
// 	});
// });