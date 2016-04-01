(function ($) {
	$(function () {
		$('.button-collapse').sideNav();
		$('.parallax').parallax();
		$('.slider').slider({
			full_width: true,
			height: 800
		});
		$(".dropdown-button").dropdown();
		$('select').material_select();
		$('nav').pushpin({
			top: 0,
			offset: 0,
		});
		$('input#input_text, textarea#textarea1').characterCounter();

	}); // end of document ready
})(jQuery); // end of jQuery name space