$(function(){
	
	var show = function() {$('.header__menu').toggleClass('show');}

	$('body').on('click', '.header__hamburger', function(){
		$('.header__menu').slideToggle('slow', show);
		
	});

	
	$('body').on('click', '.menu-list_black', function(){
		if($(window).width() > 1200) {
			$('.header__menu').show();
		} else {
			$('.header__menu').hide();
			$('.header__menu').toggleClass('show');
		}
	});

	$(window).resize(function(){
		if($(window).width() > 1200) {		
		$('.header__menu').show();
		} else {
		$('.header__menu').hide();	
		};
	});

})