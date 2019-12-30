var http = require('http');
var mysql = require('mysql');
var url = require('url');
var serveFile = require('./serveFile');
var shuki = require('./shukiDB');

/*
var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "1q2w3e4r",
    database: "users",
    port: 3306
})

con.connect(function(err){
    if (err) {
        console.log("error in the connection",err); 
        res.end(err)
    }
})*/

http.createServer(function(req,res){
    console.log("The server got the request");
    if (req.url == "/tuvia/"){
        serveFile.getFile('index.html', function(data){            
            res.end(data);   
        })
    } else if (req.url == "/tuvia/api/users") {
        
        var sql = 'SELECT * FROM `user_table` '
        shuki.askShuki(sql, function(err, result){
            if (err) {
                console.log("error in the query",err);
                res.end(err)
            }
            let json = JSON.stringify(result);
            res.end(json);
        });

    } else if (req.url.startsWith('/tuvia/api/users/')) {
        //if its 'api/users' return api res
        let sql = 'SELECT * FROM `user_table`'
        let id = req.url.split('/tuvia/api/users/')[1]
        sql += ' where id = ' + id + ';'
        shuki.askShuki(sql, function(json){
            res.end(json)
        })
    } else
        res.end(req.url);
}).listen(8080);

