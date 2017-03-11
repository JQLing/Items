var http=require('http');
var otherfun= require('./module/otherfun');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    if(req.url !== '/favicon.ico'){
        fun1(res);
        console.log('fun1');
        
        otherfun.controller(req,res);
        otherfun.getVisit(res);
        
//        用字符串调用对应的函数
        funname='call';  // funname='add';
        otherfun[funname](res);
        //otherfun['add'](res);
        
        res.end('');
    }
}).listen(3000);
console.log('Http server is listening at port 3000.');

function fun1(res){
    res.write('hello,I am fun1.');
}