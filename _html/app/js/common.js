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
			content: ["breadcrumbs", "close"],
			title: '<img src="img/logo-gray.svg" alt="Yan Nikolaev Logo in Menu"><p>Yan Nikolaev</p>'
		},
		navbars: [{
			"position": "bottom",
			"content": [
				"<a class='fa fa-envelope icon-email' href='#/'></a>",
				"<a class='fab fa-linkedin icon-linkedin' href='https://www.linkedin.com/in/yan-nikolaev-profile/' target='_blank'></a>",
				"<a class='fab fa-github icon-github' href='https://github.com/ynikolaev' target='_blank'></a>"
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
		setTimeout(() => {
			$icon.addClass("is-active");
		}, 50);
	});

	API.bind("close:start", () => {
		$("#header-social").fadeIn(1500);
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
			1100: {
				items: 3,
			}
		}
	}).on('changed.owl.carousel', function () {
		carouselService();
	});

	function carouselService() {
		$('.carousel-project-item').each(function () {
			var ths = $(this);
			var thsh = ths.find('.carousel-project-content').outerHeight();
			var windowH = $(window).height();
			var windowW = $(window).width();
			console.log('Content height: ' + thsh);
			console.log('Window height: ' + windowH);
			var imgH = windowH - thsh;
			if (windowW >= 800 && windowW <= 1100) {
				ths.css('padding-top', windowH/5);
				ths.find('.carousel-project-image').css('min-height', imgH/2);
				ths.find('.carousel-project-image').css('max-height', imgH/2);
				ths.find('.carousel-project-content').css('max-height', thsh);
			} else {
				ths.find('.carousel-project-image').css('min-height', imgH);
				ths.find('.carousel-project-image').css('max-height', imgH);
				ths.find('.carousel-project-content').css('max-height', thsh);
			}

		});
	}
	carouselService();

	$('.carousel-project-composition .h3').each(function () {
		let ths = $(this);
		ths.html(ths.html().replace(/(\S+)\s*$/, '<span>$1</span>'));
	});

});