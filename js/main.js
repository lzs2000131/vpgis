;(function () {
	
	'use strict';

	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};

	// OffCanvass
	var offCanvass = function() {
		$('body').on('click', '.js-fh5co-nav-toggle', function(event){

			var $this = $(this);

			$('#fh5co-offcanvass').toggleClass('fh5co-awake');
			$('#fh5co-page, #fh5co-menu').toggleClass('fh5co-sleep');




			if ( $('#fh5co-offcanvass').hasClass('fh5co-awake') ) {
				$this.addClass('active');
			} else {
				$this.removeClass('active');
			}
			event.preventDefault();
			
		});
	};

	// Single Page Nav
	var clickMenu = function() {
		$('.nav-goto').click(function(){
			var section = $(this).data('nav-section')
		    $('html, body').animate({
		        scrollTop: $('[data-section="' + section + '"]').offset().top
		    }, 500);
		    return false;
		});
	};
	var popupWindow = function() {
		if($(window).width() < 800) {
			$('#mask-cover').hide();
			$('#popout-window').hide();
		}
		$('#mask-cover').unbind();
		$('.fh5co-feature.to-animate').unbind();
		$('.fh5co-feature.to-animate').click(function(e) {
				e.preventDefault();
			});
		if($(window).width() > 800) {
			$('#mask-cover').click(function() {
				$('#popout-window').removeClass('fadeInUp').addClass('zoomOut');
				$('#mask-cover').hide();
				$('#popout-window').show();
				setTimeout(function() {
					$('#popout-window').hide();
					$('#popout-window img').removeAttr('src');
				},350);
			})
			$('.fh5co-feature.to-animate').click(function() {
				var index = $('.fh5co-feature.to-animate').index(this);
				$('#popout-window img').attr('src', 'images/zhihuishuiwu' + index + '.jpg');
				$('#popout-window').removeClass('zoomOut').addClass('fadeInUp');
				$('#mask-cover').show();
				$('#popout-window').show();
			});
			$('.fh5co-text.to-animate').click(function() {
				var index = $('.fh5co-text.to-animate').index(this);
				$('#popout-window img').attr('src', 'images/haimianchengshi' + index + '.jpg');
				$('#popout-window').removeClass('zoomOut').addClass('fadeInUp');
				$('#mask-cover').show();
				$('#popout-window').show();
			});
			$('.fh5co-text.animate-object').click(function() {
				var index = $('.fh5co-text.animate-object').index(this);
				$('#popout-window img').attr('src', 'images/zhihuiyuye' + index + '.jpg');
				$('#popout-window').removeClass('zoomOut').addClass('fadeInUp');
				$('#mask-cover').show();
				$('#popout-window').show();
			});
		}
	}
	var footerClick = function() {
		popupWindow();
		$(window).resize(function() {
			popupWindow();
		});
		$('#footer-detail div').hide();
		$('#footer-detail div:first').show();
		$('.footer-bar').click(function(e) {
			e.preventDefault();
			var section = $(this).data('footer-content');
			$('#footer-detail div').hide();
			$('[data-section="' + section + '"]').show();
			return false;
		})
	}




	var footerFixed = function() {
		var fh = $('#fh5co-footer').innerHeight();
		$('#fh5co-wrap').css({
			marginBottom : fh + 'px'
		});

		if ( $(window).width() < 991 ) {
			$('#fh5co-wrap').css({
				marginBottom: ''
			})
		}

		$(window).resize(function(){

			var fh = $('#fh5co-footer').innerHeight();
			$('#fh5co-wrap').css({
				marginBottom : fh + 'px'
			});

			if ( $(window).width() < 991 ) {
				$('#fh5co-wrap').css({
					marginBottom: ''
				})
			}
		});
	};

	// Counter 
	var counter = function() {
		$('.js-counter').countTo({
			formatter: function (value, options) {
		      	return value.toFixed(options.decimals);
		    },
		});
	};



	// Click outside of offcanvass
	var mobileMenuOutsideClick = function() {
		$(document).click(function (e) {
	    var container = $("#fh5co-offcanvass, .js-fh5co-nav-toggle");
	    if (!container.is(e.target) && container.has(e.target).length === 0) {
	    	if ( $('#fh5co-offcanvass').hasClass('fh5co-awake') ) {
	    		$('#fh5co-offcanvass').removeClass('fh5co-awake');
	    		$('#fh5co-page, #fh5co-menu').removeClass('fh5co-sleep');

	    		$('.js-fh5co-nav-toggle').removeClass('active');
	    	}
	    }
		});

		$(window).scroll(function(){
			var $menu = $('#fh5co-menu');
			if ( $(window).scrollTop() > 150 ) {
				$menu.addClass('sleep');
			}

			if ( $(window).scrollTop() < 500 ) {
				$menu.removeClass('sleep');
				$('#fh5co-offcanvass ul li').removeClass('active');
				$('#fh5co-offcanvass ul li').first().addClass('active');
			}
		

			if ( $(window).scrollTop() > 500 ) {
				if ( $('#fh5co-offcanvass').hasClass('fh5co-awake') ) {
		    		$('#fh5co-offcanvass').removeClass('fh5co-awake');
		    		$('#fh5co-page, #fh5co-menu').removeClass('fh5co-sleep');

		    		$('.js-fh5co-nav-toggle').removeClass('active');
		    	}
	    	}
		});
	};




	// Scroll Animations

	// Intro Animate
	var introWayPoint = function() {
		if ( $('#fh5co-hero').length > 0 ) {
			$('#fh5co-hero').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
					setTimeout(function(){
						$('.intro-animate-1').addClass('fadeInUp animated');
					}, 100);
					setTimeout(function(){
						$('.intro-animate-2').addClass('fadeInUp animated');
					}, 400);
					setTimeout(function(){
						$('.intro-animate-3').addClass('fadeInUp animated');
						$('.intro-animate-4').addClass('fadeInUp animated');
					}, 700);
					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '75%' } );
		}
	};

	var HeaderToggle = function() {

		var $this = $( '#fh5co-main' );
			

		$this.waypoint(function(direction) {
			
			if( direction === 'down' ) {
				$('body').addClass('scrolled');
			}
			else if( direction === 'up' ){
				$('body').removeClass('scrolled');
			}			
		
		}, { offset: '-1px' } );
		
	};




	// Features Animate
	var featuresAnimate = function() {
		if ( $('#fh5co-features').length > 0 ) {	
			$('#fh5co-features .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};
	var featuresWayPoint = function() {
		if ( $('#fh5co-features').length > 0 ) {
			$('#fh5co-features').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
				
					setTimeout(featuresAnimate, 100);
					
					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '75%' } );
		}
	};


	// Features 2 Animate
	var features2AnimateTitle = function() {
		if ( $('#fh5co-features-2').length > 0 ) {	
			$('#fh5co-features-2 .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeIn animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};
	var features2WayPoint = function() {
		if ( $('#fh5co-features-2').length > 0 ) {
			$('#fh5co-features-2').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
				
					setTimeout(features2AnimateTitle, 100);

					setTimeout(function(){
						$('.features-2-animate-2').addClass('fadeInUp animated');
					}, 800);

					setTimeout(function(){
						$('.features-2-animate-3').addClass('fadeInRight animated');
						$('.features-2-animate-5').addClass('fadeInLeft animated');
					}, 1200);
					setTimeout(function(){
						$('.features-2-animate-4').addClass('fadeInRight animated');
						$('.features-2-animate-6').addClass('fadeInLeft animated');
					}, 1400);
					
					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '75%' } );
		}
	};


	

	// Features 3 Animate
	var features3Animate = function() {
		if ( $('#fh5co-features-3').length > 0 ) {	
			$('#fh5co-features-3 .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};
	var features3WayPoint = function() {
		if ( $('#fh5co-features-3').length > 0 ) {
			$('#fh5co-features-3').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
				
					

					setTimeout(function(){
						$('.features3-animate-1').addClass('fadeIn animated');
					}, 200);

					setTimeout(function(){
						$('.features3-animate-2').addClass('fadeIn animated');
					}, 400);

					setTimeout(features3Animate, 800);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '75%' } );
		}
	};


	// Features 4 Animate
	var features4Animate = function() {
		if ( $('#fh5co-features-4').length > 0 ) {	
			$('#fh5co-features-4 .to-animate').each(function( k ) {
				
				var el = $(this);
				
				setTimeout ( function () {
					el.addClass('fadeInUp animated');
				},  k * 200, 'easeInOutExpo' );
				
			});
		}
	};
	var features4WayPoint = function() {
		if ( $('#fh5co-features-4').length > 0 ) {
			$('#fh5co-features-4').waypoint( function( direction ) {
										
				if( direction === 'down' && !$(this).hasClass('animated') ) {
					
				
					

					setTimeout(function(){
						$('.features4-animate-1').addClass('fadeIn animated');
					}, 200);

					setTimeout(function(){
						$('.features4-animate-2').addClass('fadeIn animated');
					}, 400);

					setTimeout(features4Animate, 800);

					
					$(this.element).addClass('animated');
						
				}
			} , { offset: '75%' } );
		}
	};

	// Reflect scrolling in navigation
	var navActive = function(section) {
		var el = $('#fh5co-offcanvass > ul');
		el.find('li').removeClass('active');
		el.each(function(){
			$(this).find('a[data-nav-section="'+section+'"]').closest('li').addClass('active');
		});
	};
	var navigationSection = function() {

		var $section = $('div[data-section]');
		
		$section.waypoint(function(direction) {
		  	if (direction === 'down') {
		    	navActive($(this.element).data('section'));
		    
		  	}
		}, {
		  	offset: '150px'
		});

		$section.waypoint(function(direction) {
		  	if (direction === 'up') {
		    	navActive($(this.element).data('section'));
		  	}
		}, {
		  	offset: function() { return -$(this.element).height() + 155; }
		});

	};

	
	

	

	// Document on load.
	$(function(){

		offCanvass();
		mobileMenuOutsideClick();
		footerFixed();
		clickMenu();
		footerClick();
		HeaderToggle();

		// Animations
		introWayPoint();
		featuresWayPoint();
		features2WayPoint();
		features3WayPoint();
		features4WayPoint();
		navigationSection();

	});


}());