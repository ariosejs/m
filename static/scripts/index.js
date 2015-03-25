/* use strict; */

function searchAct(){
	$('.search,.search-cancel,.search-res').show();
	$('.search-act').addClass('on');
	$('body').addClass('disableScorll');
	$('.search-cancel').on('click',function(e){
		e.preventDefault();
		$('.search,.search-cancel,.search-res').hide();
		$('.search-act').removeClass('on');
		$('body').removeClass('disableScorll');
	});
}
$('.search-act').on('click',function(e){
	e.preventDefault();
	searchAct();
});

$('#J_slider').swipeSlide({
	continuousScroll:true,
	speed : 3000,
	transitionType : 'cubic-bezier(0.22, 0.69, 0.72, 0.88)',
	autoSwipe: false,
	callback : function(i){
		$('.dot').children().eq(i).addClass('cur').siblings().removeClass('cur');
	}
});
$('#J_nav').on('tap','.nav-logo',function(){
	var navWrap = $('#J_nav .nav-wrap');
	if( navWrap.hasClass('nav-spread') ){
		navWrap.removeClass('nav-spread').addClass('nav-shrink');
	}else{
		navWrap.removeClass('nav-shrink').addClass('nav-spread');
	}
});