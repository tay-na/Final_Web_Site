$(function(){

	$('.examples__carousel').slick({
		dots: false,
		arrows: true,
		infinite: true,
		speed: 3000,
		slidesToShow: 3,
		slidesToScroll: 3,
		responsive: [
		    {
		      breakpoint: 1200,
		      settings: {
		        slidesToShow: 2,
		        slidesToScroll: 1,
		        infinite: true,
		        dots: true,
		        arrows: false
		      }
		    },
		    {
		      breakpoint: 992,
		      settings: {
		        slidesToShow: 1,
		        slidesToScroll: 1,
		        dots: true,
		        arrows: false
		      }
		    },
	  	]
	});
	
})