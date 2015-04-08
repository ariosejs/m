/* use strict; */

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