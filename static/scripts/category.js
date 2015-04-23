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
		// $('body').addClass('disableScorll');
		$('.category-layer').show();
		$('.filter-bar,.layer').hide();
		$('.cate-list-tit').addClass('category-open');
	}else{
		$('body').removeClass('disableScorll');
		$('.category-layer').hide();
		$('.filter-bar,.layer').show();
		$('.cate-list-tit').removeClass('category-open');
	}
	$('.category-layer .close').on('click',function(e){
		e.preventDefault();
		$('body').removeClass('disableScorll');
		$('.category-layer').hide();
		$('.filter-bar,.layer').show();
		$('.cate-list-tit').removeClass('category-open');
	});
}
$('.cate-list-tit').on('tap',function(e){
	e.preventDefault();
	categoryLayer();
});

$('.search-filter-act').on('tap',function(e){
	e.preventDefault();
	$('body').addClass('disableScorll');
	$('.filter-layer').css('display','block');
});
$('.filter-layer .header-back').on('tap',function(e){
	e.preventDefault();
	$('body').removeClass('disableScorll');
	$('.filter-layer').css('display','none');
});


//取得购物车列表
var getCartListByProduct_m = function () {
    var layer_list = $(".layer-list");
    var layer_list2 = $(".layer-list2");

    //取得当前页面的全部pid
    var product_ids = [];

    layer_list.find("li").each(function () {
        product_ids.push($(this).attr("data-product-id"));
    });
    layer_list2.find("li").each(function () {
        product_ids.push($(this).attr("data-product-id"));
    });

    $.ajax({
        type: 'post',
        dataType: 'json',
        url: "/Cart/getCartProductNum",
        contentType: "application/x-www-form-urlencoded; charset=utf-8",
        data: {product_id: product_ids.join(",")},
        success: function (returnData) {
            if (returnData["flag"] == 1) {
                $.each(returnData["data"], function (pid, stock_count) {
                    layer_list.find("li[data-product-id='" + pid + "']").find(".i-cart").html("<i>" + stock_count + "</i>");
                    layer_list2.find("li[data-product-id='" + pid + "']").find(".i-cart").html("<i>" + stock_count + "</i>");

                });
            }
        }
    });
};
getCartListByProduct_m();

$('.i-cart').on("tap", function () {
    var thisDom = $(this);  //当前dom
    var pid = thisDom.parent().attr("data-product-id");
    thisDom.append('<div class="cart-loading"></div>');
    add_cart_fly_m(pid, 1, "", function (d) {
    	if(d.status == 1){
    		alerts(d.info,'succ');
    		getCartListByProduct_m();//重新遍历购物车数量
    	}else{
    		alerts(d.info,'warn');
    	}
    	setTimeout(function(){
    		$('.cart-loading').remove();
    	}, 1000);
        
    });
});
