var http = require('http');
var mysql = require('mysql');
var url = require('url');
var serveFile = require('./serveFile');

var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "Tuvia",
    password: "",
    database: "users",
    port: 3306
})

http.createServer(function(req,res){
    console.log("The server got the request");
    if (req.url == "/tuvia/"){
        serveFile.getFile('index.html', function(data){            
            res.end(data);
            
            
        })
    } else if (req.url == "/tuvia/api/users") {
        var sql = 'SELECT * FROM `users.users_table` '
        con.connect(function(err){
            if (err) res.end(err)
            
        })
        con.query(sql, function (err, result){
            if (err) res.end(err)
            let json = JSON.stringify(result);
            res.end(json);

        });

    } else
        res.end(req.url);
}).listen(8080);

