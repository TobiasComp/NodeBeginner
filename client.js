

console.log("create socket client");

// client
var s = require('net').Socket();
s.connect(8080);
s.write('Hello from client');
s.end();

