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

	if ($(".media-thumbnails").length > 0) {
		$(window).on("load", function() {
			for( var i = 0; i < $(".media-thumbnails").length; i ++ ) {
				var slider = $(".media-thumbnails").eq(i);

				slider.flickity({
					draggable: true,
					prevNextButtons: true,
					pageDots: false,
					contain: true,
					cellAlign: 'center',
					groupCells: '100%',
					arrowShape: { 
					  x0: 10,
					  x1: 60, y1: 50,
					  x2: 70, y2: 40,
					  x3: 30
					}
				});

				slider.css("opacity", 1);
			}
		});
	}

	$(".media-thumbnails .thumb a").click(function(e) {
		$(this).parents(".media-thumbnails").find(".thumb").removeClass("active");
		$(this).parent().addClass("active");

		var mediaid = $(this).attr("data-target-media-id");
	    var targetMedia = $("[data-media-id='" + mediaid + "']");

	    if (!targetMedia) { return; } 
	    
	    targetMedia.prependTo(targetMedia.parent());
	});

	$(window).on("customvariantChange", function(e) {
		console.log("customvariantChange");
		console.log(e);

		var data_section = $("variant-radios").attr("data-section");
		var mediaid = data_section + '-' + e.detail.variant.featured_media.id;

		console.log(mediaid);
		console.log($("[data-target-media-id='" + mediaid + "']"));
		$(".media-thumbnails .thumb").removeClass("active");
		var activethumb = $("[data-target-media-id='" + mediaid + "']").parent();
		activethumb.addClass("active");

		$(".media-thumbnails").flickity("selectCell", activethumb.index());
	});

	// console.log($(".product-recommendations"));
	// console.log($(".product-recommendations .product-grid"));
	// if ($(window).width() < 750 && $(".product-recommendations .product-grid").length > 0) {
	// 	for( var i = 0; i < $(".product-recommendations .product-grid").length; i ++ ) {
	// 		var slider = $(".product-recommendations .product-grid").eq(i);

	// 		slider.flickity({
	// 			draggable: true,
	// 			prevNextButtons: true,
	// 			pageDots: false,
	// 			contain: true,
	// 			cellAlign: 'center',
	// 			arrowShape: { 
	// 			  x0: 10,
	// 			  x1: 60, y1: 50,
	// 			  x2: 70, y2: 40,
	// 			  x3: 30
	// 			}
	// 		});

	// 		slider.css("opacity", 1);
	// 	}
	// }

	$(".product-form__input .flavor_dropdown input[type=radio]+label").click(function(e) {
		var html = $(this)[0].outerHTML;

		var option_selected = $(this).parents(".product-form__input").find(".flavor_option_selected");
		option_selected.empty().html(html);
		option_selected.removeClass("opened");
		$(this).parents(".product-form__input").find(".flavor_dropdown").removeClass("opened");
	});

	$(document).on("click", ".flavor_option_selected", function(e) {
		var dropdown = $(this).parents(".product-form__input").find(".flavor_dropdown");
		if($(this).hasClass("opened")) {
			dropdown.removeClass("opened");
			$(this).removeClass("opened");
		}
		else {
			dropdown.addClass("opened");
			$(this).addClass("opened");
		}
	});

	if($(".flavor_dropdown").length > 0) {
		$(".flavor_dropdown input[type=radio]:checked+label").trigger("click");
	}

	$(document).on("click", ".accordion-item .accordion-item-title", function(e) {
		var item = $(this).parent();

		if (item.hasClass("active")) {
			item.find(".accordion-item-text").slideUp(200);
			item.removeClass("active");
		}
		else {
			item.find(".accordion-item-text").slideDown(200);
			item.addClass("active");
		}
	});

	$(document).on("click", ".mobile_accordion-item .mobile_accordion-item-title", function(e) {
		var item = $(this).parent();

		if (item.hasClass("active")) {
			item.find(".mobile_accordion-item-content").slideUp(200);
			item.removeClass("active");
		}
		else {
			item.find(".mobile_accordion-item-content").slideDown(200);
			item.addClass("active");
		}
	});
});