/* use strict; */

if($('.layer-content') && $('.layer-content').height() > 110){
	$('.layer-content').addClass('layer-content-close');
	$('.layer-more').on('tap',function(e){
		e.preventDefault();
		$(this).prev().removeClass('layer-content-close');
		$(this).hide();
	});
}

if($('#slider_standard')){
	for (var i = 0; i < $('#slider_standard').find('li').length; i++) {
		$('#slider_standard .boxdot').append('<i></i>');
		if(i == 0){
			$('#slider_standard .boxdot i').addClass('cur');
		}

	};
}

window.slider_standard = new Swipe(document.getElementById('slider_standard'), {
	callback : function(i){
		$('#slider_standard .boxdot').children().eq(i).addClass('cur').siblings().removeClass('cur');
	}
});
