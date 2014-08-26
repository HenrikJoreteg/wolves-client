var Hapi = require('hapi');
var moonboots = require('moonboots_hapi');
var config = require('getconfig');
var templatizer = require('templatizer');


var server = Hapi.createServer(3000, 'localhost');

server.pack.register({
    plugin: moonboots,
    options: {
        appPath: '/{p*}',
        moonboots: {
            main: __dirname + '/client/app.js',
            developmentMode: config.isDev,
            beforeBuildJS: function () {
                templatizer(__dirname + '/templates', __dirname + '/client/templates.js');
            },
            stylesheets: [
                __dirname + '/assets/bootstrap.css'
            ]
        }
    }
}, function () {
    console.log('running server at http://localhost:3000');
    server.start();
});
