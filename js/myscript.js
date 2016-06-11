$(document).ready(function() {
	$('.item').click(function() {
		$('.item').removeClass('active');
		$(this).addClass('active');
	});
	
	$('#contact').click(function() {
		$(this).removeClass('.item');
	});
	
	$("#products").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".products.info").offset().top
	    }, 700);
	});	
	$("#about").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".about.info").offset().top
	    }, 700);
	});	
	$("#contact").click(function() {
	    $('html, body').animate({
	        scrollTop: $(".contact.info").offset().top
	    }, 700);
	});		
	$("#logo").click(function() {
		$('html, body').animate({
			scrollTop: $(".masthead").offset().top
		}, 700);
	});	
	$(".down_arrow").click(function() {
		$('html, body').animate({
			scrollTop: $(".products.info").offset().top 
		}, 700);
	});
	//Contact form variables
	$('#send').click(function() {
		var name, email, message;
		name = $('#name').val();
		email = $('#email').val();
		message = $('#message').val();
		$.post("../phpmail/mail.php", name, email, message);
	});
	//Navbar effects
	$(window).scroll(function() {
	  if ($(this).scrollTop() > 600) {
	  	$('#navbar').addClass('large inverted');
	  	$('#logo').innerHTML = 'Ople';
	  }
	  else {
	    $('#navbar').removeClass('large inverted');
	  }
	});	
});
//Javascript


