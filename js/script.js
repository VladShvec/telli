$(document).ready(function() {
	$('input,textarea').focus(function(){
	    $(this).data('placeholder',$(this).attr('placeholder'))
	    $(this).attr('placeholder','');
	});
	$('input,textarea').blur(function(){
	    $(this).attr('placeholder',$(this).data('placeholder'));
	});
	
	// вверх
	$(window).scroll(function() {
	    if($(this).scrollTop() != 0) {
		$('#to_top').fadeIn();
	    } else {
		$('#to_top').fadeOut();
	    }
	});
	$('#to_top').click(function() {
	    $('body,html').animate({scrollTop:0},800);
	});
	
	$(".scroll_bottom").on("click", function (event) {
	    event.preventDefault();
	    var id  = $(this).attr('href'),
		top = $(id).offset().top - 0;
	    $('body,html').animate({scrollTop: top}, 500);
	});

	// класс меню с подменю
	$('.main_menu > li').each(function(){
		var list = $(this).children('ul');

		if(list.length > 0){
			list.parent().addClass('submenu');
		};
	});
	$('.submenu > ul > li').each(function(){
		var list = $(this).children('ul');

		if(list.length > 0){
			list.parent().addClass('submenu2');
		};
	});
	$('.submenu2 > ul > li').each(function(){
		var list = $(this).children('ul');

		if(list.length > 0){
			list.parent().addClass('submenu3');
		};
	});
	// открытие подменю
	if ( window.innerWidth < 1451 ) {
	    $('.main_menu .submenu > a').on('click', function(e){
		    if( !$(this).parent().hasClass('show') ) {
			$(this).parent().addClass('show');  
			$(this).parent().children('ul').slideDown(500);
			e.preventDefault();
		    }
	    });
	};
	
	// закрытие подменю
	//$('body').click(function (event) {
	//    if ($(event.target).closest('.main_menu .submenu').length == 0 ) {
	//	$('.main_menu .submenu ul').slideUp(500);
	//	$('.main_menu .submenu').removeClass('show');
	//    }
	//});
	
	// показываем меню
	$('.menu_button').on('click', function(){
		$('.main_menu_wrap').addClass('show');
		$('.menu_close').addClass('show');
		//$('.main_menu').css('left', '50%');
	});

	// скрываем меню, удаляем классы активности, возвращаем меню на исходную
	$('').on('click', function(){
		$('.submenu.active').removeClass('show');
		$('.submenu').removeClass('show');
		//$('.main_menu').css('left', '100%');
		$(this).removeClass('show');
		setTimeout(function(){
			$('.main_menu_wrap').removeClass('show');
		}, 300);
	});
	
	
	
	$(window).resize(function(){
	        var width = $(window).width();
		if (width < 1020) {
			$('.main_menu').css("display", "none");
		}else{
			$('.main_menu').attr('style', '');
			$('.submenu ul').attr('style', '');
		}
	});
	
	$('.menu_button_mob').click(function(){
		if ($('.main_menu').css("display") == "block") {
		   $('.main_menu').slideUp(500);
		   $(this).removeClass('active');
		}else{
		   $('.main_menu').slideDown(500);
		   $(this).addClass('active');
		}
	});
	
	
	    if ( window.innerWidth>0 ) {
		    $('.main_section').toggleClass("hidden");
		    $('#index #header').addClass('hidden');
		    $('#main_slide').addClass('animated');
		    //$('#header').addClass('animated');
	    };
	    
	    setTimeout (function(){
		$('#index #header').addClass('animated');
		
		}, 1000); 
	
	
	
	$(window).on('load scroll', function(){
	    $('.main_section').each(function(){
		if ( $(this).offset().top < ($(document).scrollTop() + window.innerHeight*0.6 ) ) {
		    $(this).addClass('animated');
		}
		
	    });
	});
	
	    
	$(window).on('load scroll resize', function(){
		var height = $(window).height() - 100;
		if($(this).scrollTop() > height) {
		    $('#header').addClass('scroll');
		} else {
		    $('#header').removeClass('scroll');
		}
		
	var height_main_slide = $('#main_slide').height();
	$('#catalog').css('margin-top', height_main_slide);
	});
	 
	
	
	$('.tab_buttons .tab_but').on('click', function(){ 
		var tabs = $(this).parents('.tabs_container'),
		id = $('.tab_buttons .tab_but', tabs).index(this);
	    
		$(this).addClass('active').siblings().removeClass('active');
		$('.tab:eq(' + id + ')', tabs).addClass('active').siblings().removeClass('active');
	    
	});
	
	
	$( function() {
	    $( ".accordion" ).accordion({
	      heightStyle: "content",
	      collapsible: true,
	      active: false
	    });
	} );
	
	
	
	$('.timetable_slider').slick({
	    dots: true,
	    arrows: true,
	    infinite: true,
	    speed: 1000,
	    fade: true,
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    adaptiveHeight: true,
	    appendDots: '.timetable_slider_nav',
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    appendArrows: '.timetable_slider_nav',
	});
	
	
	$('.specialists_more').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: true,
	    fade: true,
	    //variableWidth: true,
	    //adaptiveHeight: true,
	    asNavFor: '.specialists_preview',
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	  });
	$('.specialists_preview').slick({
	    slidesToShow: 6,
	    slidesToScroll: 1,
	    arrows: false,
	    asNavFor: '.specialists_more',
	    dots: false,
	    //centerMode: true,
	    //vertical: true,
	    focusOnSelect: true,
	    responsive: [
		  {
		    breakpoint: 1021,
		    settings: {
		      slidesToShow: 3,
		    }
		  },
		  {
		    breakpoint: 600,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		  
		  {
		    breakpoint: 350,
		    settings: {
		      slidesToShow: 1,
		    }
		  },
		]
	});
	
	$('.recomm_more').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    infinite: true,
	    arrows: true,
	    fade: true,
	    //variableWidth: true,
	    //adaptiveHeight: true,
	    asNavFor: '.recomm_preview',
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    appendArrows: '.recomm_slider .slider_arrows',
	  });
	$('.recomm_preview').slick({
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    infinite: true,
	    arrows: false,
	    asNavFor: '.recomm_more',
	    dots: false,
	    centerMode: true,
	    focusOnSelect: true,
	    centerPadding: "200px",
	    //rtl: true,
	    responsive: [
		  {
		    breakpoint: 1021,
		    settings: {
		      slidesToShow: 3,
		    }
		  },
		  {
		    breakpoint: 600,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		  
		  {
		    breakpoint: 350,
		    settings: {
		      slidesToShow: 1,
		    }
		  },
		]
	});
	
	
	$('.content .specialists_slider').slick({
	    dots: false, //true,
	    arrows: true,
	    infinite: true,
	    speed: 1200,
	    slidesToShow: 3,
	    slidesToScroll: 1,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    appendArrows: '.specialists .slider_arrows ',
	    responsive: [
	      {
		breakpoint: 1001,
		settings: {
			slidesToShow: 1,
		}
	      }
	    ]
	});
	$('.partners_slider').slick({
	    dots: false, //true,
	    arrows: true,
	    infinite: true,
	    speed: 1200,
	    slidesToShow: 2,
	    slidesToScroll: 1,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    appendArrows: '.partners_slider_arrows ',
	    responsive: [
	      {
		breakpoint: 1021,
		settings: {
			slidesToShow: 1,
		}
	      }
	    ]
	});
	
	
	$('.sertificates_slider').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 1000,
		slidesToShow: 1,
		slidesToScroll: 1,
		fade: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
	});
	
	
	
	$('.galery .main_img').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
	    fade: true,
	    //variableWidth: true,
	    adaptiveHeight: true,
	    asNavFor: '.galery .small_images'
	  });
	  $('.galery .small_images').slick({
	    slidesToShow: 2,
	    slidesToScroll: 1,
	    arrows: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    asNavFor: '.galery .main_img',
	    dots: true,
	    //centerMode: true,
	    vertical: true,
	    focusOnSelect: true,
	    responsive: [
		  {
		    breakpoint: 1301,
		    settings: {
		      vertical: false,
		      slidesToShow: 2,
		    }
		  },
		  {
		    breakpoint: 350,
		    settings: {
		      slidesToShow: 2,
		      vertical: false,
		    }
		  },
		]
	    
	});
	  
	//$('.more_text_link').html('Показать полностью');

	$('.button_more').on('click', function(e){
	  e.preventDefault();
	  
	  var
	    $this = $(this),
	    content = $(this).parents('.partner').find('.hidden');  
	  
	  
	  if(!$this.hasClass('show')){
	    $this.addClass('show');
	    $this.html('Свернуть');
	    
	    content.slideDown();
	  } else {
	    $this.removeClass('show');
	    $this.html('Развернуть');
	    
	    content.slideUp();
	  }
	});
	  
	  
	  
	$('.products_images .main_img').slick({
	    slidesToShow: 1,
	    slidesToScroll: 1,
	    arrows: false,
	    fade: true,
	    //variableWidth: true,
	    adaptiveHeight: true,
	    asNavFor: '.products_images .small_images'
	  });
	$('.products_images .small_images').slick({
	    slidesToShow: 4,
	    slidesToScroll: 1,
	    arrows: false,
	    asNavFor: '.products_images .main_img',
	    dots: false,
	    //centerMode: true,
	    vertical: true,
	    focusOnSelect: true,
	    prevArrow: '<span class="slick-prev">&nbsp;</span>',
	    nextArrow: '<span class="slick-next">&nbsp;</span>',
	    responsive: [
		  {
		    breakpoint: 1021,
		    settings: {
		      vertical: false,
		      slidesToShow: 3,
		    }
		  },
		  {
		    breakpoint: 350,
		    settings: {
		      slidesToShow: 2,
		      vertical: false,
		    }
		  },
		]
	});
	  
	  
	$('.production.production_slider_inner').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 2000,
		slidesToShow: 3,
		slidesToScroll: 1,
		//centerMode: true,
		//variableWidth: true,
		prevArrow: '<span class="slick-prev">&nbsp;</span>',
		nextArrow: '<span class="slick-next">&nbsp;</span>',
		responsive: [
		  {
		    breakpoint: 1101,
		    settings: {
		      slidesToShow: 2,
		    }
		  },
		  {
		    breakpoint: 501,
		    settings: {
		      slidesToShow: 1,
		    }
		  },
		]
	});
	
	
	
	
    
});

