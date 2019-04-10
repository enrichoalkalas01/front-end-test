$(document).ready(function(){
	i = 0;

	$('.btn-next').click(function(){
		i = ( i <= 100 ) ? ( i + 100 ) : 0;

		$('.img-banner').css('left', - i + "%");

		console.log($('.img-banner').attr('style'));
		
		if ( i == 0 ) {
			$('.box-banner ul li:nth-child(1)').css('background-color', '#fff');
			$('.box-banner ul li:nth-child(2)').css('background-color', '#f1f2f6');
			$('.box-banner ul li:nth-child(3)').css('background-color', '#f1f2f6');
		} else if ( i == 100 ) {
			$('.box-banner ul li:nth-child(2)').css('background-color', '#fff');
			$('.box-banner ul li:nth-child(1)').css('background-color', '#f1f2f6');
			$('.box-banner ul li:nth-child(3)').css('background-color', '#f1f2f6');		
		} else {
			$('.box-banner ul li:nth-child(3)').css('background-color', '#fff');
			$('.box-banner ul li:nth-child(1)').css('background-color', '#f1f2f6');
			$('.box-banner ul li:nth-child(2)').css('background-color', '#f1f2f6');
		}
		
	});

	$('.btn-prev').click(function(){
		i = ( i >= 100 ) ? ( i - 100 ) : 200;

		$('.img-banner').css('left', - i + "%");
		
		console.log($('.img-banner').attr('style'));

		if ( i == 200 ) {
			$('.box-banner ul li:nth-child(3)').css('background-color', '#fff');
			$('.box-banner ul li:nth-child(2)').css('background-color', '#f1f2f6');
			$('.box-banner ul li:nth-child(1)').css('background-color', '#f1f2f6');
		} else if ( i == 100 ) {
			$('.box-banner ul li:nth-child(2)').css('background-color', '#fff');
			$('.box-banner ul li:nth-child(1)').css('background-color', '#f1f2f6');
			$('.box-banner ul li:nth-child(3)').css('background-color', '#f1f2f6');		
		} else {
			$('.box-banner ul li:nth-child(1)').css('background-color', '#fff');
			$('.box-banner ul li:nth-child(3)').css('background-color', '#f1f2f6');
			$('.box-banner ul li:nth-child(2)').css('background-color', '#f1f2f6');
		}
	});

	let nodeImgs = document.querySelectorAll('.img-banner img');

	console.log(nodeImgs);
});