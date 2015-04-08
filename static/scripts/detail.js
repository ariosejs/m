/* use strict; */

$('.detail-showmore-act').on('click',function(e){
	e.preventDefault();
	$(this).hide();
	$(this).next('.detail-info-more').show();
});



window.detail_slider = new Swipe(document.getElementById('detail_slider'), {
	callback : function(i){
		$('#detail_slider .dot').children().eq(i).addClass('cur').siblings().removeClass('cur');
	}
  
});

$('.anxin a').click(function(e){
	e.preventDefault();
	if($(this).children('img').attr('data-img-list')){
	var imgViewDate = $(this).children('img').attr('data-img-list').split(';');
		for (var i = 0; i < imgViewDate.length; i++) {
			$('.imgView ul').append('<li><img src="'+ imgViewDate[i] +'"></li>')
		};
		$('body').addClass('disableScorll');
	$('.imgView').show();
	}
})
$('.imgView a.close').click(function(e){
	e.preventDefault();
	$('body').removeClass('disableScorll');
	$('.imgView').hide();
	$('.imgView ul').html('');
});