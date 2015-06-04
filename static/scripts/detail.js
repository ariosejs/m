/* use strict; */

$('.wx-share-layer').on('tap',function(e){
    e.preventDefault();
    $(this).hide();
});

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

$('.anxin a').on('tap',function(e){
	e.preventDefault();
	if($(this).children('img').attr('data-img-list')){
    $('.imgView ul').html('');
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
// getCartListByProduct_m();

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