var http = require('http');
var User=require('./module/User');
var Teacher=require('./module/Teacher');
var Student = require('./module/Student');

http.createServer(function(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    
    if(req.url !== '/favicon.ico'){
        user = new User('01','李四',22);
        user.enter();
        teacher = new Teacher('02','张三',37);
        teacher.teach(res);
        teacher.enter();
        student = new Student('03','王五',16);
        student.enter();
        student.doHomeWork(res);
        
        res.end('');
    }
}).listen(3000);
console.log('Http server is listening at port 3000.');

