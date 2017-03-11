var http = require('http');
var events = require('events');
var UserBean =  require('./UserBean');

http.createServer=function(req,res){
    res.writeHeader(200,{'Content-Type':'text/html;utf-8'});
    if(req.url!=='./favicon.ico'){
        var user = new UserBean();
        user.eventEmit.once('registerSuccess',function(uname,pwd){
            res.write('注册成功');
            console.log('传来uname:'+uname);
            console.log('传来pwd:'+pwd);
            user.login(req,res);
            res.end();
        });//注册监听
//        user.eventEmit.once('registerFailed',function(uname,pwd){
//            res.write('失败');
//            res.end();
//        });
        
        user.register(req,res);
    }
}.listen(8000)
console.log('Server running at port:8000');














