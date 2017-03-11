//http与https区别：https在http基础上添加SSL/TLS
var https = require('https');
var fs = require('fs');
//key:seil文件   cert:证书文件
var options ={
    key: fs.readFileSync('ssh_key.pem'),
    cert: fs.readFileSync('ssh_cert.pem'), 
}

https
    .createServer(options,function(req,res){
    res.writeHead(200);
    res.end('Bye')
    })
    .listen(8090)
