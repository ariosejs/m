<!doctype html>
<html>
    <head>
        <meta charset="utf-8" />
        <title>{% block title %}{@appname@}{% endblock %}</title>
        <link rel="stylesheet" href="/public/0.1.0/css/main.css" type="text/css" media="screen" />
    </head>
    <body class="{@appname@}">
        <header>
            header
        </header>
        {% block content %}{% endblock %}
        <footer>
            footer
        </footer>
    </body>
    <script type="text/javascript" src="/public/0.1.0/js/common.js"></script>
    <script type="text/javascript" src="/public/0.1.0/js/{@appname@}.js"></script>
    {% block scripts %}{% endblock %}    
</html>

