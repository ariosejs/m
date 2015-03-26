'use strict';
var swig = require('swig');
var express = require('express');
var path = require('path');
var browserify = require('browserify-middleware');
var fs = require('fs');

// var app = express();
var app = module.exports.app = exports.app = express();

var appbase = path.join(__dirname);

app.engine('tpl' , swig.renderFile);
app.set('view engine' , 'tpl');
app.set('views' , appbase+'/template' );
app.set('view cache', false);
swig.setDefaults({varControls:['{@','@}'] , cache: false});

app.use( '/', express.static( path.join(appbase )));
app.use('/css', express.static(__dirname + '/build/m/0.1.0/css'));
app.use('/js', express.static(__dirname + '/build/m/0.1.0/js'));
app.use('/img', express.static(__dirname + '/build/m/0.1.0/img'));

app.get( '/', function(req,res){
    var appname = 'index';
    res.render( path.join(appname), {
        appname:appname
    });
});

app.get( /^\/(.+?)\/$/ , function(req,res){
    var appname = req.params[0];
    var tplname = 'index';
    res.render( path.join(appname , tplname) , {
        appname:appname,
        tplname: tplname
    } );
} );

app.get( /^\/(.+?)\/(.*?).html$/ , function(req,res){
    var appname = req.params[0];
    var tplname = req.params[1];
    res.render( path.join(appname , tplname) , {
        appname:appname,
        tplname: tplname
    } );
} );

app.get( /^\/(.*?)\.html$/ , function(req,res){
    var appname = req.params[0];
    res.render( path.join(appname) , {
        appname:appname
    } );
} );

app.get(/\/(\w+).json$/, function(req,res){
    fs.readFile(path.join(appbase , 'mock' , req.params[0].split('/').filter(function(item){return item.length ;}).join('.') + '.json') , function(err , data){
        if( err ){
            res.send(404);
        }else{
            res.set({
                'Content-Type': 'text/html'
            });
            res.send(data);
        }
            
    });
});

var port = 9988;
app.listen(port);
console.log('Server start at port ' + port);
