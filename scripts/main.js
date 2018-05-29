function slider() {
	$('.heroSlider').slick({
		autoplay: true,
		autoplaySpeed: 2000,
		speed: 1500,
		dots: true,

  });
}

function switchQuotes() {
	var quoteItems = $('.quote');
	if(quoteItems.length < 1) {
		return false;
	} else {
		function getRandomItem(){
		    return quoteItems.eq(Math.floor(quoteItems.length * Math.random()));
		}
		quoteItems.hide();
		getRandomItem().show();

		setInterval(function(){ 
		    var current = quoteItems.filter(':visible');
		    var next = getRandomItem();
		    while (next.index() == current.index()) {
		    	next = getRandomItem();
		    }
		    current.fadeOut(1000, function(){
		        next.fadeIn(1000);
		    });
		}, 7000);
	}
}

function modalImage() {
	var modal = $('.overlay');
	var modalImg = $('.modalContent');

	$('.imgCol').click(function() {
		modal.show();
		modalImg.hide();
		var imgSrc = $(this).find('img').attr('src');
		modalImg.attr('src', imgSrc).show(500);
	});
	$('#modalWindow a').click(function() {
		modal.hide();
		modalImg.hide();
	}); 
}

function filterImg(){
	$('.filterContainer li').click(function() {
		var filterValue = $(this).attr("data-filter");
		console.log(filterValue);
		if (filterValue == 'all') {
			$('.imgCol').show(1000);
		} else {
			$('.imgCol').not('.' + filterValue).hide(1000);
			$('.imgCol').filter('.' + filterValue).show(1000);
		}
		$(this).attr('id', 'active').siblings().attr('id', '');
	});
}

function toggleMenu() {
	$('.menuToggle').click(function() {
		$(this).toggleClass('close');
		$('#menu').slideToggle(500);
	});
}

$(document).ready(function() {
	slider();
	switchQuotes();
	modalImage();
	filterImg();
	toggleMenu();
})