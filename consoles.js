


console.log("hello to the READER app");

const readline = require("readline");

const r1 = readline.createInterface({
    input: process.stdin,
    output: process.stdout
})

r1.setPrompt('guess> ');
console.log("this is before ");

r1.prompt();
r1.on('line', function(line){
    if (line === 'right')
        r1.close();
    console.log("so - this is what you said - " + line);
    r1.prompt();    
}).on('close',function(){
    process.exit(0);
})
