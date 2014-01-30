var $items = $('.carousel-items img');
var $dipper = $('.dipper');

$('.dipper-section').waypoint(function () {
	$dipper.addClass('js-dipper-animate');
}, { offset: '60%' });

var switchItems = function (outgoing, incoming) {
	$items.eq(incoming).attr('data-state', 'incoming').fadeIn(250, function () {
	$items.eq(outgoing).attr('data-state', '').hide();
	$items.eq(incoming).attr('data-state', 'current');
});
};

$items.filter(':not([data-state="current"])').hide();

$('.next').on('click', function () {
	var current = $items.filter('[data-state="current"]').index();
	var next = current + 1;
	
	if (next >= $items.length) {
		next= 0;
	}
	
	switchItems(current, next);
});

$('.previous').on('click', function () {
	var current = $items.filter('[data-state="current"]').index();
	var next = current - 1;
	
	if (next >= $items.length) {
		next= 0;
	}
	
	switchItems(current, next);
});

var $dialog = $('#video');
var $placeholder = $('#video-placeholder');

dialogPolyfill.registerDialog($dialog.get(0));

$('#btn-open').on('click', function () {
	$dialog.get(0).showModal();
	$placeholder.html('<iframe src="http://player.vimeo.com/video/81295241?color=ffffff&amp;autoplay=1" width="500" height="281" frameborder="0" webkitallowfullscreen mozallowfullscreen allowfullscreen></iframe>');

$dialog.get(0).showModal();

});

$('#btn-close').on('click', function () {
	$dialog.get(0).close();
	$placeholder.html('');
})
