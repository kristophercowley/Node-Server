var express = require('express');
var myFunctions = require('./myFunctions')
var another = require('./another')
var bodyParser = require('body-parser');
var server = express();
var port = 8080;

server.use(express.static(__dirname + '/public'))

server.listen(port,function(){
    console.log("The server is running on port: " , port)
    
})

server.use('/page1',function(req,res,er){
    res.send('<h1>WTF</h1>')
})

myFunctions.sayHello()
myFunctions.countPrint()
another.test1()
another.test2()
another.test3()