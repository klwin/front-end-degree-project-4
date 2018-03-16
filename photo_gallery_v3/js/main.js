lightbox.option({
      'showImageNumberLabel': false,
      'alwaysShowNavOnTouchDevices': true
});


$("input[type='search']").on('keyup',function() {
	var keyword = $(this).val().toLowerCase();
	//add hide class to gallery when keydown
	var $images = $('.image-gallery div');
	$images.addClass('hide');
	//go through figcaption and match keyword, if same, remove hide class
	$('figcaption').each(function() {
		const caption = $(this).text();
		if(caption.indexOf(keyword) >= 0) {
			$(this).parent().parent().removeClass('hide').css("margin", "10px");
		}
	});
});






