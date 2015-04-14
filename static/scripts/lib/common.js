$(function(){
	if($('nav').length == 1){
		var _defautlTop = $('header').height();
		window.onscroll = function(){
		    if(document.body.scrollTop > _defautlTop){
		       $('body').addClass('navFixed');
		    }else{
		       $('body').removeClass('navFixed');
		    }
		}
	}

	// 欢迎页
	if (!localStorage.welcome) {
		$('body').append('<div id="welcome"><i></i><a href="javascript:void(0)">close</a></div>').addClass('disableScorll');
		$('#welcome').animate({
				opacity: 1
			},400);
		$('#welcome i').animate({
				translate:'0,0'
			},300);
		$('#welcome a').on('tap',function(){
			$(this).parent().animate({
				opacity: 0
			},400,function(){
				$(this).remove();
				$('body').removeClass('disableScorll');
			});
			$('#welcome i').animate({
				translate:'0,800px'
			},300);
			localStorage.welcome = 'showed';
		});
	}
});