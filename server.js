console.log("create socket server");

// server
require('net').createServer( function(socket){
    console.log("connected");

    socket.on('data', function(data){
        console.log("client says (server input)",data.toString());
        
    })
    
}).listen(8080);
    
