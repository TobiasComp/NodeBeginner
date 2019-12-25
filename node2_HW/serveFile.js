

var fs = require('fs')
exports.getFile = function(filename, callback){
        fs.readFile(filename, function(err, data){
            callback(data);
        });
}