jQuery(document).ready(function($){
	console.log("document ready");

	if($(".announcement-bar__message-wrapper").length > 0) {
		var draggable = false;
		var prevNextButtons = true;
		if ($(window).width() < 768) {
			draggable = true;
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

		$(".announcement-bar__message-wrapper").css("visibility", "visible");
	}
	

	if($(".image-banner-slider").length > 0) {
		$(".image-banner-slider").flickity({
			draggable: draggable,
			pageDots: true,
			autoplay: true,
			prevNextButtons: false
		});
	}	

	if($(window).width() < 768) {
		$(".multicolumn .slider").flickity({
			draggable: draggable,
			pageDots: true,
			autoplay: true,
			prevNextButtons: false
		});
	}

	if($(".productline-slider").length > 0) {
		for( var i = 0; i < $(".productline-slider").length; i ++ ) {
			var slider = $(".productline-slider").eq(i);

			var maxh = 0;
			for( var j = 0; j < slider.find(".productline-item").length; j ++ ) {
				var item = slider.find(".productline-item").eq(j);

				if( maxh < item.height() ) {
					maxh = item.height();
				}
			}

			slider.find(".productline-item").height(maxh);

			slider.flickity({
				draggable: draggable,
				pageDots: true,
				prevNextButtons: false,
				contain: true
			});
		}
	}
});