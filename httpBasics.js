console.log('create http server');

var http = require('http');

http.createServer(function (req, res) {
    console.log('http server got request');
    //console.log(req);
    
    res.writeHead(200, {
        'Content-Type': 'text/html',
        'ariel-type': 'teacxher'
    });
    res.end('<h1>Hello CLASS fullstackers!</h1>');
}).listen(8080);
