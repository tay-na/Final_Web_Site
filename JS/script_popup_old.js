$(function(){

	$('input[type="tel"]').inputmask('+7 (999) 999 99 99', {
    clearMaskOnLostFocus: true,
  	});

	$('.button-request').click(function(){
		$('.popup__container').show();
		$('.popup__window-request').show();
	});

	$('.popup__close').click(function(event){
		$(this).parent().hide();
		$('.popup__container').hide();
	})

	$('.button-call').click(function(){
		$('.popup__container').show();
		$('.popup__window-call').show();
	});

	$('.popup__form').submit(function(){
		var value = $(this).val();

			if($.trim($('.popup__form-input-name, .popup__form-input-phone, .popup__form-input-email').val()) == '') {
				$('.popup__form-field').addClass('popup__form-field_required');
				setTimeout(function(){
					$('.popup__form-field').removeClass('popup__form-field_required')
				}.bind(this),2000);
				event.preventDefault();
			}
	})

});