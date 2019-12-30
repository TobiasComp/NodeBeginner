var mysql = require('mysql');


var con = mysql.createConnection({
    host: "127.0.0.1",
    user: "root",
    password: "1q2w3e4r",
    database: "users",
    port: 3306
});

con.connect(function(err) {
    if (err) console.log("connect error", err);
    console.log("Connected to mysql!");
})



exports.askShuki = function (mysqlQuery, callback) {
    console.log('askShuki', mysqlQuery);

    con.query(mysqlQuery, function (err, result) {
        console.log("in the query",err);
        
        if (err) callback(err); 
        let json = JSON.stringify(result)
        console.log("Result: " + json);
        callback(json);
    });
}
