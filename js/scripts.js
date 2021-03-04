   // $('.multiple-items').slick({
   //    infinite: true,
   //    dots: true,
   //    slidesToShow: 3,
   //    slidesToScroll: 3
   //  });
$(document).ready(function() {
	$('.multiple-items').slick({
		infinite: true,
		slidesToShow: 3,
		slidesToScroll: 1,
		responsive: [
			{
			  breakpoint: 992,
			  settings: {
			    slidesToShow: 2,
			    slidesToScroll: 2,
			    infinite: true,
			    dots: false
			  }
			},
			{
			  breakpoint: 600,
			  settings: {
			    slidesToShow: 2,
			    slidesToScroll: 2
			  }
			},
			{
			  breakpoint: 480,
			  settings: {
			    slidesToShow: 1,
			    slidesToScroll: 1
			  }
			}
		]
	});
});