var http=require('http');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html; charset=utf-8'});
    if(req.url !== "/favicon.ico"){ //清除第二次访问
        console.log('访问');
        res.write('<h1>Node.js</h1>');
        res.end('<p>Hi,nice to meet you ! </p>');
    }
    
    
}).listen(3000);
//127.0.0.1:3000 或者 localhost:3000
console.log('Http server is listening at port 3000.');