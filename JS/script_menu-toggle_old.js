$(function(){
	
	var show = function() {$('.header__menu').toggleClass('show');}

	$('body').on('click', '.button-menu-toggler', function(){
		$('.header__menu').slideToggle('slow', show);
		
	});

	$('body').on('click', '.header__menu-list-item', function(){
		$('.header__menu-list').hide();
		$('.header__menu-list').toggleClass('show');
	});

})