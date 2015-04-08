<!doctype html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no"/>
        <title>invite</title>
        <link rel="stylesheet" href="../../css/main.css" type="text/css" media="screen" />
    </head>
    <body class="invite">
<div class="download"><a href="#" class="close"></a></div>
<header><a href="#" class="back"></a><h1>赚取分享基金</h1><a href="log.html" class="link-right">返现明细</a></header>
<!-- 未绑定时显示 warp-invite-bind -->
<div class="warp-invite-bind">
	<div class="invite-box">
		<h4>给好友发红包 拿10元返现</h4>
		<p>向您的好友发放<b>&yen;10.00</b>春播红包，当TA使用完红包后，您将获得<b>&yen;10.00</b>春播券返现（最多可发20人）。</p>
		<a href="help.html">分享基金规则 &raquo;</a>
	</div>
    <!-- <h5>快分享给你的好朋友们：</h5>
    <a href="#" class="btn-red">给好友发红包</a> -->
    <h5>快来绑定基金卡：</h5>
    <a href="#" class="btn-green" id="fxjj">我有分享基金卡</a>
    <a href="#" class="text">如何获得分享基金卡？</a>
    <h6>您已获得累计<b>&yen;1000.00</b>的春播余额</h6>
</div>
<!-- 已绑定时显示 warp-invite-share -->
<div class="warp-invite-share">
    <h4>恭喜您已获得春播<b>&yen;1000</b>元分享基金！</h4>
    <p>您可以向您的10位好友每人赠送一个100元春播红包，在以下列表添加好友手机号或邮箱并点击“发送”即可。每位好友消费完100元红包后，您将获得等额返现，最高累计金额为1000元。发出红包后别忘了提醒TA哦，快和朋友们一起享受春播的健康美食吧！</p>
    <a href="help.html" class="text">分享基金规则及注意事项 &raquo;</a>
    <h5>快分享给你的好朋友们：</h5>
    <ul class="share-box">
        <li><a href="#" class="share-sms"><i></i>短信</a></li>
        <li><a href="#" class="share-mail"><i></i>邮件</a></li>        
    </ul>
</div>
	<div class="dialog" id="invite-card">
        <div class="mask"></div>
        <div class="dialog-content">
            <div class="inviteBox">
                <input type="text" class="text" placeholder="请输入分享基金卡上的邀请码">
                <input type="text" class="text" placeholder="请输入您的名字让朋友知道">
            </div>
            <div class="dialog-act">
                <a href="#" class="cancel">取消</a>
                <a href="#" class="submit">绑定</a>
            </div>
        </div>
    </div>
    <div class="dialog" id="share-sms">
        <div class="mask"></div>
        <div class="dialog-content">
            <div class="shareBox">
                <h6>通过手机发送红包：</h6>
                <input type="text" class="text" placeholder="输入好友手机号">
                <p class="sub">您已发出1个红包，前10名注册好友可获得</p>
            </div>
            <div class="dialog-act">
                <a href="#" class="cancel">取消</a>
                <a href="#" class="submit">发送</a>
            </div>
        </div>
    </div>
    <div class="dialog" id="share-mail">
        <div class="mask"></div>
        <div class="dialog-content">
            <div class="shareBox">
                <h6>通过邮箱发送红包：</h6>
                <input type="text" class="text" placeholder="输入好友邮箱">
                <p class="sub">您已发出1个红包，前10名注册好友可获得</p>
            </div>
            <div class="dialog-act">
                <a href="#" class="cancel">取消</a>
                <a href="#" class="submit">发送</a>
            </div>
        </div>
    </div>
		<footer>
            <div class="footer-tool">
                <a href="#" class="toTop">回到顶部</a>
                <a href="#">登录</a>|<a href="#">注册</a>    
            </div>
            <a href="#" class="on">触屏版</a>|<a href="#">电脑版</a>
            <p class="copyright">Copyright 2014 m.chunbo.com</p>
        </footer>
    </body>
    <script type="text/javascript" src="../../js/common.js"></script>
    <script type="text/javascript" src="../../js/invite.js"></script>
</html>