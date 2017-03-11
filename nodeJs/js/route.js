var http = require('http');
var url = require('url');
var router = require('./module/router.js');

http.createServer(function(req,res){
    if(req.url !== '/favicon.ico'){
        var pathname = url.parse(req.url).pathname;
        console.log(pathname);
        // 替换掉前面的/
        pathname = pathname.replace(/\//,'');
        console.log(pathname);
        router[pathname](req,res);
//        res.end('');
    }
    
}).listen(3000);
console.log('Http server is listening at port 3000.');


