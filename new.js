'use strict';

var path = require('path');
var fs = require('fs');


function main(){
    require('colors');

    var args = process.argv.slice(2);
    
    if(!args.length){
        console.log(('✖ Please specify app name.Exit.').red);
        process.exit(1);
    }

    var appname = args.shift();
    
    var apppath = path.join( process.cwd() , 'template' , appname );

    if( fs.existsSync(apppath) &&  fs.statSync( apppath ).isDirectory() ){
       console.log(('✖ App '+ appname + ' exists.Exit.').red);
        process.exit(1);
    }

    fs.mkdirSync(apppath);
    fs.writeFileSync( path.join(apppath, 'index.tpl') ,
                      '{% extends "../parent.tpl" %}\n{% block styles %}\n{% parent %}\n{% endblock %}\n{% block content %}\n\n'
                      +'{% endblock %}\n{% block scripts %}\n{% parent %}\n{% endblock %}' );
    fs.writeFileSync( path.join(apppath ,'..','..','static','scripts', appname+'.js'),'/* use strict; */' );
    fs.writeFileSync( path.join(apppath , '..','..','static','styles' , appname+'.less') , '\n' );

    console.log(('✔ All done.Enjoy your app.').green);
}




main();
