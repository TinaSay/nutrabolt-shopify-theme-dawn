jQuery(document).ready(function($){
	console.log("document ready");

	var draggable = false;
	var prevNextButtons = true;
	if ($(window).width() < 768) {
		draggable = true;
		prevNextButtons = false;
	}
	$(".announcement-bar__message-wrapper").flickity({
		draggable: draggable,
		pageDots: false,
		autoplay: true,
		prevNextButtons: prevNextButtons,
		arrowShape: { 
		  x0: 10,
		  x1: 60, y1: 50,
		  x2: 70, y2: 40,
		  x3: 30
		}
	});
});