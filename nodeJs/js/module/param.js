var http = require('http');
var url = require('url');
var router = require('./module/router');
var exception = require('./module/exception');

http.createServer(function(req,res){
    if(req.url !== './favicon.ico'){
        var pathname=url.parse(req.url).pathname;
        pathname=pathname.replace( /\// ,'');

        try{
            router[pathname](req,res);
//            var data = exception.exception(0);
//            res.write(data);
//            res.end('');
        }catch(err){
            console.log('处理错误：'+ err);
            res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
            res.write(err.toString());
            res.end('');
        }
        console.log('server执行完毕');
        
    }
}).listen(3000);
console.log('Http server is listening at port 3000.');