$(function(){
	// FastClick.attach(document.body);

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
	var noWelcome = window.noWelcome || '';
	// 欢迎页
	if (!localStorage.welcome && !$.fn.cookie('welcome') && !noWelcome) {
		$('body').append('<div id="welcome"><i></i><a href="javascript:void(0)">close</a></div>').addClass('disableScorll');
		$('#welcome').animate({
				opacity: 1
			},400);
		$('#welcome i').animate({
				translate:'0,0'
			},300);
		$('#welcome a,#welcome').on('tap',function(){
			$('#welcome').animate({
				opacity: 0
			},400,function(){
				$('#welcome').remove();
				$('body').removeClass('disableScorll');
			});
			$('#welcome i').animate({
				translate:'0,800px'
			},300);
			localStorage.welcome = 'showed';
			$.fn.cookie('welcome', 'showed', { expires: 365 });
		});
	}
	// alert
	window.alerts = function(cont,type){
		$('body').append('<div id="alert" class="alert-'+type+'"><i></i>'+cont+'</div>');
		setTimeout(function(){
			$('#alert').animate({
				opacity: 0
			},300,function(){
				$(this).remove();
			});
		}, 1000);
	}


});