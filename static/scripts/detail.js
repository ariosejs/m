/* use strict; */

$('.detail-showmore-act').on('click',function(e){
	e.preventDefault();
	$(this).hide();
	$(this).next('.detail-info-more').show();
});