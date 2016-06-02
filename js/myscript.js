$('.item').click(function() {
	$('.item').removeClass('active');
	$(this).addClass('active');
});

$('#contact').click(function() {
	$(this).removeClass('.item');
});

