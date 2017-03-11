var optfile = require('./optfile');
var url = require('url');
var querystring = require('querystring');

function getRecall(req,res){
    res.writeHead(200,{'Content-Type':'text/html;charset=utf-8'});
    function recall(data){
        res.write(data);
        res.end('');
    }
    return recall;
}

module.exports = {
    login:function(req,res){
//        get方式接收数据
/*
        var data = url.parse(req.url,true).query;
        console.log(data);
        if(data['username']!=undefined){
            console.log(data['username']);
            console.log(data['password']);
        }
*/
        
//    post方式接收数据
    var post='';
    req.on('data',function(chunk){
        post += chunk;
});
    req.on('end',function(){
        post = querystring.parse(post);
//        console.log('username: '+post['username']+'\n');
//        console.log('password: '+post['password']+'\n');
//        recall=getRecall(req,res);
        arr =['username','password'];
        function recall(data){
            dataStr = data.toString();
            for(var i=0;i<arr.length;i++){
                re = new RegExp('{'+arr[i]+'}','g'); // /\{name\}/g
                dataStr = dataStr.replace(re,post[arr[i] ]);
            }
            res.write(dataStr);
            res.end('');
        }
        optfile.readfile('../html/login.html',recall);
    });        
    },
    logout:function(req,res){
        getRecall(req,res);
        optfile.readfile('../html/logout.html',recall);
    },
    writefile:function(req,res){
        function recall(data){
            res.write(data);
            res.end('');
        }
        optfile.writefile('../html/today.txt',recall);
    },
    'images/content1.jpg':function(req,res){
        res.writeHead(200,{'Content-Type':'image/jpeg'});
        
//        不能向客户端输出任何字节
//    res.write('hello,world');
        
        optfile.readImg('../images/content1.jpg',res);
    }
}
