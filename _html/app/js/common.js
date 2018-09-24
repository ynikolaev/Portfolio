$(function () {
	//MMENU PLUGIN
	let $menu = $('#my-menu').mmenu({
		"pageScroll": true,
		//plugin parameters
		extensions: {
			"all": ["theme-dark",
				'shadow-page',
				'position-right',
				'pagedim-black',
				'border-offset',
				'fx-menu-fade',
				'fx-listitems-drop',
				'fx-panels-zoom'
			],
			"(max-width: 576px)": ["listview-justify"]
		},
		navbar: {
			title: '<img src="img/logo-gray.svg" alt="Yan Nikolaev Logo in Menu"><p>Yan Nikolaev</p>'
		},
		navbars: [{
			"position": "bottom",
			"content": [
				"<h1 class='h1'><i class='far fa-copyright'></i> 2018</h1>"
			]
		}]

	});

	let $icon = $("#my-icon");
	let API = $menu.data("mmenu");

	$icon.on("click", () => {
		API.open();
	});

	API.bind("open:start", () => {
		//$("#header-social").fadeTo("slow", 0.1);
		$("#header-social").fadeOut(50);
		$("#header-mob-social").fadeOut(50);
		setTimeout(() => {
			$icon.addClass("is-active");
		}, 50);
	});

	API.bind("close:start", () => {
		$("#header-social").fadeIn(100);
		$("#header-mob-social").fadeIn(100);
		setTimeout(() => {
			$icon.removeClass("is-active");
		}, 50);
	});

	//OWL CAROUSEL PLUGIN
	$(".owl-carousel").on('initialized.owl.carousel', function () {
		setTimeout(function () {
			carouselService();
		}, 100);
	});

	$(".owl-carousel").owlCarousel({
		//loop: true,
		nav: true,
		smartSpeed: 700,
		navText: ['<i class="far fa-arrow-alt-circle-left"></i>', '<i class="far fa-arrow-alt-circle-right"></i>'],
		responsiveClass: true,
		dots: false,
		responsive: {
			0: {
				items: 1
			},
			800: {
				items: 2
			},
			1025: {
				items: 3,
			}
		}
	}).on('changed.owl.carousel', function () {
		carouselService();
	});

	function carouselService() {
		$('.carousel-project-item').each(function () {
			var owlH = $('.owl-item').outerHeight();
			var ths = $(this);
			var thsh = ths.find('.carousel-project-content').outerHeight();
			var primW = ths.find('.carousel-project-image').outerWidth();
			var windowH = $(window).height();
			var windowW = $(window).width();
			console.log('Current width: ' + windowW);
			console.log('Current height: ' + windowH);
			console.log('Content height: ' + thsh);
			console.log('Window height: ' + windowH);
			console.log('OWL height: ' + owlH);
			var imgH = windowH - thsh;
			console.log('Image height: ' + imgH);
			//ths.find('.carousel-project-content').css('height', owlH / 2);
			//ths.find('.carousel-project-image').css('min-height', owlH / 2);
			//ths.find('.carousel-project-image').css('max-height', owlH / 2);
			//ths.find('.carousel-project-image img').css('max-height', owlH / 4);
		});
	}
	carouselService();

	$('.carousel-project-composition .h3').each(function () {
		let ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});

});