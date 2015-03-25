{% extends "../parent.tpl" %}
{% block styles %}
{% parent %}
{% endblock %}
{% block content %}
<div class="download"><a href="#" class="close"></a></div>
<header><a href="#" class="search-cancel">取消</a><a href="#" class="logo">春播</a><input type="text" class="search" placeholder="搜索春播商品"><a href="#" class="search-act">搜索</a></header>
<nav>
	<ul>
		<li class="on"><a href="#"><i class="nav-0"></i>首页</a></li>
		<li><a href="#"><i class="nav-1"></i>分类</a></li>
		<li><a href="#"><i class="nav-2"></i>菜谱</a></li>
		<li><a href="#"><i class="nav-3"></i>购物车<i class="num">2</i></a></li>
		<li><a href="#"><i class="nav-4"></i>我的春播</a></li>
	</ul>
</nav>
<div class="search-res">
	<h5>最近搜索</h5>
	<ul>
		<li><a href="#">红富士</a></li>
		<li><a href="#">红富士</a></li>
		<li><a href="#">红富士</a></li>
		<li class="del-search-key"><a href="#">删除搜索记录<i class="del">&times;</i></a></li>
	</ul>
</div>

<div class="slide" id="J_slider">
	<ul class="slide-img">
		<li><a href="#"><img src="images/slide.jpg" alt=""></a></li>
		<li><a href="#"><img src="http://s1.dwstatic.com/group1/M00/70/60/9a015d60ce56af98d44335972e9c79a2.jpg" alt=""></a></li>
		<li><a href="#"><img src="http://s1.dwstatic.com/group1/M00/73/68/477a69bc98b3ae72bcc51982ac47b2d1.jpg" alt=""></a></li>
		<li><a href="#"><img src="http://s1.dwstatic.com/group1/M00/74/3F/07670e31745ed71f2a62e8c6dafb9b0c.jpg" alt=""></a></li>
	</ul>
	<div class="slide-nav dot">
		<i></i><i></i><i></i><i></i>
	</div>
</div>
<ul class="new_hot mb">
	<li><a href="#"><i class="i-new"></i>新品上市</a></li>
	<li><a href="#"><i class="i-hot"></i>火热促销</a></li>
</ul>

<div class="today mb">
	<a href="#"><img src="/public/0.1.0/img/temp1.jpg" alt=""><i class="more"></i></a>
</div>

<div class="good">
	<h4><a href="#">好货推荐<i class="more"></i></a></h4>
	<ul class="good-list">
		<li>
			<a href="#"><img src="/public/0.1.0/img/temp2.jpg" alt="">
			<h5><a href="">优选荷兰青啤梨</a></h5>
			<p class="sub">欧盟标准 适合减肥人群</p>
			<p class="sub">4粒装</p>
			<p class="price">&yen;<em>12.50</em><span>&yen;15.50</span></p>
			<a href="#" class="icon i-cart"></a>
		</li>
		
	</ul>
</div>
<div class="layer">
	<h3>新鲜水果<hr></h3>
	<a href="#" class="layer-img"><img src="" alt=""></a>
	<ul class="layer-list">
		<li>
			<a href="#"><img src="" alt=""><h5>台湾茂谷柑</h5></a>
			<p class="sub">4粒装</p>
			<p class="price">&yen;<em>12.50</em><span>&yen;15.50</span></p>
			<a href="#" class="icon i-cart"><i>2</i></a>
		</li>
		<li>
			<a href="#"><img src="" alt=""><h5>台湾茂谷柑</h5></a>
			<p class="sub">4粒装</p>
			<p class="price">&yen;<em>12.50</em><span>&yen;15.50</span></p>
			<a href="#" class="icon i-cart"><i>2</i></a>
		</li>
		<li>
			<a href="#"><img src="" alt=""><h5>台湾茂谷柑</h5></a>
			<p class="sub">4粒装</p>
			<p class="price">&yen;<em>12.50</em><span>&yen;15.50</span></p>
			<a href="#" class="icon i-cart"><i>2</i></a>
		</li>
		<li>
			<a href="#"><img src="" alt=""><h5>台湾茂谷柑</h5></a>
			<p class="sub">4粒装</p>
			<p class="price">&yen;<em>12.50</em><span>&yen;15.50</span></p>
			<a href="#" class="icon i-cart"><i>2</i></a>
		</li>
		<li>
			<a href="#"><img src="" alt=""><h5>台湾茂谷柑</h5></a>
			<p class="sub">4粒装</p>
			<p class="price">&yen;<em>12.50</em><span>&yen;15.50</span></p>
			<a href="#" class="icon i-cart"><i>2</i></a>
		</li>
		<li class="more">
			<a href="#"><img src="" alt=""></a>
		</li>
	</ul>
</div>

{% endblock %}
{% block scripts %}
{% parent %}
{% endblock %}