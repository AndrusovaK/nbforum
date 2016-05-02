$(function(){

	// Показ всех спикеров
	$("#all-speakers").on('click', function (e) {
		e.preventDefault();
		var hiddenSpeakers = $('.speakers--hidden'),
			showSpeakers = $(this);
		hiddenSpeakers.slideToggle(400, function(){
			if ($(this).is(':hidden')) {
				showSpeakers.html('Все спикеры');
			}
			else {
				showSpeakers.html('Скрыть');
			}
		});
	});

	//Плавный скролл

	$(".main-nav__link, .buy-ticket").click(function(e){
		e.preventDefault();
		$("html, body").animate({
			scrollTop: $($(this).attr("href")).offset().top + "px"
		}, 1000	, function(){
			scrolling = false;
		});
		return false;

	});

});