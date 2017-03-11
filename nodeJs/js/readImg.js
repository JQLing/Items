var http = require('http');
var optfile = require('./module/optfile');

http.createServer(function(req,res){
    if(req.url !== '/favicon.ico'){
        console.log('访问');
        optfile.readImg('../images/content1.jpg',res);
        console.log('继续执行');
//        res.end('hello,www！');
    }
    
}).listen(3000);
console.log('Http server is listening at port 3000.');