/* use strict; */

function searchAct(){
	$('.search-cancel,.search-res').show();
	$('.back,.search-filter-act').hide();
	$('.search-act').addClass('on');
	$('body').addClass('disableScorll');
	$('.search-cancel').on('click',function(e){
		e.preventDefault();
		$('.search-cancel,.search-res').hide();
		$('.back,.search-filter-act').show();
		$('.search-act').removeClass('on');
		$('body').removeClass('disableScorll');
	});
}
$('input.search ').on('focus',function(e){
	e.preventDefault();
	searchAct();
});


function categoryLayer(){
	if($('.category-layer').is(':hidden')){
		$('body').addClass('disableScorll');
		$('.category-layer').show();
		$('.cate-list-tit').addClass('category-open');
	}else{
		$('body').removeClass('disableScorll');
		$('.category-layer').hide();
		$('.cate-list-tit').removeClass('category-open');
	}
	$('.category-layer .close').on('click',function(e){
		e.preventDefault();
		$('body').removeClass('disableScorll');
		$('.category-layer').hide();
		$('.cate-list-tit').removeClass('category-open');
	});
}
$('.cate-list-tit').on('click',function(e){
	e.preventDefault();
	categoryLayer();
});

$('.search-filter-act').on('click',function(e){
	e.preventDefault();
	$('body').addClass('disableScorll');
	$('.filter-layer').css('display','block');
});
$('.filter-layer .header-back').click(function(e){
	e.preventDefault();
	$('body').removeClass('disableScorll');
	$('.filter-layer').css('display','none');
});

