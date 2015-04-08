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
});