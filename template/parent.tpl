<!doctype html>
<html>
    <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width,initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0,user-scalable=no"/>
        <title>{% block title %}{@appname@}{% endblock %}</title>
        <link rel="stylesheet" href="../../css/main.css" type="text/css" media="screen" />
    </head>
    <body class="{@appname@}">
        {% block content %}{% endblock %}
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
    <script type="text/javascript" src="../../js/{@appname@}.js"></script>
    {% block scripts %}{% endblock %}    
</html>

