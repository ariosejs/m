/* use strict; */

$('#fxjj').on('click',function(e){
	e.preventDefault();
	$('#invite-card').show();
	$('body').addClass('disableScorll');
});
$('.cancel').click(function(e){
	e.preventDefault();
	$('.dialog').hide();
	$('body').removeClass('disableScorll');
});

$('.share-sms').click(function(e){
	e.preventDefault();
	$('#share-sms').show();
});
$('.share-mail').click(function(e){
	e.preventDefault();
	$('#share-mail').show();
});

$('.invite-nav li a').click(function(e){
	e.preventDefault();
	$(this).parents('ul').children('li').removeClass('on');
	$(this).parent().addClass('on');
	$('.invite-log').hide();
	$('.'+$(this).parent().attr('_value')).show();
});