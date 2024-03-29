(function($) { "use strict";


	//Preloader

	$(window).on('load', function(e) { // makes sure the whole site is loaded
		$(".loader svg").fadeOut(); // will first fade out the loading animation
		$(".loader").delay(300).fadeOut("slow"); // will fade out the white DIV that covers the website.
	})

	//add class
    $('#navbarSupportedContent ul').find('li').each(function(i, ojb) {
        $(this).addClass('nav-item');
    });
    $('#navbarSupportedContent ul li').find('a').each(function(i, ojb) {
        $(this).addClass('nav-link');
    });
    $('#navbarSupportedContent ul li ul.sub-menu').find('a').each(function(i, ojb) {
        $(this).removeClass('nav-link');
    });
    $('#navbarSupportedContent ul li').find('ul.sub-menu').each(function(i, ojb) {
        $(this).addClass('background-white sub-shadow');
    });
	//Parallax & fade on scroll

	function scrollBanner() {
	  $(document).on('scroll', function(){
		var scrollPos = $(this).scrollTop();
		$('.parallax-fade-top').css({
		  'top' : (scrollPos/2)+'px',
		  'opacity' : 1-(scrollPos/450)
		});
	  });
	}
	scrollBanner();


	//Page Scroll to id

	$(window).on("load",function(){

		/* Page Scroll to id fn call */
		$(".navbar-nav li a,a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({
			highlightSelector:".navbar-nav li a",
			offset: 68,
			scrollSpeed:800
		});

		$(".header-btn a,a[href='#top'],a[data-gal='m_PageScroll2id']").mPageScroll2id({
			highlightSelector:".header-btn a",
			offset: 68,
			scrollSpeed:800
		});

		/* demo functions */
		$("a[rel='next']").click(function(e){
			e.preventDefault();
			var to=$(this).parent().parent("section").next().attr("id");
			$.mPageScroll2id("scrollTo",to);
		});

	});


	//parallax hover tilt effect

	$('.js-tilt').tilt({
		glare: false
	})


	/* Parallax effect */

	$(window).enllax();


	/* Scroll Animation */

	window.scrollReveal = new scrollReveal();


	$(document).ready(function() {


		//Scroll back to top

		var offset = 300;
		var duration = 400;
		jQuery(window).on('scroll', function() {
			if (jQuery(this).scrollTop() > offset) {
				jQuery('.scroll-to-top').fadeIn(duration);
			} else {
				jQuery('.scroll-to-top').fadeOut(duration);
			}
		});

		jQuery('.scroll-to-top').on('click', function(event) {
			event.preventDefault();
			jQuery('html, body').animate({scrollTop: 0}, duration);
			return false;
		})


		//Countdown

		//const second = 1000,
			//minute = second * 60,
			//hour = minute * 60,
			//day = hour * 24;
		//let countDown = new Date('July 10, 2018 13:00:00').getTime(),
			//x = setInterval(function() {
			//let now = new Date().getTime(),
				//distance = countDown - now;

			//document.getElementById('days').innerHTML = Math.floor(distance / (day)),
			//document.getElementById('hours').innerHTML = Math.floor((distance % (day)) / (hour)),
			//document.getElementById('minutes').innerHTML = Math.floor((distance % (hour)) / (minute)),
			//document.getElementById('seconds').innerHTML = Math.floor((distance % (minute)) / second);
		//}, second)


		/* Roadmap Carousel */

		$("#owl-roadmap").owlCarousel({
			items : 4,
			itemsDesktop : [1199,4],
			itemsDesktopSmall : [991,3],
			itemsTablet: [767,2],
			itemsMobile : [575,1],
			pagination : false,
			autoPlay : false,
			slideSpeed : 300
		});
		(function ($) {
			var owl = $("#owl-roadmap");
			owl.owlCarousel();

			// Custom Navigation Events
			$(".next-roadmap").click(function(){
				owl.trigger('owl.next');
			})
			$(".prev-roadmap").click(function(){
				owl.trigger('owl.prev');
			})
		} )(jQuery);	

	});




  })(jQuery);
