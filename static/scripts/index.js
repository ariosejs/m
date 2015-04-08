/* use strict; */

function searchAct(){
	$('.search,.search-cancel,.search-res').show();
	$('.search-act').show();
	$('.search-act-icon').hide();
	$('body').addClass('disableScorll');
	$('.search-cancel').on('click',function(e){
		e.preventDefault();
		$('.search,.search-cancel,.search-res').hide();
		$('.search-act').hide();
		$('.search-act-icon').show();
		$('body').removeClass('disableScorll');
	});
}
$('.search-act-icon').on('click',function(e){
	e.preventDefault();
	searchAct();
});

// $('#J_slider').swipeSlide({
// 	continuousScroll:false,
// 	speed : 3000,
// 	transitionType : 'cubic-bezier(0.22, 0.69, 0.72, 0.88)',
// 	autoSwipe: false,
// 	callback : function(i){
// 		$('#J_slider .dot').children().eq(i).addClass('cur').siblings().removeClass('cur');
// 	}
// });
// $('#J_slider_box').swipeSlide({
// 	continuousScroll:true,
// 	speed : 3000,
// 	transitionType : 'cubic-bezier(0.22, 0.69, 0.72, 0.88)',
// 	autoSwipe: false,
// 	callback : function(i){
// 		$('#J_slider_box .dot').children().eq(i).addClass('cur').siblings().removeClass('cur');
// 	}
// });

window.J_slider = new Swipe(document.getElementById('J_slider'), {
	auto: 3000,
	callback : function(i){
		$('#J_slider .dot').children().eq(i).addClass('cur').siblings().removeClass('cur');
	}
  
});
window.J_slider_box = new Swipe(document.getElementById('J_slider_box'), {
	callback : function(i){
		$('#J_slider_box .boxdot').children().eq(i).addClass('cur').siblings().removeClass('cur');
	}
});
